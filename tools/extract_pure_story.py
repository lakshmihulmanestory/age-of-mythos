#!/usr/bin/env python3
"""
extract_pure_story.py — Write a clean, prose-only .txt for each kingdom's story.

It keeps only the narrative paragraphs so the result reads like a book: no page
header/title, no "FIRST HALF / SECOND HALF" dividers, no ALL-CAPS scene labels,
no decorative pull-quotes, and no nav/footer. Only the actual <p> story text.

Source pages are the same set the audio tool uses:
  * Chapters 2-4 : <kingdom>/story.html
  * Chapter 1    : <kingdom>/stories/*.html   (split out from the shared JS)
JS-rendered shells (almost no prose) are skipped automatically.

By default the .txt is written next to its source HTML (same basename), so each
kingdom's story sits in its own folder. Use --out DIR to collect them instead.

Examples
--------
  # Preview the plan for the whole volume:
  python3 tools/extract_pure_story.py --dry-run

  # One story (the file you have open):
  python3 tools/extract_pure_story.py --filter "parashurama-kshetra/stories"

  # A whole chapter:
  python3 tools/extract_pure_story.py --filter "chapter-1-rise-of-legends"

  # Everything, gathered into one folder, with the "standing-" tics removed:
  python3 tools/extract_pure_story.py --out story-text --clean
"""
from __future__ import annotations

import argparse
import html
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

DEFAULT_ROOT = "content/volume-1-maha-parva"

# Subtrees ignored entirely: scripts/styles, headings (titles + scene labels),
# and any "chrome" container matched by these class-name keywords. Templates
# vary across chapters, so we keep everything that ISN'T one of these.
SKIP_TAGS = {"style", "script", "head", "nav", "h1", "h2", "h3", "h4", "h5", "h6"}
SKIP_CLASS_KEYWORDS = (
    "banner", "footer", "nav", "breadcrumb", "back-links", "interval", "phase",
    "half-banner", "pull-quote", "section-title", "three-beat", "state-name",
    "motto", "badge", "eyebrow", "cast", "saga-title", "portrait",
)
# Block tags after which a paragraph break is emitted.
BLOCK_TAGS = {"p", "div", "li", "blockquote", "br", "section", "article"}


def _is_chrome(class_str: str) -> bool:
    return any(k in class_str for k in SKIP_CLASS_KEYWORDS)


class ProseExtractor(HTMLParser):
    """Keep narrative text from all containers except chrome + headings."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self._paras: list[str] = []
        self._buf: list[str] = []
        self._stack: list[str] = []
        self._skip_depth = 0
        self._skip_markers: list[int] = []

    def handle_starttag(self, tag, attrs):
        class_str = dict(attrs).get("class") or ""
        if tag in SKIP_TAGS or _is_chrome(class_str):
            self._skip_markers.append(len(self._stack))
            self._skip_depth += 1
        self._stack.append(tag)
        if self._skip_depth == 0 and tag in BLOCK_TAGS:
            self._flush()

    def handle_endtag(self, tag):
        while self._stack and self._stack[-1] != tag:
            self._stack.pop()
        if self._stack:
            self._stack.pop()
        if self._skip_markers and len(self._stack) <= self._skip_markers[-1]:
            self._skip_markers.pop()
            self._skip_depth -= 1
        if self._skip_depth == 0 and tag in BLOCK_TAGS:
            self._flush()

    def handle_data(self, data):
        if self._skip_depth == 0:
            self._buf.append(data)

    def _flush(self):
        raw = "".join(self._buf)
        self._buf.clear()
        # Some templates (Chapters 2 & 4) hold the whole saga as one pre-line
        # blob: paragraphs separated by blank lines, with scene headings and
        # "═══ FIRST HALF ═══" dividers on their own lines. Split and filter
        # each paragraph; a normal <p> block is just a single paragraph here.
        for chunk in re.split(r"\n\s*\n+", raw):
            para = re.sub(r"\s+", " ", chunk).strip()
            if para and self._is_prose(para):
                self._paras.append(para)

    @staticmethod
    def _is_prose(text: str) -> bool:
        # Drop decorative/structural leftovers: ALL-CAPS scene labels & dividers,
        # bullet-separated eyebrow/cast lines, and bare divider rules.
        if "•" in text or "←" in text or "→" in text:  # bullet / nav arrows
            return False
        if not any(c.islower() for c in text):  # no lowercase => label/divider
            return False
        return True

    def get_paragraphs(self) -> list[str]:
        return self._paras


def normalize(text: str, clean: bool) -> str:
    text = html.unescape(text)
    text = (text.replace("—", "—")  # keep em dash as-is for reading
                .replace("’", "'").replace("‘", "'")
                .replace("“", '"').replace("”", '"')
                .replace("…", "..."))
    if clean:
        text = re.sub(r"\bstanding-", "", text)
    return text.strip()


def extract_prose(html_path: Path, clean: bool) -> str:
    parser = ProseExtractor()
    parser.feed(html_path.read_text(encoding="utf-8"))
    paras = [normalize(p, clean) for p in parser.get_paragraphs()]
    paras = [p for p in paras if p]
    return "\n\n".join(paras)


def discover_stories(root: Path) -> list[Path]:
    """All readable story pages across the volume's chapter layouts.

    * Chapters 2-3 : <kingdom>/story.html
    * Chapter 1    : <kingdom>/stories/*.html  and  <kingdom>/stories/<slug>/index.html
    * Chapter 4    : set-piece section pages (maha-adhipati, maw, ...), but NOT
                     the chapter-root index.html, which is just a nav/landing page.
    """
    found = (set(root.rglob("story.html"))
             | set(root.rglob("stories/*.html"))
             | set(root.rglob("stories/*/index.html")))
    for ch in root.rglob("chapter-*"):
        if ch.is_dir() and not any(ch.rglob("story.html")) \
                and not any(ch.rglob("stories/*.html")):
            found |= {h for h in ch.rglob("*.html") if h != ch / "index.html"}
    return sorted(found)


