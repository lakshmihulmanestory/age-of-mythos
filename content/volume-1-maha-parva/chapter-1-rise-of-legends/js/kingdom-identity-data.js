// kingdom-identity-data.js — All 30 Kingdom Identities for Hulmane-The-Saga
// Combines CSV hero data with food, culture, emblem, and tattoo paths

window.KINGDOM_IDENTITY = [

  // ═══════════════════ SOUTH ═══════════════════

  {
    id: 'andhra-pradesh', state: 'Andhra Pradesh', region: 'south',
    kingdomName: 'Dharmakshetra Amaravati',
    theme: 'A river kingdom\'s daughter outrunning its own destruction',
    landscape: 'Krishna-Godavari river deltas — mangrove coasts — ancient Buddhist ruins',
    colors: { primary: '#44ff88', secondary: '#ffd700' },
    hero: { name: 'Krishnaveni', title: 'The River\'s Daughter', gender: 'female' },
    emblem: 'A leaping blackbuck silhouette over twin river waves — framed by a golden Kalamkari arch',
    animal: { name: 'Blackbuck', scientific: 'Antilope cervicapra', symbolism: 'Speed, grace, vigilance — the animal that outruns everything', power: 'Zigzag evasion — fluid as flowing water — no position can be held against her' },
    bird: { name: 'Indian Roller (Palapitta)', symbolism: 'Divine messenger — transformation — flash of colour in still air', role: 'Appears before river floods — omen of change — warns when river spirit is disturbed' },
    tattooPath: 'media/states/south/andhra-pradesh/stories/dharmakshetra-amaravati/tattoos/',
    dress: 'Deep blue battle-saree with gold Kalamkari borders — freshwater pearls in braided hair',
    culture: 'River trade civilisation — Kalamkari textile art — ancient Buddhist Amaravati heritage — classical Kuchipudi dance and river-goddess worship',
    food: ['Pesarattu (green moong crepe)', 'Gongura mutton curry', 'Pulihora (tamarind rice)', 'Royyala iguru (prawn curry)', 'Bobbatlu (sweet lentil flatbread)'],
    weapons: {
      ancient: { name: 'Vega and Tara', type: 'Twin Urumi whip-swords', ability: 'Dual-blade river current technique — cutting from impossible angles like water' },
      modern: { name: 'Storm-Vega and Nova-Tara', type: 'Smart drone-guided plasma energy whips', ability: 'AI targeting whips — homing — navigate around obstacles' }
    },
    vehicles: {
      ancient: { name: 'Vega-Naukha (River Wind Boat)', desc: 'A swift war-raft built from river-iron and bamboo shaped like a blackbuck\'s leap — flat-bottomed for fast river crossing with twin outriggers in blue Kalamkari. Steered using river current itself.' },
      modern: { name: 'Vega-Nadi Mk.II (Hydrofoil Strike Craft)', desc: 'A deep-blue hydrofoil jet-boat skimming at 180 km/h on foils. Hull painted with Kalamkari patterns doubling as reactive camouflage. Twin drone launchers built in.' }
    }
  },

  {
    id: 'telangana', state: 'Telangana', region: 'south',
    kingdomName: 'Chaya-Golkonda — The Shadow Fortress',
    theme: 'The hunter who became the hunted — a kingdom built on surveillance turns on itself',
    landscape: 'Deccan Plateau rocky outcrops — ancient forts — dappled forest light',
    colors: { primary: '#44ff88', secondary: '#f5a623' },
    hero: { name: 'Chittaranga', title: 'The Spotted Blade', gender: 'male' },
    emblem: 'A spotted deer mid-leap through a stone arch — surrounded by a ring of throwing discs',
    animal: { name: 'Spotted Deer (Axis Deer)', scientific: 'Axis axis', symbolism: 'Alertness, camouflage, beauty in danger — visible and invisible at once', power: 'Vibration-sensing through ground — knows every living thing within a mile' },
    bird: { name: 'Indian Roller (Palapitta)', symbolism: 'The watcher who sees all sides — shows its colours only in flight', role: 'Always watching before battle — circles once before a threat materialises' },
    tattooPath: 'media/states/south/telangana/stories/chaya-golkonda-shadow-fortress/tattoos/',
    dress: 'Light leather armor dyed forest green and brown — white ash dot face paint before battle',
    culture: 'Deccan fort culture — Bidriware metalwork craft — Perini martial dance — vast intelligence networks and espionage arts forged under the Kakatiya dynasty',
    food: ['Hyderabadi Dum Biryani', 'Sarva Pindi (rice-sesame pancake)', 'Boti curry (offal speciality)', 'Jonna rotte (sorghum flatbread)', 'Qubani ka meetha (apricot dessert)'],
    weapons: {
      ancient: { name: 'Chitra and Ranga', type: 'Twin returning throwing discs', ability: 'Boomerang throw from impossible angles — always returns — strikes simultaneously' },
      modern: { name: 'Chitra-AI and Ranga-AI', type: 'AI micro-guided smart discs with explosive return', ability: 'Homing discs with micro-course-correction — recalled mid-flight — target tracking' }
    },
    vehicles: {
      ancient: { name: 'Chitra-Vahana (The Spotted Mount)', desc: 'A single trained spotted deer named Chitta — no chariot, no saddle. Chittaranga grips with his knees. The deer changes direction seventeen times per second.' },
      modern: { name: 'Chaya-Vega Mk.II (Adaptive Stealth Motorcycle)', desc: 'A matte-black stealth motorcycle with spotted-pattern adaptive camouflage that mimics the environment in real time. Completely silent on electric — disappears into traffic within seconds.' }
    }
  },

  {
    id: 'tamil-nadu', state: 'Tamil Nadu', region: 'south',
    kingdomName: 'Sangam Tamilakam — The Eternal Assembly',
    theme: 'A flower that blooms once in twelve years — and when it does the mountain shakes',
    landscape: 'Nilgiri mountain range — sheer peaks — rare alpine forests',
    colors: { primary: '#44ff88', secondary: '#9b59b6' },
    hero: { name: 'Kurinjiselvi', title: 'The Mountain Bloom', gender: 'female' },
    emblem: 'A Nilgiri Tahr standing on a sheer cliff peak — framed by twelve kurinji flowers in bloom',
    animal: { name: 'Nilgiri Tahr', scientific: 'Nilgiritragus hylocrius', symbolism: 'Perseverance, sure-footedness, rare beauty — exists only where others cannot climb', power: 'Terrain-mastery — fights in three dimensions — the mountain becomes her weapon' },
    bird: { name: 'Emerald Dove (Maragatha Puraa)', symbolism: 'The dove that lives only in deep unbroken forest — beauty that exists only where humans haven\'t destroyed', role: 'Appears when the mountain is about to reveal something — she follows it to the right rock ledge' },
    tattooPath: 'media/states/south/tamil-nadu/stories/sangam-tamilakam/tattoos/',
    dress: 'Mountain goat hide armor reinforced with Nilgiri iron — short practical hair — weathered bronze skin',
    culture: 'Sangam poetry civilisation — hill tribe shamanic traditions — Bharatanatyam classical dance — sacred kurinji flower festivals every twelve years',
    food: ['Chettinad chicken curry', 'Idli-Sambar', 'Pongal with ghee', 'Rasam', 'Murukku and Kozhukattai'],
    weapons: {
      ancient: { name: 'Kurinji', type: 'Crescent-bladed mountain staff', ability: 'Rockslide trigger — narrow pass control — high ground weapon' },
      modern: { name: 'Kurinji Mk.II', type: 'Seismic terrain control staff', ability: 'Environmental mapping — triggers controlled geological events — mountain as weapon' }
    },
    vehicles: {
      ancient: { name: 'Parvat-Vahan (Mountain Carrier)', desc: 'A high-altitude war platform carried by eight hill-tribe warriors across terrain no wheeled vehicle can reach. Doubles as a siege platform placed against cliff faces.' },
      modern: { name: 'Kurinji-Ratha (Mountain ATV)', desc: 'A single-pilot armored all-terrain vehicle with vertical cliff capability using magnetic track adhesion. Deep purple finish with kurinji flower inlay. Designed to drive up a 90-degree cliff face.' }
    }
  },

  {
    id: 'kerala', state: 'Kerala', region: 'south',
    kingdomName: 'Parashurama-Kshetra — The Axe-Born Land',
    theme: 'The sea gave back what the axe claimed — and now the sea wants it returned',
    landscape: 'Kerala coastline — backwaters — temple elephant traditions — Kalaripayattu training grounds',
    colors: { primary: '#44ff88', secondary: '#e74c3c' },
    hero: { name: 'Parashurama', title: 'The Axe Reborn', gender: 'male' },
    emblem: 'A great temple elephant bearing a gilded axe — standing in a backwater reflection — framed by a Theyyam fire crown',
    animal: { name: 'Indian Elephant', scientific: 'Elephas maximus indicus', symbolism: 'Wisdom, memory, unstoppable force', power: 'Gaja-Trance — channelling the memory of a thousand battles — fighting with the history of every elephant that ever fought' },
    bird: { name: 'Malabar Pied Hornbill (Vezhambal)', symbolism: 'Sacred — appears on temple eaves — patience that produces greatness', role: 'Appears when a long-kept promise is about to be tested — circles the arena before any great trial' },
    tattooPath: 'media/states/south/kerala/stories/parashurama-kshetra/tattoos/',
    dress: 'White mundu reinforced with chainmail — thick beard streaked premature grey — massive physical presence — arms scarred from Kalaripayattu training',
    culture: 'Temple elephant traditions — Kalaripayattu martial art (India\'s oldest) — backwater trade culture — Theyyam ritual dance and Mohiniyattam performance',
    food: ['Puttu with kadala curry', 'Appam with coconut stew', 'Malabar biryani', 'Karimeen pollichathu (pearl spot fish)', 'Sadya feast on banana leaf'],
    weapons: {
      ancient: { name: 'Parashu', type: 'Great meteor-iron axe', ability: 'Splits stone — parts water — the axe that reshaped geography — has memory of every battle' },
      modern: { name: 'Parashu Mk.II', type: 'Gravity-enhanced plasma axe with orbital strike capability', ability: 'Gravitational amplifier — hits harder than physics should allow — orbital backup strike mode' }
    },
    vehicles: {
      ancient: { name: 'Kala-Gaja (The Black Temple War Elephant)', desc: 'A massive black temple elephant named Shaasthi — one of the last descendants of the lineage Parashurama\'s family has tended for forty generations. Full Kerala temple elephant regalia — gold caparison, bells at every leg.' },
      modern: { name: 'Gaja-Ratha Mk.II (Armored War Elephant Transport)', desc: 'A massive APC shaped after elephant anatomy — rounded frontal armor for ramming. Seismic sensors in the tracks replicate the elephant\'s ground-reading ability. Weighs 18 tonnes.' }
    }
  },

  {
    id: 'karnataka', state: 'Karnataka', region: 'south',
    kingdomName: 'Vijayanagara Reborn',
    theme: 'A buried empire discovered beneath serpent-guarded stone',
    landscape: 'Western Ghats — Hampi ruins — Tungabhadra riverbank — hidden underground temple systems',
    colors: { primary: '#44ff88', secondary: '#ffd700' },
    hero: { name: 'Tungabhadra', title: 'The River Queen', gender: 'female' },
    emblem: 'A female elephant rising from temple ruins — jasmine flowers woven into its caparison — a golden serpent coiled at its feet',
    animal: { name: 'Indian Elephant', scientific: 'Elephas maximus indicus', symbolism: 'Nurture, strength, community', power: 'Reads the battlefield through vibrations — sensing movement before she sees it — Hampi\'s memory runs through her' },
    bird: { name: 'Indian Roller (Neelakantha)', symbolism: 'Sacred to Shiva — transformation — the flash of the divine in still forest air', role: 'Appears when a buried truth is about to surface — always seen just before the cobras lead her deeper' },
    tattooPath: 'media/states/south/karnataka/stories/vijayanagara-reborn/tattoos/',
    dress: 'Bronze-plated armor echoing elephant hide — ornate gold Vijayanagara jewelry — jasmine flowers braided into hair even before combat',
    culture: 'Vijayanagara Empire heritage — Hoysala temple architecture — Yakshagana folk theatre — ancient engineering traditions and serpent-guardian mysticism',
    food: ['Bisi Bele Bath', 'Ragi mudde with mutton saaru', 'Udupi masala dosa', 'Coorgi pandi curry (pork)', 'Obbattu (sweet lentil flatbread)'],
    weapons: {
      ancient: { name: 'Gajadanda', type: 'War mace topped with a bronze elephant head', ability: 'Seismic strike — sends shockwave through stone floors — the sound alone breaks formation' },
      modern: { name: 'Gaja-Ratha (Seismic Command Mace)', type: 'Vibration-frequency impact staff', ability: 'Resonance weapon — matched to the frequency of different materials — shatters walls without touching them' }
    },
    vehicles: {
      ancient: { name: 'Gajashri-Ratha (The Sacred Elephant Chariot)', desc: 'A vast war chariot pulled by four royal elephants in full Vijayanagara caparison — the chariot platform can carry twelve warriors and functions as a mobile command fort.' },
      modern: { name: 'Gaja-Ratha (Seismic Command Vehicle)', desc: 'A heavy command vehicle with seismic pulse emitters built into the undercarriage — it maps underground structures as it drives, and was instrumental in locating the buried temple system.' }
    }
  },

  // ═══════════════════ WEST ═══════════════════

  {
    id: 'maharashtra', state: 'Maharashtra', region: 'west',
    kingdomName: 'Swarajya Sahyadri — The Free Mountains',
    theme: 'The fortress walls keep falling and she keeps building them back up',
    landscape: 'Western Ghats hill forts — Sahyadri canopy — Konkan coast',
    colors: { primary: '#ff8c00', secondary: '#c0392b' },
    hero: { name: 'Shivagati', title: 'The Mountain Dancer', gender: 'female' },
    emblem: 'A giant squirrel mid-leap between two hill fort towers — Maratha saffron pennant streaming behind',
    animal: { name: 'Indian Giant Squirrel', scientific: 'Ratufa indica', symbolism: 'Agility, resourcefulness, vibrant energy — moves through the canopy like thought through a mind', power: 'Extreme vertical combat — fights in three dimensions — opponents can never land where she was a moment ago' },
    bird: { name: 'Yellow-footed Green Pigeon (Hariyal)', symbolism: 'The bird that never touches the ground — fort to fort — never captured', role: 'Carries messages between forts — appears when Shivagati needs to know where not to stand' },
    tattooPath: 'media/states/west/maharashtra/stories/swarajya-sahyadri/tattoos/',
    dress: 'Light flexible armor dyed maroon-orange-cream (Malabar squirrel tri-colour) — wild dark curls streaked with russet-orange',
    culture: 'Hill fort warrior culture — Warkari pilgrimage tradition — Lavani folk dance — legacy of Shivaji\'s guerrilla mountain warfare',
    food: ['Vada Pav', 'Puran Poli (sweet flatbread)', 'Kolhapuri chicken', 'Misal Pav (spiced sprout curry)', 'Pithla Bhakri (chickpea gravy with millet bread)'],
    weapons: {
      ancient: { name: 'Vanara (Monkeys)', type: 'Climbing hooks doubling as slashing weapons', ability: 'Grapple-and-slash — three-dimensional combat — enemies have no reference for where the next strike comes from' },
      modern: { name: 'Vanara-Net Mk.II', type: 'Magnetic grapple-wire combat system', ability: 'Electromagnetically-anchored hooks — swing-and-strike in urban environments — wall-traversal in under three seconds' }
    },
    vehicles: {
      ancient: { name: 'Vanara-Jaal (The Monkey Network)', desc: 'Not one vehicle but a network — a series of rope-bridges, pulleys and ziplines built between seventeen hill forts. Shivagati can travel 40 km through the Sahyadri without touching the ground.' },
      modern: { name: 'Vanara-Vega Mk.II (Magnetic Wall-Climbing Bike)', desc: 'A lightweight motorcycle with electromagnetic track wheels that can drive on vertical surfaces. Tri-colour camouflage matches the giant squirrel\'s coat. Whisper-quiet on electric.' }
    }
  },

  {
    id: 'gujarat', state: 'Gujarat', region: 'west',
    kingdomName: 'Simha-Dwara — The Lion\'s Gate',
    theme: 'The last lion kingdom — sovereign, dangerous, and watching everything',
    landscape: 'Gir Forest — Rann of Kutch salt desert — Arabian Sea coast — Somnath temple plains',
    colors: { primary: '#ff8c00', secondary: '#f39c12' },
    hero: { name: 'Simhavikrama', title: 'The Lion\'s Roar', gender: 'male' },
    emblem: 'An Asiatic lion rearing on its hind legs — golden mane ablaze — Gir forest arch behind — sun disc above',
    animal: { name: 'Asiatic Lion', scientific: 'Panthera leo persica', symbolism: 'Sovereignty, courage, dominance — the last lion kingdom', power: 'The roar that carries the lion-bond\'s power — lesser warriors freeze in terror — frontal assault that cannot be stopped' },
    bird: { name: 'Greater Flamingo (Flamingo)', symbolism: 'The bird that thrives where nothing else can — Kutch salt flat survivor — beauty from desolation', role: 'Seen in massive flocks on the Rann the night before Simhavikrama makes any irreversible decision' },
    tattooPath: 'media/states/west/gujarat/stories/simha-dwara/tattoos/',
    dress: 'Burnished gold armor over traditional Gujarati garments — magnificent mane of hair refused to cut — thick beard framing a jaw carved from sandstone',
    culture: 'Maritime trade civilisation — Garba-Dandiya festival dance — intricate Patola silk double-weave — sacred Dwarka and Somnath pilgrimage tradition',
    food: ['Dhokla', 'Thepla with mango pickle', 'Undhiyu (winter vegetable casserole)', 'Gujarati thali', 'Fafda-Jalebi breakfast'],
    weapons: {
      ancient: { name: 'Simhagarjana (The Lion\'s Roar)', type: 'Massive broadsword — too heavy for most warriors to lift', ability: 'Overwhelming frontal strike — the sound of its swing alone stuns — no dodge, only power' },
      modern: { name: 'Simha-Garjana Mk.II', type: 'Sonic-amplified plasma broadsword', ability: 'Strike emits a sonic shockwave — amplified by the lion-bond — enemy formation breaks before blade lands' }
    },
    vehicles: {
      ancient: { name: 'Simha-Ratha (The Lion\'s War Chariot)', desc: 'A gold-plated war chariot drawn by two trained Asiatic lions — Vega and Krodha — the only war-trained lions in all of Bharata. Built low and fast for Gir Forest terrain. Simhavikrama\'s roar from the chariot doubles in sonic amplification.' },
      modern: { name: 'Simha-Vahana Mk.II (Golden Command SUV)', desc: 'A gold-armored command vehicle with lion-roar sonic emitters built into the grille. Active terrain scanner for Gir-forest and Kutch-terrain navigation. The most recognisable vehicle in the west — no one mistakes it for anything else.' }
    }
  },

  {
    id: 'goa', state: 'Goa', region: 'west',
    kingdomName: 'Samudra-Dvipa — The Ocean\'s Island',
    theme: 'The sea has no walls — and neither does he',
    landscape: 'Arabian Sea coast — underwater cave networks — spice trade ports',
    colors: { primary: '#ff8c00', secondary: '#3498db' },
    hero: { name: 'Sagaradeva', title: 'The Ocean\'s Chosen', gender: 'male' },
    emblem: 'A Gaur bull rising from ocean waves — ship\'s anchor crown above — nautical compass rose beneath',
    animal: { name: 'Gaur (Indian Bison)', scientific: 'Bos gaurus', symbolism: 'Endurance, coastal strength, quiet power — unstoppable once in motion', power: 'Naval combat dominance — uses vessel\'s motion, ropes, masts and sea itself as weapons' },
    bird: { name: 'Ruby-throated Yellow Bulbul', symbolism: 'The coastal singer — heard before storms, silent at calm sea', role: 'Sings at harbour the night before safe passage — goes silent when waters are dangerous' },
    tattooPath: 'media/states/west/goa/stories/samudra-dvipa/tattoos/',
    dress: 'Loose sailor\'s garments over light armor — gold earring in left ear (storm-survivor mark) — always salt-stained',
    culture: 'Coastal fishing and seafaring — Konkani culture blended with Portuguese maritime tradition — Goan carnival — spice trade legacy and ancient cave temples',
    food: ['Fish curry rice (Xitt Kodi)', 'Pork vindaloo', 'Bebinca (coconut layer cake)', 'Prawn rawa fry', 'Chouriço with bread'],
    weapons: {
      ancient: { name: 'Samudra and Lahara', type: 'Naval cutlass and weighted wave-chain', ability: 'Sea-rhythm combat — uses ship motion — chain wraps and pulls enemies overboard' },
      modern: { name: 'Samudra-Jaal Mk.II', type: 'Pressurised hydro-lance and sonar net system', ability: 'Underwater strike — sonic net disables engines — works equally in salt and fresh water' }
    },
    vehicles: {
      ancient: { name: 'Samudra-Dhow (The Ocean\'s Pearl Ship)', desc: 'A three-masted war dhow carrying a gaur-head ram at the prow. Sails of woven Goan silk — hard as canvas, light as cloth. Can navigate the underwater cave passages of the Goan coast that no other vessel can enter.' },
      modern: { name: 'Samudra-Vahana Mk.II (Fast Attack Hydrocraft)', desc: 'A low-profile attack hydrofoil that can transition from sea surface to submarine mode in forty seconds. Built for the cave-network passages — narrower than any other naval vessel in the saga.' }
    }
  },

  {
    id: 'rajasthan', state: 'Rajasthan', region: 'west',
    kingdomName: 'Maru-Maya — The Desert Illusion',
    theme: 'In the desert everything is a mirage — including her',
    landscape: 'Thar Desert — ancient fort cities — salt lake mirages — camel trade routes',
    colors: { primary: '#ff8c00', secondary: '#e67e22' },
    hero: { name: 'Mrigatrishna', title: 'The Mirage Walker', gender: 'female' },
    emblem: 'A chinkara gazelle stepping through a desert mirage — mirror-shield behind — Rajput sun symbol above',
    animal: { name: 'Chinkara (Indian Gazelle)', scientific: 'Gazella bennettii', symbolism: 'Deception, speed in desolation, beauty that survives impossibility', power: 'Deception-based combat — smoke bombs, mirrors, decoys — strikes from where she isn\'t' },
    bird: { name: 'Great Indian Bustard (Godawan)', symbolism: 'The rarest bird — extinction-edge survivor — seen only by those the desert trusts', role: 'Appears only when Mrigatrishna faces a genuine existential threat — otherwise never shows itself' },
    tattooPath: 'media/states/west/rajasthan/stories/maru-maya/tattoos/',
    dress: 'Flowing desert robes that shift colour in different light — often veiled — employs dust and fabric as combat tools',
    culture: 'Desert warrior culture — Ghoomar festival dance — miniature painting tradition — bardic storytelling and Rajput chivalry code',
    food: ['Dal Baati Churma', 'Laal Maas (fiery red mutton)', 'Ghewar (disc-shaped honey sweet)', 'Ker sangri (desert berry-bean dish)', 'Bajra roti with ghee and jaggery'],
    weapons: {
      ancient: { name: 'Maru-Maya (Desert Illusion)', type: 'Mirrored dagger and alchemical smoke powder pouch', ability: 'You see her where she isn\'t — by the time you correct, the dagger is already placed' },
      modern: { name: 'Maru-Jaal Mk.II', type: 'Holographic projection array with mono-filament blades', ability: 'Generates twelve simultaneous false targets — the real one is never the one you attack' }
    },
    vehicles: {
      ancient: { name: 'Maru-Ratha (The Mirage Chariot)', desc: 'A sand-coloured chariot draped in mirror-cloth that reflects the desert so perfectly it disappears in full daylight. Pulled by two chinkara-gaited war horses trained to move without raising dust.' },
      modern: { name: 'Maru-Vega (Desert Phantom SUV)', desc: 'An adaptive camouflage desert vehicle — active surface panels change colour and texture to match terrain. Thermal-suppression system makes it invisible to infrared. Runs silent on sand-tyres.' }
    }
  },

  // ═══════════════════ EAST ═══════════════════

  {
    id: 'west-bengal', state: 'West Bengal', region: 'east',
    kingdomName: 'Sundara-Vana — The Beautiful Forest',
    theme: 'The mangroves remember everything the sea tries to wash away',
    landscape: 'Sundarbans mangrove delta — Bengal Bay coast — tidal forest waterways',
    colors: { primary: '#44aaff', secondary: '#2ecc71' },
    hero: { name: 'Sundarvani', title: 'The Mangrove Keeper', gender: 'female' },
    emblem: 'A fishing cat leaping across mangrove roots — Bengal blue water below — lotus frame above',
    animal: { name: 'Fishing Cat', scientific: 'Prionailurus viverrinus', symbolism: 'Ambush, water combat, explosive precision — beautiful and utterly deadly', power: 'Strikes from water with explosive speed — uses tide and terrain to trap opponents before they know the fight has started' },
    bird: { name: 'White-throated Kingfisher (Halcyon smyrnensis)', symbolism: 'The plunge that commits completely — no half-measure — hits the water and comes back with what it needs', role: 'Dives into the waterway just before Sundarvani strikes — the distraction that costs enemies everything' },
    tattooPath: 'media/states/east/west-bengal/stories/sundara-vana/tattoos/',
    dress: 'Practical waterproof clothing for mud and salt water — hooded mangrove-fibre cloak — bare feet permanently calloused from tidal rock',
    culture: 'Mangrove delta civilisation — Durga Puja grand tradition — Baul mystic music — Rabindranath Tagore\'s literary renaissance heritage and Bengal terracotta temple art',
    food: ['Hilsa (Ilish) fish curry', 'Kosha Mangsho (slow-cooked mutton)', 'Mishti doi (sweet yoghurt)', 'Rosogolla', 'Sandesh (cottage cheese sweet)'],
    weapons: {
      ancient: { name: 'Jal-Jaal (Water Web)', type: 'Retractable spear-net combination', ability: 'Net traps in water — spear finishes on land — dual environment lethality' },
      modern: { name: 'Jal-Jaal Mk.II', type: 'Sonar-guided tidal net with carbon-fibre spear', ability: 'Maps tidal flow in real time — net deploys along current path — impossible to escape once triggered' }
    },
    vehicles: {
      ancient: { name: 'Jal-Nauka (The Water Web Boat)', desc: 'A flat-bottomed mangrove punt that navigates the Sundarbans tidal channels no other vessel can enter. Covered in fishing-cat-brown camouflage bark. Silent on the water — no oars, steered by pole.' },
      modern: { name: 'Jal-Vahana (Amphibious Assault Craft)', desc: 'An amphibious vehicle that transitions between water and mud-flat terrain seamlessly. Sonar-mapped Sundarbans navigation. Invisible to satellite due to mangrove-canopy routing system.' }
    }
  },

  {
    id: 'odisha', state: 'Odisha', region: 'east',
    kingdomName: 'Kalinga-Chakra — The Wheel of Kalinga',
    theme: 'The wheel turns — what was conquered becomes the conqueror',
    landscape: 'Odisha coast — Puri temple plains — Eastern Ghats forest — Chilika Lake delta',
    colors: { primary: '#44aaff', secondary: '#f39c12' },
    hero: { name: 'Jagannathi', title: 'The Wheel Bearer', gender: 'female' },
    emblem: 'A sambar deer running inside a chakra wheel — Konark sun wheel behind — ocean horizon beneath',
    animal: { name: 'Sambar Deer', scientific: 'Rusa unicolor', symbolism: 'Endurance, momentum, the pursuit that never stops', power: 'Outlasts all opponents — runs for days without rest — spinning chakram combat style born from the turning chariot wheel' },
    bird: { name: 'Indian Roller (Neelakantha)', symbolism: 'Sacred to the Jagannath temple — the wheel of colour in the sky', role: 'Circles the Puri temple on festival days — appears before Jagannathi makes any judgment that cannot be reversed' },
    tattooPath: 'media/states/east/odisha/stories/kalinga-chakra/tattoos/',
    dress: 'Sambalpuri saree with geometric patterns worn even in combat — hands rough from years of chakram throwing',
    culture: 'Jagannath Rath Yatra chariot festival — Odissi classical dance — Pattachitra scroll painting — ancient Kalinga maritime empire heritage',
    food: ['Dalma (dal with vegetables and coconut)', 'Pakhala bhat (fermented rice — summer staple)', 'Chhena poda (caramelised cottage cheese)', 'Machha besara (mustard fish curry)', 'Rasabali (deep-fried cottage cheese in sweet milk)'],
    weapons: {
      ancient: { name: 'Ratha', type: 'Massive wheel-shaped chakram sharp enough to cut stone', ability: 'Spinning combat style — the wheel that was once crushed by Kalinga now crushes back' },
      modern: { name: 'Ratha Mk.II', type: 'Gyroscopic energy disc with return guidance', ability: 'Gyroscopic stabiliser for curved flight paths — returns on pre-set arc — multiple in-air simultaneously' }
    },
    vehicles: {
      ancient: { name: 'Dharma-Ratha (The Chariot of the Wheel)', desc: 'A war chariot styled after the Konark Sun Temple wheel — twelve spokes, each carrying a different weapon. The wheel design is both structural and symbolic — it is also the vehicle\'s primary weapon.' },
      modern: { name: 'Dharma-Chakra (Armored Wheel Vehicle)', desc: 'A gyroscope-stabilised armored vehicle that can travel on two wheels — faster and more agile than any four-wheeled equivalent. The wheel design generates kinetic energy on movement, powering the weapon systems.' }
    }
  },

  {
    id: 'bihar', state: 'Bihar', region: 'east',
    kingdomName: 'Vajra-Bhumi — The Thunderbolt Land',
    theme: 'The force that cannot be refined — only wielded or broken',
    landscape: 'Gangetic plains — ancient Nalanda ruins — Bodh Gaya pilgrim routes',
    colors: { primary: '#44aaff', secondary: '#e74c3c' },
    hero: { name: 'Vajramukha', title: 'The Iron Face', gender: 'male' },
    emblem: 'A gaur bull charging through a lotus arch — iron vajra bolt above — Nalanda flame behind',
    animal: { name: 'Gaur (Indian Bison)', scientific: 'Bos gaurus', symbolism: 'Raw power, skin that blunts blades, the charge that ends debates', power: 'Pure physical dominance — gaur bond has thickened skin to the point where blades struggle to cut him' },
    bird: { name: 'House Sparrow (Goriya)', symbolism: 'The common bird that survives everything — small, overlooked, impossible to eliminate', role: 'Nests in Vajramukha\'s training ground — the sound of its song is the only thing that stops him mid-rage' },
    tattooPath: 'media/states/east/bihar/stories/vajra-bhumi/tattoos/',
    dress: 'Shaved head with thick waxed mustache — iron wrist-bands worn as reminders of the damage unchecked power can cause — no armor (it slows him)',
    culture: 'Mahabodhi Buddhist pilgrimage heritage — Nalanda scholarly tradition — Chhath Puja solar worship — ancient Magadha empire legacy',
    food: ['Litti Chokha (stuffed wheat balls with roasted vegetables)', 'Sattu paratha', 'Thekua (festival sweet)', 'Chura matar (flattened rice with peas)', 'Dal puri with spiced vegetables'],
    weapons: {
      ancient: { name: 'Vajra (Thunderbolt)', type: 'Iron gauntlets that amplify punch force', ability: 'Every blow carries the gaur\'s momentum — walls break before warriors do' },
      modern: { name: 'Vajra Mk.II', type: 'Kinetic-amplification exo-gauntlets', ability: 'Force multiplier — converts physical energy to kinetic pulse — impact radius beyond the fist' }
    },
    vehicles: {
      ancient: { name: 'Maha-Gaur (The Great Bull Mount)', desc: 'A war-trained gaur bull named Shankara — the largest animal mount in the east. No saddle, no reins. Vajramukha grips the horns. The animal charges when he does. They are indistinguishable in combat.' },
      modern: { name: 'Vajra-Ratha (Heavy Assault Tank)', desc: 'A frontal-assault tank with a gaur-horn battering ram built into the prow. No ranged weapons — designed to close distance and ram. The most heavily armored vehicle in the eastern kingdoms. Nothing stops it except itself.' }
    }
  },

  {
    id: 'jharkhand', state: 'Jharkhand', region: 'east',
    kingdomName: 'Vana-Agni — The Forest Fire',
    theme: 'The forest does not forget — it waits, and then it burns',
    landscape: 'Jharkhand sal forest — rocky Chota Nagpur plateau — tribal homeland deep interior',
    colors: { primary: '#44aaff', secondary: '#27ae60' },
    hero: { name: 'Vanajara', title: 'The Forest Born', gender: 'male' },
    emblem: 'An Indian elephant breaking through a sal forest — tribal geometric border — sacred fire at its feet',
    animal: { name: 'Indian Elephant', scientific: 'Elephas maximus indicus', symbolism: 'Forest memory, tribal solidarity, the single devastating blow that ends it', power: 'Forest guerrilla warfare — jungle as weapon — stampedes, swarms, pit traps, vine snares — fights with the patience of an elephant' },
    bird: { name: 'Pied Hornbill', symbolism: 'The forest sentinel — nests in hollow trees — calls before the forest turns against intruders', role: 'Calls from high canopy when outsiders enter the forest — Vanajara always hears it first' },
    tattooPath: 'media/states/east/jharkhand/stories/vana-agni/tattoos/',
    dress: 'Minimal dhoti and tribal silver-and-bone ornaments — bare feet permanently calloused from forest floor — face-markings from berry-dye',
    culture: 'Forest tribal civilisation — Sohrai cave painting tradition — Chhau warrior dance — Munda and Santhali oral traditions and sacred grove worship',
    food: ['Chilka roti (rice flour flatbread)', 'Rugra (wild mushroom curry)', 'Dhuska (rice-lentil deep fried cake)', 'Bamboo shoot dishes', 'Handia (ceremonial rice ferment)'],
    weapons: {
      ancient: { name: 'Vanavriksha (Forest Tree)', type: 'Enormous tribal bow carved from single sal wood piece', ability: 'Single shot carries the weight of the forest — no second arrow needed' },
      modern: { name: 'Vana-Agni Mk.II', type: 'Bio-signal guided composite longbow', ability: 'Reads forest animal movement to target enemies — shot guided by the forest itself' }
    },
    vehicles: {
      ancient: { name: 'Maa-Hastini (The Mother Elephant Mount)', desc: 'A wild forest elephant named Durga — not tamed, bonded. Vanajara communicates with her through subsonic vibrations. She charges exactly when he needs her to, and not before.' },
      modern: { name: 'Aranya-Vahana (Elephant-Guided Biodiesel Tracker)', desc: 'A biodiesel forest vehicle that follows elephant trails — the only paths through Jharkhand\'s plateau forest that don\'t dead-end. Sensor network integrated with forest elephant herd movements.' }
    }
  },

  {
    id: 'andaman', state: 'Andaman & Nicobar', region: 'east',
    kingdomName: 'Sagara-Ratna — The Ocean\'s Jewels',
    theme: 'The islands the mainland sent its prisoners to — and the prisoners have not forgotten',
    landscape: 'Bay of Bengal islands — Port Blair Cellular Jail — Havelock & Neil reefs — North Sentinel sanctuary — Nicobar mangroves — Indira Point (southernmost tip of Bharatavarsha)',
    colors: { primary: '#44aaff', secondary: '#e0f6ff' },
    hero: { name: 'Onge-Nakshatra', title: 'The Navigator of the Salt-Stars', gender: 'male' },
    emblem: 'A saltwater crocodile rising from the surf with its tail wrapped around a seven-pointed coral star — a Nicobar Pigeon descending from the upper-right corner — the constellation Mrigashira above',
    animal: { name: 'Saltwater Crocodile', scientific: 'Crocodylus porosus', symbolism: 'Tidal patience, ambush from below, the oldest predator of the islands — the witness that watches mainland ships arrive and never leave', power: 'Tide-sense — Onge-Nakshatra reads ocean currents through the crocodile-bond; senses ships approaching from over the horizon by water-pressure changes alone' },
    bird: { name: 'Nicobar Pigeon (Caloenas nicobarica)', symbolism: 'The rarest pigeon in Bharatavarsha — iridescent green, only nests on uninhabited islets — its presence marks safe shorelines and unspoilt ground', role: 'A Nicobar Pigeon descends on the prow of a canoe to confirm safe landing — its absence means the shore has been broken since last season' },
    tattooPath: 'media/states/east/andaman/stories/sagara-ratna/tattoos/',
    dress: 'Salt-cured leather kilt — chest-paint reapplied each dawn in red ochre and ash patterns drawn from the night\'s constellations — cowrie shells braided into hair — navigation tattoos along forearms mirroring the stars he was born under — Sagara-Bandhu anchor-flail coiled at the hip',
    culture: 'Andamanese tribal traditions (Onge, Jarawa, Great Andamanese) — Nicobari shompen seafaring — colonial penal-colony memory of the Cellular Jail — the seven-spoke radial architecture of Port Blair — coconut-and-coir trade across the islands — Sentinelese sanctity (one tribe still uncontacted)',
    food: ['Macher Jhol (island fish curry)', 'Coconut crab roast', 'Nicobari pulao with sea-bird egg', 'Pandanus fruit', 'Sea-pickle with kachri', 'Toddy palm wine'],
    weapons: {
      ancient: { name: 'Sagara-Bandhu (The Ocean\'s Bond)', type: 'A coral-stone anchor swung as a flail on a salt-cured kelp-fiber line', ability: 'When swung in a horizontal arc the anchor pulls water with it — a small typhoon-circle that disorients on land and drowns under sea — when struck against any locked thing the salt in the line eats the lock' },
      modern: { name: 'Lavana-Jaala (The Salt Net)', type: 'Underwater drone-net of biopolymer that lays itself across reefs as an invisible barrier', ability: 'Detects intrusions and signals to a wrist display — the net dissolves harmlessly within a year and reforms from sea-water minerals — defends without persisting' }
    },
    vehicles: {
      ancient: { name: 'Aki-Nauka (The First Canoe)', desc: 'A double-outrigger canoe carved by Aki herself from a single mahua trunk fifty-three years ago — bound with hand-twisted coir rope — sails of pandanus mat. The hull remembers every storm it has crossed; the wood hums different notes on different currents.' },
      modern: { name: 'Sagara-Ratha (Hydrofoil Skiff)', desc: 'A solar-electric hydrofoil that rises clear of the water at speed — silent, leaves no wake, has no metal hull (composites only) — designed to slip past the colonial-era radar that the Andaman jail-network still uses to track movements' }
    }
  },

  // ═══════════════════ NORTH ═══════════════════

  {
    id: 'uttar-pradesh', state: 'Uttar Pradesh', region: 'north',
    kingdomName: 'Ganga-Simhasana — The Throne of the Ganga',
    theme: 'The oldest city in the world — and it has seen every kind of warrior come and fail',
    landscape: 'Varanasi ghats — Gangetic plains — Ayodhya sacred sites — Lucknow Awadhi courts',
    colors: { primary: '#7b9eff', secondary: '#ffd700' },
    hero: { name: 'Gangaputra', title: 'The Son of Ganga', gender: 'male' },
    emblem: 'A barasingha standing on a Varanasi ghat — the Ganga in full flood behind — a twelve-pointed crown above',
    animal: { name: 'Barasingha (Swamp Deer)', scientific: 'Rucervus duvaucelii', symbolism: 'Philosophical multiplicity — twelve antler points for twelve traditions — the mind that holds all paths at once', power: 'Diplomatic and strategic mastery — knows every tradition — impossible to surprise ideologically or tactically' },
    bird: { name: 'Sarus Crane (Saras)', symbolism: 'The tallest flying bird in India — mates for life — symbol of loyalty and loss (Valmiki\'s grief birthed the Ramayana)', role: 'Seen at the Ganga ghat on the morning of every major council — their call carries across the water like a declaration' },
    tattooPath: 'media/states/north/uttar-pradesh/stories/ganga-simhasana/tattoos/',
    dress: 'Royal but practical — silk kurta reinforced with chain — twelve-pointed turban mirroring barasingha antlers',
    culture: 'Awadhi court culture — Lucknow tehzeeb (etiquette) — Varanasi ghat spirituality — Kathak dance and Thumri music and the oldest continuously inhabited city on earth',
    food: ['Awadhi Dum Biryani', 'Galouti kebab (melt-in-mouth minced lamb)', 'Bedai with aloo sabzi (deep-fried bread with curry)', 'Petha (ash gourd sweet from Agra)', 'Malai ki gilori (cream sweet)'],
    weapons: {
      ancient: { name: 'Dwadash-Mukut (Twelve Crown)', type: 'Twelve-pronged ceremonial war spear', ability: 'Each prong channels a different philosophical tradition — the weapon argues and strikes simultaneously' },
      modern: { name: 'Dwadash-Shakti Mk.II', type: 'Multi-mode energy lance with twelve configurations', ability: 'Switches between twelve attack modes in combat — no opponent can predict which tradition it will become next' }
    },
    vehicles: {
      ancient: { name: 'Dwadash-Ratha (The Twelve-Horse War Chariot)', desc: 'A twelve-horse war chariot — one horse per prong of his spear, in twelve different colours representing twelve philosophical traditions. The largest personal chariot in the saga. Gold-and-ivory Gangetic motifs. When it moves, it moves with the weight of everything Varanasi knows.' },
      modern: { name: 'Dwadash-Vahana (Twelve-Seat Command Vehicle)', desc: 'A twelve-seat mobile command headquarters — each seat equipped with a different intelligence feed. Gangaputra sits at the centre. Quantum-spear targeting integrated into the vehicle\'s strategic AI. Every major decision made from this moving vehicle.' }
    }
  },

  {
    id: 'uttarakhand', state: 'Uttarakhand', region: 'north',
    kingdomName: 'Deva-Bhumi — The Land of the Gods',
    theme: 'The gods live here — and she has to keep the peace between them and the humans below',
    landscape: 'Himalayan high passes — Kedarnath-Badrinath shrine peaks — Char Dham pilgrimage routes — alpine musk deer meadows',
    colors: { primary: '#7b9eff', secondary: '#95a5a6' },
    hero: { name: 'Kasturika', title: 'The Musk Bearer', gender: 'female' },
    emblem: 'An alpine musk deer in a Himalayan snowfield — Kedarnath temple behind — crescent moon above',
    animal: { name: 'Alpine Musk Deer', scientific: 'Moschus leucogaster', symbolism: 'Hidden treasure, elusive grace, scent that travels further than sight', power: 'Nothing that creates silhouette — no metal that reflects light — leaves no footprint even on fresh snow' },
    bird: { name: 'Himalayan Monal (Danphe)', symbolism: 'The iridescent bird of impossible colour at impossible altitude — beauty that exists only where survival is hardest', role: 'Seen on the high passes before Kasturika enters shrine territory — its colours identify which deity is watching' },
    tattooPath: 'media/states/north/uttarakhand/stories/deva-bhumi/tattoos/',
    dress: 'Nothing that creates silhouette — mountain goat hide in grey-white — no metal that reflects — moves in absolute silence',
    culture: 'Himalayan mountain pilgrimage culture — Kedarnath and Badrinath shrine traditions — Garhwali folk music — alpine forest hermitage and glacier-fed river spirituality',
    food: ['Kafuli (mountain greens stew with ghee)', 'Phanu (spiced lentil-grain soup)', 'Aloo ke gutke (spiced potato with jeera)', 'Bal mithai (chocolate-like sweet with sugar pearls)', 'Singori (khoya sweet in maalu leaf)'],
    weapons: {
      ancient: { name: 'Kasturi-Jaal (Musk Net)', type: 'Scent-laced invisible silk net', ability: 'Enemy follows the scent — walks into the net — by the time they smell it, they are already trapped' },
      modern: { name: 'Kasturi Mk.II', type: 'Pheromone-guided autonomous capture system', ability: 'Biological targeting — follows metabolic signature — cannot be countered by standard jamming' }
    },
    vehicles: {
      ancient: { name: 'Hima-Vahana (The High-Mountain Yak)', desc: 'A specially bred high-altitude yak with wool thick enough to sleep inside at -30°C. No faster than a walk on the high passes — but absolutely nothing else can carry weight at that altitude. Kasturika uses its body heat on bivouac nights.' },
      modern: { name: 'Hima-Vega Mk.II (High-Altitude VTOL Interceptor)', desc: 'A vertical take-off-and-landing interceptor designed for operations above 5000m. Musk-deer-grey finish invisible against Himalayan rock. Altitude record for operational combat flight in the saga.' }
    }
  },

  {
    id: 'himachal-pradesh', state: 'Himachal Pradesh', region: 'north',
    kingdomName: 'Hima-Chhaya — The Shadow of Snow',
    theme: 'The snow leopard moves through the mountain like a thought — there and then not there',
    landscape: 'Himalayan peaks — Spiti and Lahaul high valleys — Kullu-Manali forests — ancient Kinnauri passes',
    colors: { primary: '#7b9eff', secondary: '#8e44ad' },
    hero: { name: 'Himavati', title: 'The Snow\'s Daughter', gender: 'female' },
    emblem: 'A snow leopard in a frozen leap — Himalayan peak behind — Kullu Dussehra flag pennant above',
    animal: { name: 'Snow Leopard', scientific: 'Panthera uncia', symbolism: 'Invisible precision, mountain sovereignty, the predator that is never seen until the strike', power: 'Snow-pattern camouflage combat — hooks and daggers at every joint — moves through enemies like cold through stone' },
    bird: { name: 'Western Tragopan (Jujurana — King of Birds)', symbolism: 'The rarest and most beautiful Himalayan pheasant — seen only by those the mountain trusts', role: 'Its display marks the territory — if it disappears, something has broken the mountain\'s trust' },
    tattooPath: 'media/states/north/himachal-pradesh/stories/hima-chhaya/tattoos/',
    dress: 'Snow-pattern camouflage — leather and wool — hooked climbing daggers worn at every joint of the armor',
    culture: 'Himalayan shepherd culture — Kullu Dussehra grand festival — Kinnauri handicraft and metalwork — ancient Kullu valley temple traditions and Buddhist monastery networks in Spiti',
    food: ['Chha gosht (marinated slow-cooked lamb)', 'Siddu (steamed stuffed wheat dumplings with ghee)', 'Madra (chickpea and yoghurt curry)', 'Dham (festive rice-lentil-dessert feast on leaf plates)', 'Aktori (buckwheat pancake)'],
    weapons: {
      ancient: { name: 'Hima-Nakha (Snow Claws)', type: 'Paired hooked climbing daggers worn at knuckle and ankle', ability: 'Simultaneous four-point strike — opponent has no frame of reference for where the next cut comes from' },
      modern: { name: 'Hima-Nakha Mk.II', type: 'Thermal-vision climbing combat system', ability: 'Heated edges prevent ice-bonding — thermal vision cuts through blizzard visibility — four-limb simultaneous targeting' }
    },
    vehicles: {
      ancient: { name: 'Hima-Shardula (The Snow Leopard Mount)', desc: 'A snow leopard named Kailash — bonded not tamed. Moves in absolute silence. In full blizzard conditions they become one grey shape, indistinguishable from stone and drifted snow. The only mount in the saga that leaves no tracks.' },
      modern: { name: 'Hima-Vahana (Stealth Snow Terrain Vehicle)', desc: 'A low-profile snow vehicle with active thermal camouflage — surface temperature matches surrounding snow. Silent electric drivetrain. The tracks self-erase behind it. Radar cross-section smaller than a snow leopard.' }
    }
  },

  {
    id: 'punjab', state: 'Punjab', region: 'north',
    kingdomName: 'Panch-Nada — The Five Rivers',
    theme: 'Five rivers — one warrior — the flood is coming and he is standing in it',
    landscape: 'Punjab river plains — Golden Temple waters — Wagah border frontier — wheat-field battlegrounds',
    colors: { primary: '#7b9eff', secondary: '#e67e22' },
    hero: { name: 'Panchanada', title: 'The Five Rivers\' Son', gender: 'male' },
    emblem: 'A blackbuck mid-leap over five river lines — Sikh khanda symbol above — wheat field horizon below',
    animal: { name: 'Blackbuck', scientific: 'Antilope cervicapra', symbolism: 'Sacred to Sikh and Hindu warrior traditions — speed that crosses river plains without breaking stride', power: 'Front-line infantry command — leads every charge himself — the five rivers give him five ways through any defense' },
    bird: { name: 'Baaz (Northern Goshawk / Peregrine Falcon)', symbolism: 'The Guru\'s falcon — Guru Gobind Singh\'s sacred bird — warrior spirit and divine protection', role: 'Perches on Panchanada\'s left shoulder before every battle — takes flight the moment combat begins — returns when it ends' },
    tattooPath: 'media/states/north/punjab/stories/panch-nada/tattoos/',
    dress: 'Full Sikh warrior aesthetic — five Ks integrated into battle armor — deep blue and saffron battle dress',
    culture: 'Five rivers agricultural civilisation — Bhangra-Giddha harvest dance — Sikh martial warrior tradition — Sufi music heritage and Golden Temple community seva',
    food: ['Sarson da saag with Makki di roti (mustard greens with corn bread)', 'Butter chicken', 'Amritsari kulcha with chole', 'Lassi (sweet or salted)', 'Pinni (wheat-ghee-jaggery sweet)'],
    weapons: {
      ancient: { name: 'Panch-Nada (The Five Rivers)', type: 'Five-bladed war lance', ability: 'Five simultaneous strike angles — rotates in grip — no defensive stance covers all five' },
      modern: { name: 'Panch-Shakti Mk.II', type: 'Five-mode adaptive energy lance', ability: 'Switches between five elemental energy modes — cycles automatically based on enemy armor type' }
    },
    vehicles: {
      ancient: { name: 'Panch-Ratha (The Five-River Chariot)', desc: 'A wide-axle war chariot built to cross river fords at speed — five different hull configurations that fold out depending on terrain. The standard command vehicle of Punjab\'s front-line operations. Unmistakably blue and saffron.' },
      modern: { name: 'Panch-Vahana (Five-River Convoy Command Vehicle)', desc: 'A convoy command vehicle flanked by four autonomous escort units — the central vehicle and its four escorts represent the five rivers. Operates as a unit in all formations. Losing any one triggers the other four to compensate.' }
    }
  },

  {
    id: 'haryana', state: 'Haryana', region: 'north',
    kingdomName: 'Kurukshetra-Bhoomi — The Battlefield Earth',
    theme: 'The war was fought here eighteen days — she has been fighting it every day since',
    landscape: 'Kurukshetra plains — ancient battlefield earth — excavated iron arrow-heads everywhere — sacred tanks and pilgrimage sites',
    colors: { primary: '#7b9eff', secondary: '#c0392b' },
    hero: { name: 'Kurukshetraa', title: 'The Battlefield Born', gender: 'female' },
    emblem: 'A blackbuck running across the Kurukshetra plain — excavated iron swords rising from earth behind — conch and chakra above',
    animal: { name: 'Blackbuck', scientific: 'Antilope cervicapra', symbolism: 'The sacred battlefield animal — protected by the warriors who fought here — speed across open plains', power: 'Battlefield memory — the earth tells her everything — she reads terrain through excavated iron in the soil beneath her feet' },
    bird: { name: 'Black Francolin (Kala Teetar)', symbolism: 'The bird of the battlefield — found in open grassland where armies move — its call marks ground worth holding', role: 'Its call from the direction of an enemy signals their position — Kurukshetraa never ignores it' },
    tattooPath: 'media/states/north/haryana/stories/kurukshetra-bhoomi/tattoos/',
    dress: 'Excavated iron armor recovered from the Kurukshetra soil — the weight of history made literal — each piece bears ancient markings',
    culture: 'Kurukshetra battlefield heritage — Saangi folk theatre — wrestling akhara tradition — ancient Vedic roots and the city that witnessed the Mahabharata war',
    food: ['Bajra khichdi (pearl millet porridge)', 'Kadhi with pakoras', 'Rabdi (slow-reduced milk sweet)', 'Singri ki sabzi (dried berry-bean dish)', 'Bajra kheer (millet pudding)'],
    weapons: {
      ancient: { name: 'Bhoomi-Danda (The Earth\'s Staff)', type: 'Excavated iron war-staff from Kurukshetra earth', ability: 'Channels the memory of every battle fought on this soil — opponents feel the weight of eighteen days\' war' },
      modern: { name: 'Bhoomi-Shakti Mk.II', type: 'Seismic resonance battlestaff', ability: 'Drives into earth — releases stored kinetic energy through ground — affects everything within radius without being touched' }
    },
    vehicles: {
      ancient: { name: 'Bhumi-Ratha (The Battleground Chariot)', desc: 'Built from iron excavated from the Kurukshetra field — every plank, every axle has ancient battlefield iron in it. It is heavier than any comparable chariot, which is why she drives it herself — no horse bears the weight without her direction.' },
      modern: { name: 'Bhumi-Ratha Mk.II (Battlefield History Vehicle)', desc: 'A ground-penetrating radar vehicle that maps ancient battlefield iron while it drives — it literally reads the battle below as it fights above. The only vehicle in the saga that knows the terrain better than any map.' }
    }
  },

  {
    id: 'kashmir', state: 'Kashmir', region: 'north',
    kingdomName: 'Sharada-Pitha — The Seat of Sharada',
    theme: 'A scholar holds a scroll while a librarian burns the past',
    landscape: 'Vale of Kashmir — Pir Panjal range — Jhelum river — Dal Lake — saffron fields of Pampore — Awantipur ruins — ancient Sharada Peeth temple beyond the high passes',
    colors: { primary: '#a06bff', secondary: '#fff5d4' },
    hero: { name: 'Sharad-Pandit', title: 'The Pandit of the Stag', gender: 'male' },
    emblem: 'A Kashmir stag standing on a stack of unrolled scrolls — its antlers branching upward into the seven-pointed Sharada script — a black-necked crane in flight above the antlers',
    animal: { name: 'Hangul (Kashmir Stag)', scientific: 'Cervus hanglu hanglu', symbolism: 'Witness, rarity, the survival of memory — every point on the antler counts a year of what was preserved', power: 'Reads snow-tracks left years before — Sharad-Pandit sees what was written in places that no longer exist — archaeological-sense made instinct' },
    bird: { name: 'Black-necked Crane (Trung-Trung)', symbolism: 'The cross-border messenger — flies across passes no army can hold — carries the words that escape erasure', role: 'A crane circles a manuscript that is about to be burned — Sharad-Pandit learns to read the omen before he can read the manuscript' },
    tattooPath: 'media/states/north/kashmir/stories/sharada-pitha/tattoos/',
    dress: 'Long woolen phiran over leather lamellar — the Sharada-Patra scroll-shield strapped diagonally across his back — ink-stained fingers — quartz reading-lens hanging at the belt',
    culture: 'Sharada-Pitha manuscript tradition — Sufiana Kalam court music — Rouf folk dance — Wazwan thirty-six-course feast — Kashmir Shaivism philosophical lineage — Lal Ded\'s 14th-century mystical vakhs — the oldest continuous commentarial tradition in Bharatavarsha',
    food: ['Rogan Josh', 'Yakhni (yogurt mutton)', 'Kashmiri Pulao', 'Sheermal (saffron bread)', 'Kahwa (saffron-almond tea)', 'Phirni (rice pudding)'],
    weapons: {
      ancient: { name: 'Sharada-Patra (The Reading Scroll)', type: 'A scroll-shield that hardens to the shape of whatever verse is unfurled', ability: 'Each Rigvedic verse inscribed on it produces a different defensive form — once a verse is read aloud, the shield holds for as long as the verse holds in any memory' },
      modern: { name: 'Pratima-Pothi (The Mirror Ledger)', type: 'Satellite-uplink scroll-tablet', ability: 'Records every event in Kashmir in real-time, distributed across mirrored edge-nodes — anything written here cannot be erased from any single point of attack' }
    },
    vehicles: {
      ancient: { name: 'Shankha-Ratha (The Manuscript Boat)', desc: 'A houseboat-chariot that floats on Dal Lake and converts to a hill-cart in snow — designed to keep manuscripts safe from both fire and seizure. The library moves before any army arrives.' },
      modern: { name: 'Shankha-Ratha Mk.II (Distributed Archive Vehicle)', desc: 'A mobile cold-storage data-truck with edge-cache nodes — every manuscript and oral record in Kashmir is sharded across this vehicle and its sister-trucks. If one is destroyed, the others sing the rest from memory.' }
    }
  },

  // ═══════════════════ NORTHEAST ═══════════════════

  {
    id: 'assam', state: 'Assam', region: 'northeast',
    kingdomName: 'Ganda-Kshetra — The Rhinoceros Realm',
    theme: 'The last stronghold — she stands between the last rhino and the world that would have it gone',
    landscape: 'Kaziranga grasslands — Brahmaputra flood plains — ancient Kamakhya temple hills',
    colors: { primary: '#aa66ff', secondary: '#e74c3c' },
    hero: { name: 'Kamalavarna', title: 'The Lotus Shield', gender: 'female' },
    emblem: 'A one-horned rhinoceros in Kaziranga tall grass — lotus flower shield — Brahmaputra river horizon',
    animal: { name: 'Indian One-horned Rhinoceros', scientific: 'Rhinoceros unicornis', symbolism: 'Armored grace, unstoppable force, sacred conservation — what survives extinction is holy', power: 'She WAS the rhinoceros — charged through walls — bullets bounced off her shield — the Lotus Shield is both beautiful and armored' },
    bird: { name: 'Greater Adjutant Stork (Hargila)', symbolism: 'The bird that cleans the battlefield — misunderstood, ugly by standards, vital to the ecosystem — the animal that does necessary work without recognition', role: 'Appears after every battle — cleaning what Kamalavarna cannot — she treats it with the same respect as the rhino' },
    tattooPath: 'media/states/northeast/assam/stories/ganda-kshetra-rhinoceros-realm/tattoos/',
    dress: 'Lotus-red and forest-green battle armor inspired by the rhino\'s armored skin — lotus motifs on every shield',
    culture: 'Brahmaputra river civilisation — Bihu harvest dance — Muga and Eri silk weaving — rhino conservation sacred duty and ancient Kamakhya goddess worship',
    food: ['Masor tenga (sour fish curry with tomato)', 'Khaar (alkaline raw papaya dish)', 'Pitha (rice cakes for Bihu festival)', 'Duck meat curry with kochu (taro)', 'Khar (banana blossom and mustard specialty)'],
    weapons: {
      ancient: { name: 'Ganda-Kavach (The Rhino Shield)', type: 'Armored lotus-petal shield and short rhino-horn spear', ability: 'Shield charges — uses rhino momentum in body — spear strikes from behind shield cover while charging' },
      modern: { name: 'Ganda-Kavach Mk.II', type: 'Reactive armor lotus-shield system', ability: 'Smart armor absorbs and redirects impact — spear is rail-accelerated for rhino-charge-equivalent velocity' }
    },
    vehicles: {
      ancient: { name: 'Ganda-Vahana (The Rhinoceros War Mount)', desc: 'A war-trained one-horned rhinoceros named Vajrakavacha — who bowed to Kamalavarna at age three. The only mounted rhinoceros in the saga. In battle they are indistinguishable from each other.' },
      modern: { name: 'Ganda-Ratha (Rhino-Profile Armored Vehicle)', desc: 'A frontal-assault vehicle with rhino-horn profile — rounded frontal armor designed for battering through barriers. Amphibious for Brahmaputra crossing. Radar signature reduced to match rhino metabolic signature as cover.' }
    }
  },

  {
    id: 'arunachal-pradesh', state: 'Arunachal Pradesh', region: 'northeast',
    kingdomName: 'Arunodaya-Kshetra — The Land of the Dawn',
    theme: 'India\'s first sunrise — he carries the day\'s first light into every battle',
    landscape: 'Eastern Himalayas — Tawang monastery — Brahmaputra gorge — sunrise-facing Himalayan slopes',
    colors: { primary: '#aa66ff', secondary: '#f39c12' },
    hero: { name: 'Udayagiri', title: 'The Dawn Runner', gender: 'male' },
    emblem: 'A gayal bull silhouetted against a Himalayan sunrise — Tawang monastery behind — dawn ray crown above',
    animal: { name: 'Gayal (Mithun)', scientific: 'Bos frontalis', symbolism: 'Sacred tribal wealth, mountain endurance, the semi-wild animal that is never fully tamed', power: 'Runs east to west across the state between sunrise and sunset — the Dawn Race — endurance beyond physical limit' },
    bird: { name: 'Great Hornbill (Buceros bicornis)', symbolism: 'Sacred to Nyishi tribe — worn in war headdress — the bird that takes years to mature like wisdom itself', role: 'Its call at dawn marks the direction Udayagiri should run — he has never started a journey without hearing it first' },
    tattooPath: 'media/states/northeast/arunachal-pradesh/stories/arunodaya-kshetra/tattoos/',
    dress: 'Traditional Arunachali warrior dress with sunrise-colour tones — orange and gold beadwork — hornbill feathers in war headdress',
    culture: 'Sunrise land tribal civilisation — Nyishi and Adi tribe traditions — Tawang monastery Buddhist culture — diverse twenty-six tribal festival calendar and sacred forest-grove protection',
    food: ['Thukpa (hearty Himalayan noodle soup)', 'Bamboo shoot curry (cornerstone of every meal)', 'Zan (millet porridge)', 'Pika Pila (sour pork with bamboo)', 'Apong (rice millet beer — ceremonial)'],
    weapons: {
      ancient: { name: 'Surya-Dhanu (Dawn Bow)', type: 'Composite tribal longbow that fires at sunrise angle', ability: 'Arrow follows the dawn trajectory — blinding shot from the east — enemy faces sun and cannot see it coming' },
      modern: { name: 'Surya-Vega Mk.II', type: 'Solar-charged particle bow with dawn-angle targeting', ability: 'Charges from ambient light — fires at maximum power at dawn and dusk — thermal targeting matches solar arc' }
    },
    vehicles: {
      ancient: { name: 'Surya-Ratha (The Dawn Chariot)', desc: 'A light fast chariot built for the extreme slopes of Arunachal — suspension designed for 60-degree inclines. Painted sunrise orange-gold. Built to reach battle at dawn, before any enemy is fully awake.' },
      modern: { name: 'Surya-Vega (Solar Dawn Jet)', desc: 'A solar-supplemented VTOL aircraft that reaches full operational capacity at dawn. Painted in sunrise-orange and gold. The only vehicle in the northeast that can reach Tawang in under an hour from any border point.' }
    }
  },

  {
    id: 'manipur', state: 'Manipur', region: 'northeast',
    kingdomName: 'Sangai-Nata — The Dance of the Dancing Deer',
    theme: 'The greatest warriors are also the greatest dancers — and the line between them is invisible',
    landscape: 'Loktak Lake phumdi floating islands — Imphal valley — Kangla fort ruins',
    colors: { primary: '#aa66ff', secondary: '#f1c40f' },
    hero: { name: 'Moirangthem', title: 'The Dancing Blade', gender: 'male' },
    emblem: 'A sangai brow-antlered deer mid-dance pose — Loktak lake reflection — Manipuri white lotus above',
    animal: { name: 'Sangai (Brow-antlered Deer)', scientific: 'Rucervus eldii eldii', symbolism: 'The dancing deer — grace that is also precision — exists only on floating islands found nowhere else on earth', power: 'Thang-Ta martial art and classical dance share roots — his combat IS his dance — movement that is both weapon and art' },
    bird: { name: 'Nongin (Mrs Hume\'s Pheasant)', symbolism: 'The state bird seen only in the deepest Manipur forest — reclusive, magnificent, heard before it is seen', role: 'Its call signals the moment before Moirangthem switches from dance to battle — the transition that surprises every opponent' },
    tattooPath: 'media/states/northeast/manipur/stories/sangai-nata/tattoos/',
    dress: 'White and gold dancer\'s garments adapted for combat — long hair tied with golden thread — anklet-bells that become silence before a strike',
    culture: 'Thang-Ta martial art and Manipuri classical dance shared tradition — Rasa Lila performances — Meitei handloom weaving — Lai Haraoba festival and polo\'s ancient homeland',
    food: ['Eromba (fermented fish and vegetable mash)', 'Singju (raw vegetable and ngari salad)', 'Chamthong (vegetable herb stew)', 'Kangsoi (light vegetable broth)', 'Paknam (fish-lentil steamed cake)'],
    weapons: {
      ancient: { name: 'Thang-Phurit', type: 'Thang-Ta spear-and-shield set — weapon and dance prop simultaneously', ability: 'Every attack angle is a dance step — opponent cannot predict because the movements are choreographed to be beautiful first and lethal second' },
      modern: { name: 'Sangai-Nata Mk.II', type: 'Kinetic-resonance dual spear', ability: 'Vibration frequency tuned to the sangai\'s movement pattern — strikes arrive in rhythmic bursts — jamming its rhythm jams the opponent\'s coordination' }
    },
    vehicles: {
      ancient: { name: 'Sangai-Vahana (The Dancing Deer Mount)', desc: 'A trained sangai deer named Laivak — the only sangai ever to leave Loktak Lake willingly. Does not carry Moirangthem into battle — dances alongside him. The sight of them together has stopped enemy charges.' },
      modern: { name: 'Sangai-Vega (Phumdi Hovercraft)', desc: 'A hovercraft designed to travel the phumdi floating islands of Loktak Lake — the only vehicle that can navigate that terrain. Sangai-brown finish. Moves like water — no fixed path, no predictable trajectory.' }
    }
  },

  {
    id: 'meghalaya', state: 'Meghalaya', region: 'northeast',
    kingdomName: 'Megha-Maata — The Cloud Mother',
    theme: 'The wettest place on earth — and she has learned to fight in rain that falls like walls',
    landscape: 'Cherrapunji cloud forests — Meghalaya living root bridges — Khasi plateau waterfalls',
    colors: { primary: '#aa66ff', secondary: '#3498db' },
    hero: { name: 'Meghanadi', title: 'The Cloud Keeper', gender: 'female' },
    emblem: 'A clouded leopard crouched on a living root bridge — cloud arch above — Cherrapunji rain curtain behind',
    animal: { name: 'Clouded Leopard', scientific: 'Neofelis nebulosa', symbolism: 'Cloud-pattern camouflage, tree-canopy predator, the predator no one sees until it is too late', power: 'Invisibility in cloud and canopy — appears and disappears with the Meghalaya mist — the most elusive fighter in the northeast' },
    bird: { name: 'Hill Myna (Gracula religiosa)', symbolism: 'The bird that perfectly mimics every sound — in war this is the most dangerous ability in the forest', role: 'Mimics enemy signals — sends false commands — used as Meghanadi\'s forward intelligence since childhood' },
    tattooPath: 'media/states/northeast/meghalaya/stories/megha-maata/tattoos/',
    dress: 'Jainsen (traditional Khasi dress) with clouded leopard-skin patches — indigo cloud-pattern camouflage in the forest',
    culture: 'Matrilineal Khasi society — Nongkrem dance festival — bamboo and cane craft tradition — sacred forest grove protection and living root bridge engineering',
    food: ['Jadoh (red rice with pork blood and spices)', 'Dohneiiong (pork with black sesame sauce)', 'Nakham Bitchi (smoked fish soup with chilies)', 'Tungrymbai (fermented soybean dish)', 'Pumaloi (steamed rice with pork)'],
    weapons: {
      ancient: { name: 'Megha-Nakha (Cloud Claws)', type: 'Cloud-leopard claw gauntlets', ability: 'Appears from cloud cover — four simultaneous claw strikes — disappears before the opponent recovers' },
      modern: { name: 'Megha-Jaal Mk.II', type: 'Mist-dispersal combat system', ability: 'Deploys targeted mist cloud — thermal vision suppressed — fights inside the cloud by sound and scent alone' }
    },
    vehicles: {
      ancient: { name: 'Megha-Shardula (The Cloud Leopard Mount)', desc: 'A clouded leopard named Nongkrem — the only clouded leopard that has remained visible in the Meghalaya forest for more than a week. They move together in absolute silence. In heavy cloud, they become invisible even to each other.' },
      modern: { name: 'Megha-Vahana (Cloud-Riding Dirigible)', desc: 'A silent hydrogen dirigible that travels within the Meghalaya cloud layer — below radar, above visual detection. The only vehicle in the saga that literally travels inside clouds. Navigation by lightning-pattern reading.' }
    }
  },

  {
    id: 'mizoram', state: 'Mizoram', region: 'northeast',
    kingdomName: 'Tlawmngaihna-Desh — The Land of Selfless Duty',
    theme: 'Tlawmngaihna — the Mizo code of selfless service — is his weapon and his armour',
    landscape: 'Mizoram bamboo forests — Phawngpui Blue Mountain — Kaladan river valley',
    colors: { primary: '#aa66ff', secondary: '#27ae60' },
    hero: { name: 'Tlangvala', title: 'The Duty Keeper', gender: 'male' },
    emblem: 'A serow mountain goat on a bamboo-forested Mizo hill — community fire behind — tlawmngaihna circular emblem',
    animal: { name: 'Serow (Himalayan Serow)', scientific: 'Capricornis sumatraensis', symbolism: 'Surefootedness on impossible terrain, community before self, the animal that protects its family at all costs', power: 'Bamboo-armored fighting — community combat formation — strongest when protecting others not himself' },
    bird: { name: 'Vernal Hanging Parrot (Tlawngalhual)', symbolism: 'The upside-down bird — sees the world from a different angle — community intelligence networker', role: 'Carries messages between Mizo villages — Tlangvala\'s scout network runs on the parrot\'s routes' },
    tattooPath: 'media/states/northeast/mizoram/stories/tlawmngaihna-desh/tattoos/',
    dress: 'Traditional Mizo puanchei warrior cloth with bamboo splint armor — stocky and immovable on his feet',
    culture: 'Mizo Cheraw bamboo dance tradition — community Tlawmngaihna ethics (duty to all) — handloom weaving — oral narrative tradition and Chapchar Kut festival',
    food: ['Bai (pork and greens in bamboo)', 'Sawhchiar (thick rice porridge with pork)', 'Vawksa rep (smoked pork strips)', 'Chhum Han (steamed vegetables with mustard)', 'Zu (traditional millet drink — ceremonial)'],
    weapons: {
      ancient: { name: 'Tlawmngaihna-Danda (The Duty Staff)', type: 'Bamboo war-staff — split-section — six different combat configurations', ability: 'Extends, collapses, splits — no opponent has fought the same version twice — community-taught fighting form that takes thirty years to master' },
      modern: { name: 'Tlang-Vega Mk.II', type: 'Modular multi-configuration combat staff', ability: 'Adaptive weapon — reconfigures in under a second — no predictable attack mode — each configuration named after a Mizo community virtue' }
    },
    vehicles: {
      ancient: { name: 'Hnam-Vahana (The Clan Carrier)', desc: 'Not a war vehicle but a community carrier — a large bamboo-framed platform carried by twenty Mizo warriors that can traverse the steep Mizoram hills faster than any wheeled vehicle. Converts to a siege platform at the destination.' },
      modern: { name: 'Hnam-Vahana Mk.II (Sustainable Community Transport)', desc: 'A bamboo-composite biodiesel community vehicle — carries twelve warriors and their equipment across Mizoram mountain terrain. Solar roof panels. Built from local materials and repairable in any Mizo village.' }
    }
  },

  {
    id: 'nagaland', state: 'Nagaland', region: 'northeast',
    kingdomName: 'Dzukou-Rashtra — The Valley Kingdom',
    theme: 'The warriors who ended headhunting became the guardians of what was worth keeping',
    landscape: 'Dzukou valley alpine meadows — Naga hills tribal homeland — Kohima World War battlefields',
    colors: { primary: '#aa66ff', secondary: '#e74c3c' },
    hero: { name: 'Dzulevira', title: 'The Valley\'s Blade', gender: 'female' },
    emblem: 'A gayal bull surrounded by Naga warrior tattoo patterns — hornbill feathers above — Dzukou lily wreath',
    animal: { name: 'Gayal (Mithun)', scientific: 'Bos frontalis', symbolism: 'Sacred Naga wealth, tribal solidarity, the animal that marks status and community bond', power: 'Frontal assault that reads the terrain like a gayal reads the valley floor — cannot be turned from its path once committed' },
    bird: { name: 'Blyth\'s Tragopan (Naga Pheasant)', symbolism: 'Sacred to Naga tribes — its red and spotted pattern mirrors the warrior\'s tattoo tradition — seen only by those who earn it', role: 'Appears when a warrior\'s tattoo earns its next stage — Dzulevira has only ever been alone when she sees it' },
    tattooPath: 'media/states/northeast/nagaland/stories/dzukou-rashtra/tattoos/',
    dress: 'Traditional Angami warrior shawl — hornbill feathers in hair — Naga tribal tattoo tradition visible on arms and neck',
    culture: 'Hornbill Festival heritage — Naga warrior tattoo culture — tribal council governance (not monarchy) — headhunter transformation into protector tradition and morungs (community warrior houses)',
    food: ['Smoked pork with bamboo shoot (axone fermented base)', 'Axone (fermented soybean with pork)', 'Galho (rice and meat stew)', 'Anishi (dried taro leaf with pork)', 'Ghost pepper-based chutneys (hottest food tradition in the saga)'],
    weapons: {
      ancient: { name: 'Dzukou-Dao (The Valley Cleaver)', type: 'Naga dao — heavy single-edge cleaver-sword with bamboo scabbard', ability: 'Valley-sweep technique — clears bamboo and enemies in the same stroke — single-edge precision on the back-swing' },
      modern: { name: 'Dzukou-Vega Mk.II', type: 'Carbon-fibre dao with vibration-edge technology', ability: 'Vibration edge cuts through materials ten times its hardness — the Naga dao\'s traditional sweep is mechanically amplified' }
    },
    vehicles: {
      ancient: { name: 'Dzukou-Vahana (The Valley Bull Mount)', desc: 'A gayal bull named Khrielietuo — massive even by gayal standards. Painted in tribal war patterns before combat. The sight of Dzulevira mounted on him has ended two battles before they began.' },
      modern: { name: 'Dzukou-Ratha (Valley Terrain Command Vehicle)', desc: 'A high-clearance command vehicle designed for the Naga hills — extreme articulation for 70-degree terrain. Tribal pattern exterior. Carries a council of six advisors and their equipment into remote valley positions.' }
    }
  },

  {
    id: 'sikkim', state: 'Sikkim', region: 'northeast',
    kingdomName: 'Beyul-Kshetra — The Hidden Land',
    theme: 'Every pilgrim path leads to the same realisation — the hidden land is not a place, it is a practice',
    landscape: 'Kanchenjunga slopes — Rumtek and Pemayangtse monasteries — high Himalayan rhododendron forests',
    colors: { primary: '#aa66ff', secondary: '#e74c3c' },
    hero: { name: 'Kanchenjunga', title: 'The Mountain\'s Voice', gender: 'male' },
    emblem: 'A red panda in a rhododendron tree — Kanchenjunga summit cloud-hidden behind — Buddhist dharma wheel above',
    animal: { name: 'Red Panda', scientific: 'Ailurus fulgens', symbolism: 'Hidden grace, bamboo-forest wisdom, the creature that survived the ice ages by being exactly what it needed to be', power: 'Buddhist meditation-combat — stillness that becomes sudden movement — the opponent never sees the transition' },
    bird: { name: 'Blood Pheasant (Ithaginis cruentus)', symbolism: 'The high-altitude bird whose crimson markings look like sacred red — found only near the monastery altitude', role: 'Appears at monastery walls when Kanchenjunga returns from any mission — its presence means the hidden land is still intact' },
    tattooPath: 'media/states/northeast/sikkim/stories/beyul-kshetra/tattoos/',
    dress: 'Buddhist monk robes with subtle armor plating hidden within — short cropped hair — prayer beads that are also throwing weights',
    culture: 'Buddhist monastery civilisation — Losar and Saga Dawa festival traditions — Thanka painting — Cham dance — rhododendron and cardamom agricultural heritage',
    food: ['Momo (steamed dumplings with pork or veg)', 'Gundruk (fermented leafy greens — preserved)', 'Sel roti (ring-shaped rice flour bread)', 'Phagshapa (pork fat with radish and chilies)', 'Chhang (millet beer — ceremonial)'],
    weapons: {
      ancient: { name: 'Beyul-Kila (Hidden Land Phurba)', type: 'Ritual triple-bladed Tibetan dagger — spiritual and combat weapon simultaneously', ability: 'Strikes body and spirit simultaneously — disrupts the opponent\'s inner balance before the outer one' },
      modern: { name: 'Beyul-Kila Mk.II', type: 'Tri-frequency disruption blade', ability: 'Three frequencies simultaneously — physical, electromagnetic, subsonic — affects body, electronics and will at once' }
    },
    vehicles: {
      ancient: { name: 'Beyul-Vahana (The Sacred Yak)', desc: 'A white yak named Dorje — consecrated at Rumtek monastery. Wears prayer flags as caparison. Carries Kanchenjunga on the high passes where no other animal can breathe. Said to know the way to Beyul itself.' },
      modern: { name: 'Beyul-Vahana Mk.II (Minimal-Impact Terrain Vehicle)', desc: 'A vehicle designed to leave no trace — zero-emission, track-erasing, noise-suppressed. Used to reach monastery positions and remove retreating populations. The philosophy of hidden land made vehicular.' }
    }
  },

  {
    id: 'tripura', state: 'Tripura', region: 'northeast',
    kingdomName: 'Tri-Pura — The Three Cities',
    theme: 'The architect who knows how every structure is built also knows exactly how to take it apart',
    landscape: 'Tripura forest and bamboo hills — Ujjayanta Palace ruins — Unakoti rock-carved sacred site',
    colors: { primary: '#aa66ff', secondary: '#3498db' },
    hero: { name: 'Tripurari', title: 'The City Breaker', gender: 'male' },
    emblem: 'A Phayre\'s langur on an ancient Tripura palace spire — sacred Unakoti rock face behind — architectural compass above',
    animal: { name: 'Phayre\'s Langur', scientific: 'Trachypithecus phayrei', symbolism: 'The architect who lives in the structure — knows every joint, every weakness, every hidden entrance', power: 'Structural intelligence — can dismantle or build any fortification — the mind that created the Three Cities can destroy any three' },
    bird: { name: 'Green Imperial Pigeon (Ducula aenea)', symbolism: 'The forest giant — elegant, unhurried — the messenger that carries architectural plans between the three cities', role: 'Carries scroll-messages between Tripurari\'s network — identified by their distinctive green iridescence at altitude' },
    tattooPath: 'media/states/northeast/tripura/stories/tri-pura/tattoos/',
    dress: 'Practical clothing covered in pockets filled with tools, scrolls and mechanisms — the warrior-architect look',
    culture: 'Ancient Tripuri kingdom heritage — Garia tribal dance — bamboo and cane craft — Risa textile weaving tradition and Unakoti sacred rock-carved Shiva sculpture complex',
    food: ['Chakhwi (bamboo shoot with pork)', 'Muya Awandru (bamboo shoot stir-fry)', 'Wahan mosdeng (spiced pork)', 'Berma (dried fermented fish condiment)', 'Kosoi bwtwi (bamboo shoot and fish curry)'],
    weapons: {
      ancient: { name: 'Tri-Shakti (Three Powers)', type: 'Architectural disassembly tool set — crowbar, chisel-blade, and precision pick', ability: 'Disassembles any structure in battle — removes keystones — collapses walls at the point opponents stand on them' },
      modern: { name: 'Tri-Vega Mk.II', type: 'Precision demolition toolkit — sonic, thermal, mechanical', ability: 'Three simultaneous structural attack vectors — any fortification has a three-city solution: find the three weakest points and remove them simultaneously' }
    },
    vehicles: {
      ancient: { name: 'Tri-Ratha (The Three Cities\' Chariot)', desc: 'A chariot that disassembles into three independent units — each operates alone but recombines in any configuration. The structural logic that built the Three Cities applied to transport.' },
      modern: { name: 'Tri-Vahana (Modular Field Command Vehicle)', desc: 'A modular vehicle in three independently-powered sections. Separates for reconnaissance, combines for assault. Each section can survive independently. The three-city logic at operational scale.' }
    }
  },

  // ═══════════════════ CENTRAL ═══════════════════

  {
    id: 'madhya-pradesh', state: 'Madhya Pradesh', region: 'central',
    kingdomName: 'Hridaya-Sthana — The Place of the Heart',
    theme: 'The heart of India holds every tradition — and the weight of all of them is his to carry',
    landscape: 'Vindhya mountain range — Narmada river valley — Panna tiger reserve — Khajuraho temple plains',
    colors: { primary: '#ffaa00', secondary: '#27ae60' },
    hero: { name: 'Dvadashashringa', title: 'The Twelve-Antlered', gender: 'male' },
    emblem: 'A barasingha with twelve antler points — Khajuraho temple relief behind — Narmada river serpent below',
    animal: { name: 'Barasingha (Swamp Deer)', scientific: 'Rucervus duvaucelii', symbolism: 'Twelve traditions held simultaneously — the heart that contains all paths — endangered and therefore sacred', power: 'Holds twelve philosophical positions in debate and combat simultaneously — cannot be defeated by argument or conventional attack' },
    bird: { name: 'Indian Paradise Flycatcher (Dudhraj)', symbolism: 'The bird with the impossibly long tail — beauty that seems impractical but is perfectly adapted — the heart\'s excess made visible', role: 'Sings in the Narmada forest before any council that changes the direction of the central kingdoms' },
    tattooPath: 'media/states/central/madhya-pradesh/stories/hridaya-sthana/tattoos/',
    dress: 'Forest-green and gold — twelve-pointed crown mirroring barasingha antlers — trim and precise for the weight he carries',
    culture: 'Khajuraho temple erotic-spiritual art heritage — Gond tribal painting tradition — Tansen music festival — Pachmarhi hill pilgrimage and ancient Hindu-Buddhist crossroads civilisation',
    food: ['Bhutte ka kees (grated corn cooked with milk and spices)', 'Dal bafla (lentils with wheat dumpling baked in cow dung)', 'Poha (flattened rice with onions and peanuts)', 'Chakki ki shak (wheat grinding stone vegetable)', 'Lavang lata (clove-stuffed sweet fritter)'],
    weapons: {
      ancient: { name: 'Dvadasha-Shakti (Twelve Powers)', type: 'Twelve-bladed rotating war disc', ability: 'Twelve simultaneous strike angles — represents twelve philosophical traditions — the opponent who defeats one faces eleven more' },
      modern: { name: 'Hridaya-Chakra Mk.II', type: 'Twelve-mode adaptive energy system', ability: 'Cycles through twelve attack configurations — never repeats in sequence — the heart\'s rhythm encoded in the weapon' }
    },
    vehicles: {
      ancient: { name: 'Hridaya-Ratha (The Heart Chariot)', desc: 'A chariot built at the geographical centre of India — the materials sourced from all six regions. Twelve horses, one for each philosophical tradition he carries. The vehicle that literally represents the nation\'s centre.' },
      modern: { name: 'Hridaya-Ratha Mk.II (Mobile Council Vehicle)', desc: 'A mobile council chamber — twelve advisors seated in a ring around Dvadashashringa as the vehicle moves. The central command vehicle for all inter-regional coordination. Always moving, always at the heart.' }
    }
  },

  {
    id: 'chhattisgarh', state: 'Chhattisgarh', region: 'central',
    kingdomName: 'Dandakaranya — The Forest of Destiny',
    theme: 'The forest remembers what Rama walked through — and she is still keeping it',
    landscape: 'Bastar forest — Dandakaranya ancient woodland — Chitrakoot waterfalls — tribal homeland deep interior',
    colors: { primary: '#ffaa00', secondary: '#c0392b' },
    hero: { name: 'Dandakarni', title: 'The Forest\'s Daughter', gender: 'female' },
    emblem: 'A wild buffalo rising from Bastar forest floor — Gondi tribal art pattern border — sacred fire above',
    animal: { name: 'Wild Buffalo (Indian Bison — Gaur)', scientific: 'Bubalus arnee', symbolism: 'Forest sovereignty, tribal memory, the animal that the forest itself protects', power: 'Matted hair with forest flowers and thorns — war paint from berry-dye — the forest fights alongside her' },
    bird: { name: 'Hill Myna (Gracula religiosa)', symbolism: 'The Bastar forest speaker — mimics and remembers every sound of the forest — the forest\'s memory made vocal', role: 'Memorises and repeats enemy plans overheard in forest camps — Dandakarni\'s oldest intelligence source' },
    tattooPath: 'media/states/central/chhattisgarh/stories/dandakaranya/tattoos/',
    dress: 'Matted hair with forest flowers and thorns — war paint from berry-dye — buffalo-hide armor with Gondi geometric inlay',
    culture: 'Bastar tribal civilisation — Gondi oral tradition and Gond painting — forest food sovereignty movement — ancient Jagdalpur kingdom heritage and sacred Danteshwari goddess worship',
    food: ['Chila (rice flour crepe — everyday staple)', 'Muthia (steamed rice-lentil dumplings)', 'Bafauri (fermented spiced lentil cake)', 'Faraa (steamed rice flour dumplings in forest leaf)', 'Bore bhaat (tribal ceremonial rice preparation)'],
    weapons: {
      ancient: { name: 'Dandaka-Danda (Forest Staff)', type: 'Staff carved from the heartwood of the Dandakaranya\'s oldest surviving tree', ability: 'The forest fights through it — every strike carries centuries of accumulated force — it has never been broken' },
      modern: { name: 'Vana-Shakti Mk.II', type: 'Bioelectric forest-energy combat staff', ability: 'Channels bio-electric energy from forest root networks — the staff taps into the mycorrhizal network — powered by the forest itself' }
    },
    vehicles: {
      ancient: { name: 'Vana-Vahana (The Wild Buffalo Mount)', desc: 'A wild buffalo named Dandeshwara — not trained, understood. Responds to Dandakarni\'s forest signals. In the Bastar deep interior, no other vehicle moves faster or quieter.' },
      modern: { name: 'Vana-Ratha (Forest Biodiesel Strike Truck)', desc: 'A biodiesel forest vehicle running on forest-derived fuel — built and repaired using local tribal materials. Tracks designed to disturb soil minimally. The vehicle as an extension of the forest food-sovereignty principle.' }
    }
  }

];

