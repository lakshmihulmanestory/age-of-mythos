"""Chapter 2 - Civil War (saga-wide arc). INVENTED packs grounded in the
chapter premise: the Void Maw opens; forgotten people return as Heralds with
wrong-direction shadows; signs cluster into a hawk-relay message "The mouth has
opened. The Council must sit"; kingdoms divide over how to respond.

These are pan-Bharatavarsha story packs, not per-kingdom (Ch2 has no per-kingdom
prose yet). Each has its own dedicated palette.
"""

STORIES = [
    {
        "id": "31-void-maw-opens",
        "chapter": 2,
        "region": "saga-wide",
        "kingdom": "The-Void-Maw",
        "state": "Bharatavarsha (pan-India)",
        "title": "The Mouth Has Opened",
        "modern_ok": False,
        "style": (
            "cinematic concept art, pan-Indian cosmic-horror mytho-fantasy, an unnatural rift in the "
            "sky over Indian temple-spires and landscapes, void-mouth motif, traditional Indian dress "
            "of many regions, void violet-black palette torn by magenta rift-light and wrong-angle "
            "shadow-grey, dread-and-omen mood, highly detailed, intricate, volumetric eerie light, "
            "artstation, octane render, 8k"
        ),
        "color_theme": "void violet-black, magenta rift-light, wrong-angle shadow-grey, chlorite ash-pale, cold star-white, ominous indigo",
        "entities": [
            ("villain", "The-Void-Maw", (
                "the Void Maw, a vast unnatural mouth-shaped rift torn open in the night sky above "
                "India, edges bleeding magenta and violet light into a black throat that swallows "
                "memory, faint stars wrong around it, casting wrong-angle shadows on the land below, "
                "cosmic dread, eerie glow"
            ), {"negative": "friendly, warm, natural sky, heroic glow, cute"}),
            ("villain", "Chlorite-Dust-Wave", (
                "a creeping wave of pale chlorite dust spreading across a broken throne-stone and "
                "temple ground, erasing colour and memory from everything it touches, an unnatural "
                "absence, cold pale-grey and magenta edge, unsettling"
            ), {"negative": "vibrant, warm, lush, heroic glow"}),
            ("hero", "Maw-Witness-Seer", (
                "an Indian seer-warrior who first reads the omen, weathered grave face, traditional "
                "regional Indian dress, looking up at a torn magenta rift in the sky with dread and "
                "resolve, a totem-tattoo glowing faintly, standing on a temple terrace, eerie violet "
                "light"
            ), None),
            ("ally", "Saga-Heroes-Gathering", (
                "a gathering of Indian totem-warriors from many regions drawn together by the omen, "
                "diverse regional dress and tattoos and weapons, standing together looking up at a "
                "magenta sky-rift, alliance forming, tense unity, violet light"
            ), None),
            ("animal", "Shadowless-Crow", (
                "an unnatural crow that casts a shadow falling in the wrong direction, glossy black "
                "feathers with a faint magenta sheen, perched on a chlorite-dusted throne-stone, an "
                "omen-bird of the Void Maw, eerie"
            ), {"negative": "ordinary cheerful bird, correct shadow"}),
            ("environment", "Broken-Throne-Stone", (
                "a great broken throne-stone in a ruined Indian assembly-hall coated in pale chlorite "
                "dust, a magenta sky-rift visible through the shattered roof, wrong shadows on the "
                "floor, ominous aftermath, eerie violet light, epic matte painting"
            ), None),
            ("environment", "Sky-Rift-Over-India", (
                "a vast magenta-and-violet void-rift torn across the night sky over a panorama of "
                "Indian temple-spires rivers and hills, wrong stars, the land lit in unnatural "
                "shadow-grey, cosmic-scale omen, epic matte painting"
            ), None),
            ("scene", "Scene-The-Maw-Opens", (
                "the moment the Void Maw tears open in the sky above a crowded Indian temple-city, "
                "people falling to their knees, chlorite dust beginning to spread, magenta light "
                "washing the land, awe and dread"
            ), None),
            ("scene", "Scene-The-Wrong-Shadow", (
                "a quiet horror, a figure in a dust-clean clearing whose shadow falls at the wrong "
                "angle as if lit from a direction the moon is not in, onlookers backing away, eerie "
                "pale light"
            ), None),
        ],
    },
    {
        "id": "32-the-heralds",
        "chapter": 2,
        "region": "saga-wide",
        "kingdom": "The-Heralds",
        "state": "Bharatavarsha (pan-India)",
        "title": "Remembered, Not Destroyed",
        "modern_ok": True,  # heralds return in clothing from many eras
        "style": (
            "cinematic concept art, pan-Indian uncanny-return fantasy, returned forgotten people "
            "standing in Indian streets temples and shores, herald motif, period-accurate Indian and "
            "colonial-era dress unaged but out of time, ashen-pale palette with off-direction shadow-"
            "blue and faded sepia and a magenta edge, melancholy-uncanny mood, highly detailed, "
            "intricate, volumetric soft light, artstation, octane render, 8k"
        ),
        "color_theme": "ashen pale-grey, off-direction shadow-blue, faded sepia period-cloth, magenta rift-edge, dawn pearl-grey, muted skin-warmth",
        "entities": [
            ("villain", "The-Herald-Child", (
                "a Herald, an Indian child of about five untouched by surrounding dust, clean clothes "
                "and hair, blank eyes that cannot remember a name, standing in the dust of a broken "
                "throne-stone, his shadow falling at a slightly wrong angle, uncanny and pitiable, "
                "pale eerie light"
            ), {"negative": "menacing monster, weapons, correct shadow, heroic glow"}),
            ("villain", "Vasco-Without-A-Ship", (
                "a Herald walking out of the surf at first light, an Indian-line sailor in unaged "
                "seventeenth-century white linen shirt and dark wool breeches salt-stained in a wrong "
                "pattern, dripping yet not gasping, unable to remember his name or ship, his shadow "
                "pointing wrong, melancholy-uncanny, dawn sea-light"
            ), {"negative": "aged decayed, gasping, correct shadow, monster"}),
            ("hero", "The-Namer", (
                "an Indian elder-warrior who kneels to give a Herald a name rather than a blade, "
                "compassionate steady face, traditional regional dress, reaching out a hand to a "
                "blank-eyed returned figure, the saga-rule of mercy embodied, soft pale light"
            ), None),
            ("ally", "Village-That-Receives", (
                "ordinary Indian villagers of mixed faiths gently receiving a confused Herald at a "
                "doorstep, simple regional dress, offering food and a name not violence, tender "
                "communal compassion, warm-against-pale light"
            ), None),
            ("animal", "Relay-Hawk", (
                "a swift Indian hawk carrying a small rolled message in its talons between kingdoms, "
                "barred brown-and-cream plumage, wings spread over a hazy landscape, the relay that "
                "carries the warning, vivid against pale sky"
            ), None),
            ("environment", "Old-Goa-Surf-Dawn", (
                "a pale dawn over Old Goa, whitewashed Portuguese church ruins above an empty bay, a "
                "single set of wet footprints leading from the surf, a lone out-of-time figure "
                "silhouetted, melancholy-uncanny, soft grey-gold light, epic matte painting"
            ), None),
            ("environment", "Assi-Ghat-Clear-River", (
                "the Ganga at Varanasi running impossibly glass-clear for one day, river-bottom and "
                "turtles visible from boat to bank, stunned crowds on the stone ghats, a small new "
                "shrine with a carved hoof-print, uncanny-sacred, pale clear light"
            ), None),
            ("scene", "Scene-A-Name-Is-Given", (
                "a kneeling elder giving a name to a blank-eyed Herald as a crowd lowers its weapons, "
                "the saga-rule that Heralds are remembered not destroyed, pale eerie light, "
                "compassion"
            ), None),
            ("scene", "Scene-The-Burnt-Squirrel-Nest", (
                "a place-sign of the Maw, a single squirrel-nest at the top of a Sahyadri ironwood "
                "tree burned from the inside out and room-temperature, the forest below untouched, no "
                "body no marks, a climber confirming it, eerie absence, misty green-grey light"
            ), None),
        ],
    },
    {
        "id": "33-the-council-must-sit",
        "chapter": 2,
        "region": "saga-wide",
        "kingdom": "The-Hawk-Relay-Council",
        "state": "Bharatavarsha (pan-India)",
        "title": "The Council Must Sit",
        "modern_ok": False,
        "style": (
            "cinematic concept art, pan-Indian council-of-kingdoms fantasy, a great assembly hall "
            "blending Indian regional architectures, hawk-relay-message motif, formal regional Indian "
            "court dress of thirty kingdoms, parchment-gold and council-bronze palette over storm-grey "
            "with a faint magenta omen-edge, grave-assembly mood, highly detailed, intricate, "
            "volumetric hall light, artstation, octane render, 8k"
        ),
        "color_theme": "parchment message-gold, council bronze and brass, storm-grey, deep assembly indigo, hawk brown-and-cream, faint magenta omen-edge",
        "entities": [
            ("hero", "Council-Convener", (
                "a grave commanding Indian leader convening the council, dignified weathered face, "
                "formal regional court dress with a totem emblem, holding up a small hawk-borne "
                "message scroll before a vast assembly, the weight of decision, bronze hall light"
            ), None),
            ("ally", "Thirty-Kingdom-Delegates", (
                "delegates of thirty Indian kingdoms seated in a great circular assembly, each in "
                "distinct regional court dress and totem emblems, diverse and tense, a council "
                "gathered against an omen, bronze-and-indigo hall light"
            ), None),
            ("ally", "Hawk-Relay-Riders", (
                "a relay of Indian riders and falconers passing a small message between kingdoms "
                "across mountains rivers and deserts, regional dress, hawks aloft, urgency across the "
                "land, storm light"
            ), None),
            ("animal", "Council-Hawk", (
                "a noble Indian hawk perched on a carved assembly-rail with a tiny message-scroll at "
                "its leg, sharp intelligent eyes, barred brown plumage, the courier of the council, "
                "bronze light"
            ), None),
            ("relic", "Hawk-Relay-Message", (
                "a small worn parchment scroll assembled from many kingdoms' signs reading the warning "
                "the mouth has opened the council must sit, archaic Indian script, faintly glowing at "
                "the edges, on a bronze tray, grave object"
            ), None),
            ("environment", "Grand-Assembly-Hall", (
                "a vast grand assembly hall blending pillared Indian regional architectures from many "
                "kingdoms, a great circular seating ring under a domed roof, thirty banners hanging, "
                "bronze lamps and storm-light through high windows, epic matte painting"
            ), None),
            ("environment", "Map-Of-The-Signs", (
                "a great carved relief-map of Bharatavarsha on a council floor with glowing marks "
                "where the Maw's signs appeared, lines of hawk-relay converging into a message, "
                "bronze and faint magenta light, strategic and grave"
            ), None),
            ("scene", "Scene-The-Signs-Converge", (
                "across a map of India dozens of scattered omen-signs connect by hawk-relay lines into "
                "a single converging message, delegates leaning in, bronze and magenta light, dawning "
                "alarm"
            ), None),
            ("scene", "Scene-The-Council-Convenes", (
                "thirty kingdoms' delegates rising together in a grand domed hall as the convener "
                "reads the hawk-relay warning aloud, banners and bronze lamps, grave historic unity"
            ), None),
        ],
    },
    {
        "id": "34-the-civil-war",
        "chapter": 2,
        "region": "saga-wide",
        "kingdom": "The-Divided-Kingdoms",
        "state": "Bharatavarsha (pan-India)",
        "title": "The Civil War",
        "modern_ok": False,
        "style": (
            "cinematic concept art, pan-Indian civil-war fantasy, kingdoms divided over how to face "
            "the Void Maw, banners-and-fracture motif, regional Indian warrior dress of opposing "
            "factions, split crimson-versus-indigo banner palette riven by a magenta crack and ash-"
            "grey, fratricidal-tragedy mood, highly detailed, intricate, volumetric battle dust, "
            "artstation, octane render, 8k"
        ),
        "color_theme": "faction crimson-red versus faction indigo-blue, magenta rift-crack, ash-grey and battle-dust, steel-silver, smoke-black, torn-banner gold",
        "entities": [
            ("hero", "The-Reconciler", (
                "an anguished Indian hero trying to hold two factions from war, a totem tattoo "
                "glowing, regional warrior dress without faction colours, standing between two armed "
                "lines with open arms under a magenta-cracked sky, desperate peace, ash light"
            ), {"negative": "gleeful warlike, single faction colour, heroic glow"}),
            ("villain", "The-Faction-Warlord", (
                "a hardened Indian warlord rallying one faction to strike first, fierce convinced "
                "eyes, crimson faction war-dress and totem emblem, raising a weapon before a banner-"
                "line, righteous fury that serves the Maw, smoke and ash light, menacing"
            ), {"negative": "peaceful, kind, bright cheerful, heroic glow"}),
            ("ally", "Crimson-Faction-Warriors", (
                "warriors of the crimson faction, regional Indian armor and dress unified by red "
                "sashes and a shared banner, disciplined and grim, advancing through battle-dust, "
                "tragic resolve"
            ), None),
            ("ally", "Indigo-Faction-Warriors", (
                "warriors of the indigo faction, regional Indian armor and dress unified by deep-blue "
                "sashes and a shared banner, facing their countrymen across a field, sorrowful "
                "determination, ash light"
            ), None),
            ("animal", "Carrion-Vultures", (
                "Indian vultures circling a divided battlefield under a magenta-cracked sky, broad "
                "dark wings, grim omen of fratricidal war, silhouetted against smoke"
            ), None),
            ("weapon", "Broken-Alliance-Banner", (
                "a torn unity-banner of thirty kingdoms split down the middle, gold thread frayed, "
                "lying in battle-dust between crimson and indigo lines, symbol of a sundered alliance, "
                "ash light"
            ), None),
            ("environment", "Divided-Battlefield", (
                "a wide Indian plain split by two facing armies under a magenta-cracked sky, crimson "
                "banners on one side indigo on the other, battle-dust and smoke between, fratricidal "
                "tragedy, epic matte painting"
            ), None),
            ("scene", "Scene-Brother-Against-Brother", (
                "countrymen of the same kingdoms facing each other across a dust-choked field in "
                "crimson and indigo, a lone reconciler between them with open arms, a magenta crack "
                "above, anguished standoff"
            ), None),
            ("scene", "Scene-The-Maw-Feeds-On-War", (
                "the Void Maw's magenta rift widening and brightening overhead as a civil-war "
                "battlefield rages below, the mouth feeding on the strife, dread and ash"
            ), None),
        ],
    },
]
