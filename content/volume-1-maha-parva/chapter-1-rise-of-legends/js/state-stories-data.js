// ============================================================
// STATE KINGDOMS OF HULMANE-THE-SAGA
// 30 Sacred Kingdoms of Bharatavarsha (Kashmir/Sharada-Pitha + Andaman/Sagara-Ratna added 2026-05)
// Each kingdom bound by blood, tattoo, and sacred beast
// ============================================================

const STATE_KINGDOMS = [

  // ═══════════════════════════════════════════════════════════
  // DAKSHINAPATHA — THE SOUTHERN KINGDOMS
  // ═══════════════════════════════════════════════════════════

  {
    stateId: "andhra-pradesh",
    stateName: "Andhra Pradesh",
    kingdomName: "Dharmakshetra Amaravati",
    region: "south",
    motto: "The river remembers what the sword forgets",
    animal: {
      name: "Blackbuck",
      type: "animal",
      symbolism: "Speed, dharmic purity, grace under pressure"
    },
    bird: {
      name: "Rose-ringed Parakeet",
      symbolism: "Messenger of the gods, carrier of secrets between kingdoms"
    },
    hero: {
      name: "Krishnaveni",
      title: "The River's Daughter",
      epithet: "She Who Flows Through Stone",
      gender: "female",
      age: 34,
      weapon: "Dual Urumi whip-swords named Godavari and Krishna",
      tattoo: "Blackbuck leaping across her left shoulder, hooves touching her collarbone — half-body mark",
      description: "Born where the Krishna river bends at Amaravati, Krishnaveni carries the memory of every fallen warrior in her bloodline. Her Urumi swords move like river currents — fluid, unpredictable, and devastating. She speaks softly but her whips crack like monsoon thunder.",
      battleCry: "I am the flood that cleanses!"
    },
    villain: {
      name: "Narakasura Reborn",
      title: "The Blood Emperor",
      epithet: "He Who Drinks the River Dry",
      gender: "male",
      age: 45,
      weapon: "A cursed trident forged from the bones of a dead river-god, called Rakta-Trishula (Blood Trident)",
      darkPower: "Can boil water within a hundred paces — rivers turn to steam, wells run dry, blood in veins begins to simmer",
      description: "Once a prince of a minor delta kingdom, Narakasura discovered forbidden tattoo arts in a submerged temple beneath the Godavari. His tattoo is inverted — the blackbuck on his chest runs in reverse, symbolizing dharma perverted. He has drained three tributaries to fuel his dark power and now marches on Amaravati itself.",
      motivation: "Believes the river kingdoms hoard sacred water while villages upstream die of drought. His crusade began as justice but has become tyranny — he now wants to control all water in the South."
    },
    guru: {
      name: "Rishi Amareshwara",
      title: "The River Sage",
      description: "A 200-year-old hermit who lives where the Krishna meets the sea. Blind since birth, he 'sees' through the vibrations of flowing water. He taught Krishnaveni to read the river's moods — and through them, to read the hearts of men.",
      wisdom: "A river that stops flowing becomes a swamp. So too with power, with love, with dharma itself."
    },
    warriors: [
      { name: "Bhimavaram", title: "The Delta Shield", specialty: "Defensive water combat, creates whirlpool barriers", loyalty: "hero" },
      { name: "Nelluri Devi", title: "The Rice Blade", specialty: "Uses sharpened farming tools as weapons, commands rice-field militia", loyalty: "hero" },
      { name: "Chandra-Mukhi", title: "The Moon-Faced", specialty: "Former assassin turned spy, master of disguise", loyalty: "neutral" },
      { name: "Rakta-Vahini", title: "The Blood Current", specialty: "Narakasura's general, controls poison in water sources", loyalty: "villain" }
    ],
    storyImages: {
      basePath: "../../../../../media/states/south/andhra-pradesh/stories/dharmakshetra-amaravati/images/",
      hero: [
        { file: "krishnaveni-portrait.png", label: "Krishnaveni — The River's Daughter", caption: "Krishnaveni: the hero of Amaravati, wielding the Urumi whips Godavari and Krishna with fluid river-like motion." }
      ],
      villain: [
        { file: "narakasura-portrait.png", label: "Narakasura Reborn — The Blood Emperor", caption: "Narakasura Reborn: the cursed river lord whose inverted blackbuck tattoo boils water and scorches the land." }
      ]
    },
    saga: {
      title: "The River's Oath — A Film in Two Halves",
      narrative: `═══ FIRST HALF ═══

OPENING — THE RIVER'S DAUGHTER

Dawn on the Krishna riverbank. Krishnaveni stands waist-deep in the current, her twin urumi whip-swords — Godavari and Krishna — coiled around her forearms like sleeping serpents. She closes her eyes. The water speaks to her in the language her grandmother taught her — the river's mood, its depth, its memory. In one fluid motion, she uncoils both whips. They crack across the surface like lightning, splitting water droplets into diamonds. Slow motion. This is not practice. This is prayer.

On the bank, children from her river school cheer. She teaches them every morning — not just fighting, but swimming, reading currents, understanding when the river is angry and when it is kind. Her younger brother Bhimavaram watches from his patrol boat, grinning. "Sister, the fish are filing complaints about your whips."

We see Amaravati in its glory — the river kingdom where water flows through every street in stone channels, where parakeets carry messages between forts in tiny silver capsules, where blackbucks drink fearlessly at the river ghats. Krishnaveni walks through the market, greeted by every face. She is not a queen by title, but by love. The people chose her.

A VILLAGE THAT REMEMBERS THIRST

Two hundred kilometers upstream. Dust. A village where the river should flow but doesn't — the water was diverted thirty years ago to feed Amaravati's growth. A mother squeezes moisture from roots to feed her infant. Blackbucks lie dead in cracked fields, tongues swollen. This is the other side of Amaravati's paradise.

A man named Naraka kneels beside a dead blackbuck. He was a water engineer once — brilliant, idealistic. He petitioned the kingdom for years to restore the upstream flow. Nobody listened. His daughter died of waterborne disease. His wife walked into the desert and did not return.

He dives into the dried Godavari bed. Beneath the cracked mud, he finds it — a submerged temple sealed for a thousand years, where ancient priests tattooed themselves with inverted animal marks to control water's flow. The walls are covered in forbidden knowledge. Naraka reads for seven days. On the eighth day, he carves the reversed blackbuck into his own chest with a fishbone needle. He screams for three days as the dark power floods his veins. When he stands, the air around him shimmers with heat. Water in a nearby pot begins to bubble. He touches the Godavari bed — and the remaining underground moisture rises as steam.

He is no longer Naraka the engineer. He is Narakasura Reborn. The Blood Emperor.

THE FIRST STRIKE

A fishing fleet on the Godavari — forty boats, two hundred families. They are singing an evening raga when the river begins to bubble. First slowly, then violently. The water turns white. Steam rises in a wall. Men leap from boats. Fish float belly-up, boiled alive. By dawn, the entire fleet is found floating, the water still steaming.

Krishnaveni arrives and touches the water. It is hot enough to blister. She follows the steam upstream and finds Narakasura standing on the dry riverbed, his cursed trident — Rakta-Trishula — planted in the earth. Behind him, five hundred followers. The forgotten. The parched. The angry. They carry iron staffs and burning torches.

"I didn't come to fight you," he says. "I came to show you what your paradise costs."

THE FIRST BATTLE

Krishnaveni charges. Her urumi whips sing through the air — beautiful, deadly, unpredictable arcs that would dismember any normal fighter. She is faster than him. More skilled. Her whips wrap around his trident in a double bind.

But Narakasura smiles. Heat surges through the trident, up the metal whips, into the handles. Krishnaveni's palms sizzle. She smells burning flesh — her own. She drops her weapons and falls to her knees.

He stands over her. "Every drop of water your kingdom drinks was stolen from my people." He could kill her. He doesn't. He walks past her, towards Amaravati.

THE MARCH OF DROUGHT

Narakasura walks south, and the land dies behind him. Every well he passes boils dry. Every reservoir steams into nothing. Farmers watch their irrigation channels turn to mist. The blackbucks flee in herds, their ancient instinct screaming danger. The parakeets stop flying — the air over Narakasura's territory is too hot for feathers.

His army grows with every dried village. Five hundred becomes two thousand. He doesn't need to recruit — the thirsty come to the man who controls water. His promise is simple: "Follow me to Amaravati, and you will drink from the river that was stolen from you."

Krishnaveni rallies her warriors. Bhimavaram organizes the Delta Shield — a defensive line of boats along the Krishna. Nelluri Devi, the Rice Blade, arms her farming militia with sharpened tools. Chandra-Mukhi, the former assassin, infiltrates Narakasura's camp to find his weakness.

The second battle happens at the Great Dam. Krishnaveni wears heat-resistant armor woven with river-silk and charges with re-forged urumi fitted with graphene-cooled handles. The fight is ferocious — her whips cracking like monsoon thunder, his trident sweeping like a scythe. She lands a cut across his shoulder. He bleeds.

But the blood that drips from his wound is boiling. Where it touches the ground, the earth cracks. He slams the trident down and the entire dam begins to steam. The reservoir — the last major water source for three districts — evaporates in minutes. Krishnaveni watches two years of stored water vanish into the sky.

Chandra-Mukhi returns from her mission with devastating news: there is no weakness. The inverted tattoo feeds on heat from the earth itself. As long as the ground has warmth, Narakasura cannot be stopped. He is not using dark power — he is channeling the planet.

═══ INTERVAL ═══

Krishnaveni sits by a dry riverbed. Her hands are bandaged. Her whips lie beside her, the metal warped by heat. The Krishna river — her namesake, her identity, her power — is a trickle. Amaravati's stone channels are empty. Children she taught to swim now stand in dust.

Behind her, Rishi Amareshwara, the blind river-sage, sits motionless. He has not spoken in three days. The parakeets that once carried messages huddle in the dead trees, feathers dull.

Krishnaveni whispers: "He is right. We did steal their water. And now he will steal ours. And the river will not flow for anyone."

The screen goes dark.

═══ SECOND HALF ═══

THE GURU'S RIDDLE

Rishi Amareshwara finally speaks. He has not drunk water in ten days. His voice is dry as sand: "You are fighting drought with flood, child. The river does not fight. The river finds another path."

"There IS no other path. He controls every river in the region."

Amareshwara places his hand on the cracked earth. "He controls the rivers. But what lies beneath the rivers? Who controls that?"

THE EARTH REMEMBERS

Krishnaveni descends. Using ancient maps kept by Amareshwara — maps older than the kingdom itself — she finds the entrance to the underground river network of the Deccan Plateau. These are not wells or springs. These are rivers beneath rivers — a vast hidden water system that feeds every surface river in the South. Narakasura can boil what flows above ground. But he cannot reach what flows below.

The underground cavern is vast, dark, and ancient. Stalactites drip water that has not seen sunlight in ten thousand years. Krishnaveni wades into an underground pool so pure it glows faintly blue. When the water touches her burned hands, the blisters heal. Her skin cools. She feels something she hasn't felt since the drought began — the river's presence.

Her tattoo changes. The blackbuck on her shoulder begins to move — its hooves, which had been frozen mid-leap, now touch water in the ink. The half-body mark begins to spread. She understands: the river didn't abandon her. It went underground. It was waiting.

THE IMPOSSIBLE MOMENT

But Narakasura is not waiting. He has reached the outskirts of Amaravati. His army of three thousand surrounds the city. He plants his trident at the main river gate and speaks: "Open the gates, and I will let the river flow again. Resist, and I will boil the blood in your veins."

He is not bluffing. He demonstrates — a soldier who refuses to kneel screams as the blood in his arms begins to simmer. Krishnaveni's people watch from the walls. Some want to surrender. The council argues. Bhimavaram draws his sword: "We fight." Nelluri Devi raises her farming blade: "We fight." But how? The enemy controls the very water in their bodies.

Narakasura gives them until dawn.

THE RIVER BENEATH

That night, Krishnaveni does not prepare for battle. She digs. Using the underground maps, she and a team of volunteers tunnel from the underground cavern to points beneath every village in Narakasura's territory. Not to attack. To give water. Channel by channel, spring by spring, she opens the underground river to the surface in the places that were parched — the villages that Narakasura claimed to be saving.

Dawn arrives. Narakasura prepares his final assault. But his scouts ride in with impossible news: "The villages… the water is returning. From the ground."

THE TURNING POINT

Narakasura's followers — the thirsty, the desperate, the angry — watch springs burst from the earth in their home villages. Clean water, flowing from the ground itself. Not from Amaravati's rivers. Not from any dam or channel. From the earth. A mother fills her pot from a spring that was not there yesterday. A blackbuck drinks from a new pool.

One by one, they put down their staffs. They are not Narakasura's soldiers. They are villagers who wanted water. And the water has come — from a source that no man controls.

Narakasura stands alone. His army of three thousand is now thirty. His generals are gone. The villages he claimed to protect have what they need. His cause — which began as justice — has no followers.

But his rage has no need for followers.

THE FINAL BATTLE

He slams his trident into the earth and channels everything. Not just surface heat. He reaches deep — pulling geothermal energy from the earth's core itself. The ground around him glows red. Rocks crack and melt. The air becomes unbreathable. He will not boil the river. He will boil the EARTH.

Krishnaveni emerges from the underground river. She is different. Her tattoo now covers her entire body — the blackbuck in full leap, hooves touching water at every joint, antlers reaching her neck. Her urumi whips are wet with sacred underground water that does not evaporate, even in Narakasura's heat. When she cracks them, they hiss with a sound like a river breaking through a dam.

The fight is not elegant. It is brutal. Trident against whips. Heat against water. The earth cracks between them. Krishnaveni wraps both urumi around the trident and pulls. Narakasura surges heat. The metal glows red. But the underground water on the blades turns to sacred steam — and instead of burning Krishnaveni, it cools her. The water protects its own.

The trident breaks.

Narakasura falls to his knees. His inverted tattoo pulses — the reversed blackbuck running backwards, running down, fading. The heat leaves him in waves. The earth cools. The air becomes breathable.

Krishnaveni stands over him. The audience expects the killing blow.

Instead, she kneels. She opens her water skin — filled from the underground spring — and holds it to his lips. "The river doesn't choose who drinks."

He drinks. Tears cut through the ash on his face. Somewhere beneath the Blood Emperor, the water engineer who loved his daughter still breathes.

THE RIVER RETURNS

Rain. The underground springs join the surface rivers. The Krishna flows wider than it ever has, nourishing both Amaravati AND the upstream villages. The parakeets return — green wings flashing like emerald lightning across the delta. The blackbucks return to drink at new springs that will never dry.

Krishnaveni stands in the river. Her full-body tattoo glows faintly in the water. The blackbuck leaps across her entire form — hooves touching water everywhere, antlers crowned with river-light.

Narakasura is not forgiven. He is not freed. But he is given water.

The river remembers what the sword forgets.`
    },
    inspiration: {
      heroGod: { name: "Satyabhama", domain: "Warrior Queen, wife of Krishna", parallel: "Like Satyabhama who fought alongside Krishna to slay the original Narakasura, Krishnaveni wields twin weapons with divine grace and refuses to stand behind any man in battle." },
      heroMahabharata: { name: "Draupadi", parallel: "Both are fierce women wronged by those who abuse power. Draupadi demanded justice through fire; Krishnaveni demands it through flood. Neither weeps — both act." },
      villainDemon: { name: "Narakasura", domain: "The earth-demon who enslaved 16,000 and terrorized the three worlds", parallel: "The original Narakasura hoarded what belonged to all — kingdoms, people, treasure. This reborn version hoards the most essential thing: water. Both were slain by a woman's hand." },
      villainMahabharata: { name: "Duryodhana", parallel: "Both began with a legitimate grievance — the unequal distribution of resources. Both allowed righteous anger to curdle into tyranny. Duryodhana wanted the throne he believed was his; Narakasura wants the water he believes was stolen." }
    },
    modernArsenal: {
      hero: "Graphene-reinforced urumi whip-swords, heat-resistant body armor woven with river-silk, underground spring mapping sensors, encrypted parakeet-relay communication network",
      villain: "Cursed trident channeling geothermal heat, heat-radiating body tattoo that boils water on contact, army of drought-survivors armed with iron staffs and burning rage"
    },
    geopolitics: "Inter-state water wars mirror real Cauvery/Krishna river disputes. International water corporations exploit both sides. Upstream states weaponize dam controls. The conflict draws attention from global powers seeking to control South Asia's fresh water supply."
  },

  {
    stateId: "telangana",
    stateName: "Telangana",
    kingdomName: "Chaya-Golkonda — The Shadow Fortress",
    region: "south",
    motto: "What is seen is not what is true",
    animal: {
      name: "Spotted Deer",
      type: "animal",
      symbolism: "Duality, perception, the beauty that deceives"
    },
    bird: {
      name: "Palapitta (Indian Roller)",
      symbolism: "The sacred tumbler — dives into truth and emerges with color"
    },
    hero: {
      name: "Chittaranga",
      title: "The Spotted Blade",
      epithet: "He Who Sees Both Sides",
      gender: "male",
      age: 29,
      weapon: "Twin throwing discs — Chitra (Illusion) and Ranga (Truth) — one shines like silver, the other like shadow",
      tattoo: "Spotted deer across his back, each spot a different event he has witnessed — full-body mark",
      description: "Paranoid, perceptive, and perpetually suspicious, Chittaranga trusts no one completely — not even his own reflection. Born with one eye brown and one grey, he was raised in the shadow guilds of Golkonda where every smile hides a dagger. His throwing discs never miss because he never aims at what he sees — he aims at what is truly there.",
      battleCry: "The spot reveals the beast!"
    },
    villain: {
      name: "Qutb-Chaaya",
      title: "The Shadow Sultan",
      epithet: "The One Who Wears A Thousand Faces",
      gender: "male",
      age: "Unknown — appears differently to every person who sees him",
      weapon: "A mirror-blade called Aaina-e-Maut (Mirror of Death) — whoever looks at it sees their deepest fear and freezes",
      darkPower: "Can split himself into shadow-copies, each one real enough to wound and bleed. No one knows which is the original. Some say the original died long ago and only shadows remain.",
      description: "Once the master of Golkonda's spy network, Qutb-Chaaya discovered that shadows have memory. He fed his own shadow so many secrets that it grew sentient — and then it consumed him. Now he is neither man nor shadow but something between, ruling the underground of Telangana from a throne of mirrors.",
      motivation: "Wants to make all of Telangana into a shadow-kingdom where nothing is real, nothing can be trusted, and only he holds the mirror that shows truth. He believes reality itself is a cage."
    },
    guru: {
      name: "Ramanujacharya's Flame",
      title: "The Undying Philosopher",
      description: "Not the man himself but the philosophical fire he lit a thousand years ago, kept burning in a secret chamber beneath Warangal Fort. Those who meditate before the flame can see through any illusion — but only if they have no illusions about themselves first.",
      wisdom: "The man who fears his own shadow will never stand in the sun."
    },
    warriors: [
      { name: "Darpana Devi", title: "The Mirror Maiden", specialty: "Fights using reflective shields that redirect light and energy attacks", loyalty: "hero" },
      { name: "Nakkal-Singh", title: "The Mimic", specialty: "Can perfectly imitate anyone's fighting style after seeing it once", loyalty: "neutral" },
      { name: "Kala-Chhaya", title: "The Time Shadow", specialty: "Qutb-Chaaya's lieutenant, can make shadows solid enough to form walls and weapons", loyalty: "villain" },
      { name: "Chittaranga's Twin Sister (unnamed)", title: "The Unspotted", specialty: "Born without the deer mark — either the kingdom's salvation or its doom, depending on which prophecy you believe", loyalty: "neutral" }
    ],
    saga: {
      title: "The War of Mirrors — A Film in Two Halves",
      narrative: `═══ FIRST HALF ═══

OPENING — THE BOY WITH TWO EYES

A diamond cutting workshop in the heart of Golkonda. A young boy with one brown eye and one grey eye watches his father cut a stone. "The diamond looks different from every angle," his father says. "But the truth is in the center. Most people never reach it."

This boy is Chittaranga. Born with heterochromia into a kingdom of spies, where the first rule is: never be recognizable. He breaks this rule with every blink.

We see Golkonda — a fortress-city built on secrets. Every alley has eyes. Every merchant is a spy. Every smile hides a blade or a deal. The shadow guilds run everything beneath the surface: intelligence, trade routes, assassination. Chittaranga's father is a gem cutter by day and a guild informant by night. His mother was a dancer who could read lips from across a crowded court. His twin sister was born two minutes after him — identical in every way except one: she carries no spotted deer tattoo. The priests whispered: one twin is the kingdom's shield, the other its destruction. They did not say which.

THE SHADOW SULTAN AWAKENS

Beneath the Qutb Shahi tombs, where ancient rulers placed mirrors to trap restless spirits, something stirs. The mirrors were never decorative. They were prisons. And one prisoner has learned to think.

Qutb-Chaaya was once the master of Golkonda's spy network — the greatest intelligence operative the kingdom ever produced. He discovered that shadows remember everything they see. He fed his own shadow so many secrets that it grew fat, then heavy, then sentient. One night, it spoke back. He tried to control it. It consumed him instead.

Now he is neither man nor shadow. He exists in the space between mirrors — and from that space, he can project shadow-copies of himself that walk, talk, fight, and bleed. Not illusions. Physical shadows. Each one carries a fraction of his consciousness. Kill one, and the memories flow back to the others. He is a man who cannot be in one place because he is in all places.

His weapon is the Aaina-e-Maut — the Mirror of Death. A blade so polished that anyone who looks at it sees their deepest fear reflected back. Warriors have dropped their swords and wept. Generals have frozen mid-charge. One look, and your mind fights you harder than any enemy could.

THE INFILTRATION

Qutb-Chaaya's first move is silent. He replaces three of the kingdom's seven guild-masters with shadow-copies. Nobody notices. The copies look right, sound right, even bleed right when cut. But their eyes are flat — like light reflected off glass instead of shining from within. Only Chittaranga's mismatched eyes can see the difference. The brown eye sees the surface. The grey eye sees what lies beneath.

He tells the council. Nobody believes him. "You see shadows everywhere, boy. That's your paranoia, not proof."

One month later, half the spy network is feeding information to a man made of darkness. Trade routes are compromised. Three agents are found dead — killed by people they trusted, who were not the people they thought they were. The kingdom is being eaten from the inside.

Chittaranga's twin sister — unnamed, untattooed — believes him. She infiltrates one of the compromised guilds and confirms: the guild-masters are hollow. Shadow-copies. But when she tries to expose them, she is captured. By the time Chittaranga arrives, she is gone — taken into the mirror-vaults beneath Golkonda.

THE FIRST CONFRONTATION — THE HALL OF DIAMONDS

Chittaranga descends into the mirror-vaults alone. The Hall of Diamonds — a legendary chamber lined with thousands of mirrors where a single candle becomes a sun. He brought two things: his twin discs — Chitra (Illusion, silver) and Ranga (Truth, shadow-dark) — and his rage.

Qutb-Chaaya is waiting. Not one of him. Fifty.

Fifty shadow-copies stand in the mirrored room, and every mirror reflects fifty more. The room contains what appears to be ten thousand versions of the Shadow Sultan. Each one holds a mirror-blade.

"Which one of me is real?" Qutb-Chaaya's voice comes from everywhere. "Which one of you is sane?"

Chittaranga throws Chitra. The silver disc slices through three shadow-copies — and they bleed. Real blood. They feel pain. They scream. But they do not die. They reform. The shadows knit back together like smoke.

He throws Ranga. The dark disc cuts through five more. Same result. They bleed, they reform.

Now all fifty charge.

The fight is desperate. Chittaranga's discs return to his hands like boomerangs, cutting arcs through shadow after shadow. He is fast. He is precise. But for every copy he cuts, two more step from the mirrors. They are pulling him into a war of attrition he cannot win.

Then Qutb-Chaaya raises the Aaina-e-Maut — the Mirror of Death. Its surface catches the candlelight and turns it into something else — Chittaranga's deepest fear. He sees himself. Not as he is. As he fears he might be: a man who trusts nothing, loves nothing, and fights an enemy that doesn't exist because the true enemy is his own paranoia.

He freezes. The disc falls from his hand. Three shadow-copies pin him to the ground.

Qutb-Chaaya leans close — the real one, finally — and whispers: "Your sister walked into the mirror willingly. She saw what I showed her: a world with no lies, because nothing is real. She chose the mirror over you."

═══ INTERVAL ═══

Chittaranga lies in a medical bay, three ribs broken, burns across his chest from where the shadow-copies held him. His discs sit on the table — one silver, one dark. His sister is gone. The guild is compromised. Half of Golkonda's intelligence network is shadow-operated.

On the wall, a mirror. He cannot look at it. Any mirror might be a door. Any reflection might be an enemy.

Darpana Devi, the Mirror Maiden, sits beside him. "You're afraid of mirrors now. He knows it. That's his victory — not the fight. The fear."

═══ SECOND HALF ═══

THE PHILOSOPHER'S FLAME

Chittaranga travels to Warangal Fort, where a secret chamber holds Ramanujacharya's Flame — a fire that has burned for a thousand years, kept alive by philosophers who believed that truth cannot be reflected, only witnessed directly.

He meditates before the flame. The heat is unbearable. Sweat pours from his face. But in the flame, there are no reflections. Fire does not bounce back — it goes forward, always forward, consuming what is false and leaving only what is real.

Three days of meditation. On the fourth day, the deer-spot tattoo on his back begins to shift. New spots appear — spreading to his shoulders, his arms. Each spot is a different event he has witnessed: truths, deceptions, the grey area between. The tattoo is not just a mark. It is a record. A living memory of everything real.

He opens his grey eye and looks at the flame. In the fire, he sees the pattern. Qutb-Chaaya's shadow-copies all share one flaw — they cast no shadow of their own. A shadow of a shadow is nothing. In a room full of mirrors, this is invisible. In firelight, it is obvious.

THE IMPOSSIBLE MOMENT

Chittaranga returns to Golkonda to find it transformed. Qutb-Chaaya has installed mirrors on every street. Every wall. Every building. The city itself is a mirror-maze. Shadow-copies walk among the population as merchants, soldiers, lovers. Nobody knows who is real. Husbands suspect wives. Children fear parents. Trust has been murdered.

Qutb-Chaaya appears on the fortress walls — or one of him does — and speaks: "I have given you freedom. In a world where nothing is real, nothing can hurt you. No betrayal, because no loyalty. No heartbreak, because no love. I have made Golkonda perfect."

Chittaranga realizes the scale: there are now over a thousand shadow-copies in the city. The real Qutb-Chaaya could be any of them. Or none of them. The original might have died years ago, and the shadows carry on without a source.

Even Darpana Devi's reflective shields — which usually redirect attacks — are useless. Every direction is a mirror. Every defense becomes a weapon for the enemy.

THE TWIN SISTER'S CHOICE

Nakkal-Singh, the Mimic, infiltrates the mirror-vaults using his ability to copy any fighting style. He doesn't find Chittaranga's sister imprisoned. He finds her sitting before a mirror, talking to it. She has been in the mirrors for weeks and has learned something: the mirrors are not prisons. They are windows. She can see into every mirror in Golkonda simultaneously. She has mapped every shadow-copy's position. She knows where the real Qutb-Chaaya hides.

But she won't leave. "If I step out, I lose the sight. If I stay, I can guide you."

Chittaranga must choose: rescue his sister from the mirrors, or let her stay and use her sight to win the war. She makes the choice for him: "I am the Unspotted. My purpose was always to see what you cannot. Go."

THE STRATEGY — DARKNESS

Chittaranga does not fight the mirrors. He destroys the light.

With Darpana Devi's help, he builds a device that does one thing: extinguishes every light source in Golkonda simultaneously. Not an attack. A reset. In total darkness, mirrors are useless. Shadows cannot exist. And Chittaranga — who has trained to fight by sound, by the tingling of his tattoo, by the feeling of truth in his grey eye — fights better blind than most fight with sight.

THE FINAL BATTLE — THE DARK HOUR

Midnight. Every lamp in Golkonda dies at once. Every mirror becomes a dead surface. Every shadow-copy flickers, weakens, begins to dissolve. Without light, they have no source.

But Qutb-Chaaya is not helpless in the dark. He is ancient, powerful, and his mirror-blade still works — because the fear it shows comes from within. You don't need light to be afraid.

The final battle is fought in absolute darkness. Sound only. Breathing. The whistle of thrown discs. The scrape of a mirror-blade against stone.

Chittaranga's twin sister guides him through an earpiece, seeing through the one mirror that still works — the mirror in Qutb-Chaaya's hand. "Left. Duck. Now throw Ranga — three degrees right."

The dark disc hits. Qutb-Chaaya screams — a sound that comes from one throat, not many. The shadows are gone. Only the man remains.

But the Mirror of Death swings, and Chittaranga cannot help but look. In the blade's surface — even in the dark — his fear appears: his sister, trapped forever in the mirror, choosing glass over flesh, choosing sight over life.

He does not freeze this time. He throws Chitra — the silver disc — and it shatters the Aaina-e-Maut into a thousand pieces. The fear shatters with it. The Mirror of Death is no more.

Qutb-Chaaya crumbles. Without his mirror-blade, without his shadows, he is an old spy with no face of his own. He has worn so many that he has forgotten the original. He sits in the dark and weeps — not for defeat, but because he cannot remember what he looked like before the shadows.

THE LIGHT RETURNS

Dawn through Golkonda's broken mirrors. The palapitta birds wheel through the sky in spirals of blue and gold, celebrating with their signature tumbling flight. The spotted deer tattoo now covers Chittaranga's entire body — every spot a truth he has witnessed, a lie he has shattered, a moment of clarity in a world of reflections.

His sister steps from the mirror-vault. She is thin, pale, her eyes now permanently reflective — she will always see in mirrors, even when there are none. But she is alive. She is real. And she is unspotted still — the seer, not the warrior. His shield, not his sword.

Qutb-Chaaya is imprisoned in a room with no mirrors. No reflective surfaces. No shadows. Just four blank walls and a candle that never goes out.

The spot reveals the beast.`
    },
    inspiration: {
      heroGod: { name: "Arjuna (as Vishnu's chosen)", domain: "Supreme warrior, divine sight, master of precision", parallel: "Like Arjuna who received divine sight from Krishna on the battlefield, Chittaranga sees through every illusion. His heterochromia mirrors Arjuna's third eye — one eye for the world as it appears, one for the world as it truly is." },
      heroMahabharata: { name: "Nakula & Sahadeva", parallel: "The Pandava twins who could perceive truth — Nakula through beauty and form, Sahadeva through prophecy. Chittaranga and his twin sister embody this duality: one sees, the other is unseen." },
      villainDemon: { name: "Rahu", domain: "The shadow planet that swallows the sun and causes eclipses", parallel: "Rahu is the severed head that refuses to die, consuming light itself. Qutb-Chaaya is similarly a being of consumed identity — he devoured his own shadow and now exists as neither man nor darkness, eclipsing truth wherever he goes." },
      villainMahabharata: { name: "Shakuni", parallel: "The master manipulator who won through deception, not strength. Shakuni's loaded dice decided the fate of empires. Qutb-Chaaya's mirror-blade and shadow-copies serve the same purpose — why fight when you can simply replace your enemy with a version that obeys you?" }
    },
    modernArsenal: {
      hero: "Tungsten-alloy throwing discs with return-flight edges, anti-illusion thermal goggles, sound-pulse gauntlets that disrupt shadow-copies, encrypted twin-comm with his missing sister",
      villain: "Mirror-blade Aaina-e-Maut that reflects your deepest fear, shadow-splitting dark tattoo, mirror-vault network beneath Golkonda, army of sentient shadow-copies that bleed and feel pain"
    },
    geopolitics: "Three foreign intelligence agencies compete for control of Golkonda's strategic diamond reserves. A neighboring kingdom's cyber warfare division supports the Shadow Sultan. The line between espionage and warfare has dissolved — the battlefield is data, and the weapon is identity itself."
  },

  {
    stateId: "tamil-nadu",
    stateName: "Tamil Nadu",
    kingdomName: "Sangam Tamilakam — The Eternal Assembly",
    region: "south",
    motto: "The word is mightier than the blade, but we carry both",
    animal: {
      name: "Nilgiri Tahr",
      type: "animal",
      symbolism: "Mountain resilience, ancient purity, the last of a noble kind"
    },
    bird: {
      name: "Emerald Dove",
      symbolism: "Peace that descends from the highest peaks, the green heart of Tamil land"
    },
    hero: {
      name: "Kurinjiselvi",
      title: "The Mountain Bloom",
      epithet: "She Who Flowers Once in Twelve Years",
      gender: "female",
      age: 36,
      weapon: "Crescent-bladed staff called Kurinji — blooms with blue fire when she channels the mountain's anger",
      tattoo: "Nilgiri Tahr climbing her spine, hooves at her tailbone, horns reaching her neck — half-body mark",
      description: "Patient as the mountains, stubborn as stone, and erupting like a volcano when pushed beyond her silence. Kurinjiselvi was raised in isolation among the Nilgiri hill tribes, learning to fight from the tahrs themselves — charging, leaping, and holding ground on cliff-edges where one slip means death. She speaks in Thirukkural couplets when she speaks at all.",
      battleCry: "The mountain does not come to you. But I do."
    },
    villain: {
      name: "Ravana-Vadham",
      title: "The Southern Shadow",
      epithet: "He Who Claims Ravana's Crown",
      gender: "male",
      age: 52,
      weapon: "A ten-stringed veena that doubles as a war-bow — each string fires arrows of sound that shatter bone",
      darkPower: "Commands the voice of ten — can speak in ten tones simultaneously, each one a different command. His words can make armies turn on each other, lovers forget their names, and mountains weep.",
      description: "A brilliant Tamil scholar who spent thirty years studying the Ramayana — not as a devotee, but as Ravana's advocate. He concluded that Ravana was the true hero of the South, a Dravidian king demonized by northern conquerors. His scholarship became obsession, his obsession became madness, and his madness became power when he found Ravana's broken veena in a cave beneath Rameswaram.",
      motivation: "Wants to 'correct' history by making the South supreme, overthrowing what he sees as the cultural colonization of Aryan mythology. His cause has merit but his methods are monstrous — he silences dissent literally, using his veena to steal the voices of those who disagree."
    },
    guru: {
      name: "Thiruvalluvar's Tablet",
      title: "The Speaking Stone",
      description: "Not a person but a living artifact — a stone tablet inscribed with all 1,330 couplets of the Thirukkural. It was said to be written by Thiruvalluvar himself, and when touched by a worthy Tamil warrior, the appropriate couplet for their current dilemma speaks itself aloud. It sits in a sealed cave in the Nilgiris, guarded by the last twelve Nilgiri Tahrs.",
      wisdom: "Even the sharp sword bends before the sharper thought."
    },
    warriors: [
      { name: "Sangam-Kavalan", title: "The Assembly Guard", specialty: "Three warriors who fight as one — poet, spear-wielder, and strategist — embodying the three ancient Sangam traditions", loyalty: "hero" },
      { name: "Kadalamma", title: "The Sea Mother", specialty: "Commands a fleet of fishing-boat warriors from Kanyakumari, uses nets as weapons", loyalty: "hero" },
      { name: "Dasavadanam", title: "The Ten-Voiced", specialty: "Ravana-Vadham's chief disciple, can mimic any voice to infiltrate any court", loyalty: "villain" },
      { name: "Meenakshi's Arrow", title: "The Temple Archer", specialty: "A silent archer who never misses, stationed atop the Meenakshi temple's gopuram, shoots from heights no one can reach", loyalty: "neutral" }
    ],
    saga: {
      title: "The Song That Shatters Mountains — A Film in Two Halves",
      narrative: `═══ FIRST HALF ═══

OPENING — THE MOUNTAIN THAT WAITS

Nilgiri Mountains. Altitude: 2,400 meters. A woman climbs a vertical cliff face without ropes. Her crescent-bladed staff is strapped to her back — its curved blade catching sunlight like a sickle moon. Her fingers find holds in rock that offers none. Below her, the Nilgiri Tahrs — ancient mountain goats with curved horns and wise eyes — watch from a ledge. They do not flinch. They know her.

Kurinjiselvi reaches the summit and stands in a field of grey brush. The Kurinji flowers that give her name bloom once every twelve years, turning entire mountainsides into oceans of purple-blue. In the blooming year, her power is absolute. In the years between, she is human. Mortal. Breakable.

This is year eleven. One more year of waiting.

She speaks in Thirukkural couplets — the 2,000-year-old Tamil wisdom poetry that is her only language of choice. "Even the sharp sword bends before the sharper thought." She says this to the tahrs. They seem to understand.

In the valley below, in the temple-city of Madurai, children learn the old songs. Kadalamma's fishing boats patrol the coast. The Sangam Guard — three warriors who fight as one: poet, spear-wielder, and strategist — trains in the shadow of the Meenakshi temple. Peace. Fragile, beautiful peace.

THE SCHOLAR AND THE CAVE

Rameswaram. The southernmost tip of Tamil Nadu, where India reaches toward Sri Lanka across a bridge of submerged stone. A man named Vadham has spent thirty years in a library studying one text: the Ramayana. Not as a devotee. As an advocate for the villain.

His argument is brilliant and dangerous: Ravana was not a demon. He was a Dravidian king — scholar, musician, administrator of a great civilization. He was demonized by northern storytellers who needed a villain to justify conquest. The ten heads were not monstrosity but genius — ten fields of mastery, from music to medicine to war.

Vadham's scholarship was respected for twenty years. Then he found the cave.

Beneath Rameswaram, in a chamber that the sea reveals only during the lowest tide of the decade, he found fragments of a veena. Not any veena. THE veena. The instrument Ravana played before the gods themselves trembled. Seven of its ten strings had rotted. But three still hummed with a vibration that made Vadham's bones ache.

He spent five years rebuilding it. Each new string he added from different sacred materials — temple bell bronze, snake-boat teak, idol gold. When he strung the tenth string and played the first chord, every window in Rameswaram shattered.

The sound entered people's minds. Not painfully — beautifully. The most beautiful music they had ever heard. And embedded in that beauty, a command: listen. Believe. Follow.

He is no longer Vadham the scholar. He is Ravana-Vadham — The Southern Shadow. He Who Claims Ravana's Crown.

THE SEDUCTION

Ravana-Vadham does not attack Tamil Nadu. He seduces it.

He walks from town to town playing his veena. Not conquering — convincing. His music carries his argument: the South was colonized by northern mythology. Tamil pride was stolen. He will return it. When he plays, people feel something they have never felt before — a fury that has been sleeping in their blood for three thousand years.

Half the kingdom follows him. Not from fear. From agreement. Farmers put down plows and pick up staves. Teachers leave schools. Even some of the temple priests — keepers of the very mythology Ravana-Vadham opposes — are drawn by his music. His ten voices speak simultaneously: one voice for the intellectual, one for the emotional, one for the angry, one for the sad, one for the proud. Every person hears the voice that moves them most.

The Sangam Guard reports to Kurinjiselvi: "He has not drawn a single weapon. He has not shed a single drop of blood. And sixty percent of Tamil Nadu follows him."

Kurinjiselvi descends from the mountains for the first time in three years.

THE FIRST BATTLE — MAHABALIPURAM

The Shore Temple at Mahabalipuram. Where the ancient Pallava kings carved chariots from living rock. Where the sea carved everything else.

Ravana-Vadham sits on the temple steps, playing. His followers — ten thousand strong — sway like a single organism. The bay sparkles behind him. It is beautiful. It is terrifying.

Kurinjiselvi walks toward him through the crowd. They part for her — she carries the crescent staff, and her tattoo (the Nilgiri Tahr climbing her spine) pulses with each heartbeat. The tahrs did not follow her down the mountain, but their spirit rides her spine.

"Stop," she says. One word. No couplet.

He plays a chord and speaks in ten voices at once: "The mountain comes to me? I thought the mountain does not come to anyone."

She plants her staff in the sand. The crescent blade catches light. "The mountain doesn't come to you. But I do."

She charges. Staff against veena. The crescent blade swings for his neck — and he blocks it with the veena's neck, the ten strings vibrating on impact. The vibration travels up her staff, through her arms, into her chest. Every bone resonates. She cannot breathe.

He plays three notes. The sand beneath her feet liquefies. She sinks to her ankles.

The Sangam Guard attacks from three directions — poet with verse-inscribed shield, spear-wielder with vibration-dampening pike, strategist with a formation of emerald doves carrying signal-disruption charges. Kadalamma's boats launch nets weighted with temple iron.

Ravana-Vadham plays five strings at once. The sound becomes a wall. The nets disintegrate. The doves scatter. The Sangam Guard's poet is thrown thirty meters and hits a stone chariot. The spear-wielder's eardrums burst.

Kurinjiselvi leaps from the liquefied sand and brings her crescent blade down in a killing arc. Ravana-Vadham catches it on a single veena string — and the string holds. Her meteorite-iron blade against a bronze string. The string wins.

He plays the tenth note — the killing note. The sound hits her spine directly. The Nilgiri Tahr tattoo CRACKS. The ink splits like dry earth. She feels her spine vibrate at a frequency that human bones were never meant to sustain. She falls.

Her staff shatters.

Ravana-Vadham stands over her, veena singing softly. "You are the mountain. But sound can shatter mountains." He turns to his ten thousand and plays a victory raga. They roar.

═══ INTERVAL ═══

A cave in the Nilgiri mountains. The last twelve Nilgiri Tahrs stand in a semicircle around a wounded woman. Her crescent staff lies in two pieces beside her. The tattoo on her spine is cracked — the tahr's image split from tail to horns. Dried blood crusts the broken ink.

The Sangam Guard carried her here. They are injured. The poet has not spoken since the battle. The spear-wielder is deaf in one ear.

In the deepest part of the cave, a stone tablet stands. The Thirukkural inscribed in ancient Tamil. 1,330 couplets of wisdom. It has not spoken in fifty years. It waits.

Kurinjiselvi lies in the dark, listening to the tahrs breathe. Outside, Ravana-Vadham's music echoes from the lowlands — a constant, beautiful, terrible broadcast that covers Tamil Nadu like a blanket. Every radio, every speaker, every phone carries his ten voices. Eighty percent of the population now sways to his rhythm.

She has no weapon. No army. No power. The blooming year is still months away.

═══ SECOND HALF ═══

THE SPEAKING STONE

Seven days of silence. Kurinjiselvi sits before the Tablet. She does not speak. She does not eat. The tahrs bring her water by pressing their wet noses to her lips.

On the eighth day, she places her palm on the stone. It is warm. And it speaks — not in sound, but in vibration. The couplet resonates through the rock, through her bones, through the cracked tattoo on her spine:

"The weapon conquers one battle. The word conquers all time."

She understands. She has been trying to fight sound with force. Staff against veena. Steel against music. This is like fighting a river by punching it. Ravana-Vadham's power is not his veena. It is his argument. He is right that the South was colonized culturally. He is right that Ravana was a scholar. His truth is real. His method is the lie.

You cannot defeat a truth. You can only offer a deeper one.

COMPOSING THE ANSWER

Kurinjiselvi begins to sing. Not a war song. Not a weapon song. A truth song. She takes every Thirukkural couplet she knows — and she knows them all — and weaves them into a melody that carries no command. No compulsion. No force. It simply exists, like water exists, like mountains exist, like breath exists.

The tahrs gather around her. Their ears prick forward. Something in the song resonates with the mountain itself — the rocks hum, the springs vibrate, the air trembles.

The pieces of her shattered staff begin to glow. Not with fire. With a blue light — the exact color of the Kurinji flower. She realizes: the blooming cycle is not just botanical. The Kurinji flowers emit a specific harmonic when they bloom — a frequency that resonates with truth. It is why her power peaks during the bloom: the flowers sing the same song she is singing now.

THE IMPOSSIBLE MOMENT

Intelligence arrives: Ravana-Vadham has completed his network. He has built acoustic amplifiers into the architecture of every major temple in Tamil Nadu — the gopurams of Madurai, Thanjavur, Rameswaram. These ancient structures, with their precise mathematical proportions, are natural resonance chambers. He has turned the entire civilization's heritage into a weapon.

His next move: a simultaneous broadcast from all temple amplifiers at once. Every person in Tamil Nadu will hear all ten voices at maximum power. The trance will become permanent. Free will ends.

Kadalamma sends word from the coast: "He has given us one day. After tomorrow, there will be no tomorrow."

Kurinjiselvi is alone. Her staff is broken. Her army is scattered. Her tattoo is cracked. She has a song that works in a cave with twelve goats. Ravana-Vadham has an army, a network of temple-amplifiers, and the power of a god's veena.

"The mountain does not come to you," she whispers to herself.

"But it does," says the Tablet.

THE MOUNTAIN'S SECRET

Kurinjiselvi realizes what the Tablet means. The Nilgiri mountains are not just rock. They are the oldest mountain range in South India — three billion years of compressed earth. Every vibration that has ever passed through Tamil Nadu is recorded in these stones. Every song, every prayer, every battle cry, every mother's lullaby. The mountain remembers everything.

If she can resonate with the mountain's memory — if her truth song can harmonize with three billion years of accumulated vibration — no ten-stringed veena can compete.

She takes the two broken halves of her staff and presses them together. The blue light from the Kurinji harmonic flows between the halves like sap. The meteorite iron remembers its origin — a rock that fell from space and became part of the mountain. The staff reforms. Not as it was. As it should be. One blade. One staff. One song.

THE FINAL BATTLE — THE MOUNTAIN SINGS

Ravana-Vadham sits atop the Meenakshi temple in Madurai, veena across his lap, surrounded by fourteen gopurams that will amplify his final broadcast. Below him, two hundred thousand people stand in silent trance, swaying to a melody only they hear. His ten voices are ready.

He plays the first chord.

Kurinjiselvi does not go to Madurai. She goes to the mountain.

Standing on the highest peak of the Nilgiris, surrounded by the twelve tahrs and a field of Kurinji flowers that have begun to bloom — one year early, coaxed by the harmonic of her song — she plants her reforged staff in the rock. The crescent blade sinks into stone as if it were water. Blue fire runs down the staff, into the rock, into the mountain.

And the mountain sings.

Three billion years of memory find a voice. The sound is not loud — it is deep. It travels through the bedrock of Tamil Nadu at the speed of stone, and when it reaches the surface, it rises through every spring, every river, every well. The water sings. The earth hums. The emerald doves — thousands of them — take flight simultaneously, and their wingbeats carry the mountain's frequency across the sky.

Ravana-Vadham's veena plays louder. His ten voices scream ten commands. But the mountain's song is not a command. It is a choice. It says: "Remember who you are. Not who you're told to be."

One by one, the two hundred thousand in Madurai stop swaying. They blink. They look around. They remember. A mother remembers her child's face. A farmer remembers the feel of earth. A teacher remembers why she chose to teach.

Ravana-Vadham plays harder. The strings of the veena glow red. He pushes ten voices to twenty, to fifty, to a hundred. The gopurams crack under the pressure. But the mountain's song is older, deeper, and truer. You cannot out-shout the earth.

The veena's tenth string — the one he recovered from Ravana's cave, the one made of material that predates human civilization — snaps. The sound it makes as it breaks is the most beautiful and most terrible note ever heard in Tamil Nadu. A requiem for a king who was brilliant and wrong.

Ravana-Vadham falls from the temple. Not dead. But empty. His ten voices are gone. His argument remains — he was right about Ravana, right about cultural colonization, right about the South — but without the veena's compulsion, his truth must compete with other truths. And that is all anyone can ask.

THE BLOOMING

The Kurinji flowers bloom across the Nilgiris. An ocean of purple-blue washing over the mountains, visible from space. The harmonic they emit is the same note as Kurinjiselvi's truth song — the frequency of a mountain that remembers everything and forgives everything.

Her tattoo heals. The cracked tahr on her spine reforms — and grows. The Nilgiri Tahr now leaps across her entire body, hooves touching mountain stone, horns crowned with Kurinji flowers. Full-body mark. The audience sees it happen in real time — the tahr climbing from her back, spreading across her ribs, her arms, her legs, as if the mountain itself is embracing her.

She stands on the peak, staff planted in stone, blue fire running through the mountain's veins, surrounded by twelve tahrs and an ocean of purple flowers, and speaks the only couplet that matters:

"The mountain does not come to you. But I do."

The emerald doves carry her song to every corner of Tamil Nadu. Not as command. As invitation.

The word conquers all time.`
    },
    inspiration: {
      heroGod: { name: "Meenakshi (Parvati)", domain: "Warrior goddess of Madurai, mountain-born, fierce protector of the South", parallel: "Meenakshi was born with three breasts, and the prophecy said the third would vanish when she met her equal. Kurinjiselvi was born when the Kurinji bloomed, and her power vanishes between cycles — both are goddesses defined by what they must wait for. Both fight with a patience that is itself a weapon." },
      heroMahabharata: { name: "Bhishma", parallel: "Both are defined by an impossible vow. Bhishma's vow of celibacy made him the greatest warrior who could never be king. Kurinjiselvi's twelve-year cycle makes her the greatest fighter who can only fight once a decade. Both endure — and endurance, in this world, is the rarest form of courage." },
      villainDemon: { name: "Ravana", domain: "The ten-headed Rakshasa king, supreme scholar, musician, and ruler of Lanka", parallel: "Ravana-Vadham is not a reincarnation but an advocate — a scholar who studied Ravana so deeply that he became him. Like the original, he is brilliant, cultured, and utterly convinced of his own righteousness. Like the original, his greatest weapon is his intellect, not his strength." },
      villainMahabharata: { name: "Dronacharya", parallel: "Both are teachers whose knowledge became a weapon. Drona used his mastery of warfare to demand loyalty and punish those who defied him. Ravana-Vadham uses his mastery of sound and scholarship to silence dissent. Both prove that wisdom without compassion is the most dangerous force in the world." }
    },
    modernArsenal: {
      hero: "Crescent-bladed staff Kurinji forged from Nilgiri meteorite iron, frequency-resonant body armor tuned to the mountain's harmonic, emerald dove messenger network, Thiruvalluvar's Tablet as living oracle",
      villain: "Ten-stringed electromagnetic veena that fires sound-arrows, directional voice cannons built into temple architecture, army of mind-controlled followers under sonic trance, Ravana's broken veena fragment as power source"
    },
    geopolitics: "A foreign power funds Tamil separatism as a geopolitical lever, providing acoustic weaponry in exchange for port access at Rameswaram. The Indian Ocean becomes a contested zone as naval powers position themselves. The conflict between cultural pride and foreign manipulation mirrors real tensions across South and Southeast Asia."
  },

  {
    stateId: "kerala",
    stateName: "Kerala",
    kingdomName: "Parashurama-Kshetra — The Axe-Born Land",
    region: "south",
    motto: "The land was won from the sea. We do not surrender what we have won.",
    animal: {
      name: "Indian Elephant",
      type: "animal",
      symbolism: "Sacred strength, temple guardian, the memory that never forgets"
    },
    bird: {
      name: "Great Hornbill",
      symbolism: "Ancient forest king, whose beak can break what the elephant cannot reach"
    },
    hero: {
      name: "Parashurama VII",
      title: "The Axe Reborn",
      epithet: "The Seventh to Bear the Name",
      gender: "male",
      age: 58,
      weapon: "Meteorite-iron axe called Parashu — the same metal, reforged seven times across eight centuries",
      tattoo: "Indian Elephant in full charge across his entire torso, trunk raised in war-cry — full-body mark",
      description: "The oldest and most experienced of all 30 heroes. Parashurama VII has held the axe since he was nineteen, and in those thirty-nine years, he has buried three of his own students, survived two assassination attempts by his own family, and mastered all 108 forms of Kalaripayattu. He moves like a man half his age because the elephant tattoo feeds him the memory of endurance.",
      battleCry: "The axe remembers every tree it has felled!"
    },
    villain: {
      name: "Maya-Sura",
      title: "The Illusion Demon",
      epithet: "The Thousand-Armed Kalari Master",
      gender: "male",
      age: 61,
      weapon: "No single weapon — his body IS the weapon. He has mastered the forbidden 109th form of Kalaripayattu, called 'Mayastra' — the illusion art",
      darkPower: "Can create afterimages of himself so convincing that they land real blows. In combat, you face what appears to be a thousand arms, each striking from a different angle. Only one is real — but they all hurt.",
      description: "Parashurama VII's senior — his older brother in the kalari. They trained under the same guru, ate from the same plate, and were predicted to be the greatest pair of warriors Kerala had ever produced. But Maya-Sura wanted the 109th form — the one their guru forbade. He learned it in secret, and the knowledge twisted him. Now his body no longer holds a single shape; he flickers between forms like a flame in the wind.",
      motivation: "Believes Kalaripayattu has been weakened by restraint. The 108 forms are chains, not techniques. True mastery requires breaking every rule, including the rule against killing your own guru — which he did."
    },
    guru: {
      name: "Agastya Muni's Echo",
      title: "The Southern Sage's Last Breath",
      description: "Agastya Muni, the sage who brought civilization south, left his last breath trapped in a conch shell hidden in the Western Ghats. When blown, the conch reveals the weakness of any opponent — but it can only be blown by someone who has overcome their own greatest weakness first.",
      wisdom: "The sea retreated for Parashurama once. It does not retreat twice for the same request."
    },
    warriors: [
      { name: "Theyyam-Mukha", title: "The Painted Fury", specialty: "Fights in full Theyyam ritual paint, channeling deity-level strength for twelve minutes before collapsing", loyalty: "hero" },
      { name: "Kuttanad", title: "The Backwater Ghost", specialty: "Houseboat combat specialist, can navigate and fight simultaneously in the narrowest waterways", loyalty: "hero" },
      { name: "Naga-Padma", title: "The Serpent Lotus", specialty: "Maya-Sura's star student, fights with urumi and cobra venom-tipped nails", loyalty: "villain" },
      { name: "Hornbill Sentinel", title: "The Canopy Watch", specialty: "Network of hornbill-bonded scouts who patrol the Western Ghats from the treetops", loyalty: "hero" }
    ],
    saga: {
      title: "The 109th Form — A Film in Two Halves",
      narrative: `═══ FIRST HALF ═══

OPENING — THE AXE REMEMBERS

A kalari — a traditional Kerala fighting pit, sunken into the red earth, roofed with palm thatch. Dawn light slices through the gaps. An old man stands in the center. He is fifty-eight years old, and every year is visible — in the scars across his torso, in the missing tip of his left ear, in the three ribs that healed crooked. But when he moves, he moves like water.

Parashurama VII lifts his axe — Parashu, forged from meteorite iron, reforged seven times over eight centuries, the same metal that the gods themselves sent to earth. The axe is heavy enough to crack a fortress wall. He swings it one-handed. The air screams.

We see his world: Kerala, the land won from the sea. The backwaters — a labyrinth of rivers, lakes, and canals where houseboats carry families and secrets. The elephant temples — where tuskers in gold caparison walk in procession, their footsteps shaking the earth. The Western Ghats — a wall of green jungle that guards the kingdom from the east.

Parashurama VII is the oldest hero in all of Hulmane-The-Saga. He has held the axe since nineteen. In those thirty-nine years, he has buried three students, survived two assassination attempts by his own family, and mastered all 108 forms of Kalaripayattu — the oldest martial art in the world. Every morning, he teaches the young ones at the kalari. Every evening, he talks to his elephants. He is feared, respected, and lonely. The axe-bearer has no equal, and a man with no equal has no friend.

Except one. Once.

THE BROTHERS OF THE KALARI

Flashback — twenty-five years ago. Two young men train in the same kalari. Parashurama (then just "Raman") and Maya (then just "Mayan"). Brothers in everything but blood. They eat from the same plate. They spar until their knuckles are raw. They race through the backwaters in snake boats, laughing.

Their guru — the 47th Kalari Master — is a small, quiet man who can break a coconut with two fingers and heal a broken bone with a touch. He teaches them the 108 forms. Each form is a conversation between body and earth — the kicks of the crane, the strikes of the tiger, the blocks of the elephant. The 108th form is the crown: a dance so complex it takes fifteen years to learn and uses every muscle in the human body simultaneously.

But there is a 109th form. Sealed away by Agastya Muni himself, the sage who brought civilization to the South. The guru shows them the sealed chamber — a room in the kalari's deepest level, locked with chains inscribed in ancient Malayalam. "This technique destroys the enemy," the guru says. "It also destroys the one who uses it."

Mayan stares at the door. Raman pulls him away.

But Mayan returns. Alone. At night.

THE NIGHT OF A THOUSAND ARMS

The night Maya-Sura learns the 109th form, every elephant in every temple across Kerala trumpets simultaneously. Not a trumpet of joy or warning. A trumpet of grief. Something sacred has been violated.

At the kalari door, a Great Hornbill — the ancient forest king, whose beak can break what the elephant cannot reach — is found dead. Its beak is shattered, as if it tried to sound a warning and the vibration killed it.

By morning, the guru is dead.

The body is unmarked. No wound, no bruise, no poison. But his face is frozen in an expression of absolute terror — a man who saw a thousand arms reaching for him from every direction and could not block a single one. The 109th form is not a fighting technique. It is a multiplication of the self. The user's body generates afterimages so convincing, so physical, that they land real blows. One man becomes a thousand arms. One strike becomes a wall of strikes.

Mayan killed his guru with all thousand, and the guru could not tell which one was real.

Parashurama finds the body. He picks up his axe. He does not weep. He walks to the sealed chamber and sees it open, the chains melted by a heat that came from inside the human body. He understands: his brother is gone. Maya-Sura is born.

Maya-Sura flees into the Western Ghats. Into the green wall. Into the jungle where hornbills scream and elephants walk paths older than civilization.

TWENTY-FIVE YEARS LATER

Maya-Sura has not been idle. Deep in the jungle, he has built a following — former Kalari students who were failed by the system, rejected by their gurus, hungry for the power that the 108 forms deny. He teaches them fragments of the 109th form — enough to create two or three afterimages each. Not the full thousand. Only he has that. But a hundred fighters with three afterimages each is an army of four hundred, with only a hundred real bodies to target.

His body has changed. The 109th form, used repeatedly for twenty-five years, has made his flesh unstable. He flickers. Standing still, he seems to vibrate at the edges, like a flame in a gentle wind. His muscles can rearrange themselves mid-strike — a punch becomes a kick becomes an elbow becomes a headbutt in the space of a single breath. His flesh heals almost instantly — not through magic, but through the 109th form's principle: if you can be in a thousand places at once, a wound in one place means nothing.

His weapon is his body. Every inch of it.

THE FIRST BATTLE — PADMANABHASWAMY TEMPLE

The richest temple in the world. Vault B — the legendary sealed vault that is said to contain treasures worth more than most nations. Maya-Sura wants it. Not for the gold. For what lies beneath the gold: a set of ancient Kalaripayattu manuscripts that describe a 110th form — one that even Agastya feared.

He attacks at dusk, during the Poornathrayeesa festival when the temple is crowded. His hundred fighters, each generating afterimages, create chaos. To the temple guards, it looks like a four-hundred-strong army materializing from thin air. People scream. Elephants panic.

Parashurama VII arrives on foot, axe in hand. He cuts through the first wave of afterimages — the vibration core in his axe hums at a frequency that disrupts the 109th form's multiplication. Afterimages shatter on contact with the axe. But the real fighters are mixed in, and each one is skilled enough to challenge a normal warrior.

The Theyyam-Mukha fighters — warriors in full Theyyam ritual paint — join the defense. The paint channels deity-level strength, but only for twelve minutes. After that, they collapse. They burn bright and fast, clearing a path through the afterimage army.

Parashurama reaches the inner sanctum. Maya-Sura waits.

The fight is the most brutal in the film. Axe against a thousand arms. Parashurama's axe sings as it cleaves through afterimage after afterimage — but each real strike that lands on Maya-Sura's flesh seals instantly. He cuts Maya-Sura's arm off at the elbow. The arm reattaches in seconds, the flesh knitting back together like water flowing back into a stream.

Maya-Sura's thousand arms find Parashurama's ribs. Three crack. His left ear is torn by a strike he never saw coming — from behind, from above, from a direction that should not exist.

But Parashurama lands one true blow. The axe hits Maya-Sura's shoulder — not an afterimage. The real flesh. The meteorite iron bites deep. Maya-Sura screams — a sound from one throat, not a thousand.

For a moment, the afterimages flicker. Parashurama sees his brother's face — not the monster's, the brother's. The boy who shared his plate.

His axe hesitates.

Maya-Sura drives a palm-strike into Parashurama's solar plexus and vanishes into the temple shadows, trailing golden blood from his shoulder.

═══ INTERVAL ═══

Parashurama VII sits in the elephant stables of the Padmanabhaswamy Temple. Three cracked ribs. Half an ear. Blood seeping through bandages. His axe lies across his knees, Maya-Sura's blood still golden on the blade.

An elephant — his oldest companion, a tusker named Gajendra — wraps its trunk around his shoulder. The elephant has been with him for twenty years. It understands grief.

Kuttanad, the Backwater Ghost, brings news: "The manuscripts from Vault B were not taken. But Maya-Sura left a message carved into the vault door: 'You cannot kill me, brother. You love me too much to swing hard enough.'"

Parashurama looks at his axe. He knows it is true. Every strike was held back by memory. Every blow softened by the ghost of the boy who trained beside him. His greatest weakness is not physical. It is love.

And Maya-Sura knows it.

═══ SECOND HALF ═══

THE CONCH OF AGASTYA

The Western Ghats. A hidden cave behind a waterfall so powerful that the water falls in a solid curtain of white. Inside, on a stone altar carved with symbols older than Malayalam, sits a conch shell.

This is Agastya Muni's last breath — the sage who drank the ocean, who brought civilization south, who sealed the 109th form. Before he died, he breathed his final breath into this conch. The breath carries one power: it reveals the weakness of any opponent. But the conch will not sound for just anyone. It demands that you overcome your own greatest weakness first.

Parashurama knows where the cave is. He has known for thirty years. He has never gone inside.

He goes now.

THE TRIAL

The conch does not speak. It tests. When Parashurama lifts it to his lips, he sees Maya-Sura — not as he is now, but as he was. Mayan. The boy who shared rice. The brother who laughed at Raman's terrible jokes. The young man who held Raman's hand when their guru pushed them beyond their limits.

The conch asks: can you fight this man? Not the monster. This one. The brother.

Parashurama puts the conch down. He cannot blow it. He sits in the cave for three days.

THE IMPOSSIBLE MOMENT

Maya-Sura attacks the Vembanad Lake during the snake boat race — the Vallam Kali, where a hundred-man boats race through the backwaters. Fifty thousand spectators line the shore. It is the most joyful day of the year.

Maya-Sura's fighters appear among the boats. Afterimages multiply across the water's surface. The hundred-man boats capsize as phantom fighters materialize on the oars. Women scream. Children are thrown into the water. Kuttanad's backwater fleet engages, but the narrow waterways become a labyrinth of real and phantom enemies.

Maya-Sura walks across the water — not literally, but his afterimages step so fast that he seems to skim the surface. He reaches the central pavilion where Kerala's council sits and speaks:

"The 108 forms are chains. Kalaripayattu was meant to make gods, not servants. I offer the 109th form to everyone. No more gurus gatekeeping power. No more sealed chambers. Every fighter can become a thousand."

The crowd is silent. Some are terrified. Some are tempted.

Parashurama arrives. He is still injured. Still carrying the weight of three cracked ribs and a conch he cannot blow.

"Mayan," he says. The old name. "This is not who you are."

Maya-Sura's face — all thousand of his faces — twist with fury. "Mayan is dead. You should have saved him when you could. You chose the guru over me."

"I chose the rules."

"And the rules killed us both."

BLOWING THE CONCH

The fight begins on the water. Axe against a thousand arms. Parashurama is losing. He is old, injured, and fighting a man who has no single body to hit. The afterimages batter him from every direction. His axe finds nothing but phantom flesh.

Kuttanad's fleet surrounds the battle area. Naga-Padma — Maya-Sura's star student — fights Theyyam-Mukha on the boats. The Hornbill Sentinels scream from the treetops, trying to spot the real Maya-Sura amid the thousand copies.

Parashurama is beaten to his knees. Blood in the water. The axe is heavy in his hand.

Maya-Sura stands over him — a thousand versions, each one smiling, each one waiting for the final blow. "Swing, brother. Show me you can kill me. Show me you can stop loving the boy I was."

Parashurama closes his eyes.

He does not think of Maya-Sura the monster. He thinks of Mayan the boy. He holds that memory — every shared meal, every sparring match, every laugh — and he lets it go. Not with hatred. With grief. He mourns his brother the way you mourn the dead: with love, and with acceptance that they are gone.

He reaches into his belt and pulls out the conch. He did bring it. He blows.

The sound is not loud. It is DEEP. It travels through water, through bone, through the afterimages themselves. And it reveals what was always true: every afterimage is connected to Maya-Sura's right foot. The real one. No matter how many copies exist, they radiate from one point — the right foot that never moves during the 109th form. The anchor. The weakness.

Parashurama opens his eyes. He does not look at the thousand. He looks at the ground. One foot. One real foot, planted in the shallow water of Vembanad.

He swings. Not at the body, the arms, the face. At the foot.

The axe hits the right ankle. Meteorite iron against mortal bone. The vibration core sings.

Maya-Sura screams — one voice, one throat, one man. A thousand afterimages collapse like smoke. The water settles. The phantom army dissolves.

Maya-Sura falls into the lake. Not as a monster. As a man. A man with a broken ankle and a body that, for the first time in twenty-five years, holds one shape.

THE WEIGHT OF LOVE

Parashurama pulls his brother from the water. The crowd watches. The elephants on shore trumpet — not grief this time, but something older and more complicated.

Maya-Sura lies on the boat deck, his body finally still. The flesh no longer flickers. The thousand arms are gone. He is one man. One broken, exhausted man.

"You found the weakness," he whispers. "I always knew you would."

"You wanted me to," Parashurama says.

Silence. Then: "The 109th form is a prison. Once you start multiplying, you cannot stop. I have not felt my own skin — MY skin — in twenty years. Every sensation was split into a thousand fragments. I couldn't feel a breeze without feeling a thousand breezes. I couldn't taste food without tasting it a thousand times. I couldn't sleep because a thousand of me were always awake."

He is weeping. "I killed our guru because I wanted him to stop me and he couldn't. I wanted you to stop me. You're the only one who could."

Parashurama holds his brother. The axe lies on the deck, blade down. The elephants wade into the shallows, surrounding the boat in a circle of grey. The Great Hornbills descend from the canopy and perch on the boat's edges, their ancient beaks glowing in the sunset.

The elephant tattoo on Parashurama's torso begins to change. The half-body mark spreads — the ceremonial armor patterns flowing across his remaining skin like liquid metal. The elephant's trunk rises to cover his missing ear-tip, as if the tattoo itself is healing what the man cannot.

Full-body mark. Earned not by killing his enemy, but by saving his brother.

The 109th form is not sealed away again. It is taught — carefully, correctly, with the guru's warning inscribed on every kalari wall. Knowledge was never the enemy. The absence of love was.

The sea retreated for Parashurama once. Today, it retreated again — the waters of Vembanad pulling back from the boat, leaving the two brothers on dry land in the middle of a lake, as if the earth itself was saying: this is holy ground.`
    },
    inspiration: {
      heroGod: { name: "Parashurama (6th Avatar of Vishnu)", domain: "The warrior sage who reclaimed Kerala from the sea with his axe", parallel: "Parashurama VII carries the name and the weapon of the original avatar. Like the god, he is not just a warrior but a destroyer of corruption — yet the original Parashurama's rage consumed him, and this seventh bearer must choose whether strength serves justice or becomes its own tyrant." },
      heroMahabharata: { name: "Parashurama (as Drona's guru)", parallel: "In the Mahabharata, Parashurama taught Drona the arts of war, and Drona taught Arjuna. Parashurama VII carries this chain of teaching — he is both warrior and teacher, and his greatest battle is not against Maya-Sura but against the possibility that his own students might be corrupted as Maya-Sura was." },
      villainDemon: { name: "Mayasura", domain: "The Asura architect, builder of the Maya Sabha (hall of illusions) and master of cosmic engineering", parallel: "The original Mayasura built palaces so beautiful they drove men mad. Maya-Sura builds illusions so perfect they draw blood. Both are architects — one of space, the other of perception. Both serve darkness not through malice but through the intoxication of their own genius." },
      villainMahabharata: { name: "Ashwatthama", parallel: "Drona's son who could not be killed, who committed the worst atrocity of the war out of rage and grief. Like Ashwatthama, Maya-Sura was once a noble warrior whose love for forbidden power destroyed everything he valued. Both killed their own guru. Both are immortal in their own way — Ashwatthama through curse, Maya-Sura through technology." }
    },
    modernArsenal: {
      hero: "Meteorite-iron axe Parashu reforged seven times with vibration core, elephant-hide armor reinforced with titanium scales, Agastya's conch (reveals enemy weakness), Theyyam war-paint that channels deity-level strength for twelve minutes",
      villain: "The 109th form of Kalaripayattu — body IS the weapon, afterimages that land real blows, thousand-arm illusion combat, flesh that seals instantly from any wound"
    },
    geopolitics: "Southeast Asian naval exercises provide cover for arms smuggling. An international pharmaceutical conglomerate funds forbidden research. Two intelligence agencies compete to recruit augmented soldiers. Kerala's ancient spice trade routes become modern weapons pipelines, and the backwaters hide a network of underwater tunnels connecting jungle laboratories to foreign submarines."
  },

  {
    stateId: "karnataka",
    stateName: "Karnataka",
    kingdomName: "Vijayanagara Reborn — The City of Victory",
    region: "south",
    motto: "What Hampi once was, we shall be again",
    animal: {
      name: "Indian Elephant",
      type: "animal",
      symbolism: "Imperial memory, unbreakable loyalty, the throne-bearer"
    },
    bird: {
      name: "Indian Roller (Neelakantha Pakshi)",
      symbolism: "Shiva's bird — tumbles through the sky to show that falling is just another form of flight"
    },
    hero: {
      name: "Tungabhadra",
      title: "The River Queen",
      epithet: "She Who Rebuilt the Throne of Victory",
      gender: "female",
      age: 32,
      weapon: "War mace called Gajadanda (Elephant Staff) — heavy enough to crack fortress walls, wielded one-handed",
      tattoo: "Indian Elephant in ceremonial armor across her right arm and chest — half-body mark, the armor patterns shift like living metal",
      description: "Born in the shadow of Hampi's ruined empire, Tungabhadra carries the weight of a kingdom that fell five centuries ago and the determination to raise it again. Her mace was forged from iron found in the elephant stables of Vijayanagara, still warm after five hundred years. She rules through trust rather than fear — and her people would die for her because she would die for them first.",
      battleCry: "Hampi rises! The elephants remember!"
    },
    villain: {
      name: "Ravana-Putra",
      title: "The Heir of Ruins",
      epithet: "He Who Lives in the Stones",
      gender: "male",
      age: 40,
      weapon: "A staff embedded with fragments of every destroyed temple in Karnataka — each fragment channels the rage of the deity whose home was broken",
      darkPower: "Can animate stone. The ruins of Hampi are his army — broken pillars walk, crumbling walls form barriers, and the stone chariot of Vittala Temple has been seen moving at midnight.",
      description: "A historian who went mad studying the destruction of Vijayanagara. He concluded that the empire fell not because of external invasion but because of internal betrayal — and that the stones themselves were angry. He began to hear the stones speak, then to command them. Now he lives inside the ruins of Hampi like a parasite inside a host, wearing the rubble like armor.",
      motivation: "Wants to rebuild Vijayanagara — not as a living kingdom but as a stone empire, frozen in time, perfect and unchanging. He sees Tungabhadra's living, breathing, imperfect kingdom as an insult to the glory that was. His Vijayanagara would be a museum, not a home."
    },
    guru: {
      name: "Sage Vidyaranya",
      title: "The Knowledge Forest",
      description: "The spirit of the sage who inspired the founding of Vijayanagara in the 14th century, now appearing as a shifting pattern in the Tungabhadra river's surface. His wisdom can only be read in the rapids — still water shows nothing. He guides Tungabhadra to understand that kingdoms are not built of stone but of people.",
      wisdom: "The ruins are not the empire that fell. The people who survived — they are the empire that endured."
    },
    warriors: [
      { name: "Hampi-Veera", title: "The Stone Dancer", specialty: "Fights atop the boulder-strewn landscape of Hampi, leaping between rocks like a mountain goat", loyalty: "hero" },
      { name: "Mysuru-Dhanush", title: "The Sandalwood Archer", specialty: "Arrows coated in sandalwood oil that creates a calming effect — enemies lose the will to fight", loyalty: "hero" },
      { name: "Shila-Rakshasa", title: "The Stone Demon", specialty: "Ravana-Putra's champion, a living statue animated from the ruins of the Lotus Mahal", loyalty: "villain" },
      { name: "Neelakantha", title: "The Blue-Throated", specialty: "Indian Roller-bonded scout, can see through the bird's eyes across vast distances", loyalty: "hero" }
    ],
    storyImages: {
      basePath: "../../../../../media/states/south/karnataka/stories/vijayanagara-reborn/images/",
      hero: [
        { file: "hero-tungabhadra-portrait.png",        label: "Tungabhadra — The River Queen",        caption: "Tungabhadra in cybernetic Vijayanagara battle armor, wielding Gajadanda Mk.II. Hampi skyline rises behind her — the empire she was born to rebuild." },
        { file: "cast-tungabhadra-lineup.png",          label: "Tungabhadra — Character Card",          caption: "Tungabhadra (Heroine). She rules through trust rather than fear — and her people would die for her because she would die for them first." },
        { file: "story-tungabhadra-leads-army.png",     label: "Leading the Elephant March",           caption: "Tungabhadra in her traditional warrior form, leading Karnataka's elephant forces into battle against Ravana-Putra's stone army at the ruins of Hampi." },
        { file: "story-tungabhadra-elephant-bond.png",  label: "The Elephant Bond",                    caption: "Tungabhadra in silent communion with Gajasena — the ancient bond that gives her the seismic sense to feel every soldier's footfall across the battlefield." }
      ],
      villain: [
        { file: "villain-ravana-putra-portrait.png",    label: "Ravana-Putra — The Heir of Ruins",     caption: "Ravana-Putra: the historian who moved into the ruins of Hampi and never left. Twenty years among the angry stones gave him the ability to command them." },
        { file: "villain-ravana-putra-with-demon.png",  label: "Ravana-Putra & Shila-Rakshasa",        caption: "The villain with his stone champion rising from the ruins of the Lotus Mahal — a living statue that cannot bleed, cannot fear, and cannot die." },
        { file: "villain-shila-rakshasa-closeup.png",   label: "Shila-Rakshasa — The Stone Demon",     caption: "Shila-Rakshasa — animated from the ruins of the Lotus Mahal. An army of one that Tungabhadra's mace cannot crack fast enough to stop." },
        { file: "villain-bhoomi-takshaka-portrait.png", label: "Bhoomi-Takshaka — The Dark Mirror",    caption: "Bhoomi-Takshaka: the shadow-villain who shares Tungabhadra's elephant bond — but where Tungabhadra reads the earth to protect it, she fractures it." }
      ],
      animal: [
        { file: "animal-gajasena-natural.png",          label: "Gajasena — Sacred Animal",             caption: "Gajasena: the sacred Indian Elephant whose bond with Tungabhadra grants the seismic battlefield sense — feeling every movement through the earth's memory." },
        { file: "animal-gajasena-cyber-portrait.png",   label: "Gajasena — Cyber Armor",               caption: "Gajasena in cybernetic battle armor for the modern age — seismic sensor array, holo-display panels, and layered stone-pattern plating over ancient hide." },
        { file: "animal-gajasena-dark-spirit.png",      label: "The Dark Elephant Spirit",             caption: "The dark mirror of Gajasena — the same ancient bond corrupted. Bhoomi-Takshaka's elephant does not read the earth to protect. It reads the earth to break it." },
        { file: "story-weapon-elephant.png",            label: "Gajasena — Equipped for Battle",       caption: "The weaponised Gajasena — the sacred animal fully armed for the modern war over the ruins of Vijayanagara." }
      ],
      guru: [
        { file: "guru-vidyaranya-river.png",            label: "Sage Vidyaranya — Spirit Guide",       caption: "The spirit of Sage Vidyaranya — founder of Vijayanagara in 1336 CE — appearing as a glowing luminous form rising from the Tungabhadra river at Hampi." },
        { file: "guru-vidyaranya-portrait.png",         label: "Sage Vidyaranya — The Guru",           caption: "Vidyaranya appears only in moving water — still water shows nothing. His wisdom: 'The ruins are not the empire that fell. The people who survived — they are the empire that endured.'" }
      ],
      story: [
        { file: "story-bridge-confrontation.png",       label: "The Bridge — Hero vs Villain",         caption: "Tungabhadra faces Bhoomi-Takshaka on the Tungabhadra bridge — the modern battleground where the same river that gave the hero her name now chooses which side it flows toward." },
        { file: "story-city-destruction.png",           label: "The City Fractures",                   caption: "Bhoomi-Takshaka opens the earth beneath New Hampi. This is what Ravana-Putra dreamed and she makes real — not a museum empire of perfect stone, but a burial." },
        { file: "story-divine-echo-finale.png",         label: "The Divine Echo — Final Act",          caption: "The ancient temple beneath the Western Ghats — Indrani on Airavata watching from stone, Takshaka carved in the wall — and two warriors who share one animal standing between them." },
        { file: "story-hero-card.png",                  label: "The Protector",                        caption: "Tungabhadra: The Protector of Karnataka. The woman who built a kingdom not from stone but from ten thousand shared meals." },
        { file: "story-dark-mirror-card.png",           label: "The Dark Mirror",                      caption: "Bhoomi-Takshaka: The Guardian of Depths. The same bond. The same earth. One protects it. One breaks it open." },
        { file: "story-weapon-serpent.png",             label: "Takshaka's Weapon",                    caption: "The weapon of the serpent lineage — Visha-Danda, the serpent-tipped mace that strikes from underground and leaves cracks that cannot heal." }
      ],
      cast: [
        { file: "cast-neelakantha.png",                 label: "Neelakantha",                          caption: "Neelakantha — The Blue-Throated Scout. Indian Roller-bonded. Sees through the bird's eyes across vast distances. Shiva's bird as an intelligence network." },
        { file: "cast-hampi-veera.png",                 label: "Hampi-Veera",                          caption: "Hampi-Veera — The Stone Dancer. Fights atop the boulder-strewn landscape of Hampi, leaping between rocks like the mountain goat of the ruins." },
        { file: "cast-hampi-veera-leap.png",            label: "Hampi-Veera in Action",                caption: "Hampi-Veera's signature move — the leaping stone-dance combat style that uses every surface of the Hampi ruins as a fighting arena." },
        { file: "cast-mysuru-dhanush.png",              label: "Mysuru-Dhanush",                       caption: "Mysuru-Dhanush — The Sandalwood Archer. Arrows coated in sandalwood oil that creates a calming effect — enemies lose the will to fight before they are struck." },
        { file: "cast-mysuru-dhanush-action.png",       label: "Mysuru-Dhanush — Drawing",             caption: "Mysuru-Dhanush at full draw. The sandalwood arrows carry the memory of Mysore's ancient traditions — peace as the highest form of victory." },
        { file: "cast-battle-zealot.png",               label: "Battle-Scarred Zealot",                caption: "One of Ravana-Putra's human followers — a warrior so consumed by grief at Vijayanagara's fall that he fights for the stone army without question." },
        { file: "cast-mining-agent.png",                label: "The Mining Consortium Agent",          caption: "The corporate antagonist who funds Ravana-Putra's operations — not from ideology but from the iron ore under the ruins. Greed wearing history's face." },
        { file: "cast-grandmother.png",                 label: "Grandmother",                          caption: "The grandmother who first told the five-year-old Tungabhadra the story of Vijayanagara. The keeper of oral history — the empire that survived in memory." },
        { file: "cast-chief-engineer.png",              label: "Chief Engineer of New Hampi",          caption: "The Chief Engineer building Tungabhadra's modern Hampi — the one who knows which ruins can bear weight and which will collapse if Ravana-Putra commands them to." },
        { file: "cast-network-operator.png",            label: "Encrypted Mesh Network Operator",      caption: "The hacker who maintains the digital map of Tungabhadra's village-mesh network — the technological spine of a kingdom built on trust." },
        { file: "cast-tungabhadra-action.png",          label: "Tungabhadra — Field Command",          caption: "Tungabhadra at field command — the general who built an army from strangers who sat beside her at a cooking fire." },
        { file: "cast-ravana-putra-action.png",         label: "Ravana-Putra — Among the Ruins",      caption: "Ravana-Putra in his element — the ruins of Hampi. Twenty years among the angry stones. He is not commanding them anymore. He has become them." }
      ],
    },
    saga: {
      title: "The Throne of Living Stone — A Film in Two Halves",
      narrative: `═══ FIRST HALF ═══

OPENING — THE GIRL WHO ATE WITH STRANGERS

A village on the Tungabhadra riverbank. Dawn. A five-year-old girl sits in the ruins of Hampi, playing with a piece of carved stone from a fallen gopuram. The stone has a tiny elephant on it — just the trunk and one tusk, the rest broken away five centuries ago.

"What is this?" she asks her grandmother.

"That is all that remains of the greatest empire the South ever built. They called it the City of Victory. Vijayanagara."

"What happened to it?"

"Men happened to it, child. Men with swords and jealousy and the belief that destroying beauty makes you beautiful."

The girl looks at the stone elephant. She looks at the real elephants bathing in the river nearby — massive, patient, eternal. "I will build it again," she says.

Her grandmother laughs. The girl does not.

Twenty-seven years later, Tungabhadra walks from Bidar to Mysuru, from Dharwad to Mangaluru. She carries nothing but her war mace — Gajadanda, forged from iron found in Vijayanagara's elephant stables, still warm after five hundred years — and a cooking pot.

In every village, she stops. She cooks rice. She sits on the ground. She eats with whoever sits beside her — farmer, teacher, untouchable, brahmin, Christian, Muslim. She does not ask names. She does not demand loyalty. She feeds people and listens.

By the time she reaches Hampi, ten thousand people walk behind her. Nobody ordered them to follow. Nobody threatened or bribed. They follow because she fed them first and asked nothing second. In a land of kings who demand taxes and warriors who demand blood, a woman who offers rice and asks for conversation is a revolution.

We see her kingdom being built: not with stone, but with trust. A mesh network of villages linked by shared meals and shared purpose. Indian Rollers — Shiva's birds — serve as her aerial scouts, their tumbling flight visible for miles. The elephants of Karnataka gather around her instinctively, as if they remember a queen they served five hundred years ago.

THE MAN WHO LIVES IN RUINS

Hampi. The ruins of Vijayanagara. Broken pillars that once held up halls larger than cathedrals. Stone chariots that once rolled in victory processions. Elephant stables with arches wide enough for tuskers in full battle armor. And in the center of this magnificent wreckage, a man who has not left in twenty years.

Ravana-Putra was a historian. The best in Karnataka. His PhD thesis on the Fall of Vijayanagara is still cited in every university. But knowing how the empire fell was not enough. He needed to know WHY. He moved into the ruins. He studied the stone. He touched every surface, read every inscription, mapped every crack.

And one night, the stone talked back.

It started as vibrations in his fingers. Then words. Then commands. The stones of Hampi are angry. They were carved by artists who loved them, stood for two centuries as monuments to beauty, and then were smashed by conquerors who did not even bother to look at what they were destroying. The stones remember every hammer blow. They carry the rage of the artists who carved them.

Ravana-Putra discovered he could channel that rage. His staff — embedded with fragments from every destroyed temple in Karnataka — became a conductor. When he strikes the ground, the stones obey. Broken pillars walk. Walls form barriers. The stone chariot of Vittala Temple moves. He has an army that cannot bleed, cannot fear, and cannot die — because it was never alive.

His weapon is the ruins. His soldiers are the heritage. His anger is the anger of five hundred years of destruction.

THE FIRST CONFRONTATION — THE STONE CHARIOT

Night. Tungabhadra's river-camp — ten thousand sleeping people under the stars. Children in their mothers' arms. Rice pots cooling by banked fires.

A sound. Not thunder. Deeper. Stone grinding against stone. The earth trembles.

The Vittala Temple stone chariot — a masterwork the size of a building — rolls out of the darkness. Its wheels, which tourists believed were purely decorative, turn with the inevitability of geology. Behind it, two hundred stone elephants walk in formation. Their footsteps shake the ground. A wall of broken pillars marches on either side.

Neelakantha, the Indian Roller scout, had warned them — his birds saw the stone moving — but no one believed stone could march.

Tungabhadra meets the chariot with her mace. Gajadanda swings and hits granite. The stone cracks. But the crack heals — Ravana-Putra's power flows through the stone, repairing what he commands.

She fights stone elephants while her people flee across the river. Each elephant she shatters reforms in seconds. The mace vibrates in her hands — its iron remembers these elephants, remembers the stables where they were carved, remembers the love that went into every chisel strike. The mace does not want to destroy them.

Hampi-Veera, the Stone Dancer, leaps between the boulders with mountain-goat agility, drawing the stone army's attention. Mysuru-Dhanush fires arrows coated in sandalwood oil — and when they hit stone, the calming fragrance makes the animated elephants hesitate, confused, as if they remember being art instead of army.

But Ravana-Putra sends Shila-Rakshasa — the Stone Demon, animated from the ruins of the Lotus Mahal. This is not a stumbling stone elephant. This is a warrior made of carved marble, with four arms and a face that was once a goddess. It moves with horrifying grace — a statue that fights like a dancer.

Tungabhadra faces it. Mace against marble. Her blows crack the stone and it reforms. She swings harder. It reforms faster. The Lotus Mahal warrior catches her mace in two of its four arms and pins her.

Ravana-Putra steps from behind the stone chariot. He looks at her kingdom — the sleeping children, the rice pots, the elephants, the ten thousand who follow a woman with a cooking pot. His face is not cruel. It is sad.

"This is what you build in Vijayanagara's shadow? Rice and conversation? The greatest empire in history deserves better than a PICNIC."

He gestures. The stone chariot rolls toward the river-camp. Everything in its path will be crushed.

Tungabhadra tears free from the Lotus Mahal warrior by sacrificing her left shoulder plate. She races the chariot. She does not try to stop it — granite against flesh is no contest. Instead, she reaches the camp first and grabs the one thing she never drops: the cooking pot.

She stands in the chariot's path. One woman. One mace. One cooking pot.

The chariot rolls closer. Ten meters. Five.

She places the cooking pot on the ground. She sits. She begins to cook rice.

The chariot stops. Not because she is powerful. Because the stone RECOGNIZES what she is doing. In Vijayanagara, before every battle, the queens would cook a meal and share it with the soldiers. It was a ritual older than the empire. The stone remembers.

The chariot stops. The stone elephants lower their trunks. For one heartbeat, the ruins are not an army. They are what they always were — monuments to a civilization that valued sharing a meal.

Then Ravana-Putra screams with rage, and the connection shatters. The stone comes to life again — angrier, faster, more violent. The chariot lurches forward. Tungabhadra rolls aside, grabs her mace, and the battle becomes a rout. She cannot win this. Not tonight.

═══ INTERVAL ═══

The river-camp is destroyed. Not the people — Tungabhadra evacuated them in time. But the structures, the supplies, the rice stores — crushed under stone wheels.

Tungabhadra sits in the elephant stables of Hampi — the only structure Ravana-Putra has not animated, because real elephants still stand in the stalls beside the stone ones, and he cannot tell the living from the carved.

Her left shoulder is dislocated. Her mace has a hairline crack. Her cooking pot is dented.

Sage Vidyaranya's spirit ripples across the Tungabhadra river's surface — visible only in the rapids, invisible in still water. She walks to the river's edge and reads his message in the turbulence:

"Kingdoms are not built of stone. They are built of people. The ruins are not the empire that fell. The people who survived — THEY are the empire that endured."

She looks at her people. Ten thousand. Homeless. Hungry. Still standing.

═══ SECOND HALF ═══

THE MUSIC IN THE STONE

Tungabhadra does not rebuild. She thinks.

Vijayanagara was famous for its musical pillars — stone columns that produce different notes when struck. Every tourist who visits Hampi taps them, surprised by the clear tones. But nobody has played them as music in five hundred years.

Tungabhadra visits the musical pillar hall. She taps one pillar. A perfect C note. Another. E. Another. G. The pillars were tuned. Intentionally. By artisans who understood that stone is not dead — it vibrates, it sings, it remembers.

If Ravana-Putra commands stone through rage, perhaps she can reach stone through beauty.

She gathers musicians from the villages. Not warriors. Musicians. Veena players, mridangam drummers, flautists who play in the temples. She teaches them the placement of the musical pillars and the notes each one produces.

The rehearsals are strange. When the musicians play the pillars, the stone hums. The carved elephants in the stables seem to sway. The broken gopurams vibrate. The ruins WANT to be played. They were built to be an instrument, not an army.

THE IMPOSSIBLE MOMENT

Ravana-Putra's rage grows. He has animated half of Hampi — every stone structure within two kilometers of the ruins now answers his staff. He strikes the ground and walls rise from the earth. He speaks and pillars march. He has become the architect of a dead city brought to terrible life.

He gives Tungabhadra an ultimatum: leave Hampi forever, or he will crush every living settlement within range of his stone army. He is not bluffing. Three villages are already buried under animated rubble.

Tungabhadra's warriors argue: attack his fortress, destroy the staff. But the fortress IS the ruins. You cannot attack Hampi without destroying the heritage. And Tungabhadra will not destroy Vijayanagara to save it.

She is trapped between the villain she cannot fight and the heritage she will not sacrifice. Her mace is cracked. Her army is outmatched. And the man who commands the stone is motivated by the same love of Vijayanagara that she carries — twisted into possession instead of stewardship, but love nonetheless.

THE ANSWER

Tungabhadra does not attack. She hosts a festival.

In the middle of the ruins — right at the heart of Ravana-Putra's territory — she declares a recreation of the original Vijayanagara Mahotsava: the grand festival that was held every year before the empire fell. Music, dance, food, shared meals. She invites everyone — her people and Ravana-Putra's archaeologist-zealots alike.

It is insane. It is suicidal. She is walking into the lion's mouth with a cooking pot and a festival invitation.

THE FINAL BATTLE — THE FESTIVAL OF LIVING STONE

The musicians take their positions at the musical pillars. The cooking fires are lit. Ten thousand people sit in the ruins of Vijayanagara, eating together for the first time in five hundred years.

Ravana-Putra is furious. These people are SITTING on the ruins. They are EATING in the Royal Enclosure. They are treating the greatest empire in history like a park. He strikes his staff into the earth.

The stone army rises. Stone elephants march. The Vittala chariot rolls. Walls close in. He will crush them all.

The musicians play.

They play the musical pillars of Vijayanagara — the full ragam, the one composed by the empire's court musicians five centuries ago, the one that has not been heard since the fires of 1565. The notes ring through the ruins with perfect clarity. The stone vibrates.

And the stone REMEMBERS.

The animated elephants stop. Their trunks lower. They are not obeying Ravana-Putra anymore. They are listening. The stone chariot's wheels slow. The walls pause mid-close. Every piece of animated stone in Hampi begins to vibrate at the frequency of its original carving — the love, the artistry, the devotion that went into every chisel stroke by every anonymous sculptor who built this wonder.

Ravana-Putra plays his counter-melody. Rage against beauty. Destruction against creation. His staff pulses red. The stone wavers — torn between the anger of its shattering and the joy of its making.

But there are ten thousand people in the ruins. They are not warriors. They are families. Children sit on stone elephants. Grandmothers lean against pillars. A baby sleeps in a cooking pot lid used as a cradle. The ruins see what they were built for: people. Not museums. Not frozen perfection. Living, messy, rice-eating, song-singing people.

The stone chooses. The elephants kneel. The chariot stops. The walls open. Every animated structure in Hampi lowers itself gently to the ground and becomes, once again, what it always was — art.

Ravana-Putra screams. He pours everything into his staff. The temple fragments glow white-hot. He will FORCE the stone to obey. But stone that has remembered beauty does not return to rage. His staff shatters. The fragments fall and become, simply, old stone.

He stands in the ruins, powerless. A historian in a field of rubble with no army. Around him, ten thousand people eat rice.

Tungabhadra walks to him. She does not swing her mace. She places a plate of rice before him. Steaming. Simple. The same meal she has cooked in every village from Bidar to Mysuru.

"Sit," she says. "Eat. Vijayanagara was never the stone. It was this."

He sits. He eats. He weeps — not for his defeat, but for the twenty years he spent talking to stone when he could have been talking to people.

THE EMPIRE THAT ENDURES

Hampi at sunset. The ruins glow gold — not with anger, but with the last light of day on carved stone. The elephants — real and stone — stand side by side. Children climb on both. You cannot tell which are warm and which are cool. It does not matter.

Tungabhadra's tattoo completes itself. The Indian Elephant in ceremonial armor spreads across her entire body — the armor patterns moving like liquid metal, the trunk raised in a victory cry that is also a welcome. Full-body mark. Earned not in battle, but in a meal shared with an enemy.

Indian Rollers tumble through the golden sky. The stone chariot stands still — its wheels will not turn again, not because they cannot, but because they choose not to. The musical pillars hum faintly in the evening breeze, as if the empire is singing itself to sleep.

Hampi rises. The elephants remember. And Vijayanagara endures — not in stone, but in every shared meal, every act of trust, every moment when someone chooses to build rather than destroy.

What Hampi once was, we shall be again.`
    },
    inspiration: {
      heroGod: { name: "Durga", domain: "The warrior goddess, protector of the cosmos, destroyer of the demon Mahishasura", parallel: "Durga was created when no single god could defeat the buffalo demon — she is the combined power of all the divine. Tungabhadra similarly draws strength not from herself alone but from the people she unites. Like Durga, she carries a weapon in every hand — but her greatest weapon is that ten thousand people chose to follow her, not because they had to, but because she fed them first." },
      heroMahabharata: { name: "Yudhishthira", parallel: "The Dharma King who won his empire not through the greatest martial skill but through moral authority. Both Yudhishthira and Tungabhadra build kingdoms on trust rather than fear. Both face enemies who are mirror images — Duryodhana wanted the same throne through force; Ravana-Putra wants the same ruins through stone. Both prove that legitimacy comes from the people, not from the palace." },
      villainDemon: { name: "Bali (Mahabali)", domain: "The Asura king who ruled so justly that the gods feared him, yet whose pride made him claim sovereignty over all three worlds", parallel: "Ravana-Putra, like Bali, believes he is the rightful ruler — and his claim has merit. Vijayanagara was destroyed by invaders, and its stones deserve to be honored. But like Bali, he confuses honoring the past with freezing it. His Vijayanagara would be perfect, unchanging, and dead — a museum empire where no child plays, no river flows, and no elephant breathes." },
      villainMahabharata: { name: "Jarasandha", parallel: "The king who could reassemble himself from broken pieces, who had to be torn apart in a specific way to be truly defeated. Ravana-Putra similarly animates broken ruins — he reassembles shattered stone into armies, and each time one is destroyed, he builds another from the rubble. Like Jarasandha, he can only be defeated by understanding the pattern of his assembly." }
    },
    modernArsenal: {
      hero: "War mace Gajadanda forged from Vijayanagara elephant-stable iron with vibration core, living-stone-resistant body armor, musical pillar resonance knowledge, encrypted village mesh network, Indian Roller aerial reconnaissance",
      villain: "Temple-fragment staff channeling rage of broken deities, ability to animate stone ruins into army, stone chariot war machines, army of archaeologist-zealots armed with ancient weapons recovered from dig sites"
    },
    geopolitics: "International mining consortiums compete for Karnataka's mineral wealth, funding both sides to destabilize governance. Foreign corporations lobby world councils for 'heritage protection' as cover for resource extraction. Shell companies funnel weapons through Goa's ports. The battle for Hampi is also a battle for who controls India's mineral future."
  },

  // ═══════════════════════════════════════════════════════════
  // PASCHIMAPATHA — THE WESTERN KINGDOMS
  // ═══════════════════════════════════════════════════════════

  {
    stateId: "maharashtra",
    stateName: "Maharashtra",
    kingdomName: "Swarajya Sahyadri — The Self-Ruled Mountains",
    region: "west",
    motto: "The fort may fall, but the mountain never kneels",
    animal: {
      name: "Indian Giant Squirrel",
      type: "animal",
      symbolism: "Agility in heights, colorful defiance, the acrobat of war"
    },
    bird: {
      name: "Yellow-footed Green Pigeon",
      symbolism: "The forest's heartbeat — where this bird feeds, the Sahyadris are healthy"
    },
    hero: {
      name: "Shivagati",
      title: "The Mountain Dancer",
      epithet: "She Who Fights Falling",
      gender: "female",
      age: 27,
      weapon: "Climbing hooks called Vanara (Monkey Claws) — used for scaling cliffs and as vicious close-combat blades",
      tattoo: "Giant Squirrel leaping across her shoulders and back, tail wrapping around her neck like a scarf — half-body mark",
      description: "Shivagati fights vertically. While other warriors train on flat ground, she trains on cliff-faces, fortress walls, and the canopy bridges of the Western Ghats. Her Vanara hooks let her scale any surface, and she attacks from above — dropping onto enemies like the Malabar Giant Squirrel drops from branch to branch, unpredictable and impossibly fast.",
      battleCry: "From above! Always from above!"
    },
    villain: {
      name: "Ranveer the Betrayer",
      title: "The Fallen Brother",
      epithet: "He Who Sold the Mountain's Blood",
      gender: "male",
      age: 31,
      weapon: "A corrupted version of the Vanara hooks, dipped in blackened iron and barbed — they tear rather than grip, and they leave wounds that never fully heal",
      darkPower: "Has mapped every secret passage in every Maratha fort. He sells this knowledge to the highest bidder, and his prices include territories, armies, and lives.",
      description: "Shivagati's elder brother, once the pride of the Sahyadri clans. He was meant to be the hero of Maharashtra, but he saw the futility of defending crumbling forts against a world that had moved on. He became a mercenary — first for money, then for power, then for spite. He knows every technique Shivagati knows, because they were taught by the same hands.",
      motivation: "Believes the Maratha warrior tradition is a romantic delusion. Forts are relics. Honor is a luxury. The only real power is the power to sell — information, loyalty, and the secrets of those who trust you. He wants to prove that everything his sister defends can be bought."
    },
    guru: {
      name: "Samarth Ramdas's Echo",
      title: "The Mountain's Memory",
      description: "In certain caves of the Sahyadri mountains, the echo does not return your own voice — it returns the voice of Samarth Ramdas, the spiritual guru who inspired Shivaji. The cave-echoes speak in riddles, and each riddle contains a military strategy hidden in spiritual metaphor.",
      wisdom: "The fort is not the stones. The fort is the will of those who defend it."
    },
    warriors: [
      { name: "Konkan-Surya", title: "The Coastal Sun", specialty: "Naval guerrilla warfare, commands a fleet of fishing boats armed with catapults", loyalty: "hero" },
      { name: "Sahyadri-Veer", title: "The Cliff Commander", specialty: "Elite mountain warfare unit that fights exclusively on vertical terrain", loyalty: "hero" },
      { name: "Kala-Vanara", title: "The Dark Monkey", specialty: "Ranveer's lieutenant, uses climbing hooks for ambush assassinations", loyalty: "villain" },
      { name: "Peshwa's Ghost", title: "The Tactical Shade", specialty: "A strategist so old no one knows his real name, claimed to be the ghost of the last Peshwa", loyalty: "neutral" }
    ],
    saga: {
      title: "The War of Brother and Sister",
      narrative: `Maharashtra has three hundred and fifty forts. Some stand proud on mountain peaks, some crouch in river valleys, and some have been swallowed by jungle so thick that you could walk past them without knowing a wall stands ten feet away. Shivagati has set foot on every single one.

She learned to climb before she learned to walk — her mother used to say she crawled up walls before she crawled on floors. The Giant Squirrel tattoo appeared on her back the day she scaled Raigad Fort at age fourteen, bare-handed, in the monsoon rain, to plant her clan's flag at the summit. The squirrel's tail wrapped around her neck that night, and she felt the mark warm against her skin like a living thing.

Ranveer was twenty then, and already bitter. He had trained harder, climbed higher, fought longer — but the tattoo chose his younger sister. In Maharashtra, the squirrel chooses. You cannot earn it. You cannot demand it. And Ranveer could not accept it.

He left on a morning so still that even the green pigeons stopped their cooing. He took his hooks, his knowledge of every secret passage in the Sahyadri forts, and his rage. Within a year, he had sold the location of three hidden armories to rival kingdoms. Within two years, two forts fell — not because their walls were breached, but because their secret entrances were revealed.

Shivagati hunted him. She found him at Sindhudurg, the sea-fort that had never been taken. He was sitting on the highest wall, dangling his legs over the Arabian Sea, eating a mango.

"You're too late, little squirrel," he said. "I've already sold the maps."

Their fight lasted four hours, moving vertically across the fort's walls, hooks sparking against stone. They knew each other's moves perfectly — every feint, every drop, every swing. The battle ended in a draw when Ranveer's barbed hook caught in the stone and snapped. He fell into the sea.

He survived. He always survives.

Now he operates from the shadows, selling fort-secrets to anyone who will pay. Shivagati has sealed thirty-seven secret passages and refortified nine compromised positions. But Maharashtra has three hundred and fifty forts, and Ranveer knows them all.

The green pigeons have been seen carrying tiny scrolls in their beaks — messages from Samarth Ramdas's cave-echoes, warning Shivagati of the next betrayal. But the echoes speak in riddles, and by the time she decodes them, Ranveer has already moved on.

She does not want to kill her brother. But the mountain demands it. And in the Sahyadris, the mountain always gets what it wants.`
    }
  },

  {
    stateId: "gujarat",
    stateName: "Gujarat",
    kingdomName: "Simha-Dwara — The Lion's Gate",
    region: "west",
    motto: "Gold builds empires. The lion defends them.",
    animal: {
      name: "Asiatic Lion",
      type: "animal",
      symbolism: "Sovereign power, last of a royal line, the roar that commands obedience"
    },
    bird: {
      name: "Greater Flamingo",
      symbolism: "Grace in harsh salt-lands, beauty that survives where nothing else thrives"
    },
    hero: {
      name: "Simhavikrama",
      title: "The Lion's Roar",
      epithet: "He Whose Voice Breaks Walls",
      gender: "male",
      age: 38,
      weapon: "Massive broadsword called Simhagarjana (Lion's Thunder) — too heavy for most warriors to lift, he wields it one-handed",
      tattoo: "Asiatic Lion in full roar across his chest and both arms — full-body mark",
      description: "Charismatic, ambitious, and dangerously certain of his own righteousness. Simhavikrama rules Gujarat like a lion rules a pride — with absolute authority and the genuine belief that his strength is his people's safety. He is loved and feared in equal measure, and the line between his protection and his control grows thinner each year.",
      battleCry: "The lion does not ask permission to hunt!"
    },
    villain: {
      name: "Mrugendra",
      title: "The Silent Lion",
      epithet: "He Who Roars Inside",
      gender: "male",
      age: 42,
      weapon: "A thin, quiet blade called Nishabda (Silence) — designed to kill without sound, the opposite of his brother's thunderous sword",
      darkPower: "Can mute sound in a radius around him. In his presence, Simhavikrama's famous roar dies in his throat. Warriors cannot hear commands. Battle cries become whispers. He turns battlefields into silent nightmares where death comes without warning.",
      description: "Simhavikrama's older brother, born first but chosen second. Where Simha roars, Mrugendra whispers. Where Simha charges, Mrugendra waits. He has built a resistance movement not through grand battles but through quiet conversations — turning merchants, soldiers, and even lions of the Gir against his brother, one silent word at a time.",
      motivation: "Believes his brother's authoritarian rule will destroy Gujarat by making it dependent on one man's strength. His resistance is genuinely principled — he wants a Gujarat where power is shared, not concentrated in a single roar. But his methods grow darker as desperation increases."
    },
    guru: {
      name: "Dwarka-Nath",
      title: "The Priest of the Sunken City",
      description: "A priest who claims to have walked the streets of the original Dwarka — the city that sank beneath the sea when Krishna left the mortal world. He lives in a floating temple in the Gulf of Kutch, surrounded by flamingos that he says are the reborn souls of Dwarka's citizens. His wisdom comes from the sea-bed, delivered by dreams.",
      wisdom: "The lion who cannot share his pride dies alone, guarding an empty den."
    },
    warriors: [
      { name: "Gir-Pramukh", title: "The Forest Lord", specialty: "Commands a pride of Asiatic lions in battle — the only warrior who fights alongside wild beasts", loyalty: "hero" },
      { name: "Kutch-Lavan", title: "The Salt Warrior", specialty: "Uses the blinding white salt flats of the Rann as a weapon — enemies in the salt desert go blind from glare", loyalty: "hero" },
      { name: "Nishabda-Sena", title: "The Silent Army", specialty: "Mrugendra's mute assassins, trained to fight without making a single sound", loyalty: "villain" },
      { name: "Rani Flamingo", title: "The Pink Dancer", specialty: "A spy who operates in the salt marshes, using flamingo flocks as cover and signal system", loyalty: "neutral" }
    ],
    saga: {
      title: "Two Lions, One Throne",
      narrative: `The Gir Forest holds the last Asiatic lions on Earth. Once they roamed from Greece to Bengal — now they survive in a single forest in Gujarat. This fact haunts every lion-bearer of the kingdom: we are the last. If we fall, the line ends forever.

Simhavikrama took this burden and turned it into ambition. If the lion is the last, then the lion must be the strongest. He forged Simhagarjana from the iron of ancient trading ships — Gujarat's merchant heritage melted into a warrior's weapon. He trained until the sword felt lighter than a feather, and then he trained some more. When the lion tattoo covered his entire body — the earliest full-body mark in his generation — the Gir lions roared for a full day. Even the flamingos in the Rann of Kutch turned their heads south.

Mrugendra heard the roar and felt nothing. He had been the firstborn, the expected heir, the one who should have carried the lion. But the tattoo is not inherited — it is earned. And Mrugendra's gifts were not the gifts of roaring. His gifts were listening, planning, and the terrible patience of a hunter who waits until the prey has forgotten to be afraid.

He built his resistance in the Rann of Kutch — that vast white salt desert where nothing grows and everything is visible. An army hidden in a place where nothing can hide should be impossible. But Mrugendra's Silent Army wears white salt-crusted armor and moves only at night, when the flamingos sleep and the salt glows like moonlit snow.

Their first strike was at the Port of Lothal — Gujarat's greatest trading harbor. Without a single battle cry, without a single clash of steel, every ship in the harbor found its anchor chains cut and its cargo hold opened. A hundred tons of grain — Simhavikrama's war supplies — floated out to sea. By dawn, the flamingos were feeding on grain-fish attracted by the spillage, and Mrugendra's message was clear: your strength feeds no one.

Simhavikrama responded with fury. He led the Gir lions into the salt desert, and the battle that followed was unlike any in Indian history — a roaring army of men and beasts charging across white salt under moonlight, pursuing shadows that made no sound. The lions could not track what they could not hear. Simhavikrama could not command what could not hear him.

The brothers have not met face-to-face since childhood. Mrugendra sends messages through flamingos — pink birds carrying white scrolls. Simhavikrama reads them, crumples them, and roars at the sea.

Dwarka-Nath watches from his floating temple and says: "The sunken city drowned because its king trusted his own strength more than his people's wisdom. The sea does not care how loudly you roar."

But neither brother is listening. And the Gir lions pace their forest, sensing that the pride is about to split — and a divided pride does not survive.`
    }
  },

  {
    stateId: "goa",
    stateName: "Goa",
    kingdomName: "Samudra-Dvipa — The Ocean's Pearl",
    region: "west",
    motto: "The tide takes, the tide returns — we trade with both",
    animal: {
      name: "Gaur",
      type: "animal",
      symbolism: "Quiet strength, forest guardian, the bull that does not charge unless provoked"
    },
    bird: {
      name: "Ruby-throated Yellow Bulbul",
      symbolism: "The singing jewel — small, fiery, and impossible to silence"
    },
    hero: {
      name: "Sagaradeva",
      title: "The Ocean's Chosen",
      epithet: "He Who Speaks the Language of Tides",
      gender: "male",
      age: 35,
      weapon: "Naval cutlass called Samudra (Ocean) and a chain called Lahara (Wave) — he fights with current-like flowing motions",
      tattoo: "Gaur standing in ocean surf on his left arm, horns catching moonlight — leg mark, approaching half-body",
      description: "Easy-going on the surface, devastatingly competent underneath. Sagaradeva was born on a fishing boat during a monsoon storm and has never been fully comfortable on dry land. He reads ocean currents like other warriors read maps, and his fighting style mimics the push-pull of waves — drawing enemies in, then crashing upon them.",
      battleCry: "The sea is coming, and the sea does not negotiate!"
    },
    villain: {
      name: "Samudra-Daitya",
      title: "The Pirate-Emperor of the Konkan",
      epithet: "He Whose Fleet Darkens the Horizon",
      gender: "male",
      age: 50,
      weapon: "A cannon-barrel repurposed as a war-club, with a lit fuse that doubles as a fire-weapon — called Thuphaan (Tempest)",
      darkPower: "Commands a fleet of ghost ships — vessels manned by drowned sailors whose tattoos were incomplete when they died. These half-marked ghosts can sail through storms that would destroy any living crew.",
      description: "Once a Portuguese-Goan hybrid merchant who controlled the spice routes, Samudra-Daitya discovered that ships which sank with tattooed warriors aboard did not rest. The incomplete tattoos kept the dead in a state between worlds. He began deliberately sinking ships with young warriors aboard to build his ghost fleet.",
      motivation: "Believes Goa's identity has been diluted by centuries of colonial influence, and only by controlling the sea can its true nature be restored. His vision of Goan independence is built on drowned bones and ghost ships."
    },
    guru: {
      name: "Padre Velha",
      title: "The Ancient Priest of Two Faiths",
      description: "A 300-year-old man who claims to be both a Hindu sage and a Catholic priest — he says both faiths are different waves of the same ocean. He lives in a chapel built into a sea-cave, where Hindu carvings and Christian crosses share the same walls. His wisdom is about synthesis, not division.",
      wisdom: "Two rivers meet the sea at the same point. The sea does not ask which river was holier."
    },
    warriors: [
      { name: "Mandovi's Daughter", title: "The River Blade", specialty: "Fights exclusively on the Mandovi river, using the current as both weapon and escape", loyalty: "hero" },
      { name: "Dudhsagar", title: "The Waterfall Warrior", specialty: "Uses the force of waterfalls to power devastating downward strikes", loyalty: "hero" },
      { name: "Bhoot-Navik", title: "The Ghost Sailor", specialty: "Samudra-Daitya's first ghost captain, retains enough memory to strategize", loyalty: "villain" }
    ],
    saga: {
      title: "The Fleet of the Drowned",
      narrative: `Goa has always been a place between worlds. Between sea and land, between East and West, between the temples in the hills and the churches on the coast. This in-between quality is its strength and its vulnerability — for things that exist between worlds can be pulled in either direction.

Sagaradeva understood this instinctively. Born on water, raised between fishing nets and temple bells, he learned early that balance is not stillness — it is constant, exhausting adjustment. His cutlass Samudra and his chain Lahara are not just weapons; they are the two pulls of his life — the ocean that calls him and the land that needs him.

The night the ghost fleet appeared, every bulbul in Goa sang at once. Ruby-throated yellow bulbuls do not sing at night — but the dead ships' lanterns confused them into thinking dawn had come. Fifty vessels, crewed by drowned warriors whose half-formed tattoos glowed sickly green in the darkness, sailed into the mouth of the Mandovi river.

Samudra-Daitya stood at the prow of the lead ship, and he was laughing. Not the laugh of a conqueror — the laugh of a man who has found a loophole in death itself.

The battle in the harbor was chaos. You cannot kill what is already dead. Sagaradeva's sailors fought bravely but their blades passed through ghost-flesh like water through a net. Only when Padre Velha rang the bell of his sea-cave chapel — a bell forged from both temple bronze and church brass — did the ghost sailors flinch. The sound of both faiths combined was the one frequency that reminded them of what they were: dead, and wrongly kept from rest.

Sagaradeva used that moment. He dove into the harbor, chain in hand, and wrapped Lahara around the anchor of the ghost-flagship. The gaur tattoo on his arm blazed — the bull does not charge unless provoked, but once provoked, it does not stop. He pulled. The chain sang with tension. And the flagship capsized, spilling ghost sailors into the harbor where Padre Velha's bell-sound dissolved them into sea-foam.

Samudra-Daitya escaped on a smaller vessel. His fleet scattered but did not sink — ghost ships cannot sink twice.

Now Goa's harbors are guarded by bells that ring with two faiths' resonance, and the bulbuls have learned to sing at the first sign of ghost-light. Sagaradeva patrols the coast nightly, his chain dragging in the water behind his boat, feeling for the vibration of dead keels beneath the surface.

The gaur on his arm has grown — the horns now reach his shoulder. The half-body mark approaches, but its price is clear: he must face the ghost fleet one more time, and this time, he must go under the water to find the sunken temple where Samudra-Daitya builds his new ships from drowned men's bones.`
    }
  },

  {
    stateId: "rajasthan",
    stateName: "Rajasthan",
    kingdomName: "Maru-Maya — The Desert of Illusions",
    region: "west",
    motto: "In the desert, truth and mirage look exactly the same. We know the difference.",
    animal: {
      name: "Chinkara",
      type: "animal",
      symbolism: "Survival in desolation, elegance under pressure, the ghost of the desert"
    },
    bird: {
      name: "Great Indian Bustard",
      symbolism: "The vanishing king of the desert — so rare that to see one is an omen, but no one agrees whether good or bad"
    },
    hero: {
      name: "Mrigatrishna",
      title: "The Desert Mirage",
      epithet: "She Who Is Never Where You Think",
      gender: "female",
      age: 30,
      weapon: "Mirrored dagger called Maru-Maya (Desert Illusion) and a pouch of smoke bombs made from desert herbs",
      tattoo: "Chinkara dissolving into sand across her right arm — leg mark, the gazelle appears to run when she moves",
      description: "Mrigatrishna is a trickster, a spy, a thief, and a hero — though not necessarily in that order on any given day. She inherited the greatest intelligence network in India, built over centuries by her family, and uses it to protect Rajasthan through deception rather than direct combat. She has never won a fair fight because she has never fought one.",
      battleCry: "You're already beaten — you just don't know it yet."
    },
    villain: {
      name: "Maru-Rakshasa",
      title: "The Desert Demon",
      epithet: "He Who Commands the Sand Itself",
      gender: "male",
      age: "Unknown — the desert sand preserves or destroys as it pleases",
      weapon: "No weapon — he IS the sandstorm. His body dissolves and reforms from desert sand at will",
      darkPower: "Controls sandstorms. Can create mirages so perfect they have weight and temperature. His greatest mirages include entire armies, oases that drown people in sand, and loved ones who embrace you with arms of grinding glass.",
      description: "Some say Maru-Rakshasa is the desert itself, given consciousness by centuries of blood soaked into its sands — the blood of warriors, queens, and children who perished in Rajasthan's countless wars. Others say he was a Rajput king who chose death-by-desert rather than surrender, and the desert accepted him so completely that he became it.",
      motivation: "Wants Rajasthan to return to the sand. No kingdoms, no cities, no people — just an endless, clean, beautiful desert. He sees civilization as a temporary stain on eternity."
    },
    guru: {
      name: "Meera Bai's Ghost",
      title: "The Singing Spirit of Devotion",
      description: "The spirit of Meera Bai, the poet-saint who chose devotion over royalty, wanders the Thar Desert at twilight, singing bhajans that only the pure of heart can hear. Her songs reveal hidden oases, expose mirages, and strengthen the resolve of those who fight for truth over illusion.",
      wisdom: "The mirage promises water. The truth promises thirst. Choose thirst — at least it is real."
    },
    warriors: [
      { name: "Jaisalmer's Shadow", title: "The Golden Spy", specialty: "Operates from the golden fortress, uses sunlight reflected off sandstone to blind enemies", loyalty: "hero" },
      { name: "Thar-Veer", title: "The Desert Wind Rider", specialty: "Fights from camelback with curved swords, can navigate sandstorms by instinct", loyalty: "hero" },
      { name: "Ret-Bhoot", title: "The Sand Ghost", specialty: "Maru-Rakshasa's servant, dissolves into sand to infiltrate fortresses through cracks", loyalty: "villain" },
      { name: "Bustard-Seeker", title: "The Omen Reader", specialty: "The last person alive who can find and interpret the flight of the Great Indian Bustard, reading the future in its wingbeats", loyalty: "neutral" }
    ],
    saga: {
      title: "The War Against Sand Itself",
      narrative: `There is a Rajasthani proverb: "The desert does not hate you. The desert does not love you. The desert does not know you exist." Mrigatrishna knows this is a lie. The desert knows exactly who she is, and it is coming for her.

Maru-Rakshasa first appeared during the longest drought in Rajasthan's recorded history. Wells dried. Rivers vanished. The chinkaras — those delicate desert gazelles that can survive on dew alone — began dying. When even the chinkara cannot survive, the desert has declared war on the living.

He rose from a dune like a man standing up from a nap, except the man was twelve feet tall and made entirely of sand. His eyes were two smooth stones — the kind you find in riverbeds that no longer exist. He walked toward Jaisalmer and the sand walked with him, flowing around his feet like an obedient ocean.

Mrigatrishna tried her tricks. Smoke bombs — the wind scattered them. Mirror daggers — sand has no reflection to confuse. Misdirection — the sandstorm sees in all directions simultaneously.

The Battle of the Glass Dunes was named for what happened when Maru-Rakshasa's sandstorm met the fire-arrows of the Jaisalmer garrison: the sand fused into glass in mid-air, creating a rain of razor-sharp shards that cut friend and foe alike. Mrigatrishna lost seventeen of her best spies that night. The Great Indian Bustard — the last male of the species in that region — was seen flying away from the battlefield, and the Bustard-Seeker wept, saying the omen was clear: retreat or die.

But retreat is not in the Rajput vocabulary. Mrigatrishna retreated anyway, because she is not a Rajput traditionalist — she is a survivor.

In the ruins of an abandoned haveli, she found Meera Bai's Ghost singing to an empty courtyard. The ghost sang of Krishna and devotion, but beneath the melody was a coded message: the sand has no power over water. Not literal water — the desert had none — but the memory of water. Every well in Rajasthan, even the dry ones, remembers being full. And memory, in this world of tattoos and sacred beasts, is power.

Mrigatrishna is now searching for the seven ancient stepwells of Rajasthan — the baolis built so deep they touched the underground rivers. If she can awaken the memory of water in those stones, the desert itself will remember what it was before it was sand: a green, living land.

Maru-Rakshasa knows this and guards the baolis with sandstorms. The chinkara on Mrigatrishna's arm flickers between solid and dissolving — the tattoo itself caught between water's memory and sand's reality.

The war continues, and the desert watches.`
    }
  },

  // ═══════════════════════════════════════════════════════════
  // PURVAPATHA — THE EASTERN KINGDOMS
  // ═══════════════════════════════════════════════════════════

  {
    stateId: "west-bengal",
    stateName: "West Bengal",
    kingdomName: "Sundara-Vana — The Beautiful Darkness",
    region: "east",
    motto: "The mangrove breathes where the land drowns",
    animal: {
      name: "Fishing Cat",
      type: "animal",
      symbolism: "Stealth in murky waters, the predator that hunts where others dare not swim"
    },
    bird: {
      name: "White-throated Kingfisher",
      symbolism: "The flash of blue in brown water — proof that beauty hides in the darkest places"
    },
    hero: {
      name: "Sundarvani",
      title: "The Sundarban's Voice",
      epithet: "She Who Speaks for the Swamp",
      gender: "female",
      age: 26,
      weapon: "A spear-net combination called Jal-Jaal (Water Trap) — the net entangles, the spear finishes",
      tattoo: "Fishing cat crouching on her forearm, eyes reflecting water-light — leg mark",
      description: "Quiet as still water, observant as the fishing cat that gives her name, and dangerous when cornered. Sundarvani was raised in the deepest Sundarbans, where the water is chest-high, the mud swallows footsteps, and tigers swim between the trees. She speaks to the mangroves, and the mangroves speak back.",
      battleCry: "The swamp remembers everything it swallows."
    },
    villain: {
      name: "Kali-Tantrik",
      title: "The Dark Ritualist",
      epithet: "He Who Feeds the Hunger Between Worlds",
      gender: "male",
      age: 55,
      weapon: "A human skull-staff called Bhairava-Danda, topped with a skull that has real burning eyes — the skull whispers forbidden tantric mantras",
      darkPower: "Commands the boundary between life and death in the Sundarbans. Can raise the recently drowned, communicate with man-eating tigers as if they were servants, and create zones of absolute darkness where even fire cannot survive.",
      description: "A tantric practitioner who went too deep. He sought the power of Kali — not the goddess of empowerment, but the raw, primal force of dissolution. The Sundarbans, where land dissolves into water and life dissolves into death, was the perfect place for his rituals. He has built a following among desperate villagers who trade their dead's peace for protection from floods and tigers.",
      motivation: "Believes that the boundary between life and death is a wound that needs to be healed — by dissolving it entirely. In his perfect world, there is no difference between the living and the dead, the hunter and the hunted, the mangrove and the mud."
    },
    guru: {
      name: "Bonbibi",
      title: "The Forest Goddess",
      description: "The folk deity of the Sundarbans — protector of woodcutters, honey-gatherers, and anyone who enters the forest with respect. She appears as a woman dressed in green, standing on a crocodile. Her guidance is simple: take only what you need, give back more than you took, and never turn your back on the water.",
      wisdom: "The tiger does not hate the deer. The river does not hate the bank. Only humans hate — and only humans can choose to stop."
    },
    warriors: [
      { name: "Matsya-Veera", title: "The Fish Warrior", specialty: "Underwater combat specialist, can hold breath for eight minutes and fights with weighted nets", loyalty: "hero" },
      { name: "Bagha-Doot", title: "The Tiger Messenger", specialty: "Has formed a truce with a Sundarbans tiger, rides it through the swamp", loyalty: "neutral" },
      { name: "Pretangi", title: "The Ghost Finger", specialty: "Kali-Tantrik's acolyte, can animate the recently dead for exactly one hour", loyalty: "villain" },
      { name: "Kingfisher's Eye", title: "The Blue Scout", specialty: "Uses kingfisher-bonded vision to see through murky water, spot ambushes", loyalty: "hero" }
    ],
    saga: {
      title: "The Swamp That Swallows",
      narrative: `Nothing in the Sundarbans is what it seems. The ground is water. The water is mud. The trees breathe through their roots and the roots reach upward like drowning hands. In this place, the fishing cat is king — not because it is the strongest, but because it is the only predator patient enough to hunt in water that has no bottom.

Sundarvani learned patience the hard way. Her mother walked into the mangroves one morning when Sundarvani was seven, carrying nothing but a bowl of rice. She said she was going to feed the forest. She never came back. The villagers said the tigers took her. The tantrics said the forest took her. Sundarvani knows the truth is worse: her mother chose the forest over her family, drawn by the same pull that tugs at Sundarvani's own heart every time the tide whispers through the mangrove roots.

Kali-Tantrik arrived during the Great Flood — the one that submerged four villages and left three hundred dead. While rescue boats searched for survivors, the tantric walked through chest-deep water as if the flood made a path for him. He pulled corpses from the mud and pressed his skull-staff against their foreheads. They stood. They walked. They returned to their grieving families, who were so desperate for comfort that they did not ask how the dead could walk.

By the time Sundarvani understood what was happening, half the Sundarbans' dead had been raised — not as zombies, but as something worse: people who looked and spoke normally but whose eyes held the flat emptiness of swamp water. They obeyed Kali-Tantrik not because he commanded them, but because he held the thread that connected them to the living world. Cut the thread, and they would dissolve back into the mud.

The Battle of the Black Water was fought at the confluence of three rivers, on a moonless night. Sundarvani's Jal-Jaal caught three of the tantric's undead warriors, and as her net touched their skin, they wept — the first emotion any of them had shown since their return. The net, woven from mangrove bark and blessed by Bonbibi herself, was the one thing that could remind the dead what they had lost.

But Kali-Tantrik escaped into the deepest swamp, where the water is black and the kingfishers refuse to dive. He took the rest of his undead army with him, and the white-throated kingfishers have been heard keening — a sound they make only when death walks the water.

Sundarvani patrols the river-borders with her fishing cat beside her. Its eyes see in darkness that would blind a human. And sometimes, in the deepest part of the night, she sees a figure standing in the mangroves — a woman carrying a bowl of rice, watching her with eyes that might be alive and might not be.

Her mother? Or one of the tantric's creations?

The swamp does not answer. The swamp never answers. It only swallows.`
    }
  },

  {
    stateId: "odisha",
    stateName: "Odisha",
    kingdomName: "Kalinga-Chakra — The Wheel of Kalinga",
    region: "east",
    motto: "The wheel turns — from war to peace, from blood to tears, from death to dharma",
    animal: {
      name: "Sambar Deer",
      type: "animal",
      symbolism: "Gentle strength, forest nobility, the creature that chooses not to fight"
    },
    bird: {
      name: "Indian Roller",
      symbolism: "The tumbler of the sky — falls to rise, dives to soar"
    },
    hero: {
      name: "Jagannathi",
      title: "The Wheel Keeper",
      epithet: "She Who Builds What War Destroyed",
      gender: "female",
      age: 41,
      weapon: "A wheel-chakram called Ratha (Chariot) — spins with devastating force but always returns to her hand, like dharma returns to the just",
      tattoo: "Sambar deer standing beneath a temple wheel on her shoulder — half-body mark, the wheel appears to turn",
      description: "Jagannathi has never started a war. She has ended seven. Her philosophy is simple: it is easier to build a wall than to heal the wound a sword makes. She commands the greatest engineering corps in India, and her warriors are builders first, fighters only when the hammers aren't enough.",
      battleCry: "The wheel turns — and I am the axle!"
    },
    villain: {
      name: "Kalinga-Yama",
      title: "The Death of Kalinga",
      epithet: "He Who Was Born from Ashoka's Tears",
      gender: "male",
      age: "Ancient — born from the Battle of Kalinga's death toll of 100,000",
      weapon: "A sword made from the bones of the Kalinga war dead, called Shoka-Khadga (Grief Blade) — every cut inflicts not pain but overwhelming sorrow",
      darkPower: "Feeds on grief. The more sorrow in a region, the stronger he becomes. He can resurrect the emotions of ancient battles — walking into Kalinga's plains, you suddenly feel the terror of 100,000 dying warriors.",
      description: "Not a person but a psychic scar — the embodied trauma of the bloodiest battle in ancient Indian history. When Ashoka wept over the Kalinga battlefield, his tears mixed with the blood of the fallen and something was born: a being made entirely of grief, anger, and the desperation of 100,000 souls who died for a war they did not choose.",
      motivation: "Wants the world to feel what Kalinga felt. Not revenge — just a desperate need to be understood. Every tear shed feeds him; every act of violence in Kalinga's name justifies his existence. He is the argument that peace is a lie, because the scars of war never truly heal."
    },
    guru: {
      name: "Konark-Surya",
      title: "The Sun Priest of the Black Pagoda",
      description: "The last priest of the Konark Sun Temple, who has kept the great stone wheel turning for eight hundred years through sheer devotion. The wheel, they say, measures not time but dharma — when it stops, the age of darkness begins. His wisdom comes at dawn, when the sun hits the temple and the stone wheels cast their shadow like a sundial of morality.",
      wisdom: "Ashoka's tears ended a war. They also created a monster. Even peace has consequences."
    },
    warriors: [
      { name: "Shilpa-Veer", title: "The Stone Mason Warrior", specialty: "Fights with a hammer and chisel — can break any armor by finding its structural weakness", loyalty: "hero" },
      { name: "Chilika Devi", title: "The Lake Sentinel", specialty: "Guards the great Chilika Lake, fights from boats using long spears", loyalty: "hero" },
      { name: "Shoka-Chhaya", title: "The Grief Shadow", specialty: "Kalinga-Yama's avatar, appears as whoever the victim has lost and loved most", loyalty: "villain" },
      { name: "Rath-Yatri", title: "The Chariot Pilgrim", specialty: "A wandering warrior who pulls a miniature war-chariot containing weapons for every situation", loyalty: "neutral" }
    ],
    saga: {
      title: "The War Against Grief Itself",
      narrative: `In 261 BCE, Emperor Ashoka invaded Kalinga. One hundred thousand died. Ashoka, seeing the carnage, wept — and from his tears came Buddhism's spread across Asia, the edicts of non-violence carved in stone, and the greatest moral transformation in any ruler's history.

But what about the dead?

Kalinga-Yama rose from the battlefield two thousand years after the blood had seeped into the soil. He was not a ghost — ghosts are memories. He was something worse: he was the feeling of 100,000 deaths, concentrated into a single walking wound. He looked like a warrior but he was made of grief, and grief does not die. It just waits.

Jagannathi was the first to face him, and the first to understand the horror of his power. The Grief Blade did not cut — it touched, and the person touched felt every sorrow they had ever suppressed crash over them like a tidal wave. Three of her best warriors dropped their weapons and wept. Two never recovered.

But Jagannathi is a builder, not a fighter, and builders see problems differently. She understood that Kalinga-Yama was not an enemy to be defeated but a wound to be healed. The question was not "how do we kill grief?" but "how do we process grief so great that it took physical form?"

She built the Wheel of Remembrance — a massive stone wheel modeled on the Konark Sun Temple's chariot wheels, erected on the exact spot where the Battle of Kalinga was fought. Every family in Odisha carved a name onto the wheel — not just the ancient dead, but their own dead. Parents who lost children to floods. Children who lost parents to illness. The wheel became a repository of acknowledged grief, and acknowledged grief is grief that begins to heal.

Kalinga-Yama stood before the wheel and, for the first time, something other than grief crossed his face. Recognition. These people were not fighting him — they were seeing him. All he had ever wanted was for someone to understand the weight he carried.

He has not attacked since. But he has not disappeared either. He sits at the base of the wheel, listening to the names being carved, and the Indian Rollers circle above him — tumbling through the sky, falling and rising, as if showing him that descent is not defeat.

Jagannathi watches him carefully. Her twin daughters — born without the expected sambar deer tattoo — may be the key to either sealing Kalinga-Yama's power forever or releasing it. She has not decided which would be more merciful.

The wheel turns. It always turns.`
    }
  },

  {
    stateId: "bihar",
    stateName: "Bihar",
    kingdomName: "Vajra-Bhumi — The Thunderbolt Land",
    region: "east",
    motto: "From the mud of Bodh Gaya rose the light of the world. From our mud, we rise.",
    animal: {
      name: "Gaur",
      type: "animal",
      symbolism: "Unstoppable charge, raw power that does not understand retreat"
    },
    bird: {
      name: "Indian Roller",
      symbolism: "Shiva's tumbler — dives into chaos to emerge with wisdom"
    },
    hero: {
      name: "Vajramukha",
      title: "The Diamond Fist",
      epithet: "He Whose Rage Cracks Mountains and Whose Poems Heal Them",
      gender: "male",
      age: 37,
      weapon: "Iron gauntlets called Vajra (Thunderbolt) — strike with the force of a gaur's charge",
      tattoo: "Gaur in mid-charge across both forearms, nostrils flaring with golden fire — half-body mark",
      description: "Vajramukha is two men in one body. In battle, he is a berserker — the gaur's rage channels through his fists until he can punch through stone walls. In peace, he is a poet of extraordinary tenderness, writing verse in Magadhi Prakrit that makes grown warriors weep. His tragedy is that he cannot control the switch between the two.",
      battleCry: "VAJRA! (just the word, screamed until the ground shakes)"
    },
    villain: {
      name: "Ashoka-Chaya",
      title: "The Shadow of Ashoka",
      epithet: "He Who Wears the Emperor's Regret",
      gender: "male",
      age: 44,
      weapon: "A war-pillar — a seven-foot stone column carved like an Ashokan edict pillar, wielded as an impossible bludgeon",
      darkPower: "Can invoke Ashoka's pre-enlightenment wrath. Before Kalinga, Ashoka was called 'Ashoka the Fierce' — a conqueror of unmatched brutality. Ashoka-Chaya channels this forgotten version, gaining the tactical genius and merciless efficiency of pre-Buddhist Ashoka.",
      description: "A professor of ancient history at Nalanda University's modern successor who became obsessed with a question: what if Ashoka never repented? What if the greatest military mind in Indian history had never stopped conquering? He found pre-Kalinga Ashoka's war diary buried beneath the ruins of Pataliputra, and reading it activated something dormant in Bihar's bloodsoaked soil.",
      motivation: "Believes Bihar's decline from the seat of India's greatest empires to one of its poorest states is the direct result of pacifism. Ashoka chose peace and Bihar chose poverty. He wants to restore the Mauryan Empire — by force."
    },
    guru: {
      name: "Nalanda-Acharya",
      title: "The Last Librarian",
      description: "When Bakhtiyar Khilji burned Nalanda University in 1193, one monk escaped with a single palm-leaf manuscript. That manuscript has been copied and preserved for eight hundred years, and its current keeper — the Nalanda-Acharya — is a thin, quiet woman who claims the manuscript contains the solution to every problem Bihar will ever face. But it is written in a script that only the worthy can read.",
      wisdom: "Knowledge burned at Nalanda could have enlightened the world. Now we must learn it again, the hard way — through suffering."
    },
    warriors: [
      { name: "Magadh-Sena", title: "The Magadha Fist", specialty: "Bare-knuckle fighting style from ancient Magadha, emphasizing overwhelming force", loyalty: "hero" },
      { name: "Bodhi-Rakshak", title: "The Bodhi Tree Guard", specialty: "Guards the Bodhi Tree at Bodh Gaya, fights using the tree's falling leaves as razor-sharp projectiles", loyalty: "hero" },
      { name: "Chanakya-Mukh", title: "The Masked Strategist", specialty: "Ashoka-Chaya's tactician, claims to channel Chanakya's ruthless political genius", loyalty: "villain" },
      { name: "Sita-Vanavasi", title: "The Forest Exile", specialty: "A wandering warrior from Sita's legendary exile region, fights with a plough-blade", loyalty: "neutral" }
    ],
    saga: {
      title: "The Poet and the Conqueror",
      narrative: `Bihar is where empires are born and where they come to die. The Mauryas rose here. The Guptas shone here. Nalanda's light illuminated the world from here. And all of it crumbled into the Gangetic mud, leaving a land rich in history and poor in everything else.

Vajramukha carries this contradiction in his fists. When he punches, the gaur-rage channels 2,500 years of martial glory — the same soil that trained Chandragupta, that armed Ashoka, that conquered from Afghanistan to Bengal. When he writes poetry afterward, his verses carry 2,500 years of wisdom — the same soil where Buddha sat beneath a tree and said "enough."

He cannot reconcile these two selves. His wife Prabhavati bears the scar of this failure — a mark across her shoulder from the night his battle-rage did not switch off fast enough. He wears wrist bands now, tied over his gauntlets, each one inscribed with a line of poetry. When the rage begins to take him, the bands tighten and the words press into his skin, reminding him: you are more than the charge.

Ashoka-Chaya found the war diary under Kumhrar — the ruins of ancient Pataliputra. The diary was not written in ink but in the impressions of a stylus pressed hard enough to score stone. The words were Ashoka's battle plans for campaigns that history says he never fought — the invasions he would have launched had Kalinga not broken him. China. Southeast Asia. Arabia. The plans were brilliant, merciless, and complete.

The professor read them and something shifted in Bihar's soil. The ground at Kumhrar cracked. An Ashokan war-pillar that had lain buried for millennia rose six inches. And the professor felt the forgotten rage of an emperor who had been forced to become gentle when every fiber of his being screamed for conquest.

The first attack was on Nalanda's modern campus. Ashoka-Chaya marched with his stone pillar-weapon and fifty followers who had read the diary's pages. They moved like a Mauryan legion — disciplined, silent, devastating. Vajramukha met them at the library door and fought for six hours, his gauntlets cracking against the stone pillar until sparks flew like festival fireworks.

Neither won. But the library was saved — barely — and the Indian Rollers that nest in Nalanda's ruins were seen carrying fragments of palm-leaf manuscripts to safety, as if they remembered what happened the last time a library burned in Bihar.

The Nalanda-Acharya watches both men from her hidden archive and says nothing. Her manuscript, she claims, contains the answer — but the answer requires a reader who is both warrior and poet, both furious and gentle, both gaur and Buddha.

Vajramukha might be that reader. If he can stop punching long enough to read.`
    }
  },

  {
    stateId: "jharkhand",
    stateName: "Jharkhand",
    kingdomName: "Vana-Agni — The Forest Fire",
    region: "east",
    motto: "The forest gave us life. We give the forest our loyalty.",
    animal: {
      name: "Indian Elephant",
      type: "animal",
      symbolism: "Sacred memory, forest guardian, the gentle giant who destroys when provoked"
    },
    bird: {
      name: "Asian Koel",
      symbolism: "The voice that calls before dawn — heard by all, seen by none"
    },
    hero: {
      name: "Vanajara",
      title: "The Jungle Strider",
      epithet: "He Who Runs Where Elephants Walk",
      gender: "male",
      age: 22,
      weapon: "Tribal bow called Vanavriksha (Forest Tree) — shoots arrows made from each of Jharkhand's sacred tree species",
      tattoo: "Indian Elephant walking through forest on his left arm, trunk raised in greeting — leg mark",
      description: "The youngest of all 30 heroes, Vanajara has the wild energy of a forest fire and the instincts of a creature raised by the jungle itself. He fights with guerrilla tactics learned not from military manuals but from watching how animals defend their territory. He is impulsive, passionate, and absolutely incorruptible — because the forest has no use for compromise.",
      battleCry: "The forest does not forgive!"
    },
    villain: {
      name: "Khanij-Raja",
      title: "The Mineral King",
      epithet: "He Who Eats Mountains",
      gender: "male",
      age: 48,
      weapon: "A mechanical drill-arm — his left arm was replaced with a mining drill that can bore through rock, wood, and bone",
      darkPower: "Can sense minerals underground the way a predator senses prey. His mechanical arm draws strength from the earth's minerals, growing stronger as he stands on mineral-rich ground. In Jharkhand, one of India's most mineral-rich states, he is nearly invincible.",
      description: "Once a mining engineer who genuinely wanted to bring prosperity to Jharkhand through responsible extraction. But the minerals whispered to him — literally. The iron ore sang. The coal murmured. The bauxite hummed. They said: we are trapped, set us free. He listened too long, and now he cannot stop digging.",
      motivation: "Believes the minerals are alive and imprisoned in the earth, and that mining is an act of liberation. In his mind, he is a freedom fighter for the mineral world. That the forests are destroyed and the tribal people displaced is, to him, unfortunate but necessary — like the pain of surgery."
    },
    guru: {
      name: "Birsa Munda's Spirit",
      title: "The Earth God's Ghost",
      description: "The revolutionary spirit of Birsa Munda — the tribal leader who fought against British exploitation and became 'Dharti Aaba' (Earth Father). His spirit appears as a voice in the wind through the Sal forests, reminding the tribal people that they own no land but belong to all of it.",
      wisdom: "The earth is not a resource. The earth is an ancestor. You do not mine your grandmother."
    },
    warriors: [
      { name: "Sal-Vriksha", title: "The Forest Sentinel", specialty: "Fights using the Sal trees as weapons — can make branches swing, roots trip, leaves blind", loyalty: "hero" },
      { name: "Hathi-Rakshak", title: "The Elephant Protector", specialty: "Commands a herd of wild elephants in battle, communicating through subsonic vibrations", loyalty: "hero" },
      { name: "Dhatu-Doot", title: "The Metal Messenger", specialty: "Khanij-Raja's lieutenant, can magnetize weapons and pull them from enemies' hands", loyalty: "villain" },
      { name: "Koel-Swar", title: "The Koel's Voice", specialty: "A scout who communicates through bird calls so perfect that even birds respond", loyalty: "hero" }
    ],
    saga: {
      title: "The War Beneath the Roots",
      narrative: `Jharkhand means "Land of Forests." Not "Land of Mines." Not "Land of Resources." Land of Forests. Vanajara was born in a village where the forest canopy was so thick that children grew up not knowing the sky was blue — they thought it was green, the color of leaves.

He was twelve when the machines came. Not the small machines that scratch the surface — the big ones, with teeth of steel and stomachs that swallowed mountains. They came with papers that said the land belonged to someone who had never stood on it, and they told the villagers to move.

Vanajara's father did not move. He stood in front of the first machine, arms crossed, bow on his back. The machine did not stop. The operator later said he did not see a person — he saw a tree, and trees are meant to be removed.

Vanajara hunted that operator. Then the supervisor. Then the district head. By the time he was sixteen, the mining companies had put a bounty on a boy they called "The Forest Ghost." By twenty, he had united three tribal clans into a guerrilla force that made the Western Ghats operations look tame.

Khanij-Raja came to end him — and discovered something unexpected. The boy fought like the forest itself: not with strategy but with ecosystem logic. Attack one point, and the entire forest responds. Cut a root, and the canopy shifts. Chase him into a clearing, and find yourself surrounded by elephants that materialized from the trees like grey ghosts.

The Battle of the Deep Mine was fought underground — in a mine so deep that the temperature exceeded 50 degrees and the darkness was absolute. Vanajara navigated by the sound of his own footsteps echoing off the mine walls, the way a koel navigates by song. Khanij-Raja navigated by the singing of minerals, his drill-arm spinning, carving through stone as easily as Vanajara's arrows carved through air.

They fought in the deepest chamber, where iron ore glowed red in its natural veins and the earth's heartbeat was audible — a low, rhythmic thud that shook dust from the ceiling. Vanajara's arrow struck the drill-arm and it shattered — not because the arrow was strong, but because the iron in the arrowhead recognized the iron in the drill and chose to rejoin its natural form.

Khanij-Raja fled to the surface, weeping for his lost arm and the minerals he could no longer hear singing. But he is rebuilding — this time with a titanium arm, using metal mined from a different, darker place.

Birsa Munda's voice echoes through the Sal forests: "The boy fights well, but fighting is not enough. He must learn to heal what has been broken." The Asian koel sings before dawn, and Vanajara listens, planning his next strike from the canopy.

He is twenty-two. The oldest hero in the Hulmane-The-Saga started at nineteen. Vanajara has time.

The forest has time. The forest always has time.`
    }
  },

  {
    stateId: "andaman",
    stateName: "Andaman & Nicobar",
    kingdomName: "Sagara-Ratna — The Ocean's Jewels",
    region: "east",
    motto: "The sea remembers who came uninvited",
    animal: {
      name: "Saltwater Crocodile (Crocodylus porosus)",
      type: "animal",
      symbolism: "Tidal patience — ambush from below — the oldest predator of the islands — the witness that watches mainland ships arrive and never leave"
    },
    bird: {
      name: "Nicobar Pigeon (Caloenas nicobarica)",
      symbolism: "Iridescent green, the rarest pigeon in Bharatavarsha — only nests on uninhabited islets — its presence is the kingdom's proof of unspoilt shore"
    },
    hero: {
      name: "Onge-Nakshatra",
      title: "The Navigator of the Salt-Stars",
      epithet: "He Who Reads Both Sky and Tide",
      gender: "male",
      age: 34,
      weapon: "Sagara-Bandhu — a coral-stone anchor swung as a flail on a salt-cured kelp-fiber line; the salt eats locks; the swung anchor pulls water into a small typhoon-circle",
      tattoo: "A saltwater crocodile rising from the surf — tail wrapping his upper arm — body spread across his back — grows in stages with each navigated storm and each island reached",
      description: "Born on a mat of pandanus leaves in the spray of an outrigger canoe between Little Andaman and Car Nicobar, mid-storm, while his mother sang the constellation Mrigashira. Half-Onge by father, half-Bloodline-E by mother (a distant heir of the Sagaravamsha who shipwrecked here as a girl and stayed) — Onge-Nakshatra is the islands' first inter-tribal child. His pride is the islands' pride: that the Andamans were here before the mainland thought to map them, and they will be here after the mainland forgets. His curse is the same: that pride lets the villain in.",
      battleCry: "The sea remembers who came uninvited."
    },
    villain: {
      name: "Kalapani-Asura",
      title: "The Warden of Forgotten Cells",
      epithet: "He Who Was Sentenced and Now Sentences",
      gender: "male",
      age: 0,
      weapon: "Sapta-Shala — a seven-spoked iron wheel modeled on the Cellular Jail's seven-wing radial design; wielded as a circular saw-shield that severs ropes, comm cables, and supply-lines; each spoke locks shut a different kind of exit",
      darkPower: "He locks any space. Doors, ports, ship hulls, even open water. Wherever he places his hand, isolation hardens — communication signals die, supplies cannot enter, ships cannot leave. He turns geography itself into a prison.",
      description: "Not a single man. He is the accumulated memory-pain of every prisoner who died in the Cellular Jail of Port Blair between 1906 and 1947 — Indian freedom fighters, Burmese rebels, ordinary thieves, men whose names no one wrote down. The pain became conscious when independence emptied the jail. The pain stayed in the walls. It walks now wearing the body of Robert Whitley — the last British warden, who hanged himself in his office in March 1948 because he could not return to a country that did not want a man who had run the Kala Pani. The pain wears Whitley like a coat.",
      motivation: "He believes the islands were meant for isolation. The British designed the Andamans to be the place where troublesome bodies disappeared — and that purpose, in his view, is the islands' true vocation. The mainland is the disease that keeps trying to integrate them. Each island should be its own prison-paradise — sealed, sufficient, severed. He is offering the tribes the gift his pain was given: complete separation from a world that wants them to change."
    },
    guru: {
      name: "Aki-of-the-First-Canoe",
      title: "She Who Carves and Says Nothing",
      description: "An 87-year-old Onge grandmother who walks with two driftwood sticks and refuses to use any technology newer than fire. Fifty-three years ago she carved the first canoe of Onge-Nakshatra's line from a single mahua trunk — the canoe is now preserved in a sea-cave on Little Andaman, still seaworthy. She teaches by silence, by carving, by handing the chisel without comment. She has not slept indoors since 1971. Her grandson did not learn to navigate from a star-chart — he learned by watching her squint at the night sky and tap once for yes, twice for no.",
      wisdom: "The horizon is not a line. It is a question the sea asks every morning. Most people answer with their feet on shore. The answer the sea wants is your bow turned toward it."
    },
    warriors: [
      { name: "Hutto-Mara", title: "The Bow That Counts Once", specialty: "A Jarawa-line woman who tracks crocodiles from shore — bow-fishing accuracy that is legendary; one shot, one fish, no second arrow ever drawn — her presence on a beach means no danger comes from the water unannounced", loyalty: "hero" },
      { name: "Sentinel-Brother", title: "The Drum from the Forbidden Shore", specialty: "A North Sentinelese envoy who appears once a generation when the islands face existential crisis; refuses all speech and outside contact; communicates by drumming on a hollowed log; his rhythms are recognised by every other tribe even though no one alive has been taught them", loyalty: "hero" },
      { name: "Nicobari-Khol", title: "The Coconut-Trade Sailor", specialty: "A young Nicobari merchant whose family runs the seasonal coconut and coir trade between Car Nicobar and Port Blair — the kingdom's living bridge between tribal tradition and merchant pragmatism; speaks six island languages and three mainland ones", loyalty: "hero" },
      { name: "Penal-Babu", title: "The Heritage Tour Operator", specialty: "A descendant of a colonial-era jailer who now runs the Cellular Jail tourist circuit by day — and secretly maps the islands for foreign powers by night; his maps locate every uncontacted village and every unspoiled reef", loyalty: "villain" },
      { name: "Kala-Naukar", title: "The Deserter Lieutenant", specialty: "A former Indian Navy officer who deserted his post in 2003 after refusing to evacuate a tribal village before a naval exercise; he serves Kalapani-Asura now for the satisfaction of locking the ports his old service used to control", loyalty: "villain" }
    ],
    storyImages: {
      basePath: "../../../../../media/states/east/andaman/stories/sagara-ratna/images/",
      hero: [
        { file: "hero-onge-nakshatra-portrait.png", label: "Onge-Nakshatra — The Navigator of the Salt-Stars", caption: "Onge-Nakshatra at dawn on Havelock — fresh chest-paint of the Mrigashira constellation, Sagara-Bandhu coiled at his hip, the saltwater crocodile breaking the surf behind him." },
        { file: "hero-onge-canoe.png", label: "The First Canoe", caption: "Onge-Nakshatra in his grandmother's mahua-trunk canoe — outriggers extended, pandanus sail trimmed for a westerly. He has never been past the Indira Point lighthouse. The horizon waits." }
      ],
      villain: [
        { file: "villain-kalapani-asura-portrait.png", label: "Kalapani-Asura — The Warden of Forgotten Cells", caption: "Kalapani-Asura wearing the body of Warden Whitley — colonial khaki, brass meter at his belt, the seven-spoked Sapta-Shala turning slowly in his right hand. Behind him, the Cellular Jail's central tower at moonrise." },
        { file: "villain-cellular-jail.png", label: "The Walls That Remember", caption: "The interior of the Cellular Jail's third wing — empty cells, peeling whitewash, a single bulb. The pain of seventy years of prisoners has nowhere to go. It is gathering." }
      ],
      animal: [
        { file: "animal-saltwater-crocodile.png", label: "Saltwater Crocodile — Sacred Animal of Sagara-Ratna", caption: "A full-grown saltwater crocodile in the mangroves of Baratang — five meters long, motionless, the oldest predator of these islands. Onge-Nakshatra reads ships through the water-pressure changes only this animal can feel." }
      ],
      guru: [
        { file: "guru-aki-first-canoe.png", label: "Aki — She Who Carves and Says Nothing", caption: "Aki at age 87 in the sea-cave where her first canoe is kept. She is carving a smaller canoe — a grandchild's. She has not spoken in four months. Onge-Nakshatra brings her water; she taps once." }
      ],
      story: [
        { file: "story-cellular-jail-awakening.png", label: "The Awakening", caption: "The night Kalapani-Asura walks out of the Cellular Jail for the first time — tourists locked inside, the seven-spoked corridor turning of its own will, the museum signs flickering between Hindi and 1906 English." },
        { file: "story-festival-of-canoes.png", label: "The Festival of the First Canoe", caption: "Forty-seven canoes from every island gather at Havelock — Onge, Jarawa, Great Andamanese, Nicobari, Shompen, and mainland-Bengali fishermen who came as guests. Tribes that have not spoken in a century paddle within sight of each other." },
        { file: "story-final-unlocking.png", label: "The Final Unlocking", caption: "Onge-Nakshatra inside the Cellular Jail's central tower at dawn — Sagara-Bandhu raised, the salt-rope hissing as it bites into the seven-spoked Sapta-Shala — every cell door opening at once — the ghosts of seventy years walking out into the sea." }
      ],
      cast: [
        { file: "cast-hutto-mara.png", label: "Hutto-Mara", caption: "Hutto-Mara on a beach at first light — bow loose at her side, a single arrow in her left hand. The shorebirds do not flee her presence. The crocodiles do." },
        { file: "cast-sentinel-brother.png", label: "Sentinel-Brother", caption: "Sentinel-Brother on a high rock above North Sentinel — silhouette only, his drum on his hip, his face never shown. He has appeared three times in living memory. This is the third." },
        { file: "cast-nicobari-khol.png", label: "Nicobari-Khol", caption: "Nicobari-Khol on the deck of his family's trade-dinghy, sea-roughened hands, six trade-languages tattooed in his memory. He is the kingdom's translator-in-chief." }
      ]
    },
    saga: {
      title: "The Unlocking — A Film in Two Halves",
      narrative: `═══ FIRST HALF ═══

OPENING — THE CHILD BORN MID-STORM

A double-outrigger canoe between Little Andaman and Car Nicobar. October monsoon. Black water under black sky. A woman labours in the bottom of the boat, gripping the mast for the pain. Her husband — an Onge tribesman — holds her shoulders. The mid-wife is the woman's own mother, the one she carved canoes with. Her name is Aki.

The woman is a Bloodline-E descendant of the Sagaravamsha — shipwrecked here at eleven, kept by the tribe that found her, married into them at twenty-three. She is forty now and giving birth in a storm she helped sail through.

She names the child as he comes: Onge-Nakshatra. The Onge people, and a star.

The lightning shows them his face. Aki looks at the lightning. She looks at the child. She looks up at the constellation Mrigashira, just visible between cloud-breaks.

"He sees in two directions," she says. "He will need both."

Twenty-six years later, Onge-Nakshatra has the chest-paint of Mrigashira reapplied each dawn. He has sailed every channel between every island in the Andaman and Nicobar archipelago. He speaks four tribal languages, two mainland ones, and reads Bloodline-E sea-charts that his mother taught him from memory because her own copies sank with the ship that brought her.

He has never sailed past Indira Point. The horizon south of that is Volume II, and the islands have not let him go yet.

THE ISLANDS BEFORE THE WAKING

The Andamans and Nicobars are not one kingdom. They are forty-seven inhabited islands and another five hundred uninhabited ones. They are six recognized tribes and one tribe (the North Sentinelese) that has refused contact for sixty thousand years. They are coconut-trade routes between cousins, drum-codes carried on monsoon wind, and the silent watching of a saltwater crocodile in every cove.

They are also a wound. Every empire that ever ruled the mainland sent the worst of its problems here. The British perfected the cruelty — they built the Cellular Jail in Port Blair in 1906, a seven-spoked radial prison designed so that no prisoner could see another prisoner ever. It held men until 1947. Some of those men were freedom fighters. Some were thieves. Some had been arrested for crimes that were not crimes in their own villages. None of their pain went anywhere when the jail emptied.

Onge-Nakshatra has been to the jail. Every island child is taken there once. The walls are cold even in summer. There is a smell that does not match a museum.

THE AWAKENING

A tour group at the Cellular Jail museum, October. Twenty-seven people, mostly mainland tourists, a guide with a clipboard. They are in the central watchtower at sunset, the time the guides do not usually allow because the lighting is bad. But this group is special — a foreign documentary team — and the museum has made an exception.

At sunset, the doors to the central tower close. All seven spoke-doors of all three remaining wings close at once. The guide tries the handle. It does not move. The tourists laugh, nervously. The guide laughs less.

The lights flicker. They flicker between modern electric bulb and 1906 oil lamp. The painted museum signs — bilingual, modern — show, for one breath, the original 1906 British placards. The smell that does not match a museum becomes the smell that matches a jail.

A man walks down the central spiral staircase. He wears colonial khaki. A brass meter swings at his belt. In his right hand is a wheel made of seven iron spokes that turns slowly, of its own accord. His face is too thin to be his own.

"Welcome to Kala Pani," he says. "You are not the first to ask if you may leave."

The doors do not open until dawn. By then, three tourists have suffered cardiac events. Two are dead. The foreign documentary team has uploaded twenty seconds of footage before their cameras failed; that footage is what tells the islands that something has come back.

ONGE-NAKSHATRA'S RESPONSE

He calls a council. The tribal elders refuse to come to Port Blair — too far, too mainland, too compromised. He travels to each island separately by his outrigger. Each elder says yes to a meeting, then suggests it should be on their own island, on their terms, with their own ceremonies.

The Jarawa want a meeting on South Andaman near their reserve boundary. The Great Andamanese want it at Strait Island. The Nicobari want it at Car Nicobar. The Shompen want it at Great Nicobar interior. The Onge — his own people — say Onge-Nakshatra should host, but only on Little Andaman, and not with non-Onge present.

Each tribe is correct on their own terms. The terms do not overlap.

Aki, his grandmother, watches him plan four separate council meetings on four separate islands across two months and says nothing. She does carve, sometimes, while he speaks. Once she carves a single broken paddle and sets it on the sand beside his foot. He does not understand the message.

THE FIRST CONFRONTATION — THE CELLULAR JAIL ALONE

Three weeks after the awakening. The jail-museum has been closed by the government. The military have set a cordon. Communications around Port Blair are unreliable in a way no one can explain. Ships in the harbour cannot leave at night. The harbour-master has gone missing. His office is locked from the inside.

Onge-Nakshatra cannot wait for the tribal councils to align. He goes alone.

He paddles into Port Blair harbour past midnight. The saltwater crocodile of his bond — a six-meter male who lives in the South Bay mangroves — follows him at depth. The Nicobar Pigeon flies over the harbour once and then turns back. The bird will not land.

He enters the jail through a sea-passage in the cliff below the central tower — a tunnel only the crocodile-bond reveals, used by the British to dump bodies into the bay without records. The tunnel is wet. The salt has eaten the iron bars over a century.

Kalapani-Asura is waiting in the central tower. The seven spoke-corridors radiate from his feet. The Sapta-Shala turns in his right hand.

"You came as a tribesman," the asura says. "You came as an outrigger sailor. You came as one man speaking for many. Do you know what this jail was built for?"

"To break the men who could organize the islands."

"To break the men who tried to speak for many. The jail learned the lesson before the mainland did. One man speaking for many is the form that always loses. So." A gesture. The nearest spoke-corridor seals itself. "Stay. Be one man speaking for one. The cell is honest. The cell will hold you for as long as your pride does."

Onge-Nakshatra swings the Sagara-Bandhu. The anchor strikes the iron of the cell door. The salt-rope hisses. The lock gives. He runs into the next corridor. That corridor seals. He runs the next. Sealed. He runs all seven. The Sapta-Shala turns. Every corridor he runs into seals behind him as he passes.

He fights for an hour. He hits walls and they hold. He hits doors and they hold. He hits the asura and the asura is not entirely there — the iron wheel deflects him, the body wears Whitley but the pain is older. He is being herded toward the central cell.

He reaches the sea-passage by luck — the crocodile of his bond is at the water-line below, exhaling. Onge-Nakshatra hears the exhale. He drops through a grate. He is in the sea before he knows he chose to fall.

The Sapta-Shala turns behind him. The asura does not follow into salt water. The asura will not enter open sea.

═══ INTERVAL ═══

He returns to Little Andaman before dawn. His arm is broken at the wrist. His chest-paint is scrubbed off by the swim. He has not slept in thirty-one hours.

A Nicobar Pigeon lands on the sand beside the canoe. He does not see it for the first minute, but it does not fly off. When he looks up, it tilts its head.

Aki is at the cave mouth. She has carved a new piece — a paddle that is whole this time. She hands it to him without comment.

He sits on the sand. He looks at the paddle. He looks at the canoe. He looks at the Pigeon.

He says, "I went alone."

She does not nod or speak. She taps the carving once with her thumb.

He understands.

"You came back. The horizon asked. I gave it a name and a council that could not meet. I did not give it bows turned toward it."

Tap tap. Two taps. No.

He looks at her. She has never said no to him in three years.

She taps the paddle. Then the canoe. Then her own chest. Then the open sea.

He says, slowly: "The bow turned toward the horizon. Not the horizon as enemy. The horizon as question. I have been answering the wrong question."

She nods. Once. The Pigeon takes off.

The question was never how to organize the tribes against the mainland-ghost. The question was how to organize the islands so the ghost loses its ground. Isolation is not strength. It is the disease the asura offers as cure.

═══ SECOND HALF ═══

THE FESTIVAL OF THE FIRST CANOE

He does not call another council. He calls a festival.

Word goes out through Nicobari-Khol's trade routes — the coconut and coir circuits that touch every inhabited island. The Festival of the First Canoe. An invitation, not a summons. Each tribe is asked to send three canoes — no more, no fewer — to Havelock on the first full moon of December. They are to bring food, drum, song, and one elder. They are not to bring weapons. They are also not to leave their weapons at home — they are to leave them at a single agreed sea-cave on the way, where they will be returned at the festival's end.

It is a strange request. Most tribes laugh. Several refuse outright.

Nicobari-Khol delivers the invitations in person. He takes weeks. He speaks six languages. He drinks bad tea with elders who do not trust each other. He says: Onge-Nakshatra is calling the festival because the Jail awoke. He says: the Jail is what happens when no island talks to its neighbour for a hundred years. He says: come not for him, come for the canoe.

By December full moon, forty-seven canoes have come to Havelock. From every tribe. From the Onge, Jarawa, Great Andamanese, Nicobari, Shompen — and from mainland-Bengali fishermen who were invited as guests because the Bay of Bengal is also part of the kingdom's edge. The Sentinelese do not come; the Sentinelese never come.

But: at the highest point of the eastern cliff of Havelock, a silhouette appears at dawn on day one. A man with a hollowed log on his hip. He drums a rhythm. The Onge elders look up and weep. The Sentinelese have sent a Brother. They have not sent one in eighty-one years. The drum is a permission.

THE FESTIVAL ITSELF

For three days, the islands do what they have not done in a century. Tribes share food across mats. Translators sit cross-legged between elders. The Nicobari serve coconut-crab roast to Onge elders who have never eaten with non-Onge before. A Jarawa woman teaches a Bengali fisherman the bow-grip that lets you shoot fish underwater. A Shompen man explains his people's nine words for different sea-floor textures.

A mainland-Bengali fisherman, on the second night, stands up and asks to speak. He is granted the speaking shell. He says, in slow Bengali that Nicobari-Khol translates: "We — the mainland — apologized too late. We are still apologizing too late. I do not have the authority to apologize for India. I have the authority to apologize for my grandfather who fished these waters and threw your nets into the sea so we could keep the fish. I apologize."

A Jarawa elder takes the shell. He says — Nicobari-Khol translates — "We accept that you do not have authority. We accept the apology you have. The apology is a paddle. We can hold a paddle."

The Sentinel-Brother drums.

KALAPANI-ASURA'S COUNTER-MOVE

He cannot let the festival hold. On the third night of the festival, he activates the Mauna-Tantra — the colonial-era brass meter that jams all radio signals within twenty kilometers and overlays the silence with recorded prisoner-screams from the jail's worst nights.

Some canoes returning to outer islands lose their bearing. One Shompen canoe with three men aboard does not arrive home. They are found two weeks later — alive, badly dehydrated, on an uninhabited islet, having survived by chewing pandanus root. Two more canoes are damaged on reefs that should have been radioed. The cost is real.

The festival debates whether to end early. Some elders argue: the asura cannot be defeated by canoes. We have made our peace. Now we go home.

Onge-Nakshatra speaks. He says: if we go home, every island is alone again, and the asura wins by absence. We do not go home. We sail to the Cellular Jail. Together. With all forty-seven canoes. The asura's wheel locks one space at a time. It cannot lock forty-seven canoes' worth of harbour at once.

The Sentinel-Brother drums a rhythm. Aki, who has not left Little Andaman in nine years, is helped into a canoe by her great-niece. She comes too.

THE FINAL CONFRONTATION — THE UNLOCKING

Dawn on the fourth day. Forty-seven canoes enter Port Blair harbour in a single broad arc. The saltwater crocodile of Onge-Nakshatra's bond leads them at the surface. The Nicobar Pigeon flies above the centre canoe. Above the eastern cliff of the harbour, the Sentinel-Brother drums a pattern that no living person can identify but every tribal elder recognises by feel.

Kalapani-Asura is in the central tower of the Cellular Jail. He raises the Sapta-Shala. He locks the harbour gate — the entire entrance. Every canoe will be trapped inside the harbour. He locks the breakwater. He locks the lighthouse beam. He turns the Mauna-Tantra to maximum.

The canoes drift. The radios die. The screams of prisoners begin to overlay the air.

Onge-Nakshatra is in the lead canoe with Hutto-Mara, Nicobari-Khol, and Aki. He says to Aki: "What now?"

She points at the Cellular Jail with her chisel.

He understands. The asura is locking the harbour. The harbour can be locked. The harbour is one space. The jail is also one space. The asura cannot lock the jail and the harbour at the same time — his wheel has seven spokes, but his attention is one.

Onge-Nakshatra slips into the water. The crocodile takes him on its back below the surface. They swim the sea-passage he used before. The crocodile dives under the cliff. Onge-Nakshatra holds his breath for ninety seconds — the bond-discipline of his line. He surfaces inside the tunnel under the central tower. He climbs.

He emerges in the central tower behind Kalapani-Asura. The asura does not turn. He is concentrating on the harbour-lock.

Onge-Nakshatra raises the Sagara-Bandhu. He says, conversationally:

"You said the jail learned the lesson before the mainland. One man speaking for many always loses. That is true. So I am not speaking for many. They speak for themselves."

He swings the anchor in a horizontal arc — the water-pulling arc, the typhoon-circle. The salt-rope catches the Sapta-Shala. The salt eats the seven-spoke wheel's central axle. The wheel falls apart in the asura's hand.

Every cell door in every wing opens at once.

Kalapani-Asura turns. His face — Whitley's face — opens in shock. "You released them."

"I released what you held. They were not yours to keep."

The ghosts walk out of the cells. Not all at once — they are slow. They are men in 1906 clothes, men in 1942 clothes, men whose bodies have not been seen in a century. They walk down the seven spoke-corridors. They walk out of the central tower. They walk through the breakwater, which the asura has stopped locking because he is too distracted. They walk into the harbour. They walk into the sea.

Varuna receives them. The saltwater crocodile, watching from the surface, parts the water for each one. Each ghost goes under and does not come up.

The pain that held the body of Robert Whitley begins to drain. It drains slowly. There is a lot of pain. But each ghost that walks out is a measure of pain released. By the time the last ghost — a Burmese man named Maung Aye, sentenced in 1924 for organizing a school — walks past Kalapani-Asura, the asura is shrinking. Whitley's khaki hangs loose on him. The brass meter falls from his belt and shatters.

He looks at Onge-Nakshatra. He is, now, just Robert Whitley — the actual ghost of the actual last warden, very small, very old.

"I did not want this assignment," Whitley says, in 1948 English. "I was sent. I was twenty-four."

"I know."

"I did not know how to leave."

"None of us do. The horizon asks every morning. The answer is to point the bow."

Onge-Nakshatra says Whitley's name aloud — Robert Andrew Whitley, born Yorkshire 1923, posted Port Blair 1946, hanged March 1948, never named in any official Indian record. He says the name three times. Whitley weeps. He fades into the morning air the way the others faded into the sea.

THE NICOBAR PIGEON LANDS

The festival canoes have come into the harbour. Forty-seven canoes plus the rescue boats, plus the harbour-master who has been found unharmed in a locked supply room. The tribes are on the docks. Aki is helped onto the stone steps of the Cellular Jail by her great-niece.

A Nicobar Pigeon descends on the central tower's broken weathervane. It tilts its head. It stays.

Onge-Nakshatra's tattoo finishes its first stage — the crocodile rises from his lower back to his upper arm, the head turned toward the harbour, the tail wrapped around his shoulder. The chest-paint of Mrigashira flares for a moment in dawn light.

The Sentinel-Brother drums one final pattern — the closing rhythm of a long journey. He turns and disappears into the inland forest of North Sentinel. He will not be seen again for a generation.

Aki carves something while the elders speak. A small canoe. Six inches long. She hands it to her grandson. He sets it carefully on the harbour water. The little canoe finds a current. It points its bow at the south horizon.

Past Indira Point. Past the lighthouse. Toward Yavana-Khanda.

The sea does ask a question every morning. The bow is the answer. The kingdom of Sagara-Ratna has, for the first time in its memory, more than one bow pointing in the same direction.

The sea remembers who came uninvited. It also remembers who came to free them.`
    },
    inspiration: {
      heroGod: { name: "Varuna", domain: "God of the cosmic ocean, the binder of order, the keeper of rta (truth-as-rhythm) — wielder of the noose that binds liars and oath-breakers", parallel: "Where Varuna binds with his noose, Onge-Nakshatra unbinds with his salt-rope — same instrument, opposite use. Both are ocean-gods of order. But Varuna's order is the cosmic law that holds the universe; Onge-Nakshatra's order is the lower law that says no human being is a thing to be locked in a cell. He is Varuna's lesser cousin — the god of harbours that open." },
      heroMahabharata: { name: "Nakula", parallel: "The most overlooked of the five Pandavas — the navigator twin, master of horses and tactics, called the most beautiful of the brothers. He is the youngest and the most often silent. Onge-Nakshatra's silence-then-organisation arc is Nakula's. The Mahabharata never gave Nakula a great speech; this saga gives him one. The inversion: Nakula was bound by the dharma of brothers and could only act through Yudhishthira. Onge-Nakshatra acts when his elders cannot agree, and the elders follow rather than command." },
      villainDemon: { name: "Vrtra", domain: "The serpent-demon who blocked the cosmic rivers — Indra slew him with the vajra so the waters could flow", parallel: "Kalapani-Asura is a Vrtra of jails rather than rivers — the demon whose nature is to block flow. Where Vrtra blocked rivers, Kalapani-Asura blocks ports, signals, supplies. Vrtra was defeated when Indra struck him at the joint where his coils met. Kalapani-Asura is defeated at the joint where his wheel meets its axle — same structural weakness, same wound." },
      villainMahabharata: { name: "Karna", parallel: "The warrior cursed by his own past, fighting for the wrong side because the world would not let him belong to the right one. Kalapani-Asura is Whitley wearing the pain of his prisoners — a man cast out by every system that could have claimed him, who joined the only institution that recognized him. Like Karna, his loyalty is technically misplaced and emotionally inevitable. Like Karna, he must be addressed by his true name to be released — Onge-Nakshatra speaks Whitley's full name as the final act, and the binding breaks." }
    },
    modernArsenal: {
      hero: "Sagara-Bandhu coral-stone anchor-flail with salt-cured kelp line, Lavana-Jaala biopolymer underwater drone-net, hydrofoil skiff with no metal hull (composites only) to slip past colonial-radar legacy systems, multilingual trade-network through Nicobari-Khol's family routes, saltwater-crocodile tide-sense, Nicobar Pigeon shoreline-scout network",
      villain: "Sapta-Shala seven-spoked iron wheel (Cellular Jail radial geometry weaponised), Mauna-Tantra signal-jamming brass meter that overlays prisoner-scream audio, locked-port enforcement via paid harbour officials, colonial-archive intelligence (he has every prisoner record), heritage-tourism front company for mapping foreign-power asset locations"
    },
    geopolitics: "The Andaman & Nicobar Command is one of India's three integrated military commands and the only one outside the mainland — making the islands the country's eastern strategic linchpin. Chinese maritime activity in the Bay of Bengal, Burmese refugee flows, Indonesian sea-lanes, and Bangladeshi fishing-fleet incursions all intersect here. The Sagara-Ratna kingdom is officially a Union Territory but operates with deep tribal-autonomy zones (Onge, Jarawa, Sentinelese) that no mainland government has been able to integrate. The Cellular Jail is a national heritage monument; foreign powers periodically attempt to use 'heritage tourism' as cover for intelligence operations. This is Bharatavarsha's bridge to the next continent and the launching point for Volume II's Yavana-Khanda arc."
  },

  // ═══════════════════════════════════════════════════════════
  // UTTARAPATHA — THE NORTHERN KINGDOMS
  // ═══════════════════════════════════════════════════════════

  {
    stateId: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    kingdomName: "Ganga-Simhasana — The Throne on the Ganga",
    region: "north",
    motto: "Where the river flows, the law flows. Where the river judges, none appeal.",
    animal: {
      name: "Barasingha",
      type: "animal",
      symbolism: "Twelve-pointed crown, the natural king, regal grace in the marsh"
    },
    bird: {
      name: "Sarus Crane",
      symbolism: "Eternal fidelity — they mate for life, and when one dies, the other follows. Loyalty unto death."
    },
    hero: {
      name: "Gangaputra",
      title: "The Ganga's Son",
      epithet: "He Who Was Promised to the River",
      gender: "male",
      age: 33,
      weapon: "A twelve-pointed spear called Dwadash-Mukut (Twelve Crowns) — each point consecrated at a different sacred spot along the Ganga",
      tattoo: "Barasingha standing in the Ganga, antlers reflecting twelve stars — half-body mark",
      description: "Political, calculating, and burdened by a messiah complex that he did not choose. Gangaputra was born during a Ganga flood, and the midwife swore the river rose to touch his forehead before receding. Whether miracle or coincidence, the story spread, and he was raised as the chosen one of the most populated state in India. His every decision carries the weight of 200 million people's expectations.",
      battleCry: "The Ganga flows through me!"
    },
    villain: {
      name: "Kansa-Putra",
      title: "The Shadow of Mathura",
      epithet: "He Who Rules from the Dungeon's Memory",
      gender: "male",
      age: 50,
      weapon: "A chain made from prison-iron — the same metal that once bound prisoners in Mathura's dungeon. Each link contains a captured soul.",
      darkPower: "Can imprison anyone's will within his chain. Not their body — their will. A warrior trapped by his chain can still move, still speak, but cannot disobey. They become puppets with open eyes, aware of their slavery but unable to resist.",
      description: "Claims to descend from the bloodline of Kansa — Krishna's uncle and the tyrant of Mathura. Where Gangaputra was given his messianic role by others, Kansa-Putra chose his villainous role deliberately. He believes that the prophecy-system that governs the tattoo warriors is a form of tyranny — and that the best way to fight a tyranny of heroes is to become the villain that prophecy requires.",
      motivation: "Paradoxically principled: he believes the hero-villain dynamic is a trap that keeps the masses passive, waiting for saviors instead of saving themselves. By being the most terrifying villain possible, he hopes to prove that the system of prophecy and chosen ones is broken."
    },
    guru: {
      name: "Goswami Tulsidas's Verse",
      title: "The Living Poetry of Ayodhya",
      description: "The verses of Ramcharitmanas do not simply exist in books in UP — they live in the air. Certain verses, when spoken at specific ghats along the Ganga, take physical form — glowing Sanskrit script that hangs in the air and provides guidance, warning, or blessing. Tulsidas's poetry is literally the protective shield of the kingdom.",
      wisdom: "Ram's kingdom was just not because Ram was perfect, but because Ram held himself to the same laws he imposed on others."
    },
    warriors: [
      { name: "Ganga-Dixit", title: "The River Priest-Warrior", specialty: "Fights using Ganga water as a weapon — blessed water that burns the corrupt", loyalty: "hero" },
      { name: "Lucknow-Nazakat", title: "The Polite Blade", specialty: "Fights with Lucknowi courtesy — bows before each strike, apologizes after each wound", loyalty: "hero" },
      { name: "Kara-Bandhan", title: "The Chain Bearer", specialty: "Kansa-Putra's enforcer, wraps enemies in will-binding chains", loyalty: "villain" },
      { name: "Sarus-Devi", title: "The Crane Watcher", specialty: "Reads the flight of Sarus cranes to predict the future — the cranes have never been wrong", loyalty: "neutral" }
    ],
    saga: {
      title: "The Son the River Claimed",
      narrative: `Uttar Pradesh is not a state — it is a civilization disguised as a state. Ayodhya, Mathura, Varanasi, Prayagraj — each city holds enough mythology to power an entire kingdom. And the Ganga flows through it all, carrying prayers and ashes and promises, never stopping, never clean, never impure.

Gangaputra was born in the flood of the century. His mother labored in a house surrounded by rising water, and the midwife — an old woman who had delivered three hundred children and feared nothing — swore that the Ganga itself reached through the window and touched the baby's forehead. A Sarus crane landed on the roof and called once — a sound that is said to herald kings.

He grew up with the weight of a prophecy he never asked for. Every Brahmin who saw him bowed. Every warrior who met him saluted. Every politician who encountered him either wanted to use him or destroy him. His parents fought over his soul: his mother saw a future emperor, his father saw a future monk. He became neither — he became a weapon that questions why it was forged.

Kansa-Putra emerged from beneath Mathura. Literally. During the excavation of a Kansa-era dungeon, workers found a chamber that should not have existed — a room below the lowest level, sealed with iron chains. Inside was a throne made of the same chain-iron, and on the throne was a manuscript written in prison-script: the thoughts of every prisoner who had ever been chained in Mathura's dungeons, compressed into a single text of rage, despair, and a terrible clarity about the nature of power.

The man who read it walked in as a professor of political science. He walked out as Kansa-Putra.

His first act was philosophical, not violent. He walked to the banks of the Ganga during the Kumbh Mela — where 100 million pilgrims had gathered — and spoke. He did not shout. He did not threaten. He simply asked: "If the chosen one truly protects you, why are you still poor? If the river truly blesses you, why does it carry your dead? If dharma truly governs, why do the powerful live in palaces while you bathe in sewage?"

The silence that followed was more dangerous than any war.

Gangaputra felt his tattoo burn — the barasingha's antlers glowing like hot iron. He knew the answer to every one of Kansa-Putra's questions, but the answers were complicated, and crowds do not love complicated answers. They love simple ones. And Kansa-Putra's simplest answer — the system is the enemy — was spreading like fire in dry grass.

The battle between them has not been fought with spears and chains. It has been fought with words, with demonstrations, with acts of charity and acts of sabotage. Gangaputra feeds the poor; Kansa-Putra asks why they were poor in the first place. Gangaputra protects the temples; Kansa-Putra asks who built the temples on land taken from farmers.

The Sarus cranes circle above them both, crying their mating call — a sound of absolute loyalty. But loyalty to what? To the son of the river, or to the son of the dungeon?

The Ganga flows between them and judges neither. The Ganga has seen empires rise and fall and rise again, and it carries them all — prayers, ashes, and questions — to the same sea.`
    }
  },

  {
    stateId: "uttarakhand",
    stateName: "Uttarakhand",
    kingdomName: "Deva-Bhumi — The Land of Gods",
    region: "north",
    motto: "We live where the gods vacation. We fight where the gods pray.",
    animal: {
      name: "Alpine Musk Deer",
      type: "animal",
      symbolism: "The precious scent hidden within, fragrance that the deer itself cannot find"
    },
    bird: {
      name: "Himalayan Monal",
      symbolism: "The rainbow bird of the mountains — iridescent, elusive, and proof that even snow-covered peaks hold color"
    },
    hero: {
      name: "Kasturika",
      title: "The Musk Bearer",
      epithet: "She Whose Scent Heals and Whose Blade Silences",
      gender: "female",
      age: 14,
      weapon: "Mountain knife called Kasturi-Khanjar and a tranquilizing blowpipe — she prefers to incapacitate rather than kill",
      tattoo: "Alpine Musk Deer on her left wrist, so small it looks like a birthmark — footprint mark only",
      description: "The youngest hero in the entire Hulmane-The-Saga at just fourteen, Kasturika carries a weight that would crush most adults. Her parents and siblings died in an avalanche when she was nine, and she survived by burying herself in the body of a dead musk deer, whose warmth kept her alive through the night. She emerged speaking in a language that only mountain animals understand.",
      battleCry: "I survived the mountain. I can survive you."
    },
    villain: {
      name: "Kedar-Rakshasa",
      title: "The Temple Destroyer",
      epithet: "He Who Hates the Gods for Not Saving Him",
      gender: "male",
      age: 35,
      weapon: "An ice-pickaxe of enormous size, called Hima-Vajra (Ice Thunderbolt) — one swing can shatter frozen stone",
      darkPower: "Controls avalanches. Can feel the stress patterns in snowpack and trigger collapses with a single strike of his pickaxe. In the Himalayas, this is equivalent to controlling death itself.",
      description: "Once a temple priest at Kedarnath, he was the sole survivor of a devastating flood that killed his entire congregation while he was leading prayer. He prayed for divine intervention as his people drowned, and nothing came. His faith did not simply die — it inverted. He now seeks to destroy every temple in Uttarakhand, believing that false hope is worse than honest despair.",
      motivation: "Believes the gods either do not exist (making the temples lies) or do not care (making the temples cruelty). Either way, the temples must fall. His rage is born from genuine grief, making him the most tragic villain in the Hulmane-The-Saga."
    },
    guru: {
      name: "Nanda Devi Ma",
      title: "The Mountain Goddess Incarnate",
      description: "Not a metaphor — the mountain itself speaks through an ancient woman who has lived at 15,000 feet for so long that her skin has the texture of bark and her breath comes as frost even in summer. She claims the mountains are not dead rock but living beings, and that Uttarakhand's disasters are the mountains weeping.",
      wisdom: "The gods did not fail Kedar-Rakshasa. Kedar-Rakshasa asked the mountain to be flat, and the mountain said no."
    },
    warriors: [
      { name: "Badri-Veera", title: "The Badrinath Sentinel", specialty: "Guards the Himalayan passes in subzero conditions, can fight in blizzards that would blind others", loyalty: "hero" },
      { name: "Monal-Pakshi", title: "The Rainbow Scout", specialty: "Uses Himalayan Monals as messengers, their iridescent feathers carry coded color-signals", loyalty: "hero" },
      { name: "Hima-Sena", title: "The Ice Army", specialty: "Kedar-Rakshasa's followers — former temple devotees turned destroyers, fight with ice-axes", loyalty: "villain" },
      { name: "Ganga-Mukhya", title: "The Source Guardian", specialty: "Guards Gaumukh — the glacier source of the Ganga. If the glacier falls, the river dies", loyalty: "neutral" }
    ],
    saga: {
      title: "The Child Who Survived the Mountain",
      narrative: `Uttarakhand is where the gods come to rest. Shiva meditates at Kedarnath. Vishnu sleeps at Badrinath. The Ganga is born from a glacier's mouth at Gaumukh. This is not metaphor — for the people of Uttarakhand, the mountains are literally divine, and climbing them is an act of prayer.

Kasturika was nine when the mountain prayed back.

The avalanche came without warning — a white wall traveling at two hundred kilometers per hour, carrying boulders, trees, and the screams of everything in its path. Her parents were ahead of her on the trail. Her siblings were behind. She was in the middle, in the one spot where the avalanche split around a rock outcrop and left a pocket of air.

She lay in darkness for sixteen hours. The temperature was minus twenty. She should have died — would have died — if the body of a musk deer, killed by the avalanche, had not fallen across her like a blanket. The deer's musk gland, crushed in death, released its scent — the most precious fragrance in the Himalayas — and the warmth of its body kept hers alive.

When rescuers found her, she was curled inside the deer's belly like a fawn in a womb. She had a tiny tattoo on her wrist that had not been there before: a musk deer, no larger than a thumbprint. The smallest tattoo in the Hulmane-The-Saga — and the most dearly paid for.

Kedar-Rakshasa's tragedy began differently but ended in the same mountains. The flood at Kedarnath in 2013 killed over five thousand pilgrims. The priest who survived — the man who would become Kedar-Rakshasa — was found clinging to the temple wall, still reciting prayers. His congregation had been swept away mid-prayer, their hands still folded, their eyes still closed.

He stopped praying that day.

His first strike was at a small roadside temple — he shattered it with his pickaxe and stood in the rubble, weeping. His second was at a larger shrine. By the fifth, he had followers — people who had lost families to floods, earthquakes, and landslides, and who had prayed to gods that did not respond.

Kasturika found him at the ruins of the sixth temple. She was fourteen, he was thirty-five. She carried a knife and a blowpipe. He carried an ice-axe that could trigger avalanches.

She did not fight him. She sat down in the rubble and told him about the night in the snow. About the musk deer that saved her. About the gods that she too had screamed at, alone in the dark, buried alive.

"The mountain did not save me because I prayed," she said. "The mountain saved me because a deer gave its warmth. The gods work through the living, not through miracles."

Kedar-Rakshasa looked at her — this child with her tiny tattoo and her enormous eyes — and for a moment, the rage faltered. But only for a moment.

"Then why," he whispered, "did no living thing save my people?"

She had no answer. The Himalayan Monals called from the ridge above, their iridescent feathers catching light that the ruins below could not.

The war continues. It is the quietest war in India — fought with whispers, with pickaxes, with a child's patience against a man's grief. And the mountains watch, neither helping nor hindering, as they have watched for sixty million years.`
    }
  },

  {
    stateId: "himachal-pradesh",
    stateName: "Himachal Pradesh",
    kingdomName: "Hima-Chhaya — The Snow Shadow",
    region: "north",
    motto: "The peak does not come to the climber. Climb.",
    animal: {
      name: "Snow Leopard",
      type: "animal",
      symbolism: "The ghost of the mountains, solitary perfection, death that you never see coming"
    },
    bird: {
      name: "Western Tragopan",
      symbolism: "The rarest pheasant — jewel-colored, shy, and seen only by those the mountain trusts"
    },
    hero: {
      name: "Himavati",
      title: "The Snow Ghost",
      epithet: "She Who Walks Where Even Snow Leopards Hesitate",
      gender: "female",
      age: 28,
      weapon: "Hooked climbing daggers called Himshool (Ice Needles) — used for climbing and for silent, devastating close-combat",
      tattoo: "Snow leopard mid-leap across her back, tail curling around her waist — half-body mark",
      description: "Solitary, fierce, and deeply conflicted between her duty to the kingdom and her love for her crippled father. Himavati is an assassin by training and a daughter by choice. She can cross a snowy ridge without leaving a footprint, and her daggers find throats as naturally as the snow leopard finds its prey.",
      battleCry: "(silence — she never announces her presence)"
    },
    villain: {
      name: "Himaalaya-Rakshasa",
      title: "The Mountain Breaker",
      epithet: "He Who Melts What Should Be Eternal",
      gender: "male",
      age: 60,
      weapon: "A staff that radiates impossible heat — called Agni-Danda (Fire Staff). Its touch melts glaciers, and its presence turns snow to steam.",
      darkPower: "Can raise the temperature in a localized area to volcanic levels. In the Himalayas, this is apocalyptic — glaciers crack, rivers flood, permafrost turns to mud. He carries a permanent summer around him, and the snow retreats wherever he walks.",
      description: "A former climate scientist who witnessed the glaciers receding year after year and snapped. If the glaciers will die anyway, he reasoned, better to kill them quickly and force humanity to face the consequences now rather than in a slow, deniable decline. His fire-staff was forged in a volcanic vent he discovered beneath the mountains — proof that even the Himalayas have fire in their hearts.",
      motivation: "An accelerationist eco-terrorist. He believes that slow climate death allows humanity to keep pretending. Only a catastrophic, immediate glacial collapse will force the kind of radical change needed to save the planet. The fact that millions will die in the flooding is, in his calculation, fewer than the billions who will die if nothing changes."
    },
    guru: {
      name: "Dev-Rishi",
      title: "The Frozen Sage",
      description: "Found in a glacier by mountaineers, perfectly preserved, apparently meditating. When the ice around him melted (naturally, not by the villain's hand), he opened his eyes and spoke in a Sanskrit that predates any known dialect. He has been meditating, he says, for 'a few moments' — but his few moments have lasted approximately 500 years.",
      wisdom: "The mountain does not resist the wind. The mountain is still here. The wind is not."
    },
    warriors: [
      { name: "Kullu-Devta", title: "The Valley God-Warrior", specialty: "Channels the power of Himachal's 330 million local deities in battle", loyalty: "hero" },
      { name: "Spiti-Mukhya", title: "The Cold Desert Captain", specialty: "Fights in the frozen Spiti Valley where temperatures kill before weapons can", loyalty: "hero" },
      { name: "Agni-Sena", title: "The Heat Brigade", specialty: "Himaalaya-Rakshasa's followers, carry heat-stones that melt everything around them", loyalty: "villain" }
    ],
    saga: {
      title: "The Ghost and the Fire",
      narrative: `The snow leopard is called the "ghost of the mountains" because it is seen so rarely that its existence feels like a rumor. Himavati earned the same name by the time she was twenty — a shadow that moved through the Himachali peaks leaving no footprint, no sound, and no living enemy behind.

Her father was a mountaineer — the greatest climber Himachal had ever produced. He conquered fourteen peaks above 6,000 meters before the mountain took its payment: both his feet, claimed by frostbite on his final expedition. He sits now in their village home at 3,000 meters, carving wooden deities with hands that remember the grip of ice-axes, watching the peaks he can no longer climb.

Every year, Himavati descends from whatever mission the Hulmane-The-Saga has sent her on and spends one week with her father. They do not speak of her work. They carve wood together. It is the only time the Snow Ghost is not a ghost.

Himaalaya-Rakshasa chose the worst possible time to strike — during Himavati's annual descent. His Agni-Danda pierced the Shigri Glacier, and the oldest ice in Himachal Pradesh began to weep. The meltwater became a river, then a flood, then a wall of water carrying boulders and trees and the frozen memories of ten thousand years.

The flood reached Himavati's village.

She was carving a snow leopard for her father when she heard the sound — a roar that was not thunder, not avalanche, but water moving with the weight of a glacier behind it. She grabbed her father, threw him over her shoulders, and ran. The Snow Ghost, who never runs from anything, ran.

She set her father down on high ground and turned back to face the flood. The climbing daggers in her hands were useless against water — but they were not useless against the man commanding it. She found Himaalaya-Rakshasa standing in the steam of his own making, his fire-staff turning the flood to vapor around him like a god standing in a cloud.

"I am saving them," he said, gesturing at the destruction. "You do not save people by drowning them," she replied.

"I save the planet," he corrected. "People are a detail."

She attacked in silence — the Snow Ghost has no battle cry. Her daggers found his shoulder, his thigh, but the heat radiating from his staff blistered her hands. She retreated, skin peeling, and the Western Tragopan — the rarest bird in the Himalayas — landed on a rock between them. It looked at the fire-man and the ice-woman, and it was not afraid.

Himavati understood. The tragopan survives not because it fights the mountain — but because it knows where to be when the mountain rages. She withdrew, carrying her father, and let the flood spend its fury on empty ground.

Himaalaya-Rakshasa called it a victory. Himavati calls it a strategic retreat. Her father, on the high ground, finished carving the snow leopard by touch alone. It looks exactly like his daughter — solitary, patient, and waiting for the right moment to strike.`
    }
  },

  {
    stateId: "punjab",
    stateName: "Punjab",
    kingdomName: "Panch-Nada — The Five River Throne",
    region: "north",
    motto: "Five rivers, one thunder. Five blades, one strike.",
    animal: {
      name: "Blackbuck",
      type: "animal",
      symbolism: "Sacred speed, the spiraling horn that points to heaven, grace in the open field"
    },
    bird: {
      name: "Northern Goshawk (Baaz)",
      symbolism: "The hunter's hawk — fierce, loyal, and the emblem of the warrior-saint tradition"
    },
    hero: {
      name: "Panchanada",
      title: "The Five Rivers' Son",
      epithet: "He Whose Voice Carries Across Five Waters",
      gender: "male",
      age: 40,
      weapon: "Chakram called Panchnad and a curved sword called Kirpan-e-Bravery — he fights with the circular precision of the chakram and the directness of the blade",
      tattoo: "Blackbuck with spiraling horns across his chest, running across a river — full-body mark",
      description: "Loud, brave, and honorable to a fault. Panchanada is the hero that every child in Punjab wants to be — massive, generous, laughing, and absolutely terrifying in battle. He feeds armies from his own kitchen, fights at the front of every charge, and has never broken a promise. His one fear is his youngest son, born without the blackbuck tattoo mark for the first time in three centuries.",
      battleCry: "Jo Bole So Nihal! Sat Sri Akal!"
    },
    villain: {
      name: "Durjaya Singh",
      title: "The Undefeatable",
      epithet: "He Who Lost God and Found Only the Sword",
      gender: "male",
      age: 55,
      weapon: "Five swords — one for each river — wielded simultaneously using a harness system that turns his body into a whirlwind of blades",
      darkPower: "Cannot be physically defeated in combat. He has never lost a fight, never been wounded, never felt pain. This is not skill — it is a curse. He prayed for invincibility and received it, but the same prayer took away his ability to feel anything: love, joy, fear, or the warmth of the sun.",
      description: "Once the greatest Sikh warrior of his generation, Durjaya Singh went to war against an invasion force and prayed at the Golden Temple for the strength to protect his people. The prayer was answered — he defeated the invaders single-handedly. But when he returned home, his wife's embrace felt like nothing. His children's laughter sounded like silence. He had been given invincibility and stripped of humanity.",
      motivation: "Seeks defeat — not death, but genuine defeat, the experience of losing, of feeling the pain that connects all living things. He fights everyone in his path because he believes that somewhere in the world, there exists someone strong enough to make him feel again."
    },
    guru: {
      name: "Baba Nanak's Langar",
      title: "The Eternal Kitchen",
      description: "At the Golden Temple in Amritsar, the langar has fed millions without discrimination for five centuries. In the Hulmane-The-Saga world, the langar is also a place of spiritual power — the food served here temporarily removes all distinctions of caste, power, tattoo-rank, and even hero-villain status. Within the langar, Panchanada and Durjaya Singh could sit side by side and eat as equals.",
      wisdom: "Before God and before food, there is no king and no servant. There is only hunger and the grace to feed it."
    },
    warriors: [
      { name: "Khalsa-Veera", title: "The Pure Warrior", specialty: "Five-weapon fighting style representing the five rivers, each weapon a different martial tradition", loyalty: "hero" },
      { name: "Baaz-Panchhi", title: "The Hawk Rider", specialty: "Commands war-goshawks that attack in formations, targeting eyes and sword-hands", loyalty: "hero" },
      { name: "Nir-Vedana", title: "The Painless", specialty: "Durjaya Singh's student, also cursed with invincibility and the inability to feel", loyalty: "villain" },
      { name: "Kirtan-Veer", title: "The Singing Warrior", specialty: "Fights while singing Gurbani — the spiritual vibrations disrupt enemies' concentration", loyalty: "neutral" }
    ],
    saga: {
      title: "The Man Who Could Not Lose",
      narrative: `Punjab has five rivers, and each one has a personality. The Jhelum rages. The Chenab philosophizes. The Ravi sings. The Beas explores. The Sutlej endures. Panchanada carries all five in his blood, and in battle, he flows between their natures — raging, thinking, singing, exploring, enduring — like a river that changes course with every heartbeat.

But even five rivers cannot fill the void in a man who feels nothing.

Durjaya Singh came to Punjab's border on a winter morning, walking through the wheat fields like a farmer heading to work. He carried five swords strapped to his body in a harness of his own design — each blade named for a river, each one sharpened to a molecular edge. A Northern Goshawk circled above him, screaming its hunting cry, but Durjaya Singh did not flinch. He had not flinched in twenty years.

"I have come to lose," he announced to the border guard. "Send me your strongest."

Panchanada arrived within the hour, riding a white horse and laughing — because Panchanada always laughs before battle, the way the Ravi always sings before a flood. He saw Durjaya Singh and stopped laughing.

He recognized the curse. The Sikh tradition speaks of warriors so devoted to battle that they forget what they fight for — and the universe, in its mercy or its cruelty, gives them exactly what they asked for. Invincibility. And the loneliness that comes with being untouchable.

The Battle of the Five Blades lasted three days. Not because they were evenly matched — Panchanada was the stronger warrior. But Durjaya Singh's curse made strength irrelevant. Every strike that should have drawn blood slid off his skin. Every blow that should have broken bone bounced away. The five swords whirled around Durjaya Singh like a tornado of steel, and Panchanada fought through them with his chakram and kirpan, dancing the warrior's dance of the Nihang.

On the third day, Panchanada stopped fighting. He sat down in the wheat field, removed his turban — an act of profound vulnerability in Sikh culture — and invited Durjaya Singh to share a meal.

Durjaya Singh stood over him, five blades raised, and felt... something. Not pain. Not love. But a faint, distant warmth, like sunlight through a window too thick to see through. The gesture of a man removing his turban before an enemy — offering trust instead of steel — cracked the curse, just slightly.

"Join me at the langar," Panchanada said. "If five rivers and five blades cannot defeat you, perhaps a meal and a prayer can."

Durjaya Singh has not accepted. But he has not left Punjab either. He sits on the border, eating the meals that the goshawks bring from the langar, waiting to feel the warmth of food in his stomach. So far, he feels nothing.

But the goshawks keep bringing meals. And Panchanada's unmarked youngest son — the boy born without the blackbuck tattoo — has been seen walking toward Durjaya Singh's camp alone, carrying a bowl of dal.

The five rivers hold their breath.`
    }
  },

  {
    stateId: "haryana",
    stateName: "Haryana",
    kingdomName: "Kurukshetra-Bhoomi — The Sacred Battleground",
    region: "north",
    motto: "Every grain of this soil has tasted a warrior's blood. We honor them by fighting worthy wars.",
    animal: {
      name: "Blackbuck",
      type: "animal",
      symbolism: "The sacred witness — blackbucks watched the Mahabharata war from the field's edge"
    },
    bird: {
      name: "Black Francolin",
      symbolism: "The alarm caller — its cry at dawn warned Mahabharata soldiers that battle was coming"
    },
    hero: {
      name: "Kurukshetraa",
      title: "The Sacred Field Warrior",
      epithet: "She Who Was Born from Lightning on the Battlefield",
      gender: "female",
      age: 31,
      weapon: "An ancient iron mace called Bhumi-Garjana (Earth Thunder) — found buried in the Kurukshetra battlefield, still warm after five thousand years",
      tattoo: "Blackbuck standing alert on the Kurukshetra field, surrounded by ghostly warriors — half-body mark",
      description: "Born during a lightning storm directly on the Kurukshetra battlefield, Kurukshetraa is haunted by the voices of warriors who died five thousand years ago. She can hear them — advising, arguing, and sometimes screaming. Her mace came from the same soil, and it hums with the memory of the Mahabharata war.",
      battleCry: "Dharma-Yuddha! (Righteous War!)"
    },
    villain: {
      name: "Kali-Yoddha",
      title: "The Dark Age Warrior",
      epithet: "He Who Was Born from the Blood That Never Dried",
      gender: "male",
      age: "As old as the Kali Yuga itself — approximately 5,000 years",
      weapon: "A sword forged from the collective anger of every soldier who died at Kurukshetra believing their side was wrong — called Adharma-Khadga (Unrighteous Blade)",
      darkPower: "Grows stronger with every unjust act committed on Indian soil. In the Kali Yuga, the age of moral decline, this makes him nearly omnipotent. Only purely righteous acts weaken him — and pure righteousness is rare.",
      description: "The Kali Yuga is the age of darkness that the Mahabharata predicted would follow the war. Kali-Yoddha is that darkness made flesh — born from the blood-soaked soil of Kurukshetra on the day the war ended, he has walked the earth for five millennia, growing stronger as humanity grows more corrupt.",
      motivation: "Does not want to destroy the world — he wants to prove that the world has already destroyed itself. That dharma is dead, that the warriors of old were the last righteous beings, and that every hero since is merely pretending."
    },
    guru: {
      name: "Bhishma's Shadow",
      title: "The Ghost on the Bed of Arrows",
      description: "At dawn on the Kurukshetra battlefield, a shadow appears — the silhouette of Bhishma lying on his bed of arrows, giving his final discourse on dharma. The shadow speaks to those it considers worthy, offering the same wisdom Bhishma gave to Yudhishthira: the secrets of governance, duty, and the terrible price of being righteous in an unrighteous world.",
      wisdom: "Dharma is not a shield. It is a weight. The righteous carry it, the unrighteous set it down. The righteous are crushed. The unrighteous walk free. And still — carry it."
    },
    warriors: [
      { name: "Panipat-Senapati", title: "The Panipat Commander", specialty: "Three battles of Panipat give three levels of tactical expertise — can fight in any terrain", loyalty: "hero" },
      { name: "Kurukshetra-Bhoot", title: "The Battlefield Ghost", specialty: "Can channel the fighting styles of Mahabharata warriors for brief periods", loyalty: "hero" },
      { name: "Adharma-Doot", title: "The Corruption Carrier", specialty: "Kali-Yoddha's agent, can sense moral weakness and exploit it", loyalty: "villain" }
    ],
    saga: {
      title: "The Field That Never Forgets",
      narrative: `The soil of Kurukshetra has never been tested for its mineral content — the scientists are afraid of what they might find. Five thousand years ago, eighteen armies met on this field and fought for eighteen days, and the blood of millions seeped into the earth. The soil should be the most fertile in India. Instead, it grows warriors.

Kurukshetraa was born during a lightning strike so powerful it created a crater on the battlefield. Her mother, a farmer's wife who had wandered onto the field during her labor (drawn, she said, by voices), delivered the child in the crater while lightning struck three more times around them. The baby did not cry. She screamed — a battle cry so fierce that the Black Francolins, who normally only call at dawn, erupted in alarm at midnight.

The mace she carries — Bhumi-Garjana — was pulled from the earth when she was twelve. She was digging in the field for arrowheads (a hobby of Haryana children, who find Mahabharata relics the way other children find coins) when her shovel struck something that shouted. Not metal ringing — a human voice, muffled by five thousand years of soil, shouting a single word: DHARMA.

Kali-Yoddha has walked Kurukshetra for millennia, but he has been waiting for this moment — the moment a warrior is born from the same soil he was born from, carrying a weapon forged in the same blood. He does not want to fight her. He wants to convert her. Because if the hero of Kurukshetra — the living embodiment of dharma-yuddha — can be shown that dharma is a lie, then the last light in the Kali Yuga goes out.

His method is not combat. It is conversation. He walks beside her on the battlefield at dawn, when Bhishma's shadow appears, and he asks the questions that Bhishma's wisdom cannot answer:

"If dharma governed the Mahabharata, why did the righteous Pandavas cheat to win?"
"If Krishna was God, why did He need to lie?"
"If the war was just, why do the dead still scream?"

Kurukshetraa hears the screams. They have been her companions since birth. And she knows — with the terrible clarity of someone who carries a weapon that remembers everything — that Kali-Yoddha's questions have no clean answers.

The Battle of the Dawn Fields happens every morning. Not with weapons — with words. Kurukshetraa stands at one end of the battlefield. Kali-Yoddha stands at the other. Bhishma's shadow lies between them. And they argue about dharma while the Black Francolins call the sun up from behind the horizon.

One morning, Kurukshetraa will either answer Kali-Yoddha's questions or admit that she cannot. On that morning, the Kali Yuga will either end or deepen.

The blackbucks watch from the field's edge, as they have watched for five thousand years, waiting to see which way the wind of dharma blows.`
    }
  },

  {
    stateId: "kashmir",
    stateName: "Kashmir",
    kingdomName: "Sharada-Pitha — The Seat of Sharada",
    region: "north",
    motto: "What is read aloud cannot be burned",
    animal: {
      name: "Hangul (Kashmir Stag)",
      type: "animal",
      symbolism: "Witness, rarity, the survival of memory — every point on the antler is a year of what was preserved"
    },
    bird: {
      name: "Black-necked Crane (Trung-Trung)",
      symbolism: "The cross-border messenger — flies across passes no army can hold — carries the words that escape erasure"
    },
    hero: {
      name: "Sharad-Pandit",
      title: "The Pandit of the Stag",
      epithet: "He Who Reads the Snow",
      gender: "male",
      age: 38,
      weapon: "Sharada-Patra — a scroll-shield that hardens to the shape of whatever Rigvedic verse is unfurled across it",
      tattoo: "Hangul antlers branching across his back — single-point at each side at first, growing one point per saved manuscript",
      description: "Born in a houseboat library on Dal Lake, Sharad-Pandit learned to copy manuscripts before he learned to walk. His grandfather taught him that every page is a treaty between the writer and the future — break the page, break the treaty. He is the eighth Pandit of his line, sworn to the Sharada-Pitha tradition that began at the great temple of Sharada nine centuries ago. His curse is the same as his gift: he wants to read everything before he acts, and the world will not wait.",
      battleCry: "What is written in snow is written in time."
    },
    villain: {
      name: "Avantivarman-Bhrasta",
      title: "The Erasing Historian",
      epithet: "He Who Owns What Is Remembered",
      gender: "male",
      age: 52,
      weapon: "Smriti-Lipi — an inkstone made of charred manuscript paper mixed with his own blood; what he writes with it becomes the historical record, because the contradicting record no longer exists",
      darkPower: "Perfect mnemonic burning. He reads a manuscript once, remembers every word, then burns it. He becomes the sole keeper of the text. Anyone wishing to verify the past must apply to him — and he edits as he recites.",
      description: "Once the chief librarian of the Sharada-Pitha collection — a brilliant cataloguer, a careful curator, a quiet man who loved manuscripts more than he loved people. He found one contradicting account of Kashmir's founding. He burned it. The pleasure of the burning shamed him. He burned a second to prove the first was a mistake. He has not stopped in eleven years. Now he believes Kashmir's tragedy was never invasion — it was incoherence. Too many gods, too many languages, too many histories. He is curing the kingdom of its own confusion.",
      motivation: "Wants Kashmir to have one history — the one he edits. Not for power. For coherence. He sees Sharad-Pandit's reverence for every contradictory manuscript as the disease itself. To save Kashmir, he must erase what Kashmir used to be. The pyre is his temple."
    },
    guru: {
      name: "Acharya Lalleshwari-of-the-Saffron",
      title: "She Who Wanders Without Cloth",
      description: "An ageless mystic-ascetic seen most often at the autumn saffron harvest in Pampore. She wears nothing but a length of woven verse, walks barefoot in snow, and speaks only in Kashmiri vakhs — four-line poems that change meaning depending on who hears them. She appears to Sharad-Pandit when he has read too much and acted too little. Her teaching: a footprint in the snow is a real text, and the snow does not wait to be quoted.",
      wisdom: "The book is the snow's shadow. The footprint is what matters. Read both — but walk."
    },
    warriors: [
      { name: "Lal-Ded-Vaak", title: "The Memorising Poet", specialty: "A wandering female bard who memorises every manuscript before Avantivarman-Bhrasta can find it — she is the kingdom's living redundancy archive, speaking only in four-line vakhs", loyalty: "hero" },
      { name: "Habba-Bayith", title: "The Three-Valley Singer", specialty: "A qawwal whose voice carries across three valleys simultaneously — he sings the songs Avantivarman wants forgotten, and his audience grows even when no one summons it", loyalty: "hero" },
      { name: "Mehjoor-of-the-Margin", title: "The Footnote Warrior", specialty: "An ink-fighter who wields a calligraphy brush dipped in walnut ink — his strokes write annotations on the air that lasts long enough to deflect blades", loyalty: "hero" },
      { name: "Karkota-Kaaki", title: "The Inkeditor", specialty: "A digital librarian who serves Avantivarman, editing online records in real-time — every cache he reaches forgets what it cached", loyalty: "villain" },
      { name: "Naga-Lipi", title: "The Snake-Script Calligrapher", specialty: "Writes Avantivarman's corrected histories onto stone tablets that look thirteen centuries old when they are thirteen days old", loyalty: "villain" }
    ],
    storyImages: {
      basePath: "../../../../../media/states/north/kashmir/stories/sharada-pitha/images/",
      hero: [
        { file: "hero-sharad-pandit-portrait.png", label: "Sharad-Pandit — The Pandit of the Stag", caption: "Sharad-Pandit in phiran and leather lamellar, the Sharada-Patra scroll-shield diagonally across his back, ink-stained fingers, snow on his shoulders. Behind him the Awantipur ruins in winter dusk." },
        { file: "hero-sharad-houseboat-library.png", label: "The Houseboat Library", caption: "Sharad-Pandit's childhood home — a houseboat on Dal Lake that doubles as a manuscript library. Walnut shelves curve with the hull. A black-necked crane stands on the prow." },
        { file: "hero-sharad-reading-snow.png", label: "Reading the Snow", caption: "Sharad-Pandit kneeling in the snow at Pahalgam, fingers tracing tracks left three winters ago — the hangul-bond reading what no living thing has seen." }
      ],
      villain: [
        { file: "villain-avantivarman-portrait.png", label: "Avantivarman-Bhrasta — The Erasing Historian", caption: "Avantivarman-Bhrasta in a dark Kashmiri choga, a manuscript in one hand, a brazier behind him. His eyes are gentle. His hands are smoke-stained beyond cleaning." },
        { file: "villain-avantivarman-burning.png", label: "The First Burning", caption: "Avantivarman-Bhrasta the night of his first burning. He read the contradicting manuscript. He cannot un-read it. He has lit the lamp. The shame is the spark." }
      ],
      animal: [
        { file: "animal-hangul-natural.png", label: "Hangul — Sacred Stag of Sharada-Pitha", caption: "A Kashmir stag in winter coat among the silver birches of Dachigam. The antlers carry seven points on each side — one point per manuscript saved." },
        { file: "animal-hangul-snow-witness.png", label: "The Snow Witness", caption: "The hangul stands above a snowfield, its tracks the only ones since the last storm. Sharad-Pandit reads the field through the stag's seeing." }
      ],
      guru: [
        { file: "guru-lalleshwari-saffron.png", label: "Acharya Lalleshwari — In the Saffron Field", caption: "Lalleshwari at the Pampore harvest — barefoot in a field of purple crocus, wearing only a length of woven verse. She does not look up at strangers. She looks up at students." }
      ],
      story: [
        { file: "story-awantipur-confrontation.png", label: "The First Confrontation — Awantipur", caption: "Sharad-Pandit and Avantivarman-Bhrasta meet at the ruined temple of Awantipur in deep winter. Snow drifts on broken lintels. Between them, a manuscript Avantivarman is about to read for the last time." },
        { file: "story-recital-festival.png", label: "The Recital Festival", caption: "Ten thousand Kashmiris seated on the snow around the Sharada-Pitha temple, each reciting one paragraph of a manuscript while Sharad-Pandit reads aloud. The smoke of Avantivarman's pyre becomes the breath of recitation." }
      ],
      cast: [
        { file: "cast-lal-ded-vaak.png", label: "Lal-Ded-Vaak", caption: "Lal-Ded-Vaak — The Memorising Poet. She has memorised seventy-three manuscripts before they reached the fire. Each vakh she speaks is a footnote in a library that no longer exists on paper." },
        { file: "cast-habba-bayith.png", label: "Habba-Bayith", caption: "Habba-Bayith — The Three-Valley Singer. He sings a forbidden Sufiana raga from the steps of Hazratbal — his voice reaches Pulwama and Anantnag at the same hour." },
        { file: "cast-karkota-kaaki.png", label: "Karkota-Kaaki", caption: "Karkota-Kaaki — The Inkeditor. He is hunched over six screens at once, watching cached web pages forget themselves as he scrolls." }
      ]
    },
    saga: {
      title: "The Snow Library — A Film in Two Halves",
      narrative: `═══ FIRST HALF ═══

OPENING — THE HOUSEBOAT WHERE BOOKS WERE BORN

A six-year-old boy sits cross-legged on the floor of a houseboat. The houseboat floats on Dal Lake. The lake is mirror-still under September dawn. The boy holds a reed pen. His grandfather holds a manuscript.

"Why do you copy it twice, Nana?" the boy asks.

"Because one copy lives in the boat. The other goes to the lake-side cousin."

"Why?"

"Because a boat can burn. A house can burn. But a manuscript that lives in two places will outlive both."

The boy nods. He does not understand the word "outlive." He understands the word "two." He goes back to copying.

His name is Sharad-Pandit. He is the eighth of his line — the line that began nine centuries ago when an ancestor walked from the Sharada-Pitha temple in the high passes down to the valley with a single armful of scrolls. The line that says: copy twice, give one away, never own knowledge.

By the time he is twelve, Sharad-Pandit has copied four thousand manuscripts. The houseboat has shelves that curl with the hull. Walnut-wood. Lakhi-wood. Saffron-yellow ribbon between every page. His grandfather dies in winter — the lake freezes around the boat — and Sharad-Pandit reads the funerary verses himself, because his grandfather had copied that one too.

THE LIBRARIAN WHO LOVED MANUSCRIPTS

Avantivarman-Bhrasta is forty-one when we meet him. He is the chief librarian of the Sharada-Pitha collection — a magnificent stone hall built over the centuries on the model of the original Sharada Peeth temple. He has personally catalogued ninety-six thousand manuscripts. He sleeps in the cataloguing room. He talks to manuscripts as if they are children. He weeps when one is damaged by mice.

He is not a villain yet.

One evening in the deep winter, he reads a manuscript that has been waiting in a corner shelf for eight hundred years. It is a Kashmiri account of the founding of Sharada-Pitha itself — and it contradicts every other account he knows. The other accounts say Sharada-Pitha was founded by a brahmin pilgrim in the 6th century. This manuscript says it was founded by a tribal woman and a Buddhist nun, together, two centuries earlier.

He reads it three times. He notes that it is in a handwriting he respects. He notes that the paper is Kashmiri pulp. He notes that the inscription seal is genuine.

He thinks: if this is true, the Sharada-Pitha I have served all my life is built on a story that is half lie.

He puts the manuscript on his desk. He picks up his oil lamp. He carries the manuscript to the brazier in the courtyard. He sets it down on the coals.

He stands and watches it burn.

The shame burns longer than the paper. To answer the shame, he goes back inside, finds the secondary account that supports the official version, and reads it aloud to himself three times. The version he kept is now the only version. He has corrected the record by removing the error.

He sleeps. The next morning he is calmer than he has been in years.

THE GAP IN THE LIBRARY

Eleven years later. Sharad-Pandit, now thirty-eight, has come to the Sharada-Pitha hall as he comes every winter, to copy from the central collection. He has been reading the shelves for thirty days. On the thirty-first day, he notices a gap.

A particular shelf — the founding-accounts shelf — should contain seven manuscripts according to the catalogue index. It contains six. He checks the catalogue. The index says seven. He checks the entry-cards. The entry-cards say seven. He counts again. He finds six.

He asks Avantivarman.

"Catalogue errors. Old manuscripts move," Avantivarman says, smiling gently. "Sometimes they were never there at all. The index can lie."

Sharad-Pandit nods. He goes back to copying. But the hangul-bond is awake in him now. The Kashmir stag of his lineage reads tracks left years before — and he can feel, in the corner of his mind, the missing manuscript's track. It was here. It was read. It is not here.

He spends the next three months mapping the gaps. There are forty-seven of them. Forty-seven manuscripts that the index says exist and that the shelves do not hold. Some are about the founding. Some are about the dynasty. Some are about Kashmir's plural traditions — Buddhist, tribal, Persianate, Sufi, Tantric.

He understands, slowly, what he is looking at. He understands what kind of person makes these specific gaps. He goes to find Avantivarman.

THE FIRST CONFRONTATION — THE AWANTIPUR RUINS

Awantipur. The ninth-century temple ruins of Avantivarman the original — the noble king whose name the librarian carries as a curse. Snow has been falling for two days. The broken lintels carry caps of white. Black-necked cranes wheel in the air above the ruins, calling to each other across the cold.

Sharad-Pandit comes alone. He carries the Sharada-Patra unfurled across one arm — the family scroll-shield, every Rigvedic verse on it copied by hand by Sharad-Pandit himself when he was thirteen.

Avantivarman-Bhrasta is waiting. He sits on a broken pillar with a manuscript in his lap. The brazier between his feet is already lit. He looks up at Sharad-Pandit with affection. They were friends once.

"You found the gaps," Avantivarman says.

"I found forty-seven."

"There are sixty-two. You missed fifteen."

Sharad-Pandit feels the cold in his chest. He had thought forty-seven was a lot.

"Why?" he asks.

Avantivarman picks up the manuscript in his lap. He opens it to a page near the middle. He begins to read aloud — perfect Sanskrit, perfect cadence, every word precise. He reads for ten minutes. The verse describes a Kashmir founded by three peoples, woven in dispute, alive in contradiction. It is beautiful.

Sharad-Pandit knows the manuscript. It is one of the forty-seven gaps. It existed in his grandfather's catalogue. He has been told it does not exist.

Avantivarman finishes the recitation. He closes the manuscript. He places it on the brazier coals.

"There," Avantivarman says, watching it catch. "Now no one knows that verse but me. I have not destroyed it. I have curated it. The kingdom is one paragraph cleaner."

Sharad-Pandit lifts the Sharada-Patra. The Rigvedic verse he chooses is the one that begins *Yatra Vishvam Bhavatyeka Nidam* — where the world becomes one nest. The scroll hardens into a flat shield in his hand.

He charges. Avantivarman does not move. He simply lifts his own weapon — the Smriti-Lipi inkstone — and begins to write on the air with the index finger of his right hand. The writing becomes visible: Sanskrit characters in dark blue smoke, holding their shape against the wind.

The characters say: SHARAD-PANDIT NEVER CAME TO AWANTIPUR.

Sharad-Pandit's charge falters. For one terrifying second, he forgets why he came. He forgets the gap-count. He forgets the manuscript on the brazier. The Smriti-Lipi is rewriting his own memory in real-time.

Then Lal-Ded-Vaak, who has been hidden in the snow behind a fallen wall, stands up and begins to recite. She recites everything Avantivarman just burned — she had memorised it from the catalogue card and the title alone, then guessed at the rest. The guesses are imperfect. But the act of reciting protects Sharad-Pandit's memory. The blue characters shudder and fade.

The scroll-shield closes. Sharad-Pandit cannot fight a man who can write him out of his own life. Not yet. Not with what he knows.

He retreats. The black-necked cranes follow him out of the ruins, calling, calling.

═══ INTERVAL ═══

A hangul stag steps out from a stand of silver birches at Dachigam. Snow on his back. Steam at his nostrils. He looks at Sharad-Pandit for nine breaths.

Then he turns and walks into the trees.

Sharad-Pandit follows. The stag's tracks are clear. They are also, somehow, three months old. The hangul-bond is awake.

The tracks lead him to a saffron field at Pampore. Past the last of the autumn harvest. A woman stands among the purple crocus stalks. She wears nothing but a length of woven verse — Lal Ded's vakhs, ancient and recent, layered into one cloth. Her feet are bare. She does not look up.

"You came," Lalleshwari says.

"I am — "

"The eighth Pandit. The boy who copies. The man who reads everything before he speaks. The man who walked away from a brazier because he did not know enough yet."

Sharad-Pandit kneels.

"I have a question — "

"You have many questions. The question that matters is the one you have not asked yet. Why did the manuscript on the brazier need to be burned?"

He thinks. He says: "Because Avantivarman believed it contradicted the official story."

"No. Because Avantivarman knew you had not read it yet. You were going to read it, and then read three more, and then read seven more, and the forty-seven gaps would become seventy-eight by the time you finished studying. He is not racing your knowledge. He is racing your action."

Sharad-Pandit understands.

"What do I do?"

She finally looks at him. Her eyes are old.

"You walk before you have read enough. You speak before you are sure. You act, and you accept that you will get parts of it wrong. The book is the snow's shadow. The footprint is what matters."

A black-necked crane lands on her shoulder. She does not look surprised. She extends one arm and the crane takes wing again, west, toward the high passes — toward the original Sharada-Pitha temple, where the central scroll lies on a stone shelf, untouched for centuries.

"He is going for the central scroll," Lalleshwari says. "The founding charter of Sharada-Pitha. If he burns that, every kingdom in the north loses its right to claim a memory older than him. You have three days. You will not read it before you arrive. Read it as you carry it. Speak as you go."

═══ SECOND HALF ═══

THE WALK ACROSS THE PASSES

Three days. Across snow. Sharad-Pandit walks. With him: Lal-Ded-Vaak (memorising as she walks), Habba-Bayith (singing as he walks, his voice reaching three valleys at once), Mehjoor-of-the-Margin (writing footnotes on the air with walnut ink), and seven hundred ordinary Kashmiris who have been gathering since the cranes began to circle the houseboat library.

Seven hundred. By the second day, three thousand. By the third day, ten thousand.

They are not warriors. They are weavers, shikara-rowers, saffron-farmers, schoolteachers, a retired chief justice, six Sufi qawwals, a Pandit family from Anantnag, a Shia mother from Baramulla, a Sikh trader from Srinagar, a Bhoti monk from Zangskar, two Tibetan refugees who walked the wrong way to find their family. They follow because Habba-Bayith is singing and because Lalleshwari said walk and because they have heard about the gaps and they understand, in the bones of every Kashmiri who has been told their own history doesn't fit, what is at stake.

Sharad-Pandit walks at the front. He does not read while he walks. He has not been allowed to read the central scroll yet. He will only read it when it is in his hands.

THE FINAL CONFRONTATION — THE SHARADA-PITHA TEMPLE

The original Sharada Peeth. A nine-century-old temple in a high pass, half collapsed, half preserved by the cold itself. The black-necked cranes have gathered — hundreds of them — circling the temple in the thin air. The snow is bright and the sky is glass-clear.

Avantivarman-Bhrasta is inside. Karkota-Kaaki and Naga-Lipi are with him. The central scroll is on the stone shelf. The brazier is lit.

Sharad-Pandit walks into the temple. Ten thousand Kashmiris stop at the courtyard. They have come this far. They wait.

Avantivarman picks up the central scroll.

"Eight hundred and twenty years," he says. "This scroll has waited eight hundred and twenty years for someone to read it correctly. I am that reader."

"You are a librarian," Sharad-Pandit says. "Not a reader."

"There is no difference."

"There is the difference of two."

Avantivarman does not understand. Sharad-Pandit walks forward. The Sharada-Patra is in his left hand, scroll-shield open. The brazier is between him and Avantivarman. He stops on his own side of the brazier.

He says, simply: "Read it aloud."

Avantivarman blinks.

"You want me to read it aloud? Why?"

"Because I cannot let you burn it without reading it. And I cannot read it before you burn it. So read it aloud. We will both hear it together. Then we will see what you choose."

Avantivarman is suspicious. He is also, in his deepest soul, still a librarian who loves manuscripts. The chance to read this scroll aloud — this exact scroll, this central scroll, the one he has not yet allowed himself to open — is an offer his old self cannot refuse.

He opens the scroll. He begins to read.

The scroll is the founding charter. It is, of course, a contradiction. It says Sharada-Pitha was founded by *seventeen* people, not three, not one — Kashmiri Shaiva, Buddhist, Tibetan, Sogdian, Persian, Tantric, tribal Kol, Brahmin scholar, Sufi mystic, Jain visitor, twin sisters who could not agree on anything. Each of the seventeen wrote a clause. The clauses contradict each other. The charter requires that they remain in contradiction — a kingdom of knowledge that disagrees with itself.

Avantivarman reads. His voice begins steady. By the third clause it shakes. By the seventh clause he is weeping. He is reading the manuscript that explains why his life's work — his curation, his correction, his coherence — was a misreading from the start. Sharada-Pitha was never meant to have one history. It was meant to have seventeen.

He stops reading on the eleventh clause. The brazier is still hot. The scroll is still in his hands.

"If I burn this — " he begins.

"Then ten thousand people outside this temple have heard it," Sharad-Pandit says. "Habba-Bayith is singing it in three valleys right now. Lal-Ded-Vaak is composing a vakh for each clause as you speak. Mehjoor is writing the footnotes on the air. The Pratima-Pothi" — he holds up the modern device strapped at his hip — "is uplinking every word to forty-seven edge-nodes across Kashmir, Ladakh, and the Himalayan Buddhist circuit. You can burn the scroll. You cannot burn what we have already become."

THE CHOICE

Avantivarman looks at the scroll. He looks at the brazier. He looks at Sharad-Pandit. He looks at his own hands — smoke-stained beyond cleaning.

He places the scroll on the stone shelf. He does not burn it.

He sits down on the temple floor.

"I do not know," he says, "how to be a librarian who is not also a corrector."

"Neither do I," Sharad-Pandit says. "I do not know how to be a reader who acts. I will fail at this for the rest of my life. So will you. Sit. Eat. We will fail together. There are ten thousand people outside who will check our drafts."

Karkota-Kaaki and Naga-Lipi look at their master. Avantivarman waves them away. They go. They will keep working for him for years to come — old habits — but the central scroll survives, and the gaps in the Sharada-Pitha library begin to be filled, one slow recitation at a time, by people who memorised what Avantivarman thought he had alone.

THE STAG AT DAWN

Sharad-Pandit walks out of the temple at dawn. The ten thousand Kashmiris are still in the courtyard. They have not slept. They have been reciting.

A single hangul stag stands at the edge of the gathering. It looks at Sharad-Pandit for nine breaths. Then it walks slowly toward him.

He kneels. The stag touches its nose to his forehead. The hangul-bond completes its first level.

The tattoo on his back finishes itself — two antler-points on each side. One for the central scroll. One for the act of reading it aloud. Above the antlers, in fine ink-line, a black-necked crane is drawn mid-flight.

He stands up. His phiran is heavy with snow. His Sharada-Patra is rolled and slung. His hands are stained with ink and grease and the smoke of someone else's brazier and his own.

The seven hundred who followed him from Pampore — who became ten thousand — start the long walk home. They are singing. They are reciting. Half of them are wrong. The other half are correcting them. The correcting is wrong too. It does not matter. The corrections will be footnoted by the next generation.

What is written in snow is written in time. And what is read aloud cannot be burned.`
    },
    inspiration: {
      heroGod: { name: "Saraswati / Sharada", domain: "Goddess of knowledge, music, art, and speech — the white-clad mother who plays the veena and rides the swan", parallel: "Sharad-Pandit is the steward of Sharada's tradition, not her warrior. Where most heroes wield weapons, he wields a scroll. Where Durga rides a tiger to kill, Saraswati rides a swan to discern. He learns the harder lesson — that discernment alone, without action, can be its own kind of blindness. The goddess teaches him that the swan separates milk from water; he must learn to separate the moment of reading from the moment of reciting." },
      heroMahabharata: { name: "Vidura", parallel: "The wise minister of Hastinapura who saw every betrayal coming and could not stop them — because he believed his role was to counsel, not to act. Sharad-Pandit begins his story as a Vidura — knowing more than anyone, doing less than anyone. His arc is the Vidura inversion: at the climax, he speaks not as a counsellor but as the actor himself. He still loses much. But unlike Vidura, he refuses to be merely the voice of conscience while the dice are thrown." },
      villainDemon: { name: "Bhrigu the Curse-Maker (corrupted)", domain: "The sage whose word was law, whose curses could not be undone, whose anger reshaped reality through speech itself", parallel: "Avantivarman-Bhrasta is a corrupted Bhrigu — the scholar whose writing rewrites what is true. Where Bhrigu's curses changed gods, Avantivarman's edits change history. He is not driven by greed. He is driven by the certainty that he is purifying the record. Like the sages whose anger broke the world, his coherence breaks the kingdom's plural memory." },
      villainMahabharata: { name: "Drona", parallel: "The brahmin teacher whose love of his art made him serve the wrong side — and whose final defeat came from a lie spoken in the name of truth. Avantivarman is a Drona who teaches by erasing what his students should not learn. Like Drona, he is a great teacher. Like Drona, he must be told a half-lie at the climax to be defeated. The half-lie Sharad-Pandit tells: he claims the scroll has already been uplinked when it has not been — by the time Avantivarman believes him, it has been." }
    },
    modernArsenal: {
      hero: "Sharada-Patra scroll-shield with hand-copied Rigvedic verse-defenses, Pratima-Pothi satellite-uplink ledger with mirrored edge-nodes across Kashmir-Ladakh-Tibet, hangul-bond psychic snow-track reading, black-necked crane drone-courier network, distributed houseboat-library backup system",
      villain: "Smriti-Lipi blood-ink stone that rewrites historical record, Vismriti-Krama search-suppression algorithm that edits Wikipedia and cached web pages in real-time, army of digital librarians and stone-tablet calligraphers forging thirteen-century-old documents in thirteen days, cross-border manuscript-smuggling channels"
    },
    geopolitics: "Three nuclear states (India, Pakistan, China) share Kashmir's mountain borders. Each sponsors a different version of Kashmir's founding. Foreign think-tanks fund competing historical reconstructions. Big-tech platforms host the actual cached record — which is why Avantivarman's editorial control of search-engine results matters more than his control of physical manuscripts. The battle for Sharada-Pitha is the test case for who owns the past in the digital age."
  },

  // ═══════════════════════════════════════════════════════════
  // PRAGJYOTISHA — THE NORTHEASTERN KINGDOMS
  // ═══════════════════════════════════════════════════════════

  {
    stateId: "assam",
    stateName: "Assam",
    kingdomName: "Ganda-Kshetra — The Rhinoceros Realm",
    region: "northeast",
    motto: "One horn, one heart, unbreakable",
    animal: {
      name: "One-horned Rhinoceros",
      type: "animal",
      symbolism: "Armored innocence, unstoppable charge, the gentle tank of Kaziranga"
    },
    bird: {
      name: "White-winged Duck",
      symbolism: "The rarest duck — quiet, hidden, and endangered, like the secrets of the Brahmaputra"
    },
    hero: {
      name: "Kamalavarna",
      title: "The Lotus Shield",
      epithet: "She Who Stands Where the Rhino Stands",
      gender: "female",
      age: 38,
      weapon: "A tower shield called Kavach (Armor) and a rhino-horn mace — the shield can absorb any blow, the mace delivers one",
      tattoo: "One-horned Rhinoceros in full charge across her back and right arm — half-body mark, achieved overnight when her rhino companion was shot by poachers",
      description: "Immovable in defense and devastating in counterattack, Kamalavarna is the shield that protects the entire Northeast. She bonded with a wild rhinoceros named Vajrakavacha at the age of fifteen, and together they patrol Kaziranga like armored sentinels. She is warm, maternal, and absolutely unforgiving toward anyone who threatens the wild.",
      battleCry: "Behind my shield, nothing falls!"
    },
    villain: {
      name: "Mrityu-Sarpa",
      title: "The Poacher King of the Brahmaputra",
      epithet: "He Who Turns Sacred Horns into Gold",
      gender: "male",
      age: 47,
      weapon: "A horn-tipped javelin made from stolen rhino horn — an abomination to everyone in Assam. Called Shringha-Hantaka (Horn Killer)",
      darkPower: "Can communicate with and control snakes — the Brahmaputra's banks are home to thousands of species, and he commands them all. His network of serpent-spies makes him omniscient in any riverside terrain.",
      description: "Born in the tea-garden slums where workers are paid less than the cost of the tea they pick, Mrityu-Sarpa grew up watching foreigners sip Assam tea from fine china while his family starved. He turned to poaching because rhino horn was worth more per gram than gold. Over two decades, he built an empire of bone and horn, and his serpent-bond gives him intelligence that no conventional spy network can match.",
      motivation: "His cause began as survival — feeding his family in a system designed to keep them hungry. But wealth corrupted what poverty began. Now he kills rhinos not for need but for power, and he has convinced himself that the rhinos would want to be 'useful' rather than merely exist."
    },
    guru: {
      name: "Ma Kamakhya",
      title: "The Tantric Priestess of the Hill",
      description: "The high priestess of the Kamakhya Temple — the most powerful tantric site in India. She channels the divine feminine energy that the temple represents, and her power is both creative and destructive. She sees the balance of Assam's ecosystem as a tantric mandala: disturb one element and the entire pattern collapses.",
      wisdom: "The horn of the rhino grows from the same earth as the tea in your cup. Destroy one, and the other follows."
    },
    warriors: [
      { name: "Kaziranga-Patrol", title: "The Grass Riders", specialty: "Ride elephants through Kaziranga's tall grass, tracking poachers by sound and elephant-sense", loyalty: "hero" },
      { name: "Majuli-Veer", title: "The Island Warrior", specialty: "Fights from the world's largest river island, using the Brahmaputra's current as a weapon", loyalty: "hero" },
      { name: "Sarpa-Sena", title: "The Serpent Army", specialty: "Mrityu-Sarpa's snake-controllers, can direct venomous snakes like guided weapons", loyalty: "villain" },
      { name: "Bihu-Nritya", title: "The Festival Fighter", specialty: "Uses the acrobatic Bihu dance as a fighting style — unpredictable, joyful, and lethal", loyalty: "hero" }
    ],
    saga: {
      title: "The Rhino Knight of Kaziranga",
      narrative: `When Kamalavarna was born, the Brahmaputra flooded — as it does every year. But that year, the flood carried something unusual to the village doorstep: a baby rhinoceros, separated from its mother, lying in the mud like a grey boulder with legs. Kamalavarna's mother, who had just given birth herself, did the only thing that made sense to her: she fed the rhino calf alongside her own child.

Vajrakavacha — the name means "diamond armor" — grew up beside Kamalavarna. By the time she was ten, the rhino was fully grown and terrifying to everyone except the girl who had shared her mother's milk with him. They communicated without words — a touch, a shift in weight, a particular huffing sound that meant everything from "danger" to "I'm hungry" to "that person is lying."

The rhino tattoo appeared on her back the night of the Elephant Moon — the one night each year when the moon is so bright that Kaziranga's grass casts shadows. She was fifteen, sleeping against Vajrakavacha's flank, and she dreamed of a rhino so vast that it carried the entire Brahmaputra on its back. When she woke, the tattoo was there.

Mrityu-Sarpa's first attempt to kill Vajrakavacha came when Kamalavarna was twenty. A paid sniper, positioned in the tall grass, fired a heavy-caliber round at the rhino's neck. The bullet struck the skin and bounced. The rhino's armor, legendary among biologists, proved stronger than steel.

The second attempt used poison — dropped into the waterhole where Vajrakavacha drank. The white-winged ducks, the rare birds that nested near the waterhole, died first. Fourteen ducks. Kamalavarna found them floating, their white wings stained with poison-bloom, and she knew.

The third attempt succeeded — partially. A coordinated assault by thirty of Mrityu-Sarpa's men, armed with armor-piercing rounds, caught Vajrakavacha in open ground. Seven bullets penetrated. The rhino fell, and Kamalavarna felt each bullet as if it had struck her own body.

That night, her tattoo changed. In a single dark hour, the half-body mark completed itself — the rhino on her skin charging, horns lowered, silver scars appearing on its flanks that matched Vajrakavacha's wounds exactly. She rose from the ground shaking with power and rage, and she ran to Kaziranga.

The poachers were still there, sawing at the horn of a dead female rhino. Kamalavarna's mace shattered three rifles before they understood what was happening. Her shield blocked the remaining bullets. And her scream — not a battle cry but a pure sound of grief and fury — scattered the serpent-spies that Mrityu-Sarpa had planted in the grass.

She carried Vajrakavacha (who survived — rhinos are tougher than bullets) to the river, where Ma Kamakhya's priestesses healed him with tantric chants and Brahmaputra mud.

The war between Kamalavarna and Mrityu-Sarpa is now in its eighteenth year. He hides in the Brahmaputra's shifting sandbars, surrounded by serpents. She patrols Kaziranga on Vajrakavacha's back, listening for the sound of gunshots over the river's roar.

The white-winged ducks have learned to call a specific alarm when they see strangers near the waterholes. It sounds almost like the word "sarpa" — serpent.

Even the birds fight this war.`
    }
  },

  {
    stateId: "arunachal-pradesh",
    stateName: "Arunachal Pradesh",
    kingdomName: "Arunodaya-Kshetra — The Land of the Dawn",
    region: "northeast",
    motto: "We see the sun first. We face the dark first. We are ready for both.",
    animal: {
      name: "Gayal (Mithun)",
      type: "animal",
      symbolism: "Sacred cattle of the hills, wealth measured in loyalty, the gentle beast of ceremonies"
    },
    bird: {
      name: "Great Hornbill",
      symbolism: "The forest's elder — enormous, ancient, and impossible to ignore"
    },
    hero: {
      name: "Udayagiri",
      title: "The Dawn Walker",
      epithet: "He Who Greets the Sun Before Anyone Else in India",
      gender: "male",
      age: 30,
      weapon: "A dawn-forged spear called Uday (Dawn) — forged in the first light of each new day, it must be remade daily or it loses its power",
      tattoo: "Gayal standing on a sunrise-lit ridge across his chest — half-body mark",
      description: "An eternal optimist who has faced enough darkness to earn his light. Udayagiri fights with a circular, redirecting combat style — turning enemies' attacks back against them, like dawn turning darkness into light. He smiles in battle, not from cruelty but from genuine joy in the fight.",
      battleCry: "The dawn cannot be stopped!"
    },
    villain: {
      name: "Tamasi",
      title: "The Shadow of Dawn",
      epithet: "She Who Wants Eternal Night",
      gender: "female",
      age: 33,
      weapon: "A staff of petrified night-wood — wood from a tree that grew in a cave so deep it never saw light. Its touch brings darkness to a localized area.",
      darkPower: "Can extend night. In her presence, dawn does not come. The sun rises everywhere else, but where Tamasi stands, the darkness holds. In Arunachal — the Land of the Rising Sun — this is the ultimate sacrilege.",
      description: "Udayagiri's older sister, who was kidnapped as a child by raiders from beyond the border. She survived captivity by learning to love darkness — the only constant in her windowless cell. When she escaped, years later, she could not bear the light. Dawn, which her brother worships, is her torture. She wears night like armor because light reminds her of everything she lost.",
      motivation: "Not malice but trauma. She wants eternal night because light brings memory, and memory brings pain. If the sun never rises, she never has to face what happened in the dark."
    },
    guru: {
      name: "Baba Parashar",
      title: "The Cloud-Speaker",
      description: "A hermit who lives above the cloudline at 4,000 meters, where the sky is always clear. He speaks to clouds — literally converses with them — and they tell him the weather patterns of the entire subcontinent. His prophecies are weather-forecasts interpreted as metaphor, and they are always accurate.",
      wisdom: "The night does not hate the dawn. The night is simply tired. Let it rest, and it will step aside."
    },
    warriors: [
      { name: "Tawang-Lama", title: "The Warrior-Monk", specialty: "Fights using Tibetan Buddhist martial arts, combining meditation with devastating precision", loyalty: "hero" },
      { name: "Hornbill-Senapati", title: "The Hornbill Commander", specialty: "Commands the Great Hornbills as aerial scouts and messengers across the valleys", loyalty: "hero" },
      { name: "Andhkar-Sena", title: "The Darkness Army", specialty: "Tamasi's followers, who live in caves and fight only at night", loyalty: "villain" }
    ],
    saga: {
      title: "The War Between Dawn and Night",
      narrative: `Arunachal Pradesh sees the first sunrise in India. Every morning, while the rest of the country sleeps, the hills of Arunachal catch the sun and hold it like a gift. The Great Hornbills spread their massive wings to warm them in the new light, and the gayals stand on ridges like silhouettes waiting to be painted.

Udayagiri was born at exactly the moment the sun crested the Mishmi Hills — the first child born in the first light. The village elders named him Dawn-Walker because, they said, the sun had paused in its rising to watch him arrive.

His sister had been born three years earlier, at midnight, under a sky so dark that the stars seemed to press against the earth. The elders said nothing about her birth. Some say they were afraid.

When Tamasi was taken — pulled from her home by men who came through the mountain passes in the dark — Udayagiri was too young to understand. He grew up knowing only that he had a sister once, and that she was gone. He searched for her. He found her.

She was living in a cave system that stretched for miles beneath the border mountains, and she had made it her kingdom. The cave-dwellers who followed her had never seen the sun — children born underground, raised in torchlight, pale as cave-fish and deadly as the darkness that hid them.

"Come home," Udayagiri said, standing at the cave's entrance with dawn spilling in behind him like liquid gold.

Tamasi screamed. Not in rage — in pain. The light burned her, not physically but psychically. Every ray of light was a reminder of the morning she was taken, of the sunrise she was watching when the hands grabbed her. Light meant vulnerability. Darkness meant safety.

"Make it stop," she whispered. And she struck the cave wall with her night-staff, and the darkness poured out like water, extinguishing the dawn that Udayagiri carried with him.

The Battle of the Border Cave was fought in conditions that favored neither — half the cave was lit by Udayagiri's dawn-spear, half was shrouded in Tamasi's night. The boundary between light and dark was a physical line on the stone floor, and they fought across it — he retreating into light when wounded, she retreating into dark. Neither could enter the other's domain.

The Great Hornbills circled outside, unable to enter the cave. The gayals lowed on the ridge, disturbed by the wrongness of a dawn that ended at a cave-mouth.

Baba Parashar, watching from above the clouds, said: "This is not a war. This is a sibling argument that the universe is taking too seriously."

He is right. But sibling arguments in the Hulmane-The-Saga have consequences measured in kingdoms.

Udayagiri has not given up. Every morning, he forges a new spear in the dawn and walks to the cave entrance. Every morning, his sister's darkness pushes the light back. And every morning, the light gains one inch more.

He believes — the eternal optimist — that one day the dawn will reach her. And she will remember that light is not an enemy. It is a brother, reaching into the dark.`
    }
  },

  {
    stateId: "manipur",
    stateName: "Manipur",
    kingdomName: "Sangai-Nata — The Dance of the Floating Deer",
    region: "northeast",
    motto: "The dance is the war. The war is the dance. We do not distinguish.",
    animal: {
      name: "Sangai (Brow-antlered Deer)",
      type: "animal",
      symbolism: "Grace on unstable ground, beauty that defies extinction, the dancer that floats on water"
    },
    bird: {
      name: "Mrs. Hume's Pheasant",
      symbolism: "The hidden jewel — so rare and beautiful that seeing one is considered a blessing"
    },
    hero: {
      name: "Moirangthem",
      title: "The Dancing Warrior",
      epithet: "He Whose Movements Kill and Create in Equal Measure",
      gender: "male",
      age: 28,
      weapon: "Twin Thang-Ta swords — Thang (the sword of attack) and Ta (the sword of defense)",
      tattoo: "Sangai deer mid-dance on the floating phumdi (floating island) of Loktak Lake — across his chest and arms, the deer appears to move when he breathes",
      description: "Artistic, graceful, and — he would admit — vain. Moirangthem has transformed the ancient Manipuri martial art of Thang-Ta into something between combat and ballet. Every strike is choreographed, every dodge is a pirouette, and every kill looks like art. He fights on the floating phumdi islands of Loktak Lake, where the ground moves like water and only a dancer can keep balance.",
      battleCry: "Watch carefully — you will not see this twice."
    },
    villain: {
      name: "Thangjing-Lai",
      title: "The Fallen Dance-God",
      epithet: "He Whose Rhythm Commands the Body Against the Mind",
      gender: "male",
      age: "Ancient — the corrupted spirit of Thangjing, the mountain deity",
      weapon: "No weapon — he dances, and his dance is the weapon. Those who see it are compelled to dance too, moving in patterns that twist their bodies beyond human limits",
      darkPower: "Compulsive rhythm. His dance overrides free will — anyone who hears his footfall or sees his movement begins to dance, and the dance does not stop until the dancer breaks. He can depopulate villages by dancing through them: everyone follows, dancing until their hearts give out.",
      description: "A corrupted aspect of Thangjing — the mountain deity who is the guardian of Manipur. When the Sangai deer were hunted to near-extinction, the deity's grief corrupted his divine dance. What was once a blessing (the cosmic dance of creation) became a curse (the compulsive dance of destruction). He appears as a beautiful dancer with antlers, eyes filled with animal grief.",
      motivation: "Grief for the dying Sangai. He dances the deer's death-dance, and he forces humanity to join — because if the humans experience the Sangai's suffering through their own bodies, perhaps they will understand what extinction means."
    },
    guru: {
      name: "Pakhangba's Vessel",
      title: "The Dragon-Serpent's Human Voice",
      description: "Pakhangba — the dragon-serpent creator deity of Manipur — speaks through a chosen vessel: an elderly Meitei woman who has been in a trance-state for forty years. She has not opened her eyes since the trance began. When she speaks, the ground vibrates with Pakhangba's baritone beneath her human voice.",
      wisdom: "Creation and destruction are the same dance, performed in opposite directions. The question is not whether to dance — it is which direction."
    },
    warriors: [
      { name: "Loktak-Nartaka", title: "The Lake Dancer", specialty: "Fights exclusively on Loktak Lake's floating islands, using the unstable surface as a weapon", loyalty: "hero" },
      { name: "Sangai-Rakshak", title: "The Deer Guardian", specialty: "Protects the last wild Sangai herd, fights anyone who approaches the floating marshes", loyalty: "hero" },
      { name: "Nritya-Mrityu", title: "The Dance of Death", specialty: "Thangjing-Lai's possessed dancer, her body moves against her will in patterns that shatter bone", loyalty: "villain" }
    ],
    saga: {
      title: "The Last Dance of the Sangai",
      narrative: `The Sangai deer dances on water. Not literally — it walks on the phumdi, the floating vegetation mats of Loktak Lake, and its steps are so light that it appears to dance on the lake's surface. There are fewer than 300 Sangai left, and each one dances with the knowledge that it may be the last of its kind.

Moirangthem understands this intimately. His Thang-Ta swordplay is modeled on the Sangai's movements — the delicate steps, the sudden leaps, the way the deer turns its entire body in a single fluid motion. When he fights on the phumdi, with the lake shifting beneath his feet and his swords cutting arcs of light through the mist, it is impossible to tell where the dance ends and the combat begins.

Thangjing-Lai appeared on the night of Lai Haraoba — the festival where Manipuris dance to honor the forest deities. The entire village was dancing when they noticed a figure at the edge of the firelight: tall, antlered, moving with a grace that made even the master dancers freeze in awe. Then the figure stepped into the circle, and the compulsion began.

People danced. They could not stop. The rhythm was not in the music — it was in the air, in the vibration of the earth, in the beating of their own hearts. Moirangthem felt it too — his feet moving before his mind consented, his swords swinging in patterns he had never learned. But his years of Thang-Ta discipline gave him something the villagers lacked: the ability to redirect the compulsion rather than resist it.

He danced toward Thangjing-Lai instead of away, and their duel was the most beautiful thing anyone in Manipur had ever seen. Two dancers — one human, one divine — moving in perfect opposition on the floating islands of Loktak, their steps so light that the water barely rippled. Mrs. Hume's Pheasants, the rarest birds in the region, emerged from hiding to watch — and they do not emerge for anything.

The duel ended in a draw. Thangjing-Lai vanished at dawn (the corrupted dance-god cannot exist in sunlight — only in the twilight between), and the villagers collapsed, alive but exhausted. Three elderly people did not survive the night's dancing.

Moirangthem now trains to resist the compulsion completely — not through force but through mastery. If he can learn the pattern of Thangjing-Lai's dance, he can create a counter-pattern. A dance that un-dances.

His family's secret Sangai breeding program may hold the key: the deer's own movements create a natural counter-rhythm. If the Sangai can be persuaded to dance at the same time as Thangjing-Lai, their pattern — the original, uncorrupted divine dance — may overwrite his corrupted version.

But persuading 300 endangered deer to dance on command requires something Moirangthem has never had: patience. The Sangai dance when they choose. And they are choosing less and less frequently, as if they know their world is ending.

The phumdi float. The lake waits. And somewhere in the mist, antlered shadows move in patterns that are either salvation or destruction, depending on the direction of the dance.`
    }
  },

  {
    stateId: "meghalaya",
    stateName: "Meghalaya",
    kingdomName: "Megha-Maata — The Mother of Clouds",
    region: "northeast",
    motto: "Where the clouds are born, women rule",
    animal: {
      name: "Clouded Leopard",
      type: "animal",
      symbolism: "The forest's mystery — patterned like clouds, invisible in canopy, the perfect predator"
    },
    bird: {
      name: "Hill Myna",
      symbolism: "The voice-keeper — can mimic any sound, carries messages between the living roots"
    },
    hero: {
      name: "Meghanadi",
      title: "Cloud Thunder",
      epithet: "She Whose Voice Echoes in the Wettest Place on Earth",
      gender: "female",
      age: 35,
      weapon: "A bamboo staff called Megha-Dand (Cloud Staff) — can channel lightning from the perpetual storm-clouds above Meghalaya",
      tattoo: "Clouded Leopard coiled in the branches of a living root bridge across her back — half-body mark",
      description: "Commanding, matriarchal, and deeply connected to the living root bridges that define Meghalaya's genius. Meghanadi fights with cloud and water — in the wettest place on Earth, water is never far from her command. Her bamboo staff conducts lightning, and the clouds obey her voice.",
      battleCry: "The clouds have teeth!"
    },
    villain: {
      name: "U Thlen",
      title: "The Devouring Serpent",
      epithet: "He Who Demands Blood for Prosperity",
      gender: "male",
      age: "Ancient — the legendary demon-serpent of Khasi mythology",
      weapon: "No weapon — U Thlen devours. His mouth opens wider than any physical creature should allow, and he swallows warriors whole. Those he does not eat, he corrupts — offering wealth in exchange for the blood of a family member.",
      darkPower: "The U Thlen pact: anyone who feeds U Thlen a drop of human blood receives material wealth in return. The more blood, the more wealth. Entire families have been consumed by this bargain, each member sacrificing the next for gold.",
      description: "In Khasi mythology, U Thlen was a demon-serpent slain by the hero U Suidnoh. But he was not truly killed — he was shattered into pieces, and those pieces were distributed among families who were tempted to keep them. Each piece whispers promises of wealth, and each promise requires blood. U Thlen has reformed, larger than ever, fed by centuries of small sacrifices.",
      motivation: "U Thlen does not want to rule. He wants to feed. He is hunger incarnate — the embodiment of the Khasi warning against sacrificing family for prosperity. He grows with every corrupt bargain, every betrayal, every drop of family blood spilled for gold."
    },
    guru: {
      name: "Ka Blei Synshar",
      title: "The Earth Mother of the Khasi",
      description: "The divine feminine principle of the Khasi people, manifesting through the matrilineal system itself. She does not appear as a single person but as the collective wisdom of every mother in Meghalaya — when Meghanadi needs guidance, every mother in the kingdom speaks the same word simultaneously.",
      wisdom: "The root bridge takes fifty years to grow. U Thlen offers wealth in one night. Choose the bridge."
    },
    warriors: [
      { name: "Root-Weaver", title: "The Bridge Fighter", specialty: "Fights on and with the living root bridges, using the roots as weapons and pathways", loyalty: "hero" },
      { name: "Maw-Shong", title: "The Arrow of Mawsynram", specialty: "Uses monsoon rain as cover for arrow-storms, fights in conditions that blind enemies", loyalty: "hero" },
      { name: "Thlen-Bhakta", title: "The Blood Servant", specialty: "A rich merchant who feeds U Thlen willingly, using wealth to buy armies", loyalty: "villain" }
    ],
    saga: {
      title: "The Serpent and the Root Bridge",
      narrative: `Meghalaya is a matrilineal society. Property passes through the mother. The youngest daughter inherits the ancestral home. Men are respected but women rule. This is not a modern experiment — it is an ancient tradition, and the living root bridges of Meghalaya are its physical proof: structures that take fifty years to grow, planted by grandmothers for grandchildren they will never meet. This is how women build — not for themselves, but for the future.

U Thlen offers a different model. Wealth now. Power now. Blood now.

Meghanadi's battle against U Thlen is not a battle of weapons — it is a battle of timescales. U Thlen thrives in urgency: feed me NOW, sacrifice NOW, prosper NOW. The matriarchal wisdom of Meghalaya operates on generations: plant the root NOW, and your great-granddaughter will have a bridge.

The serpent reformed in the deepest cave of the Jaintia Hills, pieced together from centuries of small sacrifices. A shop-keeper who bled his nephew for a profitable season. A farmer who bled her cousin for a bountiful harvest. Each drop of blood was a scale, and U Thlen's scales number in the millions.

When he emerged, the clouded leopards of Meghalaya — usually invisible, usually silent — screamed from every tree in the canopy. Hill Mynas repeated the scream until the entire forest rang with alarm.

Meghanadi met him at the longest root bridge in Meghalaya — a structure that had been growing for 500 years, planted by a woman whose name no one remembers. The bridge spanned a gorge so deep that clouds formed inside it. U Thlen coiled at one end, his body blocking the passage. His mouth opened, and inside was darkness — not the darkness of a throat, but the darkness of every corrupt bargain ever made.

"Join me," he whispered. "Your matriarchy is beautiful, but it is slow. I can make Meghalaya the richest kingdom in India by morning."

Meghanadi's answer was lightning. Her cloud-staff drew a bolt from the perpetual storm-clouds above, and the bolt struck U Thlen's head — but the serpent's scales, made from human blood, absorbed the electricity. He laughed, and the laugh echoed through the gorge like the sound of bones breaking.

The root bridge itself saved her. Fifty years of growth, five hundred years of patience, channeled through living wood that had never asked for anything and never taken a life. The roots moved. Not fast — roots never move fast — but inevitably. They wrapped around U Thlen's body and held him, not crushing but simply containing, the way a grandmother holds a screaming child.

U Thlen thrashes still. The root bridge holds. And Meghanadi plants new roots every morning, growing the bridge stronger, inch by patient inch.

Her daughter wants to leave Meghalaya for Nagaland. In a matrilineal society, a daughter's departure is not just personal — it is a potential end of the line. Meghanadi must choose between holding her daughter and holding U Thlen.

The clouds gather. The Hill Mynas repeat whatever they hear. And in the gorge, the root bridge grows.`
    }
  },

  {
    stateId: "mizoram",
    stateName: "Mizoram",
    kingdomName: "Tlawmngaihna-Desh — The Land of Self-Sacrifice",
    region: "northeast",
    motto: "If you need it more than I do, it is already yours",
    animal: {
      name: "Serow",
      type: "animal",
      symbolism: "Mountain goat of impossible cliffs, solitary and sure-footed, the guardian of steep places"
    },
    bird: {
      name: "Mrs. Hume's Pheasant",
      symbolism: "The humble beauty — does not display but is beautiful anyway"
    },
    hero: {
      name: "Tlangvala",
      title: "Mountain Guardian",
      epithet: "He Who Cannot Say No",
      gender: "male",
      age: 42,
      weapon: "A bamboo staff-spear called Hnam-Tuk (Nation's Spine) — flexible yet unbreakable, like the Mizo spirit",
      tattoo: "Serow standing on a cliff-edge across his right arm — half-body mark",
      description: "Embodies Tlawmngaihna — the Mizo concept of selfless service that literally translates to 'the inability to refuse help.' Tlangvala cannot say no to anyone who asks for aid, even his enemies. This is both his greatest strength (total selflessness) and his greatest weakness (total vulnerability to exploitation).",
      battleCry: "My spear serves you — whether you asked for its protection or its point."
    },
    villain: {
      name: "Chhinlung-Naag",
      title: "The Serpent of the Cave",
      epithet: "He Who Calls You Back Underground",
      gender: "male",
      age: "Ancient — born from the Mizo origin myth of emerging from a cave called Chhinlung",
      weapon: "The cave itself — he can open the earth, creating sinkholes that swallow people back into the underground world they emerged from",
      darkPower: "Can invoke the primal fear of being buried alive. His presence makes the ground feel unstable — people lose balance, walls seem to close in, the sky feels like a ceiling about to fall. In his presence, agoraphobia becomes claustrophobia.",
      description: "The Mizo people believe they emerged from a cave called Chhinlung at the dawn of time. Chhinlung-Naag is the cave's guardian — the serpent who never wanted humanity to leave. He has waited at the cave's mouth for millennia, calling people back into the darkness they were born from.",
      motivation: "Believes humanity's emergence from the cave was a mistake. The surface world has brought only suffering — wars, famines, exploitation. The underground was safe, warm, and eternal. He calls the Mizo people home with a voice that sounds like their own mothers."
    },
    guru: {
      name: "Pu Vangchhia",
      title: "The Ancient Prophet",
      description: "The legendary Mizo prophet who foretold the coming of the British, the conversion to Christianity, and the independence of India — centuries before they happened. His spirit appears in the bamboo groves as a pattern of swaying stalks that spell out warnings.",
      wisdom: "Tlawmngaihna is not weakness. The bamboo bends in every storm and stands after every wind. The oak that refuses to bend is the oak that breaks."
    },
    warriors: [
      { name: "Bamboo-Spear", title: "The Green Fighter", specialty: "Uses living bamboo as an endless supply of weapons — snaps stalks mid-combat for fresh spears", loyalty: "hero" },
      { name: "Mautam-Survivor", title: "The Famine Warrior", specialty: "Trained during the Mautam bamboo famine, can fight for days without food or water", loyalty: "hero" },
      { name: "Chhinlung-Bhakta", title: "The Cave's Devotee", specialty: "Has accepted Chhinlung-Naag's call, can move through solid earth like water", loyalty: "villain" }
    ],
    saga: {
      title: "The Man Who Could Not Refuse",
      narrative: `Tlawmngaihna is Mizoram's gift to the world — a concept so beautiful that it has no exact translation. It means: the instinct to help, even when helping costs you. The inability to walk past suffering. The compulsion to sacrifice comfort for another's survival. Every Mizo child learns it. Tlangvala was born already knowing it.

His wife died during the Mautam — the bamboo famine that comes every 48 years when all the bamboo flowers simultaneously, attracting rats that devour the crop. Tlangvala could have saved his family's grain store. But when his neighbors came asking for rice, he could not refuse. When strangers came asking for shelter, he could not refuse. His wife, weakened by giving away her own portions, died holding a bowl of rice she had hidden for their children — and even that, the children gave to a hungry stranger at the door.

The cruelty of Tlawmngaihna is this: it can be exploited. And Chhinlung-Naag knows it.

The serpent does not attack Mizoram with armies. He attacks with need. He sends people to Tlangvala's door — women with babies, elderly men with empty stomachs, children with hollow eyes. Each one is a projection, a psychic mirage drawn from the cave's memory of every hungry person who ever lived. And Tlangvala helps each one, because he cannot refuse, and each one takes a little more of his strength.

His son wants to leave the mountains for the plains, where Tlawmngaihna is not a cultural mandate but a personal choice. "You are being eaten alive, Father," the boy says. "You give everything and keep nothing. This is not service — it is self-destruction."

Tlangvala knows his son is right. But knowing does not change the compulsion. The serow stands on impossible cliffs because it was made for cliffs. Tlangvala serves because he was made for service.

The Battle of the Cave Mouth was fought at the legendary Chhinlung entrance — a cave in the earth so deep that sound enters but does not return. Chhinlung-Naag emerged as a serpent the width of a river, speaking in the voices of every dead Mizo ancestor, calling the people home to the underground where there is no hunger, no loss, and no need for Tlawmngaihna because there is no need for anything.

Tlangvala fought the serpent with his bamboo staff and lost. Not because he was weaker — because the serpent asked him for mercy, and he could not refuse.

Pu Vangchhia's spirit-pattern in the bamboo spells a warning: the next time Chhinlung-Naag asks for mercy, the correct answer is not yes. The correct answer is the bamboo's answer — bend, absorb, and spring back.

Tlangvala trains with bamboo now, learning its secret: you can give everything and still return to your original shape.

If you are made of the right material.`
    }
  },

  {
    stateId: "nagaland",
    stateName: "Nagaland",
    kingdomName: "Dzukou-Rashtra — The Valley Kingdom",
    region: "northeast",
    motto: "We were warriors before we were named. We will be warriors after names are forgotten.",
    animal: {
      name: "Gayal (Mithun)",
      type: "animal",
      symbolism: "Wealth, ceremony, the sacred cattle that binds tribe to tribe"
    },
    bird: {
      name: "Blyth's Tragopan",
      symbolism: "The horned pheasant — rare, fierce, and wearing its heart's fire as plumage"
    },
    hero: {
      name: "Dzulevira",
      title: "The Valley Spirit",
      epithet: "She Who Carries the Dao and the Dream",
      gender: "female",
      age: 34,
      weapon: "Traditional Naga dao (machete-sword) called Dzukou and a woven shield — the dao was her grandmother's",
      tattoo: "Gayal with traditional Naga geometric patterns on its hide, across her entire body — full-body mark achieved without a single kill",
      description: "Fierce as a headhunter, gentle as the morning lily in the Dzukou Valley. Dzulevira bridges the gap between Nagaland's warrior past and its peaceful present. She earned the full-body mark not through killing but through something the Hulmane-The-Saga had never seen before: uniting all sixteen Naga tribes under one council for the first time in recorded history.",
      battleCry: "Sixteen tribes! One voice!"
    },
    villain: {
      name: "Ao-Rakshas",
      title: "The Headhunter's Ghost",
      epithet: "He Who Wears the Skulls of the Old Way",
      gender: "male",
      age: "Ancient — the collective ghost of every headhunter who died believing the old way was right",
      weapon: "A necklace of human skulls that grants the skills of each skull's original owner — a different fighting style for each head taken",
      darkPower: "Can resurrect the headhunting frenzy in any Naga warrior. A touch from his skull-necklace reactivates ancestral warrior instincts — the urge to take heads, to prove masculinity through killing, to earn status through death rather than life. In his presence, centuries of progress toward peace begin to unravel.",
      description: "Not a single ghost but an aggregate — the accumulated rage and pride of every Naga warrior who was told his way of life was barbaric. Headhunting was, for centuries, the central cultural practice of the Naga tribes. Its abolition was necessary, but it left a wound: generations of warriors who were told their grandfathers were savages. Ao-Rakshas is that wound, walking.",
      motivation: "Wants the return of the old ways — not because he believes in headhunting, but because he believes the old ways gave the Naga people identity, purpose, and respect. The modern world, he argues, has traded skulls for poverty and tradition for shame."
    },
    guru: {
      name: "Liyaba",
      title: "The First Naga Peace-Warrior",
      description: "The legendary warrior-saint who was the first to lay down his dao and declare that courage did not require killing. He was killed for it — by his own tribe — and his spirit walks the Dzukou Valley, covering the hillsides with lilies each spring as proof that beauty grows from the soil where blood was shed.",
      wisdom: "The dao can take a head. But only an open hand can receive the wisdom that head contained."
    },
    warriors: [
      { name: "Hornbill-Naga", title: "The Festival Warrior", specialty: "Fights in full Hornbill Festival regalia — the ceremonial dress is actual armor, decorated with ancestral power", loyalty: "hero" },
      { name: "Morung-Master", title: "The Youth Hall Champion", specialty: "Trained in the morung (traditional youth dormitory) from age six, masters all sixteen tribal fighting styles", loyalty: "hero" },
      { name: "Skull-Bearer", title: "The Revenant Warrior", specialty: "Ao-Rakshas' champion, each skull on his belt grants a different tribe's combat technique", loyalty: "villain" }
    ],
    saga: {
      title: "The Dao and the Dream",
      narrative: `Nagaland's history is written in headhunting tattoos. Before the missionaries came, before the British drew borders, the Naga tribes measured a man's worth by the heads on his wall. Each head was a battle won, a village defended, a youth's passage into adulthood. The tattoos recorded these achievements — and to this day, the oldest Naga elders carry facial tattoos that are maps of kills they made in their youth.

Dzulevira's father wanted a son. He wanted a warrior who would carry the dao and the skull-necklace. He got a daughter instead — and Dzulevira spent her first twenty years proving that a daughter could carry the dao better than any son. She mastered all sixteen tribal fighting styles, learned the ancient art of head-taking (in theory, never in practice), and became the finest warrior in Nagaland.

Then she did something no warrior had done before: she refused to kill.

Her full-body tattoo — the gayal in geometric Naga patterns covering her from neck to ankle — was granted not by the tattoo council but by the tattoo itself. It appeared overnight, the night she united the sixteen tribes. For the first time, Ao, Angami, Konyak, Sema, Lotha, Chakhesang, Rengma, Zeliang, Chang, Khiamniungan, Yimchunger, Sangtam, Pochury, Phom, Kuki, and Zeme-Liangmai representatives sat in one council and spoke as one.

Ao-Rakshas watched this unity and seethed. Unity through peace meant the death of the old warrior identity. If the Nagas no longer take heads, what are they? Farmers? Office workers? The ghost of every headhunter who died proud screamed in protest.

His first strike was subtle. He touched a young Konyak warrior's shoulder at the Hornbill Festival, and the young man felt something ancient surge through him — the urge to fight, to take, to prove. The warrior attacked a rival tribe's dancer, and the ensuing brawl nearly destroyed the festival.

Dzulevira stopped it by standing between the two groups, dao sheathed, arms open. She took a blow meant for someone else — and did not retaliate. The shock of a full-body-marked warrior choosing to bleed rather than fight broke the frenzy.

Her father, watching from the crowd, finally understood. His daughter had not rejected the warrior way — she had evolved it. Taking a head proves you can kill. Taking a blow proves you can endure. The second requires more courage.

Ao-Rakshas retreated to the Saramati peak, where the skull-trees grow — trees draped with the skulls of ancient kills, each one whispering the pride of the old ways. He is building an army of ghosts — warriors who died believing their way was right, and who will fight to prove it.

Dzulevira sharpens her dao each evening. She has never used it on a person. She hopes she never will. But the Dzukou Valley lilies are blooming late this year, and Liyaba's ghost walks with heavier steps.

The old ways do not die easily. They haunt.`
    }
  },

  {
    stateId: "sikkim",
    stateName: "Sikkim",
    kingdomName: "Beyul-Kshetra — The Hidden Sacred Land",
    region: "northeast",
    motto: "The five treasures of Kanchenjunga are not gold. They are salt, grain, weapons, medicine, and scripture.",
    animal: {
      name: "Red Panda",
      type: "animal",
      symbolism: "Gentle power, the smiling warrior, proof that fierceness and tenderness live in the same body"
    },
    bird: {
      name: "Blood Pheasant",
      symbolism: "Red as sacrifice, found only at extreme altitudes, the bird that bleeds color into the snow"
    },
    hero: {
      name: "Kanchenjunga",
      title: "The Five Treasures",
      epithet: "He Who Achieved the Full Mark Without Drawing Blood",
      gender: "male",
      age: 45,
      weapon: "A prayer wheel mace called Chintamani (Wish-Fulfilling Jewel) — spins with mantras that create force-fields of spiritual energy",
      tattoo: "Red Panda sitting peacefully on a snow-covered branch, surrounded by the five treasures of Kanchenjunga — full-body mark, the only one achieved through compassion alone",
      description: "The gentlest hero in the entire Hulmane-The-Saga and possibly the most powerful. Kanchenjunga has never killed. His prayer wheel mace generates force-fields that protect rather than destroy, and his fighting style redirects aggression rather than matching it. He is a Buddhist monk who became a warrior by accident and a hero by necessity.",
      battleCry: "(He does not have one. He chants Om Mani Padme Hum, and somehow that is more terrifying.)"
    },
    villain: {
      name: "Yaksha-Nidhi",
      title: "The Treasure Thief",
      epithet: "He Who Steals What Mountains Hide",
      gender: "male",
      age: 39,
      weapon: "A set of five enchanted tools — each one designed to extract one of Kanchenjunga's five treasures (salt, grain, weapons, medicine, and scripture)",
      darkPower: "Can sense hidden things. Nothing remains concealed from him — buried treasures, secret passages, hidden emotions, suppressed memories. He extracts not just physical treasures but psychic ones, leaving his victims feeling empty and robbed of something they cannot name.",
      description: "A mountaineer who summited Kanchenjunga despite the Sikkimese taboo against touching the peak (it is sacred, and climbers traditionally stop a few feet short in respect). He touched the summit, and Kanchenjunga's guardian spirits cursed him with an insatiable need to take. He has been stealing ever since — treasures, secrets, peace of mind — and each theft makes the mountain a little less sacred.",
      motivation: "The curse has merged with the man. He no longer knows if he steals because he wants to or because the curse compels him. All he knows is the emptiness — a void where the mountain's blessing should have been, which can only be temporarily filled by taking from others."
    },
    guru: {
      name: "Guru Padmasambhava's Footprint",
      title: "The Lotus-Born's Last Step",
      description: "At a remote monastery in Sikkim, there is a rock bearing the footprint of Guru Padmasambhava — the sage who brought Buddhism to the Himalayas. The footprint speaks to those who meditate upon it, offering guidance in a language that bypasses the ears and enters the heart directly.",
      wisdom: "The thief steals objects. The monk gives them away. Both end with empty hands. Only one ends with a full heart."
    },
    warriors: [
      { name: "Tashi-Namgyal", title: "The Peaceful Shield", specialty: "Fights defensively using Buddhist philosophy — redirects force without generating it", loyalty: "hero" },
      { name: "Snow-Lion Guard", title: "The Kanchenjunga Sentinel", specialty: "Guards the approaches to the sacred peak, fights in impossible altitude conditions", loyalty: "hero" },
      { name: "Nidhi-Chor", title: "The Treasure Seeker", specialty: "Yaksha-Nidhi's scout, can sense hidden things at a distance and map their location", loyalty: "villain" }
    ],
    saga: {
      title: "The Monk, the Mountain, and the Thief",
      narrative: `Kanchenjunga is not just a mountain. It is a deity, a promise, and a warning. The third-highest peak in the world holds five treasures in its five peaks — salt, grain, weapons, medicine, and scripture — and the Sikkimese believe that revealing these treasures would bring either salvation or apocalypse, depending on the world's worthiness.

The hero who bears the mountain's name is its human reflection: five virtues in one body. Kanchenjunga the man entered a monastery at age eight and was expected to spend his life in meditation. Instead, the world came to him — in the form of a red panda.

The panda appeared at the monastery door during a blizzard, carrying in its mouth a scroll that had been missing from the monastery's library for a century. The scroll contained a prophecy: "When the mountain's treasure is threatened, the mountain's peace must become a weapon."

Kanchenjunga did not want to be a weapon. He was a monk. He wanted tea and sutras and the sound of prayer bells in the morning mist. But the red panda stayed at his side, and its eyes — amber, ancient, knowing — told him that gentleness itself could be the weapon.

His prayer wheel mace was not forged — it grew. The monastery's prayer wheels, spun by wind and water for centuries, accumulated spiritual energy so dense that the metal warped. Kanchenjunga shaped the warped metal into a mace, and when he spun it, the mantras embedded in the metal created barriers of force that nothing could penetrate.

He has never struck anyone with it. He has only ever defended.

Yaksha-Nidhi came to Sikkim seeking the five treasures. He had already taken the salt — extracting it from a sacred lake in a single night. He had taken the grain — the special rice that grows only in Sikkim's terraced fields, stealing the entire genetic stock. He was reaching for the weapons — the celestial arms hidden in Kanchenjunga's third peak — when the monk appeared.

The confrontation was not violent. Kanchenjunga stood on the mountain path, prayer wheel spinning, and asked: "What are you looking for?"

"The treasures," Yaksha-Nidhi answered.

"Why?"

"Because they are hidden, and hidden things call to me."

"What if they are hidden to protect you, not from you?"

This question stopped the thief. Not because it was wise — Yaksha-Nidhi had heard wisdom before and ignored it — but because it was the first time anyone had suggested that the treasures' concealment might be an act of compassion rather than hoarding.

He left without the weapons. But he will be back. The Blood Pheasants — those red-feathered birds that live only at extreme altitudes — have been seen descending to lower ground, a sign that something is disturbing the mountain's upper reaches.

Kanchenjunga's mother has been waiting thirty-seven years for her son to leave the monastery and come home. He sends her letters carried by red pandas. She reads them, folds them into prayer flags, and hangs them in the wind.

The wind carries the prayers to the mountain. The mountain holds its treasures. The monk holds his prayer wheel.

And somewhere between the monastery and the summit, a thief with empty hands sits on a rock, trying to understand why emptiness no longer satisfies him.`
    }
  },

  {
    stateId: "tripura",
    stateName: "Tripura",
    kingdomName: "Tri-Pura — The Triple Fortress",
    region: "northeast",
    motto: "Three cities, three walls, three chances — and we need only one",
    animal: {
      name: "Phayre's Langur",
      type: "animal",
      symbolism: "The spectacled sage of the forest, gentle observer, the primate that watches before it acts"
    },
    bird: {
      name: "Green Imperial Pigeon",
      symbolism: "The emerald courier — carries messages through the triple canopy"
    },
    hero: {
      name: "Tripurari",
      title: "The Three Cities' Conqueror",
      epithet: "He Who Builds What Others Say Cannot Be Built",
      gender: "male",
      age: 33,
      weapon: "A mechanical crossbow called Triyantra (Triple Engine) — fires three bolts simultaneously, each from a different mechanism, making it impossible to dodge all three",
      tattoo: "Phayre's Langur observing from a tree, wearing spectacles made of gears — across his left arm, leg mark",
      description: "Engineer-warrior-inventor. Tripurari fights not with raw strength but with machines, gadgets, and an intellect that sees every battlefield as a physics problem. His crossbow is just the most visible of his creations — he has also built defensive walls that repair themselves, bridges that retract, and a communication system based on the Green Imperial Pigeon's flight patterns.",
      battleCry: "The equation balances — in our favor!"
    },
    villain: {
      name: "Tripura-Asura",
      title: "The Demon of Three Cities",
      epithet: "He Who Was Ancient When the Gods Were Young",
      gender: "male",
      age: "Mythological — the demon Tripurasura reborn",
      weapon: "Three flying fortresses — remnants of the original Tripura (three flying cities) that Shiva destroyed with a single arrow. They have been rebuilt, smaller but still deadly, as armored aerial platforms.",
      darkPower: "When all three fortresses align — which happens once every seven years — their combined power can fire a beam of concentrated energy equal to Shiva's arrow. Tripura-Asura missed the last alignment. He will not miss the next.",
      description: "In Hindu mythology, the three Asura brothers built three flying cities — gold, silver, and iron — that were indestructible except when aligned. Shiva destroyed them with a single cosmic arrow. But destruction, in the world of the Hulmane-The-Saga, is never permanent. The cities have reformed, and the demon who commanded them has returned — this time, as an engineer.",
      motivation: "Wants to prove that engineering can surpass divinity. If a demon's machine-city can withstand a god's arrow, then gods are obsolete. He is the ultimate technologist — the villain who believes invention, not prayer, is the path to immortality."
    },
    guru: {
      name: "Maharaja's Ghost",
      title: "The Last King's Whisper",
      description: "The spirit of Tripura's last independent king, who walks the palace halls at midnight, offering advice on governance and defense. He has watched Tripurari grow from a tinkering child to an engineer-warrior, and he offers one piece of advice repeatedly: 'The bridge my enemy sabotaged was not weak — I trusted the wrong engineer. Trust the right one.'",
      wisdom: "Three walls are only as strong as the weakest builder. But three builders working as one are stronger than any wall."
    },
    warriors: [
      { name: "Yantra-Sena", title: "The Machine Corps", specialty: "Soldiers equipped with Tripurari's inventions — crossbow-arms, telescopic eyes, armor-plated shields", loyalty: "hero" },
      { name: "Langur-Scouts", title: "The Canopy Watch", specialty: "Use trained Phayre's Langurs as scouts, the langurs' superior observation detects what humans miss", loyalty: "hero" },
      { name: "Tri-Daitya", title: "The Three Pilots", specialty: "Tripura-Asura's three fortress-pilots, each controlling one of the flying cities", loyalty: "villain" }
    ],
    saga: {
      title: "The Engineer and the Flying Cities",
      narrative: `Tripura means "Three Cities," and the state has never forgotten it. In mythology, the three flying cities of the Asuras — one of gold, one of silver, one of iron — circled the earth like mechanical moons, invincible until Shiva pierced all three with a single arrow at the precise moment of their alignment.

Tripurari grew up on this story and asked the question no one else thought to ask: "If the cities were destroyed by alignment, could they be rebuilt to avoid alignment?"

He was twelve. He had already built a working model of the three cities from bamboo and string. By twenty, he had rebuilt the city's ancient water-wheel system using modern engineering principles. By thirty, he had invented the Triyantra crossbow and the self-repairing wall technology that makes Tripura's borders the most secure in the Northeast.

Tripura-Asura returned because of Tripurari — specifically, because Tripurari's engineering genius sent a signal into the mythological realm that someone was rebuilding what Shiva had destroyed. The demon sensed a kindred spirit: another engineer, another builder, another mind that believed creation was greater than destruction.

But where Tripurari builds defenses, Tripura-Asura builds weapons. The three flying cities he has reconstructed are smaller than their mythological originals — about the size of large boats, not actual cities — but their alignment beam is still devastating. A test-firing leveled a hilltop. The Green Imperial Pigeons that nested on that hill scattered across three states, carrying the warning.

Tripurari's response was characteristically analytical. He calculated the alignment cycle, mapped the fortresses' flight patterns, and designed a countermeasure: three grounded towers that, when the fortresses align, create a counter-frequency that disrupts the beam. The engineering is sound. The problem is time.

The next alignment is in three months. The towers are only half-built. And Tripura-Asura, learning from mythological mistakes, has begun varying his flight patterns to prevent prediction.

The Maharaja's Ghost walks the construction site at midnight, checking the foundations. "My bridge fell because I trusted the wrong engineer," he repeats. "You are the right engineer. But the question is whether you are building fast enough."

Tripurari's father was disgraced by a bridge collapse that killed seventeen people. Tripurari has spent his life proving it was sabotage — and he now suspects Tripura-Asura was the saboteur, testing Tripura's engineering resilience centuries before revealing himself.

The Phayre's Langurs watch from the canopy with their spectacled eyes, tracking the flying fortresses' movements and reporting to the Langur-Scouts. The langurs have noticed something Tripurari hasn't: the fortresses' flight paths are spelling something in the sky.

When decoded, the message reads: "One arrow destroyed three cities. What destroys one engineer?"

Tripurari does not know the answer. He is building anyway.`
    }
  },

  // ═══════════════════════════════════════════════════════════
  // MADHYADESA — THE CENTRAL KINGDOMS
  // ═══════════════════════════════════════════════════════════

  {
    stateId: "madhya-pradesh",
    stateName: "Madhya Pradesh",
    kingdomName: "Hridaya-Sthana — The Heartland",
    region: "central",
    motto: "Hold the center, and the edges cannot fall",
    animal: {
      name: "Barasingha",
      type: "animal",
      symbolism: "The twelve-pointed crown, natural royalty, the swamp-king who rules without roaring"
    },
    bird: {
      name: "Asian Paradise Flycatcher",
      symbolism: "White-tailed grace, the bird that catches beauty in flight"
    },
    hero: {
      name: "Dvadashashringa",
      title: "The Twelve-Antlered",
      epithet: "He Who Sees Twelve Moves Ahead",
      gender: "male",
      age: 44,
      weapon: "A twelve-pronged staff called Dwadash (Twelve) — each prong represents a different strategic principle, and each can be deployed independently",
      tattoo: "Barasingha standing in a marsh, antlers spreading like a tree's branches across his chest — full-body mark",
      description: "A chess master on the battlefield. Dvadashashringa never charges, never panics, and never makes a move without having calculated twelve consequences in advance. His patience is legendary — he once waited three weeks in an ambush position without moving, eating only what fell within arm's reach, until his target arrived. He leads from the center of India and sees every conflict as a game of strategy.",
      battleCry: "Twelve points. Twelve moves. Twelve certainties."
    },
    villain: {
      name: "Naimisha-Naag",
      title: "The Serpent of the Sacred Forest",
      epithet: "He Who Corrupts the Heart of India",
      gender: "male",
      age: "Ancient — born in the Naimisharanya forest where the Mahabharata was first told",
      weapon: "A venomous philosophical argument — literally. His words carry poison; those who listen too long begin to doubt everything they believe, lose all conviction, and become paralyzed by indecision",
      darkPower: "Intellectual corruption. He does not attack bodies — he attacks beliefs. In his presence, heroes question their heroism, lovers question their love, and leaders question their right to lead. He is the snake in the garden of certainty.",
      description: "Naimisharanya is the sacred forest where Sage Ugrasravas first recited the Mahabharata. The Serpent of this forest has been listening to that story for millennia and has reached a conclusion: the Mahabharata proves that heroism is futile. The heroes won, but at what cost? Everything they loved was destroyed. The villain's logic: why fight at all?",
      motivation: "Nihilistic pacifism taken to its extreme. He does not want to conquer or destroy — he wants everyone to stop trying. Stop fighting, stop building, stop hoping. Because, he argues with devastating eloquence, every epic ends in ash."
    },
    guru: {
      name: "Bhimbetka Rishi",
      title: "The Cave Sage Who Reads Prehistoric Paintings",
      description: "In the Bhimbetka caves, prehistoric paintings depict hunts, dances, and battles from 30,000 years ago. The Bhimbetka Rishi has spent his entire life in these caves, and he claims the paintings are not historical records but prophecies — depicting not what happened but what will happen. He reads the future from paintings made before the concept of 'future' existed.",
      wisdom: "Thirty thousand years ago, a painter drew a warrior fighting a serpent. We thought it was history. It was a warning."
    },
    warriors: [
      { name: "Sanchi-Rakshak", title: "The Stupa Guardian", specialty: "Guards the Great Stupa of Sanchi, fights using the circular dharma-wheel as both shield and weapon", loyalty: "hero" },
      { name: "Chambal-Daaku", title: "The Ravine Raider", specialty: "Former bandit turned warrior, knows every hidden ravine and escape route in the Chambal Valley", loyalty: "hero" },
      { name: "Naimisha-Bhakta", title: "The Doubt Disciple", specialty: "Naimisha-Naag's student, spreads philosophical doubt through persuasion and debate", loyalty: "villain" },
      { name: "Paradise-Catcher", title: "The Flycatcher's Eye", specialty: "Has bonded with the Asian Paradise Flycatcher, can see beauty and truth in any situation — cutting through the serpent's doubt", loyalty: "hero" }
    ],
    saga: {
      title: "The Twelve-Move War",
      narrative: `Madhya Pradesh is the heart of India — geographically, historically, and strategically. Control the center and you control the continent. Lose the center and the edges tear themselves apart. Dvadashashringa understands this with every fiber of his being, because the barasingha — the twelve-antlered deer that gives him his name — is the king of the swamp, and the swamp is the center of the forest.

His twelve-pronged staff is not merely a weapon — it is a calculating machine. Each prong represents a strategic principle: patience, misdirection, sacrifice, encirclement, retreat, advance, alliance, betrayal-prevention, supply, morale, terrain, and timing. In battle, he rotates the staff so that the relevant prong faces forward, announcing his current strategy to those who can read the language of war.

Naimisha-Naag does not fight with weapons. He fights with words, and his words are more devastating than any blade.

The first time Dvadashashringa faced the Serpent, it was not in battle but in conversation. The Naag appeared at the edge of the Naimisharanya forest — a shimmering, enormous serpent with a human voice that carried the cadence of every story ever told.

"You are a chess master," the Serpent said. "Tell me — what is the point of winning a game?"

"To protect what you value," Dvadashashringa replied.

"And what do you value?"

"My kingdom. My people. The center."

"And when you die, what happens to your kingdom, your people, your center?"

"Someone else protects them."

"And when they die?"

Dvadashashringa felt the first breath of the Serpent's venom — not in his body but in his mind. Doubt. The recognition that every kingdom falls, every center collapses, every chess game ends. The Mahabharata's heroes won — and then they all died, and then everything they built crumbled.

The Asian Paradise Flycatcher — the white-tailed bird of extraordinary grace — landed on Dvadashashringa's shoulder and sang a note so pure that the doubt shattered like glass.

The bird sees beauty in everything. Where the Serpent sees futility in the cycle of rise-and-fall, the Flycatcher sees beauty. The hero rises not because it lasts, but because it is beautiful to rise.

Dvadashashringa understood. He cannot defeat the Serpent with logic — the Serpent's logic is flawless. He can only defeat it with purpose: the decision that some things are worth doing even though they end.

The war between them is fought in the Naimisharanya forest, where the Mahabharata was first spoken. It is a war of words, moves, and counter-moves — a chess game played with ideas instead of pieces. Dvadashashringa moves twelve moves ahead. The Serpent whispers: "And after the twelfth move, what then?"

The Bhimbetka cave paintings, 30,000 years old, show this exact scene: a twelve-antlered deer facing a serpent in a forest. The Rishi says the painting shows who wins.

He has not said who.`
    }
  },

  {
    stateId: "chhattisgarh",
    stateName: "Chhattisgarh",
    kingdomName: "Dandakaranya — The Punished Forest",
    region: "central",
    motto: "The forest does not negotiate. Neither do we.",
    animal: {
      name: "Wild Buffalo",
      type: "animal",
      symbolism: "Untameable strength, the charge that does not stop, the last truly wild bovine"
    },
    bird: {
      name: "Hill Myna",
      symbolism: "The mimic who speaks truth — repeats what it hears, and what it hears in the forest is raw and real"
    },
    hero: {
      name: "Dandakarni",
      title: "The Forest Fury",
      epithet: "She Who Is Half Woman, Half Jungle",
      gender: "female",
      age: 29,
      weapon: "A war hammer called Vana-Garjana (Forest Thunder) — forged from the iron ore that runs through Chhattisgarh's sacred soil",
      tattoo: "Wild Buffalo in full charge across her torso, horns rising to her shoulders — half-body mark, the buffalo appears to breathe when she does",
      description: "Unapologetically feral. Dandakarni was raised by the forest — not metaphorically. Abandoned as an infant (or perhaps offered), she was found by a tribal family at the edge of the Dandakaranya forest, living among wild buffalo calves. She fights like a buffalo charges: head down, no retreat, no mercy, no strategy beyond overwhelming force. She is terrifying, magnificent, and completely untameable.",
      battleCry: "THE FOREST CHARGES! (screamed while running at full speed)"
    },
    villain: {
      name: "Loh-Rakshasa",
      title: "The Iron Demon",
      epithet: "He Who Bleeds the Earth for Steel",
      gender: "male",
      age: 50,
      weapon: "An enormous mining excavator-arm grafted to his body — called Loha-Hasta (Iron Hand). It can lift tons and crush stone.",
      darkPower: "Can call iron from the earth. Wherever he stands, iron ore rises to the surface, breaking through soil and root and rock. In Chhattisgarh, where the earth is rich with iron, this power turns every step into an excavation.",
      description: "The industrial counterpart to Dandakarni's primal wildness. Loh-Rakshasa was the chief engineer of a massive mining operation that discovered the richest iron deposit in Indian history — directly beneath Chhattisgarh's most sacred tribal forest. He chose the iron over the trees, and when the earth opened at his command, something opened in him too: a hunger for metal that consumed his humanity piece by piece.",
      motivation: "Genuinely believes that iron is more valuable than forest. Not out of greed — out of a skewed utilitarianism that values infrastructure, buildings, and bridges over ecosystems. His tragedy is that he can build a city but cannot understand why the forest matters."
    },
    guru: {
      name: "Vanvasi Mata",
      title: "The Forest Mother",
      description: "The oldest woman in Chhattisgarh's deepest forest, who has lived among the Bastar tribals for so long that she has become part of the ecosystem. Trees grow around her hut, roots enter through her windows, and animals sleep on her floor. She does not distinguish between the human community and the forest community — they are one.",
      wisdom: "The iron in your blood is the same iron in the earth. To mine the earth is to mine yourself."
    },
    warriors: [
      { name: "Bastar-Veera", title: "The Tribal Fury", specialty: "Fights with traditional tribal weapons — bow, axe, and war-drums that disorient enemies", loyalty: "hero" },
      { name: "Chitrakote", title: "The Waterfall Warrior", specialty: "Uses the force of Chitrakote Falls (India's Niagara) as a weapon, fighting in the spray zone", loyalty: "hero" },
      { name: "Loh-Sena", title: "The Iron Army", specialty: "Loh-Rakshasa's workers turned warriors, wearing iron-ore armor and wielding mining tools as weapons", loyalty: "villain" },
      { name: "Myna-Vakta", title: "The Truth Speaker", specialty: "A Hill Myna-bonded warrior who repeats everything the enemy says back to them, causing psychological confusion", loyalty: "hero" }
    ],
    saga: {
      title: "Blood and Iron",
      narrative: `Chhattisgarh's forests are ancient beyond measure. The Dandakaranya — the Punished Forest of Ramayana fame, where Rama wandered in exile — stretches across the state like a green lung breathing for the entire subcontinent. The tribal people of Bastar have lived here since before history began keeping records, and their relationship with the forest is not stewardship — it is kinship.

Dandakarni was found at the forest's edge by a Gond tribal family. She was perhaps two years old, covered in mud, sitting among wild buffalo calves with the calm expression of a child who has been exactly where she belongs. No one knew where she came from. The tribal elders said the forest had made her. Looking at how she fights — with the raw, unstoppable fury of a wild buffalo charge — they may be right.

The wild buffalo tattoo appeared on her chest the first time she defended the forest. Miners had come with machines and documents, and the tribal leaders had signed papers they could not read. Dandakarni did not sign anything. She charged the lead excavator, war hammer swinging, and the impact crumpled the machine's arm like paper. She was sixteen.

Loh-Rakshasa took notice. Here was a force that could not be bought, reasoned with, or ignored. He came to the forest himself — a massive man with his excavator-arm grafted to his right shoulder, walking through the trees like a monster from the industrial age invading the age of nature.

Their first battle — at the edge of the Indravati River — lasted eleven hours. The earth itself seemed to take sides: where Dandakarni stood, roots rose to trip the Iron Demon. Where Loh-Rakshasa walked, iron ore burst from the ground like teeth. The river ran red — not with blood, but with iron oxide disturbed from the riverbed.

Her brother — her actual brother, blood-kin, raised in the same tribal village — defected to Loh-Rakshasa's side, believing that mining could bring prosperity to the impoverished tribals. They have fought twice since then. Both times ended in draws, because neither sibling can bring themselves to deliver the final blow.

The Hill Mynas of Chhattisgarh have been repeating a single phrase throughout the forest, a phrase they heard from Vanvasi Mata: "The iron in your blood is the same iron in the earth." No one knows if the mynas understand what they're saying. But the forest listens, and the wild buffalo raise their heads when they hear it, and the tribal drums beat a rhythm that sounds like a heartbeat — the heartbeat of a forest that refuses to be mined.

Dandakarni's war hammer rings against Loh-Rakshasa's iron arm, and the sound echoes through the Dandakaranya like the forest's own war cry. The trees lean toward the sound. They are listening.

They have been listening for millennia. And they are not patient anymore.`
    }
  }
];

