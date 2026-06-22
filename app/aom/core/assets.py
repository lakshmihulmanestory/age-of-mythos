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


def find_audio(story_id: str) -> str | None:
    """Return a served URL for a story's narration audio, if any exists."""
    for root, prefix in ((config.AUDIO_DIR, "/media/audio"),
                          (config.AUDIO_DIR / "story-text", "/media/audio/story-text")):
        for ext in (".m4a", ".mp3"):
            if (root / f"{story_id}{ext}").is_file():
                return f"{prefix}/{story_id}{ext}"
    # Chapter 2+ narration is keyed only by chapter__kingdom.
    short = "__".join(story_id.split("__")[:2])
    for ext in (".m4a", ".mp3"):
        if (config.AUDIO_DIR / "story-text" / f"{short}{ext}").is_file():
            return f"/media/audio/story-text/{short}{ext}"
    return None
