# Image Generation Prompt Packs — Volume I (Maha Parva), all 4 chapters

Ready-to-use prompts for open-source text-to-image models (SDXL, FLUX.1, SD3, Playground v2.5,
Juggernaut, RealVisXL, etc.) hosted on Hugging Face. Each character, animal, weapon, location, and
key scene has its own **copy-paste prompt** plus a **negative prompt** and a **color theme**.

**Coverage: 42 stories / 491 image jobs.**
- **Chapter 1 — Rise of Legends:** all **30 kingdoms** (one story each), derived faithfully from
  each kingdom's `story.md`. Covers all six regions — South, Central, East, North, Northeast, West.
- **Chapters 2–4 — Civil War / Rise of Beasts / The Great Epic:** **4 saga-wide packs each** (no
  per-kingdom prose exists yet, so these are invented from each chapter's premise — the Void Maw &
  Heralds, the titanic Rise of Beasts, and the final Grand Council / Maha-Adhipati / Kurukshetra /
  Mending).

### Two hard guarantees enforced for EVERY job (in the engine)
1. **Indian characters, Indian origin.** People always read as authentic Indians of Indian origin
   with regionally accurate features and traditional attire (a global positive anchor + a
   non-Indian negative). Settings are always the Indian subcontinent.
2. **Each kingdom has its own dedicated palette + architecture + dress.** All 42 stories carry a
   distinct `color_theme`, and each `style` anchor names that kingdom's real architecture/structures
   and traditional dress. (Verified: 42 unique themes.)

## Programmatic / machine-readable data (for your image pipeline)

Story data now lives in the **[`stories/`](stories/) Python package**, split per region/chapter
(`ch1_south.py`, `ch1_central.py`, … `ch4_great_epic.py`). [`build_prompts.py`](build_prompts.py)
is just the engine — it imports `stories/`, prepends each kingdom's style anchor, appends the global
India anchor, and writes the structured data in [`data/`](data/):

```
stories/                  per-region / per-chapter story data (edit here)
  __init__.py             load order -> ALL_STORIES
  ch1_south.py … ch1_west.py    Chapter 1, 30 kingdoms across 6 regions
  ch2_civil_war.py        Chapter 2 (invented, saga-wide)
  ch3_rise_of_beasts.py   Chapter 3 (invented, saga-wide)
  ch4_great_epic.py       Chapter 4 (invented, saga-wide)
data/
  index.json            manifest: stories (with chapter/region/color_theme), counts, field schema
  all_prompts.jsonl     EVERY image job, one JSON object per line  ← iterate this
  <story_id>.json       one JSON array of jobs per story (42 files)
```

Each **job = one image to generate**. Fields:

| field | meaning |
|-------|---------|
| `id` | stable unique job id |
| `story_id` | which story it belongs to |
| `chapter` / `region` | chapter number (1–4) + region of Bharatavarsha (or `saga-wide`) |
| `kingdom` / `state` | in-world kingdom + real Indian state / territory inspiration |
| `category` | `hero` `villain` `ally` `operative` `animal` `weapon` `relic` `artifact` `environment` `palace` `crowd` `scene` |
| `name` | entity name |
| `variant` | `null` for the base image, else a label (e.g. `final-form`, `defeated`) |
| `prompt` | **full ready-to-send positive prompt** (the story's style anchor is already prepended) |
| `negative_prompt` | ready-to-send negative prompt (era-aware) |
| `color_theme` | palette guidance for that story |
| `width` / `height` | suggested SDXL dimensions (portrait for characters, landscape for scenes, square for objects) |
| `filename` | suggested output filename stem (no extension) |
| `seq` | global generation order index |

There are **491 jobs** total. A consumer only needs `prompt`, `negative_prompt`, `width`, `height`,
and `filename` — everything else is metadata for filtering/sorting.

### Minimal consumer loop (Python)

```python
import json

with open("image-prompts/data/all_prompts.jsonl") as f:
    for line in f:
        job = json.loads(line)
        image = your_model.generate(            # <-- your HF pipeline call
            prompt=job["prompt"],
            negative_prompt=job["negative_prompt"],
            width=job["width"],
            height=job["height"],
        )
        image.save(f"out/{job['filename']}.png")
        print("done:", job["id"])
```

Process one story only by reading e.g. `data/03-tamilakam.json`, or filter the JSONL by
`job["category"] == "hero"` or `job["chapter"] == 1`, etc. To regenerate the data after editing any
module in `stories/`: `python3 image-prompts/build_prompts.py`.

---

## How to use these prompts (human / manual)

1. **Pick an entity** (e.g. a hero) and copy the **Prompt** block into your model's positive field.
2. Copy the **Negative prompt** into the negative field.
3. Each story has a **Global Style Anchor** at the top — paste it in front of every prompt from
   that story so all images share one art style and stay consistent across a set.
4. For **character sheets / reference images** (so the same face/costume recurs), add:
   `character reference sheet, multiple angles, front view and side view, neutral grey background,
   T-pose, full body` to the prompt.
5. For **portraits**, add `head and shoulders portrait, looking at camera, shallow depth of field`.
6. For **scenes**, use the wide cinematic prompts in the "Key Scenes" section of each file.

### Recommended model settings (starting points)

- **SDXL / Juggernaut / RealVisXL** — 1024×1024 (or 832×1216 portrait, 1216×832 landscape),
  steps 30–40, CFG 5–7, sampler DPM++ 2M Karras.
- **FLUX.1 [dev]** — 1024×1024, steps 28–35, guidance 3.5. FLUX ignores most negatives, so lean
  on the positive prompt; you can drop the negative block.
- **SD3.5** — 1024×1024, steps 28, CFG 4.5.
- For faces across a series, generate a reference image then use **IP-Adapter** /
  **InstantID** / a trained **LoRA** to lock the identity.

### Universal negative prompt (use if a section doesn't list its own)

```
lowres, low quality, worst quality, blurry, jpeg artifacts, deformed, disfigured, bad anatomy,
extra limbs, extra fingers, fused fingers, mutated hands, poorly drawn hands, poorly drawn face,
malformed, mutation, out of frame, cropped, watermark, signature, text, logo, username,
oversaturated, plastic skin, modern clothing, wristwatch, sneakers, cars, smartphones
```

> Note on era: these stories blend **ancient South Indian mythic** settings with occasional
> **near-future tech** (drones, amplifiers, sonar). Where a scene is explicitly modern/tech,
> the file says so and removes "modern clothing / cars" from the negative.
