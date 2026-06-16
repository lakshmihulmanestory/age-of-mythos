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
# Markdown story source (story.md = front-matter + plain prose)
# ===========================================================================
def parse_front_matter(md):
    fm, body = {}, md
    m = re.match(r"^﻿?---\s*\n(.*?)\n---\s*\n?(.*)$", md, re.S)
    if m:
        for line in m.group(1).splitlines():
            mm = re.match(r"\s*([A-Za-z0-9_]+)\s*:\s*(.*?)\s*$", line)
            if mm:
                v = mm.group(2)
                if len(v) >= 2 and v[0] == v[-1] and v[0] in "\"'":
                    v = v[1:-1]
                fm[mm.group(1)] = v
        body = m.group(2)
    return fm, body.strip()

def md_inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<!\*)\*(?!\*)(.+?)\*(?!\*)", r"<em>\1</em>", s)
    return s

# ---------------------------------------------------------------------------
# multilingual story assets (English + Kannada audio / Kannada text)
# Assets are keyed by  "{chapter}__{kingdom}__{story}"  and live at the repo
# root:  audio/<key>.m4a  (English narration),
#        audio/kannada/<key>.kn.mp3  (Kannada narration),
#        story-text/kannada/<key>.kn.txt  (Kannada prose).
# ---------------------------------------------------------------------------
def story_asset_key(relpath):
    """Derive the language-asset key for a story leaf from its rel path."""
    parts = relpath.split("/")
    try:
        si = parts.index("stories")
    except ValueError:
        return None
    chapter = parts[2] if len(parts) > 2 else None
    kingdom = parts[si - 1] if si >= 1 else None
    story = parts[si + 1] if si + 1 < len(parts) else None
    if not (chapter and kingdom and story):
        return None
    if story.endswith(".html"):  # bespoke flat leaf: …/stories/<slug>.html
        story = story[:-5]
    return "%s__%s__%s" % (chapter, kingdom, story)

def _single_kingdom_key(chapter, kingdom):
    """Find THE asset key for a kingdom-level page (e.g. story.html), which has
    no story slug in its path. Returns a key only if it is unambiguous."""
    pref = "%s__%s__" % (chapter, kingdom)
    keys = set()
    for p in glob.glob(os.path.join(ROOT, "audio", pref + "*.m4a")):
        keys.add(os.path.basename(p)[:-4])
    for p in glob.glob(os.path.join(ROOT, "audio", "kannada", pref + "*.kn.mp3")):
        keys.add(os.path.basename(p)[:-7])
    for p in glob.glob(os.path.join(ROOT, "story-text", "kannada", pref + "*.kn.txt")):
        keys.add(os.path.basename(p)[:-7])
    if len(keys) == 1:
        return keys.pop()
    if not keys:  # later chapters use  chapter__kingdom  (no story slug)
        flat = "%s__%s" % (chapter, kingdom)
        for sub, ext in (("audio", ".m4a"), ("audio/kannada", ".kn.mp3"),
                         ("story-text/kannada", ".kn.txt")):
            if os.path.isfile(os.path.join(ROOT, sub, flat + ext)):
                return flat
    return None  # zero or ambiguous → leave the page untouched

def resolve_story_key(relpath):
    """Asset key for any story-bearing page: a /stories/ leaf or a kingdom story.html."""
    parts = relpath.split("/")
    if "stories" in parts:
        return story_asset_key(relpath)
    if parts[-1] == "story.html" and "regions" in parts:
        ri = parts.index("regions")
        if len(parts) > ri + 2 and len(parts) > 2:
            return _single_kingdom_key(parts[2], parts[ri + 2])
    return None

