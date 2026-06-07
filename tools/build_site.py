#!/usr/bin/env python3
"""
Age of Mythos — site builder.

Adds a unified navigation + theming layer across the static HTML novel:
  * generates assets/manifest.js  (tree + reading spine + per-page theme tokens)
  * injects the shared layer (aom.css / manifest.js / aom.js + <body> theme attrs)
    into every Volume-1 page  (idempotent: re-runnable)
  * re-templates the 31 story leaves under one kingdom-tinted reader theme
  * regenerates themed "coming soon" shells for Volumes 2-6
  * writes tools/build_report.txt

Designed for file:// use — no server, no fetch. aom.js self-locates the site
root from its own <script src>, so injected nav links work from any depth.

Run:  python3 tools/build_site.py
"""
import os, re, json, html, glob, colorsys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AOM  = "content"
KDATA_JS = os.path.join(ROOT, AOM,
    "volume-1-maha-parva/chapter-1-rise-of-legends/js/kingdom-identity-data.js")

MARK = "aom:injected"  # idempotency marker

# ---- volume palettes (match .v1..v6 in index.html) -------------------------
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
CHAPTERS = {  # n -> (dir-slug, title)
    1: ("chapter-1-rise-of-legends", "Rise of Legends"),
    2: ("chapter-2-civil-war",       "Civil War"),
    3: ("chapter-3-rise-of-beasts",  "Rise of Beasts"),
    4: ("chapter-4-the-great-epic",  "The Great Epic"),
}
ROMAN = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI"}

REGION_ORDER = ["north", "northeast", "east", "central", "west", "south"]
REGION_LABEL = {"north": "North", "northeast": "Northeast", "east": "East",
                "central": "Central", "west": "West", "south": "South"}

# kingdom dirs whose banner state-name doesn't cleanly match the data
DIR_STATE_OVERRIDE = {"vijayanagara-reborn": "Karnataka"}

report = {"injected": [], "retemplated": [], "outliers": [], "stubs": [], "skipped": []}

# ===========================================================================
# colour helpers
# ===========================================================================
def hex2rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def rgb2hex(r, g, b):
    return "#%02x%02x%02x" % (max(0, min(255, int(r))),
                              max(0, min(255, int(g))), max(0, min(255, int(b))))

def shade(hex_color, dh=0.0, dl=0.0):
    """Shift a hex colour in HLS space (hue & lightness deltas in 0..1)."""
    r, g, b = [c / 255 for c in hex2rgb(hex_color)]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    h = (h + dh) % 1.0
    l = max(0.0, min(1.0, l + dl))
    r, g, b = colorsys.hls_to_rgb(h, l, s)
    return rgb2hex(r * 255, g * 255, b * 255)

def chapter_accent(vol_accent, ch):
    """A distinct shade per chapter, kept within the volume's family."""
    return shade(vol_accent, dh=(ch - 1) * 0.045, dl=-(ch - 1) * 0.04)

def glow(hex_color, a=0.18):
    r, g, b = hex2rgb(hex_color)
    return "rgba(%d,%d,%d,%s)" % (r, g, b, a)

# ===========================================================================
# kingdom data
# ===========================================================================
def parse_kingdom_data():
    t = open(KDATA_JS, encoding="utf-8").read()
    recs = re.findall(
        r"\{\s*id:\s*'([^']+)',\s*state:\s*'([^']+)',\s*region:\s*'([^']+)',"
        r"\s*kingdomName:\s*'((?:[^'\\]|\\.)*)'.*?colors:\s*\{\s*primary:\s*'([^']+)',"
        r"\s*secondary:\s*'([^']+)'", t, re.S)
    by_state, order = {}, []
    for _id, state, region, kname, prim, sec in recs:
        rec = {"id": _id, "state": state, "region": region,
               "kingdomName": kname.replace("\\'", "'"),
               "primary": prim, "secondary": sec}
        by_state[state] = rec
        order.append(rec)
    return by_state, order

KDATA, KORDER = parse_kingdom_data()

def norm_state(raw):
    raw = re.sub(r"\s*(&mdash;|—|&ndash;|–).*$", "", raw)
    return html.unescape(raw).strip()

