#!/usr/bin/env python3
"""
migrate_stories_to_md.py  (one-time)

Turns each clean Chapter-1 story leaf into an editable, self-contained folder:

    stories/the-109th-form.html
        ->
    stories/the-109th-form/
        story.md      <- editable source (front-matter + plain prose)
        images/       <- drop this story's pictures here
        (index.html is generated later by build_site.py from story.md)

Only the unified "reader" stories are converted. Bespoke / image-rich pages
(the build report's outliers) are left exactly as they are.

Run once:  python3 tools/migrate_stories_to_md.py
"""
import os, re, html, glob, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CH1 = "content/volume-1-maha-parva/chapter-1-rise-of-legends"

def read(p): return open(p, encoding="utf-8", errors="replace").read()
def write(p, s): open(p, "w", encoding="utf-8").write(s)

def grab(pat, txt):
    m = re.search(pat, txt, re.S)
    return m.group(1).strip() if m else None

def extract_div_inner(txt, classname):
    m = re.search(r'<(div|article)\b[^>]*class="[^"]*\b%s\b[^"]*"[^>]*>' % re.escape(classname), txt)
    if not m:
        return None
    tag = m.group(1)
    start = m.end()
    depth = 1
    for t in re.finditer(r'<(/?)%s\b' % tag, txt[start:]):
        depth += -1 if t.group(1) else 1
        if depth == 0:
            return txt[start:start + t.start()].strip()
    return txt[start:].strip()

def inline_md(s):
    s = re.sub(r'<strong>(.*?)</strong>', r'**\1**', s, flags=re.S)
    s = re.sub(r'<b>(.*?)</b>', r'**\1**', s, flags=re.S)
    s = re.sub(r'<em>(.*?)</em>', r'*\1*', s, flags=re.S)
    s = re.sub(r'<i>(.*?)</i>', r'*\1*', s, flags=re.S)
    s = re.sub(r'<br\s*/?>', ' ', s)
    s = re.sub(r'<[^>]+>', '', s)          # drop any stray tags
    return html.unescape(s).strip()

def body_to_md(body):
    """Convert the reader-body inner HTML into Markdown blocks."""
    out = []
    # half-banner -> === LABEL ===
    body = re.sub(r'<div class="half-banner"><span>(.*?)</span>\s*</div>',
                  lambda m: "\n=== %s ===\n" % inline_md(m.group(1)), body, flags=re.S)
    # walk block elements in order
    for m in re.finditer(r'<h[23][^>]*>(.*?)</h[23]>|<p[^>]*>(.*?)</p>|<img[^>]*src="([^"]*)"[^>]*>|^===\s*(.+?)\s*===$',
                         body, re.S | re.M):
        h, p, img, band = m.groups()
        if band is not None:
            out.append("=== %s ===" % band.strip())
        elif h is not None:
            out.append("## " + inline_md(h))
        elif img is not None:
            out.append("![](%s)" % img)
        elif p is not None:
            txt = inline_md(p)
            if txt:
                out.append(txt)
    return "\n\n".join(out)

def yaml_q(s):
    s = (s or "").replace('"', "'").strip()
    return '"%s"' % s if s else ""

def convert(htmlpath):
    txt = read(htmlpath)
    if "aom-reader" not in txt:
        return None  # outlier — leave as-is
    after = htmlpath.split("/regions/")[1].split("/")
    region = after[0]
    kingdom = after[1]
    h1 = grab(r'<h1[^>]*>(.*?)</h1>', txt)
    eyebrow = grab(r'class="eyebrow"[^>]*>(.*?)</div>', txt)
    subtitle = grab(r'class="subtitle"[^>]*>(.*?)</div>', txt)
    motto = grab(r'class="motto"[^>]*>(.*?)</div>', txt)
    cast = grab(r'class="reader-cast"[^>]*>(.*?)</div>', txt)
    hero = villain = None
    if cast:
        hm = re.search(r'Hero:\s*<strong>(.*?)</strong>', cast, re.S)
        vm = re.search(r'Villain:\s*<strong>(.*?)</strong>', cast, re.S)
        hero = inline_md(hm.group(1)) if hm else None
        villain = inline_md(vm.group(1)) if vm else None
    body = extract_div_inner(txt, "reader-body")
    md_body = body_to_md(body) if body else ""

    fm = ["---"]
    fm.append("title: " + yaml_q(inline_md(h1) if h1 else os.path.basename(htmlpath)[:-5]))
    if subtitle: fm.append("subtitle: " + yaml_q(inline_md(subtitle)))
    if motto:    fm.append("motto: " + yaml_q(inline_md(motto)))
    if eyebrow:  fm.append("context: " + yaml_q(inline_md(eyebrow)))
    if hero:     fm.append("hero: " + yaml_q(hero))
    if villain:  fm.append("villain: " + yaml_q(villain))
    fm.append("region: " + region)
    fm.append("kingdom: " + kingdom)
    fm.append("---")
    return "\n".join(fm) + "\n\n" + md_body + "\n"

def git(*args):
    subprocess.run(["git", "-C", ROOT, *args], check=False,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

def main():
    leaves = sorted(glob.glob(os.path.join(ROOT, CH1, "**", "stories", "*.html"), recursive=True))
    converted, skipped = [], []
    for h in leaves:
        md = convert(h)
        slug = os.path.basename(h)[:-5]
        sdir = os.path.dirname(h)
        if md is None:
            skipped.append(os.path.relpath(h, ROOT))
            continue
        folder = os.path.join(sdir, slug)
        os.makedirs(os.path.join(folder, "images"), exist_ok=True)
        write(os.path.join(folder, "story.md"), md)
        # keep an empty marker so the images/ folder is tracked
        open(os.path.join(folder, "images", ".gitkeep"), "w").close()
        git("rm", "-q", "-f", os.path.relpath(h, ROOT))
        if os.path.exists(h):           # fallback if not tracked
            os.remove(h)
        converted.append(os.path.relpath(os.path.join(folder, "story.md"), ROOT))

    print("converted %d stories to story.md folders" % len(converted))
    print("left as-is (outliers/bespoke): %d" % len(skipped))
    for s in skipped:
        print("   - " + s)

if __name__ == "__main__":
    main()
