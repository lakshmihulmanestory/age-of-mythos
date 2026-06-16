# Hulmane-The-Saga — Resume Checkpoint

**Session paused due to usage limits. Resume after 5 hours.**

---

## What was completed this session

### Character Data CSVs — fully built
| File | Rows | Columns | Status |
|---|---|---|---|
| `data/heroes.csv` | 28 | 57 | ✅ Complete — all fields + vehicles |
| `data/villains.csv` | 28 | 32 | ✅ Complete — all fields + vehicles |
| `data/references/vishnu-avatars.csv` | 10 | 10 | ✅ |
| `data/references/shiva-forms.csv` | 12 | 10 | ✅ |
| `data/references/ganesha-attributes.csv` | 10 | 9 | ✅ |
| `data/references/mahabharata-characters.csv` | 19 | 10 | ✅ |
| `data/references/state-birds.csv` | 28 | 11 | ✅ |
| `data/references/deities.csv` | 20 | 10 | ✅ |

### Documentation — fully built
| File | Purpose |
|---|---|
| `CLAUDE.md` | AI agent context — read first |
| `docs/PROJECT_VISION.md` | Full IP bible — all formats + rollout |
| `docs/STORY_FORMATS.md` | 14 format specs (Film → Toys) |
| `docs/MEDIA_GUIDE.md` | File placement + all 28 story slugs |
| `docs/CHARACTER_SYSTEM.md` | Character schema + tagging rules |

### Media folders — fully created
- `media/` — 28 states × stories × images/samples/videos/audio
- `samples/media/` — mirrors media/ exactly
- `media/HULMANE-THE-SAGA/` — Grand Council, Sacred Tattoo, world-level
- `media/HULMANE-THE-SAGA/merchandise/` — stickers/cards/apparel/prints/toys

### Vehicle data added to all 28 heroes AND 28 villains
Every character now has:
- `ancient_vehicle_name` — traditional chariot/mount (e.g. "Gajashri-Ratha — The Sacred Elephant Chariot" for Karnataka)
- `ancient_vehicle_description` — full description
- `modern_vehicle_name` — modern tech vehicle (e.g. "Ganda-Ratha — Rhino-Profile Armored Vehicle" for Assam)
- `modern_vehicle_description` — full description

---

## What to do when resuming

### Immediate fix needed (5 min)
The `data/villains.csv` vehicle columns need the same alignment check as heroes got.
Run this to verify:
```python
import csv
with open('data/villains.csv', newline='', encoding='utf-8') as f:
    r = csv.DictReader(f)
    rows = list(r)
    k = next(x for x in rows if x['id']=='karnataka')
    print(k['ancient_vehicle_name'])  # should be "Taksha-Vahana (The Earth Serpent Platform)"
```
If it shows wrong data, run the same header-fix script used for heroes.csv (insert missing field).

### Suggested next tasks (in order)
1. **Add vehicle images** — generate/collect vehicle art for each character into `media/states/<region>/<state>/` and `samples/media/states/...`
2. **Karnataka portrait update** — update `karnataka-portrait.html` to add a vehicle section showing both ancient and modern vehicles
3. **Character gallery update** — update `character-gallery.html` to show vehicle info in the modal popup
4. **Extend to other states** — build detailed portrait pages for Andhra Pradesh, Assam, Kerala (all have sample images in `samples/media/states/`)
5. **Generate remaining heroes CSV for Tamil Nadu** — Tamil Nadu has no samples yet, needs Gemini reference generation

### Key file paths to know
```
data/heroes.csv                          ← 28 heroes, 57 cols (id + all reference tags + vehicles)
data/villains.csv                        ← 28 villains, 32 cols (needs vehicle alignment check)
docs/CHARACTER_SYSTEM.md                 ← tag system + schema rules
media/states/south/karnataka/            ← Karnataka generated art
samples/media/states/south/karnataka/stories/vijayanagara-reborn/   ← 10 Gemini PNGs
karnataka-portrait.html                  ← main Karnataka story page
character-gallery.html                   ← gallery for all 28 kingdoms
```

### Column structure of heroes.csv (57 fields)
```
id, state, region, kingdom_name, kingdom_theme, era, landscape,
hero_name, hero_title, gender, age, costume_style, colour_primary, colour_secondary, physical_signature,
sacred_animal, animal_symbolism, animal_power,
sacred_bird, bird_symbolism, bird_role,
ancient_weapon_name, ancient_weapon_type, ancient_weapon_material, ancient_weapon_ability,
modern_weapon_name, modern_weapon_type, modern_weapon_ability,
guru_name, guru_type, guru_relationship, guru_teaches,
ancestor_1, ancestor_1_type, ancestor_1_gift, ancestor_council,
primary_deity, deity_aspect, deity_quality,
vishnu_avatar, vishnu_quality,
shiva_form, shiva_quality,
ganesha_attribute, ganesha_quality,
other_deity,
mb_primary, mb_primary_quality, mb_secondary, mb_secondary_quality, mb_story_echo, mb_inversion,
tags,
ancient_vehicle_name, ancient_vehicle_description,
modern_vehicle_name, modern_vehicle_description
```
