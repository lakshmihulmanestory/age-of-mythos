"""Chapter 1 - West region (Paschimapatha). 4 kingdoms.

Dedicated palettes:
  27 Maru-Maya        -> golden desert-sand + Jaisalmer sandstone + Rajput indigo (Rajasthan)
  28 Samudra-Dvipa    -> spectral ghost-green + deep sea-navy + Goan terracotta-white (Goa)
  29 Simha-Dwara      -> white-salt + flamingo-pink + Gir lion-amber (Gujarat)
  30 Swarajya-Sahyadri-> bhagwa saffron + Sahyadri monsoon-green + basalt fort-grey (Maharashtra)
"""

STORIES = [
    {
        "id": "27-maru-maya",
        "chapter": 1,
        "region": "west",
        "kingdom": "Maru-Maya",
        "state": "Rajasthan",
        "title": "The War Against Sand Itself",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Rajasthan desert-illusion fantasy, Jaisalmer golden-sandstone "
            "forts and havelis and deep stepwell baolis, sand-and-mirage motif, Rajput dress of "
            "turban ghagra bandhani and mirror-work, golden desert-sand palette with Jaisalmer "
            "sandstone-amber and Rajput indigo accents, mirage-warfare mood, highly detailed, "
            "intricate, volumetric dust light, artstation, octane render, 8k"
        ),
        "color_theme": "golden desert-sand and Jaisalmer sandstone-amber, Rajput indigo-blue, bandhani pink-red, fused-glass shard-blue, mirage-shimmer white, dry bone-beige",
        "entities": [
            ("hero", "Mrigatrishna", (
                "a clever resourceful Rajasthani woman spy-warrior who knows truth from mirage, sharp "
                "desert-survivor eyes, a chinkara gazelle tattoo flickering between solid and "
                "dissolving, Rajput-style attire with bandhani veil indigo accents and mirror-work, "
                "carrying mirror-daggers and smoke-bombs, standing among golden dunes before "
                "Jaisalmer's fort, watchful adaptable, warm sand light"
            ), {"negative": "naive, heavy plate armor, urban dress, lush green setting",
                "variants": [("awakening-the-water-memory",
                    "kneeling at the bottom of an ancient deep stepwell baoli pressing her hand to the "
                    "carved stone awakening the memory of water, faint blue glow rising through the "
                    "dry well, hope against the desert")]}),
            ("villain", "Maru-Rakshasa", (
                "a towering twelve-foot demon made entirely of flowing sand, two smooth riverbed "
                "stones for eyes, sand walking around his feet like an obedient ocean, rising from a "
                "dune like a man standing from a nap, drought and death following him toward a golden "
                "city, ominous heat-haze"
            ), {"negative": "flesh body, kind, lush green, water, heroic glow",
                "variants": [("glass-dune-storm",
                    "his sandstorm meeting fire-arrows and fusing into mid-air glass, a rain of "
                    "razor-sharp glass shards cutting through a night battlefield, deadly shimmer")]}),
            ("ally", "Meera-Bai-Ghost", (
                "the singing ghost of Meera Bai in a ruined haveli courtyard, a luminous devotional "
                "figure in flowing veil singing of Krishna with a coded message beneath the melody, "
                "soft moonlit translucence, sacred and haunting"
            ), {"negative": "solid opaque body, daylight, weapons"}),
            ("animal", "Chinkara-Gazelle", (
                "a chinkara desert gazelle, delicate fawn coat able to survive on dew alone, large "
                "dark eyes, standing alert on a golden dune at dawn, the measure of the desert's "
                "mercy, sacred totem"
            ), None),
            ("animal", "Great-Indian-Bustard", (
                "a Great Indian Bustard, a tall stately ground-bird with a black crown and sandy "
                "plumage, the last male of its region flying low away from a battlefield, an omen, "
                "vivid against pale dunes"
            ), None),
            ("relic", "Seven-Stepwells-Baoli", (
                "an ancient deep Rajasthani stepwell baoli, vertiginous symmetrical flights of carved "
                "sandstone steps descending into darkness toward an underground river, holding the "
                "memory of water, awe-inspiring geometric architecture, shaft of light"
            ), None),
            ("environment", "Jaisalmer-Golden-City", (
                "the golden city of Jaisalmer rising from the Thar desert, honey-coloured sandstone "
                "fort and carved havelis glowing at sunset, camel caravans, endless dunes beyond, "
                "shimmering heat, epic matte painting"
            ), None),
            ("environment", "Glass-Dunes-Battlefield", (
                "the Glass Dunes battlefield at night, a sandstorm fused into hanging shards of glass "
                "glittering in moonlight over dunes, razor fragments and fallen spies, eerie deadly "
                "beauty, cold shimmer"
            ), None),
            ("scene", "Scene-Battle-Of-The-Glass-Dunes", (
                "a desert battle where a sand-demon's storm meets a garrison's fire-arrows and fuses "
                "into a rain of glass shards cutting friend and foe, a spy-warrior shielding her eyes, "
                "moonlit chaos"
            ), None),
            ("scene", "Scene-The-Memory-Of-Water", (
                "villagers and a spy-warrior awakening the memory of water in seven ancient stepwells, "
                "faint blue light rising from dry stone, the desert beginning to remember being green, "
                "hopeful dawn"
            ), None),
        ],
    },
    {
        "id": "28-samudra-dvipa",
        "chapter": 1,
        "region": "west",
        "kingdom": "Samudra-Dvipa",
        "state": "Goa",
        "title": "The Fleet of the Drowned",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Goa between-worlds coastal fantasy, Portuguese-colonial "
            "whitewashed churches beside Hindu temples and fishing harbours, ghost-fleet motif, Goan "
            "coastal dress, spectral sickly-green ghost-glow palette over deep sea-navy with "
            "terracotta-and-white Goan warmth and bell-bronze, haunted-harbour mood, highly detailed, "
            "intricate, volumetric sea-mist, artstation, octane render, 8k"
        ),
        "color_theme": "spectral sickly-green ghost-glow, deep sea-navy and black water, Goan terracotta-red and whitewash, temple-and-church bell-bronze, sea-foam white, lantern-amber",
        "entities": [
            ("hero", "Sagaradeva", (
                "a balanced sea-and-land Goan warrior born on water, weathered steady eyes, a gaur "
                "bison tattoo reaching toward his shoulder, Goan coastal dress with a sash, wielding "
                "a cutlass named Samudra and a long chain named Lahara, standing on a fishing boat at "
                "the mouth of a moonlit river, the constant adjustment of balance, sea-mist light"
            ), {"negative": "land-locked, heavy plate armor, urban dress, dry desert",
                "variants": [("under-the-water-finale",
                    "diving beneath the harbour toward a sunken temple where ghost-ships are built "
                    "from drowned men's bones, his gaur tattoo blazing, deep navy water and spectral "
                    "green glow, resolve")]}),
            ("villain", "Samudra-Daitya", (
                "a sea-demon laughing at the prow of a ghost-flagship, a man who found a loophole in "
                "death, draped in barnacled drowned-warlord garb, commanding fifty ghost-vessels "
                "crewed by drowned warriors whose half-formed tattoos glow sickly green, dark water "
                "and lantern-light, menacing glee"
            ), {"negative": "alive warm, bright cheerful, ornate clean armor, heroic glow"}),
            ("ally", "Padre-Velha-Bell-Ringer", (
                "an old Goan priest-keeper of a sea-cave chapel, weathered kindly face, simple "
                "cassock, ringing a great bell forged from both temple bronze and church brass whose "
                "two-faith resonance dissolves the dead, lantern and sea-cave light, devout"
            ), None),
            ("animal", "Gaur-Goa", (
                "a gaur Indian bison of the Goan hills, massive black body with white stockings and "
                "curved horns, head lowered provoked and unstoppable, standing at a forest-coast edge, "
                "sacred totem of restraint and force"
            ), None),
            ("animal", "Yellow-Bulbul", (
                "ruby-throated yellow bulbuls singing at night confused by ghost-lantern light into "
                "thinking dawn has come, bright yellow plumage against dark sea-mist, omen-birds of "
                "ghost-light"
            ), None),
            ("weapon", "Cutlass-And-Chain", (
                "a curved sea-cutlass named Samudra and a long heavy iron chain named Lahara, the two "
                "pulls of sea and land, salt-pitted and battle-worn, displayed crossed on dark cloth, "
                "dramatic lantern light"
            ), None),
            ("environment", "Goan-Harbour-Between-Worlds", (
                "a Goan harbour between worlds, whitewashed Portuguese churches and Hindu temple "
                "spires above a fishing port, palm-fringed coast, fishing boats and a sea-cave chapel, "
                "warm terracotta and white by day, epic matte painting"
            ), None),
            ("environment", "Sunken-Temple-Shipyard", (
                "an underwater sunken temple on the seabed where a sea-demon builds ghost-ships from "
                "drowned men's bones, half-formed spectral hulls glowing sickly green in deep navy "
                "water, shafts of dim light, eerie and sacred-corrupt"
            ), None),
            ("scene", "Scene-The-Ghost-Fleet-Arrives", (
                "fifty ghost-vessels with sickly-green-glowing drowned crews sailing into a moonlit "
                "river mouth, lanterns confusing night birds, a lone warrior on a fishing boat facing "
                "them, dread and spectral light"
            ), None),
            ("scene", "Scene-The-Bell-Of-Two-Faiths", (
                "an old priest ringing a temple-and-church bronze bell as ghost sailors flinch and "
                "dissolve into sea-foam, a chain-wielding warrior capsizing the ghost-flagship, "
                "spectral green dissolving in navy water"
            ), None),
        ],
    },
    {
        "id": "29-simha-dwara",
        "chapter": 1,
        "region": "west",
        "kingdom": "Simha-Dwara",
        "state": "Gujarat",
        "title": "Two Lions, One Throne",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Gujarat lion-and-salt fantasy, Gir forest and the white salt "
            "desert of the Rann of Kutch, Lothal port and Dwarka floating-temple architecture, "
            "lion-and-merchant motif, Gujarati dress of mirror-work chaniya-choli and kediyu, "
            "white-salt and flamingo-pink palette with Gir lion-amber, divided-pride mood, highly "
            "detailed, intricate, volumetric moonlight, artstation, octane render, 8k"
        ),
        "color_theme": "white salt-desert and moonlit silver, flamingo-pink, Gir-lion tawny amber and mane-gold, Gujarati mirror-work red and gold, salt-crust grey, Rann turquoise-pool accent",
        "entities": [
            ("hero", "Simhavikrama", (
                "a mighty roaring Gujarati lion-warrior, broad and powerful, a full-body Asiatic-lion "
                "tattoo covering him, mirror-worked warrior dress in red and gold, wielding the sword "
                "Simhagarjana forged from ancient trading-ship iron, standing at the edge of the Gir "
                "forest with lions around him mid-roar, ambitious strength, warm amber light"
            ), {"negative": "meek, slight build, urban dress, plain skin",
                "variants": [("lions-into-the-salt",
                    "leading a roaring pride of Gir lions across the moonlit white salt desert "
                    "pursuing silent shadows, salt glowing like snow, furious and lost")]}),
            ("villain", "Mrugendra", (
                "a patient calculating Gujarati warrior, the overlooked firstborn denied the lion "
                "tattoo, hard listening eyes, white salt-crusted stealth armor, commanding a Silent "
                "Army that moves only at night across the Rann, no roar only cold planning, moonlit "
                "salt, menacing patience"
            ), {"negative": "loud, brightly coloured, lush green setting, heroic glow",
                "variants": [("salt-army-at-night",
                    "a silent army in white salt-crusted armor moving across glowing moonlit salt "
                    "flats cutting ship-anchors without a sound, eerie and disciplined")]}),
            ("ally", "Dwarka-Nath-Floating-Temple-Sage", (
                "a serene sage of a floating Dwarka temple on the sea, flowing robes, watching the "
                "brothers' feud with sorrow, speaking of a drowned city's lesson, soft sea-light, "
                "wise warning presence"
            ), None),
            ("animal", "Asiatic-Lion-Gir", (
                "an Asiatic lion of the Gir forest, the last of its kind, magnificent tawny coat and "
                "fuller mane, regal amber eyes mid-roar, standing among dry teak and grass, sacred "
                "endangered totem, warm light"
            ), None),
            ("animal", "Greater-Flamingos-Rann", (
                "greater flamingos in the Rann of Kutch, brilliant pink-and-white birds wading in "
                "shallow turquoise salt-pools, some carrying tiny white scrolls in their bills, vivid "
                "pink against white salt"
            ), None),
            ("weapon", "Simhagarjana-Sword", (
                "the sword Simhagarjana Lion-Roar, forged from the iron of ancient merchant trading "
                "ships, a broad polished blade with a roaring-lion pommel and gold filigree, "
                "feather-light in a master's hand, displayed on red cloth, dramatic amber light"
            ), None),
            ("environment", "Rann-Of-Kutch-Salt-Desert", (
                "the Rann of Kutch, an endless flat white salt desert glowing like moonlit snow under "
                "a vast night sky, turquoise salt-pools and distant pink flamingos, a place where "
                "nothing hides yet an army does, surreal and stark, epic matte painting"
            ), None),
            ("environment", "Port-Of-Lothal", (
                "the ancient dockyard port of Lothal in Gujarat, brick wharves and trading ships at "
                "anchor, grain cargo and merchant bustle by day, the heritage of a merchant kingdom, "
                "warm coastal light"
            ), None),
            ("scene", "Scene-The-Full-Body-Roar", (
                "the moment a warrior's full-body lion tattoo completes and the Gir lions roar for a "
                "full day, flamingos in the Rann turning their heads south, golden dust and amber "
                "light, raw power"
            ), None),
            ("scene", "Scene-Battle-On-The-Salt", (
                "a roaring pride of lions and men charging across glowing white moonlit salt pursuing "
                "a silent salt-armored army that makes no sound, two brothers' war, eerie and "
                "tragic"
            ), None),
        ],
    },
    {
        "id": "30-swarajya-sahyadri",
        "chapter": 1,
        "region": "west",
        "kingdom": "Swarajya-Sahyadri",
        "state": "Maharashtra",
        "title": "The War of Brother and Sister",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Maharashtra hill-fort fantasy, Sahyadri mountain forts like "
            "Raigad and the sea-fort Sindhudurg, basalt ramparts and secret passages, climb-and-"
            "betrayal motif, Maratha dress of pheta turban dhoti and nauvari sari with bhagwa saffron "
            "flags, deep saffron palette with Sahyadri monsoon-green and black-basalt fort-grey, "
            "vertical-warfare mood, highly detailed, intricate, volumetric monsoon mist, artstation, "
            "octane render, 8k"
        ),
        "color_theme": "bhagwa deep saffron-orange, Sahyadri monsoon-green, black-basalt fort-grey, Malabar-giant-squirrel rust-maroon, monsoon storm-slate, sea-fort foam-white accent",
        "entities": [
            ("hero", "Shivagati", (
                "an agile fearless Maharashtrian woman fort-climber warrior, lithe and sure, a "
                "Malabar giant-squirrel tattoo with the tail wrapped around her neck, Maratha "
                "nauvari-style warrior dress with a saffron sash, climbing hooks at her belt, scaling "
                "a wet black-basalt fort wall in monsoon rain to plant a bhagwa flag, exhilarated "
                "resolve, storm light"
            ), {"negative": "clumsy, heavy plate armor, urban dress, dry sunny desert",
                "variants": [("flag-on-the-summit",
                    "standing on a fort summit in monsoon rain planting a saffron bhagwa flag, her "
                    "giant-squirrel tattoo glowing warm, mist and green peaks below, triumphant")]}),
            ("villain", "Ranveer-The-Betrayer", (
                "a bitter skilled Maharashtrian warrior, the elder brother passed over by the tattoo, "
                "hard resentful eyes, dark climbing garb with barbed hooks, knowing every secret fort "
                "passage, sitting on a high sea-fort wall over the Arabian Sea selling fort-secrets, "
                "menacing betrayal, sea wind"
            ), {"negative": "loyal, kind, ornate royal robes, heroic glow",
                "variants": [("four-hour-fort-duel",
                    "fighting his sister vertically across wet fort walls hooks sparking on basalt, "
                    "perfectly matched, monsoon rain and sea spray, tragic clash")]}),
            ("ally", "Samarth-Ramdas-Cave-Echo", (
                "the cave-echo presence of the sage Samarth Ramdas, a faint glowing ascetic figure in "
                "a mountain cave whose riddling echoes warn of betrayals, soft spectral light, cryptic "
                "guidance"
            ), {"negative": "solid opaque body, daylight"}),
            ("animal", "Malabar-Giant-Squirrel", (
                "a Malabar giant squirrel, a large vivid rust-maroon-and-cream tree squirrel with a "
                "huge bushy tail, leaping between Sahyadri forest branches, agile and bright, sacred "
                "totem that chooses its bearer"
            ), None),
            ("animal", "Green-Imperial-Pigeon-Sahyadri", (
                "green imperial pigeons carrying tiny scrolls in their beaks through Sahyadri mist, "
                "iridescent grey-green plumage, messengers of cave-echo warnings, vivid against "
                "monsoon cloud"
            ), None),
            ("weapon", "Climbing-Hooks", (
                "a set of Maratha fort-climbing hooks and grapples, iron claws on knotted rope, "
                "barbed and battle-worn, the tools of vertical warfare, displayed against basalt "
                "stone, dramatic wet rim light"
            ), None),
            ("environment", "Sahyadri-Hill-Forts", (
                "the Sahyadri mountains studded with three hundred and fifty stone hill-forts, black-"
                "basalt ramparts on monsoon-green peaks wreathed in cloud, some swallowed by jungle, "
                "saffron flags whipping, epic matte painting"
            ), None),
            ("environment", "Sindhudurg-Sea-Fort", (
                "Sindhudurg the sea-fort that has never been taken, massive basalt walls rising "
                "straight from the Arabian Sea, waves crashing on the ramparts, monsoon spray and "
                "foam-white, dramatic coastal stronghold"
            ), None),
            ("scene", "Scene-The-Monsoon-Climb", (
                "a bare-handed climber scaling a sheer wet black-basalt fort wall in driving monsoon "
                "rain to plant a saffron flag at the summit, mist and green peaks below, daring and "
                "elemental"
            ), None),
            ("scene", "Scene-The-Vertical-Duel", (
                "a four-hour duel between brother and sister moving vertically across a sea-fort's "
                "walls, climbing hooks sparking on basalt, the Arabian Sea below, perfectly matched "
                "and tragic, monsoon spray"
            ), None),
        ],
    },
]
