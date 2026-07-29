#!/usr/bin/env python3
"""Build region-wise print PDFs (one booklet per region per chapter).

Same formatting, paging, footers and 'Hulmane' watermark as make-print-pdfs.py,
but grouped by region (South, Central, East, West, North, Northeast) instead of
one big chapter file. Chapter 4 is saga-wide (no region) so it stays a single
booklet. Re-run any time the story .txt files change.
"""
import glob
import html
import re
import subprocess
import tempfile
from collections import defaultdict
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import Color

BASE = Path("/Users/smk/repos/age-of-mythos/targets/story-text")
STORIES_DIR = Path("/Users/smk/repos/age-of-mythos/image-prompts/stories")
OUT = BASE / "print-pdf" / "by-region"
OUT.mkdir(parents=True, exist_ok=True)
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

CHAPTERS = {
    1: ("chapter-1-rise-of-legends", "Chapter 1 — Rise of Legends"),
    2: ("chapter-2-civil-war", "Chapter 2 — Civil War"),
    3: ("chapter-3-rise-of-beasts", "Chapter 3 — Rise of Beasts"),
    4: ("chapter-4-the-great-epic", "Chapter 4 — The Great Epic"),
}
# display order + pretty label for each region
REGIONS = [
    ("south", "South · Dakshina"),
    ("central", "Central · Madhya"),
    ("east", "East · Purva"),
    ("west", "West · Paschima"),
    ("north", "North · Uttara"),
    ("northeast", "Northeast · Pragjyotisha"),
]
EN_FONT = "Georgia,'Times New Roman',serif"
KN_FONT = "'Noto Serif Kannada','Kannada MN',serif"


def load_region_map():
    m = {}
    for f in glob.glob(str(STORIES_DIR / "ch1_*.py")):
        for mt in re.finditer(
                r'"region"\s*:\s*"([^"]+)".*?"kingdom"\s*:\s*"([^"]+)"',
                open(f).read(), re.S):
            m[mt.group(2).lower()] = mt.group(1)
    return m


REGION_OF = load_region_map()


def prettify(part):
    return part.replace("-", " ").strip().title()


def kingdom_of(fname, prefix):
    stem = fname
    for suf in (".kn.txt", ".txt"):
        if stem.endswith(suf):
            stem = stem[:-len(suf)]
            break
    stem = stem[len(prefix):].lstrip("_-")
    return stem.split("__")[0]


def story_title(fname, prefix):
    stem = fname
    for suf in (".kn.txt", ".txt"):
        if stem.endswith(suf):
            stem = stem[:-len(suf)]
            break
    stem = stem[len(prefix):].lstrip("_-")
    segs = [s for s in stem.split("__") if s]
    if not segs:
        return prettify(fname)
    kingdom = prettify(segs[0])
    if len(segs) > 1:
        return f"{kingdom} — {prettify(segs[1])}"
    return kingdom


def paras_to_html(text):
    out = []
    for b in re.split(r"\n\s*\n", text.replace("\r\n", "\n").strip()):
        b = b.strip()
        if b:
            out.append(f"<p>{html.escape(b).replace(chr(10), '<br>')}</p>")
    return "\n".join(out)


def page_css(body_font):
    return f"""
@page {{ size: A4; margin: 20mm 18mm 24mm 18mm; }}
body {{ font-family: {body_font}; font-size: 12pt; line-height: 1.7; color:#1a1a1a; }}
.cover {{ text-align:center; page-break-after: always;
  display:flex; flex-direction:column; justify-content:center; min-height:250mm; }}
.cover .brand {{ font-family:{EN_FONT}; letter-spacing:3px; text-transform:uppercase;
  font-size:12pt; color:#8a6d3b; }}
.cover h1 {{ font-size:30pt; margin:14px 0; }}
.cover .lang {{ font-size:14pt; color:#555; margin-top:8px; }}
.toc {{ page-break-after: always; }}
.toc h2 {{ font-family:{EN_FONT}; border-bottom:2px solid #8a6d3b; padding-bottom:6px; }}
.toc ol {{ line-height:2; }}
.story {{ page-break-before: always; }}
.story h2 {{ font-family:{EN_FONT}; font-size:18pt; color:#5a3e1b;
  border-bottom:1px solid #d8c9a8; padding-bottom:6px; margin-bottom:14px; }}
p {{ margin:0 0 11px; text-align:justify; }}
"""


_rc = [0]


def render(html_str, tmpdir):
    _rc[0] += 1
    hp = tmpdir / f"doc{_rc[0]}.html"
    pp = tmpdir / f"doc{_rc[0]}.pdf"
    hp.write_text(html_str, encoding="utf-8")
    subprocess.run(
        [CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
         f"--print-to-pdf={pp}", hp.as_uri()],
        check=True, capture_output=True)
    return pp


