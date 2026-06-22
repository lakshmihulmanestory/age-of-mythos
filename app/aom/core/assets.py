"""Resolve on-disk media (images / audio) for stories and kingdoms.

Keeps all filesystem knowledge in one place so the web routes stay thin.
"""
from __future__ import annotations

from pathlib import Path

from aom.core import config

_IMG_EXT = (".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg")
_VID_EXT = (".mp4", ".webm", ".ogg", ".mov")


def story_images(story_dir: Path) -> list[str]:
    """Image file names inside a story's ``images/`` folder, sorted."""
    img_dir = story_dir / "images"
    if not img_dir.is_dir():
        return []
    return sorted(p.name for p in img_dir.iterdir()
                  if p.suffix.lower() in _IMG_EXT + _VID_EXT)


def story_asset_path(story_dir: Path, filename: str) -> Path | None:
    """Safe lookup of a single asset within a story's ``images/`` folder."""
    base = (story_dir / "images").resolve()
    target = (base / filename).resolve()
    if base in target.parents and target.is_file():
        return target
    return None


def _first_existing(candidates: list[tuple]) -> str | None:
    """candidates: list of (path, served_url). Return the first url that exists."""
    for path, url in candidates:
        if path.is_file():
            return url
    return None


def find_audio_en(story_id: str) -> str | None:
    """English narration URL for a story, if any exists."""
    short = "__".join(story_id.split("__")[:2])
    cands: list[tuple] = []
    for ext in (".m4a", ".mp3"):
        cands.append((config.AUDIO_DIR / f"{story_id}{ext}", f"/media/audio/{story_id}{ext}"))
        cands.append((config.AUDIO_DIR / "story-text" / f"{story_id}{ext}",
                      f"/media/audio/story-text/{story_id}{ext}"))
    for ext in (".m4a", ".mp3"):  # chapter 2+ narration is keyed by chapter__kingdom
        cands.append((config.AUDIO_DIR / "story-text" / f"{short}{ext}",
                      f"/media/audio/story-text/{short}{ext}"))
    return _first_existing(cands)


def find_audio_kn(story_id: str) -> str | None:
    """Kannada narration URL for a story, if any exists."""
    short = "__".join(story_id.split("__")[:2])
    cands = [
        (config.AUDIO_DIR / "kannada" / f"{story_id}.kn.mp3",
         f"/media/audio/kannada/{story_id}.kn.mp3"),
        (config.AUDIO_DIR / "kannada" / f"{short}.kn.mp3",
         f"/media/audio/kannada/{short}.kn.mp3"),
    ]
    return _first_existing(cands)


def find_audio(story_id: str) -> str | None:
    """Primary (English) narration URL — kept for convenience / has_audio checks."""
    return find_audio_en(story_id) or find_audio_kn(story_id)


def find_audio_tracks(story_id: str) -> list[dict]:
    """All narration tracks for a story, English first then Kannada."""
    tracks: list[dict] = []
    en = find_audio_en(story_id)
    if en:
        tracks.append({"lang": "en", "label": "English", "url": en})
    kn = find_audio_kn(story_id)
    if kn:
        tracks.append({"lang": "kn", "label": "ಕನ್ನಡ", "url": kn})
    return tracks
