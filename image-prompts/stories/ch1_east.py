"""Chapter 1 - East region (Purvapatha). 5 kingdoms.

Dedicated palettes:
  08 Kalinga-Chakra -> grief slate-blue + Konark sun-gold (Odisha)
  09 Sagara-Ratna   -> deep ocean teal-black + colonial rust (Andaman & Nicobar)
  10 Sundara-Vana   -> murky mangrove black-green + kingfisher-blue (Sundarbans)
  11 Vajra-Bhumi    -> Nalanda brick-red + Mauryan gold (Bihar)
  12 Vana-Agni      -> ember forest-fire orange-red + coal-black (Jharkhand)
"""

STORIES = [
    {
        "id": "08-kalinga-chakra",
        "chapter": 1,
        "region": "east",
        "kingdom": "Kalinga-Chakra",
        "state": "Odisha",
        "title": "The War Against Grief Itself",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Odisha Kalingan fantasy, Konark Sun Temple and Jagannath "
            "Kalinga-style architecture, chariot-wheel and stone-frieze motif, Pattachitra art "
            "influence, Odia dress of ikat cotton dhoti and sari, war-to-peace memorial mood, "
            "melancholy slate-blue and grief-grey palette warmed by sun-wheel gold, highly detailed, "
            "intricate carving, volumetric dusk light, artstation, octane render, 8k"
        ),
        "color_theme": "grief slate-blue and ash-grey, Konark khondalite grey-green stone, sun-wheel gold, terracotta Pattachitra red, muted sandstone, sorrowful twilight",
        "entities": [
            ("hero", "Jagannathi", (
                "a calm strong Odia woman builder-warrior, the temple-builder, thoughtful "
                "compassionate eyes, a sambar-deer tattoo, draped in ikat-woven Odia cotton sari in "
                "muted earth-and-blue tones, holding a stonemason's tools and a chisel, standing "
                "before a great carved stone wheel, the bearing of someone who heals rather than "
                "fights, soft dusk light"
            ), {"negative": "aggressive pose, heavy armor, urban dress",
                "variants": [("twin-daughters-choice",
                    "kneeling protectively before her two young twin daughters who bear no tattoo, a "
                    "great grief-wheel looming behind, an agonising decision on her face, soft light")]}),
            ("villain", "Kalinga-Yama", (
                "a terrifying figure made of pure grief, shaped like an ancient Kalingan warrior but "
                "his body the colour of dried blood and battlefield ash, hollow sorrowful eyes, "
                "carrying a Grief Blade that does not cut but touches, an aura of 100,000 deaths "
                "concentrated into one walking wound, standing on the old battlefield, devastating sorrow"
            ), {"negative": "happy, bright, heroic glow, ornate clean armor",
                "variants": [("seen-at-the-wheel",
                    "sitting quietly at the base of a great carved memorial wheel, something other "
                    "than grief on his face for the first time, recognition, names being carved around "
                    "him, Indian rollers circling above, bittersweet")]}),
            ("ally", "Wheel-Carvers-Of-Odisha", (
                "Odia families and stonemasons carving names of their dead into a massive stone "
                "memorial wheel, men and women in ikat cotton, chisels in hand, tears and resolve, "
                "communal mourning becoming healing, warm torchlight on carved stone"
            ), None),
            ("animal", "Sambar-Deer", (
                "a large sambar deer, dark shaggy brown coat, rugged antlers, standing in misty "
                "Odisha forest at dusk, dignified and watchful, sacred totem animal, soft light"
            ), None),
            ("animal", "Indian-Rollers-Kalinga", (
                "Indian roller birds tumbling through a dusk sky, brilliant blue and turquoise wings "
                "spread, falling and rising in their acrobatic display above a great stone temple "
                "wheel, showing that descent is not defeat"
            ), None),
            ("relic", "Wheel-Of-Remembrance", (
                "the Wheel of Remembrance, a massive intricately carved stone chariot-wheel modeled "
                "on the Konark Sun Temple, every spoke and rim covered in carved names of the dead, "
                "erected on an old battlefield, glowing faintly at dusk, sacred memorial object"
            ), None),
            ("environment", "Konark-Sun-Temple-Kingdom", (
                "the Kalinga kingdom centered on a colossal Konark-style sun temple shaped as a stone "
                "chariot with giant carved wheels and stone horses, Kalingan deul spires, "
                "frieze-covered walls, a coastal plain under a vast dusk sky, epic matte painting"
            ), None),
            ("environment", "Battlefield-Of-Kalinga", (
                "the ancient battlefield of Kalinga where 100,000 died, a wide plain soaked with two "
                "thousand years of sorrow, ash-grey soil, a lone memorial wheel rising from the "
                "ground, heavy melancholy slate-blue light, haunting"
            ), None),
            ("scene", "Scene-The-Grief-Blade-Touch", (
                "three hardened warriors dropping their weapons and weeping as a grief-made warrior's "
                "blade merely touches the air near them, a tidal wave of suppressed sorrow made "
                "visible, devastating, ash and dusk"
            ), None),
            ("scene", "Scene-The-Wheel-Turns", (
                "an entire people gathered to carve names into a great stone wheel at dusk, a "
                "grief-made figure seeing himself acknowledged for the first time, Indian rollers "
                "wheeling overhead, the wheel glowing, sorrow turning to healing"
            ), None),
        ],
    },
    {
        "id": "09-sagara-ratna",
        "chapter": 1,
        "region": "east",
        "kingdom": "Sagara-Ratna",
        "state": "Andaman & Nicobar",
        "title": "The Unlocking",
        "modern_ok": True,  # colonial-era and modern museum elements
        "style": (
            "cinematic concept art, Andaman & Nicobar island fantasy, Onge and Nicobari tribal "
            "outrigger-canoe culture, colonial Cellular Jail radial-prison architecture, "
            "ocean-and-iron motif, minimal tribal dress with ritual chest-paint, deep ocean "
            "teal-black palette pierced by colonial-iron rust and lightning-white, storm-sea "
            "atmosphere, highly detailed, intricate, volumetric storm light, artstation, octane "
            "render, 8k"
        ),
        "color_theme": "midnight ocean teal-black, storm-grey, colonial iron-rust and brass, lightning-white, Nicobar-pigeon iridescent emerald-copper, bioluminescent blue accents",
        "entities": [
            ("hero", "Onge-Nakshatra", (
                "a lean weathered Onge islander man mid-20s, sea-sailor's body, ritual Mrigashira "
                "constellation chest-paint reapplied each dawn, a saltwater-crocodile tattoo rising "
                "from his lower back to his upper arm, minimal tribal sea-dress, holding an "
                "anchor-weapon on a salt-rope, standing in a double-outrigger canoe on black "
                "storm-water, two-direction gaze, lightning-lit"
            ), {"negative": "heavy clothing, urban dress, calm bright daylight, ornate armor",
                "variants": [("crocodile-bond-dive",
                    "riding the back of a six-meter saltwater crocodile below the surface through a "
                    "sea-cave passage, holding his breath, bioluminescent blue glow in dark water, "
                    "tense and silent")]}),
            ("villain", "Kalapani-Asura", (
                "a sinister colonial-warden spectre wearing 1906 British khaki too thin for the body "
                "inside it, a face that is not quite his own, holding a slowly self-turning iron "
                "wheel of seven spokes, standing in the central tower of a radial prison, flickering "
                "between electric bulb and oil lamp, made of a hundred years of imprisoned pain, "
                "uncanny menacing"
            ), {"negative": "warm friendly, tribal dress, bright sunlit, heroic",
                "variants": [("unmade-to-whitley",
                    "shrunk to just the small old ghost of the last warden, khaki hanging loose, the "
                    "iron wheel falling apart in his hand, weeping, fading into morning air, pity")]}),
            ("ally", "Aki-Grandmother-Carver", (
                "an ancient Onge grandmother canoe-carver, weathered serene face, silver hair, simple "
                "tribal wrap, carving a small wooden canoe and paddle, speaking through carvings "
                "instead of words, profound quiet wisdom, cave-mouth by the sea"
            ), None),
            ("ally", "Sentinel-Brother-Drummer", (
                "a distant silhouette of a Sentinelese tribesman at dawn on a high cliff, a hollowed "
                "log drum on his hip, drumming a rhythm of permission, mysterious and reverent, "
                "backlit by sunrise, far away and unreachable"
            ), {"negative": "close-up detailed face, modern clothing"}),
            ("animal", "Saltwater-Crocodile-Bond", (
                "a giant six-meter saltwater crocodile, armored dark hide, ancient eyes, gliding at "
                "the surface of a black harbour leading a fleet, the bonded guardian of an island "
                "sailor, powerful and primeval, storm light"
            ), None),
            ("animal", "Nicobar-Pigeon", (
                "a Nicobar pigeon, spectacular iridescent emerald-copper-and-grey plumage with long "
                "hackle feathers, perched tilting its head, the most beautiful pigeon in the world, "
                "vivid against weathered grey stone"
            ), None),
            ("weapon", "Sagara-Bandhu-Anchor", (
                "the Sagara-Bandhu, a tribal iron boat-anchor weapon on a long salt-soaked rope, "
                "barnacle-crusted iron flukes, swung in wide typhoon-circle arcs, the salt of it eats "
                "through colonial iron, displayed coiled and mid-swing, dramatic storm light"
            ), None),
            ("environment", "Cellular-Jail-Radial-Prison", (
                "the colonial Cellular Jail of Port Blair, a seven-spoked radial prison of grim "
                "red-brick wings radiating from a central watchtower, designed so no prisoner sees "
                "another, cold even in heat, flickering between 1906 and now, oppressive and haunted"
            ), None),
            ("environment", "Andaman-Archipelago-Storm", (
                "the Andaman and Nicobar archipelago, forty-seven inhabited islands of dense green "
                "rainforest fringed with reefs, outrigger canoes between islands, a black monsoon sky "
                "split by lightning over teal sea, vast and remote, epic matte painting"
            ), None),
            ("scene", "Scene-Forty-Seven-Canoes", (
                "forty-seven tribal outrigger canoes entering a dark harbour in a single broad arc at "
                "dawn led by a giant crocodile at the surface, a Nicobar pigeon above the center "
                "canoe, many islands united, hopeful and epic"
            ), None),
            ("scene", "Scene-The-Unlocking", (
                "every cell door of a radial prison opening at once, slow ghosts in 1906 and 1942 "
                "clothing walking out down seven spoke-corridors and into the sea where the water "
                "parts for each one, an island warrior with an anchor-weapon watching, release and "
                "sorrow, dawn"
            ), None),
        ],
    },
    {
        "id": "10-sundara-vana",
        "chapter": 1,
        "region": "east",
        "kingdom": "Sundara-Vana",
        "state": "West Bengal",
        "title": "The Swamp That Swallows",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Sundarbans mangrove-delta dark fantasy, stilt fishing villages "
            "and Bonbibi forest-shrines, breathing pneumatophore roots and tidal mudflats, Bengali "
            "dress of cotton sari and gamcha, necromancer-and-tide motif, murky mangrove black-green "
            "palette with bone-white and electric kingfisher-blue accents, moonless eerie "
            "atmosphere, highly detailed, intricate, volumetric mist, artstation, octane render, 8k"
        ),
        "color_theme": "murky mangrove black-green, tidal mud-brown, bone-white skull, electric kingfisher-blue and orange accent, moonless indigo-black, swamp-water sheen",
        "entities": [
            ("hero", "Sundarvani", (
                "a patient watchful Bengali woman warrior of the Sundarbans, lean and quiet with "
                "swamp-water calm, a fishing-cat tattoo, wearing a mud-toned cotton sari tucked for "
                "wading, a bonded fishing cat at her side, holding a woven mangrove-bark net, "
                "standing knee-deep in black tidal water among breathing roots, eerie green light"
            ), {"negative": "bright cheerful, urban dress, dry desert, heavy armor",
                "variants": [("net-that-remembers",
                    "casting a glowing mangrove-bark net over undead swamp-warriors who weep as it "
                    "touches them remembering what they lost, black water and mist, sorrowful")]}),
            ("villain", "Kali-Tantrik", (
                "a sinister Bengali necromancer-tantric, gaunt ash-smeared body, matted hair, a "
                "human-skull staff, blood-red and black ritual cloth, wading through chest-deep flood "
                "water as if it parts for him, raising the drowned dead with the press of his staff, "
                "flat-eyed undead villagers behind him, moonless swamp, ominous"
            ), {"negative": "clean, kind, bright daylight, ornate armor, heroic glow"}),
            ("ally", "Bonbibi-Forest-Guardian", (
                "Bonbibi the revered guardian-mother of the Sundarbans forest, serene protective "
                "presence, simple cloth and forest ornaments, standing among mangroves blessing a "
                "woven net, soft otherworldly light, sacred folk-deity aura"
            ), None),
            ("ally", "The-Mother-In-The-Mangroves", (
                "an ambiguous figure of a woman standing far off in the mangroves holding a bowl of "
                "rice, eyes that might be alive and might be dead, the hero's lost mother or a "
                "necromancer's creation, haunting and unresolved, mist and shadow"
            ), {"negative": "clearly alive, clearly happy, bright light"}),
            ("animal", "Fishing-Cat", (
                "a fishing cat, stocky grey-brown spotted wild cat with a flat face and webbed paws, "
                "glowing eyes that see in darkness, crouched alert on a mud bank above black water, "
                "patient nocturnal hunter, sacred companion, eerie light"
            ), None),
            ("animal", "White-Throated-Kingfisher", (
                "a white-throated kingfisher, brilliant electric-turquoise wings, chestnut body, "
                "bright red bill, perched over black swamp water mid-keen, vivid jewel-colour against "
                "dark mangrove"
            ), None),
            ("weapon", "Jal-Jaal-Mangrove-Net", (
                "the Jal-Jaal, a fighting net woven from mangrove bark and blessed by Bonbibi, fine "
                "knotted cords that glow faintly and remind the dead what they lost, shown cast wide "
                "in mid-air over water, dramatic eerie light"
            ), None),
            ("environment", "Sundarbans-Mangrove-Delta", (
                "the Sundarbans, an endless labyrinth of mangrove islands where ground is water and "
                "water is mud, pneumatophore roots reaching up like drowning hands, stilt fishing "
                "villages and small Bonbibi shrines, tigers unseen, mist and tidal channels, "
                "beautiful and menacing, epic matte painting"
            ), None),
            ("environment", "Black-Water-Confluence", (
                "the confluence of three rivers on a moonless night, water so black the kingfishers "
                "refuse to dive, the deepest swamp where the necromancer hides his undead army, "
                "absolute darkness over still water, dread"
            ), None),
            ("scene", "Scene-Battle-Of-Black-Water", (
                "the Battle of the Black Water, a net-wielding warrior and a fishing cat against a "
                "necromancer's undead swamp-army at a moonless three-river confluence, the net "
                "catching figures who weep, mist and black water, eerie combat"
            ), None),
            ("scene", "Scene-The-Watcher-In-The-Roots", (
                "deep night in the mangroves, a lone warrior glimpsing a woman with a bowl of rice "
                "standing motionless among the breathing roots, uncertain if she is the lost mother "
                "or an undead creation, haunting unresolved dread"
            ), None),
        ],
    },
    {
        "id": "11-vajra-bhumi",
        "chapter": 1,
        "region": "east",
        "kingdom": "Vajra-Bhumi",
        "state": "Bihar",
        "title": "The Poet and the Conqueror",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Bihar Mauryan-Buddhist fantasy, Nalanda red-brick monastery and "
            "Pataliputra ruins, polished Ashokan sandstone pillars with lion capitals, "
            "fist-and-verse motif, dress of cotton dhoti angavastra with inscribed warrior wrist-"
            "bands, Nalanda brick-red and Mauryan-gold palette over Gangetic ochre, scholar-warrior "
            "mood, highly detailed, intricate, volumetric dust light, artstation, octane render, 8k"
        ),
        "color_theme": "Nalanda brick-red and terracotta, polished Mauryan sandstone-gold, Gangetic mud-ochre, vajra lightning-white, gaur black, ash-grey ruin",
        "entities": [
            ("hero", "Vajramukha", (
                "a powerful Bihari warrior-poet, thunderbolt-fisted, muscular with a scholar's calm "
                "eyes, a gaur bison tattoo, wearing cotton dhoti and angavastra with leather "
                "gauntlets and inscribed poetry wrist-bands tied over them, one fist raised glowing "
                "faintly, standing among Nalanda's red-brick ruins, the contradiction of fury and "
                "wisdom in his face, golden dust light"
            ), {"negative": "delicate, full plate armor, urban dress, light build",
                "variants": [("gaur-rage-unleashed",
                    "fists wreathed in gaur-charge force, poetry wrist-bands tightening and pressing "
                    "words into his skin, mid-strike against a stone pillar with sparks flying like "
                    "festival fireworks, ferocious")]}),
            ("villain", "Ashoka-Chaya", (
                "a corrupted scholar-professor possessed by the buried war-rage of an emperor, hard "
                "obsessive face, dark robes over Mauryan-style war harness, wielding a risen Ashokan "
                "stone war-pillar as a weapon, leading disciplined silent followers like a Mauryan "
                "legion, cracked earth and rising pillars, ominous"
            ), {"negative": "gentle, peaceful monk, bright cheerful, heroic glow"}),
            ("ally", "Prabhavati-Scarred-Wife", (
                "a dignified Bihari woman, the hero's wife, a faint scar across one shoulder, cotton "
                "sari, steady forgiving but wary eyes, standing in a brick courtyard, quiet strength "
                "and sorrow, warm light"
            ), None),
            ("ally", "Nalanda-Acharya", (
                "a wise woman scholar of Nalanda, keeper of a hidden archive, spectacled discerning "
                "eyes, simple ochre scholar's robe, holding a palm-leaf manuscript said to contain "
                "the answer, candlelit library of manuscripts, serene authority"
            ), None),
            ("animal", "Gaur-Indian-Bison", (
                "a gaur Indian bison, massive muscular black body with white stockings, huge curved "
                "horns and a high shoulder ridge, head lowered to charge, raw martial power, sacred "
                "totem, dust and golden light"
            ), None),
            ("animal", "Indian-Rollers-Nalanda", (
                "Indian roller birds carrying fragments of palm-leaf manuscripts in their beaks to "
                "safety over the red-brick ruins of Nalanda, brilliant blue wings against terracotta "
                "walls, guardians of knowledge"
            ), None),
            ("weapon", "Inscribed-Gauntlets-And-Bands", (
                "a pair of leather warrior gauntlets bound with cloth wrist-bands each inscribed with "
                "a line of poetry in Brahmi-style script, that tighten and press words into the skin "
                "to quell battle-rage, displayed on dark cloth, dramatic warm light"
            ), None),
            ("environment", "Nalanda-Ruins", (
                "the great red-brick ruins of Nalanda, terraced monastery cells and stupas in warm "
                "terracotta brick, a modern campus beside the ancient ruins, Indian rollers nesting, "
                "Gangetic plain haze, light of the world reborn from mud, epic matte painting"
            ), None),
            ("environment", "Pataliputra-Kumhrar-Pillar", (
                "the ruins of Pataliputra at Kumhrar, an ancient Ashokan war-pillar of polished "
                "sandstone rising six inches out of cracked earth, glowing faintly, Mauryan-pillared "
                "hall fragments, ominous awakening, dusty gold light"
            ), None),
            ("scene", "Scene-Battle-At-The-Library-Door", (
                "a six-hour duel at the door of Nalanda's library, a thunderbolt-fisted warrior-poet "
                "striking a possessed scholar's massive stone pillar-weapon, sparks flying like "
                "festival fireworks, books at stake, fierce"
            ), None),
            ("scene", "Scene-Warrior-And-Poet", (
                "a single warrior-poet caught between two selves, on one side a charging gaur of "
                "fury, on the other a serene Buddha beneath a tree, reading a glowing palm-leaf "
                "manuscript, the resolution of rage and gentleness, golden dusk"
            ), None),
        ],
    },
    {
        "id": "12-vana-agni",
        "chapter": 1,
        "region": "east",
        "kingdom": "Vana-Agni",
        "state": "Jharkhand",
        "title": "The War Beneath the Roots",
        "modern_ok": True,  # deep-mining machinery vs forest guerrilla
        "style": (
            "cinematic concept art, Jharkhand tribal sal-forest fantasy, Santhal and Munda tribal "
            "villages and sacred groves, deep-mine industrial intrusion, bow-and-canopy motif, "
            "tribal dress of handwoven cloth with bead and bone ornaments, ember forest-fire "
            "orange-red palette against coal-black and deep sal-green, guerrilla-resistance mood, "
            "highly detailed, intricate, volumetric ember light, artstation, octane render, 8k"
        ),
        "color_theme": "ember forest-fire orange-red, glowing iron-ore red veins, coal-black, deep sal-forest green, smoke-grey, tribal bead earth-tones",
        "entities": [
            ("hero", "Vanajara", (
                "a young Jharkhandi tribal archer the Forest Ghost age 22, lean and forest-quick, "
                "skin dappled with shadow, an elephant-herd tattoo, handwoven tribal cloth with bead "
                "and bone ornaments, a longbow drawn with an iron-tipped arrow, perched in the "
                "canopy of a deep sal forest, fierce protective eyes, green-gold light"
            ), {"negative": "old, heavy armor, urban dress, gun",
                "variants": [("ecosystem-ambush",
                    "loosing an arrow as elephants materialize from the trees like grey ghosts around "
                    "an enemy, the whole forest responding as one, dust and ember, unstoppable")]}),
            ("villain", "Khanij-Raja", (
                "a menacing mining-warlord the Mineral King, a spinning industrial drill-arm where "
                "one arm should be, able to hear minerals singing, grimy armored mining garb, "
                "standing in a glowing-red deep mine, cold extractive hunger, sparks and heat, "
                "ominous"
            ), {"negative": "natural arms, kind, lush peaceful, heroic glow",
                "variants": [("titanium-arm-rebuild",
                    "rebuilt with a darker titanium drill-arm mined from a darker place, weeping yet "
                    "vengeful, deep-mine red glow, embers")]}),
            ("ally", "Birsa-Voice-Of-The-Sal", (
                "an ancestral tribal leader's presence echoing through the sal forest, dignified "
                "Munda elder in handwoven cloth and turban, raised hand, voice of resistance and "
                "healing, dappled sacred-grove light, revered"
            ), None),
            ("ally", "Three-Clan-Guerrillas", (
                "a united guerrilla band of three Jharkhandi tribal clans, men and women in "
                "handwoven cloth with bows and tribal weapons, bead and bone ornaments, disciplined "
                "and fierce, emerging from forest shadow, resistance fighters"
            ), None),
            ("animal", "Forest-Elephant-Herd", (
                "a herd of Indian elephants materializing from dense sal forest like grey ghosts, "
                "protective matriarch leading, dust and dappled light, allies of the forest people, "
                "majestic and sudden"
            ), None),
            ("animal", "Asian-Koel", (
                "an Asian koel, glossy black male bird with bright crimson eyes, perched in the "
                "canopy calling before dawn, the song a forest fighter navigates by, vivid against "
                "deep green leaves"
            ), None),
            ("weapon", "Iron-Tipped-Longbow", (
                "a tribal longbow of forest wood with iron-tipped arrows whose heads recognize and "
                "rejoin natural iron, bound with sinew and tribal beadwork, displayed with a quiver, "
                "dramatic ember light"
            ), None),
            ("environment", "Sal-Forest-Canopy-Kingdom", (
                "the Jharkhand sal forest, Land of Forests, canopy so thick children think the sky is "
                "green, sacred groves with tribal totems, villages beneath the leaves, mist and "
                "shafts of green-gold light, primordial, epic matte painting"
            ), None),
            ("environment", "Deep-Mine-Glowing-Chamber", (
                "the deepest chamber of a mine, over fifty degrees and absolute dark, iron ore "
                "glowing red in natural veins along black stone walls, the earth's heartbeat shaking "
                "dust from the ceiling, oppressive infernal red glow"
            ), None),
            ("scene", "Scene-Battle-Of-The-Deep-Mine", (
                "an underground duel in a glowing-red iron-ore chamber, a tribal archer's arrow "
                "shattering a drill-arm as iron rejoins iron, sparks and heat, the earth's heartbeat "
                "thudding, intense"
            ), None),
            ("scene", "Scene-The-Father-And-The-Machine", (
                "a memory-scene, a tribal man standing arms crossed with a bow on his back before a "
                "huge mining machine that does not stop, dignified defiance, dust and grief, the "
                "moment a forest ghost is born"
            ), None),
        ],
    },
]