def wrap(body, body_font):
    return (f'<!DOCTYPE html><html><head><meta charset="utf-8"><style>'
            f'{page_css(body_font)}</style></head><body>{body}</body></html>')


def stamp(src_pdf, dst_pdf, page_story, total):
    grey = Color(0.55, 0.55, 0.55)
    lightgrey = Color(0.72, 0.72, 0.72)
    dims = [(float(p.mediabox.width), float(p.mediabox.height))
            for p in PdfReader(str(src_pdf)).pages]
    ov_path = Path(tempfile.mktemp(suffix=".pdf"))
    c = canvas.Canvas(str(ov_path))
    for i, (w, h) in enumerate(dims):
        c.setPageSize((w, h))
        y = 34
        c.setFont("Helvetica-Oblique", 9)
        c.setFillColor(lightgrey)
        c.drawCentredString(w / 2, y, "Hulmane")
        c.setFont("Helvetica", 8)
        c.setFillColor(grey)
        c.drawRightString(w - 40, y, f"Page {i + 1} of {total}")
        s = page_story.get(i)
        if s:
            c.drawString(40, y,
                         f"Story {s[0]} of {s[1]}   |   Page {s[2]} of {s[3]}")
        c.showPage()
    c.save()
    writer = PdfWriter(clone_from=str(src_pdf))
    overlay = PdfReader(str(ov_path))
    for i, page in enumerate(writer.pages):
        page.merge_page(overlay.pages[i])
    with open(dst_pdf, "wb") as f:
        writer.write(f)
    ov_path.unlink()


def make_booklet(stories, cover_title, cover_sub, lang, out_name):
    """stories: list of (title, body_html). Renders one stamped PDF."""
    body_font = EN_FONT if lang == "en" else KN_FONT
    n = len(stories)
    toc = "\n".join(f"<li>{html.escape(t)}</li>" for t, _ in stories)
    sections = "".join(
        f'<section class="story"><h2>{html.escape(t)}</h2>{b}</section>'
        for t, b in stories)
    cover = (f'<div class="cover"><div class="brand">Age of Mythos</div>'
             f'<h1>{html.escape(cover_title)}</h1>'
             f'<div class="lang">{html.escape(cover_sub)}</div></div>'
             f'<div class="toc"><h2>Contents</h2><ol>{toc}</ol></div>')
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        raw = render(wrap(cover + sections, body_font), td)
        total = len(PdfReader(str(raw)).pages)
        prefix_pages = len(PdfReader(str(render(wrap(cover, body_font), td))).pages)
        page_story = {}
        cur = prefix_pages
        for idx, (t, b) in enumerate(stories, start=1):
            sect = f'<section class="story"><h2>{html.escape(t)}</h2>{b}</section>'
            sp = len(PdfReader(str(render(wrap(sect, body_font), td))).pages)
            for local, p in enumerate(range(cur, cur + sp), start=1):
                page_story[p] = (idx, n, local, sp)
            cur += sp
        dst = OUT / out_name
        if cur != total:
            print(f"  ! page mismatch {out_name}: computed {cur} vs {total}")
        stamp(raw, dst, page_story, total)
        print(f"  {out_name}  {total} pages, {n} stories")


def build(lang):
    folder = BASE if lang == "en" else BASE / "kannada"
    ext = ".txt" if lang == "en" else ".kn.txt"
    lang_label = "English" if lang == "en" else "ಕನ್ನಡ"
    LG = lang.upper()
    for ch, (prefix, ch_title) in CHAPTERS.items():
        files = sorted(folder.glob(f"{prefix}*{ext}"))
        if ch == 4:
            # saga-wide: single booklet, no region split
            stories = [(story_title(f.name, prefix),
                        paras_to_html(f.read_text(encoding="utf-8"))) for f in files]
            make_booklet(stories, ch_title, f"Saga-wide · {lang_label} Edition",
                         lang, f"Age-of-Mythos-{LG}-Ch4-Finale.pdf")
            continue
        by_region = defaultdict(list)
        for f in files:
            reg = REGION_OF.get(kingdom_of(f.name, prefix))
            by_region[reg].append(f)
        for reg, label in REGIONS:
            rf = by_region.get(reg)
            if not rf:
                continue
            stories = [(story_title(f.name, prefix),
                        paras_to_html(f.read_text(encoding="utf-8"))) for f in rf]
            title = f"{label.split(' · ')[0]} — {ch_title}"
            sub = f"{label} · {lang_label} Edition"
            make_booklet(stories, title, sub, lang,
                         f"Age-of-Mythos-{LG}-Ch{ch}-{reg.capitalize()}.pdf")


for lang in ("en", "kn"):
    print(f"=== {lang} ===")
    build(lang)
print("DONE")
