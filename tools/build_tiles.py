#!/usr/bin/env python3
"""Cut 16:9 face-framed card tiles from the tall character portraits.

The story cards on the chapter shelves are landscape; the portraits in
``<kingdom>/media/kingdoms/`` are 2:3. Letting CSS ``background-size: cover``
do the crop lops the head off. This finds the faces instead and cuts a 16:9
window that keeps them whole, writing ``<stem>_tile.png`` into
``<kingdom>/media/tiles/``.

    python3 tools/build_tiles.py                # only what is missing
    python3 tools/build_tiles.py --force        # recut everything
    python3 tools/build_tiles.py -k panch-nada  # one kingdom

Detection is YuNet (bundled ONNX) with Haar frontal/profile as a second pass;
portraits where nothing is found fall back to an upper-body crop, which is
where these renders put the subject anyway.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

import re

import cv2
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
# shared pool, used by the kingdoms that have no media/ folder of their own
POOL_SRC = ROOT / "targets" / "story-images"
POOL_OUT = ROOT / "targets" / "story-tiles"
MODELS = Path(__file__).resolve().parent / ".models"

IMG_EXT = (".png", ".jpg", ".jpeg", ".webp")
# art types that depict people and therefore deserve a face-framed tile
PEOPLE = {"hero", "villain", "ally", "operative", "crowd"}
TYPE_ALIASES = {"env": "environment", "people": "crowd", "char": "hero",
                "characters": "hero"}
# freeform-named art (the vijayanagara set) has no type token in the filename;
# these words in the stem mean the picture is of a person
PEOPLE_WORDS = ("hero", "villain", "ally", "shieldbearer", "ranger", "architect",
                "hermit", "seekers", "collectors", "daily-life")
ASPECT = 16 / 9
# where the eyeline should sit in the finished tile (a touch above centre —
# the classic poster crop, and what the hand-made tiles already do)
FACE_Y = 0.42
# no-face fallback: centre of the crop as a fraction of image height
FALLBACK_Y = 0.30
# a face should fill roughly this much of the tile's height; wide establishing
# shots get pushed in until it does
FACE_FILL = 0.20
# never crop below this width — past it the tile starts to look soft on a card
MIN_TILE_W = 848


def image_type(name: str) -> str:
    """Art type from a filename, matching the catalog's own convention."""
    m = re.match(r"^_?(?:alt_)?\d+-.+?_([a-z]+)_", name)
    if m:
        return m.group(1)
    prefix = re.split(r"[-_]", name.rsplit(".", 1)[0], maxsplit=1)[0].lower()
    return TYPE_ALIASES.get(prefix, prefix or "misc")


def depicts_people(name: str) -> bool:
    if image_type(name) in PEOPLE:
        return True
    stem = name.rsplit(".", 1)[0].lower()
    return (not re.match(r"^_?(?:alt_)?\d+-", name)      # freeform naming only
            and any(w in stem for w in PEOPLE_WORDS))


YUNET_URL = ("https://media.githubusercontent.com/media/opencv/opencv_zoo/main/"
             "models/face_detection_yunet/face_detection_yunet_2023mar.onnx")


def fetch_yunet() -> Path:
    """The detector model, downloaded once into tools/.models/ if absent."""
    path = MODELS / "face_detection_yunet_2023mar.onnx"
    if not path.is_file():
        import urllib.request

        print(f"fetching face model -> {path}")
        MODELS.mkdir(parents=True, exist_ok=True)
        urllib.request.urlretrieve(YUNET_URL, path)
    return path


