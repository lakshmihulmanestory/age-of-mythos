#!/usr/bin/env python3
"""
Build image-generation prompts for the COVER-ART tier of Age of Mythos:

  * 1  album / saga-level key-art poster (the whole saga)
  * 6  volume-level posters (one per continent-volume)
  * 24 chapter-level posters (each volume's 4 story arcs)

This is a separate tier from build_prompts.py (which handles per-kingdom story
images). It reuses the SAME no-eyewear / clean-shaven POSITIVE rules so the
covers obey the global "no specs/goggles, no beard unless truly needed" rule --
baked into the positive prompt because nano-banana-pro ignores negative_prompt.

Outputs (into image-prompts/data/covers/):
  - album.json                 the single saga poster job
  - volume-<N>.json            one file per volume (its poster + 4 chapter posters)
  - all_covers.jsonl           every cover job, one JSON object per line
  - covers_index.json          manifest
Also writes a human-readable pack at image-prompts/COVERS.md.

Re-run after editing:  python3 image-prompts/covers.py
"""

import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(HERE, "data", "covers")
sys.path.insert(0, HERE)

# Reuse the exact shared rules from the story engine (single source of truth).
from build_prompts import (  # noqa: E402
    DEFAULT_NEGATIVE, NO_MODERN, NO_SPECS, NO_BEARD,
    NO_EYEWEAR_POS, CLEAN_SHAVEN_POS,
)

# ---------------------------------------------------------------------------
# Shared cinematic anchor pasted before every cover prompt.
# ---------------------------------------------------------------------------
STYLE_BASE = (
    "cinematic epic fantasy key art, mythological blockbuster movie poster, "
    "grand awe-inspiring scale, dramatic volumetric god-rays, atmospheric depth, "
    "highly detailed intricate matte painting, trending on artstation, "
    "octane render, 8k"
)

# The saga backbone woven into volume + album covers (from content/world lore).
SAGA_LORE = (
    "the Age of Mythos saga, world of Eka-Bhumi once one supercontinent, seven "
    "colossal Vimana Brother-giants who harvest the cosmic metal Brahma-Dhatu, "
    "the dying planet Vimana-Loka returning through the sky, the Void Maw threat"
)

# Poster orientations.
DIMS = {
    "album": (1024, 1536),      # tall master key-art poster
    "volume": (1536, 1024),     # wide cinematic volume hero banner
    "chapter": (1024, 1536),    # tall chapter poster (matches web "poster tall")
}


def slug(text):
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


