"""FastAPI application: the modern Age of Mythos reader + game-data API."""
from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from aom.core import config, get_catalog
from aom.web.api import router as api_router

HERE = Path(__file__).resolve().parent
templates = Jinja2Templates(directory=str(HERE / "templates"))

app = FastAPI(title="Age of Mythos", version="0.1.0")
app.include_router(api_router)

# --- static + media mounts (story content stays at the repo root) ---------- #
app.mount("/static", StaticFiles(directory=str(HERE / "static")), name="static")
if config.AUDIO_DIR.is_dir():
    app.mount("/media/audio", StaticFiles(directory=str(config.AUDIO_DIR)), name="audio")
if config.MEDIA_DIR.is_dir():
    app.mount("/media/video", StaticFiles(directory=str(config.MEDIA_DIR)), name="video")
if config.IMAGES_DIR.is_dir():
    app.mount("/media/gallery", StaticFiles(directory=str(config.IMAGES_DIR)), name="gallery")


def _ctx(request: Request, **extra) -> dict:
    c = get_catalog()
    base = {"request": request, "catalog": c,
            "volumes": c.volumes, "region_label": config.REGION_LABEL}
    base.update(extra)
    return base


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    c = get_catalog()
    # Kingdoms that have cover art, for the Apple-TV-style artwork shelves.
    featured = [k for k in c.kingdoms.values() if k.banner_image]
    featured.sort(key=lambda k: (k.region or "zz", k.name))
    hero_img = next((k.banner_image for k in featured), None)
    hero_kingdom = next((k for k in featured), None)
    return templates.TemplateResponse(request, "home.html", _ctx(
        request, featured=featured, hero_img=hero_img, hero_kingdom=hero_kingdom))


@app.get("/v/{number}", response_class=HTMLResponse)
def volume_page(request: Request, number: int):
    v = get_catalog().volume(number)
    if not v:
        raise HTTPException(404, "volume not found")
    return templates.TemplateResponse(request, "volume.html", _ctx(request, vol=v))


@app.get("/v/{number}/c/{chapter}", response_class=HTMLResponse)
def chapter_page(request: Request, number: int, chapter: int):
    c = get_catalog()
    v = c.volume(number)
    ch = next((x for x in v.chapters if x.number == chapter), None) if v else None
    if not ch:
        raise HTTPException(404, "chapter not found")
    stories = [c.story_meta(s) for s in ch.story_ids]
    kingdoms = [c.kingdom(s) for s in ch.kingdom_slugs if c.kingdom(s)]
    return templates.TemplateResponse(request, "chapter.html", _ctx(request, vol=v, ch=ch, stories=stories, kingdoms=kingdoms))


@app.get("/k/{slug}", response_class=HTMLResponse)
def kingdom_page(request: Request, slug: str):
    c = get_catalog()
    k = c.kingdom(slug)
    if not k:
        raise HTTPException(404, "kingdom not found")
    chars = c.characters_for(slug)
    heroes = [x for x in chars if x.role == "hero"]
    villains = [x for x in chars if x.role == "villain"]
    stories = [c.story_meta(s) for s in k.story_ids if c.story_meta(s)]
    return templates.TemplateResponse(request, "kingdom.html", _ctx(request, k=k, heroes=heroes, villains=villains, stories=stories))


@app.get("/read/{sid}", response_class=HTMLResponse)
def read(request: Request, sid: str):
    c = get_catalog()
    story = c.load_story(sid)
    if not story:
        raise HTTPException(404, "story not found")
    prev, nxt = c.neighbours(sid)
    return templates.TemplateResponse(request, "reader.html", _ctx(
        request, story=story,
        kingdom=c.kingdom(story.kingdom_slug),
        gallery=c.story_gallery(sid),
        prev=c.story_meta(prev) if prev else None,
        nxt=c.story_meta(nxt) if nxt else None,
    ))


@app.get("/characters", response_class=HTMLResponse)
def characters_page(request: Request):
    chars = sorted(get_catalog().characters.values(), key=lambda x: (x.role, x.name))
    return templates.TemplateResponse(request, "characters.html", _ctx(request, characters=chars))


@app.get("/search", response_class=HTMLResponse)
def search_page(request: Request, q: str = ""):
    res = get_catalog().search(q) if q else {"stories": [], "kingdoms": [], "characters": []}
    return templates.TemplateResponse(request, "search.html", _ctx(request, q=q, res=res))


@app.get("/story-asset/{sid}/{filename}")
def story_asset(sid: str, filename: str):
    """Serve an image/video that lives inside a story's own folder."""
    from aom.core import assets
    story_dir = get_catalog().story_dir(sid)
    if story_dir is None or story_dir.is_file():
        raise HTTPException(404, "no assets for this story")
    path = assets.story_asset_path(story_dir, filename)
    if not path:
        raise HTTPException(404, "asset not found")
    return FileResponse(path)


@app.get("/kingdom-media/{slug}/{filename}")
def kingdom_media(slug: str, filename: str):
    """Serve a kingdom's curated art from its content ``media/kingdoms`` folder."""
    base = get_catalog().kingdom_media_dirs.get(slug)
    if base is None:
        raise HTTPException(404, "no media for this kingdom")
    target = (base / filename).resolve()
    if base.resolve() not in target.parents or not target.is_file():
        raise HTTPException(404, "asset not found")
    return FileResponse(target)


@app.get("/healthz")
def healthz():
    return {"ok": True, "counts": get_catalog().export()["counts"]}


def run() -> None:
    """Entry point for ``aom-web`` and ``python -m aom.web.main``."""
    import uvicorn
    uvicorn.run("aom.web.main:app", host=config.WEB_HOST, port=config.WEB_PORT,
                reload=bool(__import__("os").environ.get("AOM_RELOAD")))


if __name__ == "__main__":
    run()