class Faces:
    """YuNet first, Haar cascades as backup."""

    def __init__(self) -> None:
        yunet = fetch_yunet()
        self.yunet = (cv2.FaceDetectorYN.create(str(yunet), "", (320, 320), 0.6)
                      if yunet.is_file() else None)
        # some cv2 builds ship without the classic cascade module
        self.cascades = []
        if hasattr(cv2, "CascadeClassifier"):
            self.cascades = [c for c in (
                cv2.CascadeClassifier(str(MODELS / "haarcascade_frontalface_default.xml")),
                cv2.CascadeClassifier(str(MODELS / "haarcascade_profileface.xml")),
            ) if not c.empty()]

    @staticmethod
    def _principal(boxes: list[tuple[int, int, int, int]]) -> list[tuple[int, int, int, int]]:
        """Drop the background crowd.

        Wide shots come back with dozens of pinhead faces; letting them vote on
        the crop pulls it away from the subject the card is about. Keep only
        faces at least half the size of the biggest one.
        """
        if len(boxes) < 2:
            return boxes
        big = max(b[2] * b[3] for b in boxes)
        return [b for b in boxes if b[2] * b[3] >= big * 0.25]

    def detect(self, img: np.ndarray) -> list[tuple[int, int, int, int]]:
        h, w = img.shape[:2]
        boxes: list[tuple[int, int, int, int]] = []
        if self.yunet is not None:
            # portraits are ~850px wide; upscaling small ones helps YuNet a lot
            scale = max(1.0, 640 / max(w, 1))
            probe = (cv2.resize(img, (int(w * scale), int(h * scale)))
                     if scale > 1.0 else img)
            ph, pw = probe.shape[:2]
            self.yunet.setInputSize((pw, ph))
            _, dets = self.yunet.detect(probe)
            for d in dets if dets is not None else []:
                x, y, bw, bh = (float(v) / scale for v in d[:4])
                boxes.append((int(x), int(y), int(bw), int(bh)))
            boxes = self._principal(boxes)
        if not boxes:
            gray = cv2.equalizeHist(cv2.cvtColor(img, cv2.COLOR_BGR2GRAY))
            for cas in self.cascades:
                for x, y, bw, bh in cas.detectMultiScale(
                        gray, scaleFactor=1.08, minNeighbors=5,
                        minSize=(max(24, w // 24), max(24, w // 24))):
                    boxes.append((int(x), int(y), int(bw), int(bh)))
                if boxes:
                    break
        return boxes


def crop_box(img: np.ndarray, faces: list[tuple[int, int, int, int]]) -> tuple[int, int, int, int]:
    """The 16:9 window to keep, as (x, y, w, h)."""
    h, w = img.shape[:2]

    # Widest 16:9 window that still fits inside the source.
    cw, ch = (w, int(round(w / ASPECT))) if w / h < ASPECT else (int(round(h * ASPECT)), h)
    cw, ch = min(cw, w), min(ch, h)

    if faces:
        # Anchor on the largest face, but keep every face in frame if we can.
        big = max(faces, key=lambda f: f[2] * f[3])

        # Establishing shots leave the subject a speck in the widest window;
        # push in until the face reads at card size.
        if len(faces) == 1 and big[3] < ch * FACE_FILL:
            want_h = max(int(round(big[3] / FACE_FILL)),
                         int(round(MIN_TILE_W / ASPECT)))
            if want_h < ch:
                ch, cw = want_h, int(round(want_h * ASPECT))
                cw, ch = min(cw, w), min(ch, h)

        fy_c = big[1] + big[3] * 0.5
        fx_c = big[0] + big[2] * 0.5
        top, bottom = min(f[1] for f in faces), max(f[1] + f[3] for f in faces)
        left, right = min(f[0] for f in faces), max(f[0] + f[2] for f in faces)
        if bottom - top < ch * 0.8:
            fy_c = (top + bottom) * 0.5
        if right - left < cw * 0.8:
            fx_c = (left + right) * 0.5
        y = int(round(fy_c - ch * FACE_Y))
        x = int(round(fx_c - cw * 0.5))
        # never clip the hair off the top of the tallest head
        y = min(y, max(0, top - int(big[3] * 0.45)))
    else:
        y = int(round(h * FALLBACK_Y - ch * 0.5))
        x = (w - cw) // 2

    x = max(0, min(x, w - cw))
    y = max(0, min(y, h - ch))
    return x, y, cw, ch


def build(kingdom_filter: str | None, force: bool, dry_run: bool) -> int:
    faces = Faces()
    if faces.yunet is None and not faces.cascades:
        sys.exit(f"no face models in {MODELS} — see the download notes in this file")

    made = skipped = blind = 0

    # every kingdom's own art, plus the shared pool the media-less kingdoms use
    jobs: list[tuple[str, Path, Path]] = [
        (d.parent.parent.name, d, d.parent / "tiles")
        for d in sorted(CONTENT.glob("**/media/kingdoms"))
    ]
    if POOL_SRC.is_dir():
        jobs.append(("pool", POOL_SRC, POOL_OUT))

    for label, src_dir, out_dir in jobs:
        if kingdom_filter and kingdom_filter != label:
            continue
        for p in sorted(src_dir.iterdir()):
            if (p.suffix.lower() not in IMG_EXT or not depicts_people(p.name)
                    or " copy" in p.stem):  # Finder duplicates, not new art
                continue
            out = out_dir / f"{p.stem}_tile.png"
            if out.is_file() and not force:
                skipped += 1
                continue
            img = cv2.imread(str(p), cv2.IMREAD_COLOR)
            if img is None:
                print(f"  !! unreadable {p.name}")
                continue
            found = faces.detect(img)
            x, y, cw, ch = crop_box(img, found)
            tile = img[y:y + ch, x:x + cw]
            if not found:
                blind += 1
            print(f"  {label}/{out.name}  faces={len(found)}"
                  f"{'' if found else ' (fallback crop)'}")
            if not dry_run:
                out_dir.mkdir(parents=True, exist_ok=True)
                cv2.imwrite(str(out), tile, [cv2.IMWRITE_PNG_COMPRESSION, 6])
            made += 1

    print(f"\n{made} tiles {'planned' if dry_run else 'written'} "
          f"({blind} without a detected face), {skipped} already present")
    return made


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("-k", "--kingdom",
                    help="only this kingdom slug (or 'pool' for the shared set)")
    ap.add_argument("--force", action="store_true", help="recut existing tiles")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    build(a.kingdom, a.force, a.dry_run)


if __name__ == "__main__":
    main()