// ── Regional names (ancient Indian names) ─────────────────────────────────
window.REGION_NAMES = {
  south:     { name: 'Dakshinapatha', meaning: 'Southern Path' },
  west:      { name: 'Paschimapatha', meaning: 'Western Path' },
  east:      { name: 'Purvapatha',    meaning: 'Eastern Path' },
  north:     { name: 'Uttarapatha',   meaning: 'Northern Path' },
  northeast: { name: 'Pragjyotisha',  meaning: 'Land of Eastern Light' },
  central:   { name: 'Madhyadesa',    meaning: 'Middle Land' }
};

// ── Regional specialties (terrain, climate, warfare) ──────────────────────
window.REGION_SPECIALTIES = {
  south: {
    climate:      'Tropical — hot summers, coastal monsoon, year-round heat',
    terrain:      'River deltas, mangroves, ocean coast, ancient temple plains',
    strongIn:     ['River warfare', 'Coastal naval raids', 'Summer endurance', 'Monsoon water combat', 'Ancient martial arts (Kalaripayattu, Urumi)'],
    weakIn:       ['Snow and extreme cold', 'High-altitude mountain passes', 'Desert sand survival'],
    warfareStyle: 'River and coastal naval supremacy — close-quarter ancient martial arts — summer-heat endurance campaigns',
    rating:       { summer: 5, monsoon: 4, winter: 2, snow: 1, desert: 2, forest: 3, naval: 5, plains: 3 }
  },
  west: {
    climate:      'Varied — coastal monsoon (Goa/Maharashtra), arid desert (Rajasthan), salt-flat heat (Gujarat)',
    terrain:      'Ocean coast, hill forts, Thar desert, Rann salt flats, Arabian Sea',
    strongIn:     ['Sea navigation and naval dominance', 'Hill fort guerrilla warfare', 'Desert mirage tactics', 'Salt-flat survival', 'Trading route control'],
    weakIn:       ['Dense jungle warfare', 'Extreme cold and snow', 'Flood-plain combat'],
    warfareStyle: 'Hill fort guerrilla (Maharashtra) — Ocean raiding and naval (Goa/Gujarat) — Desert deception and endurance (Rajasthan)',
    rating:       { summer: 4, monsoon: 3, winter: 2, snow: 1, desert: 5, forest: 2, naval: 5, plains: 3 }
  },
  east: {
    climate:      'Monsoon-dominant — heavy floods, winter-rainy season, humid delta year-round',
    terrain:      'Gangetic plains, Sundarbans mangroves, Odisha coast, Chota Nagpur plateau forest',
    strongIn:     ['Monsoon and flood-plain combat', 'Amphibious river operations', 'Rain and wet-terrain endurance', 'Forest guerrilla (Jharkhand)', 'Coastal temple-plain warfare'],
    weakIn:       ['Desert and arid survival', 'Extreme cold mountain warfare', 'Open-field cavalry charges'],
    warfareStyle: 'Flood and monsoon amphibious warfare — mangrove ambush — river delta control — everything works in rain',
    rating:       { summer: 3, monsoon: 5, winter: 4, snow: 1, desert: 1, forest: 4, naval: 3, plains: 3 }
  },
  north: {
    climate:      'Extreme winters, deep snow — summers hot on plains, cold at altitude',
    terrain:      'Himalayan foothills, Gangetic plains, mountain passes, snow fields',
    strongIn:     ['Snow and winter combat', 'Ice-cutting and cold survival', 'Mountain pass control', 'Plains cavalry', 'Winter-siege endurance'],
    weakIn:       ['Dense jungle warfare', 'Extreme monsoon flood combat', 'Tropical heat endurance'],
    warfareStyle: 'Snow and ice warfare — mountain pass ambush — winter siege — plains cavalry in cold months — ice-cutting as combat and survival art',
    rating:       { summer: 3, monsoon: 2, winter: 5, snow: 5, desert: 2, forest: 2, naval: 2, plains: 4 }
  },
  northeast: {
    climate:      'Heaviest monsoon on earth (Meghalaya), dense humid forest, year-round green',
    terrain:      'Dense bamboo jungle, highland forest, river gorges, floating islands (Manipur)',
    strongIn:     ['Jungle and forest guerrilla warfare', 'Tribal ambush formations', 'Bamboo and forest combat', 'Monsoon endurance', 'Vertical terrain warfare'],
    weakIn:       ['Open desert and plains warfare', 'Large-scale naval operations', 'Mass cavalry formations'],
    warfareStyle: 'Tribal guerrilla — forest ambush — bamboo-terrain combat — monsoon endurance — every tree is a weapon',
    rating:       { summer: 3, monsoon: 5, winter: 3, snow: 2, desert: 1, forest: 5, naval: 2, plains: 2 }
  },
  central: {
    climate:      'Moderate — hot summers, mild winters, moderate monsoon — no extremes',
    terrain:      'Mixed flatlands, Vindhya hills, Narmada river valley, Bastar forest',
    strongIn:     ['Sustained agricultural-logistics warfare', 'Moderate all-season operations', 'Forest (Chhattisgarh)', 'River valley control', 'Long-campaign endurance'],
    weakIn:       ['Extreme cold or heat', 'Heavy monsoon floods', 'Naval operations', 'Mountain and snow warfare'],
    warfareStyle: 'Crossroads strategy — sustained moderate-weather campaigns — forest deep operations (Chhattisgarh) — agricultural support network logistics',
    rating:       { summer: 3, monsoon: 3, winter: 3, snow: 1, desert: 2, forest: 4, naval: 1, plains: 4 }
  }
};

