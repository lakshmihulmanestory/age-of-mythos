// Hulmane-The-Saga — Character Portrait Renderer
// Generates SVG portraits for all 28 kingdoms: hero, villain, animal & weapons
// Each hero inspired by Hindu gods; villains are the same animal's dark spirit
// Villain weapon: modern + dark version of hero's weapon

window.VILLAIN_DATA = {
  "andhra-pradesh":  { name:"Kalaniksha",     title:"The Black Wind",        deity:"Kali's Shadow",    weapon:"Venom-tipped neural whips Mrityu & Sapa",  modern:"Nano-toxin smart whips with AI targeting" },
  "telangana":       { name:"Chitrabheda",    title:"Destroyer of Patterns", deity:"Vritra reborn",    weapon:"Explosive shuriken discs Krodha & Asura",   modern:"Micro-nuke guided disc drones" },
  "tamil-nadu":      { name:"Palinisi",       title:"She Who Withers",       deity:"Kali aspect",      weapon:"Poisoned crescent staff Shula-Mara",         modern:"Bio-toxin energy staff with sonic blade" },
  "kerala":          { name:"Kala-Hasta",     title:"The Black Hand",        deity:"Ravana's general", weapon:"Void axe Tamas-Parashu forged in dark iron",  modern:"Dark-matter axe with graviton collapse" },
  "karnataka":       { name:"Bhoomi-Takshaka",title:"The Earth Serpent",     deity:"Takshaka reborn",  weapon:"Serpent-tipped war mace Visha-Danda",         modern:"Seismic mace with underground tremor tech" },
  "maharashtra":     { name:"Vanaraksha",     title:"False Forest King",     deity:"Vali's corruption",weapon:"Dark climbing blades Kala-Vanara",            modern:"Magnetic grapple talons with EMP burst" },
  "gujarat":         { name:"Kala-Simha",     title:"The Shadow Lion",       deity:"Narasimha's shadow",weapon:"Obsidian broadsword Tamasa-Garjana",         modern:"Dark energy greatsword with gravity field" },
  "goa":             { name:"Maha-Vega",      title:"The Devouring Tide",    deity:"Vritra of seas",   weapon:"Storm cutlass Samudra-Mara and wave-chain",  modern:"Electromagnetic tide cannon with tentacle chains" },
  "rajasthan":       { name:"Maru-Yama",      title:"Desert Reaper",         deity:"Yama's dunes",     weapon:"Black mirrored scythe Mrityu-Maya",           modern:"Quantum holodagger with lethal nanite swarm" },
  "west-bengal":     { name:"Kala-Nadi",      title:"Black River",           deity:"Kali of waters",   weapon:"Venom spear-net Visha-Jaal (Poison Web)",     modern:"Dark biotech spear with hydrotoxin net" },
  "odisha":          { name:"Chakra-Bheda",   title:"Wheel Breaker",         deity:"Ahamkara avatar",  weapon:"Shattered chakram Vibhrama (Delusion)",       modern:"Anti-gravity chakram that disrupts tech fields" },
  "bihar":           { name:"Tamasa",         title:"Pure Darkness",         deity:"Vritra avatar",    weapon:"Void gauntlets Krodha-Vajra amplifying rage",  modern:"Dark-matter gauntlets with collapsar punch" },
  "jharkhand":       { name:"Vana-Raksha",    title:"Forest Demon",          deity:"Mahishasura echo",weapon:"Cursed tribal bow Mrityuvriksha (Death Tree)", modern:"Bio-weapon smart bow with plague arrows" },
  "uttar-pradesh":   { name:"Adharma",        title:"The Lawless One",       deity:"Duryodhana's spirit",weapon:"Twelve-cursed spear Adharma-Shool",         modern:"Quantum spear causing timeline corruption" },
  "uttarakhand":     { name:"Hima-Mara",      title:"Ice Death",             deity:"Winter's demon",   weapon:"Cryo-dagger Kasturi-Visha and plague darts", modern:"Cryogenic nerve-agent blades with cryo drones" },
  "himachal-pradesh":{ name:"Hima-Asura",     title:"Frost Demon",           deity:"Shiva's wrath",    weapon:"Ice daggers Himashool-Rakta (Blood Ice)",    modern:"Thermite-cryo hybrid claws with ice cannon" },
  "punjab":          { name:"Panchavish",     title:"Five Poisons",          deity:"Adharmic warrior", weapon:"Poisoned chakram Visha-Panchnad & dark blade",modern:"Neural-toxin chakram drone with dark sword" },
  "haryana":         { name:"Kuru-Bhasma",    title:"Ash of Kuru",           deity:"Duryodhana reborn",weapon:"Cursed iron mace Adharma-Garjana",            modern:"Seismic war hammer with battlefield EMP" },
  "assam":           { name:"Kama-Mara",      title:"Desire's End",          deity:"Mahishasura reborn",weapon:"Rhino-spike club Kama-Shool and dark shield", modern:"Kinetic destroyer club with neural disruptor" },
  "arunachal-pradesh":{ name:"Asta-Asura",   title:"Twilight Demon",        deity:"Rahu avatar",      weapon:"Dusk-forged spear Asta (Sunset) dark variant",modern:"Dark solar spear that absorbs and weaponizes light" },
  "manipur":         { name:"Tamasa-Nrita",   title:"Dark Dancer",           deity:"Kaliya Naga dance", weapon:"Dark sword Ta-Mara and shadow lance Thang-Kala",modern:"Holographic energy blades with shadow drones" },
  "meghalaya":       { name:"Megha-Daitya",   title:"Storm Fiend",           deity:"Vritra of clouds", weapon:"Storm staff Megha-Shool (Cloud Spike)",       modern:"Lightning rod staff with storm nanocloud" },
  "mizoram":         { name:"Parvata-Asura",  title:"Mountain Demon",        deity:"Mountain's wrath", weapon:"Dark bamboo spear Hnam-Kala (Clan Death)",    modern:"Carbon nanotube spear with mountain-quake tech" },
  "nagaland":        { name:"Naga-Rakshasa",  title:"Serpent Fiend",         deity:"Takshaka's kin",   weapon:"Corrupted dao Dzukou-Mara and venom shield",  modern:"Vibro-dao with neurotoxin delivery system" },
  "sikkim":          { name:"Krodha",         title:"Pure Wrath",            deity:"Kali's fury",      weapon:"Wrath-mace Krodha-Mani (Anger Jewel)",        modern:"Anti-monk gyroscopic crusher with berserker mode" },
  "tripura":         { name:"Tripura-Asura",  title:"Three Cities' Shadow",  deity:"Tripurasura reborn",weapon:"Triple crossbow Tri-Visha (Three Poisons)",  modern:"AI triple crossbow with city-cracker missiles" },
  "madhya-pradesh":  { name:"Adharma-Kendra", title:"Chaos Heart",           deity:"Adharma itself",   weapon:"Twelve-cursed staff Danda-Krodha (Wrath Rod)",modern:"Graviton staff that tears rifts in spacetime" },
  "chhattisgarh":    { name:"Dandaka-Rakshasa",title:"Forest Ravager",       deity:"Mahishasura prime",weapon:"Void war hammer Vana-Mara (Forest Death)",    modern:"Plasma war hammer with forest-fire ionizer" }
};

// Modern weapon upgrades for heroes
window.MODERN_WEAPONS = {
  "andhra-pradesh":   "Smart drone-guided energy whip-swords with plasma edge",
  "telangana":        "AI-homing chakra discs with explosive return capability",
  "tamil-nadu":       "Plasma crescent staff with barrier-cutting energy blade",
  "kerala":           "Gravity-enhanced plasma axe with orbital strike mode",
  "karnataka":        "Cybernetic seismic mace with underground sensor array",
  "maharashtra":      "Magnetic grappling hooks with EMP burst and jet assist",
  "gujarat":          "Exo-suit graviton broadsword that multiplies striking force",
  "goa":              "Railgun cutlass Samudra with electromagnetic wave-chain",
  "rajasthan":        "Quantum holodagger with tactical nanite smoke swarm",
  "west-bengal":      "Biotech spear-net with water-control and current guidance",
  "odisha":           "Plasma orbital chakram with satellite-guidance return",
  "bihar":            "Powered exo-gauntlets with collapsar shockwave generators",
  "jharkhand":        "Smart titan bow firing explosive smart-arrow swarms",
  "uttar-pradesh":    "Quantum twelve-spear with parallel timeline pierce",
  "uttarakhand":      "Cryo-knife with precision tranquilizer nanodart system",
  "himachal-pradesh": "Thermite ice-daggers that burn and freeze simultaneously",
  "punjab":           "Plasma chakram drone + photon energy kirpan",
  "haryana":          "Seismic war mace with battlefield shockwave amplifiers",
  "assam":            "Kinetic tower shield and sonic rhino-horn mace",
  "arunachal-pradesh":"Solar plasma spear with stored-sunlight burst mode",
  "manipur":          "Photon sword + plasma lance, dance-combat AI assist",
  "meghalaya":        "Weather-control staff with lightning capacitor and storm drone",
  "mizoram":          "Carbon nanotube bamboo staff with EMP shield emitter",
  "nagaland":         "Vibro-dao with neurotoxin injection + smart reactive shield",
  "sikkim":           "Gyroscopic chakra-mace with AI precision + holographic decoys",
  "tripura":          "AI triple-crossbow firing plasma, toxin, and EMP rounds",
  "madhya-pradesh":   "Graviton twelve-staff with orbital spike-drone deployment",
  "chhattisgarh":     "Plasma war hammer with forest-fire ionizer and shockwave"
};

