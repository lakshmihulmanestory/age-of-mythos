"""Game-data JSON API.

Clean, machine-readable endpoints so a game engine (or any AI agent) can pull
the whole world. Everything is read-only and served from the in-memory catalog.
"""
from __future__ import annotations

from fastapi import APIRouter, HTTPException

from aom.core import get_catalog

router = APIRouter(prefix="/api", tags=["world"])


@router.get("/catalog")
def catalog_summary():
    c = get_catalog()
    return {
        "volumes": [
            {"number": v.number, "title": v.title, "subtitle": v.subtitle,
             "available": v.available,
             "chapters": [{"number": ch.number, "title": ch.title,
                           "stories": len(ch.story_ids)} for ch in v.chapters]}
            for v in c.volumes
        ],
        "counts": c.export()["counts"],
    }


@router.get("/export.json")
def export_world():
    """The entire world as one document — for game-engine import."""
    return get_catalog().export()


@router.get("/volumes")
def list_volumes():
    return [v.model_dump() for v in get_catalog().volumes]


@router.get("/volumes/{number}")
def get_volume(number: int):
    v = get_catalog().volume(number)
    if not v:
        raise HTTPException(404, "volume not found")
    return v.model_dump()


@router.get("/kingdoms")
def list_kingdoms():
    return [k.model_dump() for k in get_catalog().kingdoms.values()]


@router.get("/kingdoms/{slug}")
def get_kingdom(slug: str):
    c = get_catalog()
    k = c.kingdom(slug)
    if not k:
        raise HTTPException(404, "kingdom not found")
    out = k.model_dump()
    out["characters"] = [ch.model_dump() for ch in c.characters_for(slug)]
    out["stories"] = [c.story_meta(s).model_dump(exclude={"body_md", "body_html"})
                      for s in k.story_ids if c.story_meta(s)]
    return out


@router.get("/characters")
def list_characters():
    return [c.model_dump() for c in get_catalog().characters.values()]


@router.get("/characters/{cid}")
def get_character(cid: str):
    c = get_catalog().characters.get(cid)
    if not c:
        raise HTTPException(404, "character not found")
    return c.model_dump()


@router.get("/stories")
def list_stories():
    return [s.model_dump(exclude={"body_md", "body_html"})
            for s in get_catalog().stories.values()]


@router.get("/stories/{sid}")
def get_story(sid: str):
    s = get_catalog().load_story(sid)
    if not s:
        raise HTTPException(404, "story not found")
    prev, nxt = get_catalog().neighbours(sid)
    out = s.model_dump()
    out["prev_id"], out["next_id"] = prev, nxt
    return out


@router.get("/search")
def search(q: str):
    res = get_catalog().search(q)
    return {
        "query": q,
        "stories": [s.model_dump(exclude={"body_md", "body_html"}) for s in res["stories"]],
        "kingdoms": [k.model_dump() for k in res["kingdoms"]],
        "characters": [c.model_dump() for c in res["characters"]],
    }


@router.post("/reload")
def reload_catalog():
    """Rebuild the catalog from disk (after editing story files)."""
    get_catalog(force=True)
    return {"status": "reloaded", "counts": get_catalog().export()["counts"]}
