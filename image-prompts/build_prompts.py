#!/usr/bin/env python3
"""
Build machine-readable image-generation jobs from the Volume I / Chapter 1
South-India prompt packs.

Outputs (into image-prompts/data/):
  - <story_id>.json          one JSON array of jobs per story
  - all_prompts.jsonl        every job, one JSON object per line (iterate sequentially)
  - index.json               manifest: stories + counts + field schema

Each "job" is ONE image to generate. A downstream program can simply:
  for each job: send job["prompt"] + job["negative_prompt"] to the image model,
                save the result as job["filename"] + ".png", then continue.

Re-run after editing this file:  python3 image-prompts/build_prompts.py
"""

import json
import os
import re

OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")

# Default negative prompt shared by all jobs unless a job overrides it.
DEFAULT_NEGATIVE = (
    "lowres, low quality, worst quality, blurry, jpeg artifacts, deformed, disfigured, "
    "bad anatomy, extra limbs, extra fingers, fused fingers, mutated hands, poorly drawn hands, "
    "poorly drawn face, malformed, mutation, out of frame, cropped, watermark, signature, text, "
    "logo, username, oversaturated, plastic skin"
)
# Appended for pre-modern scenes (most of them). Tech scenes set "modern_ok": True to skip this.
NO_MODERN = ", modern clothing, wristwatch, sneakers, cars, smartphones, power lines"

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


# ---------------------------------------------------------------------------
# DATA
# Each story: id, kingdom, state, title, style anchor, color theme, modern_ok,
# and a list of entities. Each entity: (category, name, subject_prompt,
# optional dict with "negative" override and/or "variants": [(label, prompt), ...]).
# The final job "prompt" = style_anchor + ", " + subject_prompt.
# ---------------------------------------------------------------------------