// Hindu god / Mahabharata inspirations per hero
window.DEITY_DATA = {
  "andhra-pradesh":   { hero:"Saraswati + Ganga", note:"River goddess of arts & speed" },
  "telangana":        { hero:"Arjuna + Ekalavya",  note:"Mahabharata's supreme archer of shadows" },
  "tamil-nadu":       { hero:"Parvati + Murugan",  note:"Mountain goddess, patron of Tamil arts" },
  "kerala":           { hero:"Parashurama avatar", note:"Vishnu's sixth avatar, axe-bearing sage-warrior" },
  "karnataka":        { hero:"Indrani + Gajasena", note:"Queen of heaven, commands elephant armies" },
  "maharashtra":      { hero:"Hanuman + Shivaji",  note:"Sky-leaping warrior, fort-guardian spirit" },
  "gujarat":          { hero:"Narasimha avatar",   note:"Vishnu's lion-man avatar, unstoppable destroyer" },
  "goa":              { hero:"Varuna + Samudra",   note:"God of oceans, master of cosmic waters" },
  "rajasthan":        { hero:"Maya-Devi + Shakuni",note:"Goddess of illusion, Mahabharata's master strategist" },
  "west-bengal":      { hero:"Ganga + Kali",       note:"Sacred river & goddess of time and change" },
  "odisha":           { hero:"Jagannath + Dharma",  note:"Lord of universe, keeper of cosmic wheel" },
  "bihar":            { hero:"Indra + Bhima",       note:"Thunder-god's might, Bhima's berserker power" },
  "jharkhand":        { hero:"Ganesha + Aranya",   note:"Forest-Ganesha, tribal memory of elephants" },
  "uttar-pradesh":    { hero:"Krishna + Dharmaraja",note:"Krishna's twelve-chapter cosmic wisdom" },
  "uttarakhand":      { hero:"Shiva-Kedarnath",    note:"Shiva of the snows, mountain lord" },
  "himachal-pradesh": { hero:"Durga + Himavat",    note:"Mountain-born Durga, apex predator divine" },
  "punjab":           { hero:"Kartikeya + Arjuna",  note:"Warrior-god on peacock, five-river champion" },
  "haryana":          { hero:"Yudhishthira + Dharma",note:"Dharma-king of Kurukshetra, righteous warrior" },
  "assam":            { hero:"Kamakhya + Shakti",  note:"Tantric goddess of power, rhinoceros-strength" },
  "arunachal-pradesh":{ hero:"Surya + Karna",       note:"Sun-god's dawn warrior, Mahabharata's tragic hero" },
  "manipur":          { hero:"Krishna + Arjuna",    note:"Krishna's Raas Leela dancer, Arjuna's Manipur visit" },
  "meghalaya":        { hero:"Indra + Meghaduta",  note:"Cloud-king, Meghaduta's messenger spirit" },
  "mizoram":          { hero:"Shiva + Nandi",       note:"Shiva's mountain guardian, selfless servant" },
  "nagaland":         { hero:"Shakti + Naga-Devi",  note:"Serpent goddess of valley, tribal Shakti" },
  "sikkim":           { hero:"Avalokitesvara + Shiva",note:"Bodhisattva of compassion, non-violent strength" },
  "tripura":          { hero:"Tripurasundari + Shiva",note:"Three-city goddess, Shiva's Tripurari aspect" },
  "madhya-pradesh":   { hero:"Vishnu + Dharma",     note:"Vishnu's twelve-fold cosmic balance" },
  "chhattisgarh":     { hero:"Durga + Mahishasuramardini",note:"Durga who slays the buffalo-demon" }
};

// Animal visual type mapping
const ANIMAL_TYPE_MAP = {
  "Blackbuck":"blackbuck", "Spotted Deer":"spotted-deer", "Nilgiri Tahr":"tahr",
  "Indian Elephant":"elephant", "Indian Giant Squirrel":"squirrel", "Asiatic Lion":"lion",
  "Gaur":"gaur", "Chinkara":"chinkara", "Fishing Cat":"fishing-cat",
  "Sambar Deer":"sambar", "Barasingha":"barasingha", "Alpine Musk Deer":"musk-deer",
  "Snow Leopard":"snow-leopard", "Indian One-horned Rhinoceros":"rhino",
  "Gayal":"gayal", "Sangai":"sangai", "Clouded Leopard":"clouded-leopard",
  "Serow":"serow", "Phayre's Langur":"langur", "Wild Buffalo":"buffalo",
  "Red Panda":"red-panda"
};

