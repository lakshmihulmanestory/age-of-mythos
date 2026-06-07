/**
 * tattoo-art.js — Hulmane-The-Saga Sacred Tattoo Art System
 *
 * PROGRESSION PHILOSOPHY (from user.txt):
 *   Stage 1 — BIRTH:    Pure outline/lines only. No colour, no fill. Just delicate strokes.
 *   Stage 2 — AGE 10:   Partial body (lower half). Light fill begins. Lines strengthen.
 *   Stage 3 — AGE 20:   Full body, solid colour, achievements reflected. Glow appears.
 *   Stage 4 — AGE 30+:  FULL GLORY — rich gold, crown/sun rays, mandala, legendary royal look.
 *
 * Reference: Humane_the_saga_Tatoos.png
 */

(function () {
  'use strict';

  // ─── Colour palettes per animal ──────────────────────────────────────────
  var PAL = {
    'blackbuck':                       { p:'#ffd700', s:'#ff8c00', g:'#ffcc44', bg:'#0f0800' },
    'spotted deer':                    { p:'#66ffaa', s:'#22cc66', g:'#44ffaa', bg:'#001a0a' },
    'nilgiri tahr':                    { p:'#aa88ff', s:'#7755ee', g:'#9966ff', bg:'#080015' },
    'indian elephant':                 { p:'#cc88ff', s:'#9944ee', g:'#bb66ff', bg:'#0f0018' },
    'indian giant squirrel':           { p:'#ff8844', s:'#ff3300', g:'#ff6622', bg:'#150500' },
    'giant squirrel':                  { p:'#ff8844', s:'#ff3300', g:'#ff6622', bg:'#150500' },
    'asiatic lion':                    { p:'#ffcc00', s:'#ff9900', g:'#ffdd44', bg:'#100c00' },
    'gaur':                            { p:'#44ffaa', s:'#00bb55', g:'#33ff88', bg:'#001508' },
    'chinkara':                        { p:'#ffdd77', s:'#ffbb33', g:'#ffdd55', bg:'#100e00' },
    'fishing cat':                     { p:'#44ccff', s:'#0077bb', g:'#22aaff', bg:'#001020' },
    'sambar deer':                     { p:'#ddaa44', s:'#bb8811', g:'#ffbb44', bg:'#0f0a00' },
    'sambar':                          { p:'#ddaa44', s:'#bb8811', g:'#ffbb44', bg:'#0f0a00' },
    'barasingha':                      { p:'#44ffee', s:'#00ccaa', g:'#22ffdd', bg:'#001512' },
    'alpine musk deer':                { p:'#ff88cc', s:'#dd3399', g:'#ff55bb', bg:'#150010' },
    'musk deer':                       { p:'#ff88cc', s:'#dd3399', g:'#ff55bb', bg:'#150010' },
    'snow leopard':                    { p:'#99ccff', s:'#4488ee', g:'#77aaff', bg:'#000a18' },
    'clouded leopard':                 { p:'#ffcc55', s:'#ff8800', g:'#ffbb33', bg:'#100a00' },
    'one-horned rhino':                { p:'#99bbcc', s:'#5588aa', g:'#88aabb', bg:'#080e12' },
    'indian one-horned rhinoceros':    { p:'#99bbcc', s:'#5588aa', g:'#88aabb', bg:'#080e12' },
    'gayal':                           { p:'#55ff88', s:'#009933', g:'#33ff66', bg:'#001200' },
    'sangai':                          { p:'#ccddff', s:'#8899ee', g:'#bbccff', bg:'#060810' },
    'serow':                           { p:'#bbaa66', s:'#998833', g:'#ddbb77', bg:'#0a0800' },
    'red panda':                       { p:'#ff5533', s:'#cc1100', g:'#ff3311', bg:'#120200' },
    "phayre's langur":                 { p:'#cceecc', s:'#88bb88', g:'#aaddaa', bg:'#080c08' },
    'langur':                          { p:'#cceecc', s:'#88bb88', g:'#aaddaa', bg:'#080c08' },
    'wild buffalo':                    { p:'#ff4444', s:'#aa0000', g:'#ff2222', bg:'#120000' },
  };

  // ─── Footprint paths per animal type (Stage 1 — pure outline art) ─────────
  // These are delicate line drawings of each animal's actual track mark.
  // Rendered as STROKE ONLY — no fill. Like a birth mark etched in light.
  var FOOTPRINTS = {
    // Deer/antelope family — split hoof print
    deer: 'M44 74 Q44 65 48 62 Q52 65 52 74 M44 74 Q41 80 42 86 M52 74 Q55 80 54 86 M42 86 Q44 90 46 88 M54 86 Q52 90 50 88',
    // Cat/leopard family — rounded paw with 4 toes
    cat: 'M48 78 Q44 74 40 70 Q36 66 38 62 Q42 60 46 64 M48 78 Q52 74 56 70 Q60 66 58 62 Q54 60 50 64 M48 78 Q46 82 44 86 Q46 90 48 88 Q50 90 52 86 Q50 82 48 78 M42 60 Q40 56 42 53 Q46 52 48 55 M54 60 Q56 56 54 53 Q50 52 48 55',
    // Elephant — large round with toe marks
    elephant: 'M48 72 Q36 72 32 78 Q30 86 36 90 Q42 94 48 92 Q54 94 60 90 Q66 86 64 78 Q60 72 48 72 M36 70 Q33 66 36 63 M42 68 Q40 64 43 62 M48 67 Q48 63 51 62 M54 68 Q56 64 53 62 M60 70 Q63 66 60 63',
    // Squirrel — tiny 5-toe print
    squirrel: 'M48 80 Q45 76 42 74 Q39 72 38 68 Q40 65 43 67 M48 80 Q45 74 46 70 Q47 66 50 65 M48 80 Q51 76 54 74 Q57 72 58 68 Q56 65 53 67 M48 80 Q51 74 50 70 Q49 66 46 65 M48 80 Q48 84 46 88 Q48 90 50 88 Q52 86 50 82',
    // Lion — large paw with 4 big toes
    lion: 'M48 76 Q42 70 36 64 Q32 58 36 54 Q41 52 46 58 M48 76 Q54 70 60 64 Q64 58 60 54 Q55 52 50 58 M48 76 Q44 82 40 88 Q43 92 48 90 Q53 92 56 88 Q52 82 48 76 M40 54 Q36 48 40 44 Q45 42 48 48 M56 54 Q60 48 56 44 Q51 42 48 48',
    // Bovine (gaur/buffalo/gayal) — large split hoof
    bovine: 'M43 72 Q41 64 43 56 Q46 52 48 54 Q50 52 53 56 Q55 64 53 72 M43 72 Q40 78 40 86 Q42 90 44 88 M53 72 Q56 78 56 86 Q54 90 52 88 M44 88 Q44 92 48 92 M52 88 Q52 92 48 92',
    // Rhino — 3-toe large print
    rhino: 'M48 72 Q38 68 34 74 Q32 82 38 88 Q44 94 48 90 M48 72 Q58 68 62 74 Q64 82 58 88 Q52 94 48 90 M38 68 Q36 62 40 58 Q44 56 46 62 M58 68 Q60 62 56 58 Q52 56 50 62 M48 68 Q48 62 48 58',
    // Red panda — small rounded paw 5-toe
    panda: 'M48 80 Q44 75 40 72 Q37 69 38 65 Q41 63 44 66 M48 80 Q46 74 47 68 Q48 64 51 64 M48 80 Q52 75 56 72 Q59 69 58 65 Q55 63 52 66 M48 80 Q50 74 49 68 Q48 64 45 64 M48 80 Q48 86 46 90 Q48 92 50 90 Q52 87 50 82',
    // Primate — hand print with thumb
    primate: 'M48 78 Q40 74 36 68 Q34 62 38 59 Q43 58 45 63 M48 78 Q44 72 44 65 Q45 60 48 60 M48 78 Q52 72 52 65 Q51 60 48 60 M48 78 Q52 74 56 68 Q58 62 54 59 Q49 58 51 63 M48 78 Q48 84 44 88 Q45 91 48 90 Q51 91 52 88 Q48 84 48 78',
  };

  // Map animal name → footprint type
  var FOOT_TYPE = {
    'blackbuck':'deer','spotted deer':'deer','nilgiri tahr':'deer','chinkara':'deer',
    'sambar deer':'deer','sambar':'deer','barasingha':'deer','alpine musk deer':'deer',
    'musk deer':'deer','sangai':'deer','serow':'deer',
    'indian elephant':'elephant','elephant':'elephant',
    'asiatic lion':'lion',
    'snow leopard':'cat','clouded leopard':'cat','fishing cat':'cat',
    'indian giant squirrel':'squirrel','giant squirrel':'squirrel',
    'gaur':'bovine','gayal':'bovine','wild buffalo':'bovine',
    'one-horned rhino':'rhino','indian one-horned rhinoceros':'rhino',
    'red panda':'panda',
    "phayre's langur":'primate','langur':'primate',
  };

  // ─── Full animal body paths (used stages 2-4) ─────────────────────────────
  // Paths fit in 0 0 96 96 viewBox, designed to look like elegant tattoo art.
  // Used with fill for stages 3-4, with light fill+stroke for stage 2.
  var BODY = {
    'blackbuck':
      'M48 20 C43 20 38 24 38 30 C38 36 43 40 48 40 C53 40 58 36 58 30 C58 24 53 20 48 20Z' +
      'M40 28 L32 18 L29 13 L33 11 L36 15 L40 22Z M56 28 L64 18 L67 13 L63 11 L60 15 L56 22Z' +
      'M44 40 L40 54 L37 68 L35 82 L40 84 L42 70 L44 58 L48 54 L52 58 L54 70 L56 84 L61 82 L59 68 L56 54 L52 40Z' +
      'M35 82 L31 88 L36 88 L38 82Z M59 82 L63 88 L58 88 L56 82Z',

    'spotted deer':
      'M48 22 C43 22 38 26 38 32 C38 37 43 40 48 40 C53 40 58 37 58 32 C58 26 53 22 48 22Z' +
      'M39 30 L32 20 L30 15 L35 14 L37 18 L39 24Z M57 30 L64 20 L66 15 L61 14 L59 18 L57 24Z' +
      'M44 40 L40 52 L38 66 L36 80 L40 82 L42 68 L44 57 L48 53 L52 57 L54 68 L56 82 L60 80 L58 66 L56 52 L52 40Z' +
      'M40 35 C37 35 36 37 38 38 C40 39 42 38 40 35Z M56 35 C59 35 60 37 58 38 C56 39 54 38 56 35Z' +
      'M44 32 C42 30 40 32 41 34Z M52 32 C54 30 56 32 55 34Z',

    'nilgiri tahr':
      'M48 20 C43 20 38 24 38 30 C38 36 42 40 48 40 C54 40 58 36 58 30 C58 24 53 20 48 20Z' +
      'M39 28 L33 18 L29 12 L33 10 L37 14 L40 22Z M57 28 L63 18 L67 12 L63 10 L59 14 L56 22Z' +
      'M48 40 L56 44 L62 52 L60 60 L52 62 L48 60 L44 62 L36 60 L34 52 L40 44Z' +
      'M36 60 L32 72 L30 82 L35 84 L37 72 L40 62Z M60 60 L64 72 L66 82 L61 84 L59 72 L56 62Z' +
      'M40 62 L38 76 L38 86 L43 86 L43 76 L45 64Z M56 62 L58 76 L58 86 L53 86 L53 76 L51 64Z',

    'indian elephant':
      'M48 12 C38 12 28 18 26 30 C24 42 32 52 42 56 L38 68 L36 82 L42 82 L42 68 L48 58 L54 68 L54 82 L60 82 L58 68 L54 56 C64 52 72 42 70 30 C68 18 58 12 48 12Z' +
      'M26 32 C20 28 15 32 14 38 C13 44 17 50 24 50 L24 46 C20 46 18 42 20 38 C22 34 26 36 26 40Z' +
      'M44 52 Q48 58 52 52',

    'indian giant squirrel':
      'M48 22 C43 22 39 25 39 30 C39 35 43 38 48 38 C53 38 57 35 57 30 C57 25 53 22 48 22Z' +
      'M48 38 L42 42 L37 50 L35 60 L37 68 L40 80 L40 86 L45 86 L45 74 L43 62 L43 54 L47 48 L48 52 L49 48 L53 54 L53 62 L51 74 L51 86 L56 86 L56 80 L59 68 L61 60 L59 50 L54 42Z' +
      'M48 38 C52 30 60 22 67 16 C71 12 74 15 73 19 C72 23 68 24 64 22 C61 28 57 34 54 38Z',

    'asiatic lion':
      'M48 14 C36 14 24 22 22 36 C20 48 28 58 40 62 L36 74 L34 86 L39 86 L41 74 L46 62 L48 64 L50 62 L55 74 L57 86 L62 86 L60 74 L56 62 C68 58 76 48 74 36 C72 22 60 14 48 14Z' +
      'M24 36 C18 30 13 34 12 40 C11 46 16 52 23 51 L23 47 C18 47 16 43 18 39 C20 35 25 37 25 41Z' +
      'M72 36 C78 30 83 34 84 40 C85 46 80 52 73 51 L73 47 C78 47 80 43 78 39 C76 35 71 37 71 41Z' +
      'M36 18 C34 10 26 8 22 13 C19 17 22 24 28 24Z M60 18 C62 10 70 8 74 13 C77 17 74 24 68 24Z',

    'gaur':
      'M48 12 C38 12 28 20 26 32 C24 44 32 54 44 58 L40 72 L38 86 L44 86 L44 72 L48 60 L52 72 L52 86 L58 86 L56 72 L52 58 C64 54 72 44 70 32 C68 20 58 12 48 12Z' +
      'M28 24 L20 18 L16 14 L20 10 L25 14 L30 22Z M68 24 L76 18 L80 14 L76 10 L71 14 L66 22Z',

    'chinkara':
      'M48 24 C43 24 39 27 39 32 C39 37 43 40 48 40 C53 40 57 37 57 32 C57 27 53 24 48 24Z' +
      'M41 30 L35 22 L33 18 L37 16 L39 20 L41 26Z M55 30 L61 22 L63 18 L59 16 L57 20 L55 26Z' +
      'M44 40 L40 52 L38 66 L36 80 L40 82 L42 68 L44 57 L48 53 L52 57 L54 68 L56 82 L60 80 L58 66 L56 52 L52 40Z',

    'fishing cat':
      'M48 16 C41 16 34 20 32 28 C30 36 34 44 42 48 L38 60 L36 74 L40 76 L42 62 L46 52 L48 54 L50 52 L54 62 L56 76 L60 74 L58 60 L54 48 C62 44 66 36 64 28 C62 20 55 16 48 16Z' +
      'M34 24 C29 20 24 23 22 28 C20 33 23 38 28 37Z M62 24 C67 20 72 23 74 28 C76 33 73 38 68 37Z' +
      'M38 18 C36 10 28 8 26 13 C25 17 30 21 35 19Z M58 18 C60 10 68 8 70 13 C71 17 66 21 61 19Z',

    'sambar deer':
      'M48 20 C43 20 38 24 38 30 C38 36 43 40 48 40 C53 40 58 36 58 30 C58 24 53 20 48 20Z' +
      'M39 28 L30 16 L27 11 L32 10 L35 15 L39 22Z M57 28 L66 16 L69 11 L64 10 L61 15 L57 22Z' +
      'M30 16 L24 8 L26 4 L30 6 L30 14Z M66 16 L72 8 L70 4 L66 6 L66 14Z' +
      'M44 40 L40 54 L37 68 L35 82 L40 84 L42 70 L44 57 L48 53 L52 57 L54 70 L56 84 L61 82 L59 68 L56 54 L52 40Z',

    'barasingha':
      'M48 18 C43 18 38 22 38 28 C38 34 43 38 48 38 C53 38 58 34 58 28 C58 22 53 18 48 18Z' +
      'M39 26 L30 13 L26 8 L30 6 L34 10 L39 20Z M57 26 L66 13 L70 8 L66 6 L62 10 L57 20Z' +
      'M30 13 L23 6 L23 2 L27 3 L28 8 L32 13Z M66 13 L73 6 L73 2 L69 3 L68 8 L64 13Z' +
      'M34 10 L28 4 L30 0 L34 2 L33 8Z M62 10 L68 4 L66 0 L62 2 L63 8Z' +
      'M44 38 L40 52 L37 66 L35 80 L40 82 L42 68 L44 57 L48 53 L52 57 L54 68 L56 82 L61 80 L59 66 L56 52 L52 38Z',

    'alpine musk deer':
      'M48 22 C43 22 38 26 38 31 C38 36 43 40 48 40 C53 40 58 36 58 31 C58 26 53 22 48 22Z' +
      'M40 30 L34 22 L32 17 L36 15 L38 20 L40 25Z M56 30 L62 22 L64 17 L60 15 L58 20 L56 25Z' +
      'M44 40 L40 52 L38 66 L36 80 L40 82 L42 68 L44 57 L48 53 L52 57 L54 68 L56 82 L60 80 L58 66 L56 52 L52 40Z',

    'snow leopard':
      'M48 14 C41 14 34 18 32 26 C30 34 34 42 42 46 L38 58 L36 72 L40 74 L42 60 L46 50 L48 52 L50 50 L54 60 L56 74 L60 72 L58 58 L54 46 C62 42 66 34 64 26 C62 18 55 14 48 14Z' +
      'M34 22 C29 18 24 21 22 26 C20 31 23 37 29 36Z M62 22 C67 18 72 21 74 26 C76 31 73 37 67 36Z' +
      'M36 24 C34 16 26 14 24 19 C23 23 28 27 34 24Z M60 24 C62 16 70 14 72 19 C73 23 68 27 62 24Z' +
      'M38 32 C35 30 33 33 35 35 C37 37 39 36 38 32Z M58 32 C61 30 63 33 61 35 C59 37 57 36 58 32Z' +
      'M43 40 C40 38 38 41 40 43 C42 45 44 44 43 40Z M53 40 C56 38 58 41 56 43 C54 45 52 44 53 40Z',

    'clouded leopard':
      'M48 16 C41 16 34 20 32 28 C30 36 34 44 42 48 L38 60 L36 74 L40 76 L42 62 L46 52 L48 54 L50 52 L54 62 L56 76 L60 74 L58 60 L54 48 C62 44 66 36 64 28 C62 20 55 16 48 16Z' +
      'M34 24 C30 20 25 23 23 28 C21 33 24 38 29 37Z M62 24 C66 20 71 23 73 28 C75 33 72 38 67 37Z' +
      'M36 30 C33 28 31 31 33 33 C35 35 37 33 36 30Z M60 30 C63 28 65 31 63 33 C61 35 59 33 60 30Z' +
      'M42 40 C39 38 37 41 39 43 C41 45 43 43 42 40Z M54 40 C57 38 59 41 57 43 C55 45 53 43 54 40Z' +
      'M44 26 C41 24 39 27 41 29 C43 30 45 29 44 26Z M52 26 C55 24 57 27 55 29 C53 30 51 29 52 26Z',

    'one-horned rhino':
      'M48 10 C36 10 24 18 22 32 C20 46 30 58 44 62 L40 74 L38 88 L45 88 L45 74 L48 64 L51 74 L51 88 L58 88 L56 74 L52 62 C66 58 76 46 74 32 C72 18 60 10 48 10Z' +
      'M36 16 L32 10 L28 6 L33 4 L37 9 L40 15Z' +
      'M22 36 C16 32 12 36 12 43 C12 50 17 55 24 53 L24 49 C20 49 18 45 20 41 C22 37 26 39 26 43Z',

    'indian one-horned rhinoceros':
      'M48 10 C36 10 24 18 22 32 C20 46 30 58 44 62 L40 74 L38 88 L45 88 L45 74 L48 64 L51 74 L51 88 L58 88 L56 74 L52 62 C66 58 76 46 74 32 C72 18 60 10 48 10Z' +
      'M36 16 L32 10 L28 6 L33 4 L37 9 L40 15Z',

    'gayal':
      'M48 12 C38 12 28 20 26 32 C24 44 32 54 44 58 L40 72 L38 86 L44 86 L44 72 L48 60 L52 72 L52 86 L58 86 L56 72 L52 58 C64 54 72 44 70 32 C68 20 58 12 48 12Z' +
      'M26 22 L18 16 L14 12 L18 8 L23 12 L28 20Z M70 22 L78 16 L82 12 L78 8 L73 12 L68 20Z' +
      'M18 16 L10 10 L10 6 L14 8 L16 12 L20 18Z M78 16 L86 10 L86 6 L82 8 L80 12 L76 18Z',

    'sangai':
      'M48 20 C43 20 38 24 38 30 C38 36 43 40 48 40 C53 40 58 36 58 30 C58 24 53 20 48 20Z' +
      'M39 28 L31 15 L28 9 L33 8 L36 13 L39 22Z M57 28 L65 15 L68 9 L63 8 L60 13 L57 22Z' +
      'M31 15 L25 7 L26 3 L30 4 L29 9 L33 15Z M65 15 L71 7 L70 3 L66 4 L67 9 L63 15Z' +
      'M44 40 L40 54 L37 68 L35 82 L40 84 L42 70 L44 57 L48 53 L52 57 L54 70 L56 84 L61 82 L59 68 L56 54 L52 40Z',

    'serow':
      'M48 22 C43 22 38 25 38 31 C38 36 43 40 48 40 C53 40 58 36 58 31 C58 25 53 22 48 22Z' +
      'M40 29 L36 22 L33 17 L37 15 L40 19 L41 25Z M56 29 L60 22 L63 17 L59 15 L56 19 L55 25Z' +
      'M48 22 L45 12 L43 7 L48 6 L53 7 L51 12Z' +
      'M44 40 L40 52 L38 66 L36 80 L40 82 L42 68 L44 57 L48 53 L52 57 L54 68 L56 82 L60 80 L58 66 L56 52 L52 40Z',

    'red panda':
      'M48 16 C42 16 36 20 34 28 C32 36 36 44 42 48 L38 60 L36 74 L36 84 L41 84 L41 72 L43 60 L47 50 L48 54 L49 50 L53 60 L55 72 L55 84 L60 84 L60 74 L58 60 L54 48 C60 44 64 36 62 28 C60 20 54 16 48 16Z' +
      'M34 26 C29 20 23 22 21 28 C19 33 23 39 29 38Z M62 26 C67 20 73 22 75 28 C77 33 73 39 67 38Z' +
      'M40 20 C38 12 30 10 27 15 C25 20 30 25 36 22Z M56 20 C58 12 66 10 69 15 C71 20 66 25 60 22Z' +
      'M48 54 L41 62 L48 64 L55 62Z',

    "phayre's langur":
      'M48 14 C41 14 34 18 34 26 C34 34 41 40 48 40 C55 40 62 34 62 26 C62 18 55 14 48 14Z' +
      'M36 22 C31 16 25 18 23 24 C21 30 26 36 32 34Z M60 22 C65 16 71 18 73 24 C75 30 70 36 64 34Z' +
      'M38 22 C36 13 28 11 26 16 C25 21 30 25 36 22Z M58 22 C60 13 68 11 70 16 C71 21 66 25 60 22Z' +
      'M44 40 L40 52 L38 66 L38 80 L43 82 L43 66 L44 55 L48 57 L52 55 L53 66 L53 82 L58 80 L58 66 L56 52 L52 40Z' +
      'M43 38 C40 36 38 38 40 40 C42 42 44 40 43 38Z M53 38 C56 36 58 38 56 40 C54 42 52 40 53 38Z',

    'wild buffalo':
      'M48 10 C36 10 24 18 22 32 C20 46 30 56 44 60 L40 72 L38 86 L44 86 L44 72 L48 62 L52 72 L52 86 L58 86 L56 72 L52 60 C66 56 76 46 74 32 C72 18 60 10 48 10Z' +
      'M24 20 L14 14 L10 10 L14 6 L20 10 L26 18Z M72 20 L82 14 L86 10 L82 6 L76 10 L70 18Z' +
      'M14 14 L6 8 L6 4 L10 6 L12 10 L16 16Z M82 14 L90 8 L90 4 L86 6 L84 10 L80 16Z' +
      'M22 36 C16 30 11 35 12 42 C13 49 19 53 26 50Z M74 36 C80 30 85 35 84 42 C83 49 77 53 70 50Z',
  };

  // Aliases
  BODY['langur'] = BODY["phayre's langur"];
  BODY['giant squirrel'] = BODY['indian giant squirrel'];
  BODY['musk deer'] = BODY['alpine musk deer'];
  BODY['sambar'] = BODY['sambar deer'];
  BODY['elephant'] = BODY['indian elephant'];

  // ─── Crown / sun-ray paths for Stage 4 (royal glory) ────────────────────
  function makeCrownRays(primaryColor) {
    var rays = '';
    // 16 radiating lines from outer ring
    for (var i = 0; i < 16; i++) {
      var a = (Math.PI * 2 * i / 16);
      var x1 = 48 + 42 * Math.cos(a), y1 = 48 + 42 * Math.sin(a);
      var x2 = 48 + 49 * Math.cos(a), y2 = 48 + 49 * Math.sin(a);
      rays += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="' + primaryColor + '" stroke-width="1.5" opacity="0.65"/>';
    }
    // Mandala dots — 2 rings
    for (var j = 0; j < 12; j++) {
      var a2 = (Math.PI * 2 * j / 12);
      var dx = 48 + 40 * Math.cos(a2), dy = 48 + 40 * Math.sin(a2);
      rays += '<circle cx="' + dx.toFixed(1) + '" cy="' + dy.toFixed(1) + '" r="1.8" fill="' + primaryColor + '" opacity="0.7"/>';
    }
    for (var k = 0; k < 8; k++) {
      var a3 = (Math.PI * 2 * k / 8) + Math.PI / 8;
      var ex = 48 + 34 * Math.cos(a3), ey = 48 + 34 * Math.sin(a3);
      rays += '<circle cx="' + ex.toFixed(1) + '" cy="' + ey.toFixed(1) + '" r="1.2" fill="' + primaryColor + '" opacity="0.5"/>';
    }
    // Inner decorative ring
    rays += '<circle cx="48" cy="48" r="30" fill="none" stroke="' + primaryColor + '" stroke-width="0.6" opacity="0.3"/>';
    return rays;
  }

  // ─── Core renderer ────────────────────────────────────────────────────────
  /**
   * renderTattooSVG(animalName, stage, size)
   *
   * Stage 1 — BIRTH:   Pure line art (stroke only). No fill. Just outlines. Age 0.
   * Stage 2 — AGE 10:  Partial body (lower half), light fill (25%). Lines strengthen.
   * Stage 3 — AGE 20:  Full body, solid colour fill (75%), glow, achievement.
   * Stage 4 — AGE 30+: Royal glory — full fill, crown rays, mandala, legendary aura.
   */
  window.renderTattooSVG = function (animalName, stage, size) {
    var name   = (animalName || '').toLowerCase().trim();
    var s      = Math.max(1, Math.min(4, parseInt(stage) || 1));
    size       = size || 120;

    var pal     = PAL[name] || PAL['blackbuck'];
    var bodyPath = BODY[name] || BODY['blackbuck'];
    var footPath = FOOTPRINTS[FOOT_TYPE[name] || 'deer'];

    // Unique ID prefix
    var uid = 'tat' + name.replace(/[^a-z]/g, '') + s + Math.random().toString(36).slice(2, 5);

    // Stage-specific visual parameters
    var cfg = {
      1: { fillOp:0,    strokeW:1.2, strokeOp:0.65, glowR:14,  glowOp:0.10, ringW:0.7, ringOp:0.30, ringDash:'3,4', crown:false, label:'Stage I',   sub:'Birth Mark'   },
      2: { fillOp:0.22, strokeW:1.5, strokeOp:0.80, glowR:28,  glowOp:0.18, ringW:1.0, ringOp:0.45, ringDash:'4,3', crown:false, label:'Stage II',  sub:'First Trial'  },
      3: { fillOp:0.75, strokeW:1.8, strokeOp:0.95, glowR:40,  glowOp:0.30, ringW:1.4, ringOp:0.65, ringDash:'none',crown:false, label:'Stage III', sub:'Champion'     },
      4: { fillOp:1.00, strokeW:2.0, strokeOp:1.00, glowR:52,  glowOp:0.50, ringW:2.0, ringOp:0.85, ringDash:'none',crown:true,  label:'Stage IV',  sub:'Legend'       },
    }[s];

    // Clip: for stage 1 show only foot area; for stage 2 lower body; 3-4 full
    var clipTop = { 1: 68, 2: 46, 3: 12, 4: 0 }[s];
    var clipH = 96 - clipTop;

    // Which path to draw for the animal form
    // Stage 1: use footprint path; stage 2-4: use full body path
    var usePath = (s === 1) ? footPath : bodyPath;

    // Glow gradient opacity at edges
    var glowEdge = cfg.glowOp * 0.1;

    // Stage 4 extras: multi-layer glow + crown
    var extraDefs = '';
    var extraBack = '';
    var crownSVG  = '';

    if (s === 4) {
      // Outer halo ring (animated pulse)
      extraDefs += '<radialGradient id="halo' + uid + '" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0%" stop-color="' + pal.g + '" stop-opacity="0.25"/>' +
        '<stop offset="50%" stop-color="' + pal.p + '" stop-opacity="0.08"/>' +
        '<stop offset="100%" stop-color="transparent"/>' +
        '</radialGradient>';
      extraBack += '<circle cx="48" cy="48" r="52" fill="url(#halo' + uid + ')"><animate attributeName="r" values="50;56;50" dur="4s" repeatCount="indefinite"/></circle>';
      // Glow filter for the body
      extraDefs += '<filter id="gfx' + uid + '" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
      crownSVG = makeCrownRays(pal.p);
    } else if (s === 3) {
      extraDefs += '<filter id="gfx' + uid + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    }

    // Stage 1: second outer ring (very faint, pulse)
    var animRing = '';
    if (s === 1) {
      animRing = '<circle cx="48" cy="48" r="44" fill="none" stroke="' + pal.p + '" stroke-width="0.4" opacity="0.15" stroke-dasharray="2,6"><animate attributeName="stroke-opacity" values="0.1;0.25;0.1" dur="3s" repeatCount="indefinite"/></circle>';
    }

    // Build the animal path rendering
    var filterAttr = (s === 3 || s === 4) ? ' filter="url(#gfx' + uid + ')"' : '';
    var animalSVG  =
      '<g' + filterAttr + '>' +
        '<path d="' + (usePath || '') + '"' +
        ' fill="' + (cfg.fillOp > 0 ? pal.p : 'none') + '"' +
        ' fill-opacity="' + cfg.fillOp + '"' +
        ' stroke="' + pal.p + '"' +
        ' stroke-width="' + cfg.strokeW + '"' +
        ' stroke-opacity="' + cfg.strokeOp + '"' +
        ' stroke-linejoin="round" stroke-linecap="round"' +
        ' clip-path="url(#cl' + uid + ')"/>' +
      '</g>';

    // Stage 4: second pass of the body at lower opacity for luminance effect
    if (s === 4) {
      animalSVG +=
        '<path d="' + (usePath || '') + '"' +
        ' fill="' + pal.g + '" fill-opacity="0.3"' +
        ' stroke="none"' +
        ' clip-path="url(#cl' + uid + ')"' +
        ' filter="url(#gfx' + uid + ')"/>';
    }

    // Label for stage 4: bold "LEGEND" text in a banner style
    var labelSVG = '';
    if (s === 4) {
      labelSVG =
        '<text x="48" y="89" fill="' + pal.p + '" text-anchor="middle" font-size="6.5" font-family="Georgia" font-weight="bold" opacity="0.9" letter-spacing="1">' + cfg.sub.toUpperCase() + '</text>';
    } else {
      labelSVG =
        '<text x="48" y="91" fill="' + pal.p + '" text-anchor="middle" font-size="6.5" font-family="Georgia" opacity="0.7">' + cfg.label + '</text>';
    }

    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="' + size + '" height="' + size + '" role="img" aria-label="' + animalName + ' tattoo ' + cfg.label + '">' +
        '<defs>' +
          '<radialGradient id="gw' + uid + '" cx="50%" cy="50%" r="50%">' +
            '<stop offset="0%" stop-color="' + pal.g + '" stop-opacity="' + cfg.glowOp + '"/>' +
            '<stop offset="65%" stop-color="' + pal.s + '" stop-opacity="' + glowEdge + '"/>' +
            '<stop offset="100%" stop-color="transparent"/>' +
          '</radialGradient>' +
          '<clipPath id="cl' + uid + '">' +
            '<rect x="0" y="' + clipTop + '" width="96" height="' + clipH + '"/>' +
          '</clipPath>' +
          extraDefs +
        '</defs>' +

        // Dark base
        '<circle cx="48" cy="48" r="47" fill="' + pal.bg + '"/>' +

        // Stage 4 outer halo
        extraBack +

        // Glow field
        '<circle cx="48" cy="48" r="' + cfg.glowR + '" fill="url(#gw' + uid + ')"/>' +

        // Outer ring
        '<circle cx="48" cy="48" r="45" fill="none" stroke="' + pal.p + '" stroke-width="' + cfg.ringW + '" opacity="' + cfg.ringOp + '"' +
          (cfg.ringDash !== 'none' ? ' stroke-dasharray="' + cfg.ringDash + '"' : '') + '/>' +

        // Stage 1 second faint ring
        animRing +

        // Crown rays / mandala (stage 4)
        crownSVG +

        // Animal art
        animalSVG +

        // Stage label
        labelSVG +

      '</svg>'
    );
  };

  // ─── PNG image paths — tattoos live in each kingdom's story folder ───────
  // Each animal maps to its kingdom's primary story tattoos/ subfolder.
  var ANIMAL_TATTOO_PATH = {
    'blackbuck':                    'media/states/south/andhra-pradesh/stories/dharmakshetra-amaravati/tattoos/',
    'spotted deer':                 'media/states/south/telangana/stories/chaya-golkonda-shadow-fortress/tattoos/',
    'nilgiri tahr':                 'media/states/south/tamil-nadu/stories/sangam-tamilakam/tattoos/',
    'indian elephant':              'media/states/south/kerala/stories/parashurama-kshetra/tattoos/',
    'elephant':                     'media/states/south/kerala/stories/parashurama-kshetra/tattoos/',
    'indian giant squirrel':        'media/states/west/maharashtra/stories/swarajya-sahyadri/tattoos/',
    'giant squirrel':               'media/states/west/maharashtra/stories/swarajya-sahyadri/tattoos/',
    'asiatic lion':                 'media/states/west/gujarat/stories/simha-dwara/tattoos/',
    'gaur':                         'media/states/west/goa/stories/samudra-dvipa/tattoos/',
    'chinkara':                     'media/states/west/rajasthan/stories/maru-maya/tattoos/',
    'fishing cat':                  'media/states/east/west-bengal/stories/sundara-vana/tattoos/',
    'sambar deer':                  'media/states/east/odisha/stories/kalinga-chakra/tattoos/',
    'sambar':                       'media/states/east/odisha/stories/kalinga-chakra/tattoos/',
    'barasingha':                   'media/states/north/uttar-pradesh/stories/ganga-simhasana/tattoos/',
    'alpine musk deer':             'media/states/north/uttarakhand/stories/deva-bhumi/tattoos/',
    'musk deer':                    'media/states/north/uttarakhand/stories/deva-bhumi/tattoos/',
    'snow leopard':                 'media/states/north/himachal-pradesh/stories/hima-chhaya/tattoos/',
    'clouded leopard':              'media/states/northeast/meghalaya/stories/megha-maata/tattoos/',
    'indian one-horned rhinoceros': 'media/states/northeast/assam/stories/ganda-kshetra-rhinoceros-realm/tattoos/',
    'one-horned rhino':             'media/states/northeast/assam/stories/ganda-kshetra-rhinoceros-realm/tattoos/',
    'rhino':                        'media/states/northeast/assam/stories/ganda-kshetra-rhinoceros-realm/tattoos/',
    'gayal':                        'media/states/northeast/arunachal-pradesh/stories/arunodaya-kshetra/tattoos/',
    'sangai':                       'media/states/northeast/manipur/stories/sangai-nata/tattoos/',
    'serow':                        'media/states/northeast/mizoram/stories/tlawmngaihna-desh/tattoos/',
    'red panda':                    'media/states/northeast/sikkim/stories/beyul-kshetra/tattoos/',
    "phayre's langur":              'media/states/northeast/tripura/stories/tri-pura/tattoos/',
    'langur':                       'media/states/northeast/tripura/stories/tri-pura/tattoos/',
    'wild buffalo':                 'media/states/central/chhattisgarh/stories/dandakaranya/tattoos/',
  };

  /**
   * Get path to the PNG for an animal+stage from its kingdom's story folder.
   * Pass basePath to override with a specific kingdom's tattoos/ directory.
   */
  window.getTattooPNGPath = function (animalName, stage, basePath) {
    var stageNum = Math.max(1, Math.min(4, stage || 1));
    if (basePath) {
      return basePath + 'stage-' + stageNum + '.png';
    }
    var base = ANIMAL_TATTOO_PATH[(animalName || '').toLowerCase().trim()];
    if (!base) return null;
    return base + 'stage-' + stageNum + '.png';
  };

  /**
   * renderTattooPNG(animalName, stage, size, basePath)
   * Returns an <img> tag using the actual reference crop + stage overlay text.
   * Falls back to SVG if no PNG dir exists for this animal.
   */
  window.renderTattooPNG = function (animalName, stage, size, basePath) {
    var s      = Math.max(1, Math.min(4, parseInt(stage) || 1));
    var pal    = PAL[(animalName || '').toLowerCase()] || PAL['blackbuck'];
    var path   = window.getTattooPNGPath(animalName, s, basePath);
    var labels = ['', 'Birth Mark', 'First Trial', 'Champion', 'LEGEND'];
    var ages   = ['', 'Birth', 'Age 10', 'Age 20', 'Age 30+'];

    if (!path) return window.renderTattooSVG(animalName, s, size);

    var sz = size || 120;
    return (
      '<div style="position:relative;display:inline-block;width:' + sz + 'px;">' +
        '<img src="' + path + '" alt="' + animalName + ' Stage ' + s + ' tattoo"' +
          ' width="' + sz + '"' +
          ' style="display:block;border-radius:8px;width:' + sz + 'px;height:auto;"' +
          ' onerror="this.style.display=\'none\'; this.nextSibling.style.display=\'block\';"' +
        '/>' +
        // SVG fallback (hidden unless img fails)
        '<div style="display:none;">' + window.renderTattooSVG(animalName, s, sz) + '</div>' +
      '</div>'
    );
  };

  /**
   * renderTattooCard — shows PNG + stage name + age label
   */
  window.renderTattooCard = function (animalName, stage, size, basePath) {
    var s   = Math.max(1, Math.min(4, parseInt(stage) || 1));
    var pal = PAL[(animalName || '').toLowerCase()] || PAL['blackbuck'];
    var sub = ['', 'Birth Mark', 'First Trial', 'Champion', 'LEGEND'][s];
    var age = ['', 'Birth', 'Age 10', 'Age 20', 'Age 30+'][s];
    return (
      '<div style="display:flex;flex-direction:column;align-items:center;gap:5px;">' +
        window.renderTattooPNG(animalName, s, size, basePath) +
        '<div style="font-size:0.7em;color:' + pal.p + ';font-family:Georgia,serif;font-weight:bold;text-align:center;">' + sub + '</div>' +
        '<div style="font-size:0.62em;color:#888;font-family:Georgia,serif;text-align:center;">' + age + '</div>' +
      '</div>'
    );
  };

  /**
   * renderAllStages — 4-stage progression row, smaller→larger.
   * Uses real PNG crops from reference image.
   */
  window.renderAllStages = function (animalName, size, basePath) {
    size = size || 90;
    var html = '<div style="display:flex;gap:12px;align-items:flex-end;justify-content:center;flex-wrap:wrap;">';
    for (var s = 1; s <= 4; s++) {
      html += window.renderTattooCard(animalName, s, Math.round(size * (0.55 + s * 0.115)), basePath);
    }
    return html + '</div>';
  };

  // ─── Animal registry ──────────────────────────────────────────────────────
  window.TATTOO_ANIMAL_LIST = [
    { name:'Blackbuck',                      state:'Andhra Pradesh',    region:'south'     },
    { name:'Spotted Deer',                   state:'Telangana',         region:'south'     },
    { name:'Nilgiri Tahr',                   state:'Tamil Nadu',        region:'south'     },
    { name:'Indian Elephant',               state:'Kerala',            region:'south'     },
    { name:'Indian Elephant',               state:'Karnataka',         region:'south'     },
    { name:'Indian Giant Squirrel',         state:'Maharashtra',       region:'west'      },
    { name:'Asiatic Lion',                   state:'Gujarat',           region:'west'      },
    { name:'Gaur',                           state:'Goa',               region:'west'      },
    { name:'Chinkara',                       state:'Rajasthan',         region:'west'      },
    { name:'Fishing Cat',                    state:'West Bengal',       region:'east'      },
    { name:'Sambar Deer',                    state:'Odisha',            region:'east'      },
    { name:'Gaur',                           state:'Bihar',             region:'east'      },
    { name:'Indian Elephant',               state:'Jharkhand',         region:'east'      },
    { name:'Barasingha',                     state:'Madhya Pradesh',    region:'central'   },
    { name:'Wild Buffalo',                   state:'Chhattisgarh',      region:'central'   },
    { name:'Snow Leopard',                   state:'Himachal Pradesh',  region:'north'     },
    { name:'Chinkara',                       state:'Haryana',           region:'north'     },
    { name:'Blackbuck',                      state:'Uttar Pradesh',     region:'north'     },
    { name:'Alpine Musk Deer',              state:'Uttarakhand',       region:'north'     },
    { name:'Chinkara',                       state:'Punjab',            region:'north'     },
    { name:'Indian One-Horned Rhinoceros',  state:'Assam',             region:'northeast' },
    { name:'Clouded Leopard',               state:'Meghalaya',         region:'northeast' },
    { name:'Sangai',                         state:'Manipur',           region:'northeast' },
    { name:'Red Panda',                      state:'Sikkim',            region:'northeast' },
    { name:'Serow',                          state:'Mizoram',           region:'northeast' },
    { name:'Gayal',                          state:'Arunachal Pradesh', region:'northeast' },
    { name:"Phayre's Langur",               state:'Tripura',           region:'northeast' },
    { name:'Clouded Leopard',               state:'Nagaland',          region:'northeast' },
  ];

  window.getHeroTattooAnimal = function (hero) {
    if (!hero || !hero.animal) return 'blackbuck';
    return typeof hero.animal === 'string' ? hero.animal : (hero.animal.name || 'blackbuck');
  };

})();
