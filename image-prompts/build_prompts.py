#!/usr/bin/env python3
"""
Build machine-readable image-generation jobs for Age of Mythos, Volume I
(Maha Parva). Story data lives in the `stories/` package, split per region /
chapter (see stories/__init__.py for load order). This file is just the engine.

Outputs (into image-prompts/data/):
  - <story_id>.json          one JSON array of jobs per story
  - all_prompts.jsonl        every job, one JSON object per line (iterate sequentially)
  - index.json               manifest: stories + counts + field schema

Each "job" is ONE image to generate. A downstream program can simply:
  for each job: send job["prompt"] + job["negative_prompt"] to the image model,
                save the result as job["filename"] + ".png", then continue.

Global guarantees enforced here for EVERY job:
  - All people are authentic Indian characters of Indian origin (per-region features
    and traditional attire), reinforced by INDIA_PEOPLE + a non-Indian negative.
  - All settings are the Indian subcontinent (INDIA_PLACE).
Each kingdom/story still carries its OWN dedicated color_theme, architecture/
structures, and dress aesthetic via its `style` anchor.

Re-run after editing any story module:  python3 image-prompts/build_prompts.py
"""

import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(HERE, "data")
sys.path.insert(0, HERE)

from stories import ALL_STORIES  # noqa: E402
from reference_cast import assign_reference, reference_index  # noqa: E402

# Default negative prompt shared by all jobs unless a job overrides it.
DEFAULT_NEGATIVE = (
    "lowres, low quality, worst quality, blurry, jpeg artifacts, deformed, disfigured, "
    "bad anatomy, extra limbs, extra fingers, fused fingers, mutated hands, poorly drawn hands, "
    "poorly drawn face, malformed, mutation, out of frame, cropped, watermark, signature, text, "
    "logo, username, oversaturated, plastic skin"
)
# Appended for pre-modern scenes (most of them). Tech scenes set "modern_ok": True to skip this.
NO_MODERN = ", modern clothing, wristwatch, sneakers, cars, smartphones, power lines"

# No eyewear on ANY image (several reference photos wear glasses/sunglasses/goggles).
NO_SPECS = ", spectacles, eyeglasses, glasses, sunglasses, reading glasses, goggles, eyewear"
# No facial hair UNLESS the character's own description asks for it (keeps the
# bearded reference photos from adding a beard to clean-shaven characters).
NO_BEARD = ", beard, bearded, facial hair, moustache, mustache, goatee, stubble"

# nano-banana-pro (and similar) IGNORE negative_prompt, so the no-eyewear /
# clean-shaven rules must ALSO live in the POSITIVE prompt. These are appended
# LAST — after the reference identity clause — so they override any glasses,
# goggles or beard the character would otherwise inherit from a reference photo.
NO_EYEWEAR_POS = (
    "face completely free of any eyewear, no glasses, no spectacles, no goggles, "
    "no sunglasses, bare eyes clearly visible"
)
CLEAN_SHAVEN_POS = (
    "clean-shaven smooth face, no beard, no moustache, no stubble, no facial hair "
    "whatsoever, even if a reference photo shows facial hair"
)
FACIAL_HAIR_CUES = (
    "beard", "bearded", "stubble", "moustache", "mustache", "goatee",
    "facial hair", "whisker", "sideburn",
)


def wants_facial_hair(*texts):
    blob = " ".join(t for t in texts if t).lower()
    return any(cue in blob for cue in FACIAL_HAIR_CUES)

# --- Global India anchors (the user's hard requirement) -------------------
# EVERYTHING must read as authentically Indian / Indic — people, places, temples,
# weapons, relics, wildlife. Each category group gets its own positive anchor and
# an anti-Western/anti-foreign negative so nothing drifts to European/East-Asian.
INDIA_PEOPLE = (
    "authentic Indian person of Indian ethnicity and Indian origin, "
    "regionally accurate Indian features, traditional Indian attire, "
    "Indic aesthetic rooted in ancient Bharata"
)
INDIA_PLACE = (
    "authentic Indian subcontinent setting, classical Indian and regional temple "
    "architecture, sacred Bharatiya landscape, Indic aesthetic rooted in ancient India"
)
INDIA_OBJECT = (
    "authentic traditional Indian craftsmanship, classical Indic ornamentation and "
    "motifs, temple and regional Indian metalwork and carving, forged in ancient Bharata"
)
INDIA_FAUNA = (
    "native wildlife of the Indian subcontinent, natural Indian wilderness habitat, "
    "Indic aesthetic"
)
# Scenes are landscapes that usually contain people -> place anchor + Indian people.
INDIA_SCENE = INDIA_PLACE + ", all figures are authentic Indians of Indian origin"