KDIR_CACHE = {}  # kingdom dir-name -> data record (stable across chapters)

def kingdom_for_dir(kdir, abspath):
    """Resolve a kingdom directory -> data record via its banner state-name.
    Cached by dir name so ch2/ch3 hubs reuse the resolution found in ch1."""
    if kdir in KDIR_CACHE:
        return KDIR_CACHE[kdir]
    rec = None
    if kdir in DIR_STATE_OVERRIDE:
        rec = KDATA.get(DIR_STATE_OVERRIDE[kdir])
    if rec is None:
        idx = os.path.join(abspath, "index.html")
        if os.path.isfile(idx):
            txt = open(idx, encoding="utf-8", errors="replace").read()
            m = re.search(r'class="[^"]*\bstate-name\b[^"]*"[^>]*>(.*?)<', txt, re.S)
            if m:
                st = norm_state(m.group(1))
                rec = KDATA.get(st)
    if rec is not None:
        KDIR_CACHE[kdir] = rec
    return rec

# ===========================================================================
# small HTML helpers
# ===========================================================================
def read(p):  return open(p, encoding="utf-8", errors="replace").read()
def write(p, s): open(p, "w", encoding="utf-8").write(s)
def rel_of(abspath): return os.path.relpath(abspath, ROOT).replace(os.sep, "/")
def prefix_for(relpath): return "../" * relpath.count("/")

def get_h1(txt):
    m = re.search(r"<h1[^>]*>(.*?)</h1>", txt, re.S)
    if m:
        return html.unescape(re.sub(r"<[^>]+>", "", m.group(1))).strip()
    return None

def get_title(txt):
    m = re.search(r"<title[^>]*>(.*?)</title>", txt, re.S)
    if m:
        return html.unescape(re.split(r"\s+[—\-]\s+|&mdash;", m.group(1))[0]).strip()
    return None

def page_title(abspath, fallback):
    txt = read(abspath)
    return get_h1(txt) or get_title(txt) or fallback

# ===========================================================================
# node registry
# ===========================================================================
pages = {}     # relpath -> meta dict
spine = []     # ordered relpaths
nav   = {"volumes": []}   # overview tree

def tokens(vol_accent, vol_accent2, ch_accent, k_accent=None, k_accent2=None):
    ka  = k_accent or ch_accent
    ka2 = k_accent2 or vol_accent2
    return {"volAccent": vol_accent, "volAccent2": vol_accent2,
            "chAccent": ch_accent, "kAccent": ka, "kAccent2": ka2,
            "glow": glow(ka)}

def register(relpath, title, ntype, tok, crumbs, in_spine=False, vol_label="", ch_label=""):
    meta = {"title": title, "type": ntype, "tokens": tok, "crumbs": crumbs,
            "volLabel": vol_label, "chLabel": ch_label, "si": -1}
    if in_spine:
        meta["si"] = len(spine)
        spine.append(relpath)
    pages[relpath] = meta
    return meta

def crumb(label, path=""): return {"label": label, "path": path}

# ===========================================================================
# build the model
# ===========================================================================
def exists(*parts):
    return os.path.isfile(os.path.join(ROOT, *parts))

