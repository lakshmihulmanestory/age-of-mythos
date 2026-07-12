"""Structured, JSON-serializable view of the story world.

These pydantic models are deliberately game-friendly: a game engine can consume
them straight from the JSON API (``/api/export.json``) to build its world.
"""
from __future__ import annotations

from typing import Optional

from pydantic import BaseModel, Field


class AudioTrack(BaseModel):
    lang: str       # "en" | "kn"
    label: str      # "English" | "ಕನ್ನಡ"
    url: str


class Weapon(BaseModel):
    name: str
    type: Optional[str] = None
    ability: Optional[str] = None
    era: str = "ancient"  # "ancient" | "modern"


class Vehicle(BaseModel):
    name: str
    description: Optional[str] = None
    era: str = "ancient"


class Character(BaseModel):
    """A hero or villain, keyed to a kingdom."""
    id: str
    name: str
    title: Optional[str] = None
    role: str = "hero"  # "hero" | "villain"
    gender: Optional[str] = None
    kingdom_id: str  # state id, e.g. "andhra-pradesh"
    kingdom_slug: str  # kingdom-name slug, e.g. "dharmakshetra-amaravati"
    region: Optional[str] = None
    sacred_animal: Optional[str] = None
    sacred_bird: Optional[str] = None
    deity: Optional[str] = None
    mahabharata_echo: Optional[str] = None
    motivation: Optional[str] = None
    weapons: list[Weapon] = Field(default_factory=list)
    vehicles: list[Vehicle] = Field(default_factory=list)
    tags: list[str] = Field(default_factory=list)
    raw: dict = Field(default_factory=dict)  # full CSV/identity row for game use


class Story(BaseModel):
    id: str  # "<chapter-slug>__<kingdom-slug>__<story-slug>"
    title: str
    subtitle: Optional[str] = None
    motto: Optional[str] = None
    context: Optional[str] = None
    volume: int
    chapter: int
    region: Optional[str] = None
    kingdom_slug: str
    story_slug: str
    hero: Optional[str] = None
    villain: Optional[str] = None
    source: str = "story.md"  # "story.md" | "story-text"
    has_audio: bool = False
    image_count: int = 0
    # heavy fields populated on demand:
    body_md: str = ""
    body_html: str = ""
    body_html_kn: Optional[str] = None  # Kannada prose, when a translation exists
    has_text_kn: bool = False
    image_urls: list[str] = Field(default_factory=list)
    audio_url: Optional[str] = None  # primary (English) — kept for convenience
    audio_tracks: list[AudioTrack] = Field(default_factory=list)
    word_count: int = 0


class Kingdom(BaseModel):
    id: str  # state id, e.g. "andhra-pradesh"
    slug: str  # kingdom-name slug, e.g. "dharmakshetra-amaravati"
    name: str  # "Dharmakshetra Amaravati"
    state: Optional[str] = None  # real-world state
    region: Optional[str] = None
    volume: int = 1
    theme: Optional[str] = None
    landscape: Optional[str] = None
    color_primary: Optional[str] = None
    color_secondary: Optional[str] = None
    emblem: Optional[str] = None
    culture: Optional[str] = None
    food: list[str] = Field(default_factory=list)
    heroes: list[str] = Field(default_factory=list)  # character ids
    villains: list[str] = Field(default_factory=list)
    story_ids: list[str] = Field(default_factory=list)
    banner_image: Optional[str] = None  # environment/scene art for the header
    hero_image: Optional[str] = None
    images: list[str] = Field(default_factory=list)
    images_by_type: dict[str, list[str]] = Field(default_factory=dict)
    raw: dict = Field(default_factory=dict)


class Chapter(BaseModel):
    number: int
    slug: str
    title: str
    volume: int
    accent: str
    regions: list[str] = Field(default_factory=list)
    kingdom_slugs: list[str] = Field(default_factory=list)
    story_ids: list[str] = Field(default_factory=list)


class Volume(BaseModel):
    number: int
    slug: str
    title: str
    subtitle: str
    roman: str
    color_primary: str
    color_secondary: str
    available: bool = False
    chapters: list[Chapter] = Field(default_factory=list)
