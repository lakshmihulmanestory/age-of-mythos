"""Chapter 1 - Northeast region (Pragjyotisha). 8 kingdoms.

Dedicated palettes:
  19 Arunodaya-Kshetra -> dawn rose-gold vs cave indigo-black (Arunachal Pradesh)
  20 Beyul-Kshetra      -> monk maroon-crimson + red-panda russet + prayer-flag (Sikkim)
  21 Dzukou-Rashtra     -> Naga red-black-white textile + valley green + lily (Nagaland)
  22 Megha-Maata        -> cloud silver-grey + living-root brown-green + lightning (Meghalaya)
  23 Sangai-Nata        -> Loktak lake-green + Manipuri dance gold-rose twilight (Manipur)
  24 Tlawmngaihna-Desh  -> bamboo jade-green + Mizo puan red stripes (Mizoram)
  25 Tri-Pura           -> tri-metal gold-silver-iron + sky-blue techno (Tripura)
  26 Ganda-Kshetra      -> muga-silk gold + Kaziranga grassland-green + rhino grey (Assam, invented)
"""

STORIES = [
    {
        "id": "19-arunodaya-kshetra",
        "chapter": 1,
        "region": "northeast",
        "kingdom": "Arunodaya-Kshetra",
        "state": "Arunachal Pradesh",
        "title": "The War Between Dawn and Night",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Arunachal Pradesh first-light fantasy, Adi and Mishmi cane-and-"
            "bamboo longhouses on misty ridges, dawn-versus-darkness motif, tribal dress with woven "
            "cane and hornbill-beak headgear, dawn rose-gold and amber palette in sharp duotone "
            "against cave indigo-black, sunrise-myth mood, highly detailed, intricate, volumetric "
            "dawn light, artstation, octane render, 8k"
        ),
        "color_theme": "sunrise rose-gold and amber, liquid-gold dawn, cave indigo-black and torch-orange, ridge-silhouette violet, hornbill yellow-and-black accent",
        "entities": [
            ("hero", "Udayagiri", (
                "an optimistic young Arunachali tribal warrior the Dawn-Walker, warm hopeful eyes, a "
                "gayal mithun tattoo, woven cane tribal dress with a hornbill-beak headpiece, holding "
                "a glowing dawn-spear that sheds liquid-gold light, standing at a dark cave mouth with "
                "sunrise spilling in behind him, radiant resolve, rose-gold light"
            ), {"negative": "grim, heavy armor, urban dress, dull lighting",
                "variants": [("forging-a-new-dawn",
                    "forging a fresh spear from dawn-light at the cave entrance at sunrise, light "
                    "gaining one inch into the darkness, hopeful and eternal")]}),
            ("villain", "Tamasi", (
                "a pale haunted Arunachali woman who rules a sunless cave kingdom, eyes that flinch "
                "from light, dark cave-dweller garb, wielding a night-staff that pours darkness like "
                "water extinguishing light, the hero's lost sister scarred by being taken at dawn, "
                "torch-lit cave, tragic menace"
            ), {"negative": "sunlit, cheerful, ornate robes, heroic glow",
                "variants": [("darkness-pours-out",
                    "striking a cave wall so darkness floods out like black water swallowing a dawn-"
                    "light, anguished scream, deep indigo-black with a dying gold edge")]}),
            ("ally", "Cave-Dweller-Children", (
                "pale cave-born Arunachali children raised in torchlight who have never seen the sun, "
                "cave-fish pallor, simple dark garb, watchful and wary in flickering torchlight, "
                "loyal to the night-queen, poignant"
            ), None),
            ("animal", "Great-Hornbill-Arunachal", (
                "a Great Hornbill spreading its massive black-and-white wings to warm them in the "
                "first sunrise on a misty Arunachal ridge, huge yellow casque-beak catching gold "
                "light, herald of the dawn"
            ), None),
            ("animal", "Gayal-Mithun", (
                "a gayal mithun, a powerful semi-wild bovine with short curved horns and a pale "
                "muzzle, standing in silhouette on a dawn ridge waiting to be painted in first light, "
                "sacred totem of the hills"
            ), None),
            ("weapon", "Dawn-Spear-And-Night-Staff", (
                "a paired set, a dawn-spear that glows with liquid-gold sunrise light and a black "
                "night-staff that drinks light into darkness, the two halves of a sibling war, "
                "displayed crossed, dramatic duotone light"
            ), None),
            ("environment", "Arunachal-First-Light-Hills", (
                "the hills of Arunachal Pradesh catching the first sunrise in India, mist-filled "
                "valleys turning to liquid gold, cane-and-bamboo longhouses on ridges, gayals in "
                "silhouette, hornbills warming their wings, serene and vast, epic matte painting"
            ), None),
            ("environment", "Border-Cave-Kingdom", (
                "a vast cave system beneath border mountains lit only by torches, a sunless underground "
                "kingdom of pale dwellers, a sharp physical line on the stone floor where dawn-light "
                "meets pure darkness, oppressive indigo-black"
            ), None),
            ("scene", "Scene-Battle-Of-The-Border-Cave", (
                "a duel split between light and dark inside a cave, half lit liquid-gold by a dawn-"
                "spear and half drowned in a night-staff's darkness, a brother and sister fighting "
                "across the boundary line, neither able to cross, charged"
            ), None),
            ("scene", "Scene-The-Dawn-Reaches-In", (
                "a hopeful tableau, a dawn-bearing brother standing at a cave mouth as sunrise gains "
                "one inch into the dark toward his light-fearing sister, hornbills circling outside, "
                "tender and unresolved"
            ), None),
        ],
    },
    {
        "id": "20-beyul-kshetra",
        "chapter": 1,
        "region": "northeast",
        "kingdom": "Beyul-Kshetra",
        "state": "Sikkim",
        "title": "The Monk, the Mountain, and the Thief",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Sikkim hidden-sacred-land fantasy, Buddhist gompa monastery "
            "architecture and Kanchenjunga snow-peaks, prayer-wheel-and-treasure motif, Bhutia "
            "monk maroon-and-saffron robes and prayer-flag colour, deep maroon-crimson palette with "
            "red-panda russet and prayer-flag flecks over snow-white, serene-power mood, highly "
            "detailed, intricate, volumetric mountain mist, artstation, octane render, 8k"
        ),
        "color_theme": "monk maroon-crimson and saffron, red-panda russet, prayer-flag five-colour flecks, Kanchenjunga snow-white and ice-blue, blood-pheasant red accent, gompa gold",
        "entities": [
            ("hero", "Kanchenjunga", (
                "a serene Sikkimese warrior-monk who embodies five virtues, calm compassionate face, "
                "shaven head, deep maroon-and-saffron monk robes, holding a prayer-wheel mace that "
                "spins to raise mantra-barriers of force, a red panda at his side, standing on a snowy "
                "mountain path below great peaks, gentle unshakeable strength, soft mist light"
            ), {"negative": "aggressive, heavy armor, urban dress, angry expression",
                "variants": [("mantra-barrier-defense",
                    "spinning his prayer-wheel mace to raise a glowing barrier of force inscribed with "
                    "mantras, never striking only defending, snow and prayer-flags whipping, radiant calm")]}),
            ("villain", "Yaksha-Nidhi", (
                "a restless treasure-thief drawn to all hidden things, sharp covetous eyes, traveler's "
                "dark layered garb hung with stolen relics, hands reaching for celestial treasures, "
                "standing on a high mountain path with empty grasping palms, neither cruel nor kind "
                "only hungry, cold light"
            ), {"negative": "content, peaceful, ornate royal robes, heroic glow",
                "variants": [("empty-hands-on-the-rock",
                    "sitting alone on a rock with empty hands, troubled, trying to understand why "
                    "emptiness no longer satisfies him, snow and grey stone, melancholy")]}),
            ("ally", "The-Waiting-Mother", (
                "an old Sikkimese Bhutia mother who has waited thirty-seven years for her monk son, "
                "weathered patient face, traditional bakhu dress, folding his red-panda-carried "
                "letters into prayer flags and hanging them in the wind, soft hearth and mountain "
                "light, quiet devotion"
            ), None),
            ("animal", "Red-Panda", (
                "a red panda, russet-and-cream fur with a ringed bushy tail and amber ancient eyes, "
                "perched in a mossy rhododendron tree in the snow carrying a rolled scroll in its "
                "mouth, knowing and sacred messenger"
            ), None),
            ("animal", "Blood-Pheasant", (
                "blood pheasants, plump high-altitude birds with crimson-streaked grey plumage and "
                "red faces, descending to lower snow as a sign the mountain's heights are disturbed, "
                "vivid red against white"
            ), None),
            ("weapon", "Prayer-Wheel-Mace", (
                "a prayer-wheel mace of warped sacred metal grown dense with centuries of spun "
                "mantras, engraved with Tibetan script that glows when spun, a weapon of defense never "
                "of harm, displayed against snow, dramatic gold rim light"
            ), None),
            ("environment", "Kanchenjunga-Five-Peaks", (
                "the five peaks of Kanchenjunga holding five sacred treasures, colossal snow summits "
                "above cloud, prayer flags strung across a ridge, a hidden sacred land, deity-mountain "
                "majesty, epic matte painting"
            ), None),
            ("environment", "Gompa-Monastery-Blizzard", (
                "a Sikkimese Buddhist gompa monastery clinging to a snowy slope in a blizzard, "
                "maroon-and-gold prayer halls, butter-lamps glowing in the storm, a red panda at the "
                "door with a scroll, sacred refuge"
            ), None),
            ("scene", "Scene-The-Question-On-The-Path", (
                "a monk with a spinning prayer-wheel mace and a red panda calmly questioning a "
                "treasure-thief on a snowy mountain path, no violence only a question that stops the "
                "thief cold, prayer-flags and peaks"
            ), None),
            ("scene", "Scene-Letters-Into-Prayer-Flags", (
                "a mother on a windswept ridge folding her son's letters into prayer flags and hanging "
                "them to carry his words to the mountain, snow and colour, tender and devotional"
            ), None),
        ],
    },
    {
        "id": "21-dzukou-rashtra",
        "chapter": 1,
        "region": "northeast",
        "kingdom": "Dzukou-Rashtra",
        "state": "Nagaland",
        "title": "The Dao and the Dream",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Nagaland warrior-valley fantasy, Naga morung log-houses and "
            "carved wooden totems, dao-and-tattoo motif, Naga warrior dress of red-black-white woven "
            "shawls headhunter headgear and tribal facial tattoos, bold Naga red-black-white textile "
            "palette over Dzukou-valley green with pale lily accents, evolved-warrior mood, highly "
            "detailed, intricate, volumetric valley mist, artstation, octane render, 8k"
        ),
        "color_theme": "Naga shawl crimson-red black and bone-white, Dzukou valley deep green, pale Dzukou-lily white-pink, dao steel-grey, skull-ivory, festival ochre",
        "entities": [
            ("hero", "Dzulevira", (
                "a formidable Naga woman warrior who refuses to kill, fierce serene eyes, a full-body "
                "gayal tattoo in geometric Naga patterns from neck to ankle, red-black-white woven "
                "Naga warrior shawl and beaded headgear, holding a sheathed dao machete, standing in "
                "the green Dzukou valley, the courage to endure rather than strike, misty green light"
            ), {"negative": "bloodthirsty, heavy plate armor, urban dress, plain skin",
                "variants": [("takes-the-blow",
                    "standing between two warring tribal groups with arms open and dao sheathed, "
                    "taking a blow without retaliating, her full-body tattoo glowing, shocked crowd, "
                    "festival firelight")]}),
            ("villain", "Ao-Rakshas", (
                "a vengeful spirit of the old headhunting ways, gaunt and proud, draped in ancient "
                "skull-necklaces and faded warrior regalia, standing among skull-trees on a high peak "
                "raising an army of headhunter ghosts, the rage of a dying warrior identity, cold "
                "mist, menacing"
            ), {"negative": "peaceful, modern, bright cheerful, heroic glow"}),
            ("ally", "Dzuleviras-Father", (
                "an old Naga warrior-father with a tattooed face that maps his youthful kills, proud "
                "weathered features, traditional shawl, watching his daughter from a festival crowd "
                "and finally understanding her evolved way, firelight, hard-won respect"
            ), None),
            ("ally", "Sixteen-Tribes-Council", (
                "representatives of sixteen Naga tribes seated in one council speaking as one for the "
                "first time, each in distinct red-black-white tribal shawls and headgear, dignified "
                "unity, carved morung interior, warm torchlight"
            ), None),
            ("animal", "Gayal-Naga", (
                "a gayal mithun bovine in geometric Naga-pattern context, powerful pale-muzzled body "
                "with short curved horns, sacred totem and measure of worth, standing in green valley "
                "mist"
            ), None),
            ("weapon", "Naga-Dao", (
                "a Naga dao, a heavy single-edged machete-sword with a broad blade and a carved "
                "wooden haft bound in red-and-black cane, kept sharp but never used on a person, "
                "displayed against woven shawl cloth, dramatic steel light"
            ), None),
            ("environment", "Dzukou-Valley", (
                "the Dzukou valley of Nagaland, rolling emerald grass-hills folded with seasonal "
                "streams, pale Dzukou lilies blooming late across the slopes, mist pooling in the "
                "folds, serene and ancient, epic matte painting"
            ), None),
            ("environment", "Saramati-Skull-Trees", (
                "the Saramati peak where skull-trees grow, gnarled trees draped with the bone-white "
                "skulls of ancient kills each whispering the pride of old ways, cold mist, eerie and "
                "sacred-grim"
            ), None),
            ("scene", "Scene-The-Hornbill-Festival-Frenzy", (
                "the Hornbill Festival erupting into a frenzy as an ancient warrior-urge surges "
                "through dancers, red-black-white shawls whirling, a marked warrior wading in to stop "
                "it without violence, firelight and chaos"
            ), None),
            ("scene", "Scene-Taking-A-Blow-Not-A-Head", (
                "the turning point, a full-body-tattooed warrior choosing to bleed rather than fight, "
                "taking a strike with open arms to break a frenzy, sixteen tribes watching in shock, "
                "courage redefined"
            ), None),
        ],
    },
    {
        "id": "22-megha-maata",
        "chapter": 1,
        "region": "northeast",
        "kingdom": "Megha-Maata",
        "state": "Meghalaya",
        "title": "The Serpent and the Root Bridge",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Meghalaya cloud-and-matriarchy fantasy, Khasi living-root bridges "
            "and bamboo houses over misty gorges, patience-versus-urgency motif, Khasi jainsem dress "
            "and woven shawls, cloud silver-grey palette with living-root brown-green and lightning "
            "blue-white, matrilineal-wisdom mood, highly detailed, intricate, volumetric cloud and "
            "rain, artstation, octane render, 8k"
        ),
        "color_theme": "cloud silver-grey and mist-white, living-root deep brown-green, gorge teal-shadow, lightning blue-white, clouded-leopard dappled grey-gold, monsoon slate",
        "entities": [
            ("hero", "Meghanadi", (
                "a wise strong Khasi woman warrior of a matriarchal land, steady patient eyes, a "
                "clouded-leopard tattoo, Khasi jainsem dress and woven shawl, holding a cloud-staff "
                "that draws lightning from perpetual storm-clouds, standing on a living-root bridge "
                "over a cloud-filled gorge, the builder who plants for the future, silver-grey light"
            ), {"negative": "impatient, heavy armor, urban dress, dry sunny setting",
                "variants": [("lightning-from-the-clouds",
                    "drawing a brilliant bolt down her cloud-staff from a storm above a deep gorge, "
                    "rain and mist, fierce maternal power")]}),
            ("villain", "U-Thlen", (
                "U Thlen a colossal serpent-demon pieced together from millions of blood-scales of "
                "corrupt bargains, glistening dark scales that absorb lightning, a mouth opening on "
                "pure darkness of every corrupt deal ever made, coiled across a root bridge over a "
                "cloud-gorge, whispering wealth-now temptation, menacing"
            ), {"negative": "small snake, cute, bright cheerful, heroic glow"}),
            ("ally", "Khasi-Grandmothers", (
                "Khasi grandmothers who plant living root bridges for grandchildren they will never "
                "meet, weathered patient faces, jainsem dress, guiding young fig-roots across a gorge "
                "frame, embodiment of generational patience, misty green light"
            ), None),
            ("ally", "Meghanadis-Daughter", (
                "a restless young Khasi woman, the heroine's daughter and heir of the matriline, "
                "torn between staying and leaving for Nagaland, jainsem dress, conflicted expression "
                "on a root bridge, soft mist"
            ), None),
            ("animal", "Clouded-Leopard", (
                "a clouded leopard, secretive cat with large cloud-shaped dappled grey-gold rosettes "
                "and a very long tail, screaming from a misty canopy tree, usually invisible now "
                "alarmed, sacred guardian"
            ), None),
            ("relic", "Living-Root-Bridge", (
                "a 500-year-old Khasi living-root bridge, the aerial roots of giant fig trees woven "
                "over generations into a strong living span across a deep cloud-filled gorge, moss and "
                "ferns on living wood, sacred patient architecture, soft green light"
            ), None),
            ("environment", "Meghalaya-Cloud-Gorges", (
                "Meghalaya the abode of clouds, deep emerald gorges where clouds are born inside the "
                "ravines, waterfalls plunging into mist, bamboo villages on ridges, living-root "
                "bridges spanning chasms, rain-washed and luminous, epic matte painting"
            ), None),
            ("environment", "Jaintia-Deep-Cave", (
                "the deepest cave of the Jaintia Hills where a blood-serpent reformed, dripping black "
                "limestone chambers, faint red glow on wet stone, claustrophobic and ominous"
            ), None),
            ("scene", "Scene-The-Roots-Hold-The-Serpent", (
                "a living root bridge slowly and inevitably wrapping its roots around a thrashing "
                "blood-serpent, not crushing but containing it the way a grandmother holds a screaming "
                "child, mist and lightning, patient triumph"
            ), None),
            ("scene", "Scene-Battle-Of-Timescales", (
                "a lightning-wielding matriarch facing a wealth-promising serpent across a root bridge "
                "over a cloud-gorge, urgency against patience, a bolt absorbed by blood-scales, tense "
                "stand"
            ), None),
        ],
    },
    {
        "id": "23-sangai-nata",
        "chapter": 1,
        "region": "northeast",
        "kingdom": "Sangai-Nata",
        "state": "Manipur",
        "title": "The Last Dance of the Sangai",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Manipur dance-and-water fantasy, Loktak Lake floating phumdi "
            "islands and Kangla-fort architecture, dance-as-combat motif, Manipuri dance costume "
            "kumil and potloi with Thang-Ta swords, Loktak lake-green palette with Manipuri-dance "
            "gold-and-rose at twilight, graceful-warfare mood, highly detailed, intricate, volumetric "
            "mist over water, artstation, octane render, 8k"
        ),
        "color_theme": "Loktak lake-green and phumdi reed-green, Manipuri-dance gold cream and rose-pink, twilight violet-blue, mist-white, sangai tawny, lai-haraoba firelight orange",
        "entities": [
            ("hero", "Moirangthem", (
                "a graceful Manipuri warrior-dancer, lithe and poised, a sangai-deer tattoo, dance-"
                "warrior attire with a wrapped waist-sash, twin Thang-Ta swords cutting arcs of light "
                "through mist, dancing-fighting on floating phumdi islands of Loktak Lake at twilight, "
                "where dance and combat blur, soft lake-green light"
            ), {"negative": "clumsy, heavy armor, urban dress, dry land",
                "variants": [("dance-that-undances",
                    "performing a precise counter-dance to overwrite a corrupted rhythm, twin swords "
                    "tracing luminous patterns over the lake, sangai deer dancing in a ring around "
                    "him, transcendent")]}),
            ("villain", "Thangjing-Lai", (
                "a corrupted antlered dance-god, tall and unnaturally graceful, a glamour that forces "
                "all who see it to dance until they drop, existing only in twilight never sunlight, "
                "antlers and flowing ritual garb, stepping into a festival firelight circle, beautiful "
                "and deadly, twilight"
            ), {"negative": "clumsy, sunlit daylight, ordinary clothing, heroic glow"}),
            ("ally", "Lai-Haraoba-Dancers", (
                "Manipuri villagers in dance costume at the Lai Haraoba festival honouring forest "
                "deities, gold-and-cream potloi skirts and headdresses, caught mid-dance around a "
                "fire, devotion turning to compulsion, firelight"
            ), None),
            ("animal", "Sangai-Dancing-Deer", (
                "a sangai brow-antlered deer, the dancing deer of Manipur, stepping delicately across "
                "floating phumdi vegetation so lightly it seems to dance on the water's surface, fewer "
                "than three hundred left, tawny and ethereal, misty twilight"
            ), None),
            ("animal", "Mrs-Humes-Pheasant", (
                "Mrs Hume's pheasant, a rare long-tailed pheasant with chestnut body white wing-bars "
                "and blue facial skin, emerging from hiding to watch a beautiful duel, vivid against "
                "reed-green"
            ), None),
            ("weapon", "Thang-Ta-Swords", (
                "a pair of Manipuri Thang-Ta swords, slender curved blades with cord-wound hilts and "
                "tassels, made for sweeping dance-like arcs, shown crossed and mid-motion trailing "
                "light, dramatic twilight rim light"
            ), None),
            ("environment", "Loktak-Floating-Lake", (
                "Loktak Lake at twilight, a vast freshwater lake covered in circular floating phumdi "
                "islands of matted vegetation, fishermen's floating huts, mist and gold-rose sky "
                "reflected, sangai deer in the distance, serene and unique, epic matte painting"
            ), None),
            ("environment", "Kangla-Fort-Twilight", (
                "the ancient Kangla fort of Manipur at twilight, royal ceremonial gateways with "
                "carved dragon-lion Kangla-Sha guardians, sacred precinct, violet-blue dusk, solemn"
            ), None),
            ("scene", "Scene-The-Duel-Of-Dancers", (
                "the most beautiful duel, a human warrior-dancer and a divine antlered dance-god "
                "moving in perfect opposition on floating islands of Loktak, steps so light the water "
                "barely ripples, rare pheasants watching, twilight mist"
            ), None),
            ("scene", "Scene-The-Sangai-Counter-Dance", (
                "three hundred endangered sangai deer dancing on the phumdi at twilight creating an "
                "uncorrupted divine rhythm to overwrite a dance-god's compulsion, antlered shadows in "
                "the mist, salvation or destruction"
            ), None),
        ],
    },
    {
        "id": "24-tlawmngaihna-desh",
        "chapter": 1,
        "region": "northeast",
        "kingdom": "Tlawmngaihna-Desh",
        "state": "Mizoram",
        "title": "The Man Who Could Not Refuse",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Mizoram self-sacrifice fantasy, Mizo bamboo hill-houses on "
            "terraced ridges, bamboo-resilience motif, Mizo dress of red-black-white striped puan "
            "textile, bamboo jade-green palette with warm puan-red stripes and cave-black, "
            "generosity-and-cost mood, highly detailed, intricate, volumetric hill mist, artstation, "
            "octane render, 8k"
        ),
        "color_theme": "bamboo jade-green and culm-yellow, Mizo puan red-black-white stripes, cave-black, mautam grey, hill-mist white, serow charcoal-brown accent",
        "entities": [
            ("hero", "Tlangvala", (
                "a gentle worn Mizo man warrior who cannot refuse a plea for help, kind exhausted "
                "eyes, a serow tattoo, red-black-white striped Mizo puan cloth, holding a bamboo "
                "staff, standing in the doorway of a bamboo hill-house giving away his last grain, "
                "self-sacrifice etched in his face, soft green hill light"
            ), {"negative": "selfish, heavy armor, urban dress, robust well-fed",
                "variants": [("learns-the-bamboo-way",
                    "training with a bamboo staff that bends absorbs and springs back, learning to "
                    "give everything and still return to his own shape, terraced green hills, quiet "
                    "resolve")]}),
            ("villain", "Chhinlung-Naag", (
                "Chhinlung-Naag a serpent the width of a river emerging from a bottomless cave mouth, "
                "dark coils vanishing into the earth, speaking in the voices of every dead Mizo "
                "ancestor calling the people underground, exploiting mercy as a weapon, oppressive "
                "cave-black, menacing"
            ), {"negative": "small, cute, bright daylight, heroic glow",
                "variants": [("army-of-need",
                    "conjuring psychic mirages of hungry women elders and hollow-eyed children at a "
                    "man's door, each a projection draining his strength, sorrowful and sinister")]}),
            ("ally", "Tlangvalas-Son", (
                "a frustrated loving young Mizo man, the hero's son, urging his father to stop giving "
                "everything away, modern-leaning simple dress with a puan touch, anguished concern, "
                "bamboo house interior"
            ), None),
            ("ally", "Pu-Vangchhia-Spirit", (
                "the ancestral spirit-pattern of Pu Vangchhia revealed in the grain of split bamboo, "
                "a faint glowing figure of an elder counselling resilience, soft green spectral light, "
                "wise"
            ), {"negative": "solid opaque body, bright colour"}),
            ("animal", "Serow", (
                "a serow, a stocky goat-antelope with coarse dark charcoal-brown fur and short horns, "
                "standing surefooted on an impossible cliff edge in hill mist, made for hard places, "
                "totem of endurance"
            ), None),
            ("weapon", "Bamboo-Staff", (
                "a Mizo bamboo fighting staff, a length of strong green-gold bamboo that bends absorbs "
                "force and springs back to its original shape, bound with red-black puan cord, "
                "displayed against woven cloth, dramatic green light"
            ), None),
            ("environment", "Mizoram-Bamboo-Hills", (
                "the bamboo hills of Mizoram, endless terraced ridges of jade-green bamboo forest "
                "wrapped in cloud, stilted bamboo houses, jhum terraces, serene and steep, epic matte "
                "painting"
            ), None),
            ("environment", "Chhinlung-Cave-Mouth", (
                "the legendary Chhinlung cave mouth, a deep opening in the earth where sound enters "
                "and never returns, a river-wide serpent emerging from the black, eerie and "
                "bottomless"
            ), None),
            ("scene", "Scene-The-Mautam-Famine", (
                "the Mautam bamboo famine, all the bamboo flowering at once and rats swarming the "
                "crops, a generous man giving away his last grain at the door while his own family "
                "weakens, grey sorrow and green bamboo"
            ), None),
            ("scene", "Scene-Battle-Of-The-Cave-Mouth", (
                "a bamboo-staff warrior facing a river-wide ancestral serpent at a bottomless cave "
                "mouth, the serpent asking for mercy he cannot refuse, hill mist and black void, "
                "tragic struggle"
            ), None),
        ],
    },
    {
        "id": "25-tri-pura",
        "chapter": 1,
        "region": "northeast",
        "kingdom": "Tri-Pura",
        "state": "Tripura",
        "title": "The Engineer and the Flying Cities",
        "modern_ok": True,  # mytho-engineering with flying fortresses and devices
        "style": (
            "cinematic concept art, Tripura mytho-engineering fantasy, Ujjayanta Palace white domes "
            "and bamboo-tech workshops, three-flying-cities motif of gold silver and iron, Tripuri "
            "risa-and-rignai dress fused with engineer's gear, tri-metal gold-silver-iron palette "
            "with sky-blue and bamboo-green, builder-versus-destroyer mood, highly detailed, "
            "intricate clockwork, volumetric sky light, artstation, octane render, 8k"
        ),
        "color_theme": "metallic gold silver and iron-grey, sky-blue and cloud-white, bamboo-green, Ujjayanta-palace ivory, blueprint cyan, brass warm accent",
        "entities": [
            ("hero", "Tripurari", (
                "a brilliant Tripuri engineer-warrior, sharp analytical eyes, a Phayre's-langur "
                "tattoo, Tripuri risa cloth worn with a tool-harness and engineer's gear, holding a "
                "Triyantra crossbow and a half-rolled blueprint, standing among bamboo-and-brass "
                "machinery before three small flying fortresses, the builder who defends, sky-blue "
                "light"
            ), {"negative": "brutish, heavy plate armor, magic-only, empty-handed",
                "variants": [("the-counter-towers",
                    "directing three grounded towers firing a counter-frequency beam at three aligning "
                    "flying fortresses of gold silver and iron, blueprint-cyan energy arcs, tense "
                    "engineering climax")]}),
            ("villain", "Tripura-Asura", (
                "a demon-engineer who builds weapons not defenses, hard inventive face, dark "
                "metal-plated garb hung with tools, commanding three reconstructed flying fortresses "
                "of gold silver and iron the size of boats, an alignment death-beam charging between "
                "them, brilliant and ruthless, metallic glow"
            ), {"negative": "primitive, kind, bright cheerful, heroic glow"}),
            ("ally", "Maharajas-Ghost-Inspector", (
                "the ghost of an old Tripura Maharaja walking a construction site at midnight checking "
                "foundations, regal translucent figure in royal Tripuri attire, anxious about whether "
                "the work is fast enough, faint blue spectral light"
            ), {"negative": "solid opaque body, daylight"}),
            ("ally", "Langur-Scouts", (
                "Tripuri scouts working with Phayre's langurs to track flying fortresses, scouts in "
                "risa cloth with spyglasses, langurs perched alongside, alert teamwork in the canopy, "
                "dappled light"
            ), None),
            ("animal", "Phayres-Langur", (
                "a Phayre's langur, an elegant spectacled leaf-monkey with white eye-rings and grey "
                "fur, perched in a canopy tracking shapes in the sky with intelligent spectacled eyes, "
                "vivid against green"
            ), None),
            ("animal", "Green-Imperial-Pigeon", (
                "green imperial pigeons, large pigeons with iridescent grey-green plumage, scattering "
                "in alarm from a leveled hilltop across three states carrying a warning, vivid against "
                "sky"
            ), None),
            ("weapon", "Triyantra-Crossbow", (
                "the Triyantra crossbow, an intricate triple-limbed mechanical crossbow of bamboo "
                "brass and steel that fires three bolts in alignment, finely engineered with visible "
                "gears, displayed on a workbench, dramatic warm light"
            ), None),
            ("environment", "Three-Flying-Cities", (
                "three flying fortress-cities of gold silver and iron the size of large boats "
                "circling above misty Tripura hills like mechanical moons, glowing alignment beam "
                "charging between them, mytho-engineering spectacle, sky-blue and metal, epic matte "
                "painting"
            ), None),
            ("environment", "Ujjayanta-Palace-Workshop", (
                "the white-domed Ujjayanta Palace of Tripura beside a vast bamboo-and-brass engineer's "
                "workshop, blueprints and clockwork models and half-built counter-towers, ivory and "
                "metal, ingenious and grand"
            ), None),
            ("scene", "Scene-The-Alignment-Beam", (
                "three flying fortresses aligning to fire a devastating beam that levels a hilltop, "
                "green imperial pigeons scattering, an engineer racing to finish counter-towers, "
                "blueprint-cyan and gold-silver-iron, urgent"
            ), None),
            ("scene", "Scene-The-Message-In-The-Sky", (
                "flying fortresses tracing flight paths that spell a threatening message across the "
                "sky, langurs decoding it from the canopy, an engineer looking up grimly, sky-blue "
                "and metal glint"
            ), None),
        ],
    },
    {
        "id": "26-ganda-kshetra",
        "chapter": 1,
        "region": "northeast",
        "kingdom": "Ganda-Kshetra",
        "state": "Assam",
        "title": "The Horn That Holds the River",
        "modern_ok": False,
        "style": (
            "cinematic concept art, Assam rhino-and-river fantasy, Kamakhya-temple and Ahom-dynasty "
            "architecture, Kaziranga grassland and Brahmaputra floodplain, horn-and-flood motif, "
            "Assamese muga-silk mekhela-chador dress with red-and-gold motifs, muga-gold palette with "
            "Kaziranga grassland-green and rhino-grey, guardian-of-the-floodplain mood, highly "
            "detailed, intricate, volumetric river haze, artstation, octane render, 8k"
        ),
        "color_theme": "muga-silk golden, Kaziranga grassland green and reed-gold, one-horned-rhino slate-grey, Brahmaputra silver-brown, Bihu red-and-white, monsoon teal accent",
        "entities": [
            ("hero", "Gandaki-Horn-Guardian", (
                "a powerful grounded Assamese woman warrior guardian of the floodplain, calm "
                "immovable eyes, a one-horned-rhino tattoo, golden muga-silk mekhela-chador with "
                "red-and-gold motifs worn for movement, carrying a horn-tipped spear, standing in "
                "tall Kaziranga elephant-grass before the Brahmaputra at dawn, steady protective "
                "strength, muga-gold light"
            ), {"negative": "frail, heavy plate armor, urban dress, dry desert",
                "variants": [("flood-stand-finale",
                    "standing unmoved in rising Brahmaputra floodwater beside a one-horned rhino as "
                    "the river surges, her rhino tattoo glowing, holding the line for her people, "
                    "monsoon spray")]}),
            ("villain", "Pralaya-Naga-Flood-Serpent", (
                "a vast river-serpent demon of the Brahmaputra flood, dark water-sheened coils the "
                "colour of silt, eyes like drowning whirlpools, rising from a swollen monsoon river "
                "to drown the grasslands, embodiment of devouring flood, menacing storm light"
            ), {"negative": "small, cute, calm clear water, heroic glow"}),
            ("ally", "Mahout-Of-Kaziranga", (
                "a steady Assamese mahout riding a working elephant through tall Kaziranga grass on "
                "anti-poaching patrol, gamosa cloth at the neck, watchful loyal bearing, dawn "
                "grassland light"
            ), None),
            ("ally", "Bihu-Drummer-Militia", (
                "Assamese village defenders who rally to Bihu dhol-drums, men and women in red-and-"
                "white Bihu dress with dhol drums and simple weapons, joyful fierce solidarity, "
                "grassland and bamboo behind"
            ), None),
            ("animal", "One-Horned-Rhinoceros", (
                "a great Indian one-horned rhinoceros of Kaziranga, massive armor-plated slate-grey "
                "hide in folds, single horn, standing in a misty grassland marsh at dawn, ancient and "
                "powerful, sacred totem"
            ), None),
            ("animal", "Bengal-Florican", (
                "a Bengal florican, a rare grassland bustard, the male black-and-white with a fine "
                "neck, leaping in its display flight over golden Kaziranga grass, vivid and "
                "endangered"
            ), None),
            ("weapon", "Horn-Tipped-Spear", (
                "a guardian's spear tipped with a rhino-horn-shaped blade of riverforged steel, haft "
                "wound in red-and-gold muga thread, made to hold a line against flood and poacher, "
                "displayed against silk, dramatic golden light"
            ), None),
            ("environment", "Kaziranga-Grassland-Floodplain", (
                "the Kaziranga floodplain of Assam, vast golden elephant-grass and reed marshes laced "
                "with Brahmaputra channels, one-horned rhinos and wild buffalo grazing in dawn mist, "
                "the great river silver beyond, epic matte painting"
            ), None),
            ("environment", "Kamakhya-Temple-On-The-Hill", (
                "the Kamakhya temple of Assam on a misty hill above the Brahmaputra, distinctive "
                "beehive-shaped Ahom-Kamarupa shikhara and red-painted shrine, pilgrims and red "
                "offerings, sacred and atmospheric, river haze"
            ), None),
            ("scene", "Scene-The-River-Rises", (
                "the Brahmaputra in monsoon flood as a silt-coloured serpent-demon rises to drown the "
                "grasslands, rhinos and people fleeing to high ground, a lone guardian standing firm "
                "in the rising water, dramatic"
            ), None),
            ("scene", "Scene-The-Horn-Holds-The-Line", (
                "a guardian and a one-horned rhino standing together holding back a flood-serpent "
                "before a village, muga-gold and grassland-green against storm-grey water, defiant "
                "protection"
            ), None),
        ],
    },
]
