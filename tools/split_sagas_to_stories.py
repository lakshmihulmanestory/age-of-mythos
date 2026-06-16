#!/usr/bin/env python3
"""
split_sagas_to_stories.py — Extract each kingdom's saga from the shared
state-stories-data.js into a self-contained, styled HTML story page placed in
that kingdom's own `stories/` folder.

The central data file is left untouched. Kingdoms that already have a populated
`stories/` folder (hand-authored pages) are skipped unless --overwrite is given.

Usage:
  python3 tools/split_sagas_to_stories.py --dry-run     # preview the plan
  python3 tools/split_sagas_to_stories.py               # write the pages
"""
from __future__ import annotations

import argparse
import html
import re
from pathlib import Path

CHAPTER = "content/volume-1-maha-parva/chapter-1-rise-of-legends"
DATA_FILE = f"{CHAPTER}/js/state-stories-data.js"
REGIONS_ROOT = f"{CHAPTER}/bharatavarsha/regions"

REGION_LABEL = {
    "south": "Dakshinapatha (South)", "west": "Paschimapatha (West)",
    "east": "Purvapatha (East)", "north": "Uttarapatha (North)",
    "northeast": "Pragjyotisha (Northeast)", "central": "Madhyadesa (Central)",
}


# The kingdom-name / saga-title subtitle separator: an em/en dash, or a
# space-padded hyphen. NOT a bare hyphen (those are internal, e.g. Chaya-Golkonda).
SUBTITLE_SEP = re.compile(r"\s*[—–]\s*|\s+-\s+")


def title_head(text: str) -> str:
    """The part before the ' — subtitle', preserving internal hyphens."""
    return SUBTITLE_SEP.split(text, maxsplit=1)[0].strip() or text


def slugify(text: str) -> str:
    """Lowercase slug of the pre-subtitle head; apostrophes dropped, not hyphenated."""
    head = title_head(text).replace("'", "").replace("’", "")
    s = re.sub(r"[^a-z0-9]+", "-", head.lower()).strip("-")
    return s or "story"


def field(block: str, name: str) -> str:
    m = re.search(rf'{name}:\s*"((?:[^"\\]|\\.)*)"', block)
    return m.group(1) if m else ""


def parse_kingdoms(raw: str) -> list[dict]:
    """Split the JS into kingdom blocks and pull the fields we need."""
    # Block boundaries: each kingdom object starts at a `stateId:` line.
    idxs = [m.start() for m in re.finditer(r'\n\s*stateId:\s*"', raw)]
    idxs.append(len(raw))
    kingdoms = []
    for i in range(len(idxs) - 1):
        block = raw[idxs[i]:idxs[i + 1]]
        k = {
            "stateId": field(block, "stateId"),
            "stateName": field(block, "stateName"),
            "kingdomName": field(block, "kingdomName"),
            "region": field(block, "region"),
            "motto": field(block, "motto"),
            "heroName": "",
            "villainName": "",
        }
        # Hero / villain names (first name: inside each sub-object).
        hm = re.search(r'hero:\s*\{.*?name:\s*"((?:[^"\\]|\\.)*)"', block, re.S)
        vm = re.search(r'villain:\s*\{.*?name:\s*"((?:[^"\\]|\\.)*)"', block, re.S)
        k["heroName"] = hm.group(1) if hm else ""
        k["villainName"] = vm.group(1) if vm else ""
        # Saga: title + backtick narrative.
        sm = re.search(r'saga:\s*\{', block)
        title, narrative = "", ""
        if sm:
            after = block[sm.end():]
            tm = re.search(r'title:\s*"((?:[^"\\]|\\.)*)"', after)
            title = tm.group(1) if tm else ""
            nm = re.search(r'narrative:\s*`([^`]*)`', after, re.S)
            narrative = nm.group(1) if nm else ""
        k["sagaTitle"] = title
        k["narrative"] = narrative
        kingdoms.append(k)
    return kingdoms


def render_narrative_html(narrative: str) -> str:
    """Turn the plain-text saga into HTML paragraphs / headings.

    Conventions in the source text:
      ═══ FIRST HALF ═══     -> section divider banner
      ALL-CAPS SHORT LINE    -> scene heading (h3)
      blank-line separated    -> paragraphs
    """
    blocks = re.split(r"\n\s*\n", narrative.strip())
    out: list[str] = []
    for b in blocks:
        line = b.strip()
        if not line:
            continue
        esc = html.escape(line)
        # Divider like ═══ FIRST HALF ═══
        m = re.fullmatch(r"[═=]{2,}\s*(.+?)\s*[═=]{2,}", line)
        if m:
            out.append(
                f'    <div class="half-banner"><span>{html.escape(m.group(1))}</span></div>'
            )
            continue
        # Single short ALL-CAPS line -> scene heading.
        if "\n" not in line and len(line) <= 70 and re.fullmatch(r"[^a-z]+", line) \
                and any(c.isalpha() for c in line):
            out.append(f"    <h3>{esc}</h3>")
            continue
        # Otherwise a paragraph; keep internal newlines as <br>.
        para = esc.replace("\n", "<br>\n      ")
        out.append(f"    <p>{para}</p>")
    return "\n".join(out)


PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title_esc} &mdash; {kingdom_short} &mdash; Age of Mythos</title>
  <style>
    :root {{ --bg:#0a0e14; --gold:#d8c890; --ac:#c0944a; --text:#d8e0e8; --dim:#9aabc0; --border:rgba(216,200,144,.18); }}
    * {{ box-sizing:border-box; margin:0; padding:0; }}
    body {{ font-family:Georgia,serif; background:var(--bg); color:var(--text); line-height:1.85; }}
    .story-banner {{ text-align:center; padding:72px 24px 38px; background:radial-gradient(ellipse at center,rgba(192,148,74,.12) 0%,transparent 70%); border-bottom:1px solid var(--border); }}
    .story-banner .eyebrow {{ font-size:.6em; letter-spacing:5px; text-transform:uppercase; color:var(--ac); margin-bottom:14px; }}
    .story-banner h1 {{ font-size:2.4em; color:var(--gold); margin-bottom:.2em; letter-spacing:1.5px; }}
    .story-banner .subtitle {{ font-size:.9em; color:var(--dim); font-style:italic; letter-spacing:1px; }}
    .story-banner .motto {{ font-size:.78em; color:var(--ac); font-style:italic; margin-top:12px; }}
    .k-nav {{ display:flex; gap:8px; justify-content:center; flex-wrap:wrap; padding:14px 20px; background:rgba(0,0,0,.5); border-bottom:1px solid var(--border); }}
    .k-nav a {{ padding:5px 16px; border-radius:20px; border:1px solid rgba(216,200,144,.28); color:var(--dim); font-size:.72em; letter-spacing:1px; text-decoration:none; transition:all .15s; }}
    .k-nav a:hover {{ background:rgba(216,200,144,.12); border-color:var(--gold); color:#fff; }}
    .cast {{ max-width:780px; margin:26px auto 0; text-align:center; color:var(--dim); font-size:.82em; letter-spacing:.5px; }}
    .cast strong {{ color:var(--gold); }}
    .story-body {{ max-width:780px; margin:0 auto; padding:44px 22px 80px; }}
    .story-body h3 {{ font-size:1.05em; color:var(--ac); margin:36px 0 10px; letter-spacing:1px; text-transform:uppercase; }}
    .story-body p {{ font-size:.95em; margin-bottom:20px; }}
    .half-banner {{ text-align:center; margin:54px 0 30px; }}
    .half-banner span {{ display:inline-block; padding:10px 26px; border-top:1px solid var(--border); border-bottom:1px solid var(--border); color:var(--gold); letter-spacing:4px; font-size:.9em; text-transform:uppercase; }}
    .footer {{ text-align:center; padding:28px 20px; border-top:1px solid var(--border); color:var(--dim); font-size:.72em; }}
    .footer a {{ color:var(--ac); text-decoration:none; }}
  </style>
</head>
<body>
  <div class="story-banner">
    <div class="eyebrow">{region_label} &bull; Rise of Legends &bull; Chapter One</div>
    <h1>{title_esc}</h1>
    <div class="subtitle">{kingdom_full} &mdash; {state_name}</div>
    <div class="motto">&ldquo;{motto_esc}&rdquo;</div>
  </div>
  <div class="k-nav">
    <a href="../index.html">&larr; {kingdom_short}</a>
    <a href="../story.html">Story (interactive)</a>
    <a href="../identity.html">Identity</a>
    <a href="../rules.html">Rules &amp; Weapons</a>
  </div>
  <div class="cast">Hero: <strong>{hero_esc}</strong> &nbsp;&bull;&nbsp; Villain: <strong>{villain_esc}</strong></div>
  <div class="story-body">
{body}
  </div>
  <footer class="footer">
    <p>{title_esc} &bull; {kingdom_short} &bull; Rise of Legends &bull; Age of Mythos Volume I</p>
    <p style="margin-top:8px;"><a href="../index.html">&larr; {kingdom_short} Index</a></p>
  </footer>
</body>
</html>
"""


def build_page(k: dict) -> str:
    short = title_head(k["kingdomName"])
    return PAGE.format(
        title_esc=html.escape(k["sagaTitle"]),
        kingdom_short=html.escape(short),
        kingdom_full=html.escape(k["kingdomName"]),
        state_name=html.escape(k["stateName"]),
        region_label=html.escape(REGION_LABEL.get(k["region"], k["region"].title())),
        motto_esc=html.escape(k["motto"]),
        hero_esc=html.escape(k["heroName"]),
        villain_esc=html.escape(k["villainName"]),
        body=render_narrative_html(k["narrative"]),
    )


def main(argv=None) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--overwrite", action="store_true",
                    help="Also (re)generate for kingdoms that already have a stories/ folder")
    args = ap.parse_args(argv)

    repo = Path(__file__).resolve().parent.parent
    raw = (repo / DATA_FILE).read_text(encoding="utf-8")
    kingdoms = parse_kingdoms(raw)
    regions_root = repo / REGIONS_ROOT

    print(f"Parsed {len(kingdoms)} kingdoms from data file.\n")
    written = skipped = missing = 0
    for k in kingdoms:
        kslug = slugify(k["kingdomName"])
        kdir = regions_root / k["region"] / kslug
        if not kdir.is_dir():
            print(f"  ! NO FOLDER  {k['region']}/{kslug}  ({k['stateId']}) — skipped")
            missing += 1
            continue
        stories = kdir / "stories"
        fname = f"{slugify(k['sagaTitle'])}.html"
        target = stories / fname
        has_existing = stories.is_dir() and any(stories.glob("*.html"))
        if has_existing and not args.overwrite:
            existing = ", ".join(p.name for p in sorted(stories.glob("*.html")))
            print(f"  ~ SKIP       {k['region']}/{kslug}/stories  (has: {existing})")
            skipped += 1
            continue
        words = len(k["narrative"].split())
        print(f"  + WRITE      {k['region']}/{kslug}/stories/{fname}  ({words} words)")
        if not args.dry_run:
            stories.mkdir(parents=True, exist_ok=True)
            target.write_text(build_page(k), encoding="utf-8")
            written += 1

    print(f"\n{'Plan' if args.dry_run else 'Done'}: "
          f"{written} written, {skipped} skipped (hand-authored), {missing} missing-folder.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
