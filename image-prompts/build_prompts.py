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

# Default negative prompt shared by all jobs unless a job overrides it.
DEFAULT_NEGATIVE = (
    "lowres, low quality, worst quality, blurry, jpeg artifacts, deformed, disfigured, "
    "bad anatomy, extra limbs, extra fingers, fused fingers, mutated hands, poorly drawn hands, "
    "poorly drawn face, malformed, mutation, out of frame, cropped, watermark, signature, text, "
    "logo, username, oversaturated, plastic skin"
)
# Appended for pre-modern scenes (most of them). Tech scenes set "modern_ok": True to skip this.
NO_MODERN = ", modern clothing, wristwatch, sneakers, cars, smartphones, power lines"

# --- Global India anchors (the user's hard requirement) -------------------
# People must read as authentic Indians of Indian origin; settings must be Indian.
INDIA_PEOPLE = (
    "authentic Indian person of Indian ethnicity and Indian origin, "
    "regionally accurate Indian features, traditional Indian attire"
)
INDIA_PLACE = "authentic Indian subcontinent setting, Indian architecture and landscape"
NON_INDIAN_NEG = (
    ", non-Indian, foreigner, european features, caucasian, east asian features, "
    "african features, western clothing"
)
PEOPLE_CATEGORIES = {"hero", "villain", "ally", "operative", "crowd"}

# Suggested dimensions by category (SDXL-friendly).
DIMS = {
    "portrait": (832, 1216),
    "square": (1024, 1024),
    "landscape": (1216, 832),
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
            india_anchor = INDIA_PEOPLE if category in PEOPLE_CATEGORIES else INDIA_PLACE

            def make_job(variant_label, subject_text):
                nonlocal seq
                neg = DEFAULT_NEGATIVE
                if base_negative:
                    neg = neg + ", " + base_negative
                if category in PEOPLE_CATEGORIES:
                    neg = neg + NON_INDIAN_NEG
                if not ent_modern_ok:
                    neg = neg + NO_MODERN
                jid = f"{story['id']}__{slug(name)}"
                fname = f"{story['id']}_{slug(category)}_{slug(name)}"
                if variant_label:
                    jid += f"__{slug(variant_label)}"
                    fname += f"__{slug(variant_label)}"
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
                    "prompt": story["style"] + ", " + subject_text + ", " + india_anchor,
                    "negative_prompt": neg,
                    "color_theme": story["color_theme"],
                    "width": w,
                    "height": h,
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
