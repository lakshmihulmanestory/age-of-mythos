"""Chapter 1 - North region (Uttarapatha). 6 kingdoms.

Dedicated palettes:
  13 Deva-Bhumi        -> glacier white-blue + Monal iridescent + temple saffron (Uttarakhand)
  14 Ganga-Simhasana   -> marigold saffron-orange + Ganga silt grey-green (Uttar Pradesh)
  15 Hima-Chhaya       -> stark snow-grey vs ember-orange fire duotone (Himachal Pradesh)
  16 Kurukshetra-Bhoomi-> dust-gold battlefield + dried-blood maroon (Haryana)
  17 Panch-Nada        -> mustard wheat-yellow + five-river blue + Nihang steel (Punjab)
  18 Sharada-Pitha     -> saffron-crocus purple-orange + walnut-brown over snow (Kashmir)
"""

STORIES = [
    {
        "id": "13-deva-bhumi",
        "chapter": 1,
        "region": "north",
        "kingdom": "Deva-Bhumi",
        "state": "Uttarakhand",
        "title": "The Child Who Survived the Mountain",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Uttarakhand Himalayan sacred-mountain fantasy, Kedarnath-style "
            "stone shikhara temples and Garhwali hill villages, snow-peak-and-prayer motif, Garhwali "
            "woollen dress with caps and shawls, glacier white-blue palette warmed by temple saffron "
            "and Monal iridescence, reverent high-altitude mood, highly detailed, intricate, "
            "volumetric snow light, artstation, octane render, 8k"
        ),
        "color_theme": "glacier white and ice-blue, Monal iridescent rainbow accent, musk-deer warm brown, temple saffron-orange, slate mountain-grey, prayer-flag colour flecks",
        "entities": [
            ("hero", "Kasturika", (
                "a quiet patient Garhwali hill woman warrior, calm enormous eyes, the smallest tattoo "
                "a thumbprint-sized musk deer on her wrist, warm Garhwali woollen dress and shawl, "
                "carrying a knife and a blowpipe, standing on a snowy Himalayan ridge before a stone "
                "shikhara temple, the stillness of an avalanche-survivor, cold blue light"
            ), {"negative": "loud aggressive pose, heavy armor, urban dress, large gaudy tattoo",
                "variants": [("buried-in-the-snow",
                    "a nine-year-old girl curled inside the warmth of a dead musk deer's body in a "
                    "dark pocket of avalanche snow, faint light, fragile survival, the moment the tiny "
                    "musk-deer tattoo appears on her wrist")]}),
            ("villain", "Kedar-Rakshasa", (
                "a grief-broken former temple priest turned destroyer, hollow weeping eyes, a "
                "mountaineer's ice-axe that can trigger avalanches, dark robes over climbing gear, "
                "standing in the rubble of a shattered shrine he has destroyed, rage and sorrow at "
                "unanswering gods, snow and grey stone, tragic menace"
            ), {"negative": "calm priestly serenity, bright cheerful, heroic glow"}),
            ("ally", "The-Footless-Father", (
                "an old Garhwali master-mountaineer, the hero's father, both feet lost to frostbite, "
                "seated in a hill home carving a wooden snow-leopard deity by touch, hands that "
                "remember ice-axes, watching distant peaks he can no longer climb, warm hearth light, "
                "dignified loss"
            ), None),
            ("animal", "Musk-Deer", (
                "a Himalayan musk deer, small shy deer with fang-like tusks and large dark eyes, "
                "standing in deep snow among birches, the source of the most precious fragrance in "
                "the mountains, sacred life-giving totem, soft cold light"
            ), None),
            ("animal", "Himalayan-Monal", (
                "a Himalayan Monal pheasant, dazzling iridescent plumage of metallic green blue copper "
                "and purple, standing on a snowy ridge catching light the ruins below cannot, the most "
                "vivid bird of the high Himalaya"
            ), None),
            ("environment", "Kedarnath-Sacred-Peaks", (
                "the sacred peaks of Uttarakhand, a Kedarnath-style stone shikhara temple alone on a "
                "high snowfield beneath colossal Himalayan summits, glacier-mouth river, prayer flags, "
                "where gods come to rest, immense and divine, epic matte painting"
            ), None),
            ("environment", "Avalanche-Ruined-Shrine", (
                "a small mountain shrine shattered into rubble in deep snow, broken stone and scattered "
                "offerings, a lone grieving figure standing among the wreckage, harsh white light, "
                "desolate and tragic"
            ), None),
            ("scene", "Scene-Sixteen-Hours-In-The-Dark", (
                "a child buried sixteen hours in avalanche snow at minus twenty, a single pocket of "
                "air beside a rock, the warmth of a dead musk deer keeping her alive, near-darkness "
                "with one faint shaft of light, fragile harrowing survival"
            ), None),
            ("scene", "Scene-The-Quietest-War", (
                "a fourteen-year-old girl sitting down in temple rubble across from a grief-maddened "
                "destroyer, not fighting but speaking, Himalayan Monals calling from the ridge above, "
                "snow falling, the quietest war in India"
            ), None),
        ],
    },
    {
        "id": "14-ganga-simhasana",
        "chapter": 1,
        "region": "north",
        "kingdom": "Ganga-Simhasana",
        "state": "Uttar Pradesh",
        "title": "The Son the River Claimed",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Uttar Pradesh sacred-river civilization fantasy, Varanasi ghats "
            "and Ayodhya-Mathura temple architecture, river-and-throne motif, dress of cotton "
            "dhoti-kurta angavastra and sari with marigold garlands, marigold saffron-orange palette "
            "over Ganga silt grey-green, Kumbh-Mela grandeur mood, highly detailed, intricate, "
            "volumetric river-mist light, artstation, octane render, 8k"
        ),
        "color_theme": "marigold saffron-orange, Ganga silt grey-green, sandstone temple ochre, Kumbh ash-grey, sarus crimson-and-pearl-grey, dawn river-gold",
        "entities": [
            ("hero", "Gangaputra", (
                "a noble conflicted young Uttar Pradesh warrior, born of the river, calm searching "
                "eyes carrying the weight of an unwanted prophecy, a barasingha antler tattoo that "
                "glows like hot iron when troubled, cotton dhoti and angavastra with a marigold "
                "garland, standing on a Varanasi-style river ghat at dawn, a weapon that questions "
                "why it was forged, golden river-mist"
            ), {"negative": "carefree, heavy plate armor, urban dress, villainous",
                "variants": [("antlers-burning",
                    "his barasingha antler tattoo glowing like hot iron across his back as he faces an "
                    "impossible question before a vast crowd, ghats and river behind, intense inner "
                    "conflict")]}),
            ("villain", "Kansa-Putra", (
                "a charismatic dangerous former political-science professor turned agitator, sharp "
                "piercing eyes, dark austere clothing, standing calm before a vast Kumbh crowd asking "
                "devastating simple questions, a chain-iron aura, the son of a buried dungeon-throne, "
                "river behind him, ash-grey light, unsettling magnetism"
            ), {"negative": "warm kind, ornate royal robes, bright heroic glow",
                "variants": [("the-chain-iron-throne",
                    "seated on a throne forged of prison chain-iron in a sealed underground chamber "
                    "below Mathura, reading a manuscript of compressed prisoner-rage, cold iron light, "
                    "ominous")]}),
            ("ally", "The-Midwife-Of-The-Flood", (
                "a fearless old Uttar Pradesh midwife who has delivered three hundred children, "
                "weathered resolute face, simple sari, holding a newborn as floodwater rises through "
                "a window, lamplight, fierce tenderness"
            ), None),
            ("animal", "Sarus-Crane-Pair", (
                "a pair of Sarus cranes, the world's tallest flying birds, tall grey bodies with "
                "crimson heads and necks, performing their loyal mating dance in a flooded paddy at "
                "dawn, a sound said to herald kings, elegant and devoted"
            ), None),
            ("relic", "Chain-Iron-Throne", (
                "a throne made entirely of welded prison chain-iron, found in a sealed chamber below "
                "Mathura, draped with a prison-script manuscript, cold and oppressive, lit by a single "
                "torch, ominous relic of compressed despair"
            ), None),
            ("environment", "Varanasi-Ghats-Kingdom", (
                "the sacred river civilization of Uttar Pradesh, stepped Varanasi-style ghats crowded "
                "with pilgrims and pyres descending to the Ganga, temple spires of Ayodhya and Mathura "
                "beyond, marigold and lamp offerings on the water, dawn mist, epic matte painting"
            ), None),
            ("environment", "Kumbh-Mela-Multitude", (
                "the Kumbh Mela, a hundred million pilgrims gathered on a vast river sangam, tents and "
                "sadhus and saffron flags to the horizon, ash and marigold and river-grey, awe-"
                "inspiring sacred multitude, dawn light"
            ), None),
            ("scene", "Scene-The-Question-At-The-Kumbh", (
                "a lone agitator standing quietly before a hundred-million-strong river crowd asking a "
                "single dangerous question, a stunned silence rippling outward, marigold and ash, the "
                "silence more dangerous than war"
            ), None),
            ("scene", "Scene-Charity-And-Sabotage", (
                "split-feeling tableau, on one side a river-born hero feeding the poor with marigold "
                "warmth, on the other a dungeon-born agitator asking why they are poor, the Ganga "
                "flowing grey-green between them judging neither, dawn"
            ), None),
        ],
    },
    {
        "id": "15-hima-chhaya",
        "chapter": 1,
        "region": "north",
        "kingdom": "Hima-Chhaya",
        "state": "Himachal Pradesh",
        "title": "The Ghost and the Fire",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Himachal Pradesh high-mountain fantasy, kath-kuni timber-and-"
            "stone temple architecture and pahari villages, snow-leopard-and-glacier motif, pahari "
            "woollen pattu dress and caps, stark snow-grey palette in sharp duotone against ember-"
            "orange fire and steam, cold-versus-heat mood, highly detailed, intricate, volumetric "
            "snow and steam, artstation, octane render, 8k"
        ),
        "color_theme": "snow-leopard pale grey and ice-blue-white, stark charcoal rock, ember-orange fire and steam-white counterpoint, frost-shadow blue, muted pahari wool tones",
        "entities": [
            ("hero", "Himavati", (
                "a silent elusive Himachali woman warrior the Snow Ghost, pale grey climbing garb "
                "blending into snow, a snow-leopard tattoo, twin climbing daggers, moving across a "
                "high Himalayan slope leaving no footprint, watchful patient predator's stillness, "
                "cold pale grey-blue light"
            ), {"negative": "loud, brightly coloured, heavy armor, urban dress",
                "variants": [("burned-hands-retreat",
                    "hands blistered and skin peeling from a fire-staff's heat, carrying her footless "
                    "father over her shoulders away from a glacial flood, snow and steam, a strategic "
                    "retreat")]}),
            ("villain", "Himaalaya-Rakshasa", (
                "a coldly ideological man wielding a glowing fire-staff Agni-Danda, standing in the "
                "steam of his own making like a god in a cloud as a glacier melts into flood around "
                "him, dark heat-scorched garb, righteous destroyer who calls people a detail, ember "
                "glow and vapor, menacing"
            ), {"negative": "cold calm, kind, snow-only setting, heroic glow"}),
            ("ally", "Pahari-Wood-Carver-Father", (
                "an old Himachali master-mountaineer father carving wooden deities, weathered serene "
                "face, pahari woollen shawl and cap, working by touch, surrounded by carved figures, "
                "warm hearth light against cold window-snow"
            ), None),
            ("animal", "Snow-Leopard", (
                "a snow leopard the ghost of the mountains, thick smoky-grey rosetted coat, pale "
                "green eyes, long tail, perched on a snowy crag almost invisible against rock and "
                "snow, elusive and patient, cold light"
            ), None),
            ("animal", "Western-Tragopan", (
                "a Western Tragopan, the rarest pheasant of the Himalaya, crimson and white-spotted "
                "plumage with blue facial skin, standing fearless on a rock between snow and steam, "
                "knowing where to be when the mountain rages"
            ), None),
            ("weapon", "Twin-Climbing-Daggers", (
                "a pair of mountaineer's climbing daggers, ice-pick crossguards and leather-wound "
                "grips, frost on the steel, equally tools of the cliff and weapons of the Snow Ghost, "
                "displayed on grey stone, cold rim light"
            ), None),
            ("environment", "Himachal-Snow-Peaks-Village", (
                "a Himachali high village of kath-kuni timber-and-stone houses and a pagoda temple "
                "clinging to a slope beneath vast snow peaks, the Shigri glacier above, pine and "
                "frost, serene and severe, epic matte painting"
            ), None),
            ("environment", "Weeping-Glacier-Flood", (
                "the oldest ice of Himachal pierced and weeping, a glacier melting into a wall of "
                "water carrying boulders and trees down a valley, steam where fire meets ice, "
                "catastrophic grey-and-ember light"
            ), None),
            ("scene", "Scene-Ice-Woman-Fire-Man", (
                "a duel in steam, a silent snow-grey dagger-fighter against a man wreathed in fire-"
                "staff heat standing in a cloud of his own vapor, a fearless tragopan on a rock "
                "between them, cold and heat clashing"
            ), None),
            ("scene", "Scene-The-Carved-Leopard", (
                "an old blind-handed father finishing a wooden snow-leopard carving by touch on high "
                "ground above a spent flood, the carving looking exactly like his solitary patient "
                "daughter, bittersweet warm light"
            ), None),
        ],
    },
    {
        "id": "16-kurukshetra-bhoomi",
        "chapter": 1,
        "region": "north",
        "kingdom": "Kurukshetra-Bhoomi",
        "state": "Haryana",
        "title": "The Field That Never Forgets",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Haryana sacred-battlefield fantasy, Mahabharata-relic plains and "
            "ancient brick-and-stone war-shrines, mace-and-dharma motif, rustic warrior dress of "
            "dhoti turban and bronze ornaments, dust-gold battlefield palette streaked with dried-"
            "blood maroon, eternal-war mood, highly detailed, intricate, volumetric dust and storm "
            "light, artstation, octane render, 8k"
        ),
        "color_theme": "dust-gold ochre battlefield, dried-blood maroon, bronze armour, storm-grey ash sky, lightning-white, blackbuck black-and-white accents",
        "entities": [
            ("hero", "Kurukshetraa", (
                "a fierce Haryanvi woman warrior born of the battlefield, hard fearless eyes, a "
                "blackbuck tattoo, rustic warrior dress with bronze ornaments, gripping a massive "
                "ancient mace, standing in a dusty crater on the eternal battlefield at dawn, the "
                "screams of five thousand years her companions, dust-gold storm light"
            ), {"negative": "delicate, ornate royal robes, urban dress, light weapon",
                "variants": [("born-in-the-crater",
                    "a newborn not crying but screaming a battle-cry in a lightning-struck crater as "
                    "bolts strike around her mother, black francolins erupting at midnight, raw and "
                    "elemental")]}),
            ("villain", "Kali-Yoddha", (
                "an ancient warrior-spectre who has walked Kurukshetra for millennia, gaunt timeless "
                "face, dark battle-worn armour the colour of dried blood, carrying no weapon because "
                "his weapon is doubt, walking the dawn battlefield posing questions dharma cannot "
                "answer, Bhishma's shadow between, ash and grey, menacing calm"
            ), {"negative": "young, bright, kind, ornate clean armor, heroic glow"}),
            ("ally", "Bhishma-Shadow", (
                "the shadow of Bhishma the grandsire stretched long across the dawn battlefield, a "
                "vast ghostly silhouette of an old armoured warrior lying on a bed of arrows, "
                "presence of ancient wisdom that still cannot answer every question, grey light"
            ), {"negative": "solid body, bright colour"}),
            ("animal", "Black-Francolin", (
                "black francolins, handsome game-birds with black-and-white spotted plumage and "
                "chestnut collars, erupting in alarm-call across a dusty field, the birds that call "
                "the sun up over the battlefield, vivid against ochre dust"
            ), None),
            ("animal", "Blackbuck-Kurukshetra", (
                "blackbuck antelope at the edge of an ancient battlefield, striking black-and-white "
                "coat and long spiral horns, standing watchful as they have for five thousand years, "
                "waiting to see which way the wind of dharma blows, dusty gold light"
            ), None),
            ("weapon", "Bhumi-Garjana-Mace", (
                "the mace Bhumi-Garjana Earth-Roar, a massive ancient iron-and-bronze mace pulled "
                "from the battlefield soil that shouts the word DHARMA when struck, weathered with "
                "five thousand years, planted in cracked earth, dramatic dusty light"
            ), None),
            ("environment", "Kurukshetra-Eternal-Field", (
                "the eternal battlefield of Kurukshetra, a vast plain where eighteen armies once bled "
                "into the soil, scattered ancient arrowheads and broken weapons surfacing, a "
                "lightning-scarred crater, ash-grey storm sky over dust-gold earth, haunting, epic "
                "matte painting"
            ), None),
            ("environment", "Dawn-Fields-Debate-Ground", (
                "the dawn fields where a war of words is fought, two figures at opposite ends of a "
                "misty battlefield with a long shadow lying between them, black francolins calling the "
                "sun up, charged stillness"
            ), None),
            ("scene", "Scene-The-Battle-Of-Dawn-Words", (
                "a daily war fought with words not weapons, a mace-bearing warrior and a doubt-"
                "wielding spectre arguing about dharma across a battlefield while Bhishma's shadow "
                "lies between them, dawn breaking, tense"
            ), None),
            ("scene", "Scene-The-Shovel-That-Shouted", (
                "a twelve-year-old digging for relics in a field, her shovel striking a buried mace "
                "that shouts DHARMA in a muffled human voice through five thousand years of soil, "
                "dust bursting up, awe and dread"
            ), None),
        ],
    },
    {
        "id": "17-panch-nada",
        "chapter": 1,
        "region": "north",
        "kingdom": "Panch-Nada",
        "state": "Punjab",
        "title": "The Man Who Could Not Lose",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Punjab five-rivers fantasy, golden wheat fields and white-marble "
            "gurdwara architecture, river-and-blade motif, Nihang warrior dress of tall blue dastar "
            "turban and chola with steel quoits, mustard wheat-yellow palette with five-river blue "
            "and Nihang steel-blue, heroic warmth-versus-emptiness mood, highly detailed, intricate, "
            "volumetric golden light, artstation, octane render, 8k"
        ),
        "color_theme": "mustard wheat-field yellow, five-river blue, Nihang electric-blue and steel-silver, gurdwara white-and-gold, langar warm earth-tones, saffron accent",
        "entities": [
            ("hero", "Panchanada", (
                "a joyful powerful Punjabi warrior who laughs before battle, broad and bright-eyed, a "
                "blackbuck tattoo, riding a white horse through golden wheat, Nihang-style blue chola "
                "and tall turban, carrying a steel chakram quoit and a kirpan, five-river vitality, "
                "warm golden light"
            ), {"negative": "grim humorless, heavy plate armor, urban dress, dull colours",
                "variants": [("turban-removed-langar",
                    "seated in a wheat field having removed his turban in an act of profound trust, "
                    "inviting an enemy to share a meal, open vulnerable warmth, golden dusk")]}),
            ("villain", "Durjaya-Singh", (
                "a cursed invincible swordsman who feels nothing, blank hollow eyes, five swords each "
                "named for a river strapped in a custom harness across his body, walking through a "
                "winter wheat field like a farmer, untouchable and unbearably lonely, a goshawk "
                "circling above, cold grey light"
            ), {"negative": "emotional warmth, single weapon, bright cheerful, heroic glow",
                "variants": [("tornado-of-five-blades",
                    "five named swords whirling around him in a tornado of steel deflecting every "
                    "strike, motion-blur of blades, invincible and isolated, dust and steel-glint")]}),
            ("ally", "Panchanadas-Unmarked-Son", (
                "a small Punjabi boy born without the expected blackbuck tattoo, simple kurta, "
                "walking alone toward an enemy camp carrying a bowl of dal as an offering of trust, "
                "brave and innocent, golden field light"
            ), None),
            ("animal", "Northern-Goshawk", (
                "a Northern Goshawk, fierce barred grey raptor with piercing orange eyes, wings spread "
                "screaming its hunting cry, carrying a small bundle of food from the langar in its "
                "talons, vivid against a wheat-gold sky"
            ), None),
            ("weapon", "Five-River-Swords", (
                "five matched swords each named for a Punjab river Jhelum Chenab Ravi Beas Sutlej, "
                "each with a distinct river-engraved hilt, arranged in a custom body-harness, "
                "molecular-sharp edges, displayed fanned out on dark cloth, dramatic steel light"
            ), None),
            ("weapon", "Chakram-And-Kirpan", (
                "a Nihang steel chakram throwing-quoit and a curved kirpan, polished and battle-"
                "worn with blue-cloth binding, the dancing weapons of a five-rivers warrior, "
                "displayed together, dramatic rim light"
            ), None),
            ("environment", "Punjab-Wheat-And-Gurdwara", (
                "the Punjab of five rivers, endless golden wheat fields under a wide blue sky, a "
                "white-marble gold-domed gurdwara reflected in still water, rivers threading the land, "
                "warm communal abundance, epic matte painting"
            ), None),
            ("environment", "The-Langar-Hall", (
                "a Sikh langar community kitchen and hall, rows of people of every kind seated on the "
                "floor sharing a free meal, volunteers ladling dal, steam and warmth and equality, "
                "golden interior light, the heart that may crack a curse"
            ), None),
            ("scene", "Scene-Battle-Of-The-Five-Blades", (
                "a three-day duel in a wheat field, a laughing chakram-and-kirpan warrior dancing the "
                "Nihang's dance through a whirling tornado of five named swords that no strike can "
                "pierce, dust and golden light, relentless"
            ), None),
            ("scene", "Scene-The-Bowl-Of-Dal", (
                "an unmarked Punjabi boy walking alone across golden wheat toward a lonely cursed "
                "swordsman's camp holding out a bowl of dal, goshawks overhead, five rivers holding "
                "their breath, tender hope"
            ), None),
        ],
    },
    {
        "id": "18-sharada-pitha",
        "chapter": 1,
        "region": "north",
        "kingdom": "Sharada-Pitha",
        "state": "Kashmir",
        "title": "The Snow Library",
        "modern_ok": True,  # a modern uplink device appears late in the tale
        "style": (
            "cinematic concept art, Kashmir manuscript-and-snow fantasy, Sharada Peeth stone temple "
            "and Dal Lake houseboats, walnut-wood manuscript libraries and Awantipur ruins, "
            "scroll-and-memory motif, Kashmiri phiran dress and woven verse-cloth, saffron-crocus "
            "purple-and-orange palette over walnut-brown and snow-white, scholarly-pilgrimage mood, "
            "highly detailed, intricate, volumetric snow light, artstation, octane render, 8k"
        ),
        "color_theme": "saffron-crocus purple and orange, walnut-wood brown, snow-white and ice-blue, manuscript ivory and saffron-ribbon yellow, black-necked-crane grey-and-red, chinar accent",
        "entities": [
            ("hero", "Sharad-Pandit", (
                "a thoughtful Kashmiri scholar-warrior the eighth of his copyist line, ink-stained "
                "careful hands, a Kashmir-stag hangul tattoo with antler-points on his back, wearing "
                "a heavy woollen phiran dusted with snow, carrying the Sharada-Patra a Rigvedic "
                "scroll-shield slung across one arm, standing in a snowy high pass, reader who must "
                "learn to act, cold clear light"
            ), {"negative": "brash, heavy armor, urban dress, empty-handed",
                "variants": [("scroll-shield-raised",
                    "the family scroll hardened flat into a glowing shield inscribed with Rigvedic "
                    "verse, charging through dark-blue smoke-Sanskrit characters rewriting the air, "
                    "snow and ruin, defiant")]}),
            ("villain", "Avantivarman-Bhrasta", (
                "a refined corrupted chief-librarian, gentle affectionate eyes that hide a curator's "
                "fanaticism, smoke-stained hands, scholar's robes, seated on a broken pillar in snowy "
                "Awantipur ruins with a manuscript over a lit brazier, writing memory-erasing Sanskrit "
                "on the air with one finger, brilliant and damned, cold light"
            ), {"negative": "crude brute, bright cheerful, heroic glow, warm setting",
                "variants": [("weeping-reader",
                    "weeping as he reads aloud a founding charter of seventeen contradictory clauses "
                    "that unmakes his life's work, scroll trembling over a brazier in a half-collapsed "
                    "stone temple, anguished revelation")]}),
            ("ally", "Lalleshwari-Verse-Mystic", (
                "Lal Ded the barefoot Kashmiri mystic, ancient knowing eyes, clad only in a length of "
                "woven verse-cloth layered with vakhs, standing among purple saffron-crocus stalks at "
                "Pampore, a black-necked crane on her shoulder, timeless spiritual authority, soft "
                "autumn light"
            ), None),
            ("ally", "The-Ten-Thousand-Reciters", (
                "a vast peaceful procession of ordinary Kashmiris of every faith and trade weavers "
                "shikara-rowers saffron-farmers monks qawwals walking across snow reciting and "
                "singing to keep a memory alive, woollen phirans and shawls, breath misting, "
                "collective determination, white mountain light"
            ), None),
            ("animal", "Hangul-Kashmir-Stag", (
                "a hangul Kashmir stag, noble red-brown deer with branching antlers, stepping out of "
                "snowy silver birches with steam at its nostrils, reading tracks left months before, "
                "sacred lineage totem, cold clear light"
            ), None),
            ("animal", "Black-Necked-Crane", (
                "black-necked cranes, elegant pale-grey cranes with black necks and red crowns, "
                "wheeling in hundreds through thin clear air above a snowbound stone temple, calling "
                "across the cold, guardians of memory"
            ), None),
            ("relic", "Sharada-Founding-Scroll", (
                "the central founding charter scroll of Sharada-Pitha on a stone shelf, eight hundred "
                "years old, saffron ribbon between layered pages, the charter of seventeen "
                "contradictory founders, faintly glowing, sacred contested manuscript, cold temple "
                "light"
            ), None),
            ("environment", "Dal-Lake-Houseboat-Library", (
                "a Kashmiri houseboat library on mirror-still Dal Lake at dawn, walnut-wood shelves "
                "curling with the hull crammed with manuscripts and saffron-ribboned pages, "
                "reflections perfect on the water, intimate and sacred, soft golden light"
            ), None),
            ("environment", "Sharada-Pitha-Temple-Pass", (
                "the original Sharada Peeth, a nine-century stone temple half collapsed and half "
                "preserved by cold in a high snowbound pass, hundreds of black-necked cranes circling "
                "in glass-clear air, bright snow and stone, sacred and remote, epic matte painting"
            ), None),
            ("scene", "Scene-Read-It-Aloud", (
                "a final confrontation, a scholar-warrior facing a librarian across a lit brazier in "
                "a snowbound temple asking him to read a scroll aloud, ten thousand reciters waiting "
                "in the courtyard so it can never be burned, charged and quiet"
            ), None),
            ("scene", "Scene-The-March-Across-The-Passes", (
                "ten thousand ordinary Kashmiris walking across snowy mountain passes singing and "
                "reciting to carry a memory, a lone scholar at the front, black-necked cranes overhead, "
                "white peaks, an epic peaceful procession"
            ), None),
        ],
    },
]