def story_lang_assets(relpath):
    """Return {en_audio, kn_audio, kn_text} rel-paths that exist on disk (or None)."""
    key = resolve_story_key(relpath)
    if not key:
        return {}
    cands = {
        "en_audio": "audio/%s.m4a" % key,
        "kn_audio": "audio/kannada/%s.kn.mp3" % key,
        "kn_text":  "story-text/kannada/%s.kn.txt" % key,
    }
    return {k: v for k, v in cands.items() if os.path.isfile(os.path.join(ROOT, v))}

def build_media(relpath, assets):
    """Language toggle + audio players. Empty string when nothing is available."""
    if not assets:
        return ""
    pre = prefix_for(relpath)
    has_kn = "kn_audio" in assets or "kn_text" in assets
    rows = []
    if "en_audio" in assets:
        rows.append(
            '<div class="reader-audio" data-lang="en">'
            '<span class="reader-audio-label">Listen — English</span>'
            '<audio controls preload="none" src="%saudio/%s"></audio></div>'
            % (pre, html.escape(os.path.basename(assets["en_audio"]))))
    if "kn_audio" in assets:
        rows.append(
            '<div class="reader-audio" data-lang="kn"%s>'
            '<span class="reader-audio-label">ಆಲಿಸಿ — ಕನ್ನಡ</span>'
            '<audio controls preload="none" src="%saudio/kannada/%s"></audio></div>'
            % ("" if "en_audio" not in assets else " hidden",
               pre, html.escape(os.path.basename(assets["kn_audio"]))))
    toggle = ""
    if has_kn:
        toggle = ('<div class="reader-langtoggle" role="tablist" aria-label="Language">'
                  '<button type="button" class="active" data-lang="en">English</button>'
                  '<button type="button" data-lang="kn">ಕನ್ನಡ</button></div>')
    return '<div class="reader-media">%s%s</div>' % (toggle, "".join(rows))

def build_listen_panel(relpath, assets):
    """A self-contained 'Listen & Read' panel for pages whose English body we do
    not template (kingdom story.html, bespoke story leaves). English audio plus,
    under the Kannada tab, Kannada audio and the full Kannada prose. The page's
    own English text stays in place below the panel."""
    if not assets:
        return ""
    media = build_media(relpath, assets)  # toggle + audio (en/kn)
    kn_prose = ""
    if "kn_text" in assets:
        kn_html = md_to_html(read(os.path.join(ROOT, assets["kn_text"])))
        kn_prose = ('<div class="reader-lang" data-lang="kn" lang="kn" hidden>%s</div>'
                    % kn_html)
    # splice the prose inside the same .reader-media container (before its close)
    return media[:-6] + kn_prose + "</div>" if media else ""

def md_to_html(body):
    out = []
    for b in re.split(r"\n\s*\n", body.strip()):
        b = b.strip()
        if not b:
            continue
        m = re.match(r"^===\s*(.+?)\s*===$", b)
        if m:
            out.append('<div class="half-banner"><span>%s</span></div>' % md_inline(m.group(1))); continue
        m = re.match(r"^#{1,6}\s+(.+)$", b)
        if m:
            out.append("<h3>%s</h3>" % md_inline(m.group(1))); continue
        m = re.match(r"^!\[(.*?)\]\((.+?)\)$", b)
        if m:
            out.append('<img src="%s" alt="%s">' % (m.group(2), html.escape(m.group(1)))); continue
        if b.startswith("> "):
            out.append("<blockquote>%s</blockquote>" %
                       md_inline(re.sub(r"^>\s?", "", b, flags=re.M).replace("\n", " "))); continue
        b = re.sub(r"!\[(.*?)\]\((.+?)\)",
                   lambda m: '<img src="%s" alt="%s">' % (m.group(2), html.escape(m.group(1))), b)
        out.append("<p>%s</p>" % md_inline(b.replace("\n", " ")))
    return "\n".join(out)

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

                    # story leaves (in spine) — folder-with-story.md (preferred) or flat .html (bespoke)
                    sdir = os.path.join(kabs, "stories")
                    if os.path.isdir(sdir):
                        for e in sorted(os.listdir(sdir)):
                            full = os.path.join(sdir, e)
                            mdfile = os.path.join(full, "story.md")
                            if os.path.isdir(full) and os.path.isfile(mdfile):
                                fm, _ = parse_front_matter(read(mdfile))
                                srel = kbase + "/stories/" + e + "/index.html"
                                stitle = fm.get("title") or e.replace("-", " ").title()
                                m = register(srel, stitle, "story", ktok,
                                             [HOME, vlink, clink, crumb(rlabel), klink, crumb(stitle)],
                                             in_spine=True, vol_label=vlabel, ch_label=clabel)
                                m["md"] = True
                                king_node["stories"].append({"title": stitle, "rel": srel})
                            elif e.endswith(".html"):
                                srel = kbase + "/stories/" + e
                                stitle = page_title(full, e[:-5].replace("-", " ").title())
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