// ─── SVG ANIMAL DRAWINGS ────────────────────────────────────────────────
function drawAnimal(type, cx, cy, scale, color, glowColor, dark) {
  const s = scale;
  const g = glowColor || color;
  const fill = dark ? "#111" : color;
  const stroke = dark ? "#f00" : g;
  const glow = dark ? "" : `<circle cx="${cx}" cy="${cy}" r="${s*1.6}" fill="${g}" opacity="0.15"/>`;

  const shapes = {
    "blackbuck": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.9}" ry="${s*0.4}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.6}" cy="${cy-s*0.3}" rx="${s*0.35}" ry="${s*0.3}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <ellipse cx="${cx}" cy="${cy+s*0.25}" rx="${s*0.65}" ry="${s*0.12}" fill="white" opacity="${dark?0:0.25}"/>
      <path d="M${cx+s*0.7},${cy-s*0.5} C${cx+s*0.85},${cy-s*1.0} ${cx+s*0.75},${cy-s*1.4} ${cx+s*0.55},${cy-s*1.2} C${cx+s*0.45},${cy-s*1.0} ${cx+s*0.55},${cy-s*0.7} ${cx+s*0.65},${cy-s*0.5}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.85},${cy-s*0.48} C${cx+s*1.0},${cy-s*0.9} ${cx+s*0.9},${cy-s*1.3} ${cx+s*0.72},${cy-s*1.1}" stroke="${stroke}" stroke-width="${s*0.03}" fill="none"/>
      <line x1="${cx-s*0.5}" y1="${cy+s*0.5}" x2="${cx-s*0.55}" y2="${cy+s*1.1}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx-s*0.1}" y1="${cy+s*0.5}" x2="${cx-s*0.1}" y2="${cy+s*1.1}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.3}" y1="${cy+s*0.5}" x2="${cx+s*0.35}" y2="${cy+s*1.1}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.65}" y1="${cy+s*0.3}" x2="${cx+s*0.7}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <path d="M${cx-s*0.95},${cy} C${cx-s*1.1},${cy-s*0.1} ${cx-s*1.05},${cy+s*0.2}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>`,

    "elephant": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*1.2}" ry="${s*0.8}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <ellipse cx="${cx+s*0.9}" cy="${cy-s*0.5}" rx="${s*0.5}" ry="${s*0.45}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*1.05}" cy="${cy-s*0.8}" rx="${s*0.55}" ry="${s*0.28}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}" opacity="0.6"/>
      <ellipse cx="${cx-s*0.85}" cy="${cy-s*0.8}" rx="${s*0.45}" ry="${s*0.22}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}" opacity="0.6"/>
      <path d="M${cx+s*0.9},${cy-s*0.05} C${cx+s*0.85},${cy+s*0.5} ${cx+s*0.65},${cy+s*0.8} ${cx+s*0.5},${cy+s*0.6}" stroke="${stroke}" stroke-width="${s*0.06}" fill="none"/>
      <line x1="${cx+s*0.55},${cy-s*0.3}" x2="${cx+s*0.7},${cy-s*0.3}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <line x1="${cx-s*0.6}" y1="${cy+s*0.8}" x2="${cx-s*0.6}" y2="${cy+s*1.5}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx-s*0.2}" y1="${cy+s*0.8}" x2="${cx-s*0.2}" y2="${cy+s*1.5}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx+s*0.2}" y1="${cy+s*0.8}" x2="${cx+s*0.2}" y2="${cy+s*1.5}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx+s*0.6}" y1="${cy+s*0.7}" x2="${cx+s*0.6}" y2="${cy+s*1.4}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <path d="M${cx-s*1.1},${cy+s*0.5} C${cx-s*1.3},${cy+s*0.2} ${cx-s*1.2},${cy-s*0.1} ${cx-s*1.0},${cy}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>`,

    "lion": `
      ${glow}
      <circle cx="${cx+s*0.7}" cy="${cy-s*0.4}" r="${s*0.55}" fill="${dark?"#300":"#8B4513"}" opacity="0.6"/>
      <circle cx="${cx+s*0.7}" cy="${cy-s*0.4}" r="${s*0.35}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*1.0}" ry="${s*0.55}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx-s*0.5}" y1="${cy+s*0.65}" x2="${cx-s*0.55}" y2="${cy+s*1.3}" stroke="${stroke}" stroke-width="${s*0.1}"/>
      <line x1="${cx-s*0.1}" y1="${cy+s*0.65}" x2="${cx-s*0.12}" y2="${cy+s*1.3}" stroke="${stroke}" stroke-width="${s*0.1}"/>
      <line x1="${cx+s*0.3}" y1="${cy+s*0.65}" x2="${cx+s*0.3}" y2="${cy+s*1.3}" stroke="${stroke}" stroke-width="${s*0.1}"/>
      <line x1="${cx+s*0.7}" y1="${cy+s*0.45}" x2="${cx+s*0.75}" y2="${cy+s*1.1}" stroke="${stroke}" stroke-width="${s*0.1}"/>
      <path d="M${cx-s*1.1},${cy-s*0.1} C${cx-s*1.3},${cy-s*0.5} ${cx-s*1.1},${cy-s*0.8} ${cx-s*0.7},${cy-s*0.6}" stroke="${stroke}" stroke-width="${s*0.05}" fill="none"/>
      <circle cx="${cx-s*1.1},${cy-s*0.7}" r="${s*0.08}" fill="${stroke}"/>`,

    "rhino": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*1.2}" ry="${s*0.65}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <ellipse cx="${cx+s*0.9}" cy="${cy-s*0.35}" rx="${s*0.45}" ry="${s*0.38}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <path d="M${cx+s*1.2},${cy-s*0.6} L${cx+s*1.55},${cy-s*0.75} L${cx+s*1.35},${cy-s*0.45}" fill="${stroke}" stroke="${stroke}" stroke-width="${s*0.02}"/>
      <line x1="${cx-s*0.6}" y1="${cy+s*0.75}" x2="${cx-s*0.6}" y2="${cy+s*1.4}" stroke="${stroke}" stroke-width="${s*0.14}"/>
      <line x1="${cx-s*0.1}" y1="${cy+s*0.75}" x2="${cx-s*0.1}" y2="${cy+s*1.4}" stroke="${stroke}" stroke-width="${s*0.14}"/>
      <line x1="${cx+s*0.4}" y1="${cy+s*0.7}" x2="${cx+s*0.4}" y2="${cy+s*1.35}" stroke="${stroke}" stroke-width="${s*0.14}"/>
      <line x1="${cx+s*0.85}" y1="${cy+s*0.55}" x2="${cx+s*0.85}" y2="${cy+s*1.2}" stroke="${stroke}" stroke-width="${s*0.14}"/>`,

    "snow-leopard": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*0.9}" ry="${s*0.4}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.7}" cy="${cy-s*0.25}" rx="${s*0.3}" ry="${s*0.28}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      ${dark?"":"<circle cx='"+(cx-s*0.2)+"' cy='"+(cy-s*0.1)+"' r='"+(s*0.1)+"' fill='"+stroke+"' opacity='0.5'/><circle cx='"+(cx+s*0.1)+"' cy='"+(cy+s*0.1)+"' r='"+(s*0.08)+"' fill='"+stroke+"' opacity='0.5'/>"}
      <path d="M${cx-s*1.1},${cy} C${cx-s*1.6},${cy+s*0.3} ${cx-s*1.5},${cy+s*0.7} ${cx-s*1.2},${cy+s*0.6}" stroke="${stroke}" stroke-width="${s*0.07}" fill="none"/>
      <line x1="${cx-s*0.4}" y1="${cy+s*0.4}" x2="${cx-s*0.45}" y2="${cy+s*1.0}" stroke="${stroke}" stroke-width="${s*0.07}"/>
      <line x1="${cx}" y1="${cy+s*0.4}" x2="${cx}" y2="${cy+s*1.0}" stroke="${stroke}" stroke-width="${s*0.07}"/>
      <line x1="${cx+s*0.4}" y1="${cy+s*0.35}" x2="${cx+s*0.4}" y2="${cy+s*0.95}" stroke="${stroke}" stroke-width="${s*0.07}"/>
      <line x1="${cx+s*0.7}" y1="${cy+s*0.2}" x2="${cx+s*0.7}" y2="${cy+s*0.8}" stroke="${stroke}" stroke-width="${s*0.07}"/>`,

    "red-panda": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*0.65}" ry="${s*0.35}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <circle cx="${cx+s*0.5}" cy="${cy-s*0.25}" r="${s*0.3}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.4},${cy-s*0.5} L${cx+s*0.3},${cy-s*0.7}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <path d="M${cx+s*0.6},${cy-s*0.5} L${cx+s*0.7},${cy-s*0.7}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <path d="M${cx-s*0.65},${cy+s*0.1} C${cx-s*1.2},${cy+s*0.3} ${cx-s*1.25},${cy+s*0.7} ${cx-s*1.0},${cy+s*0.6}" stroke="${stroke}" stroke-width="${s*0.1}" fill="none"/>
      <line x1="${cx-s*0.3}" y1="${cy+s*0.35}" x2="${cx-s*0.3}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.1}" y1="${cy+s*0.35}" x2="${cx+s*0.1}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.4}" y1="${cy+s*0.28}" x2="${cx+s*0.4}" y2="${cy+s*0.83}" stroke="${stroke}" stroke-width="${s*0.06}"/>`,

    "barasingha": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.85}" ry="${s*0.42}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.65}" cy="${cy-s*0.28}" rx="${s*0.28}" ry="${s*0.26}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.5},${cy-s*0.5} C${cx+s*0.3},${cy-s*1.0} ${cx+s*0.4},${cy-s*1.4} ${cx+s*0.6},${cy-s*1.6} C${cx+s*0.75},${cy-s*1.8} ${cx+s*0.9},${cy-s*1.5} ${cx+s*0.8},${cy-s*1.1} C${cx+s*0.75},${cy-s*0.9} ${cx+s*0.7},${cy-s*0.7} ${cx+s*0.65},${cy-s*0.55}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.55},${cy-s*0.8} L${cx+s*0.35},${cy-s*1.2}" stroke="${stroke}" stroke-width="${s*0.03}" fill="none"/>
      <path d="M${cx+s*0.65},${cy-s*1.0} L${cx+s*0.85},${cy-s*1.3}" stroke="${stroke}" stroke-width="${s*0.03}" fill="none"/>
      <path d="M${cx+s*0.68},${cy-s*0.5} C${cx+s*0.9},${cy-s*0.95} ${cx+s*0.85},${cy-s*1.35} ${cx+s*1.0},${cy-s*1.5}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.9},${cy-s*0.8} L${cx+s*1.1},${cy-s*1.1}" stroke="${stroke}" stroke-width="${s*0.03}" fill="none"/>
      <line x1="${cx-s*0.45}" y1="${cy+s*0.52}" x2="${cx-s*0.48}" y2="${cy+s*1.15}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx-s*0.1}" y1="${cy+s*0.52}" x2="${cx-s*0.1}" y2="${cy+s*1.15}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.3}" y1="${cy+s*0.52}" x2="${cx+s*0.32}" y2="${cy+s*1.15}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.6}" y1="${cy+s*0.42}" x2="${cx+s*0.62}" y2="${cy+s*1.05}" stroke="${stroke}" stroke-width="${s*0.06}"/>`,

    "gaur": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*1.1}" ry="${s*0.6}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <ellipse cx="${cx+s*0.85}" cy="${cy-s*0.4}" rx="${s*0.38}" ry="${s*0.34}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <path d="M${cx+s*0.75},${cy-s*0.65} L${cx+s*0.4},${cy-s*0.9} M${cx+s*0.95},${cy-s*0.65} L${cx+s*1.25},${cy-s*0.85}" stroke="${stroke}" stroke-width="${s*0.06}" fill="none"/>
      <ellipse cx="${cx}" cy="${cy+s*0.55}" rx="${s*0.75}" ry="${s*0.12}" fill="white" opacity="${dark?0:0.2}"/>
      <line x1="${cx-s*0.55}" y1="${cy+s*0.6}" x2="${cx-s*0.6}" y2="${cy+s*1.3}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx-s*0.1}" y1="${cy+s*0.6}" x2="${cx-s*0.1}" y2="${cy+s*1.3}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx+s*0.35}" y1="${cy+s*0.6}" x2="${cx+s*0.35}" y2="${cy+s*1.3}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx+s*0.75}" y1="${cy+s*0.5}" x2="${cx+s*0.75}" y2="${cy+s*1.2}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <path d="M${cx-s*1.0},${cy+s*0.3} C${cx-s*1.25},${cy} ${cx-s*1.2},${cy-s*0.3}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>`,

    "spotted-deer": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.8}" ry="${s*0.38}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.6}" cy="${cy-s*0.25}" rx="${s*0.26}" ry="${s*0.24}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      ${dark?"":"<circle cx='"+(cx-s*0.2)+"' cy='"+(cy)+"' r='"+(s*0.06)+"' fill='white' opacity='0.5'/><circle cx='"+(cx+s*0.1)+"' cy='"+(cy+s*0.15)+"' r='"+(s*0.05)+"' fill='white' opacity='0.5'/><circle cx='"+(cx-s*0.4)+"' cy='"+(cy+s*0.15)+"' r='"+(s*0.05)+"' fill='white' opacity='0.5'/>"}
      <path d="M${cx+s*0.5},${cy-s*0.48} C${cx+s*0.4},${cy-s*0.9} ${cx+s*0.5},${cy-s*1.2} ${cx+s*0.65},${cy-s*1.3}" stroke="${stroke}" stroke-width="${s*0.03}" fill="none"/>
      <path d="M${cx+s*0.6},${cy-s*0.48} C${cx+s*0.75},${cy-s*0.85} ${cx+s*0.7},${cy-s*1.1} ${cx+s*0.82},${cy-s*1.2}" stroke="${stroke}" stroke-width="${s*0.03}" fill="none"/>
      <line x1="${cx-s*0.4}" y1="${cy+s*0.48}" x2="${cx-s*0.43}" y2="${cy+s*1.05}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx}" y1="${cy+s*0.48}" x2="${cx}" y2="${cy+s*1.05}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.3}" y1="${cy+s*0.45}" x2="${cx+s*0.3}" y2="${cy+s*1.02}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.6}" y1="${cy+s*0.35}" x2="${cx+s*0.62}" y2="${cy+s*0.92}" stroke="${stroke}" stroke-width="${s*0.05}"/>`,

    "fishing-cat": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*0.75}" ry="${s*0.35}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.6}" cy="${cy-s*0.22}" rx="${s*0.27}" ry="${s*0.24}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.5},${cy-s*0.44} L${cx+s*0.4},${cy-s*0.6}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <path d="M${cx+s*0.7},${cy-s*0.44} L${cx+s*0.8},${cy-s*0.6}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <path d="M${cx-s*0.8},${cy+s*0.1} C${cx-s*1.3},${cy+s*0.3} ${cx-s*1.2},${cy+s*0.6} ${cx-s*0.95},${cy+s*0.5}" stroke="${stroke}" stroke-width="${s*0.07}" fill="none"/>
      <line x1="${cx-s*0.3}" y1="${cy+s*0.35}" x2="${cx-s*0.3}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.1}" y1="${cy+s*0.35}" x2="${cx+s*0.1}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.45}" y1="${cy+s*0.3}" x2="${cx+s*0.45}" y2="${cy+s*0.85}" stroke="${stroke}" stroke-width="${s*0.06}"/>`,

    "squirrel": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*0.55}" ry="${s*0.32}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <circle cx="${cx+s*0.45}" cy="${cy-s*0.28}" r="${s*0.22}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.35},${cy-s*0.48} L${cx+s*0.28},${cy-s*0.62}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <path d="M${cx+s*0.55},${cy-s*0.48} L${cx+s*0.62},${cy-s*0.62}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <path d="M${cx-s*0.6},${cy-s*0.15} C${cx-s*1.0},${cy-s*0.6} ${cx-s*0.7},${cy-s*1.2} ${cx-s*0.3},${cy-s*0.9} C${cx-s*0.0},${cy-s*0.6} ${cx-s*0.2},${cy-s*0.1}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <line x1="${cx-s*0.2}" y1="${cy+s*0.32}" x2="${cx-s*0.2}" y2="${cy+s*0.8}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.2}" y1="${cy+s*0.32}" x2="${cx+s*0.2}" y2="${cy+s*0.8}" stroke="${stroke}" stroke-width="${s*0.05}"/>`,

    "clouded-leopard": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*0.85}" ry="${s*0.38}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.68}" cy="${cy-s*0.25}" rx="${s*0.28}" ry="${s*0.26}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      ${dark?"":"<path d='M"+(cx-s*0.2)+","+(cy-s*0.15)+" C"+(cx-s*0.1)+","+(cy-s*0.3)+" "+(cx+s*0.1)+","+(cy-s*0.28)+" "+(cx+s*0.2)+","+(cy-s*0.13)+" Z' fill='"+stroke+"' opacity='0.3'/><path d='M"+(cx-s*0.5)+","+(cy+s*0.05)+" C"+(cx-s*0.4)+","+(cy-s*0.1)+" "+(cx-s*0.2)+","+(cy-s*0.08)+" "+(cx-s*0.1)+","+(cy+s*0.07)+" Z' fill='"+stroke+"' opacity='0.3'/>"}
      <path d="M${cx-s*0.9},${cy+s*0.1} C${cx-s*1.5},${cy+s*0.4} ${cx-s*1.4},${cy+s*0.8} ${cx-s*1.1},${cy+s*0.65}" stroke="${stroke}" stroke-width="${s*0.08}" fill="none"/>
      <line x1="${cx-s*0.45}" y1="${cy+s*0.38}" x2="${cx-s*0.45}" y2="${cy+s*0.95}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx-s*0.05}" y1="${cy+s*0.38}" x2="${cx-s*0.05}" y2="${cy+s*0.95}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.35}" y1="${cy+s*0.33}" x2="${cx+s*0.35}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.06}"/>`,

    "buffalo": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*1.15}" ry="${s*0.65}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <ellipse cx="${cx+s*0.85}" cy="${cy-s*0.4}" rx="${s*0.4}" ry="${s*0.36}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <path d="M${cx+s*0.65},${cy-s*0.68} C${cx+s*0.3},${cy-s*1.0} ${cx-s*0.1},${cy-s*1.1} ${cx-s*0.3},${cy-s*0.9}" stroke="${stroke}" stroke-width="${s*0.08}" fill="none"/>
      <path d="M${cx+s*1.05},${cy-s*0.68} C${cx+s*1.3},${cy-s*0.95} ${cx+s*1.6},${cy-s*0.9} ${cx+s*1.5},${cy-s*0.65}" stroke="${stroke}" stroke-width="${s*0.08}" fill="none"/>
      <line x1="${cx-s*0.6}" y1="${cy+s*0.65}" x2="${cx-s*0.65}" y2="${cy+s*1.35}" stroke="${stroke}" stroke-width="${s*0.13}"/>
      <line x1="${cx-s*0.15}" y1="${cy+s*0.65}" x2="${cx-s*0.15}" y2="${cy+s*1.35}" stroke="${stroke}" stroke-width="${s*0.13}"/>
      <line x1="${cx+s*0.35}" y1="${cy+s*0.65}" x2="${cx+s*0.35}" y2="${cy+s*1.35}" stroke="${stroke}" stroke-width="${s*0.13}"/>
      <line x1="${cx+s*0.8}" y1="${cy+s*0.55}" x2="${cx+s*0.8}" y2="${cy+s*1.25}" stroke="${stroke}" stroke-width="${s*0.13}"/>`,

    "tahr": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.75}" ry="${s*0.4}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.55}" cy="${cy-s*0.28}" rx="${s*0.26}" ry="${s*0.25}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.5},${cy-s*0.5} C${cx+s*0.55},${cy-s*0.85} ${cx+s*0.35},${cy-s*1.0}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.6},${cy-s*0.5} C${cx+s*0.75},${cy-s*0.82} ${cx+s*0.9},${cy-s*0.88}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <line x1="${cx-s*0.4}" y1="${cy+s*0.5}" x2="${cx-s*0.42}" y2="${cy+s*1.1}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx}" y1="${cy+s*0.5}" x2="${cx}" y2="${cy+s*1.1}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.35}" y1="${cy+s*0.5}" x2="${cx+s*0.35}" y2="${cy+s*1.1}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.65}" y1="${cy+s*0.38}" x2="${cx+s*0.65}" y2="${cy+s*0.98}" stroke="${stroke}" stroke-width="${s*0.06}"/>`,

    "chinkara": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.72}" ry="${s*0.33}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.55}" cy="${cy-s*0.22}" rx="${s*0.22}" ry="${s*0.21}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.48},${cy-s*0.42} C${cx+s*0.42},${cy-s*0.75} ${cx+s*0.48},${cy-s*1.05} ${cx+s*0.55},${cy-s*1.15}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.62},${cy-s*0.42} C${cx+s*0.72},${cy-s*0.72} ${cx+s*0.7},${cy-s*0.98} ${cx+s*0.78},${cy-s*1.05}" stroke="${stroke}" stroke-width="${s*0.03}" fill="none"/>
      <line x1="${cx-s*0.35}" y1="${cy+s*0.43}" x2="${cx-s*0.38}" y2="${cy+s*0.98}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx}" y1="${cy+s*0.43}" x2="${cx}" y2="${cy+s*0.98}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.3}" y1="${cy+s*0.43}" x2="${cx+s*0.3}" y2="${cy+s*0.98}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.55}" y1="${cy+s*0.33}" x2="${cx+s*0.55}" y2="${cy+s*0.88}" stroke="${stroke}" stroke-width="${s*0.05}"/>`,

    "sambar": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.88}" ry="${s*0.45}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.66}" cy="${cy-s*0.3}" rx="${s*0.3}" ry="${s*0.28}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.54},${cy-s*0.56} C${cx+s*0.35},${cy-s*1.0} ${cx+s*0.4},${cy-s*1.5} ${cx+s*0.6},${cy-s*1.7}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.5},${cy-s*0.9} L${cx+s*0.3},${cy-s*1.1}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.7},${cy-s*0.56} C${cx+s*0.9},${cy-s*0.98} ${cx+s*0.85},${cy-s*1.45} ${cx+s*1.0},${cy-s*1.6}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.9},${cy-s*0.9} L${cx+s*1.1},${cy-s*1.1}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <line x1="${cx-s*0.45}" y1="${cy+s*0.55}" x2="${cx-s*0.47}" y2="${cy+s*1.2}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx-s*0.05}" y1="${cy+s*0.55}" x2="${cx-s*0.05}" y2="${cy+s*1.2}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.35}" y1="${cy+s*0.5}" x2="${cx+s*0.35}" y2="${cy+s*1.15}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.68}" y1="${cy+s*0.4}" x2="${cx+s*0.68}" y2="${cy+s*1.05}" stroke="${stroke}" stroke-width="${s*0.06}"/>`,

    "gayal": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*1.05}" ry="${s*0.58}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <ellipse cx="${cx+s*0.8}" cy="${cy-s*0.38}" rx="${s*0.37}" ry="${s*0.33}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <path d="M${cx+s*0.6},${cy-s*0.65} C${cx+s*0.5},${cy-s*0.95} ${cx+s*0.7},${cy-s*1.1} ${cx+s*0.85},${cy-s*1.0}" stroke="${stroke}" stroke-width="${s*0.06}" fill="none"/>
      <path d="M${cx+s*1.0},${cy-s*0.65} C${cx+s*1.15},${cy-s*0.9} ${cx+s*1.3},${cy-s*0.85} ${cx+s*1.2},${cy-s*0.65}" stroke="${stroke}" stroke-width="${s*0.06}" fill="none"/>
      <line x1="${cx-s*0.55}" y1="${cy+s*0.58}" x2="${cx-s*0.58}" y2="${cy+s*1.25}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx-s*0.1}" y1="${cy+s*0.58}" x2="${cx-s*0.1}" y2="${cy+s*1.25}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx+s*0.35}" y1="${cy+s*0.55}" x2="${cx+s*0.35}" y2="${cy+s*1.22}" stroke="${stroke}" stroke-width="${s*0.12}"/>
      <line x1="${cx+s*0.75}" y1="${cy+s*0.45}" x2="${cx+s*0.75}" y2="${cy+s*1.12}" stroke="${stroke}" stroke-width="${s*0.12}"/>`,

    "sangai": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.8}" ry="${s*0.38}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.62}" cy="${cy-s*0.27}" rx="${s*0.27}" ry="${s*0.25}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.52},${cy-s*0.5} C${cx+s*0.38},${cy-s*0.85} ${cx+s*0.18},${cy-s*0.98} ${cx+s*0.08},${cy-s*0.85}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.72},${cy-s*0.5} C${cx+s*0.88},${cy-s*0.82} ${cx+s*1.05},${cy-s*0.88} ${cx+s*1.0},${cy-s*0.72}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx-s*0.85},${cy+s*0.38} L${cx-s*0.9},${cy+s*0.9} C${cx-s*0.8},${cy+s*1.05} ${cx-s*0.72},${cy+s*0.85}" stroke="${stroke}" stroke-width="${s*0.05}" fill="none"/>
      <line x1="${cx-s*0.5}" y1="${cy+s*0.48}" x2="${cx-s*0.52}" y2="${cy+s*1.08}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx-s*0.08}" y1="${cy+s*0.48}" x2="${cx-s*0.08}" y2="${cy+s*1.08}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.32}" y1="${cy+s*0.45}" x2="${cx+s*0.32}" y2="${cy+s*1.05}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.62}" y1="${cy+s*0.37}" x2="${cx+s*0.62}" y2="${cy+s*0.97}" stroke="${stroke}" stroke-width="${s*0.06}"/>`,

    "musk-deer": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.62}" ry="${s*0.3}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.48}" cy="${cy-s*0.22}" rx="${s*0.22}" ry="${s*0.21}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <line x1="${cx-s*0.3}" y1="${cy+s*0.4}" x2="${cx-s*0.32}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.05}" y1="${cy+s*0.4}" x2="${cx+s*0.05}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.32}" y1="${cy+s*0.4}" x2="${cx+s*0.32}" y2="${cy+s*0.9}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <line x1="${cx+s*0.52}" y1="${cy+s*0.3}" x2="${cx+s*0.52}" y2="${cy+s*0.8}" stroke="${stroke}" stroke-width="${s*0.05}"/>
      <path d="M${cx-s*0.65},${cy} C${cx-s*0.8},${cy-s*0.1} ${cx-s*0.75},${cy+s*0.2}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>`,

    "serow": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+s*0.1}" rx="${s*0.78}" ry="${s*0.42}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <ellipse cx="${cx+s*0.58}" cy="${cy-s*0.25}" rx="${s*0.26}" ry="${s*0.25}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <path d="M${cx+s*0.5},${cy-s*0.48} C${cx+s*0.48},${cy-s*0.78} ${cx+s*0.55},${cy-s*0.95}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <path d="M${cx+s*0.65},${cy-s*0.48} C${cx+s*0.78},${cy-s*0.76} ${cx+s*0.82},${cy-s*0.92}" stroke="${stroke}" stroke-width="${s*0.04}" fill="none"/>
      <ellipse cx="${cx-s*0.1}" cy="${cy+s*0.35}" rx="${s*0.35}" ry="${s*0.12}" fill="white" opacity="${dark?0:0.25}"/>
      <line x1="${cx-s*0.42}" y1="${cy+s*0.52}" x2="${cx-s*0.44}" y2="${cy+s*1.12}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx}" y1="${cy+s*0.52}" x2="${cx}" y2="${cy+s*1.12}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.35}" y1="${cy+s*0.5}" x2="${cx+s*0.35}" y2="${cy+s*1.1}" stroke="${stroke}" stroke-width="${s*0.06}"/>
      <line x1="${cx+s*0.62}" y1="${cy+s*0.38}" x2="${cx+s*0.62}" y2="${cy+s*0.98}" stroke="${stroke}" stroke-width="${s*0.06}"/>`,

    "langur": `
      ${glow}
      <ellipse cx="${cx}" cy="${cy}" rx="${s*0.55}" ry="${s*0.45}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <circle cx="${cx+s*0.35}" cy="${cy-s*0.6}" r="${s*0.28}" fill="${fill}" stroke="${stroke}" stroke-width="${s*0.03}"/>
      <ellipse cx="${cx+s*0.32}" cy="${cy-s*0.6}" rx="${s*0.18}" ry="${s*0.14}" fill="black" opacity="${dark?0.3:0.6}"/>
      <path d="M${cx+s*0.22},${cy-s*0.86} L${cx+s*0.18},${cy-s*1.0}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <path d="M${cx+s*0.48},${cy-s*0.86} L${cx+s*0.52},${cy-s*1.0}" stroke="${stroke}" stroke-width="${s*0.04}"/>
      <path d="M${cx-s*0.6},${cy-s*0.15} C${cx-s*1.0},${cy-s*0.05} ${cx-s*0.9},${cy+s*0.35} ${cx-s*0.6},${cy+s*0.25}" stroke="${stroke}" stroke-width="${s*0.05}" fill="none"/>
      <path d="M${cx+s*0.6},${cy-s*0.15} C${cx+s*1.0},${cy-s*0.05} ${cx+s*0.9},${cy+s*0.35} ${cx+s*0.6},${cy+s*0.25}" stroke="${stroke}" stroke-width="${s*0.05}" fill="none"/>
      <path d="M${cx-s*0.3},${cy+s*0.45} L${cx-s*0.25},${cy+s*0.95}" stroke="${stroke}" stroke-width="${s*0.07}"/>
      <path d="M${cx+s*0.05},${cy+s*0.45} L${cx+s*0.05},${cy+s*0.95}" stroke="${stroke}" stroke-width="${s*0.07}"/>
      <path d="M${cx},${cy+s*0.45} C${cx-s*0.1},${cy+s*0.9} ${cx+s*0.1},${cy+s*1.3} ${cx},${cy+s*1.6}" stroke="${stroke}" stroke-width="${s*0.06}" fill="none"/>`
  };

  return shapes[type] || shapes["spotted-deer"];
}

// ─── HERO FIGURE SVG ────────────────────────────────────────────────────
function drawFigure(x, y, gender, isVillain, kingdomColor, deityType) {
  const fill = isVillain ? "#0a0008" : "#1a0e00";
  const accent = isVillain ? "#cc0000" : kingdomColor;
  const eyeColor = isVillain ? "#ff2200" : "#ffd700";
  const crownColor = isVillain ? "#880000" : kingdomColor;
  const glowOpacity = isVillain ? 0.0 : 0.2;

  // Deity crown overlays
  const DEITY_CROWNS = {
    "ganesha":      `<path d="M${x},${y-82} C${x-12},${y-95} ${x-8},${y-105} ${x},${y-95} C${x+8},${y-105} ${x+12},${y-95} ${x},${y-82}" fill="${crownColor}" opacity="0.8"/>`,
    "durga":        `<path d="M${x-8},${y-82} L${x},${y-105} L${x+8},${y-82}" fill="${crownColor}" opacity="0.8"/><path d="M${x-15},${y-80} L${x-6},${y-100}" stroke="${crownColor}" stroke-width="2" fill="none" opacity="0.8"/>`,
    "vishnu":       `<circle cx="${x}" cy="${y-90}" r="8" fill="${crownColor}" opacity="0.6"/><circle cx="${x}" cy="${y-90}" r="4" fill="none" stroke="${crownColor}" stroke-width="1.5" opacity="0.9"/>`,
    "shiva":        `<path d="M${x-6},${y-88} C${x-2},${y-102} ${x+2},${y-102} ${x+6},${y-88}" fill="${crownColor}" opacity="0.7"/><circle cx="${x}" cy="${y-80}" r="3" fill="${eyeColor}" opacity="0.9"/>`,
    "krishna":      `<path d="M${x-2},${y-86} C${x},${y-105} ${x+2},${y-105} ${x+4},${y-100} C${x+6},${y-108} ${x+8},${y-108} ${x+9},${y-99}" stroke="${crownColor}" stroke-width="1.5" fill="none" opacity="0.8"/>`,
    "narasimha":    `<path d="M${x-14},${y-82} C${x-10},${y-100} ${x},${y-105} ${x+10},${y-100} C${x+14},${y-82}" fill="${crownColor}" opacity="0.5"/>`,
    "surya":        `<circle cx="${x}" cy="${y-90}" r="9" fill="none" stroke="${crownColor}" stroke-width="2" opacity="0.7"/><line x1="${x}" y1="${y-100}" x2="${x}" y2="${y-112}" stroke="${crownColor}" stroke-width="1.5" opacity="0.7"/>`,
    "kartikeya":    `<path d="M${x-3},${y-86} C${x+4},${y-105} ${x+10},${y-108} ${x+12},${y-100}" stroke="${crownColor}" stroke-width="2" fill="none" opacity="0.8"/>`,
    "kali":         `<path d="M${x-8},${y-82} L${x},${y-110} L${x+8},${y-82} M${x-14},${y-84} L${x-6},${y-104} M${x+14},${y-84} L${x+6},${y-104}" stroke="${crownColor}" stroke-width="2" fill="none" opacity="0.8"/>`,
    "default":      `<path d="M${x-10},${y-82} L${x},${y-100} L${x+10},${y-82}" fill="${crownColor}" opacity="0.7"/>`
  };
  const crown = DEITY_CROWNS[deityType] || DEITY_CROWNS["default"];
  const villainCrown = `<path d="M${x-8},${y-82} L${x-4},${y-98} L${x},${y-92} L${x+4},${y-98} L${x+8},${y-82}" fill="#880000" opacity="0.8"/>`;

  const bodyShape = gender === "female"
    ? `<ellipse cx="${x}" cy="${y-32}" rx="14" ry="22" fill="${fill}" stroke="${accent}" stroke-width="1.5"/>
       <ellipse cx="${x}" cy="${y-65}" rx="11" ry="15" fill="${fill}" stroke="${accent}" stroke-width="1.5"/>
       <path d="M${x-8},${y-20} L${x-18},${y+15}" stroke="${accent}" stroke-width="2" fill="none"/>
       <path d="M${x+8},${y-20} L${x+18},${y+15}" stroke="${accent}" stroke-width="2" fill="none"/>
       <ellipse cx="${x}" cy="${y+5}" rx="10" ry="18" fill="${fill}" stroke="${accent}" stroke-width="1"/>
       <line x1="${x-5}" y1="${y+23}" x2="${x-6}" y2="${y+55}"/>
       <line x1="${x+5}" y1="${y+23}" x2="${x+6}" y2="${y+55}"/>`
    : `<ellipse cx="${x}" cy="${y-30}" rx="16" ry="24" fill="${fill}" stroke="${accent}" stroke-width="1.5"/>
       <ellipse cx="${x}" cy="${y-65}" rx="12" ry="14" fill="${fill}" stroke="${accent}" stroke-width="1.5"/>
       <path d="M${x-10},${y-18} L${x-22},${y+20}" stroke="${accent}" stroke-width="2.5" fill="none"/>
       <path d="M${x+10},${y-18} L${x+22},${y+20}" stroke="${accent}" stroke-width="2.5" fill="none"/>
       <rect x="${x-11}" y="${y+4}" width="22" height="18" rx="2" fill="${fill}" stroke="${accent}" stroke-width="1"/>
       <line x1="${x-6}" y1="${y+22}" x2="${x-7}" y2="${y+55}" stroke="${accent}" stroke-width="4"/>
       <line x1="${x+6}" y1="${y+22}" x2="${x+7}" y2="${y+55}" stroke="${accent}" stroke-width="4"/>`;

  return `
    <g>
      ${isVillain ? "" : `<ellipse cx="${x}" cy="${y}" rx="40" ry="70" fill="${accent}" opacity="${glowOpacity}"/>`}
      ${isVillain ? `<ellipse cx="${x}" cy="${y}" rx="35" ry="65" fill="#f00" opacity="0.05"/>` : ""}
      ${bodyShape}
      <circle cx="${x}" cy="${y-65}" r="11" fill="${fill}"/>
      <circle cx="${x-4}" cy="${y-67}" r="2" fill="${eyeColor}"/>
      <circle cx="${x+4}" cy="${y-67}" r="2" fill="${eyeColor}"/>
      ${isVillain ? villainCrown : crown}
      ${isVillain ? `<path d="M${x-6},${y-62} C${x-2},${y-55} ${x+2},${y-55} ${x+6},${y-62}" fill="#ff0000" opacity="0.6"/>` : ""}
    </g>`;
}

// ─── ENVIRONMENT BACKGROUNDS ─────────────────────────────────────────────
function drawEnvironment(region, w, h, colors, dark) {
  const bg1 = dark ? "#050008" : (colors.background || "#0a0a2e");
  const bg2 = dark ? "#120005" : (colors.bgAlt || "#1a0a00");
  const ac  = dark ? "#330000" : (colors.primary || "#ffd700");

  const envs = {
    "south":     `<rect width="${w}" height="${h}" fill="${bg1}"/>
                  <ellipse cx="${w*0.5}" cy="${h*0.75}" rx="${w*0.6}" ry="${h*0.35}" fill="${bg2}" opacity="0.5"/>
                  <line x1="${w*0.1}" y1="${h*0.55}" x2="${w*0.08}" y2="${h*0.3}" stroke="${ac}" stroke-width="3" opacity="0.3"/>
                  <line x1="${w*0.85}" y1="${h*0.55}" x2="${w*0.87}" y2="${h*0.28}" stroke="${ac}" stroke-width="3" opacity="0.3"/>
                  <ellipse cx="${w*0.5}" cy="${h*0.82}" rx="${w*0.45}" ry="${h*0.12}" fill="${ac}" opacity="0.05"/>`,

    "west":      `<rect width="${w}" height="${h}" fill="${bg1}"/>
                  <path d="M0,${h*0.65} C${w*0.15},${h*0.5} ${w*0.35},${h*0.6} ${w*0.5},${h*0.55} C${w*0.65},${h*0.5} ${w*0.85},${h*0.62} ${w},${h*0.6} L${w},${h} L0,${h} Z" fill="${bg2}" opacity="0.4"/>`,

    "east":      `<rect width="${w}" height="${h}" fill="${bg1}"/>
                  <path d="M0,${h*0.7} C${w*0.2},${h*0.6} ${w*0.3},${h*0.78} ${w*0.5},${h*0.68} C${w*0.7},${h*0.58} ${w*0.85},${h*0.72} ${w},${h*0.65} L${w},${h} L0,${h} Z" fill="${bg2}" opacity="0.4"/>`,

    "north":     `<rect width="${w}" height="${h}" fill="${bg1}"/>
                  <path d="M${w*0.1},${h*0.55} L${w*0.3},${h*0.25} L${w*0.5},${h*0.4} L${w*0.7},${h*0.2} L${w*0.9},${h*0.5} L${w},${h*0.45} L${w},${h} L0,${h} Z" fill="${bg2}" opacity="0.35"/>`,

    "northeast": `<rect width="${w}" height="${h}" fill="${bg1}"/>
                  <circle cx="${w*0.5}" cy="${h*0.3}" r="${w*0.4}" fill="${bg2}" opacity="0.2"/>
                  <path d="M${w*0.2},${h*0.5} L${w*0.35},${h*0.3} L${w*0.5},${h*0.45} L${w*0.65},${h*0.28} L${w*0.8},${h*0.48} L${w},${h*0.42} L${w},${h} L0,${h} Z" fill="${bg2}" opacity="0.35"/>`,

    "central":   `<rect width="${w}" height="${h}" fill="${bg1}"/>
                  <circle cx="${w*0.5}" cy="${h*0.4}" r="${w*0.35}" fill="${bg2}" opacity="0.18"/>
                  <path d="M0,${h*0.68} C${w*0.25},${h*0.55} ${w*0.5},${h*0.62} ${w*0.75},${h*0.55} C${w*0.88},${h*0.5} ${w},${h*0.58} ${w},${h*0.58} L${w},${h} L0,${h} Z" fill="${bg2}" opacity="0.4"/>`
  };

  return (envs[region] || envs["central"]) +
    (dark ? `<rect width="${w}" height="${h}" fill="rgba(60,0,0,0.25)"/>` : "");
}

// ─── WEAPON ICON SVG ────────────────────────────────────────────────────
function drawWeaponIcon(x, y, type, color) {
  const WEAPONS = {
    "urumi":      `<path d="M${x-20},${y} C${x-10},${y-8} ${x},${y+8} ${x+20},${y}" stroke="${color}" stroke-width="2" fill="none"/><path d="M${x-22},${y+3} C${x-12},${y-5} ${x+2},${y+11} ${x+22},${y+3}" stroke="${color}" stroke-width="1.5" fill="none"/>`,
    "axe":        `<path d="M${x},${y-22} L${x},${y+22}" stroke="${color}" stroke-width="3"/><path d="M${x},${y-15} C${x+18},${y-8} ${x+18},${y+8} ${x},${y+15}" fill="${color}" opacity="0.7"/>`,
    "disc":       `<circle cx="${x}" cy="${y}" r="16" fill="none" stroke="${color}" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="6" fill="${color}" opacity="0.5"/>`,
    "mace":       `<line x1="${x-2}" y1="${y+22}" x2="${x+2}" y2="${y-10}" stroke="${color}" stroke-width="3"/><circle cx="${x}" cy="${y-16}" r="10" fill="${color}" opacity="0.7"/>`,
    "staff":      `<line x1="${x}" y1="${y+24}" x2="${x}" y2="${y-24}" stroke="${color}" stroke-width="3"/><path d="M${x-10},${y-20} L${x},${y-32} L${x+10},${y-20}" fill="${color}" opacity="0.7"/>`,
    "sword":      `<line x1="${x}" y1="${y+24}" x2="${x}" y2="${y-20}" stroke="${color}" stroke-width="3"/><path d="M${x-8},${y-16} L${x},${y-32} L${x+8},${y-16}" fill="${color}" opacity="0.8"/><line x1="${x-12}" y1="${y+8}" x2="${x+12}" y2="${y+8}" stroke="${color}" stroke-width="2"/>`,
    "bow":        `<path d="M${x-8},${y-20} C${x-22},${y} ${x-8},${y+20}" stroke="${color}" stroke-width="3" fill="none"/><line x1="${x-8}" y1="${y-20}" x2="${x-8}" y2="${y+20}" stroke="${color}" stroke-width="1.5"/><line x1="${x+8}" y1="${y-12}" x2="${x-8}" y2="${y}" stroke="${color}" stroke-width="1.5"/><path d="M${x+6},${y-14} L${x+14},${y-16} L${x+12},${y-8}" fill="${color}"/>`,
    "spear":      `<line x1="${x}" y1="${y+28}" x2="${x}" y2="${y-16}" stroke="${color}" stroke-width="3"/><path d="M${x-7},${y-14} L${x},${y-32} L${x+7},${y-14}" fill="${color}" opacity="0.8"/>`,
    "dagger":     `<line x1="${x-2}" y1="${y+18}" x2="${x+2}" y2="${y-12}" stroke="${color}" stroke-width="2.5"/><path d="M${x-5},${y-10} L${x},${y-26} L${x+5},${y-10}" fill="${color}" opacity="0.8"/><line x1="${x-8}" y1="${y+12}" x2="${x+8}" y2="${y+12}" stroke="${color}" stroke-width="2"/>`,
    "gauntlets":  `<rect x="${x-14}" y="${y-10}" width="12" height="18" rx="3" fill="${color}" opacity="0.7"/><rect x="${x+2}" y="${y-10}" width="12" height="18" rx="3" fill="${color}" opacity="0.7"/>`,
    "shield":     `<path d="M${x-14},${y-20} L${x-14},${y+5} C${x-14},${y+20} ${x},${y+25} ${x+14},${y+5} L${x+14},${y-20} Z" fill="${color}" opacity="0.5" stroke="${color}" stroke-width="1.5"/>`,
    "hammer":     `<line x1="${x}" y1="${y+28}" x2="${x}" y2="${y-6}" stroke="${color}" stroke-width="3"/><rect x="${x-12}" y="${y-18}" width="24" height="14" rx="2" fill="${color}" opacity="0.7"/>`,
    "chakram":    `<circle cx="${x}" cy="${y}" r="18" fill="none" stroke="${color}" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="8" fill="none" stroke="${color}" stroke-width="1.5"/>`,
    "prayer-wheel":`<circle cx="${x}" cy="${y-5}" r="12" fill="none" stroke="${color}" stroke-width="2"/><line x1="${x}" y1="${y-17}" x2="${x}" y2="${y+20}" stroke="${color}" stroke-width="2.5"/><circle cx="${x}" cy="${y-5}" r="5" fill="${color}" opacity="0.5"/>`,
    "crossbow":   `<line x1="${x}" y1="${y-24}" x2="${x}" y2="${y+24}" stroke="${color}" stroke-width="3"/><line x1="${x-18}" y1="${y-8}" x2="${x+18}" y2="${y-8}" stroke="${color}" stroke-width="2.5"/><line x1="${x}" y1="${y-24}" x2="${x+8}" y2="${y-10}" stroke="${color}" stroke-width="1.5"/>`,
    "dao":        `<path d="M${x-4},${y+24} L${x+4},${y+24} L${x+12},${y-20} L${x+4},${y-28} L${x-8},${y-20} Z" fill="${color}" opacity="0.7" stroke="${color}" stroke-width="1"/>`
  };
  return WEAPONS[type] || WEAPONS["sword"];
}

// ─── DECORATIVE MANDALA BORDER ───────────────────────────────────────────
function drawMandalaBorder(cx, cy, r, color, n) {
  const pts = n || 8;
  let paths = '';
  for(let i=0; i<pts; i++) {
    const a = (i/pts)*Math.PI*2;
    const bx = cx + Math.cos(a)*r;
    const by = cy + Math.sin(a)*r;
    paths += `<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="3" fill="${color}" opacity="0.4"/>`;
    paths += `<line x1="${cx}" y1="${cy}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="${color}" stroke-width="0.5" opacity="0.2"/>`;
  }
  paths += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.3"/>`;
  paths += `<circle cx="${cx}" cy="${cy}" r="${r*0.6}" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.2"/>`;
  return paths;
}