# ---------------------------------------------------------------------------
# The six continent-volumes. Each has its own peoples, land, element/guardian,
# palette, architecture and signature landmark so no two covers look alike.
# ---------------------------------------------------------------------------
VOLUMES = [
    {
        "number": 1,
        "dir": "volume-1-maha-parva",
        "title": "Maha Parva",
        "continent": "Bharatavarsha (the Indian subcontinent)",
        "peoples": "authentic Indian people of Indian origin in traditional Indic attire",
        "not_peoples": "european, east asian, middle eastern, african, western",
        "element": "fire",
        "element_desc": "Agni fire-and-molten-gold elemental power",
        "guardian": "Agni-Vara, the Fire Brother",
        "land": "the sacred plains, Himalayan peaks and temple-cities of ancient Bharata",
        "architecture": "Nagara and Dravidian temple architecture, fortress-cities like Golconda",
        "landmark": "towering gopuram temple-spires and the snow Himalaya",
        "palette": "saffron-gold, deep crimson, bronze and ember-orange",
    },
    {
        "number": 2,
        "dir": "volume-2-the-great-west",
        "title": "The Great West",
        "continent": "the Western lands (Yavana-Khanda, classical Europe)",
        "peoples": "authentic European people in classical Hellenic and Norse attire",
        "not_peoples": "indian, east asian, middle eastern, african",
        "element": "wind and storm",
        "element_desc": "Vayu wind-and-lightning tempest power",
        "guardian": "Vayu-Vara, the Storm Brother",
        "land": "the marble city-states, alpine highlands and cold northern seas of the West",
        "architecture": "classical Greco-Roman marble columns, megalithic stone circles, alpine keeps",
        "landmark": "colonnaded acropolis temples and jagged storm-wracked cliffs",
        "palette": "marble-white, storm-grey, electric cobalt-blue and verdigris bronze",
    },
    {
        "number": 3,
        "dir": "volume-3-the-eastern-dragon",
        "title": "The Eastern Dragon",
        "continent": "the Eastern realm (East Asia)",
        "peoples": "authentic East Asian people in imperial silk robes and lamellar armor",
        "not_peoples": "indian, european, middle eastern, african, western",
        "element": "sky",
        "element_desc": "Akasha sky-and-cloud-dragon power",
        "guardian": "Akasha-Vara, the Sky Brother",
        "land": "the misted mountains, terraced valleys and imperial cities of the East",
        "architecture": "tiered pagodas, sweeping tiled palace roofs, the great serpent-wall",
        "landmark": "cloud-wreathed pagodas and a coiling celestial dragon",
        "palette": "jade-green, imperial vermilion-red, ink-black and gold",
    },
    {
        "number": 4,
        "dir": "volume-4-the-ancient-sands",
        "title": "The Ancient Sands",
        "continent": "the desert kingdoms (Egypt, Mesopotamia and Arabia)",
        "peoples": "authentic Middle Eastern and North African people in desert-kingdom regalia",
        "not_peoples": "indian, european, east asian, african sub-saharan, western",
        "element": "earth and stone",
        "element_desc": "Prithvi earth-and-sandstone tectonic power",
        "guardian": "Prithvi-Vara, the Earth Brother",
        "land": "the endless dunes, river-deltas and buried god-tombs of the ancient sands",
        "architecture": "great pyramids, stepped ziggurats, colossal sandstone temple-gates",
        "landmark": "pyramids and a colossal half-buried stone deity in the dunes",
        "palette": "sand-gold, lapis-lazuli blue, obsidian-black and turquoise",
    },
    {
        "number": 5,
        "dir": "volume-5-the-new-world",
        "title": "The New World",
        "continent": "the New World (the Americas)",
        "peoples": "authentic indigenous American people in Maya, Aztec and Inca regalia",
        "not_peoples": "indian south-asian, european, east asian, middle eastern, african",
        "element": "water",
        "element_desc": "Jala water-and-river-serpent power",
        "guardian": "Jala-Vara, the Water Brother",
        "land": "the emerald jungles, cloud-peaks and river-cities of the New World",
        "architecture": "stepped stone pyramids, mountain citadels, jungle-swallowed temples",
        "landmark": "a jungle step-pyramid and a mist-shrouded mountain citadel",
        "palette": "emerald jungle-green, jaguar-gold, blood-red and turquoise",
    },
    {
        "number": 6,
        "dir": "volume-6-the-southern-cross",
        "title": "The Southern Cross",
        "continent": "the Southern lands (Sub-Saharan Africa and Oceania)",
        "peoples": "authentic African and Aboriginal-Pacific people in ancestral regalia",
        "not_peoples": "indian, european, east asian, middle eastern, western",
        "element": "void and night",
        "element_desc": "Tamas void-and-starfield cosmic power",
        "guardian": "Tamas-Vara, the Void Brother",
        "land": "the vast savannas, red-earth outback and star-domed nights of the South",
        "architecture": "Great-Zimbabwe stone enclosures, ancestral rock-art shelters, bonework totems",
        "landmark": "acacia savanna under the Southern Cross constellation and glowing rock art",
        "palette": "ochre-red earth, savanna-gold, deep indigo night and bone-white",
    },
]

# ---------------------------------------------------------------------------
# The four story arcs, identical across every volume, localized per continent
# via the {peoples}/{land}/{element}/{landmark} fields above.
# ---------------------------------------------------------------------------
CHAPTERS = [
    {
        "number": 1,
        "dir": "chapter-1-rise-of-legends",
        "title": "Rise of Legends",
        "beat": (
            "DAWN OF THE AGE -- {peoples} awakening their first Brahma-Dhatu "
            "powers, unearthing buried Vimana relics beneath {landmark}, a hopeful "
            "golden mythic sunrise over {land}, ordinary mortals rising into legend, "
            "glowing cosmic-metal veins threading the earth, wonder and destiny"
        ),
    },
    {
        "number": 2,
        "dir": "chapter-2-civil-war",
        "title": "Civil War",
        "beat": (
            "THE AGE FRACTURES -- rival {peoples} kingdoms turned against one "
            "another, {landmark} split by battle-lines, brother against brother, "
            "torn banners, {element} weapons clashing beneath a bleeding blood-red "
            "sky, betrayal and shattered alliances across {land}, grim and divided"
        ),
    },
    {
        "number": 3,
        "dir": "chapter-3-rise-of-beasts",
        "title": "Rise of Beasts",
        "beat": (
            "THE BEASTS AWAKEN -- colossal mythic titan-creatures of {land} rising "
            "from earth and sea, {peoples} warriors dwarfed beneath monstrous "
            "guardians, {element}-charged behemoths trampling {landmark}, primal "
            "chaos and terror, wild untamed power"
        ),
    },
    {
        "number": 4,
        "dir": "chapter-4-the-great-epic",
        "title": "The Great Epic",
        "beat": (
            "THE FINAL RECKONING -- every {peoples} kingdom united at last upon a "
            "Kurukshetra-scale battlefield, the towering Vimana Brothers descending "
            "from the planet Vimana-Loka looming huge in the sky, the Void Maw "
            "tearing open the heavens, {element} and cosmic fire, apocalyptic climax "
            "over {land}, the great epic of Earth's last stand"
        ),
    },
]


