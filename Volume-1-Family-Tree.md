# Volume I · Maha Parva — The Connection Tree

> *The Mahabharata's power is not in its battles — it is in the fact that everyone in it is related.*
> Cousins fight cousins. Gurus teach both sides. Mothers shelter rivals.

This is the master family / connection map for **all 30 kingdoms** of Volume I, spanning
Chapters 1–4. It is derived from the Chapter-1 canon (`heroes.csv`, `villains.csv`,
`characters-data.js`) and the planning graph (`_planning/02-relationship-graph.md`).

An **interactive** version lives at
[chapter-1/connections.html](content/volume-1-maha-parva/chapter-1-rise-of-legends/connections.html)
(pan / zoom / click a node).

**Legend**
`◆ founder` · `● hero` · `▲ villain` · `◇ guru` · `♛ Grand-Council seat` · `☄ Void-Maw herald`
Solid line = blood descent · dashed = marriage / cross-bloodline · dotted = guru teaches · ⚡ = twins

---

## 1. The Five Bloodlines (descent tree)

```mermaid
flowchart TD
  ANC(("◆ GREAT-ANCESTOR<br/>mythic, unnamed"))

  ANC --> A["◆ GAJAVAMSHA · A<br/><i>Elephant Lineage</i><br/>South + East coast"]
  ANC --> B["◆ SURYAVAMSHA · B<br/><i>Solar Line</i><br/>North + Central"]
  ANC --> C["◆ CHANDRAVAMSHA · C<br/><i>Lunar / matrilineal</i><br/>Northeast + Bengal"]
  ANC --> D["◆ VANA-KULA · D<br/><i>Forest Clan</i><br/>Central + forest belt"]
  ANC --> E["◆ SAGARAVAMSHA · E<br/><i>Ocean & Stone</i><br/>West + South coast"]

  %% --- Bloodline A ---
  A --> A1["● Tungabhadra ♛<br/><i>Karnataka</i> · Maha-Empress / heir"]
  A --> A2["● Parashurama ◇<br/><i>Kerala</i> · granduncle, eldest elder"]
  A --> A3["● Krishnaveni<br/><i>Andhra Pradesh</i> · half-sister of Tungabhadra"]
  A --> A4["● Vanajara<br/><i>Jharkhand</i> · distant cousin (also Vana-Kula)"]

  %% --- Bloodline B ---
  B --> B1["● Gangaputra ♛<br/><i>Uttar Pradesh</i> · throne-heir (Arjuna)"]
  B --> B2["● Dvadashashringa ♛<br/><i>Madhya Pradesh</i> · younger half-brother"]
  B --> B3["● Kurukshetraa<br/><i>Haryana</i> · first cousin"]
  B --> B4["● Panchanada<br/><i>Punjab</i> · cousin (Kuru-Panchala)"]
  B --> B5["● Sharad-Pandit<br/><i>Kashmir</i> · added scholar-branch"]

  %% --- Bloodline C ---
  C --> C1["● Kamalavarna ♛ ◇<br/><i>Assam</i> · matriarch of the line"]
  C --> C2["● Meghanadi<br/><i>Meghalaya</i> · younger sister"]
  C --> C3["● Dzulevira<br/><i>Nagaland</i> · niece"]
  C --> C4["● Sundarvani<br/><i>West Bengal</i> · delta cousin"]
  C --> C5["● Moirangthem<br/><i>Manipur</i> · cousin (Sangai house)"]

  %% --- Bloodline D ---
  D --> D1["● Dandakarni<br/><i>Chhattisgarh</i> · living head of the wild"]
  D --> D2["● Kanchenjunga<br/><i>Sikkim</i> · forest cousin"]
  D --> D3["● Tlangvala<br/><i>Mizoram</i> · southern remnant"]
  D --> D4["● Udayagiri<br/><i>Arunachal</i> · rising-sun cousin"]
  D --> D5["● Tripurari<br/><i>Tripura</i> · three-cities cousin"]
  D --> A4

  %% --- Bloodline E ---
  E --> E1["● Sagaradeva ☄<br/><i>Goa</i> · direct heir"]
  E --> E2["● Simhavikrama<br/><i>Gujarat</i> · desert-edge cousin"]
  E --> E3["● Shivagati ♛<br/><i>Maharashtra</i> · mountain niece"]
  E --> E4["● Mrigatrishna<br/><i>Rajasthan</i> · desert-queen cousin"]
  E --> E5["● Onge-Nakshatra<br/><i>Andaman</i> · added ocean-branch"]

  classDef founder fill:#2a1c33,stroke:#c44daa,color:#f3d9ee,font-weight:bold;
  classDef seat fill:#22343f,stroke:#e0b341,color:#ffe9b0;
  class ANC,A,B,C,D,E founder;
  class A1,B1,B2,C1,E3 seat;
```