def build_model():
    HOME = crumb("Home", "index.html")
    for vol in range(1, 7):
        vslug = VOL_SLUG[vol]
        va, va2 = VOL_PALETTE[vol]
        vlabel = "Volume %s — %s" % (ROMAN[vol], VOL_TITLE[vol])
        vrel = "%s/%s/index.html" % (AOM, vslug)
        vol_node = {"n": vol, "title": VOL_TITLE[vol], "subtitle": VOL_SUBTITLE[vol],
                    "accent": va, "rel": vrel, "available": vol == 1, "chapters": []}
        nav["volumes"].append(vol_node)

        if exists(AOM, vslug, "index.html"):
            register(vrel, "Volume %s — %s" % (ROMAN[vol], VOL_TITLE[vol]),
                     "volume", tokens(va, va2, va),
                     [HOME, crumb(vlabel)], vol_label=vlabel)

        for ch in range(1, 5):
            cslug, ctitle = CHAPTERS[ch]
            ca = chapter_accent(va, ch)
            clabel = "Chapter %d · %s" % (ch, ctitle)
            crel = "%s/%s/%s/index.html" % (AOM, vslug, cslug)
            ch_node = {"n": ch, "title": ctitle, "accent": ca, "rel": crel,
                       "available": exists(AOM, vslug, cslug, "index.html"),
                       "regions": []}
            vol_node["chapters"].append(ch_node)
            if not ch_node["available"]:
                continue

            register(crel, ctitle, "chapter", tokens(va, va2, ca),
                     [HOME, crumb(vlabel, vrel), crumb(clabel)],
                     in_spine=(vol == 1), vol_label=vlabel, ch_label=clabel)

            if vol != 1:
                continue  # only Volume 1 has real content

            vlink = crumb(vlabel, vrel)
            clink = crumb(clabel, crel)
            chdir_abs = os.path.join(ROOT, AOM, vslug, cslug)

            # ---- kingdoms, region by region ----
            for region in REGION_ORDER:
                rdir = os.path.join(chdir_abs, "bharatavarsha", "regions", region)
                if not os.path.isdir(rdir):
                    continue
                # order kingdoms by canonical data order, then any extras
                present = [d for d in os.listdir(rdir)
                           if os.path.isdir(os.path.join(rdir, d))]
                ordered = []
                for rec in KORDER:
                    if rec["region"] != region:
                        continue
                    for d in present:
                        if d not in ordered and kingdom_for_dir(d, os.path.join(rdir, d)) is rec:
                            ordered.append(d)
                for d in present:
                    if d not in ordered:
                        ordered.append(d)

                rlabel = REGION_LABEL[region]
                for kdir in ordered:
                    kabs = os.path.join(rdir, kdir)
                    rec = kingdom_for_dir(kdir, kabs)
                    khub = os.path.join(kabs, "index.html")
                    if os.path.isfile(khub):
                        raw = page_title(khub, kdir.replace("-", " ").title())
                        kname = re.split(r"\s+(?:—|&mdash;|-)\s+", raw)[0].strip()
                    else:
                        kname = (rec["kingdomName"] if rec else kdir.replace("-", " ").title())
                    ksec = rec["secondary"] if rec else ca
                    kpri = rec["primary"] if rec else va2
                    ktok = tokens(va, va2, ca, ksec, kpri)
                    kbase = "%s/%s/%s/bharatavarsha/regions/%s/%s" % (AOM, vslug, cslug, region, kdir)

                    king_node = {"name": kname, "rel": "", "accent": ksec, "stories": []}

                    # kingdom hub (in spine)
                    if os.path.isfile(os.path.join(kabs, "index.html")):
                        krel = kbase + "/index.html"
                        king_node["rel"] = krel
                        register(krel, kname, "kingdom", ktok,
                                 [HOME, vlink, clink, crumb(rlabel), crumb(kname)],
                                 in_spine=True, vol_label=vlabel, ch_label=clabel)
                    klink = crumb(kname, king_node["rel"]) if king_node["rel"] else crumb(kname)

                    # reference subpages (not in spine)
                    for sub, lbl in (("identity.html", "Identity"),
                                     ("rules.html", "Rules & Weapons"),
                                     ("story.html", "Story")):
                        sp = os.path.join(kabs, sub)
                        if os.path.isfile(sp):
                            srel = kbase + "/" + sub
                            register(srel, kname + " — " + lbl, "kingdom-sub", ktok,
                                     [HOME, vlink, clink, crumb(rlabel), klink, crumb(lbl)],
                                     vol_label=vlabel, ch_label=clabel)

                    # story leaves (in spine)
                    sdir = os.path.join(kabs, "stories")
                    if os.path.isdir(sdir):
                        for sf in sorted(os.listdir(sdir)):
                            if not sf.endswith(".html"):
                                continue
                            sabs = os.path.join(sdir, sf)
                            srel = kbase + "/stories/" + sf
                            stitle = page_title(sabs, sf[:-5].replace("-", " ").title())
                            register(srel, stitle, "story", ktok,
                                     [HOME, vlink, clink, crumb(rlabel), klink, crumb(stitle)],
                                     in_spine=True, vol_label=vlabel, ch_label=clabel)
                            king_node["stories"].append({"title": stitle, "rel": srel})

                    # attach kingdom to nav tree under its region
                    rnode = next((x for x in ch_node["regions"] if x["region"] == region), None)
                    if not rnode:
                        rnode = {"region": region, "label": rlabel, "kingdoms": []}
                        ch_node["regions"].append(rnode)
                    rnode["kingdoms"].append(king_node)

            # ---- remaining chapter-level / section pages (chrome only) ----
            for f in glob.glob(os.path.join(chdir_abs, "**", "*.html"), recursive=True):
                rp = rel_of(f)
                if rp in pages or "/stories/" in rp or "/regions/" in rp:
                    continue
                inside = rp.split("%s/%s/" % (vslug, cslug))[-1]
                title = page_title(f, inside.rsplit("/", 1)[-1][:-5].replace("-", " ").title())
                # section subdir vs chapter-level
                register(rp, title, "page", tokens(va, va2, ca),
                         [HOME, vlink, clink, crumb(title)],
                         vol_label=vlabel, ch_label=clabel)