def _people_negative(not_peoples):
    return f", {not_peoples} features, wrong ethnicity, modern clothing"


def _positive_tail():
    # Baked into every cover: no eyewear ever, clean-shaven (no beard) always,
    # honoring the global rule even when reference/culture would add them.
    return ", " + NO_EYEWEAR_POS + ", " + CLEAN_SHAVEN_POS


def _base_negative(not_peoples=None):
    neg = DEFAULT_NEGATIVE + NO_MODERN + NO_SPECS + NO_BEARD
    if not_peoples:
        neg += _people_negative(not_peoples)
    return neg


def build_album():
    w, h = DIMS["album"]
    prompt = (
        STYLE_BASE + ", grand master key-art poster for 'AGE OF MYTHOS' "
        "(Hulmane -- The Saga), the complete mythic epic of Earth, " + SAGA_LORE
        + ", Eka-Bhumi the one supercontinent breaking apart into seven lands, "
        "seven colossal towering Vimana Brother-giants each wreathed in a different "
        "element -- fire, wind, sky, earth, water, void and ice -- standing over the "
        "continents, heroes of every civilization of Earth (Indian, European, East "
        "Asian, Middle Eastern, indigenous American, African) united shoulder to "
        "shoulder in the foreground, the dying planet Vimana-Loka looming huge in a "
        "star-filled sky, the Void Maw wound tearing the cosmos, rivers of glowing "
        "Brahma-Dhatu cosmic metal threading the earth, saffron-gold, cosmic-violet "
        "and deep-space palette, biblical mythic scale, the ultimate saga poster"
        + _positive_tail()
    )
    return {
        "id": "album__age-of-mythos",
        "level": "album",
        "volume": None,
        "chapter": None,
        "title": "Age of Mythos -- The Saga",
        "prompt": prompt,
        "negative_prompt": _base_negative(),
        "color_theme": "saffron-gold, cosmic-violet, deep-space blue-black, Brahma-Dhatu glow",
        "width": w,
        "height": h,
        "target_path": "media/album/age-of-mythos-saga.png",
        "filename": "age-of-mythos-saga",
    }


def build_volume(vol):
    w, h = DIMS["volume"]
    prompt = (
        STYLE_BASE + f", epic volume key-art poster for '{vol['title']}', a volume "
        f"of {SAGA_LORE} set in {vol['continent']}, {vol['peoples']}, sweeping vista "
        f"of {vol['land']} with {vol['architecture']}, {vol['landmark']}, "
        f"{vol['element_desc']} of the guardian {vol['guardian']}, a Vimana "
        f"sky-chariot and the distant approaching planet Vimana-Loka faint in the "
        f"sky, glowing Brahma-Dhatu cosmic-metal veins, {vol['palette']} palette, "
        f"grand mythic scale, movie-poster composition" + _positive_tail()
    )
    return {
        "id": f"volume-{vol['number']}__{slug(vol['title'])}",
        "level": "volume",
        "volume": vol["number"],
        "chapter": None,
        "title": vol["title"],
        "prompt": prompt,
        "negative_prompt": _base_negative(vol["not_peoples"]),
        "color_theme": vol["palette"],
        "width": w,
        "height": h,
        "target_path": f"media/volumes/volume-{vol['number']}-{slug(vol['title'])}.png",
        "filename": f"volume-{vol['number']}-{slug(vol['title'])}",
    }