# ---- world / lore pages (not tied to any volume) ----
nav["world"] = []
_world_dir = os.path.join(ROOT, AOM, "world")
if os.path.isdir(_world_dir):
    _gold, _gold2 = "#d4952a", "#b07818"
    for f in sorted(glob.glob(os.path.join(_world_dir, "*.html"))):
        rp = rel_of(f)
        wt = page_title(f, os.path.basename(f)[:-5].replace("-", " ").title())
        register(rp, wt, "page", tokens(_gold, _gold2, _gold),
                 [crumb("Home", "index.html"), crumb("World & Lore"), crumb(wt)],
                 vol_label="World & Lore")
        nav["world"].append({"title": wt, "rel": rp})

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
  {media}
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
        media=build_media(relpath, story_lang_assets(relpath)), body=body)
    write(abspath, out)
    return "ok"

def render_md_story(relpath, meta):
    """Render a story.md (front-matter + Markdown) into its themed index.html.
    story.md is the editable source — this runs every build so edits show up."""
    abspath = os.path.join(ROOT, relpath)
    mdpath = os.path.join(os.path.dirname(abspath), "story.md")
    fm, body = parse_front_matter(read(mdpath))
    pre = prefix_for(relpath)
    cast = ""
    bits = []
    if fm.get("hero"):    bits.append('Hero: <strong>%s</strong>' % html.escape(fm["hero"]))
    if fm.get("villain"): bits.append('Villain: <strong>%s</strong>' % html.escape(fm["villain"]))
    if bits:
        cast = '<div class="reader-cast">%s</div>' % ' &bull; '.join(bits)
    title = fm.get("title") or meta["title"]

    # ---- multilingual: English (story.md) + optional Kannada (.kn.txt) ----
    assets = story_lang_assets(relpath)
    en_html = md_to_html(body)
    if "kn_text" in assets:
        kn_body = read(os.path.join(ROOT, assets["kn_text"]))
        kn_html = md_to_html(kn_body)
        body_html = ('<div class="reader-lang" data-lang="en">%s</div>\n'
                     '<div class="reader-lang" data-lang="kn" lang="kn" hidden>%s</div>'
                     % (en_html, kn_html))
    else:
        body_html = en_html

    out = READER_TMPL.format(
        title=html.escape(title), pre=pre, mark=MARK,
        eyebrow=('<div class="eyebrow">%s</div>' % html.escape(fm["context"])) if fm.get("context") else "",
        h1='<h1>%s</h1>' % html.escape(title),
        subtitle=('<div class="subtitle">%s</div>' % html.escape(fm["subtitle"])) if fm.get("subtitle") else "",
        motto=('<div class="motto">%s</div>' % html.escape(fm["motto"])) if fm.get("motto") else "",
        cast=cast, media=build_media(relpath, assets), body=body_html)
    write(abspath, out)

