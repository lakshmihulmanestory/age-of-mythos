"""Chapter 3 - Rise of Beasts (saga-wide arc). INVENTED packs grounded in the
chapter premise: the sacred totem-animals of the kingdoms swell to titanic
scale and rise; heroes must bond with or face their beasts; unity-trials; a
sanctuary is made. Beast-gold is the chapter's signature colour.

Pan-Bharatavarsha packs, each with its own dedicated palette.
"""

STORIES = [
    {
        "id": "35-titan-beasts-awaken",
        "chapter": 3,
        "region": "saga-wide",
        "kingdom": "The-Titan-Beasts",
        "state": "Bharatavarsha (pan-India)",
        "title": "The Beasts Rise",
        "modern_ok": False,
        "style": (
            "cinematic concept art, pan-Indian primal-beast fantasy, sacred totem-animals swollen to "
            "titanic scale rising over Indian landscapes and temples, beast-awakening motif, "
            "regional Indian dress dwarfed by giant beasts, beast-gold palette over primal earth-"
            "brown and dust with a magenta Maw-vein, awe-and-terror mood, highly detailed, intricate, "
            "volumetric dawn dust, artstation, octane render, 8k"
        ),
        "color_theme": "beast-gold and amber, primal earth-brown, dust-ochre, bone-ivory, magenta Maw-vein accent, dawn red-gold",
        "entities": [
            ("animal", "Titan-Elephant", (
                "a titanic Indian elephant risen to the size of a hill, ancient wrinkled grey hide "
                "veined faintly with gold, vast tusks, rising over a temple-town at dawn, awe-"
                "inspiring and terrible, beast-gold dust light"
            ), None),
            ("animal", "Titan-Tiger", (
                "a colossal Indian tiger the size of a fortress, burning orange-and-black coat with "
                "gold-glowing eyes, prowling across a wide Indian plain dwarfing the trees, primal "
                "majesty, beast-gold light"
            ), None),
            ("animal", "Titan-Serpent", (
                "an enormous sacred serpent risen miles long, dark scales sheened with gold, hood "
                "flared over a river valley, ancient eyes, encircling a temple-hill, primeval and "
                "vast, eerie gold light"
            ), None),
            ("hero", "Beast-Caller", (
                "an Indian totem-warrior standing tiny and unafraid before a titanic rising beast, "
                "full-body totem tattoo blazing gold, regional warrior dress, one hand raised to "
                "commune with the giant, awe and resolve, beast-gold dust light"
            ), None),
            ("villain", "Maw-Maddened-Beast", (
                "a sacred beast corrupted by the Void Maw, titanic and wrong, gold scales or fur "
                "shot through with magenta rift-light, eyes empty and blazing, rampaging over ruins, "
                "tragic monstrous fury, magenta-and-gold glow"
            ), {"negative": "calm gentle, small, natural colour only, heroic glow"}),
            ("environment", "Beasts-Over-Bharatavarsha", (
                "a panorama of titanic sacred beasts rising across India at dawn, an elephant over "
                "mountains a tiger over plains a serpent over a river, temple-towns tiny below, "
                "beast-gold sky veined with magenta, epic matte painting"
            ), None),
            ("environment", "Trampled-Temple-Town", (
                "an Indian temple-town in the path of risen titan-beasts, toppled gopuram spires and "
                "scattered crowds, vast footprints in the dust, beast-gold haze, awe and ruin"
            ), None),
            ("scene", "Scene-The-Awakening-Roar", (
                "the moment titan-beasts rise across the land at dawn with a world-shaking roar, "
                "people falling back, dust and beast-gold light, magenta Maw-vein in the sky, primal "
                "terror and wonder"
            ), None),
            ("scene", "Scene-The-Caller-And-The-Titan", (
                "a tiny totem-warrior standing firm before a titanic rising beast with a glowing "
                "tattoo and a raised hand, the giant pausing to regard her, dust and beast-gold "
                "light, charged communion"
            ), None),
        ],
    },
    {
        "id": "36-the-bonded",
        "chapter": 3,
        "region": "saga-wide",
        "kingdom": "The-Bonded",
        "state": "Bharatavarsha (pan-India)",
        "title": "Rider and Totem",
        "modern_ok": False,
        "style": (
            "cinematic concept art, pan-Indian beast-bond fantasy, heroes uniting with their giant "
            "totem-animals across Indian landscapes, bond-and-ride motif, regional Indian warrior "
            "dress matched to each totem, warm bond-amber palette with totem-animal colours over "
            "dawn-gold, heroic-unity mood, highly detailed, intricate, volumetric dawn light, "
            "artstation, octane render, 8k"
        ),
        "color_theme": "bond-amber and warm gold, dawn rose-gold, totem-animal accent colours, earth-brown, sky-blue, glowing tattoo-gold",
        "entities": [
            ("hero", "The-Rhino-Rider", (
                "an Assamese guardian-warrior mounted on a giant one-horned rhinoceros, golden muga-"
                "silk dress, rhino tattoo glowing, charging through Kaziranga grass at dawn, fierce "
                "bonded unity, warm gold light"
            ), None),
            ("hero", "The-Lion-Rider", (
                "a Gujarati lion-warrior astride a giant Asiatic lion, mirror-worked red-and-gold "
                "dress, full-body lion tattoo blazing, roaring across a dawn plain, heroic bond, "
                "amber light"
            ), None),
            ("hero", "The-Tiger-Rider", (
                "a Sundarbans warrior astride a giant tiger gliding through mangrove shallows, mud-"
                "toned dress, fishing-cat-and-tiger totem glow, watchful bonded grace, dawn-gold mist"
            ), None),
            ("ally", "Bonded-Host", (
                "a host of Indian totem-warriors of many regions each riding or walking beside their "
                "giant bonded beast elephant deer buffalo serpent hawk, diverse regional dress and "
                "glowing tattoos, an army of bonds at dawn, warm gold light"
            ), None),
            ("animal", "Bonded-Hawk-Giant", (
                "a giant bonded hawk wide as a sail carrying a rider aloft over Indian mountains at "
                "dawn, barred gold-brown plumage, fierce intelligent eye, soaring bond, rose-gold sky"
            ), None),
            ("environment", "Dawn-Muster-Of-Bonds", (
                "a vast dawn muster where totem-warriors and their giant bonded beasts gather across "
                "an Indian plain before temple-hills, banners and glowing tattoos, warm gold light, "
                "heroic scale, epic matte painting"
            ), None),
            ("scene", "Scene-The-First-Bond", (
                "a hero pressing a forehead to a giant beast's brow as a totem tattoo flares gold and "
                "spreads, the bond completing, dawn-gold light and dust, intimate and epic"
            ), None),
            ("scene", "Scene-The-Bonded-Charge", (
                "a charge of bonded warriors on giant beasts across a dawn plain toward a magenta "
                "Maw-corruption on the horizon, dust and gold and glowing tattoos, heroic momentum"
            ), None),
        ],
    },
    {
        "id": "37-the-wild-surge",
        "chapter": 3,
        "region": "saga-wide",
        "kingdom": "The-Wild-Surge",
        "state": "Bharatavarsha (pan-India)",
        "title": "The Stampede",
        "modern_ok": False,
        "style": (
            "cinematic concept art, pan-Indian wild-stampede fantasy, untamed giant beasts surging "
            "across Indian plains forests and rivers, stampede motif, regional Indian dress fleeing "
            "or steering the surge, dust-ochre stampede palette with storm-grey and trampled-green, "
            "chaotic-momentum mood, highly detailed, intricate, volumetric dust storm, artstation, "
            "octane render, 8k"
        ),
        "color_theme": "stampede dust-ochre and tan, storm-grey, trampled-green, beast-brown and gold flecks, smoke-haze, dried-grass yellow",
        "entities": [
            ("animal", "Stampede-Herd", (
                "a thundering stampede of giant Indian beasts buffalo deer elephants surging together "
                "across a dry plain throwing up a wall of ochre dust, raw unstoppable momentum, "
                "storm-grey sky, primal"
            ), None),
            ("hero", "The-Surge-Steerer", (
                "an Indian totem-warrior racing ahead of a giant stampede trying to turn it from a "
                "village, regional warrior dress streaming, tattoo glowing, fearless mid-stride in "
                "the dust, dramatic ochre light"
            ), None),
            ("villain", "Maw-Goaded-Bull", (
                "a giant sacred bull goaded to blind rage by the Void Maw leading a stampede, hide "
                "veined with magenta, eyes empty, horns lowered, ochre dust and magenta glow, tragic "
                "fury"
            ), {"negative": "calm, small, natural colour only, heroic glow"}),
            ("ally", "Fleeing-Villagers", (
                "Indian villagers of mixed regions fleeing a stampede toward high ground, simple "
                "regional dress, carrying children and elders, fear and solidarity, ochre dust haze"
            ), None),
            ("animal", "Warning-Cranes", (
                "Indian cranes and storks bursting into the air ahead of a stampede as a living "
                "warning, broad wings against storm-grey sky, omen of the surge"
            ), None),
            ("environment", "Dust-Wall-Plain", (
                "a vast Indian plain consumed by a towering wall of stampede dust under a storm-grey "
                "sky, trampled crops and scattered trees, distant temple-spires, chaotic scale, epic "
                "matte painting"
            ), None),
            ("scene", "Scene-Turning-The-Surge", (
                "a lone steerer on foot or mount racing across the front of a giant stampede waving a "
                "glowing totem to turn it from a village, dust and storm light, desperate courage"
            ), None),
            ("scene", "Scene-The-Surge-Splits", (
                "a giant stampede splitting around a sacred grove and a sheltering crowd as totem-"
                "warriors hold the line, ochre dust parting, trampled-green and gold, narrow "
                "deliverance"
            ), None),
        ],
    },
    {
        "id": "38-the-sanctuary",
        "chapter": 3,
        "region": "saga-wide",
        "kingdom": "The-Sanctuary",
        "state": "Bharatavarsha (pan-India)",
        "title": "The Sanctuary",
        "modern_ok": False,
        "style": (
            "cinematic concept art, pan-Indian sanctuary fantasy, a great protected sacred grove and "
            "walled refuge where beasts and people shelter together, sanctuary motif, regional Indian "
            "dress tending calmed giant beasts, sanctuary green-gold palette with hearth-warm amber "
            "and dawn-blue, refuge-and-healing mood, highly detailed, intricate, volumetric god-rays, "
            "artstation, octane render, 8k"
        ),
        "color_theme": "sanctuary leaf-green and gold, hearth-amber, dawn sky-blue, soft ivory-cream, healing rose-gold, calm water-teal accent",
        "entities": [
            ("hero", "The-Sanctuary-Keeper", (
                "a serene Indian warrior-keeper of the sanctuary, calm healing presence, totem tattoo "
                "softly glowing, simple regional dress, laying a hand on a resting giant beast within "
                "a sacred grove, refuge and peace, green-gold light"
            ), None),
            ("ally", "Healers-And-Mahouts", (
                "Indian healers mahouts and herders of many regions tending calmed giant beasts in a "
                "sanctuary, regional dress, binding wounds and offering water and grain, gentle "
                "communal care, warm light"
            ), None),
            ("animal", "Resting-Titan-Beasts", (
                "giant sacred beasts at rest within a green sanctuary, an elephant a deer a serpent a "
                "tiger lying calm among great trees, gold veining faded to soft glow, peace after "
                "fury, dappled god-rays"
            ), None),
            ("animal", "Sanctuary-Birds", (
                "flocks of bright Indian birds parakeets rollers and doves settling peacefully over a "
                "sanctuary grove, vivid colours against green-gold light, return of calm"
            ), None),
            ("relic", "Sanctuary-Boundary-Stone", (
                "a carved sacred boundary-stone marking the sanctuary, Indian motifs of every region's "
                "totem ringed together, moss and gold light, a vow of refuge, soft glow"
            ), None),
            ("environment", "The-Great-Sanctuary-Grove", (
                "a vast protected sacred grove and walled refuge where giant beasts and people shelter "
                "together, immense ancient trees, water-pools, sheltered crowds and calmed titans, "
                "green-gold god-rays, serene and epic, epic matte painting"
            ), None),
            ("scene", "Scene-The-Beasts-Lie-Down", (
                "titan-beasts lowering themselves to rest within a sanctuary grove as people approach "
                "without fear, gold veining fading to calm, green-gold light, hard-won peace"
            ), None),
            ("scene", "Scene-Shelter-Against-The-Maw", (
                "a sanctuary grove glowing warm and green under a magenta-cracked sky, its boundary "
                "holding back the Maw's corruption while beasts and people shelter within, refuge and "
                "hope"
            ), None),
        ],
    },
]