STORIES = [
    {
        "id": "01-chaya-golkonda",
        "kingdom": "Chaya-Golkonda",
        "state": "Telangana",
        "title": "The War of Mirrors",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Deccan-fantasy, Golconda fortress aesthetic, Qutb Shahi "
            "architecture, diamond and mirror motif, chiaroscuro lighting, deep shadows and "
            "candle-warm highlights, indigo-and-silver palette, espionage thriller mood, highly "
            "detailed, intricate, volumetric light, artstation, octane render, 8k"
        ),
        "color_theme": "indigo/midnight-blue, mirror-silver, candle gold, smoky charcoal, blood-red accents",
        "entities": [
            ("hero", "Chittaranga", (
                "a lean young South Indian man mid-20s, heterochromia with one warm brown eye and "
                "one pale grey eye, sharp watchful diamond-cutter gaze, short black hair, light "
                "stubble, a spotted-deer chital tattoo of dark spots spreading from his back across "
                "shoulders and arms, dark fitted spy-leather tunic with indigo sash, twin throwing "
                "discs at his belt one polished silver and one shadow-black, agile assassin build, "
                "standing in a Golconda alley lit by a single lantern, intense focused expression"
            ), {"negative": "matching eyes, sunglasses, heavy armor, goofy smile",
                "variants": [("final-form",
                    "entire body covered in spotted-deer tattoo every spot a witnessed truth glowing "
                    "faintly, victorious calm expression, dawn light through broken mirrors")]}),
            ("ally", "Unspotted-Sister-Seer", (
                "a young South Indian woman, identical twin face to a heterochromia man but her own "
                "eyes now permanently mirror-silver and reflective, pale and thin from weeks inside "
                "the mirror-vaults, long dark hair, plain dark-grey vault robe, seated cross-legged "
                "before a tall mirror, her reflective eyes showing a whole city of mirrors, smooth "
                "unmarked skin with no tattoo, ethereal seer aura, candlelight"
            ), {"negative": "tattoos on skin, brown eyes, warrior armor, weapons"}),
            ("ally", "Darpana-Devi-Mirror-Maiden", (
                "a graceful South Indian woman warrior the Mirror Maiden, polished circular "
                "mirror-shields strapped to both forearms reflecting light, silver-threaded indigo "
                "sari-armor, calm wise eyes, silver jewelry, standing in the mirrored Hall of "
                "Diamonds, reflective shield catching candle-sun, protective stance"
            ), None),
            ("ally", "Nakkal-Singh-Mimic", (
                "a shape-shifting infiltrator athletic South Indian man, plain featureless face that "
                "seems to borrow others' expressions, loose grey spy garb for blending in, mid-motion "
                "copying a fighting stance, mischievous adaptable look, dim mirror-vault corridor"
            ), None),
            ("villain", "Qutb-Chaaya-Shadow-Sultan", (
                "a terrifying figure neither man nor shadow, the Shadow Sultan, a body made of living "
                "darkness holding the silhouette of an old Deccan spymaster, faceless or wearing a "
                "shifting borrowed face, flat reflective glassy eyes with no light shining from "
                "within, tattered indigo-black Qutb Shahi robes dissolving into smoke at the edges, "
                "holding a mirror-bladed sword, surrounded by faint reflections of himself, uncanny menacing"
            ), {"negative": "friendly face, bright lighting, warm glowing eyes, heroic",
                "variants": [
                    ("fifty-copies",
                     "fifty identical shadow-copies of the Shadow Sultan in a mirrored hall each "
                     "holding a mirror-blade, every mirror reflecting them into ten thousand, they "
                     "bleed real blood when cut but reform from smoke, a central candle becoming a "
                     "blinding sun of reflections, nightmarish symmetry"),
                    ("defeated",
                     "an old broken spy sitting in the dark with no face of his own left, weeping, "
                     "unable to remember his original appearance, four blank walls, a single candle "
                     "that never goes out")]}),
            ("animal", "Chital-Spotted-Deer", (
                "a spotted deer chital, elegant chestnut coat dotted with white spots, alert gentle "
                "eyes, mid-leap, sacred symbol of witnessed truth, soft light"
            ), None),
            ("animal", "Palapitta-Indian-Roller", (
                "Indian Roller birds palapitta, brilliant blue and gold plumage, wings spread in "
                "their signature tumbling acrobatic flight, wheeling in spirals through a dawn sky "
                "over broken mirror rooftops, vivid turquoise and azure feathers"
            ), None),
            ("weapon", "Chitra-and-Ranga-Discs", (
                "two matched circular throwing discs chakram with razor edges, one mirror-polished "
                "silver disc named Chitra and one matte shadow-black disc named Ranga, intricate "
                "Deccan engraving, balanced like boomerangs, displayed on dark cloth, studio product "
                "shot, dramatic rim light"
            ), None),
            ("weapon", "Aaina-e-Maut-Mirror-of-Death", (
                "an ornate sword whose entire blade is a flawless mirror, the Mirror of Death, so "
                "polished it reflects the viewer's deepest fear instead of their face, Qutb Shahi "
                "hilt with black pearl and silver filigree, distorted frightening reflection in the "
                "blade, candlelight glinting, ominous beautiful weapon"
            ), None),
            ("environment", "Golkonda-Fortress-City", (
                "Golconda fortress-city at dusk, massive granite ramparts and domed Qutb Shahi "
                "pavilions on a boulder hill, a labyrinth of narrow alleys where every shadow hides a "
                "spy, diamond-cutting workshops, lantern-lit bazaars, espionage atmosphere, indigo "
                "sky, smoky torchlight, epic matte painting"
            ), None),
            ("environment", "Mirror-Vaults-Hall-of-Diamonds", (
                "underground mirror-vaults beneath ancient domed tombs, the Hall of Diamonds a vast "
                "chamber lined with thousands of mirrors where a single candle becomes a blinding "
                "sun, infinite reflections, restless spirits trapped in glass, cold reflective light, "
                "claustrophobic and dazzling, dark fantasy interior"
            ), None),
            ("environment", "Mirror-Maze-City", (
                "the entire city of Golconda turned into a mirror-maze, mirrors mounted on every "
                "wall street and building, citizens unable to tell who is real, shadow-copies walking "
                "among merchants and soldiers, paranoid atmosphere, fractured reflections, eerie twilight"
            ), None),
            ("environment", "Warangal-Flame-Chamber", (
                "a secret stone chamber inside Warangal Fort, an eternal sacred flame burning for a "
                "thousand years on a carved pedestal, no reflections only forward-going firelight, a "
                "meditating warrior before it streaming sweat, ancient Kakatiya pillars, holy heat-haze"
            ), None),
            ("crowd", "Golkonda-People", (
                "Golconda common folk, gem-cutters at their wheels, spice and cloth merchants who are "
                "secretly informants, women dancers who read lips, shadow-guild couriers, "
                "lamp-lighters, fortress guards in Deccan armor, a bustling secretive bazaar, period "
                "Deccan dress in indigo ochre and white, everyone wary and watchful"
            ), None),
            ("scene", "Scene-Fifty-In-The-Mirrors", (
                "epic boss reveal, a lone disc-thrower facing fifty shadow-copies of the Shadow Sultan "
                "in the mirrored Hall of Diamonds reflected into ten thousand, single candle-sun, "
                "overwhelming dread"
            ), None),
            ("scene", "Scene-Lights-Out-Blind-Duel", (
                "total darkness across Golconda, every lamp dead at midnight, mirrors gone dead, "
                "shadow-copies dissolving, a blind-fighting hero guided by his mirror-eyed sister, "
                "only the glint of a thrown disc, pitch-black duel"
            ), None),
            ("scene", "Scene-Dawn-Through-Broken-Mirrors", (
                "dawn light pouring through thousands of shattered mirrors, blue-and-gold Indian "
                "Roller birds tumbling in spirals overhead, a hero whose whole body is covered in "
                "glowing spotted-deer tattoos, his pale mirror-eyed sister stepping free, triumphant serene"
            ), None),
        ],
    },
    {
        "id": "02-amaravati",
        "kingdom": "Dharmakshetra-Amaravati",
        "state": "Andhra Pradesh",
        "title": "The River's Oath",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Andhra river-kingdom fantasy, Amaravati and Krishna-Godavari "
            "delta, flowing-water motif, vivid turquoise-and-aqua water palette versus scorched "
            "crimson drought, dynamic motion, monsoon light, mythic action, highly detailed, "
            "intricate, volumetric spray and steam, artstation, octane render, 8k"
        ),
        "color_theme": "turquoise and aquamarine water, cyan river-spray, wet slate-grey, water-silver vs scorched crimson and ember-orange, steam-white, cracked-earth ochre",
        "entities": [
            ("hero", "Krishnaveni-River-Guardian", (
                "a strong graceful South Indian woman warrior mid-30s, beloved river-guardian of "
                "Amaravati, twin urumi flexible ribbon whip-swords coiled around both forearms like "
                "sleeping serpents, wet dark hair, river-blue and white warrior sari-armor woven with "
                "river-silk, a half-body blackbuck antelope tattoo on her shoulder, standing "
                "waist-deep in a flowing river at dawn cracking both whip-blades so droplets fly like "
                "diamonds, serene prayer-like focus, motion blur"
            ), {"negative": "rigid sword, stiff pose, dry desert background, heavy plate armor",
                "variants": [("full-tattoo-finale",
                    "the blackbuck tattoo now covering her entire body in full leap hooves touching "
                    "water at every joint antlers reaching her neck glowing faintly, urumi whips wet "
                    "with sacred underground water hissing to steam, radiant and unstoppable")]}),
            ("ally", "Bhimavaram-Brother", (
                "a cheerful sturdy young South Indian man river patrolman standing on a wooden patrol "
                "boat with a grin, simple river-guard tunic and sash, sword at hip, organizing a "
                "defensive line of boats, warm brotherly energy, green delta behind him"
            ), None),
            ("ally", "Nelluri-Devi-Rice-Blade", (
                "a fierce farming-militia woman, sun-browned, a sharpened farm tool reforged into a "
                "curved blade, field-worker wrapped cotton clothing in earth tones, leading armed "
                "farmers, paddy fields behind, determined raised weapon"
            ), None),
            ("ally", "Chandra-Mukhi-Assassin", (
                "a sleek South Indian woman former assassin turned scout, dark close-fitting "
                "infiltration garb, moon-pale face, daggers, slipping through an enemy camp at night, "
                "watchful clever eyes"
            ), None),
            ("ally", "Rishi-Amareshwara-Blind-Sage", (
                "an ancient blind river-sage frail with milk-white sightless eyes, long white beard, "
                "simple ochre dhoti, seated motionless on cracked earth with one hand pressed to the "
                "ground listening to water beneath, serene otherworldly wisdom, dry riverbed"
            ), None),
            ("villain", "Narakasura-Blood-Emperor", (
                "a menacing South Indian man once a water-engineer now the Blood Emperor, an inverted "
                "upside-down blackbuck tattoo carved into his bare chest, scarred grief-hardened "
                "face, the air around him shimmering with heat-haze, water boiling and steaming where "
                "he stands, holding a cursed trident planted in cracked earth, dark scorched warlord "
                "garb, standing on a dried steaming riverbed, rage and sorrow mixed, embers and steam"
            ), {"negative": "cool calm water, lush green, kind smile, upright deer tattoo, heroic glow",
                "variants": [
                    ("channeling-earth-core",
                     "slamming his trident into the ground pulling geothermal fire from the earth's "
                     "core, the ground glowing red-hot and cracking, rocks melting, blood dripping "
                     "from his wound boiling on contact, apocalyptic heat, red glow"),
                    ("defeated-given-water",
                     "on his knees his inverted tattoo fading as it runs backwards, heat leaving in "
                     "waves, tears cutting through ash on his face, a woman kneeling to hold a "
                     "water-skin to his lips, redemption, soft rain beginning")]}),
            ("animal", "Blackbuck-Antelope", (
                "a blackbuck Indian antelope, striking black-and-white coat, long spiral ringed "
                "horns, elegant leaping mid-air drinking at a river ghat, sacred totem animal, golden light"
            ), None),
            ("animal", "Rose-Ringed-Parakeets", (
                "bright green rose-ringed parakeets, emerald wings flashing, tiny silver "
                "message-capsules tied to their legs, flying between river forts, vivid green against "
                "blue delta sky"
            ), None),
            ("weapon", "Godavari-and-Krishna-Urumi", (
                "two urumi flexible ribbon whip-swords, long flexible steel ribbon-blades coiling like "
                "serpents around the forearms, ornate Andhra hilts engraved Godavari and Krishna, "
                "shown both coiled at rest and cracking through the air in deadly arcs, water droplets "
                "splitting along the edge, dramatic studio light"
            ), None),
            ("weapon", "Rakta-Trishula-Cursed-Trident", (
                "a cursed three-pronged trident Rakta-Trishula, dark scorched metal glowing red with "
                "geothermal heat, steam rising off the prongs, blood crusted and boiling at the base, "
                "planted in cracked earth, ominous heat-weapon, ember light"
            ), None),
            ("environment", "Amaravati-River-Kingdom", (
                "Amaravati river-kingdom in full glory, a lush city where water flows through every "
                "street in carved stone channels, Buddhist-Andhra stupa and pillared architecture, "
                "river ghats with bathing steps, green parakeets carrying messages, blackbucks "
                "drinking, vibrant market, monsoon-blue sky, paradise of water, epic matte painting"
            ), None),
            ("environment", "Parched-Upstream-Village", (
                "a drought-stricken upstream village where the river was diverted, cracked dry "
                "riverbed, dust, dead blackbucks, a mother squeezing moisture from roots to feed her "
                "infant, desolate and tragic, harsh white sun, scorched ochre palette"
            ), None),
            ("environment", "Submerged-Temple", (
                "an ancient submerged temple sealed for a thousand years beneath a dried river-bed, "
                "walls covered in forbidden inverted-animal water-control carvings, cracked mud floor, "
                "a single shaft of light, ominous archaeological discovery, damp eerie"
            ), None),
            ("environment", "Underground-River-Cavern", (
                "a vast dark ancient underground cavern, rivers flowing beneath rivers, "
                "ten-thousand-year-old stalactites dripping, an underground pool so pure it glows "
                "faintly blue, a wounded warrior wading in as her blisters heal, sacred subterranean "
                "beauty, bioluminescent blue glow"
            ), None),
            ("crowd", "Amaravati-River-Folk", (
                "Amaravati river-folk, a fishing fleet of wooden boats with families singing evening "
                "ragas, children learning to swim at the ghats, women filling pots, parakeet-keepers, "
                "rice farmers in the paddies, boat patrols, period Andhra dress in white cotton "
                "river-blue and green, communal and warm"
            ), None),
            ("scene", "Scene-Boiling-Fleet", (
                "forty fishing boats on a river that suddenly bubbles and turns white with steam, "
                "fish floating belly-up boiled alive, a wall of steam rising at dawn, horror and grief"
            ), None),
            ("scene", "Scene-Springs-From-The-Earth", (
                "villagers watching clean water burst from the dry ground itself, new springs "
                "flowing, a mother filling a pot, a blackbuck drinking from a new pool, an enemy army "
                "laying down their staffs one by one, hope dawning"
            ), None),
            ("scene", "Scene-Water-Against-Fire", (
                "brutal final duel, a trident of boiling fire against twin urumi wet with sacred "
                "water, the ground cracking and glowing red between them, steam shielding the heroine "
                "instead of burning her, the trident breaking, elemental clash"
            ), None),
        ],
    },
    {
        "id": "03-tamilakam",
        "kingdom": "Sangam-Tamilakam",
        "state": "Tamil Nadu",
        "title": "The Song That Shatters",
        "modern_ok": True,  # blends mythic with near-future tech
        "style": (
            "cinematic concept art, Tamil mytho-techno fantasy, Nilgiri mountains and Coromandel "
            "coast, sound-as-light motif, vivid violet-and-amethyst Kurinji bloom palette with "
            "magenta accents, sacred-meets-acoustic-warfare, atmospheric cloud and stone, highly "
            "detailed, intricate, volumetric light, artstation, octane render, 8k"
        ),
        "color_theme": "Kurinji violet and amethyst-purple, magenta-pink bloom, mountain cloud-grey and basalt black, amber-bronze veena warmth vs cold electromagnetic blue-white",
        "entities": [
            ("hero", "Kurinjiselvi-Mountain-Bloom", (
                "a lean angular Tamil woman warrior age 36, dark skin weathered by ten years of "
                "mountain solitude, steady amber hearth-fire eyes, hair cropped close and threaded "
                "with blue Kurinji petals, a Nilgiri Tahr mountain goat tattoo climbing the length of "
                "her spine hooves at her sacrum horns cresting her shoulder blades, holding a six-foot "
                "ashwood staff with a curved meteorite-iron crescent blade at each end leaving blue "
                "afterimages, barefoot gripping wet basalt on a high cliff above a sea of cloud, "
                "silent and rooted hermit-warrior"
            ), {"negative": "pale skin, long flowing hair, ornate jewelry, soft delicate, urban background",
                "variants": [
                    ("broken-at-mahabalipuram",
                     "bleeding and broken her crescent staff shattered into fragments, the tahr tattoo "
                     "on her spine cracked and seeping ink in the shape of a climbing goat, devastated"),
                    ("reforged-finale",
                     "holding a new shorter single curved blade wound with Kurinji stems glowing "
                     "blue-violet frequency made visible, standing in a patch of early-bloomed Kurinji "
                     "flowers, twelve tahrs ringed around her, singing, transcendent")]}),
            ("ally", "Sangam-Kavalan-Assembly-Guard", (
                "three Tamil special-forces warriors who fight as one in sleek matte metamaterial "
                "frequency-jamming armor that hums and absorbs sound, Iyal a 50-year-old steel-grey "
                "haired woman strategist, Isai a non-binary engineer with an acoustic display visor, "
                "Natakam a huge silent close-combat man built like a temple pillar, near-future "
                "tactical gear, blue HUD glow, coastal night"
            ), None),
            ("ally", "Kadalamma-Sea-Mother", (
                "a formidable 70-year-old Tamil fisherwoman grandmother, forearms like anchor chains, "
                "weathered face, silver hair, simple fisher's wrap and shawl, standing at the prow of "
                "a wooden fishing boat among a fleet, commanding the sea, salt-spray, predawn ocean, "
                "fierce maternal authority"
            ), None),
            ("ally", "Meenakshi-Arrow-Silent-Archer", (
                "a mysterious temple archer of unknown identity, face half-shadowed, drawing a "
                "high-tech recurve bow firing satellite-guided arrows, perched on a rooftop far away, "
                "calm inhuman precision, sniper stillness, night"
            ), None),
            ("artifact", "Thiruvalluvar-Speaking-Stone", (
                "an ancient black granite tablet four feet tall covered in pre-classical Tamil "
                "Thirukkural couplets in archaic script, warm and faintly glowing, set in a natural "
                "basalt alcove in a high Nilgiri cave, humming with bone-deep resonance, sacred living "
                "artifact, soft inner light"
            ), None),
            ("villain", "Ravana-Vadham-Southern-Shadow", (
                "a corrupted Tamil scholar turned sonic tyrant age 52, gaunt obsessive face with "
                "grief and triumph mixed, long greying scholar hair, dark robes layered over wired "
                "electromagnetic gear, seated behind an enormous eight-foot black-stone veena with "
                "ten metal strings, electromagnetic coils and capacitor banks wired along its neck, "
                "the air distorting into visible sound-ripples, a ten-headed Ravana shadow looming "
                "behind him, brilliant and damned"
            ), {"negative": "young, happy, simple folk instrument, peaceful priest, heroic glow"}),
            ("operative", "Dasavadanam-Ten-Voiced", (
                "a nondescript Tamil man the perfect voice-mimic, an unremarkable face that seems to "
                "belong to no one, plain operative clothing, throat subtly glowing as he speaks in "
                "stolen voices, shadowy liaison meeting foreign agents, deceptive and invisible, dim room"
            ), None),
            ("animal", "Nilgiri-Tahr", (
                "a Nilgiri Tahr stocky wild mountain goat, coarse brown coat with a grizzled saddle, "
                "short curved backswept horns, surefooted on sheer wet basalt cliffs, silhouetted "
                "against cloud, sacred guardian animal"
            ), {"variants": [("living-shield",
                "twelve Nilgiri Tahrs arranged in a defensive ring around a patch of glowing blue "
                "Kurinji flowers, horns lowered in defiance braced against vibration, loyal and immovable")]}),
            ("animal", "Emerald-Doves", (
                "emerald doves with iridescent green wings and soft grey heads, thousands rising as a "
                "green storm of wings over an ancient stone temple, their collective wingbeat creating "
                "a visible counter-frequency ripple in the air, carrying a melody, magical phenomenon"
            ), None),
            ("weapon", "Kurinji-Crescent-Staff", (
                "a six-foot ashwood quarterstaff fitted with a curved crescent blade of meteorite iron "
                "at each end, the blades never rust and trail cold electric blue afterimages when "
                "swung, wound with blue Kurinji flowers at the grip, leaning against grey basalt, "
                "dramatic rim light"
            ), None),
            ("weapon", "Ten-Stringed-Veena", (
                "an enormous eight-foot veena carved from a single block of unidentifiable black "
                "stone, ten metal strings that hum without being touched, ancient carvings of a "
                "ten-headed figure and accurate acoustic-wave patterns on its body, augmented with "
                "electromagnetic coils capacitor banks and directional speakers, a weapon disguised "
                "as an instrument, ominous and beautiful"
            ), None),
            ("environment", "Nilgiris-At-Dawn", (
                "the Nilgiri mountains at dawn, a country of cloud and stone, shola forests clinging "
                "to ridgelines like green smoke, rolling grasslands under a vast sky, Nilgiri Tahrs "
                "grazing on a slope, a lone figure on a high ledge, serene immense ancient landscape, soft mist"
            ), None),
            ("environment", "Kurinji-Bloom", (
                "the Nilgiri mountainsides covered in a sea of blue-violet Kurinji flowers blooming "
                "all at once visible from space, a slow silent wildfire of colour climbing the slopes, "
                "once-in-twelve-years phenomenon, breathtaking"
            ), None),
            ("environment", "Mahabalipuram-Shore-Temple", (
                "the ancient Pallava Shore Temple and monolithic stone chariots of Mahabalipuram on a "
                "beach under a bruised-copper sky, granite carvings vibrating as a directional "
                "speaker, moonless-night battle with visible sound-ripples distorting the air and "
                "lifting sand in concentric rings, epic mytho-techno warfare"
            ), None),
            ("environment", "Nilgiri-Cave-Speaking-Stone", (
                "a hidden cave above the tree line, bare rock and thin air, a warm glowing black "
                "granite Thirukkural tablet in an alcove, a wounded warrior resting on a grass pallet "
                "with broken staff fragments beside her, tahrs at the cave mouth, sacred refuge, soft light"
            ), None),
            ("scene", "Scene-Frequency-Hits-Mountain", (
                "an invisible sub-bass frequency striking the Nilgiris, the old tahr bull screaming "
                "and the herd bolting up a cliff, emerald doves and laughingthrushes falling stunned "
                "from the sky, a hermit warrior gripping her staff on the ridge, silence after"
            ), None),
            ("scene", "Scene-Doves-Carry-The-Song", (
                "fifty thousand emerald doves dispersing from a Nilgiri ridge at sunrise carrying a "
                "truth-song across Tamil Nadu, towns waking from trance below, eleven coastal "
                "sound-towers firing converging beams at the shaking mountain while the ancient "
                "mountain sings back swallowing the assault, Kurinji blooming a year early"
            ), None),
        ],
    },
    {
        "id": "04-vijayanagara",
        "kingdom": "Vijayanagara-Reborn",
        "state": "Karnataka",
        "title": "The Buried Temple of the Malenad",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Karnataka Malenad rainforest fantasy, Hoysala temple "
            "architecture, soapstone carving detail, serpent-and-stone motif, deep emerald-and-jade "
            "rainforest-green palette with white-sand contrast, misty primordial jungle, reverent "
            "archaeological awe, highly detailed, intricate filigree carving, volumetric god-rays, "
            "artstation, octane render, 8k"
        ),
        "color_theme": "suffocating Malenad emerald-green, translucent jade-green, white Yagachi sand, dark magnetite-iron grey, soapstone honey-beige, mossy forest-shadow, cardamom-and-sandalwood warmth",
        "entities": [
            ("hero", "Vikramaditya-Hoysala-Guardian", (
                "a massive immovable South Indian warrior-scholar built like the carved pillars of "
                "Belur, broad shoulders, skin the colour of seasoned teak, calm patient eyes, scarred, "
                "descendant of the Hoysala guards, carrying a heavy serrated dark-magnetite "
                "broadsword, simple earth-toned forest warrior dress with Hoysala motifs, a King Cobra "
                "bonded near him, moving through dense Malenad rainforest, holding a torch aloft, quiet strength"
            ), {"negative": "slim, ornate royal robes, urban setting, glossy armor",
                "variants": [("hermit-vigil-finale",
                    "older and scarred, alone in the Agumbe woods as a silent hermit guardian owning "
                    "nothing but his sword and a secret, watching the forest with the patience of "
                    "stone, mist")]}),
            ("ally", "Karthik-Lead-Ranger", (
                "a wiry alert forest ranger, skin stained with dark jungle peat, wide fearful-but-"
                "loyal eyes, practical tracking gear, holding a hand-drawn map of cobra trails, deep "
                "Malenad jungle, leeches on the leaves behind him"
            ), None),
            ("ally", "Somnath-Temple-Architect", (
                "a thoughtful older South Indian temple architect specialising in Hoysala geometry, "
                "scholar's eyes, brushing white sand from a carved soapstone lintel, measuring tools "
                "and palm-leaf notes, reverent discovery, torchlight on stone"
            ), None),
            ("ally", "Bhairava-Shield-Bearer", (
                "a huge warrior carrying a round shield embossed with the leaping lion of the "
                "Hoysalas, heavy build, loyal and blunt, ready stance, dim temple hall, serpents in "
                "the shadows"
            ), None),
            ("villain", "Seekers-Of-The-Void-Looters", (
                "a band of mercenary treasure-hunters and seekers of the void approaching through "
                "rainforest, poacher-looter gear mixed with crude weapons, greedy hard faces, "
                "headlamps cutting the mist, a threat to a sacred place, ominous"
            ), {"modern_ok": True}),
            ("animal", "Kalinga-Sarpa-King-Cobra", (
                "a giant King Cobra Kalinga Sarpa up to twenty feet long, hood flared to the size of a "
                "war-shield, scale patterns like temple friezes etched on the hood, ancient wise eyes "
                "holding the wisdom of centuries, rising before a warrior who bows in namaskara, regal "
                "guardian serpent, dappled jungle light"
            ), {"variants": [("mass-guardians",
                "thousands of King Cobras coiled in the shadows of a stone temple hall filling niches "
                "draped over beams and circling a central pedestal, humming at low frequency in "
                "unison, overwhelming sacred guardianship")]}),
            ("weapon", "Hoysalastra-Broadsword", (
                "a heavy serrated broadsword Hoysalastra forged from dark magnetite iron of the Baba "
                "Budan hills, matte black saw-toothed blade, Hoysala lion pommel, weighty and brutal "
                "yet finely made, resting against a moss-covered hero-stone, dramatic light"
            ), None),
            ("relic", "Jade-Chakra-Forest-Machine", (
                "a relic disc-wheel Chakra made of pure translucent jade spinning slowly in a shaft "
                "of light from a hidden ceiling duct, kept in motion by the low-frequency hum of "
                "thousands of cobras, an ancient rainfall-control machine on a central pedestal, "
                "glowing green, sacred and mysterious"
            ), None),
            ("environment", "Malenad-Rainforest-Agumbe", (
                "the Malenad wilderness at dawn, a world of suffocating green, canopy so thick the sun "
                "is a myth, leeches on every leaf, moss-covered Hoysala hero-stones, the Yagachi "
                "riverbanks, mist clinging to the forest floor, primordial Karnataka rainforest, "
                "emerald god-rays"
            ), None),
            ("environment", "White-Sand-Buried-Entrance", (
                "a clearing where the trees pull back in reverence, an out-of-place mound of white "
                "sand in dark jungle soil, a giant King Cobra atop it, a buried soapstone arched "
                "temple doorway emerging as sand is cleared by hand, awe and discovery"
            ), None),
            ("palace", "Buried-Hoysala-Mahamandapa", (
                "the great hall Mahamandapa of a buried Hoysala temple, a forest of unique "
                "lathe-turned soapstone pillars carved so finely the stone jewellery seems to dangle, "
                "star-shaped base, Madanika dancer figures ready to step off the walls, Naga "
                "serpent-deity carvings winding around the base like a living foundation, air scented "
                "with cardamom and sandalwood, glowing torchlight, thousands of cobras in the shadows, "
                "breathtaking sacred interior"
            ), None),
            ("crowd", "Malenad-Forest-People", (
                "Malenad forest people, cardamom and areca-nut growers, honey-gatherers, "
                "Hoysala-descended forest rangers and trackers, a small disciplined scouting team in "
                "earth-toned jungle gear with wooden tools, reverent and hardy, misty green setting"
            ), None),
            ("scene", "Scene-The-Convergence", (
                "dozens of King Cobras moving in impossible single file through the mud following the "
                "Vastu alignment of the earth toward a white-sand mound, a giant cobra guarding a gap "
                "between buried stones, eerie reverence"
            ), None),
            ("scene", "Scene-We-Become-The-Sand", (
                "white sand pouring back to re-bury a magnificent carved temple and its spinning jade "
                "wheel, a scarred lone guardian standing until the last gap closes, King Cobras "
                "returning to the dark, the rains continuing over the green Malenad, quiet sacrifice"
            ), None),
        ],
    },
    {
        "id": "05-parashurama",
        "kingdom": "Parashurama-Kshetra",
        "state": "Kerala",
        "title": "The 109th Form",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Kerala mythic martial-arts fantasy, Kalaripayattu and "
            "elephant-temple aesthetic, backwater-and-Western-Ghats setting, meteorite-axe motif, "
            "rich temple-gold and deep-crimson palette, monsoon light through palm thatch, epic "
            "tragic-brotherhood mood, highly detailed, intricate, volumetric light, artstation, "
            "octane render, 8k"
        ),
        "color_theme": "temple gold and deep crimson, Theyyam ritual red-orange-black paint, kalari red earth, elephant caparison gold, golden blood, meteorite-iron grey accents, muted backwater-green background",
        "entities": [
            ("hero", "Parashurama-VII-Axe-Bearer", (
                "the oldest hero of the saga, a 58-year-old South Indian Kalari master, every year "
                "visible in his body, scars across a hard torso, the missing tip of his left ear, "
                "three ribs healed crooked, grey-streaked hair and beard, but he moves like water, "
                "holding a massive meteorite-iron axe reforged seven times heavy enough to crack a "
                "fortress wall yet swung one-handed, a half-body elephant tattoo on his torso with "
                "ceremonial-armor patterns, traditional Kerala kalari mundu and oiled skin, standing "
                "in a sunken red-earth kalari pit roofed with palm thatch at dawn, dignified lonely strength"
            ), {"negative": "young, unscarred, full ears, light weapon, ornate king robes, soft physique",
                "variants": [("full-tattoo-finale",
                    "the elephant tattoo spreading to cover his entire body ceremonial armor patterns "
                    "flowing like liquid metal, the elephant's trunk rising to cover his missing "
                    "ear-tip as if healing him, surrounded by elephants wading into a lake, sunset")]}),
            ("ally", "The-Guru-47th-Kalari-Master", (
                "a small quiet elderly Kalari guru who can break a coconut with two fingers and heal a "
                "bone with a touch, serene powerful presence, simple white mundu, teaching two young "
                "men the 108 forms in a torch-lit kalari, gentle mastery"
            ), None),
            ("ally", "Kuttanad-Backwater-Ghost", (
                "a lean stealthy Kerala backwater fighter the Backwater Ghost, poling a low snake-boat "
                "silently through narrow canals, water-camouflaged garb, sharp eyes, master of the "
                "labyrinthine backwaters, mist on the water"
            ), None),
            ("ally", "Theyyam-Mukha-Fighters", (
                "warriors in full Theyyam ritual paint and costume, towering headdresses, faces "
                "painted in sacred red orange and black, ornate tiered skirts, channeling deity-level "
                "strength, ecstatic divine fury, temple firelight"
            ), None),
            ("villain", "Maya-Sura-Thousand-Armed", (
                "a South Indian man whose body has become unstable from 25 years of the forbidden "
                "109th form, his flesh flickers and vibrates at the edges like a flame in wind, he "
                "generates a thousand physical afterimages so he appears as a blur of a thousand arms "
                "striking from every direction, muscles rearranging mid-strike, wounds sealing "
                "instantly, he bleeds golden blood, anguished monstrous grief beneath the power, "
                "Kerala kalari warrior dress, his weapon is his own body, temple shadows"
            ), {"negative": "single clear body, calm stillness, red blood, ornate armor, weapons in hand",
                "variants": [("brought-to-one-shape-finale",
                    "for the first time in 25 years his body holds a single shape no flicker no "
                    "thousand arms, a broken exhausted man with a shattered ankle lying on a snake-boat "
                    "deck weeping finally feeling his own skin, redemption")]}),
            ("animal", "Gajendra-Temple-Elephant", (
                "a majestic Kerala temple tusker elephant Gajendra draped in gold ceremonial caparison "
                "nettipattam for festival procession, wise grieving eyes, wrapping its trunk gently "
                "around an old warrior's shoulder, warm temple light"
            ), None),
            ("animal", "Great-Hornbill", (
                "a Great Hornbill huge black-and-white forest bird with a massive yellow casque-beak, "
                "ancient guardian of the Western Ghats, screaming a warning in the canopy, ominous omen"
            ), None),
            ("weapon", "Parashu-Meteorite-Axe", (
                "a massive battle-axe Parashu forged and reforged seven times from meteorite iron, a "
                "broad heavy crescent blade heavy enough to crack a fortress wall, worn leather-wound "
                "haft, a vibration-core in the head humming at a frequency that shatters afterimages, "
                "golden blood crusted on the edge, sacred heirloom weapon, dramatic light"
            ), None),
            ("relic", "Agastya-Conch", (
                "a sacred conch shell on a stone altar carved with symbols older than Malayalam behind "
                "a solid white curtain of waterfall in a Western Ghats cave, containing the final "
                "breath of the sage Agastya, it reveals the weakness of any opponent, glowing softly, "
                "holy artifact"
            ), None),
            ("environment", "Kerala-Land-Won-From-Sea", (
                "Kerala land won from the sea, a labyrinth of backwater rivers lakes and canals with "
                "houseboats, gold-caparisoned temple elephants in procession, the green wall of the "
                "Western Ghats guarding the east, coconut palms and red earth, monsoon light, lush "
                "mythic establishing matte painting"
            ), None),
            ("environment", "The-Kalari-Fighting-Pit", (
                "a traditional Kerala kalari, a fighting pit sunken into red earth roofed with palm "
                "thatch, dawn light slicing through the gaps in strips, a puttara shrine in the "
                "corner, oiled red floor, sacred martial training ground, atmospheric dust"
            ), None),
            ("palace", "Padmanabhaswamy-Temple-Vault-B", (
                "the richest temple in the world, towering Kerala gopuram and gold-roofed sanctum, the "
                "legendary sealed Vault B, crowded Poornathrayeesa festival at dusk with lamps and "
                "elephants, chaos as a phantom army materializes, epic scale"
            ), None),
            ("environment", "Vembanad-Snake-Boat-Race", (
                "Vembanad Lake during the Vallam Kali snake-boat race, hundred-man wooden boats with "
                "high curved prows racing through backwaters, fifty thousand cheering spectators on "
                "the shore, then chaos as phantom fighters materialize on the oars and boats capsize, "
                "a labyrinth of real and phantom enemies on the water"
            ), None),
            ("crowd", "Kerala-Temple-Backwater-Life", (
                "Kerala temple-and-backwater life, mahouts tending caparisoned elephants, snake-boat "
                "oarsmen, kalari students training at dawn, temple drummers and lamp-lighters, festival "
                "crowds in white-and-gold mundu and set-sari, fisherfolk poling canoes, monsoon-green "
                "communal life, warm everyday detail"
            ), None),
            ("scene", "Scene-A-Thousand-Arms", (
                "the most brutal duel, a lone axe-bearer cleaving through wave after wave of a man's "
                "thousand physical afterimages that shatter on the humming blade, real strikes sealing "
                "instantly, golden blood, a blur of arms from impossible directions, temple sanctum"
            ), None),
            ("scene", "Scene-The-Conch-And-The-Foot", (
                "an old warrior on his knees in the shallows of Vembanad blowing a sacred conch, the "
                "deep sound revealing that every one of a thousand afterimages radiates from a single "
                "unmoving right foot planted in the water, the anchor, the weakness"
            ), None),
            ("scene", "Scene-The-Brother-Saved", (
                "the axe striking the real ankle, a thousand afterimages collapsing like smoke into "
                "one broken man, the old warrior pulling his brother from the lake, elephants wading "
                "into the shallows in a grey circle, Great Hornbills perched glowing at sunset, the "
                "hero's elephant tattoo spreading to cover his whole body, grief and love"
            ), None),
        ],
    },
]


