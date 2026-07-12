# Reference-Image Casting — Age of Mythos (Volume I)

**Goal:** for a first, low-cost image pass, the *people* in every generated image
should look like the real family/personal photos in [`images-reference/`](../images-reference/).
"Take the person as reference, create the rest (costume, world, action) from the
story." Objects, animals, weapons, environments and pure scenes stay text-only.

This sheet is the **human** source of truth. The **machine** source of truth is
[`reference_cast.py`](reference_cast.py) (casting logic) →
[`data/reference_index.json`](data/reference_index.json) (catalog) and the
`reference_*` fields on every job in [`data/all_prompts.jsonl`](data/all_prompts.jsonl).
Edit `reference_cast.py`, then re-run `python3 image-prompts/build_prompts.py`.

---

## The cast (archetype → real person → photos)

Each archetype is one real person (or a coherent group). Photos are listed
best/most-frontal first; the builder rotates through the pool so repeated uses
don't all land on the same shot.

| Archetype | Who | Mode | Photos (in `images-reference/`) |
|-----------|-----|------|--------------------------------|
| `lead_man` | Lead man, ~30s, beard — recurring **male hero** | face | `460`, `642`, `139934`, `2P6A9388`, `IMG_4576`, `122298` |
| `lead_woman` | Lead woman, ~30s — recurring **female hero** | face | `IMG_6299`, `172962`, `86391`, `IMG_1999`, `2P6A9388`, `IMG_4576` |
| `young_man` | Secondary adult men — friends/brothers/operatives | face | `122298`, `505`, `IMG_20211219…`, `109555` |
| `young_woman` | Secondary adult women — sisters/friends/seers | face | `250`, `173115`, `153441`, `132299`, `IMG_7373` |
| `elder_man` | Elderly man, silver hair, white dhoti — sage/king/old villain | face | `83167`, `83168` |
| `elder_woman` | Elderly woman — matriarch/queen mother | face | `IMG_6288`, `83168` |
| `boy_child` | Young boy ~6 — child prince/hero | face | `IMG_2784 Edited`, `IMG_4537` |
| `infant_child` | Baby girl / infant character | face | `IMG_3901`, `IMG_6450`, `IMG_4346` |
| `crowd_group` | Group look for **crowds** (borrow look, not a single face) | style | `109555`, `IMG_7373`, `IMG_4566`, `153441` |

**Spare photos** (couple/group shots — two faces, so *not* used for single-face
identity locking; kept in `images-reference/` for manual use):
`260`, `451`, `161627`, `IMG_2493 Edited`, `IMG_8824`.

`face` mode = lock that person's identity (IP-Adapter / InstantID / img2img).
`style` mode = borrow the group's overall look/ethnicity only.

---

## How characters are cast (automatic)

For every job, `reference_cast.py` infers **gender** and **age band** from the
character's name + description, then routes by category:

```
child cue (and not an adult noun) → boy_child / infant_child   (by gender)
elder cue                          → elder_man / elder_woman    (by gender)
otherwise (adult):
    hero                           → lead_man / lead_woman       (the protagonists)
    ally / operative / villain     → young_man / young_woman      (generic pools)
    crowd                          → crowd_group  (style ref)
    animal / weapon / relic /
    artifact / environment /
    palace / scene                 → no reference (pure text-to-image)
```

Villains are deliberately routed to the **generic** pools (or elders), never the
protagonists' faces. Heroes across all 30 kingdoms share the two lead faces on
purpose — this is a personal family saga. To change any of that, edit the
`infer_cast()` rules in `reference_cast.py`.

**Current coverage:** 204 of 491 jobs get a person reference; 287 (objects,
animals, places, scenes) are text-only.

---

## Using the reference in your image pipeline

Each people-job carries:

- `reference_image` — repo-relative path to the primary photo (e.g. `images-reference/460.jpeg`)
- `reference_pool` — every photo for that archetype (swap freely for variety)
- `reference_mode` — `face` (lock identity) or `style` (look only)
- `reference_weight` — suggested strength (`0.65` face, `0.30` style)
- the positive `prompt` already ends with an **identity clause**
  ("preserve the exact facial identity … same real person's face …").

Minimal consumer sketch:

```python
import json
for line in open("image-prompts/data/all_prompts.jsonl"):
    job = json.loads(line)
    ref = job["reference_image"]           # None for objects/animals/places
    if ref:                                 # face/identity conditioning
        img = pipe(prompt=job["prompt"], negative_prompt=job["negative_prompt"],
                   width=job["width"], height=job["height"],
                   ip_adapter_image=load(ref), ip_adapter_scale=job["reference_weight"])
    else:                                   # plain text-to-image
        img = pipe(prompt=job["prompt"], negative_prompt=job["negative_prompt"],
                   width=job["width"], height=job["height"])
    img.save(f"generated-images/{job['filename']}.png")
```

Recommended reference tooling: **IP-Adapter FaceID** or **InstantID** for
`face` mode (best identity lock), plain IP-Adapter for `style` mode.

## First-pass sizing

This pass uses the minimum sizes that still hold detail:
portrait **768×1152**, square **768×768**, landscape **1152×768** (all ÷64,
SDXL/FLUX-friendly). Bump `DIMS` in `build_prompts.py` for a final high-res
render once compositions are approved.