def derive_name(html_path: Path, root: Path) -> str:
    rel = html_path.relative_to(root)
    chapter = next((p for p in rel.parts if p.startswith("chapter-")), rel.parts[0])
    parent = rel.parent.name
    if html_path.name == "story.html":
        label = parent
    elif parent == "stories":           # flat: stories/buried-temple.html
        label = f"{rel.parent.parent.name}__{rel.stem}"
    elif rel.parent.parent.name == "stories":   # nested: stories/<slug>/index.html
        label = f"{rel.parent.parent.parent.name}__{rel.parent.name}"
    elif rel.stem == "index":          # section page, e.g. maha-adhipati/index.html
        label = parent
    else:                               # e.g. bharatavarsha/maw.html
        label = f"{parent}__{rel.stem}"
    return f"{chapter}__{label}"


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Write prose-only .txt for each story.")
    ap.add_argument("--root", default=DEFAULT_ROOT)
    ap.add_argument("--out", default="",
                    help="Collect all .txt into this folder (default: next to each HTML)")
    ap.add_argument("--filter", default="",
                    help="Only stories whose path contains this substring")
    ap.add_argument("--clean", action="store_true",
                    help="Strip the 'standing-' prefix (Chapters 2-4) for smoother reading")
    ap.add_argument("--min-words", type=int, default=40,
                    help="Skip pages with fewer words (drops JS shells; default: 40)")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args(argv)

    root = Path(args.root).resolve()
    if not root.is_dir():
        print(f"error: root not found: {root}", file=sys.stderr)
        return 2

    stories = discover_stories(root)
    if args.filter:
        stories = [s for s in stories if args.filter in str(s)]
    if not stories:
        print("No matching story files found.", file=sys.stderr)
        return 1

    out_dir = Path(args.out).resolve() if args.out else None
    print(f"Found {len(stories)} story file(s).")

    written = skipped = 0
    for i, s in enumerate(stories, 1):
        prose = extract_prose(s, clean=args.clean)
        words = len(prose.split())
        name = derive_name(s, root)
        if words < args.min_words:
            print(f"[{i}/{len(stories)}] {name}  ({words} words) — SKIP (below --min-words)")
            skipped += 1
            continue
        if out_dir:
            target = out_dir / f"{name}.txt"
        else:
            target = s.with_suffix(".txt") if s.name != "story.html" else s.with_name("story.txt")
        print(f"[{i}/{len(stories)}] {name}  ({words} words) -> {target.name}")
        if not args.dry_run:
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(prose + "\n", encoding="utf-8")
            written += 1

    verb = "would write" if args.dry_run else "wrote"
    where = out_dir if out_dir else "(next to each source story)"
    print(f"\nDone: {verb} {written if not args.dry_run else len(stories) - skipped}, "
          f"{skipped} skipped -> {where}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