> **Bloodline-A note (restructure):** after Tungabhadra falls in late Ch 2 her elephant-bond
> and the line's headship pass to **Krishnadevaraya-Bhrata** — the line survives the empress.

---

## 2. Each Bloodline's Hero ⚔ Villain Web

The line's light and shadow. ▲ villains are listed against the hero they shadow.

```mermaid
flowchart LR
  subgraph A["GAJAVAMSHA · A — Elephant"]
    direction TB
    a1["● Tungabhadra"] -. cousin-sister .-> a1v["▲ Bhoomi-Takshaka<br/>dispossessed branch"]
    a2["● Parashurama"] -. exiled disciple .-> a2v["▲ Kala-Hasta<br/>(not blood)"]
    a3["● Krishnaveni"] === a3v["▲ Kalaniksha<br/>⚡ lost twin"]
    a4["● Vanajara"] -. clan-uncle .-> a4v["▲ Vana-Raksha"]
  end
  subgraph B["SURYAVAMSHA · B — Solar"]
    direction TB
    b1["● Gangaputra"] -. half-brother .-> b1v["▲ Adharma<br/>Karna-shadow"]
    b3["● Kurukshetraa"] -. husband-rival .-> b3v["▲ Kuru-Bhasma"]
    b2["● Dvadashashringa"] -. maternal uncle .-> b2v["▲ Adharma-Kendra<br/>Shakuni"]
    b4["● Panchanada"] -. disinherited brother .-> b4v["▲ Panchavish"]
  end
  subgraph C["CHANDRAVAMSHA · C — Lunar"]
    direction TB
    c1["● Kamalavarna"] -. cousin / dark-cult .-> c1v["▲ Kama-Mara"]
    c2["● Meghanadi"] -. pushed-out male .-> c2v["▲ Megha-Daitya"]
    c3["● Dzulevira"] -. spared serpent-man .-> c3v["▲ Naga-Rakshasa"]
    c4["● Sundarvani"] === c4v["▲ Kala-Nadi<br/>⚡ delta twin"]
    c5["● Moirangthem"] -. dance-guru turned .-> c5v["▲ Tamasa-Nrita"]
  end
  subgraph D["VANA-KULA · D — Forest"]
    direction TB
    d1["● Dandakarni"] === d1v["▲ Dandaka-Rakshasa<br/>⚡ twin brother"]
    d2["● Kanchenjunga"] -. exiled clan-brother .-> d2v["▲ Krodha"]
    d3["● Tlangvala"] -. false claimant .-> d3v["▲ Parvata-Asura"]
    d4["● Udayagiri"] === d4v["▲ Asta-Asura<br/>⚡ mystic-twin shadow"]
    d5["● Tripurari"] -. gifted stone-spirit .-> d5v["▲ Tripura-Asura"]
  end
  subgraph E["SAGARAVAMSHA · E — Ocean & Stone"]
    direction TB
    e1["● Sagaradeva"] -. storm-cursed half-bro .-> e1v["▲ Maha-Vega"]
    e2["● Simhavikrama"] -. nephew / primogeniture .-> e2v["▲ Kala-Simha"]
    e3["● Shivagati"] -. elder brother .-> e3v["▲ Vanaraksha"]
    e4["● Mrigatrishna"] -. ghost-servant .-> e4v["▲ Maru-Yama"]
  end
```

