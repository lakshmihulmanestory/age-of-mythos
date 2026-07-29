"""Assemble the whole story world into one in-memory :class:`Catalog`.

Source of truth is the filesystem at the repo root. Nothing here writes; the
catalog is built once, cached, and rebuildable via :meth:`Catalog.reload` so a
writer can edit a ``story.md`` on disk and just refresh the page.
"""
from __future__ import annotations

import csv
import re
import threading
from pathlib import Path
from typing import Optional

import frontmatter
import json5

from aom.core import assets, config
from aom.core.markdown import render
from aom.core.models import (
    AudioTrack, Chapter, Character, Kingdom, Story, Vehicle, Volume, Weapon,
)
from aom.core.config import kingdom_slug_from_name, slugify


# --------------------------------------------------------------------------- #
# helpers
# --------------------------------------------------------------------------- #
def _extract_array_literal(text: str, anchor: str) -> str:
    """Extract the ``[...]`` literal that follows ``anchor`` in JS source,
    balancing brackets while ignoring those inside strings."""
    start = text.find(anchor)
    if start == -1:
        raise ValueError(f"anchor {anchor!r} not found")
    i = text.find("[", start)
    depth, in_str, quote, esc = 0, False, "", False
    for j in range(i, len(text)):
        c = text[j]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == quote:
                in_str = False
            continue
        if c in "'\"":
            in_str, quote = True, c
        elif c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return text[i:j + 1]
    raise ValueError("unbalanced array literal")


_TYPE_ALIASES = {"env": "environment", "people": "crowd", "char": "hero",
                 "characters": "hero"}


def _image_type(name: str) -> str:
    """Infer an art type from a filename in either naming convention."""
    m = re.match(r"^\d+-.+?_([a-z]+)_", name)  # NN-token_<type>_desc.png
    if m:
        return m.group(1)
    prefix = re.split(r"[-_]", name.rsplit(".", 1)[0], 1)[0].lower()  # <type>-desc.png
    return _TYPE_ALIASES.get(prefix, prefix or "misc")


def _csv_rows(path: Path) -> list[dict]:
    if not path.is_file():
        return []
    with path.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