build_model()

# ===========================================================================
# emit manifest.js
# ===========================================================================
manifest = {"home": "index.html", "overview": "hierarchy.html",
            "spine": spine, "pages": pages, "nav": nav}
os.makedirs(os.path.join(ROOT, "assets"), exist_ok=True)
write(os.path.join(ROOT, "assets", "manifest.js"),
      "/* generated by tools/build_site.py — do not edit by hand */\n"
      "window.AOM_MANIFEST = " + json.dumps(manifest, ensure_ascii=False) + ";\n")

# ===========================================================================
# inject shared layer into a page (idempotent)
# ===========================================================================
LINK_TMPL = '  <link rel="stylesheet" href="%sassets/aom.css"> <!-- %s -->\n'
SCRIPT_TMPL = ('  <script src="%sassets/manifest.js"></script>\n'
               '  <script src="%sassets/aom.js"></script> <!-- %s -->\n')

def set_body_attrs(txt, meta):
    tok = meta["tokens"]
    attrs = ('class="aom" data-aom-type="%s"' % meta["type"])
    def repl(m):
        existing = m.group(1)
        if "class=" in existing and "aom" in existing:
            return m.group(0)
        # merge: keep existing attrs, add ours
        return "<body %s %s>" % (attrs, existing.strip())
    new, n = re.subn(r"<body([^>]*)>", repl, txt, count=1)
    return new

def refresh_assets(relpath):
    """Recompute the relative `../` depth of the three shared-asset URLs so the
    site survives being moved to a different folder depth. Runs on every build,
    independent of the injection marker."""
    abspath = os.path.join(ROOT, relpath)
    txt = read(abspath)
    if "assets/aom.css" not in txt and "assets/aom.js" not in txt:
        return False
    pre = prefix_for(relpath)
    new = re.sub(
        r'(href|src)="(?:\.\./)*assets/(aom\.css|manifest\.js|aom\.js)"',
        lambda m: '%s="%sassets/%s"' % (m.group(1), pre, m.group(2)), txt)
    if new != txt:
        write(abspath, new)
        return True
    return False

def inject(relpath, meta):
    abspath = os.path.join(ROOT, relpath)
    txt = read(abspath)
    if MARK in txt:
        return False  # already injected
    pre = prefix_for(relpath)
    # head
    link = LINK_TMPL % (pre, MARK)
    if "</head>" in txt:
        txt = txt.replace("</head>", link + "</head>", 1)
    else:
        txt = link + txt
    # scripts
    script = SCRIPT_TMPL % (pre, pre, MARK)
    if "</body>" in txt:
        txt = txt.replace("</body>", script + "</body>", 1)
    else:
        txt = txt + script
    # body attrs
    txt = set_body_attrs(txt, meta)
    write(abspath, txt)
    return True

