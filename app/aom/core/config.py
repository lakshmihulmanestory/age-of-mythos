"""Paths, settings and shared theme tokens for the Age of Mythos world.

The volume palettes / titles / region order are ported from
``tools/build_site.py`` so the new website themes match the legacy static site.
"""
from __future__ import annotations

import os
import re
from pathlib import Path

# aom/core/config.py -> parents: [0]=core [1]=aom [2]=app [3]=repo root
REPO_ROOT = Path(os.environ.get("AOM_REPO_ROOT", Path(__file__).resolve().parents[3]))

CONTENT_DIR = REPO_ROOT / "content"
STORY_TEXT_DIR = REPO_ROOT / "story-text"
AUDIO_DIR = REPO_ROOT / "audio"
IMAGES_DIR = REPO_ROOT / "generated-images"
MEDIA_DIR = REPO_ROOT / "media"
FAMILY_TREE = REPO_ROOT / "Volume-1-Family-Tree.md"

# Authoritative kingdom registry (window.KINGDOM_IDENTITY) + game-data CSVs.
CH1_DIR = CONTENT_DIR / "volume-1-maha-parva" / "chapter-1-rise-of-legends"
KINGDOM_IDENTITY_JS = CH1_DIR / "js" / "kingdom-identity-data.js"
DATA_DIR = CH1_DIR / "data"

WEB_HOST = os.environ.get("AOM_HOST", "0.0.0.0")
WEB_PORT = int(os.environ.get("AOM_PORT", "8000"))

# --- volume palettes (match .v1..v6 in index.html / build_site.py) ----------
VOL_PALETTE = {
    1: ("#c44daa", "#9a3088"), 2: ("#4a7fd4", "#2a5aaa"),
    3: ("#d44a4a", "#aa2828"), 4: ("#d4922a", "#aa6a0a"),
    5: ("#3ab86e", "#1a8a4a"), 6: ("#4ac4c4", "#1a9a9a"),
}
VOL_TITLE = {
    1: "Maha Parva", 2: "The Great West", 3: "The Eastern Dragon",
    4: "The Ancient Sands", 5: "The New World", 6: "The Southern Cross",
}
VOL_SUBTITLE = {
    1: "The Indian Continent", 2: "Europe", 3: "East Asia",
    4: "The Middle East & Africa", 5: "The Americas", 6: "Oceania & Antarctica",
}
VOL_SLUG = {
    1: "volume-1-maha-parva", 2: "volume-2-the-great-west",
    3: "volume-3-the-eastern-dragon", 4: "volume-4-the-ancient-sands",
    5: "volume-5-the-new-world", 6: "volume-6-the-southern-cross",
}
SLUG_VOL = {v: k for k, v in VOL_SLUG.items()}
CHAPTERS = {
    1: ("chapter-1-rise-of-legends", "Rise of Legends"),
    2: ("chapter-2-civil-war", "Civil War"),
    3: ("chapter-3-rise-of-beasts", "Rise of Beasts"),
    4: ("chapter-4-the-great-epic", "The Great Epic"),
}
CHAPTER_SLUG_NUM = {slug: n for n, (slug, _) in CHAPTERS.items()}
ROMAN = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI"}

REGION_ORDER = ["north", "northeast", "east", "central", "west", "south"]
REGION_LABEL = {
    "north": "North", "northeast": "Northeast", "east": "East",
    "central": "Central", "west": "West", "south": "South",
}


def slugify(text: str) -> str:
    """A URL/file-system slug consistent with the on-disk kingdom/story dirs."""
    text = (text or "").strip().lower()
    text = re.sub(r"[—–]", "-", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def kingdom_slug_from_name(name: str) -> str:
    """Kingdom slug from a (possibly subtitled) kingdom name.

    Names in the data often carry a subtitle after an em/en dash, e.g.
    ``"Chaya-Golkonda — The Shadow Fortress"``. The on-disk folder is just
    ``chaya-golkonda``, so we slug only the part before the subtitle separator.
    """
    head = re.split(r"\s+[—–-]\s+", (name or "").strip(), maxsplit=1)[0]
    return slugify(head)