---

## 3. Cross-Bloodline Marriages — the six-pointed star

Every line touches at least two others. These unions are the Chapter 2–4 loyalty bombs.

```mermaid
flowchart TD
  A(["A · Gajavamsha"]):::a
  B(["B · Suryavamsha"]):::b
  C(["C · Chandravamsha"]):::c
  D(["D · Vana-Kula"]):::d
  E(["E · Sagaravamsha"]):::e

  A == "Gangaputra's mother is A-born<br/>→ Gangaputra & Tungabhadra are first cousins<br/>(Ch 4 unification fulcrum)" ==> B
  B == "Kurukshetraa's grandmother is D<br/>→ a forest-mother's voice returns in her trial" ==> D
  C == "Sundarvani married into B via her father<br/>→ her child is Adharma's nephew" ==> B
  E == "Shivagati's mother is C<br/>→ Shivagati & Kamalavarna are cousins<br/>(Ch 3 alliance is blood, not strategy)" ==> C

  classDef a fill:#3a2a14,stroke:#e0a93a,color:#ffe;
  classDef b fill:#142a3a,stroke:#3a9ae0,color:#eef;
  classDef c fill:#2a143a,stroke:#a93ae0,color:#fef;
  classDef d fill:#143a1c,stroke:#3ae07a,color:#efe;
  classDef e fill:#3a1414,stroke:#e03a3a,color:#fee;
```

---

## 4. The Council of Gurus (each teaches across kingdoms)

```mermaid
flowchart LR
  G1{{"◇ Sage Vidyaranya<br/><i>spirit · Vijayanagara</i>"}} --> Tungabhadra
  G1 -. "visited once" .-> Krishnaveni
  G2{{"◇ Mahaguru Drona-of-the-Plain<br/><i>Kuru warrior code</i>"}} --> Gangaputra & Kurukshetraa & Panchanada
  G3{{"◇ The Silent Mother<br/><i>clouded leopard · the founder herself</i>"}} --> Kamalavarna & Meghanadi & Dzulevira
  G4{{"◇ Old Parashurama<br/><i>the 108 forms</i>"}} --> Tungabhadra
  G4 -. "REFUSED" .-x KalaHasta["Kala-Hasta ▲"]
  G5{{"◇ Sage Agastya<br/><i>river · Sangam</i>"}} --> Kurinjiselvi & Sagaradeva
  G5 -. "briefly" .-> Mrigatrishna
  G6{{"◇ Bodhi Lama<br/><i>Beyul compassion</i>"}} --> Kanchenjunga & Himavati & Tlangvala
  G6 -. "was his first companion" .-> Krodha["Krodha ▲"]
  G7{{"◇ Aranya-Mata<br/><i>forest-mother rites</i>"}} --> Dandakarni & Vanajara & Udayagiri

  classDef guru fill:#1c2a2a,stroke:#5ad,color:#cff;
  class G1,G2,G3,G4,G5,G6,G7 guru;
```