# --------------------------------------------------------------------------- #
# catalog
# --------------------------------------------------------------------------- #
class Catalog:
    def __init__(self) -> None:
        self.kingdoms: dict[str, Kingdom] = {}          # by slug
        self.kingdom_by_id: dict[str, Kingdom] = {}     # by state id
        self.characters: dict[str, Character] = {}
        self.stories: dict[str, Story] = {}
        self.volumes: list[Volume] = []
        self.spine: list[str] = []                       # ordered story ids
        self._story_dirs: dict[str, Path] = {}           # story_id -> folder/file
        self._bodies: dict[str, Story] = {}              # lazy body cache
        self.kingdom_media_dirs: dict[str, Path] = {}    # slug -> content media/kingdoms dir
        self.build()

    # -- build ------------------------------------------------------------- #
    def build(self) -> None:
        self._load_kingdoms()
        self._load_characters()
        self._load_stories()
        self._load_images()
        self._build_volumes()

    def reload(self) -> None:
        self.__init__()  # cheap: a few hundred files

    def _load_kingdoms(self) -> None:
        if not config.KINGDOM_IDENTITY_JS.is_file():
            return
        text = config.KINGDOM_IDENTITY_JS.read_text(encoding="utf-8")
        try:
            data = json5.loads(_extract_array_literal(text, "KINGDOM_IDENTITY"))
        except Exception:
            data = []
        for row in data:
            name = row.get("kingdomName") or row.get("state") or row.get("id", "")
            slug = kingdom_slug_from_name(name)
            k = Kingdom(
                id=row.get("id", slug),
                slug=slug,
                name=name,
                state=row.get("state"),
                region=row.get("region"),
                theme=row.get("theme"),
                landscape=row.get("landscape"),
                color_primary=(row.get("colors") or {}).get("primary"),
                color_secondary=(row.get("colors") or {}).get("secondary"),
                emblem=row.get("emblem"),
                culture=row.get("culture"),
                food=row.get("food") or [],
                raw=row,
            )
            self.kingdoms[slug] = k
            self.kingdom_by_id[k.id] = k

    def _ensure_kingdom(self, slug: str, *, state_id: str = "",
                        name: str = "", region: str = "") -> Kingdom:
        if slug in self.kingdoms:
            return self.kingdoms[slug]
        k = Kingdom(id=state_id or slug, slug=slug,
                    name=name or slug.replace("-", " ").title(), region=region or None)
        self.kingdoms[slug] = k
        if k.id not in self.kingdom_by_id:
            self.kingdom_by_id[k.id] = k
        return k

    def _load_characters(self) -> None:
        for row in _csv_rows(config.DATA_DIR / "heroes.csv"):
            self._add_character(row, role="hero")
        for row in _csv_rows(config.DATA_DIR / "villains.csv"):
            self._add_character(row, role="villain")

    def _add_character(self, row: dict, role: str) -> None:
        sid = row.get("id")
        if not sid:
            return
        name = row.get(f"{role}_name") or row.get("hero_name") or sid
        cid = f"{sid}-{role}"
        weapons, vehicles = [], []
        if role == "hero":
            if row.get("ancient_weapon_name"):
                weapons.append(Weapon(name=row["ancient_weapon_name"],
                                      type=row.get("ancient_weapon_type"),
                                      ability=row.get("ancient_weapon_ability"), era="ancient"))
            if row.get("modern_weapon_name"):
                weapons.append(Weapon(name=row["modern_weapon_name"],
                                      type=row.get("modern_weapon_type"),
                                      ability=row.get("modern_weapon_ability"), era="modern"))
            if row.get("ancient_vehicle_name"):
                vehicles.append(Vehicle(name=row["ancient_vehicle_name"],
                                        description=row.get("ancient_vehicle_description"), era="ancient"))
            if row.get("modern_vehicle_name"):
                vehicles.append(Vehicle(name=row["modern_vehicle_name"],
                                        description=row.get("modern_vehicle_description"), era="modern"))
            deity = row.get("primary_deity")
            echo = row.get("mb_primary")
            motivation = row.get("kingdom_theme")
        else:
            if row.get("ancient_weapon_name"):
                weapons.append(Weapon(name=row["ancient_weapon_name"],
                                      ability=row.get("ancient_weapon_ability"), era="ancient"))
            if row.get("modern_weapon_name"):
                weapons.append(Weapon(name=row["modern_weapon_name"],
                                      ability=row.get("modern_weapon_ability"), era="modern"))
            if row.get("ancient_vehicle_name"):
                vehicles.append(Vehicle(name=row["ancient_vehicle_name"],
                                        description=row.get("ancient_vehicle_description"), era="ancient"))
            if row.get("modern_vehicle_name"):
                vehicles.append(Vehicle(name=row["modern_vehicle_name"],
                                        description=row.get("modern_vehicle_description"), era="modern"))
            deity = row.get("dark_deity")
            echo = row.get("mb_villain_parallel")
            motivation = row.get("villain_motivation")

        kingdom = self.kingdom_by_id.get(sid)
        kingdom_slug = kingdom.slug if kingdom else kingdom_slug_from_name(row.get("kingdom_name", sid))
        tags = [t.strip() for t in (row.get("tags") or "").split("@") if t.strip()]

        char = Character(
            id=cid, name=name, title=row.get(f"{role}_title"), role=role,
            gender=row.get("gender"), kingdom_id=sid, kingdom_slug=kingdom_slug,
            region=row.get("region"), sacred_animal=row.get("sacred_animal"),
            sacred_bird=row.get("sacred_bird"), deity=deity, mahabharata_echo=echo,
            motivation=motivation, weapons=weapons, vehicles=vehicles, tags=tags, raw=row,
        )
        self.characters[cid] = char
        k = self._ensure_kingdom(kingdom_slug, state_id=sid,
                                 name=row.get("kingdom_name", ""), region=row.get("region", ""))
        (k.heroes if role == "hero" else k.villains).append(cid)

    def _load_stories(self) -> None:
        for path in sorted(config.CONTENT_DIR.glob("**/stories/*/story.md")):
            self._add_story_md(path)
        # Fill gaps from the flat story-text/ sources (chapters 2-4, which are
        # stored one file per kingdom: chapter__kingdom[.__story].txt).
        for path in sorted(config.STORY_TEXT_DIR.glob("chapter-*__*.txt")):
            sid = path.stem
            if sid not in self.stories:
                self._add_story_txt(path, sid)

    def _vol_from_path(self, path: Path) -> int:
        for part in path.parts:
            if part in config.SLUG_VOL:
                return config.SLUG_VOL[part]
        return 1

    def _add_story_md(self, path: Path) -> None:
        try:
            post = frontmatter.load(path)
        except Exception:
            return
        meta = post.metadata
        story_slug = path.parent.name
        # path: .../<chapter-slug>/.../<region>/<kingdom-slug>/stories/<story-slug>/story.md
        parts = path.parts
        chapter_slug = next((p for p in parts if p in config.CHAPTER_SLUG_NUM),
                            "chapter-1-rise-of-legends")
        kingdom_slug = path.parents[2].name  # .../<kingdom>/stories/<story>/story.md
        chapter = config.CHAPTER_SLUG_NUM.get(chapter_slug, 1)
        volume = self._vol_from_path(path)
        sid = f"{chapter_slug}__{kingdom_slug}__{story_slug}"
        story = Story(
            id=sid, title=meta.get("title", story_slug.replace("-", " ").title()),
            subtitle=meta.get("subtitle"), motto=meta.get("motto"),
            context=meta.get("context"), volume=volume, chapter=chapter,
            region=meta.get("region"), kingdom_slug=kingdom_slug, story_slug=story_slug,
            hero=meta.get("hero"), villain=meta.get("villain"), source="story.md",
            image_count=len(assets.story_images(path.parent)),
            has_audio=assets.find_audio(sid) is not None,
        )
        self.stories[sid] = story
        self._story_dirs[sid] = path.parent
        k = self._ensure_kingdom(kingdom_slug, region=meta.get("region", ""))
        if sid not in k.story_ids:
            k.story_ids.append(sid)

    def _add_story_txt(self, path: Path, sid: str) -> None:
        parts = sid.split("__")
        chapter_slug = parts[0]
        kingdom_slug = parts[1] if len(parts) > 1 else ""
        story_slug = parts[2] if len(parts) > 2 else kingdom_slug
        chapter = config.CHAPTER_SLUG_NUM.get(chapter_slug, 1)
        k = self.kingdoms.get(kingdom_slug)
        first = path.read_text(encoding="utf-8", errors="ignore").lstrip().split("\n", 1)[0].strip()
        if first.startswith("#"):
            title = first.lstrip("# ").strip()
        elif k:
            import re
            title = re.split(r"\s+[—–-]\s+", k.name, maxsplit=1)[0]
        elif first and len(first) <= 80 and not first.endswith((".", ",", "!", "?", ";", ":")):
            title = first
        else:
            title = (story_slug or kingdom_slug).replace("-", " ").title()
        region = k.region if k else None
        story = Story(
            id=sid, title=title, subtitle=(k.theme if k else None),
            volume=1, chapter=chapter, region=region,
            kingdom_slug=kingdom_slug, story_slug=story_slug or kingdom_slug,
            source="story-text", has_audio=assets.find_audio(sid) is not None,
        )
        self.stories[sid] = story
        self._story_dirs[sid] = path
        kk = self._ensure_kingdom(kingdom_slug, region=region or "")
        if sid not in kk.story_ids:
            kk.story_ids.append(sid)

    def _match_kingdom(self, token: str) -> Optional[Kingdom]:
        """Best-effort match of an image filename token to a kingdom slug."""
        if token in self.kingdoms:
            return self.kingdoms[token]
        cands = [k for k in self.kingdoms.values()
                 if token in k.slug or k.slug in token
                 or token in slugify(k.state or "") or token in slugify(k.name)]
        return max(cands, key=lambda k: len(k.slug)) if cands else None

    def _load_images(self) -> None:
        """Attach art to kingdoms, preferring each kingdom's own media folder.

        A kingdom keeps its curated art in ``<kingdom>/media/kingdoms/`` inside
        the content tree; those are used first. Only kingdoms with no such art
        fall back to the shared ``generated-images/`` pool. Files follow either
        ``NN-<token>_<type>_<desc>.png`` or a freeform ``<type>-<desc>.png`` name.
        """
        _IMG_EXT = (".png", ".jpg", ".jpeg", ".webp")

        # 1) per-kingdom content art: <kingdom-slug>/media/kingdoms/*
        for mdir in sorted(config.CONTENT_DIR.glob("**/media/kingdoms")):
            slug = mdir.parent.parent.name  # .../<slug>/media/kingdoms
            k = self.kingdoms.get(slug) or self._match_kingdom(slug)
            if not k:
                continue
            self.kingdom_media_dirs[k.slug] = mdir
            for p in sorted(mdir.iterdir()):
                if p.suffix.lower() not in _IMG_EXT:
                    continue
                url = f"/kingdom-media/{k.slug}/{p.name}"
                k.images.append(url)
                k.images_by_type.setdefault(_image_type(p.name), []).append(url)

        # 2) shared pool — only for kingdoms that got nothing above
        has_content_art = {k.slug for k in self.kingdoms.values() if k.images}
        if config.IMAGES_DIR.is_dir():
            for p in sorted(config.IMAGES_DIR.glob("*")):
                if p.suffix.lower() not in _IMG_EXT:
                    continue
                m = re.match(r"^\d+-(.+?)_", p.name)
                if not m:
                    continue
                k = self._match_kingdom(m.group(1))
                if not k or k.slug in has_content_art:  # kingdom has its own art
                    continue
                url = f"/media/gallery/{p.name}"
                k.images.append(url)
                k.images_by_type.setdefault(_image_type(p.name), []).append(url)

        for k in self.kingdoms.values():
            k.hero_image = (k.images_by_type.get("hero") or [None])[0]
            k.banner_image = (k.images_by_type.get("environment")
                              or k.images_by_type.get("scene")
                              or k.images_by_type.get("hero") or [None])[0]

    def _build_volumes(self) -> None:
        self.volumes = []
        for num in range(1, 7):
            pal = config.VOL_PALETTE[num]
            vol = Volume(
                number=num, slug=config.VOL_SLUG[num], title=config.VOL_TITLE[num],
                subtitle=config.VOL_SUBTITLE[num], roman=config.ROMAN[num],
                color_primary=pal[0], color_secondary=pal[1],
                map_image=assets.volume_map_url(num),
            )
            for cnum, (cslug, ctitle) in config.CHAPTERS.items():
                ch_stories = sorted(
                    [s for s in self.stories.values()
                     if s.volume == num and s.chapter == cnum],
                    key=lambda s: (config.REGION_ORDER.index(s.region)
                                   if s.region in config.REGION_ORDER else 99, s.title),
                )
                if not ch_stories:
                    continue
                regions = []
                for s in ch_stories:
                    if s.region and s.region not in regions:
                        regions.append(s.region)
                kingdoms_in = []
                for s in ch_stories:
                    if s.kingdom_slug not in kingdoms_in:
                        kingdoms_in.append(s.kingdom_slug)
                vol.chapters.append(Chapter(
                    number=cnum, slug=cslug, title=ctitle, volume=num,
                    accent=_shade(pal[0], cnum),
                    cover_image=assets.chapter_cover_url(cnum),
                    regions=regions, kingdom_slugs=kingdoms_in,
                    story_ids=[s.id for s in ch_stories],
                ))
            vol.available = bool(vol.chapters)
            self.volumes.append(vol)
        self.spine = [sid for v in self.volumes for c in v.chapters for sid in c.story_ids]

    # -- access ------------------------------------------------------------ #
    def volume(self, num: int) -> Optional[Volume]:
        return next((v for v in self.volumes if v.number == num), None)

    def kingdom(self, slug: str) -> Optional[Kingdom]:
        return self.kingdoms.get(slug)

    def story_meta(self, sid: str) -> Optional[Story]:
        return self.stories.get(sid)

    def load_story(self, sid: str) -> Optional[Story]:
        """Return a Story with body_html / image_urls / audio populated (cached)."""
        if sid in self._bodies:
            return self._bodies[sid]
        meta = self.stories.get(sid)
        src = self._story_dirs.get(sid)
        if not meta or not src:
            return None
        story = meta.model_copy(deep=True)
        if meta.source == "story.md":
            post = frontmatter.load(src / "story.md")
            body = post.content
        else:
            body = src.read_text(encoding="utf-8", errors="ignore")
        html, imgs, wc = render(body, f"/story-asset/{sid}")
        story.body_md = body
        story.body_html = html
        story.image_urls = imgs
        story.word_count = wc
        story.audio_tracks = [AudioTrack(**t) for t in assets.find_audio_tracks(sid)]
        story.audio_url = story.audio_tracks[0].url if story.audio_tracks else None
        # Optional Kannada translation of the prose (mirrors the audio tracks).
        kn_path = assets.find_story_text_kn(sid, src if src.is_dir() else src.parent)
        if kn_path:
            kn_post = frontmatter.load(kn_path)
            kn_body = kn_post.content if kn_path.name.endswith(".md") else kn_path.read_text(encoding="utf-8", errors="ignore")
            story.body_html_kn = render(kn_body, f"/story-asset/{sid}")[0]
            story.has_text_kn = True
        self._bodies[sid] = story
        return story

    def story_dir(self, sid: str) -> Optional[Path]:
        return self._story_dirs.get(sid)

    def neighbours(self, sid: str) -> tuple[Optional[str], Optional[str]]:
        if sid not in self.spine:
            return None, None
        i = self.spine.index(sid)
        prev = self.spine[i - 1] if i > 0 else None
        nxt = self.spine[i + 1] if i < len(self.spine) - 1 else None
        return prev, nxt

    def story_gallery(self, sid: str, limit: int = 6) -> list[str]:
        """Scene / environment art to illustrate a story (from its kingdom)."""
        meta = self.stories.get(sid)
        k = self.kingdoms.get(meta.kingdom_slug) if meta else None
        if not k:
            return []
        gallery: list[str] = []
        for typ in ("scene", "environment", "hero", "villain"):
            gallery += k.images_by_type.get(typ, [])
        return gallery[:limit]

    def story_hero_image(self, sid: str) -> Optional[str]:
        """Best hero portrait to illustrate a story card.

        Prefer a hero image whose filename matches the story's own hero name;
        otherwise fall back to the kingdom's first hero image, then its banner.
        """
        meta = self.stories.get(sid)
        k = self.kingdoms.get(meta.kingdom_slug) if meta else None
        if not k:
            return None
        hero_imgs = k.images_by_type.get("hero", [])
        if meta and meta.hero and hero_imgs:
            token = slugify(meta.hero.split("—")[0])
            for url in hero_imgs:
                if token and token in slugify(url):
                    return url
        return (hero_imgs[0] if hero_imgs else None) or k.hero_image or k.banner_image

    def characters_for(self, kingdom_slug: str) -> list[Character]:
        k = self.kingdoms.get(kingdom_slug)
        if not k:
            return []
        ids = k.heroes + k.villains
        return [self.characters[c] for c in ids if c in self.characters]

    def search(self, query: str, limit: int = 50) -> dict:
        q = query.lower().strip()
        if not q:
            return {"stories": [], "kingdoms": [], "characters": []}
        stories = [s for s in self.stories.values()
                   if q in s.title.lower() or q in (s.subtitle or "").lower()
                   or q in (s.hero or "").lower() or q in (s.villain or "").lower()][:limit]
        kingdoms = [k for k in self.kingdoms.values()
                    if q in k.name.lower() or q in (k.state or "").lower()
                    or q in (k.theme or "").lower()][:limit]
        chars = [c for c in self.characters.values()
                 if q in c.name.lower() or q in (c.title or "").lower()][:limit]
        return {"stories": stories, "kingdoms": kingdoms, "characters": chars}

    def export(self) -> dict:
        return {
            "volumes": [v.model_dump() for v in self.volumes],
            "kingdoms": [k.model_dump() for k in self.kingdoms.values()],
            "characters": [c.model_dump() for c in self.characters.values()],
            "stories": [s.model_dump(exclude={"body_md", "body_html"})
                        for s in self.stories.values()],
            "counts": {
                "volumes": sum(1 for v in self.volumes if v.available),
                "kingdoms": len(self.kingdoms),
                "characters": len(self.characters),
                "stories": len(self.stories),
            },
        }


def _shade(hex_color: str, ch: int) -> str:
    """A distinct accent per chapter, kept within the volume's colour family."""
    import colorsys
    h = hex_color.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    hh, ll, ss = colorsys.rgb_to_hls(r, g, b)
    hh = (hh + (ch - 1) * 0.045) % 1.0
    ll = max(0.0, min(1.0, ll - (ch - 1) * 0.04))
    r, g, b = colorsys.hls_to_rgb(hh, ll, ss)
    return "#%02x%02x%02x" % (int(r * 255), int(g * 255), int(b * 255))


# --------------------------------------------------------------------------- #
# singleton
# --------------------------------------------------------------------------- #
_catalog: Optional[Catalog] = None
_lock = threading.Lock()


def get_catalog(force: bool = False) -> Catalog:
    global _catalog
    with _lock:
        if _catalog is None or force:
            _catalog = Catalog()
        return _catalog
