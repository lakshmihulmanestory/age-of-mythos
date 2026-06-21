# Image Generation Prompt Packs — Volume I, Chapter 1 (South India)

Ready-to-use prompts for open-source text-to-image models (SDXL, FLUX.1, SD3, Playground v2.5,
Juggernaut, RealVisXL, etc.) hosted on Hugging Face. Each character, animal, weapon, vehicle,
location, and key scene has its own **copy-paste prompt** plus a **negative prompt** and a
**color theme**.

## The five stories (one per South Indian state)

| # | State | Kingdom | Story | File |
|---|-------|---------|-------|------|
| 1 | Telangana | Chaya-Golkonda | The War of Mirrors | [01-chaya-golkonda-war-of-mirrors.md](01-chaya-golkonda-war-of-mirrors.md) |
| 2 | Andhra Pradesh | Dharmakshetra-Amaravati | The River's Oath | [02-amaravati-rivers-oath.md](02-amaravati-rivers-oath.md) |
| 3 | Tamil Nadu | Sangam-Tamilakam | The Song That Shatters | [03-tamilakam-song-that-shatters.md](03-tamilakam-song-that-shatters.md) |
| 4 | Karnataka | Vijayanagara-Reborn | The Buried Temple | [04-vijayanagara-buried-temple.md](04-vijayanagara-buried-temple.md) |
| 5 | Kerala | Parashurama-Kshetra | The 109th Form | [05-parashurama-109th-form.md](05-parashurama-109th-form.md) |

## Programmatic / machine-readable data (for your image pipeline)

If another program should consume these one entity at a time, **use the structured data in
[`data/`](data/)** instead of the markdown. The markdown files are the human-readable source; the
JSON/JSONL are generated from [`build_prompts.py`](build_prompts.py).

```
data/
  index.json            manifest: list of stories, job counts, and the field schema
  all_prompts.jsonl     EVERY image job, one JSON object per line  ← iterate this
  01-chaya-golkonda.json  ┐
  02-amaravati.json       │ one JSON array of jobs per story (same records as the jsonl)
  03-tamilakam.json       │
  04-vijayanagara.json    │
  05-parashurama.json     ┘
```

Each **job = one image to generate**. Fields:

| field | meaning |
|-------|---------|
| `id` | stable unique job id |
| `story_id` | which story it belongs to |
| `kingdom` / `state` | in-world kingdom + real South Indian state |
| `category` | `hero` `villain` `ally` `operative` `animal` `weapon` `relic` `artifact` `environment` `palace` `crowd` `scene` |
| `name` | entity name |
| `variant` | `null` for the base image, else a label (e.g. `final-form`, `defeated`) |
| `prompt` | **full ready-to-send positive prompt** (the story's style anchor is already prepended) |
| `negative_prompt` | ready-to-send negative prompt (era-aware) |
| `color_theme` | palette guidance for that story |
| `width` / `height` | suggested SDXL dimensions (portrait for characters, landscape for scenes, square for objects) |
| `filename` | suggested output filename stem (no extension) |
| `seq` | global generation order index |

There are **96 jobs** total. A consumer only needs `prompt`, `negative_prompt`, `width`, `height`,
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

Process one story only by reading `data/03-tamilakam.json`, or filter the JSONL by
`job["category"] == "hero"`, etc. To regenerate the data after editing prompts:
`python3 image-prompts/build_prompts.py`.

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
