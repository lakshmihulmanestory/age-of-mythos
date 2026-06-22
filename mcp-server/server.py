"""Age of Mythos — local MCP server (stdio).

Lets an AI agent (e.g. Claude Desktop) explore the story world: list volumes /
kingdoms, read a story, search, and pull game-ready character/weapon/vehicle data.
Backed entirely by the shared ``aom.core`` library in ``app/``; it never writes
to the story files.

Run:  app/.venv/bin/python mcp-server/server.py
(See mcp-server/claude_desktop_config.json to register it with Claude Desktop.)
"""
from __future__ import annotations

import pathlib
import sys

# Make the shared library in app/ importable even without installing the package.
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1] / "app"))

from mcp.server.fastmcp import FastMCP

from aom.core import config, get_catalog

mcp = FastMCP("Age of Mythos")


def _meta(s):
    return s.model_dump(exclude={"body_md", "body_html"})


@mcp.tool()
def list_volumes() -> list[dict]:
    """List the six volumes (continents) and which are available to read."""
    return [{"number": v.number, "title": v.title, "subtitle": v.subtitle,
             "available": v.available,
             "chapters": [{"number": c.number, "title": c.title,
                           "stories": len(c.story_ids)} for c in v.chapters]}
            for v in get_catalog().volumes]


@mcp.tool()
def list_kingdoms(volume: int | None = None) -> list[dict]:
    """List kingdoms. Optionally restrict to one volume number (1-6)."""
    c = get_catalog()
    out = []
    for k in c.kingdoms.values():
        if volume is not None and k.volume != volume:
            continue
        out.append({"slug": k.slug, "name": k.name, "state": k.state,
                    "region": k.region, "theme": k.theme,
                    "stories": len(k.story_ids)})
    return out


@mcp.tool()
def get_kingdom(slug: str) -> dict:
    """Full detail for one kingdom: identity, heroes, villains, stories, art."""
    c = get_catalog()
    k = c.kingdom(slug)
    if not k:
        return {"error": f"no kingdom '{slug}'"}
    out = k.model_dump()
    out["characters"] = [ch.model_dump() for ch in c.characters_for(slug)]
    out["story_titles"] = [c.story_meta(s).title for s in k.story_ids if c.story_meta(s)]
    return out


@mcp.tool()
def get_story(story_id: str) -> dict:
    """Return a story's full text plus metadata and reading neighbours."""
    c = get_catalog()
    s = c.load_story(story_id)
    if not s:
        return {"error": f"no story '{story_id}'"}
    prev, nxt = c.neighbours(story_id)
    out = _meta(s)
    out["text"] = s.body_md
    out["prev_id"], out["next_id"] = prev, nxt
    return out


@mcp.tool()
def search(query: str) -> dict:
    """Search stories, kingdoms and characters by keyword."""
    res = get_catalog().search(query)
    return {"stories": [_meta(s) for s in res["stories"]],
            "kingdoms": [{"slug": k.slug, "name": k.name, "theme": k.theme}
                         for k in res["kingdoms"]],
            "characters": [{"id": c.id, "name": c.name, "role": c.role,
                            "kingdom": c.kingdom_slug} for c in res["characters"]]}


@mcp.tool()
def list_characters(kingdom_slug: str | None = None) -> list[dict]:
    """List characters, optionally filtered to one kingdom slug."""
    c = get_catalog()
    chars = (c.characters_for(kingdom_slug) if kingdom_slug
             else list(c.characters.values()))
    return [{"id": x.id, "name": x.name, "title": x.title, "role": x.role,
             "kingdom": x.kingdom_slug, "deity": x.deity} for x in chars]


@mcp.tool()
def get_character(character_id: str) -> dict:
    """Full game-ready detail for one character (weapons, vehicles, deities…)."""
    c = get_catalog().characters.get(character_id)
    return c.model_dump() if c else {"error": f"no character '{character_id}'"}


@mcp.tool()
def get_game_data(kind: str = "heroes") -> list[dict]:
    """Bulk game data. kind = heroes | villains | weapons | vehicles."""
    c = get_catalog()
    kind = kind.lower()
    if kind in ("heroes", "villains"):
        role = "hero" if kind == "heroes" else "villain"
        return [x.model_dump() for x in c.characters.values() if x.role == role]
    if kind == "weapons":
        return [{"character": x.name, "kingdom": x.kingdom_slug, **w.model_dump()}
                for x in c.characters.values() for w in x.weapons]
    if kind == "vehicles":
        return [{"character": x.name, "kingdom": x.kingdom_slug, **v.model_dump()}
                for x in c.characters.values() for v in x.vehicles]
    return [{"error": "kind must be heroes|villains|weapons|vehicles"}]


@mcp.tool()
def get_connections(name: str) -> dict:
    """Find a character/kingdom in the Volume I family & connection map."""
    if not config.FAMILY_TREE.is_file():
        return {"error": "family tree not found"}
    text = config.FAMILY_TREE.read_text(encoding="utf-8")
    nl = name.lower()
    hits = [ln.strip() for ln in text.splitlines() if nl in ln.lower()]
    return {"name": name, "matches": hits,
            "note": "Lines from Volume-1-Family-Tree.md mentioning the name."}


@mcp.tool()
def reload_world() -> dict:
    """Rebuild the world from disk after story files were edited."""
    get_catalog(force=True)
    return get_catalog().export()["counts"]


@mcp.resource("story://{story_id}")
def story_resource(story_id: str) -> str:
    """Expose a story's text as an MCP resource."""
    s = get_catalog().load_story(story_id)
    return s.body_md if s else f"(no story '{story_id}')"


def main() -> None:
    mcp.run()


if __name__ == "__main__":
    main()
