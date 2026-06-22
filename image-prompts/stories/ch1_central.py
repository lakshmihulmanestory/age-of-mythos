"""Chapter 1 - Central region (Madhyadesa). 2 kingdoms.

Dedicated palettes:
  06 Dandakaranya  -> rust iron-red + Bastar bronze (Gond tribal forest)
  07 Hridaya-Sthana -> amber-honey + sal-green + cave-art ochre (heartland strategy)
"""

STORIES = [
    {
        "id": "06-dandakaranya",
        "chapter": 1,
        "region": "central",
        "kingdom": "Dandakaranya",
        "state": "Chhattisgarh",
        "title": "Blood and Iron",
        "modern_ok": True,  # industrial mining machinery vs ancient forest
        "style": (
            "cinematic concept art, Central Indian tribal-forest fantasy, Bastar Gond tribal "
            "aesthetic, dhokra bell-metal craft and wooden tribal totems, sal-forest village huts, "
            "tribal dress of coarse handwoven cloth brass jewellery and feathered headgear, "
            "iron-and-wilderness motif, rust iron-red and Bastar-bronze palette against deep forest "
            "shadow, brooding industrial-versus-nature mood, highly detailed, intricate, volumetric "
            "dust light, artstation, octane render, 8k"
        ),
        "color_theme": "blood-rust iron-red, Bastar bell-metal bronze, deep forest-shadow olive, ochre tribal earth, charcoal machine-black, iron-oxide river red-brown",
        "entities": [
            ("hero", "Dandakarni", (
                "a fierce Gond tribal woman warrior mid-20s of the Bastar forest, raised among wild "
                "buffalo, muscular and unstoppable, a wild-buffalo tattoo across her chest, coarse "
                "handwoven tribal wrap dyed in earth tones, brass tribal jewellery and a feathered "
                "ornament in her hair, gripping a massive iron war hammer, standing at the edge of "
                "the Dandakaranya forest with the raw calm of someone who belongs there, dust and "
                "dappled green light"
            ), {"negative": "delicate, urban dress, ornate royal robes, light weapon",
                "variants": [("full-buffalo-charge",
                    "mid wild-buffalo charge war hammer swinging crumpling a steel excavator arm, the "
                    "buffalo tattoo glowing across her whole torso, roots rising from the earth around "
                    "her feet, furious unstoppable")]}),
            ("villain", "Loh-Rakshasa", (
                "a massive menacing Indian man the Iron Demon, a hydraulic excavator-arm grafted to "
                "his right shoulder in place of an arm, industrial-age monster invading an ancient "
                "forest, scarred hard face, grimy mining warlord garb, iron ore bursting from the "
                "ground around his feet like teeth, smoke and rust, ominous"
            ), {"negative": "kind face, natural limbs, lush peaceful setting",
                "variants": [("titanium-rebuild",
                    "rebuilt with an even larger gleaming dark machine-arm, eyes lit with cold "
                    "industrial hunger, standing over a clear-cut scar in the forest, embers")]}),
            ("ally", "Defector-Brother", (
                "a conflicted young Gond tribal man, blood-brother of the heroine, torn between forest "
                "and the promise of mining prosperity, half tribal dress half mining-company gear, "
                "anguished divided expression, standing between green forest and grey machines"
            ), None),
            ("ally", "Vanvasi-Mata-Forest-Mother", (
                "an old wise Gond forest-mother, weathered face full of forest wisdom, white hair, "
                "simple tribal cloth and heavy brass ornaments, one hand on the bark of an ancient "
                "tree, surrounded by hill mynas, serene matriarchal authority, green light"
            ), None),
            ("animal", "Wild-Buffalo", (
                "a wild Indian buffalo of the Bastar forest, massive curved horns, powerful black "
                "body, head raised alert and defiant, sacred totem of the forest people, standing in "
                "tall grass, dust and dappled light"
            ), None),
            ("animal", "Hill-Myna", (
                "Chhattisgarh hill mynas, glossy black birds with bright yellow wattles and orange "
                "beaks, perched on a branch mid-call repeating a forest phrase, vivid against deep "
                "green foliage"
            ), None),
            ("weapon", "Iron-War-Hammer", (
                "a massive tribal iron war hammer, brutal forged head etched with Gond dhokra "
                "patterns, worn wooden haft bound in leather and brass wire, heavy enough to crumple "
                "a machine, resting against a forest hero-stone, dramatic rust-light"
            ), None),
            ("environment", "Dandakaranya-Punished-Forest", (
                "the Dandakaranya the ancient Punished Forest of Chhattisgarh, a vast green lung of "
                "sal trees so old they predate history, tribal totems and dhokra shrines among the "
                "trunks, drums echoing, mist and dappled emerald light, primordial and watchful, epic "
                "matte painting"
            ), None),
            ("environment", "Indravati-Red-River-Battlefield", (
                "the banks of the Indravati River running red with disturbed iron oxide, torn earth "
                "where roots and iron ore fight for the ground, a battlefield between forest and "
                "machine, smoke haze, brooding rust-and-green light"
            ), None),
            ("scene", "Scene-Hammer-Against-Iron-Arm", (
                "epic clash, a tribal woman's iron war hammer ringing against an excavator-armed iron "
                "demon, sparks flying, the forest leaning in to listen, trees bending toward the "
                "sound, dust and ember"
            ), None),
            ("scene", "Scene-Brother-Against-Sister", (
                "two tribal siblings facing each other across torn forest ground unable to strike the "
                "final blow, grief and love and betrayal, machines burning behind one and forest "
                "rising behind the other, tragic standoff"
            ), None),
        ],
    },
    {
        "id": "07-hridaya-sthana",
        "chapter": 1,
        "region": "central",
        "kingdom": "Hridaya-Sthana",
        "state": "Madhya Pradesh",
        "title": "The Twelve-Move War",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Central Indian heartland fantasy, Bhimbetka rock-shelter and "
            "Khajuraho-adjacent sandstone temple architecture, sal-and-teak swamp forest of "
            "Naimisharanya, dress of warm handspun cotton angavastra and strategist's robes, "
            "chess-and-strategy motif, amber-honey and cave-art ochre palette with deep sal-green, "
            "contemplative mythic-strategy mood, highly detailed, intricate, volumetric forest light, "
            "artstation, octane render, 8k"
        ),
        "color_theme": "amber-honey gold, cave-painting ochre red and chalk-white, deep sal-forest green, barasingha tawny, serpent iridescent bronze-green, twilight indigo accents",
        "entities": [
            ("hero", "Dvadashashringa", (
                "a calm formidable Indian strategist-warrior, the twelve-antlered, lean and "
                "watchful, a barasingha twelve-antlered swamp-deer tattoo, warm handspun cotton "
                "angavastra draped over one shoulder, holding a tall twelve-pronged staff each prong "
                "carved with a strategic principle, standing in a misty sal-forest at the swamp's "
                "center, the patient gaze of a chess master, dappled golden light"
            ), {"negative": "brutish, heavy armor, urban setting, simple stick",
                "variants": [("twelve-moves-ahead",
                    "rotating his twelve-pronged staff so the relevant prong faces forward glowing "
                    "faintly, ghostly chess-move lines of light radiating ahead of him across the "
                    "forest floor, intense focus")]}),
            ("villain", "Naimisha-Naag", (
                "an enormous shimmering mythic serpent with a strangely human face and human voice, "
                "iridescent bronze-green scales, coiled at the edge of the Naimisharanya forest, eyes "
                "full of flawless seductive logic, the air around it heavy with whispered doubt, "
                "beautiful and menacing, twilight forest"
            ), {"negative": "small snake, cute, bright cheerful lighting, heroic glow"}),
            ("ally", "The-Rishi-Of-Bhimbetka", (
                "an ancient Indian sage who tends the Bhimbetka caves, frail and serene, long white "
                "beard, simple ochre robe, pointing at a 30,000-year-old rock painting of a deer "
                "facing a serpent, firelight on cave walls, keeper of an unspoken answer"
            ), None),
            ("animal", "Barasingha-Twelve-Antler-Deer", (
                "a barasingha swamp deer the king of the swamp, magnificent tawny coat, huge "
                "twelve-tined antlers, standing regally in shallow swamp water at the center of the "
                "forest, sacred totem, golden mist light"
            ), None),
            ("animal", "Asian-Paradise-Flycatcher", (
                "an Asian paradise flycatcher, a small bird of extraordinary grace with impossibly "
                "long flowing white tail-streamers and a glossy black crested head, mid-flight "
                "trailing ribbons of white, pure and beautiful against green forest"
            ), None),
            ("weapon", "Twelve-Pronged-Staff", (
                "a tall twelve-pronged strategist's staff, each of twelve carved prongs representing a "
                "principle of war, dark polished wood inlaid with bone and brass, a calculating "
                "machine disguised as a weapon, leaning against sandstone, dramatic amber light"
            ), None),
            ("environment", "Naimisharanya-Forest", (
                "the Naimisharanya forest where the Mahabharata was first spoken, ancient sal and "
                "teak around a vast central swamp, mist drifting between trunks, weathered sandstone "
                "shrines, sacred storytelling stillness, golden-green twilight, epic matte painting"
            ), None),
            ("environment", "Bhimbetka-Rock-Shelters", (
                "the Bhimbetka rock shelters, great sandstone overhangs covered in 30,000-year-old "
                "ochre-red and chalk-white cave paintings of deer hunters and serpents, a single "
                "painting of a twelve-antlered deer facing a serpent glowing in firelight, ancient "
                "and sacred"
            ), None),
            ("scene", "Scene-The-War-Of-Words", (
                "a war of ideas, a strategist with a twelve-pronged staff facing an enormous "
                "human-voiced serpent in a misty forest, ghostly chess moves and counter-moves drawn "
                "in light in the air between them, no blades, only minds, tense"
            ), None),
            ("scene", "Scene-The-Note-That-Shatters-Doubt", (
                "a moment of grace, a long-tailed paradise flycatcher landing on a strategist's "
                "shoulder and singing a pure note that shatters the serpent's whispered doubt like "
                "glass, light returning to the forest, hope"
            ), None),
        ],
    },
]