# ===========================================================================
# re-template a story leaf under the reader theme
# ===========================================================================
def grab(pattern, txt, flags=re.S):
    m = re.search(pattern, txt, flags)
    return m.group(1).strip() if m else None

def extract_div_inner(txt, classname):
    """Return the inner HTML of <div class="...classname..."> using balanced
    <div>/</div> counting, so nested divs are captured correctly."""
    m = re.search(r'<div\b[^>]*class="[^"]*\b%s\b[^"]*"[^>]*>' % re.escape(classname), txt)
    if not m:
        return None
    start = m.end()
    depth = 1
    for tag in re.finditer(r'<(/?)div\b', txt[start:]):
        depth += -1 if tag.group(1) else 1
        if depth == 0:
            return txt[start:start + tag.start()].strip()
    return txt[start:].strip()

READER_TMPL = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Age of Mythos</title>
  <link rel="stylesheet" href="{pre}assets/aom.css"> <!-- {mark} -->
</head>
<body class="aom aom-reader" data-aom-type="story">
  <div class="reader-banner">
    {eyebrow}{h1}{subtitle}{motto}
  </div>
  {cast}
  <article class="reader-body">
{body}
  </article>
  <script src="{pre}assets/manifest.js"></script>
  <script src="{pre}assets/aom.js"></script> <!-- {mark} -->
</body>
</html>
"""

def retemplate_story(relpath, meta):
    abspath = os.path.join(ROOT, relpath)
    txt = read(abspath)
    if MARK in txt:
        return "skip"
    banner = extract_div_inner(txt, "story-banner")
    body = extract_div_inner(txt, "story-body")
    if banner is None or body is None:
        report["outliers"].append(relpath)
        return "outlier"
    eyebrow = grab(r'class="eyebrow"[^>]*>(.*?)</div>', banner)
    h1 = grab(r'<h1[^>]*>(.*?)</h1>', banner)
    subtitle = grab(r'class="subtitle"[^>]*>(.*?)</div>', banner)
    motto = grab(r'class="motto"[^>]*>(.*?)</div>', banner)
    cast = grab(r'(<div class="cast"[^>]*>.*?</div>)', txt)

    pre = prefix_for(relpath)
    out = READER_TMPL.format(
        title=html.escape(meta["title"]), pre=pre, mark=MARK,
        eyebrow=('<div class="eyebrow">%s</div>' % eyebrow) if eyebrow else "",
        h1=('<h1>%s</h1>' % h1) if h1 else ('<h1>%s</h1>' % html.escape(meta["title"])),
        subtitle=('<div class="subtitle">%s</div>' % subtitle) if subtitle else "",
        motto=('<div class="motto">%s</div>' % motto) if motto else "",
        cast=('<div class="reader-cast">%s</div>' %
              re.sub(r'</?div[^>]*>', '', cast).strip()) if cast else "",
        body=body)
    write(abspath, out)
    return "ok"

# ===========================================================================
# apply to all Volume-1 pages
# ===========================================================================
for relpath, meta in pages.items():
    if not relpath.startswith("%s/volume-1" % AOM):
        # Volumes 2-6 hubs are regenerated separately as stubs
        continue
    if meta["type"] == "story":
        res = retemplate_story(relpath, meta)
        if res == "ok":
            report["retemplated"].append(relpath)
        elif res == "outlier":
            inject(relpath, meta)  # still give it chrome
            report["injected"].append(relpath)
    else:
        if inject(relpath, meta):
            report["injected"].append(relpath)
        else:
            report["skipped"].append(relpath)

# ---- move-safe: refresh asset-link depth on every content page ----
for f in glob.glob(os.path.join(ROOT, AOM, "**", "*.html"), recursive=True):
    refresh_assets(rel_of(f))

# ===========================================================================
# themed stub shells for Volumes 2-6
# ===========================================================================
STUB_TMPL = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Age of Mythos</title>
  <link rel="stylesheet" href="{pre}assets/aom.css"> <!-- {mark} -->
  <style>
    body {{ background:var(--aom-bg); color:var(--aom-text); font-family:Georgia,serif;
            --ch-accent:{accent}; --k-accent:{accent}; --vol-accent:{accent};
            --aom-glow:{glow}; }}
    .stub {{ max-width:720px; margin:0 auto; padding:90px 24px; text-align:center; }}
    .stub .eyebrow {{ font-size:.62rem; letter-spacing:5px; text-transform:uppercase;
            color:{accent}; margin-bottom:18px; }}
    .stub h1 {{ font-size:clamp(2rem,6vw,3.4rem); letter-spacing:4px; margin-bottom:.3em;
            text-shadow:0 0 60px {glow}; }}
    .stub .sub {{ color:var(--aom-dim); font-style:italic; margin-bottom:30px; }}
    .stub .badge {{ display:inline-block; padding:8px 20px; border:1px solid {accent};
            border-radius:24px; color:{accent}; letter-spacing:2px; font-size:.7rem;
            text-transform:uppercase; }}
    .stub .chips {{ margin-top:36px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }}
    .stub .chip {{ padding:8px 16px; border-radius:20px; border:1px solid rgba(255,255,255,.14);
            color:var(--aom-dim); font-size:.66rem; letter-spacing:1px; }}
  </style>
</head>
<body class="aom" data-aom-type="{btype}">
  <div class="stub">
    <div class="eyebrow">{eyebrow}</div>
    <h1>{heading}</h1>
    <div class="sub">{subtitle}</div>
    <span class="badge">Coming Soon</span>
    {chips}
  </div>
  <script src="{pre}assets/manifest.js"></script>
  <script src="{pre}assets/aom.js"></script> <!-- {mark} -->
</body>
</html>
"""