NON_INDIAN_NEG = (
    ", non-Indian, foreigner, european features, caucasian, east asian features, "
    "african features, western clothing, greek, roman, medieval european"
)
NON_INDIAN_PLACE_NEG = (
    ", european castle, gothic cathedral, greek roman columns, chinese pagoda, "
    "japanese architecture, medieval european village, western fantasy architecture, "
    "non-Indian architecture"
)
NON_INDIAN_OBJECT_NEG = (
    ", european longsword, katana, western fantasy weapon, greek roman armor, "
    "gothic design, non-Indian ornamentation"
)

PEOPLE_CATEGORIES = {"hero", "villain", "ally", "operative", "crowd"}
PLACE_CATEGORIES = {"environment", "palace"}
OBJECT_CATEGORIES = {"weapon", "relic", "artifact"}
FAUNA_CATEGORIES = {"animal"}


def india_anchor_for(category):
    if category in PEOPLE_CATEGORIES:
        return INDIA_PEOPLE
    if category in OBJECT_CATEGORIES:
        return INDIA_OBJECT
    if category in FAUNA_CATEGORIES:
        return INDIA_FAUNA
    if category == "scene":
        return INDIA_SCENE
    return INDIA_PLACE  # environment, palace, and any fallback


def india_negative_for(category):
    if category in PEOPLE_CATEGORIES:
        return NON_INDIAN_NEG
    if category in OBJECT_CATEGORIES:
        return NON_INDIAN_OBJECT_NEG
    if category in PLACE_CATEGORIES or category == "scene":
        return NON_INDIAN_PLACE_NEG
    return ""

# Suggested dimensions by category. First-version pass: minimum size that still
# holds detail (~768px base, all multiples of 64, SDXL/FLUX-friendly). Bump these
# for a final high-res render once compositions are approved.
DIMS = {
    "portrait": (768, 1152),
    "square": (768, 768),
    "landscape": (1152, 768),
}
CATEGORY_ORIENTATION = {
    "hero": "portrait",
    "villain": "portrait",
    "ally": "portrait",
    "operative": "portrait",
    "artifact": "square",
    "animal": "square",
    "weapon": "square",
    "relic": "square",
    "environment": "landscape",
    "palace": "landscape",
    "crowd": "landscape",
    "scene": "landscape",
}


def slug(text):
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "_", text)
    return text.strip("_")