> Each guru carries a hidden truth (a Chekhov's gun that must explode by Ch 4): Vidyaranya was
> married to Bhoomi-Takshaka's grandmother; Drona's true debt is to **Adharma-Kendra**;
> Agastya knows where the Sangam text that *names the Void Maw* is hidden.

---

## 5. The Grand Council — seven seats (Chapter 4 target)

```mermaid
flowchart TD
  COUNCIL((("♛ GRAND COUNCIL")))
  COUNCIL --> S1["Seat 1 · South<br/><b>Tungabhadra</b> (Karnataka)"]
  COUNCIL --> S2["Seat 2 · North<br/><b>Gangaputra</b> (Uttar Pradesh)"]
  COUNCIL --> S3["Seat 3 · East<br/><b>Jagannathi</b> (Odisha)"]
  COUNCIL --> S4["Seat 4 · West<br/><b>Shivagati</b> (Maharashtra)"]
  COUNCIL --> S5["Seat 5 · Central<br/><b>Dvadashashringa</b> (Madhya Pradesh)"]
  COUNCIL --> S6["Seat 6 · Northeast<br/><b>Kamalavarna</b> (Assam)"]
  COUNCIL --> S7["Seat 7 · Maha-Adhipati<br/><b>Tungabhadra</b> — supreme<br/><i>(or passes to Kerala's line)</i>"]
  S1 -. "first cousins" .- S2
  S4 -. "cousins (C+E)" .- S6
  S1 === S7

  classDef seat fill:#22343f,stroke:#e0b341,color:#ffe9b0;
  class COUNCIL,S1,S2,S3,S4,S5,S6,S7 seat;
```

> The seven are **not strangers**: Tungabhadra & Gangaputra are first cousins; Kamalavarna &
> Shivagati are cousins. Chapter 4's "unification" is partly a family reunion under duress.

---

## 6. The Void Maw Heralds (Ch 2 → Ch 4)

Not villains — *warnings*. Killing one accelerates the Void Maw's arrival. They converge in Ch 4.

```mermaid
flowchart LR
  H1["☄ First Herald<br/><i>Northeast · Arunachal mystic</i><br/>a man with no shadow"]
  H2["☄ Second Herald<br/><i>West · Goa sailor</i><br/>returned without a ship"]
  H3["☄ Third Herald<br/><i>South · Karnataka child</i><br/>born in a temple-quake"]
  H1 --> CH4(("CHAPTER 4<br/>convergence"))
  H2 --> CH4
  H3 --> CH4
  classDef herald fill:#241024,stroke:#b05ad0,color:#f0d8ff;
  class H1,H2,H3 herald;
```

---

## 7. The Unaligned Houses (bloodline emerges later)

Six Chapter-1 kingdoms are not yet placed in a bloodline by the planning graph. They carry the
Mahabharata mirror-roles below and acquire their ancestral claims in Ch 2+.

| Kingdom | Hero | Villain | Mahabharata mirror | Hook |
|---|---|---|---|---|
| Telangana (Chaya-Golkonda) | Chittaranga | Chitrabheda | Arjuna / Shakuni | ⚡ lost twin sister **Chitralekha** leads an eastern shadow guild |
| Tamil Nadu (Sangam Tamilakam) | Kurinjiselvi | Palinisi | Draupadi | student of **Sage Agastya** (Sangam texts) |
| Uttarakhand (Deva-Bhumi) | Kasturika | Hima-Mara | — | Mountain Pact with Himachal + Sikkim |
| Himachal (Hima-Chhaya) | Himavati | Hima-Asura | Draupadi | student of **Bodhi Lama** |
| Odisha (Kalinga-Chakra) | Jagannathi | Chakra-Bheda | Yudhishthira | **holds Grand-Council Seat 3 (East)** |
| Bihar (Vajra-Bhumi) | Vajramukha | Tamasa | Bhima | River-Sisters pact with WB + UP |

---

## 8. New cast introduced for Ch 2–4

- **Hampi-of-the-Bronze** — Tungabhadra's young ward; becomes her Ch 3 conscience.
- **Yamunadatta** — Gangaputra × an A-noblewoman's son; spark for the UP civil war.
- **Aranya-Putri** — Dandakarni's adopted forest-daughter; spark for the urban/tribal split.
- **Sangaputra** — Moirangthem × Dzulevira's elder sister's child; the Manipur–Nagaland weave.
- **Vyasa-of-the-Margins** — chronicler-monk in every region; the Maha-Adhipati's witness (not a candidate).
- **The Six Regional Marshals** — one per region; sacrificial — their Ch 3 deaths buy each Dominant the regional seat.

---

*Generated from canon + planning graph. To regenerate the interactive page after edits, run
`python3 tools/build_site.py`.*