# ===========================================================================
# apply to all Volume-1 pages
# ===========================================================================
for relpath, meta in pages.items():
    if not (relpath.startswith("%s/volume-1" % AOM) or relpath.startswith("%s/world" % AOM)):
        # Volumes 2-6 hubs are regenerated separately as stubs
        continue
    if meta["type"] == "story":
        if meta.get("md"):
            render_md_story(relpath, meta)
            report["retemplated"].append(relpath)
            continue
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

# ---- "Listen & Read" panel for pages we don't fully template -------------
# (kingdom story.html + bespoke story leaves). Idempotent & refreshable: any
# previously-injected panel is stripped and rebuilt from the current assets.
# Clean reader leaves already embed a richer inline toggle and are left alone.
LISTEN_OPEN, LISTEN_CLOSE = "<!-- aom:listen -->", "<!-- /aom:listen -->"

def attach_listen_panel(relpath):
    assets = story_lang_assets(relpath)
    if not assets:
        return False
    abspath = os.path.join(ROOT, relpath)
    txt = read(abspath)
    if "reader-media" in txt and LISTEN_OPEN not in txt:
        return False  # clean reader leaf — already has the inline language toggle
    txt = re.sub(re.escape(LISTEN_OPEN) + ".*?" + re.escape(LISTEN_CLOSE), "",
                 txt, flags=re.S)
    panel = build_listen_panel(relpath, assets)
    if not panel:
        return False
    m = re.search(r"<body[^>]*>", txt)
    if not m:
        return False
    block = "\n  %s%s%s\n" % (LISTEN_OPEN, panel, LISTEN_CLOSE)
    write(abspath, txt[:m.end()] + block + txt[m.end():])
    return True

report["panels"] = 0
for relpath in list(pages.keys()):
    if relpath.startswith("%s/volume-1" % AOM) and attach_listen_panel(relpath):
        report["panels"] += 1

# ---- plain-language README.txt in every kingdom and story folder ----
def write_readme(folder, lines):
    open(os.path.join(folder, "README.txt"), "w", encoding="utf-8").write("\n".join(lines) + "\n")

for relpath, meta in pages.items():
    folder = os.path.dirname(os.path.join(ROOT, relpath))
    if meta["type"] == "kingdom":
        t = meta["title"]
        write_readme(folder, [
            t, "=" * len(t), "",
            'This folder is the kingdom "%s".' % t, "",
            "What is inside:",
            "  index.html     - the kingdom's main page (double-click to open in a browser)",
            "  identity.html  - who they are: heroes, animals, culture",
            "  rules.html     - their weapons and powers",
            "  stories/       - each story has its own folder in here",
            "  media/         - pictures for this kingdom", "",
            "To read it, just double-click index.html.",
        ])
    elif meta["type"] == "story" and meta.get("md"):
        t = meta["title"]
        write_readme(folder, [
            t, "=" * len(t), "",
            "HOW TO EDIT THIS STORY  (no computer knowledge needed):", "",
            "  1. Open the file 'story.md'. It is just plain writing.",
            "  2. Change the words however you like. Leave the few lines at the",
            "     very top (between the --- marks) as they are.",
            "  3. To add a picture: put it in the 'images' folder next to this file,",
            "     then write this on its own line where you want it to appear:",
            "         ![](images/your-picture.png)",
            "  4. Save the file.",
            "  5. Go to the main 'Age of Mythos' folder and double-click",
            "     'Rebuild Website.command'.",
            "  6. Open index.html to see your changes.", "",
            "Please do NOT edit index.html by hand - it is rebuilt automatically",
            "from story.md every time.",
        ])

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
lines.append("listen panels     : %d" % report.get("panels", 0))
lines.append("already done(skip): %d" % len(report["skipped"]))
lines.append("")
lines.append("OUTLIERS — story pages that need a manual pass (%d):" % len(report["outliers"]))
for o in report["outliers"]:
    lines.append("  - " + o)
write(os.path.join(ROOT, "tools", "build_report.txt"), "\n".join(lines) + "\n")
print("\n".join(lines))