def build():
    os.makedirs(OUT_DIR, exist_ok=True)
    all_jobs = []
    manifest = {"stories": [], "field_schema": {
        "id": "stable unique job id",
        "story_id": "which story file this belongs to",
        "chapter": "chapter number within Volume I",
        "region": "region of Bharatavarsha",
        "kingdom": "in-world kingdom name",
        "state": "real Indian state / territory inspiration",
        "category": "hero|villain|ally|operative|animal|weapon|relic|artifact|environment|palace|crowd|scene",
        "name": "entity name",
        "variant": "null for the base image, else the variant label",
        "prompt": "FULL ready-to-send positive prompt (style anchor + India anchor included)",
        "negative_prompt": "ready-to-send negative prompt",
        "color_theme": "dedicated palette guidance for this kingdom/story",
        "width": "suggested width px",
        "height": "suggested height px",
        "reference_archetype": "which real-person archetype this character is cast as (null = text-only)",
        "reference_image": "repo-relative path to the primary reference photo (null for objects/animals/places)",
        "reference_pool": "all photos available for this archetype (pick any for variety)",
        "reference_mode": "face = lock the person's identity, style = borrow group look only",
        "reference_weight": "suggested face/style conditioning strength",
        "seq": "global generation order index",
    }}

    seq = 0
    seen_ids = set()
    for story in ALL_STORIES:
        if story["id"] in seen_ids:
            raise ValueError(f"duplicate story id: {story['id']}")
        seen_ids.add(story["id"])
        story_jobs = []
        story_modern_ok = story.get("modern_ok", False)
        for category, name, subject, opts in [
            (e[0], e[1], e[2], (e[3] if len(e) > 3 else None)) for e in story["entities"]
        ]:
            opts = opts or {}
            ent_modern_ok = opts.get("modern_ok", story_modern_ok)
            base_negative = opts.get("negative")
            orientation = CATEGORY_ORIENTATION.get(category, "square")
            w, h = DIMS[orientation]
            india_anchor = india_anchor_for(category)
            india_neg = india_negative_for(category)

            def make_job(variant_label, subject_text):
                nonlocal seq
                neg = DEFAULT_NEGATIVE
                if base_negative:
                    neg = neg + ", " + base_negative
                if india_neg:
                    neg = neg + india_neg
                if not ent_modern_ok:
                    neg = neg + NO_MODERN
                # No eyewear anywhere; no beard unless this character asks for it.
                neg = neg + NO_SPECS
                if category in PEOPLE_CATEGORIES and not wants_facial_hair(subject, subject_text):
                    neg = neg + NO_BEARD
                jid = f"{story['id']}__{slug(name)}"
                fname = f"{story['id']}_{slug(category)}_{slug(name)}"
                if variant_label:
                    jid += f"__{slug(variant_label)}"
                    fname += f"__{slug(variant_label)}"

                # Cast a real-person reference photo for people; append an
                # identity clause so the render keeps that person's face/look.
                ref = assign_reference(category, name, subject_text, seq)
                prompt = story["style"] + ", " + subject_text + ", " + india_anchor
                if ref:
                    prompt += ", " + ref.pop("identity_clause")
                # Bake the no-eyewear / clean-shaven rules into the POSITIVE prompt
                # too (models like nano-banana-pro ignore negative_prompt). Appended
                # last so they override any glasses/goggles/beard from a face reference.
                if category in PEOPLE_CATEGORIES or category == "scene":
                    prompt += ", " + NO_EYEWEAR_POS
                    if not wants_facial_hair(subject, subject_text):
                        prompt += ", " + CLEAN_SHAVEN_POS

                job = {
                    "id": jid,
                    "story_id": story["id"],
                    "chapter": story.get("chapter"),
                    "region": story.get("region"),
                    "kingdom": story["kingdom"],
                    "state": story["state"],
                    "category": category,
                    "name": name,
                    "variant": variant_label,
                    "prompt": prompt,
                    "negative_prompt": neg,
                    "color_theme": story["color_theme"],
                    "width": w,
                    "height": h,
                    "reference_archetype": ref["reference_archetype"] if ref else None,
                    "reference_image": ref["reference_image"] if ref else None,
                    "reference_pool": ref["reference_pool"] if ref else None,
                    "reference_mode": ref["reference_mode"] if ref else None,
                    "reference_weight": ref["reference_weight"] if ref else None,
                    "filename": fname,
                    "seq": seq,
                }
                seq += 1
                return job

            story_jobs.append(make_job(None, subject))
            for label, vtext in opts.get("variants", []):
                story_jobs.append(make_job(label, vtext))

        # write per-story file
        with open(os.path.join(OUT_DIR, f"{story['id']}.json"), "w") as f:
            json.dump(story_jobs, f, indent=2, ensure_ascii=False)
        all_jobs.extend(story_jobs)
        manifest["stories"].append({
            "id": story["id"],
            "chapter": story.get("chapter"),
            "region": story.get("region"),
            "kingdom": story["kingdom"],
            "state": story["state"],
            "title": story["title"],
            "color_theme": story["color_theme"],
            "job_count": len(story_jobs),
            "file": f"{story['id']}.json",
        })

    # combined JSONL (one job per line) + manifest
    with open(os.path.join(OUT_DIR, "all_prompts.jsonl"), "w") as f:
        for job in all_jobs:
            f.write(json.dumps(job, ensure_ascii=False) + "\n")
    manifest["total_jobs"] = len(all_jobs)
    manifest["total_stories"] = len(ALL_STORIES)
    with open(os.path.join(OUT_DIR, "index.json"), "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    # reference-image casting catalog (machine-readable companion to reference-casting.md)
    with open(os.path.join(OUT_DIR, "reference_index.json"), "w") as f:
        json.dump(reference_index(), f, indent=2, ensure_ascii=False)

    print(f"Wrote {len(all_jobs)} jobs across {len(ALL_STORIES)} stories to {OUT_DIR}/")
    by_chapter = {}
    for s in manifest["stories"]:
        by_chapter.setdefault(s.get("chapter"), []).append(s)
    for ch in sorted(by_chapter, key=lambda x: (x is None, x)):
        rows = by_chapter[ch]
        total = sum(r["job_count"] for r in rows)
        print(f"\n  Chapter {ch}: {len(rows)} stories, {total} jobs")
        for s in rows:
            print(f"    {s['id']:26} {s['job_count']:3} jobs  ({s['state']})")


if __name__ == "__main__":
    build()