// ── Story URL per kingdom (primary story page) ────────────────────────────
window.KINGDOM_STORY_URLS = {
  'andhra-pradesh':  'stories/asia/india/south/andhra-pradesh/index.html',
  'telangana':       'stories/asia/india/south/telangana/index.html',
  'tamil-nadu':      'stories/asia/india/south/tamil-nadu/index.html',
  'kerala':          'stories/asia/india/south/kerala/index.html',
  'karnataka':       'stories/asia/india/south/karnataka/vijayanagara-reborn.html',
  'maharashtra':     'stories/asia/india/west/maharashtra/index.html',
  'gujarat':         'stories/asia/india/west/gujarat/index.html',
  'goa':             'stories/asia/india/west/goa/index.html',
  'rajasthan':       'stories/asia/india/west/rajasthan/index.html',
  'west-bengal':     'stories/asia/india/east/west-bengal/index.html',
  'odisha':          'stories/asia/india/east/odisha/index.html',
  'bihar':           'stories/asia/india/east/bihar/index.html',
  'jharkhand':       'stories/asia/india/east/jharkhand/index.html',
  'uttar-pradesh':   'stories/asia/india/north/uttar-pradesh/index.html',
  'uttarakhand':     'stories/asia/india/north/uttarakhand/index.html',
  'himachal-pradesh':'stories/asia/india/north/himachal-pradesh/index.html',
  'punjab':          'stories/asia/india/north/punjab/index.html',
  'haryana':         'stories/asia/india/north/haryana/index.html',
  'assam':           'stories/asia/india/northeast/assam/index.html',
  'arunachal-pradesh':'stories/asia/india/northeast/arunachal-pradesh/index.html',
  'manipur':         'stories/asia/india/northeast/manipur/index.html',
  'meghalaya':       'stories/asia/india/northeast/meghalaya/index.html',
  'mizoram':         'stories/asia/india/northeast/mizoram/index.html',
  'nagaland':        'stories/asia/india/northeast/nagaland/index.html',
  'sikkim':          'stories/asia/india/northeast/sikkim/index.html',
  'tripura':         'stories/asia/india/northeast/tripura/index.html',
  'madhya-pradesh':  'stories/asia/india/central/madhya-pradesh/index.html',
  'chhattisgarh':    'stories/asia/india/central/chhattisgarh/index.html'
};