def build_chapter(vol, ch):
    w, h = DIMS["chapter"]
    beat = ch["beat"].format(
        peoples=vol["peoples"],
        land=vol["land"],
        element=vol["element"],
        landmark=vol["landmark"],
    )
    prompt = (
        STYLE_BASE + f", chapter poster '{ch['title']}' from the '{vol['title']}' "
        f"volume ({vol['continent']}) of the Age of Mythos, {beat}, "
        f"{vol['palette']} palette, {vol['element_desc']}, glowing Brahma-Dhatu "
        f"cosmic metal, tall dramatic poster composition" + _positive_tail()
    )
    return {
        "id": f"volume-{vol['number']}-chapter-{ch['number']}__{slug(ch['title'])}",
        "level": "chapter",
        "volume": vol["number"],
        "chapter": ch["number"],
        "title": f"{vol['title']} -- {ch['title']}",
        "prompt": prompt,
        "negative_prompt": _base_negative(vol["not_peoples"]),
        "color_theme": vol["palette"],
        "width": w,
        "height": h,
        "target_path": (
            f"media/volumes/v{vol['number']}/chapter-{ch['number']}-{slug(ch['title'])}.png"
        ),
        "filename": f"v{vol['number']}-chapter-{ch['number']}-{slug(ch['title'])}",
    }


def build():
    os.makedirs(OUT_DIR, exist_ok=True)
    all_jobs = []

    album = build_album()
    all_jobs.append(album)
    with open(os.path.join(OUT_DIR, "album.json"), "w") as f:
        json.dump([album], f, indent=2, ensure_ascii=False)

    for vol in VOLUMES:
        vol_jobs = [build_volume(vol)]
        for ch in CHAPTERS:
            vol_jobs.append(build_chapter(vol, ch))
        with open(os.path.join(OUT_DIR, f"volume-{vol['number']}.json"), "w") as f:
            json.dump(vol_jobs, f, indent=2, ensure_ascii=False)
        all_jobs.extend(vol_jobs)

    with open(os.path.join(OUT_DIR, "all_covers.jsonl"), "w") as f:
        for job in all_jobs:
            f.write(json.dumps(job, ensure_ascii=False) + "\n")

    manifest = {
        "total_jobs": len(all_jobs),
        "album": 1,
        "volumes": len(VOLUMES),
        "chapters": len(VOLUMES) * len(CHAPTERS),
        "jobs": [{"id": j["id"], "level": j["level"], "volume": j["volume"],
                  "chapter": j["chapter"], "target_path": j["target_path"]}
                 for j in all_jobs],
    }
    with open(os.path.join(OUT_DIR, "covers_index.json"), "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    _write_markdown(album, all_jobs)

    print(f"Wrote {len(all_jobs)} cover jobs to {OUT_DIR}/")
    print(f"  1 album + {len(VOLUMES)} volumes + {len(VOLUMES)*len(CHAPTERS)} chapters")


def _write_markdown(album, all_jobs):
    lines = ["# Age of Mythos — Cover-Art Prompt Pack", ""]
    lines.append(
        "Album, volume and chapter key-art prompts. Generated by "
        "`image-prompts/covers.py` — do not hand-edit; edit the script and re-run. "
        "No-eyewear + clean-shaven rules are baked into every positive prompt.")
    lines += ["", "## Album", "", f"**{album['title']}**  ",
              f"`{album['target_path']}` · {album['width']}×{album['height']}", "",
              "```", album["prompt"], "```",
              "", f"Negative: `{album['negative_prompt']}`", ""]
    for vol in VOLUMES:
        vjob = next(j for j in all_jobs if j["level"] == "volume" and j["volume"] == vol["number"])
        lines += ["---", "", f"## Volume {vol['number']} — {vol['title']}",
                  f"*{vol['continent']}*", "",
                  f"`{vjob['target_path']}` · {vjob['width']}×{vjob['height']}", "",
                  "```", vjob["prompt"], "```", ""]
        for ch in CHAPTERS:
            cid = f"volume-{vol['number']}-chapter-{ch['number']}__{slug(ch['title'])}"
            cjob = next(j for j in all_jobs if j["id"] == cid)
            lines += [f"### Ch {ch['number']} — {ch['title']}",
                      f"`{cjob['target_path']}` · {cjob['width']}×{cjob['height']}", "",
                      "```", cjob["prompt"], "```", ""]
    with open(os.path.join(HERE, "COVERS.md"), "w") as f:
        f.write("\n".join(lines))


if __name__ == "__main__":
    build()
