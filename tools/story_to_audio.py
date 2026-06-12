#!/usr/bin/env python3
"""
story_to_audio.py — Convert Age of Mythos story.html files into narrated audio.

Walks the novel tree, finds every `story.html`, extracts the readable narration
(title, subtitle, headings, paragraphs, phase/interval/quote blocks — skipping
the nav bar, CSS and footer), and renders one audio file per story using macOS's
built-in `say` engine. No external packages or network access required.

Examples
--------
  # Convert all of Volume I to ./audio (m4a), default voice:
  python3 tools/story_to_audio.py

  # Just preview what would be produced, no audio written:
  python3 tools/story_to_audio.py --dry-run

  # One chapter only, a different voice/rate, and strip the "standing-" tics:
  python3 tools/story_to_audio.py --filter chapter-3 --voice Daniel --rate 165 --clean

  # Also drop a plain-text transcript next to each audio file:
  python3 tools/story_to_audio.py --transcript
"""

from __future__ import annotations

import argparse
import html
import re
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path

# Repo-relative default scan root. Override with --root.
DEFAULT_ROOT = "content/volume-1-maha-parva"

# Block-level tags after which we want a paragraph break (and a spoken pause).
BLOCK_TAGS = {"h1", "h2", "h3", "h4", "p", "div", "li", "blockquote", "br"}

# Containers whose entire subtree should be ignored (by element or CSS class).
SKIP_TAGS = {"style", "script", "head", "nav"}
SKIP_CLASSES = {"k-nav", "footer"}


class StoryExtractor(HTMLParser):
    """Pull the narratable text out of a story.html document, in reading order."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self._chunks: list[str] = []
        self._buf: list[str] = []
        self._skip_depth = 0          # >0 while inside a skipped subtree
        self._stack: list[str] = []   # tag names, for matching skip exits
        self._skip_markers: list[int] = []  # stack depths where a skip began

    def handle_starttag(self, tag, attrs):
        attrd = dict(attrs)
        classes = set((attrd.get("class") or "").split())
        if tag in SKIP_TAGS or (classes & SKIP_CLASSES):
            self._skip_markers.append(len(self._stack))
            self._skip_depth += 1
        self._stack.append(tag)
        if self._skip_depth == 0 and tag in BLOCK_TAGS:
            self._flush()

    def handle_endtag(self, tag):
        # Pop the stack back to (and including) the matching open tag.
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
        text = "".join(self._buf).strip()
        self._buf.clear()
        if text:
            # Collapse internal whitespace runs into single spaces.
            self._chunks.append(re.sub(r"\s+", " ", text))

    def get_text(self) -> str:
        self._flush()
        return "\n\n".join(self._chunks)


def extract_story_text(html_path: Path, clean: bool = False) -> str:
    raw = html_path.read_text(encoding="utf-8")
    parser = StoryExtractor()
    parser.feed(raw)
    text = parser.get_text()
    text = html.unescape(text)
    # Normalize smart punctuation that `say` reads awkwardly.
    text = (text.replace("—", " — ")
                .replace("–", "-")
                .replace("’", "'")
                .replace("‘", "'")
                .replace("“", '"')
                .replace("”", '"')
                .replace("…", "..."))
    if clean:
        # The prose tags many nouns with a literal "standing-" prefix; spoken
        # aloud it's distracting. --clean removes the prefix only.
        text = re.sub(r"\bstanding-", "", text)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


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
    """Build a flat, sortable output basename from the story's path.

    e.g. chapter-3-rise-of-beasts/.../sangai-nata/story.html
         -> chapter-3-rise-of-beasts__sangai-nata
    A page inside a stories/ folder keeps its saga slug; Chapter 4 set-piece
    pages keep their section (and stem when not index.html).
    """
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


def render_audio(text: str, out_path: Path, voice: str, rate: int, fmt: str) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    cmd = ["say", "-v", voice, "-r", str(rate), "-o", str(out_path)]
    if fmt == "m4a":
        cmd += ["--file-format=m4af", "--data-format=aac"]
    # Feed text via stdin to avoid arg-length limits on long stories.
    subprocess.run(cmd, input=text, text=True, check=True)


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Convert Age of Mythos stories to audio.")
    ap.add_argument("--root", default=DEFAULT_ROOT,
                    help=f"Directory to scan for story.html (default: {DEFAULT_ROOT})")
    ap.add_argument("--out", default="audio",
                    help="Output directory for audio files (default: ./audio)")
    ap.add_argument("--voice", default="Samantha",
                    help="macOS `say` voice (default: Samantha). See `say -v '?'`.")
    ap.add_argument("--rate", type=int, default=175,
                    help="Speaking rate in words/min (default: 175)")
    ap.add_argument("--format", choices=["m4a", "aiff"], default="m4a",
                    help="Output format (default: m4a, compressed)")
    ap.add_argument("--filter", default="",
                    help="Only convert stories whose path contains this substring")
    ap.add_argument("--min-words", type=int, default=40,
                    help="Skip pages with fewer words than this (drops JS-rendered "
                         "shells like Chapter 1's story.html; default: 40)")
    ap.add_argument("--clean", action="store_true",
                    help="Strip the pervasive 'standing-' prefix for smoother narration")
    ap.add_argument("--transcript", action="store_true",
                    help="Also write the extracted text as a .txt next to each audio file")
    ap.add_argument("--list", action="store_true",
                    help="List matching stories and exit")
    ap.add_argument("--dry-run", action="store_true",
                    help="Extract and report, but do not render audio")
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

    out_dir = Path(args.out).resolve()
    ext = "m4a" if args.format == "m4a" else "aiff"

    print(f"Found {len(stories)} story file(s).")
    if args.list:
        for s in stories:
            print(f"  {derive_name(s, root)}  <-  {s.relative_to(root)}")
        return 0

    ok = skipped = 0
    for i, s in enumerate(stories, 1):
        name = derive_name(s, root)
        text = extract_story_text(s, clean=args.clean)
        words = len(text.split())
        if words < args.min_words:
            print(f"[{i}/{len(stories)}] {name}  ({words} words) — SKIP (below --min-words)")
            skipped += 1
            continue
        out_path = out_dir / f"{name}.{ext}"
        print(f"[{i}/{len(stories)}] {name}  ({words} words)")
        if args.transcript:
            out_path.parent.mkdir(parents=True, exist_ok=True)
            (out_dir / f"{name}.txt").write_text(text, encoding="utf-8")
        if args.dry_run:
            ok += 1
            continue
        try:
            render_audio(text, out_path, args.voice, args.rate, args.format)
            ok += 1
        except subprocess.CalledProcessError as e:
            print(f"    FAILED: say exited {e.returncode}", file=sys.stderr)

    rendered = "extracted" if args.dry_run else "rendered"
    print(f"\nDone: {ok} {rendered}, {skipped} skipped -> {out_dir}"
          + (" (dry run, no audio written)" if args.dry_run else ""))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
