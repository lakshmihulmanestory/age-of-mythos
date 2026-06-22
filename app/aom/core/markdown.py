"""Render a story's markdown body to safe, reader-friendly HTML.

Scene headings (``## ...``) become ``<h2>`` automatically. Inline media written
as ``![](images/x.png)`` is rewritten to a served URL; image links that point at
a video file (``.mp4`` / ``.webm``) become a ``<video>`` element so the reader
supports video wherever the story provides it.
"""
from __future__ import annotations

import re

from markdown_it import MarkdownIt

_md = MarkdownIt("commonmark", {"html": False, "linkify": True, "typographer": True})
_md.enable(["table", "strikethrough"])

_VIDEO_EXT = (".mp4", ".webm", ".ogg", ".mov")


def render(body_md: str, asset_base: str) -> tuple[str, list[str], int]:
    """Return ``(html, image_urls, word_count)``.

    ``asset_base`` is the URL prefix that local ``images/...`` references resolve
    against (e.g. ``/story-asset/<story_id>``).
    """
    word_count = len(re.findall(r"\b\w+\b", body_md))
    html = _md.render(body_md)
    image_urls: list[str] = []

    def fix_src(match: re.Match) -> str:
        attr, url = match.group(1), match.group(2)
        if not re.match(r"^(https?:|/|data:)", url):
            url = f"{asset_base}/{url.lstrip('./')}"
        if url.lower().endswith(_VIDEO_EXT):
            return None  # handled below
        if attr == "src":
            image_urls.append(url)
        return f'{attr}="{url}"'

    # Rewrite <img src="..."> produced by markdown image syntax.
    def img_repl(m: re.Match) -> str:
        url = m.group(1)
        if not re.match(r"^(https?:|/|data:)", url):
            url = f"{asset_base}/{url.lstrip('./')}"
        if url.lower().endswith(_VIDEO_EXT):
            return (f'<video controls preload="metadata" class="story-video">'
                    f'<source src="{url}"></video>')
        image_urls.append(url)
        return (f'<img loading="lazy" class="story-img" src="{url}" '
                f'data-full="{url}" alt="">')

    html = re.sub(r'<img[^>]*\bsrc="([^"]+)"[^>]*>', img_repl, html)
    return html, image_urls, word_count