// ─── MAIN PORTRAIT RENDERER ───────────────────────────────────────────────
window.renderKingdomPortrait = function(hero) {
  const W = 820, H = 500;
  const villain = window.VILLAIN_DATA[hero.id] || {};
  const deity = window.DEITY_DATA[hero.id] || {};
  const modernWeapon = window.MODERN_WEAPONS[hero.id] || "Advanced energy weapon";
  const animalType = ANIMAL_TYPE_MAP[hero.animal.name] || "spotted-deer";
  const region = hero.region;
  const hColors = { background: hero.colors.background, primary: hero.colors.primary, bgAlt: hero.colors.background + "99" };

  // Determine weapon icon keys
  const weaponIconMap = {
    "andhra-pradesh":"urumi", "telangana":"disc", "tamil-nadu":"staff", "kerala":"axe",
    "karnataka":"mace", "maharashtra":"dagger", "gujarat":"sword", "goa":"sword",
    "rajasthan":"dagger", "west-bengal":"spear", "odisha":"chakram", "bihar":"gauntlets",
    "jharkhand":"bow", "uttar-pradesh":"spear", "uttarakhand":"dagger", "himachal-pradesh":"dagger",
    "punjab":"chakram", "haryana":"mace", "assam":"shield", "arunachal-pradesh":"spear",
    "manipur":"sword", "meghalaya":"staff", "mizoram":"staff", "nagaland":"dao",
    "sikkim":"prayer-wheel", "tripura":"crossbow", "madhya-pradesh":"staff", "chhattisgarh":"hammer"
  };
  const wIcon = weaponIconMap[hero.id] || "sword";

  // Deity type for crown
  const deityTypeMap = {
    "andhra-pradesh":"vishnu", "telangana":"krishna", "tamil-nadu":"shiva", "kerala":"vishnu",
    "karnataka":"vishnu", "maharashtra":"vishnu", "gujarat":"narasimha", "goa":"vishnu",
    "rajasthan":"kali", "west-bengal":"kali", "odisha":"vishnu", "bihar":"shiva",
    "jharkhand":"ganesha", "uttar-pradesh":"krishna", "uttarakhand":"shiva", "himachal-pradesh":"durga",
    "punjab":"kartikeya", "haryana":"vishnu", "assam":"durga", "arunachal-pradesh":"surya",
    "manipur":"krishna", "meghalaya":"shiva", "mizoram":"shiva", "nagaland":"durga",
    "sikkim":"vishnu", "tripura":"shiva", "madhya-pradesh":"vishnu", "chhattisgarh":"durga"
  };
  const dType = deityTypeMap[hero.id] || "default";

  const svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
    <defs>
      <linearGradient id="hg${hero.id.replace(/-/g,'')}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${hero.colors.background}"/>
        <stop offset="100%" stop-color="${hero.colors.background}cc"/>
      </linearGradient>
      <linearGradient id="vg${hero.id.replace(/-/g,'')}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#050002"/>
        <stop offset="100%" stop-color="#0e0003"/>
      </linearGradient>
    </defs>

    <!-- HERO SIDE (left) -->
    <clipPath id="hclip${hero.id.replace(/-/g,'')}"><rect x="0" y="0" width="${W/2}" height="${H}"/></clipPath>
    <g clip-path="url(#hclip${hero.id.replace(/-/g,'')})">
      ${drawEnvironment(region, W/2, H, hColors, false)}
      ${drawMandalaBorder(W*0.25, H*0.42, 75, hero.colors.primary, 12)}
    </g>

    <!-- VILLAIN SIDE (right) -->
    <clipPath id="vclip${hero.id.replace(/-/g,'')}"><rect x="${W/2}" y="0" width="${W/2}" height="${H}"/></clipPath>
    <g clip-path="url(#vclip${hero.id.replace(/-/g,'')})">
      ${drawEnvironment(region, W/2, H, {background:"#050002",primary:"#cc0000",bgAlt:"#0e0003"}, true)}
      ${drawMandalaBorder(W*0.25, H*0.42, 75, "#cc0000", 12)}
    </g>
    <!-- divider line -->
    <line x1="${W/2}" y1="0" x2="${W/2}" y2="${H}" stroke="${hero.colors.primary}" stroke-width="1.5" opacity="0.4"/>

    <!-- ANIMALS -->
    <g transform="translate(${W*0.25-10}, ${H*0.38}) scale(0.9)">
      ${drawAnimal(animalType, 0, 0, 40, hero.colors.primary, hero.colors.primary, false)}
    </g>
    <g transform="translate(${W*0.75+10}, ${H*0.38}) scale(0.9)">
      ${drawAnimal(animalType, 0, 0, 40, "#440000", "#cc0000", true)}
    </g>

    <!-- HERO FIGURE -->
    ${drawFigure(W*0.17, H*0.52, hero.hero.gender, false, hero.colors.primary, dType)}

    <!-- VILLAIN FIGURE -->
    ${drawFigure(W*0.83, H*0.52, (villain.gender||hero.hero.gender), true, hero.colors.primary, dType)}

    <!-- WEAPONS HERO -->
    <g transform="translate(${W*0.08},${H*0.72})">
      ${drawWeaponIcon(0, 0, wIcon, hero.colors.primary)}
    </g>
    <g transform="translate(${W*0.33},${H*0.72})">
      ${drawWeaponIcon(0, 0, "disc", hero.colors.primary)}
    </g>

    <!-- WEAPONS VILLAIN -->
    <g transform="translate(${W*0.68},${H*0.72})">
      ${drawWeaponIcon(0, 0, wIcon, "#cc0000")}
    </g>
    <g transform="translate(${W*0.92},${H*0.72})">
      ${drawWeaponIcon(0, 0, "disc", "#880000")}
    </g>

    <!-- TOP BANNERS -->
    <rect x="0" y="0" width="${W/2}" height="42" fill="${hero.colors.background}" opacity="0.88"/>
    <rect x="${W/2}" y="0" width="${W/2}" height="42" fill="#050002" opacity="0.88"/>

    <!-- KINGDOM NAME BANNER (center top) -->
    <rect x="${W/2-90}" y="-2" width="180" height="44" rx="4" fill="${hero.colors.background}" stroke="${hero.colors.primary}" stroke-width="1.5"/>
    <text x="${W/2}" y="18" text-anchor="middle" fill="${hero.colors.primary}" font-size="11" font-family="Georgia" font-weight="bold" letter-spacing="2">${hero.state.toUpperCase()}</text>
    <text x="${W/2}" y="33" text-anchor="middle" fill="${hero.colors.primary}" font-size="9" font-family="Georgia" opacity="0.7">${hero.animal.name}</text>

    <!-- HERO LABELS -->
    <text x="14" y="18" fill="${hero.colors.primary}" font-size="13" font-family="Georgia" font-weight="bold">${hero.hero.name}</text>
    <text x="14" y="33" fill="${hero.colors.primary}" font-size="9" font-family="Georgia" opacity="0.75">${hero.hero.title}</text>

    <!-- VILLAIN LABELS -->
    <text x="${W-14}" y="18" text-anchor="end" fill="#cc4444" font-size="13" font-family="Georgia" font-weight="bold">${villain.name||"???"}</text>
    <text x="${W-14}" y="33" text-anchor="end" fill="#cc4444" font-size="9" font-family="Georgia" opacity="0.75">${villain.title||"The Shadow"}</text>

    <!-- DEITY INSPIRATION (hero side bottom) -->
    <rect x="4" y="${H-46}" width="${W/2-8}" height="42" rx="3" fill="${hero.colors.background}" opacity="0.85"/>
    <text x="12" y="${H-30}" fill="${hero.colors.primary}" font-size="8" font-family="Georgia">&#9670; ${deity.hero||"Divine Inspiration"}</text>
    <text x="12" y="${H-18}" fill="${hero.colors.primary}" font-size="7.5" font-family="Georgia" opacity="0.65" font-style="italic">${deity.note||""}</text>

    <!-- VILLAIN WEAPON (villain side bottom) -->
    <rect x="${W/2+4}" y="${H-46}" width="${W/2-8}" height="42" rx="3" fill="#050002" opacity="0.85"/>
    <text x="${W/2+12}" y="${H-30}" fill="#cc4444" font-size="8" font-family="Georgia">&#9670; ${villain.deity||"Dark Force"}</text>
    <text x="${W/2+12}" y="${H-18}" fill="#cc4444" font-size="7.5" font-family="Georgia" opacity="0.65" font-style="italic">${villain.weapon||""}</text>

    <!-- MODERN WEAPON LABELS -->
    <text x="${W*0.25}" y="${H*0.97}" text-anchor="middle" fill="${hero.colors.primary}" font-size="7.5" font-family="Georgia" opacity="0.6">&#9889; ${modernWeapon.substring(0,45)}${modernWeapon.length>45?'...':''}</text>
    <text x="${W*0.75}" y="${H*0.97}" text-anchor="middle" fill="#cc4444" font-size="7.5" font-family="Georgia" opacity="0.6">&#9760; ${(villain.modern||"Dark version").substring(0,45)}</text>

    <!-- ANIMAL SYMBOLISM STRIP -->
    <rect x="${W/2-130}" y="${H-28}" width="260" height="20" rx="3" fill="${hero.colors.background}" opacity="0.7"/>
    <text x="${W/2}" y="${H-15}" text-anchor="middle" fill="${hero.colors.primary}" font-size="8" font-family="Georgia" opacity="0.8">${hero.animal.symbolism}</text>
  </svg>`;

  return svg;
};

// ─── GALLERY INITIALIZER ─────────────────────────────────────────────────
window.initPortraitGallery = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container || !window.HEROES) return;
  container.innerHTML = '';

  window.HEROES.forEach(function(hero) {
    const card = document.createElement('div');
    card.className = 'portrait-card';
    card.setAttribute('data-region', hero.region);
    card.setAttribute('data-id', hero.id);

    const svg = window.renderKingdomPortrait(hero);
    card.innerHTML = svg;
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      window.location.href = 'state-stories.html#' + hero.id;
    });
    container.appendChild(card);
  });
};