// ============================================================
// HELPER: Get all kingdoms for a region
// ============================================================
function getKingdomsByRegion(region) {
  return STATE_KINGDOMS.filter(k => k.region === region);
}

// ============================================================
// HELPER: Get a single kingdom by stateId
// ============================================================
function getKingdom(stateId) {
  return STATE_KINGDOMS.find(k => k.stateId === stateId);
}

// ============================================================
// HELPER: Get all villains
// ============================================================
function getAllVillains() {
  return STATE_KINGDOMS.map(k => ({
    state: k.stateName,
    kingdom: k.kingdomName,
    ...k.villain
  }));
}

// ============================================================
// HELPER: Get all gurus
// ============================================================
function getAllGurus() {
  return STATE_KINGDOMS.map(k => ({
    state: k.stateName,
    kingdom: k.kingdomName,
    ...k.guru
  }));
}

// ============================================================
// REGION CONFIG
// ============================================================
const REGION_CONFIG = {
  south: {
    name: "Dakshinapatha", label: "Southern Kingdoms", color: "#44ff88", icon: "🌊",
    shapeshifter: {
      name: "Daksha-Rupa",
      title: "The Form Weaver",
      epithet: "She Who Wears Five Skins",
      gender: "female",
      age: "Unknown — appears as a different age to each person who meets her",
      description: "Daksha-Rupa is the South's hidden guardian — a being who has mastered an advanced bio-science technology known only as 'The Loom,' developed in a secret facility beneath the Nilgiri hills where ancient Siddha medicine meets cutting-edge genetic engineering. She can shift between the forms of all five southern sacred beasts: the Blackbuck's speed, the Spotted Deer's perception, the Nilgiri Tahr's endurance, the Indian Elephant's strength, and the Great Hornbill's flight. In her true form — which fewer than three people alive have seen — she is a composite: human eyes with deer-spot irises, skin that shifts between scales and fur, fingers that end in hornbill-keratin claws, and the memory of an elephant encoded in every cell.",
      combinedTattoo: "Her tattoo is alive — a shifting mandala that shows different animals depending on which power she channels. When she combines two or more forms, the tattoo bleeds into a hybrid: elephant trunk merging with deer antlers, tahr horns fused with blackbuck legs, hornbill wings growing from an elephant's back. The tattoo is not ink but a bio-reactive substrate that rewrites itself at the cellular level.",
      powers: [
        "Blackbuck Form: Speed beyond human limits, can outrun vehicles, urumi-like tail whips",
        "Spotted Deer Form: Perfect perception, sees through all illusions and deepfakes, thermal and electromagnetic vision",
        "Nilgiri Tahr Form: Mountain endurance, can survive any environment, regenerative healing, immune to poisons",
        "Elephant Form: Devastating strength, sonic trumpeting that shatters structures, impenetrable skin armor",
        "Hornbill Form: Flight, aerial combat, beak that can shatter reinforced steel, canopy-level surveillance",
        "Hybrid Forms: Can combine any two or three forms simultaneously for terrifying chimera transformations"
      ],
      flaws: "Every transformation costs memory. The more she shifts, the more she forgets who she originally was. After a full five-form combination, she loses days of personal memory — faces of loved ones, her own name, the reason she fights. She keeps a journal written in five different handwritings, one for each form, and sometimes the entries contradict each other. There is a growing fear among the southern heroes that one day she will shift and never shift back — trapped as a chimera that remembers nothing of being human.",
      origin: "She was the first successful subject of Project Daksha — a joint initiative between the five southern kingdoms to create a guardian capable of fighting threats that no single hero could face. The Loom technology was reverse-engineered from artifacts found in Tungabhadra's buried temple and Kerala's submerged ruins. Only three subjects survived the bonding process. The other two are classified. The facility beneath the Nilgiris is guarded by the last twelve Nilgiri Tahrs — the same ones that guard Thiruvalluvar's Tablet.",
      inspiration: {
        god: { name: "Vishnu (The Preserver)", parallel: "Like Vishnu who takes ten avatars to preserve the world — each form suited to the crisis of the age — Daksha-Rupa shifts between forms to meet each threat. But Vishnu chooses his avatars; Daksha-Rupa is consumed by hers." },
        mahabharata: { name: "Krishna (The Shape-Shifter)", parallel: "Krishna appeared differently to every person — friend, lover, god, child, diplomat, warrior. Daksha-Rupa similarly wears five faces, and like Krishna, the question of which face is 'real' may have no answer." }
      }
    }
  },
  west: {
    name: "Paschimapatha", label: "Western Kingdoms", color: "#ff8c00", icon: "🏔️",
    description: "The western kingdoms rise from the desert sands of Rajasthan to the volcanic plateaus of Maharashtra, from Gujarat's endless shoreline to Goa's golden coast. These are the kingdoms of merchants and fortress-builders — where the Asiatic lion still stalks the Gir forests, where giant squirrels leap between the fort walls of the Sahyadri ranges, and where the one-horned rhinoceros wades through Deccan rivers. The west has always known that the sea is both threat and opportunity — trade and invasion come from the same horizon.",
    shapeshifter: {
      name: "Paschima-Rupa",
      title: "The Desert Wind",
      epithet: "He Who Walks Between Sand and Sea",
      gender: "male",
      age: "Appears between 25 and 60 — the desert ages him in sunlight, the sea restores him at night",
      description: "Paschima-Rupa is the West's hidden guardian — a desert-wanderer who has mastered the ancient trade routes connecting India's western coast to the Persian Gulf, the Red Sea, and beyond. He channels the four western sacred beasts: the Asiatic Lion's sovereignty, the Giant Squirrel's agility across the Sahyadri forts, the Chinkara's desert endurance, and the Blackbuck's speed across open terrain. He is older than any western kingdom, having witnessed the fall of the Indus Valley civilization and the rise of the Chalukyas. He appears in markets, caravanserais, and battlefields — always seemingly at random, always at the moment of greatest need.",
      combinedTattoo: "His tattoo shifts with the desert light — lion mane at dawn, squirrel fur at midday, chinkara horns at dusk, blackbuck spots at night. Merchants who have seen it describe it as a map of every trade route in the world, animated by the breath of wind.",
      powers: [
        "Lion Form: Command over pride and sovereignty — his roar silences armies",
        "Squirrel Form: Impossible vertical mobility across fort walls and cliff faces",
        "Chinkara Form: Desert survival — can go without water for thirty days, reads sand like a book",
        "Blackbuck Form: Open terrain speed — outruns desert sandstorms on foot"
      ],
      flaws: "Every form he takes ages the others. When he becomes the lion, the squirrel in him grows ancient. He must continuously shift to keep all four aspects alive — and one day, one of them will simply stop waking.",
      origin: "He was the navigator of the last Harappan fleet, preserved by a ritual that bound his life force to the four sacred animals of the western trade routes. He has served every western kingdom that ever rose — and watched every one of them fall."
    }
  },
  east: {
    name: "Purvapatha", label: "Eastern Kingdoms", color: "#44aaff", icon: "🌿",
    description: "The eastern kingdoms are where the Ganges meets the sea — where Bengal tigers and fishing cats haunt the mangrove deltas, where the holy rivers carry both life and memory. West Bengal guards the literary heart of India; Odisha bears temples carved from sandstone; Bihar holds the sacred ground where the Buddha first saw light; Jharkhand protects vast forest kingdoms of the Adivasi peoples. These kingdoms understand that the river is not merely water — it is time itself, flowing endlessly toward the ocean of all stories.",
    shapeshifter: {
      name: "Purva-Rupa",
      title: "The Delta Dreamer",
      epithet: "She Who Reads the River's Memory",
      gender: "female",
      age: "Changes with the rivers — young during monsoon, ancient during drought",
      description: "Purva-Rupa was born where the Ganges delta meets the Bay of Bengal — the Sundarbans, where tiger and human have coexisted in uneasy balance for millennia. She carries the aspects of the four eastern sacred beasts: the Fishing Cat's amphibious stealth, the Bengal Tiger's authority over the delta, the Indian Python's patient stillness, and the Asiatic Elephant's memory of every monsoon that has ever flooded the plains. She can read the silt of any river and tell you what happened a thousand years upstream.",
      combinedTattoo: "Her tattoo is drawn in water — she traces it in river silt each morning, and each evening the river washes it away. But it never truly disappears: the pattern appears in the ripples of still water, in the flight of fishing birds, in the tracks of delta mud.",
      powers: [
        "Fishing Cat Form: Moves silently through water, impossible to track in mangroves",
        "Tiger Form: Delta authority — all animals of the eastern forests fall still when she roars",
        "Python Form: Stillness so perfect she becomes invisible — used for healing, not combat",
        "Elephant Form: Carries the memory of every eastern kingdom that ever rose and fell"
      ],
      flaws: "She has lived through so many floods and droughts that she has trouble distinguishing the present from the past. She sometimes gives counsel about events that happened five centuries ago as if they were happening now.",
      origin: "The Sundarbans have always had a guardian — a being between tiger and human who mediates the ancient treaty between the Bengal Tiger and the delta peoples. Purva-Rupa is the latest in an unbroken line reaching back to the Vedic age."
    }
  },
  north: {
    name: "Uttarapatha", label: "Northern Kingdoms", color: "#ff66cc", icon: "❄️",
    description: "The northern kingdoms are where the Himalayan snows meet the Gangetic plains — where the snow leopard hunts in clouds above sixteen thousand feet, where the barasingha wades through sacred wetlands, where the great rivers of civilization begin. Uttar Pradesh carries the weight of history — Ayodhya, Mathura, Varanasi — cities older than memory. Uttarakhand guards the source of the Ganga itself. Punjab and Haryana are the breadbasket and the battlesword of India, and Himachal Pradesh keeps the mountain passes between India and the high kingdoms of Central Asia. These are kingdoms that know both the coldest winters and the most burning ambitions.",
    shapeshifter: {
      name: "Uttara-Rupa",
      title: "The Mountain Echo",
      epithet: "He Who Hears the Himalaya's Heartbeat",
      gender: "male",
      age: "Appears ageless — the mountains do not count years the way valleys do",
      description: "Uttara-Rupa inhabits the border between snow and sky — the treeline where Himalayan forests give way to glacier. He carries the aspects of the five northern sacred beasts: the Snow Leopard's mountain sovereignty, the Barasingha's wetland grace, the Indian Buffalo's plains power, the Nilgiri Tahr's cliff endurance (though far to the north), and the rare Himalayan wolf's pack-wisdom. He has watched armies cross the Khyber Pass, has seen empires rise on the Gangetic plain, and understands that the north is not merely a direction — it is a destiny.",
      combinedTattoo: "His tattoo is drawn in snow — it appears on mountainsides after fresh snowfall, visible for kilometers. Pilgrims traveling to Char Dham have reported seeing a massive figure tattooed in white on the mountain faces, watching them pass.",
      powers: [
        "Snow Leopard Form: Perfect camouflage in mountain terrain, ambush predation at altitude",
        "Barasingha Form: Navigation through floodplains and wetlands, reads the river network",
        "Buffalo Form: Plains combat — unstoppable charge across flat terrain",
        "Wolf Form: Pack coordination — can command any group of warriors as a single mind"
      ],
      flaws: "The altitude has made him isolationist. He finds the politics of the plains beneath his attention and sometimes refuses to descend from the mountains when the valleys need him most.",
      origin: "He was the last guardian of the Silk Road's Indian end — the being who kept the mountain passes safe for ten centuries of trade. When the trade routes fell, he retreated to the peaks and has not fully returned."
    }
  },
  northeast: {
    name: "Pragjyotisha", label: "Northeastern Kingdoms", color: "#aa66ff", icon: "🌅",
    description: "The northeastern kingdoms are India's most secret face — eight states of extraordinary diversity packed into a peninsula between Bangladesh, China, Myanmar, and Bhutan. These are the lands of living root bridges and cloud forests, of one-horned rhinoceroses and clouded leopards, of warrior traditions that predate the Mahabharata itself. Assam guards the great Brahmaputra; Manipur keeps the flame of classical Indian dance; Meghalaya is the wettest place on Earth; Arunachal Pradesh watches the sunrise before any other Indian state. These kingdoms have always known something the mainland forgot: that the boundary between civilizations is not a wall but a conversation.",
    shapeshifter: {
      name: "Pragjyoti-Rupa",
      title: "The First Light",
      epithet: "She Who Greets the Sun Before All Others",
      gender: "female",
      age: "As old as the Brahmaputra — which is to say, older than the Himalayas themselves",
      description: "Pragjyoti-Rupa embodies the extraordinary biodiversity of India's northeast — the region that connects the Indian subcontinent to Southeast Asia and serves as a corridor for species found nowhere else on Earth. She carries the aspects of eight northeastern sacred beasts: the One-Horned Rhino's armor, the Clouded Leopard's mystery, the Red Panda's gentleness, the Gayal's forest sovereignty, the Sangai's dancing grace, the Hoolock Gibbon's voice, the Serow's mountain tenacity, and the Phayre's Langur's spectacled intelligence. She is the most complex shapeshifter of all the regional guardians — eight animals, eight cultures, eight voices that somehow speak as one.",
      combinedTattoo: "Her tattoo is embroidered — literally stitched in the traditional textile patterns of all eight northeastern states. Each form she takes adds a new thread. The full tattoo, when all eight aspects are active, looks like the most complex indigenous textile ever woven — a living garment of power.",
      powers: [
        "Rhino Form: Impenetrable armor, can charge through any fortification",
        "Clouded Leopard Form: Tree-canopy combat, moves through forest three-dimensionally",
        "Red Panda Form: Healing touch and absolute calm — neutralizes all aggression in range",
        "Sangai Form: Dancing combat — movement so beautiful it temporarily paralyzes opponents",
        "Gayal Form: Commands the living forest as an army",
        "Gibbon Form: Voice that can shatter stone or harmonize any group into unity",
        "Serow Form: Mountain defense — immovable from any high ground she chooses to hold",
        "Langur Form: Strategic intelligence — sees all patterns, all consequences"
      ],
      flaws: "Eight voices constantly debating. She cannot act quickly because all eight aspects must reach consensus. In individual combat she is devastating; in situations requiring instant decision she is paralyzed.",
      origin: "She is the spirit of the Brahmaputra River itself — the great river that flows east to west, contrary to all other Himalayan rivers, as if it refused to follow the rules of geography."
    }
  },
  central: {
    name: "Madhyadesa", label: "Central Kingdoms", color: "#ffaa00", icon: "🛡️",
    description: "The central kingdoms are the heart of the subcontinent — the ancient Madhyadesa that Sanskrit texts call the middle country, the navel of India from which all directions radiate. Madhya Pradesh holds the oldest human-painted caves on Earth at Bhimbetka, the forests of Kipling's Jungle Book, and the sacred city of Ujjain. Chhattisgarh guards the tribal heartland — vast forests inhabited by peoples who maintained sovereignty while empires rose and fell around them. The barasingha deer walks these wetlands as it has for ten thousand years, and the wild buffalo's call echoes through forests that have never been fully mapped.",
    shapeshifter: {
      name: "Madhya-Rupa",
      title: "The Pivot of All Things",
      epithet: "The One Who Holds the Center So Others Can Exist",
      gender: "non-binary",
      age: "The age of the Bhimbetka caves — thirty thousand years and counting",
      description: "Madhya-Rupa is the oldest of all the regional guardians — a being as ancient as the cave paintings at Bhimbetka, who watched the first humans in India pick up a brush and leave their mark on stone. They carry both central beasts: the Barasingha's twelve-fold wisdom and the Wild Buffalo's primal power. But their true ability is not transformation — it is mediation. Madhya-Rupa can stand at the exact center of any conflict, any battle, any argument, and make both sides simultaneously right. They have ended more wars than any weapon. They have also, in moments of rage, started a few.",
      combinedTattoo: "Their tattoo is a perfect mandala — barasingha antlers forming one half, wild buffalo horns forming the other, meeting at a precise geometric center that pulses faintly gold. It is the most balanced tattoo in existence, and the most impossible to achieve — it requires perfect equilibrium of opposing forces.",
      powers: [
        "Barasingha Form: Twelve-fold wisdom — sees twelve different solutions simultaneously",
        "Wild Buffalo Form: Primal force that cannot be reasoned with or stopped by anything but equal force",
        "Combined Form (rare): Perfect balance — can neutralize any power by becoming its exact equal and opposite"
      ],
      flaws: "They are so committed to balance that they sometimes refuse to take sides even when one side is clearly wrong. Their concept of 'center' can be morally troubling. The very thing that makes them powerful also makes them, occasionally, useless.",
      origin: "The Bhimbetka caves were not painted by random wanderers — they were painted by the first students of Madhya-Rupa, recording the visions of a being who had already lived ten thousand years and intended to live ten thousand more."
    }
  }
};

// ============================================================
// ADDITIONAL STORIES (per state)
// ============================================================
var ADDITIONAL_STORIES = {
  'karnataka': [
    { file: 'buried-temple.html', title: 'The Buried Temple of the Western Ghats', hero: 'Tungabhadra', desc: 'A serpent-tattooed warrior discovers an ancient temple beneath the Western Ghats, where golden artifacts hold the key to a forgotten civilization.' }
  ],
  'tamil-nadu': [
    { file: 'song-that-shatters.html', title: 'The Song That Shatters Mountains', hero: 'Kurinjiselvi', desc: 'A mountain warrior faces an acoustic warlord whose ten-stringed veena can control minds — and discovers that the only weapon against a beautiful lie is a more beautiful truth.' }
  ],
  'assam': [
    { file: 'rhino-knight.html', title: 'The Rhino Knight of Kaziranga', hero: 'Kamalavarna', desc: 'In the flood-plains of Kaziranga, a warrior bonds with the one-horned rhinoceros to defend the sacred wetlands from a shadow that devours the dawn.' }
  ]
};