def build():
    os.makedirs(OUT_DIR, exist_ok=True)
    all_jobs = []
    manifest = {"stories": [], "field_schema": {
        "id": "stable unique job id",
        "story_id": "which story file this belongs to",
        "kingdom": "in-world kingdom name",
        "state": "real South Indian state",
        "category": "hero|villain|ally|operative|animal|weapon|relic|artifact|environment|palace|crowd|scene",
        "name": "entity name",
        "variant": "null for the base image, else the variant label",
        "prompt": "FULL ready-to-send positive prompt (style anchor already prepended)",
        "negative_prompt": "ready-to-send negative prompt",
        "color_theme": "palette guidance for the story",
        "width": "suggested width px",
        "height": "suggested height px",
        "seq": "global generation order index",
    }}

    seq = 0
    for story in STORIES:
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

            def make_job(variant_label, subject_text):
                nonlocal seq
                neg = DEFAULT_NEGATIVE
                if base_negative:
                    neg = neg + ", " + base_negative
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
                    "kingdom": story["kingdom"],
                    "state": story["state"],
                    "category": category,
                    "name": name,
                    "variant": variant_label,
                    "prompt": story["style"] + ", " + subject_text,
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
            "kingdom": story["kingdom"],
            "state": story["state"],
            "title": story["title"],
            "job_count": len(story_jobs),
            "file": f"{story['id']}.json",
        })

    # combined JSONL (one job per line) + manifest
    with open(os.path.join(OUT_DIR, "all_prompts.jsonl"), "w") as f:
        for job in all_jobs:
            f.write(json.dumps(job, ensure_ascii=False) + "\n")
    manifest["total_jobs"] = len(all_jobs)
    with open(os.path.join(OUT_DIR, "index.json"), "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print(f"Wrote {len(all_jobs)} jobs across {len(STORIES)} stories to {OUT_DIR}/")
    for s in manifest["stories"]:
        print(f"  {s['id']:18} {s['job_count']:3} jobs  ({s['state']})")


if __name__ == "__main__":
    build()