def write_stub(relpath, accent, eyebrow, heading, subtitle, btype, chips=""):
    abspath = os.path.join(ROOT, relpath)
    os.makedirs(os.path.dirname(abspath), exist_ok=True)
    pre = prefix_for(relpath)
    write(abspath, STUB_TMPL.format(
        title=heading, pre=pre, mark=MARK, accent=accent, glow=glow(accent, .22),
        eyebrow=eyebrow, heading=heading, subtitle=subtitle, btype=btype, chips=chips))
    report["stubs"].append(relpath)

for vol in range(2, 7):
    vslug = VOL_SLUG[vol]
    va = VOL_PALETTE[vol][0]
    vlabel = "Volume %s — %s" % (ROMAN[vol], VOL_TITLE[vol])
    chips = '<div class="chips">' + "".join(
        '<span class="chip">Ch.%d %s</span>' % (n, CHAPTERS[n][1]) for n in range(1, 5)
    ) + "</div>"
    write_stub("%s/%s/index.html" % (AOM, vslug), va,
               "Age of Mythos · Volume %s" % ROMAN[vol], VOL_TITLE[vol].upper(),
               VOL_SUBTITLE[vol], "volume", chips)
    for ch in range(1, 5):
        cslug, ctitle = CHAPTERS[ch]
        ca = chapter_accent(va, ch)
        write_stub("%s/%s/%s/index.html" % (AOM, vslug, cslug), ca,
                   "%s · Chapter %d" % (vlabel, ch), ctitle.upper(),
                   "Part of %s" % VOL_TITLE[vol], "chapter")

# ===========================================================================
# report
# ===========================================================================
lines = []
lines.append("AGE OF MYTHOS — build report")
lines.append("=" * 40)
lines.append("pages in manifest : %d" % len(pages))
lines.append("reading spine     : %d pages" % len(spine))
lines.append("chrome injected   : %d" % len(report["injected"]))
lines.append("stories retemplated: %d" % len(report["retemplated"]))
lines.append("stubs generated   : %d" % len(report["stubs"]))
lines.append("already done(skip): %d" % len(report["skipped"]))
lines.append("")
lines.append("OUTLIERS — story pages that need a manual pass (%d):" % len(report["outliers"]))
for o in report["outliers"]:
    lines.append("  - " + o)
write(os.path.join(ROOT, "tools", "build_report.txt"), "\n".join(lines) + "\n")
print("\n".join(lines))
