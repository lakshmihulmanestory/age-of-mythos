#!/usr/bin/env python3
"""
Reference-image casting for Age of Mythos image jobs.

The user supplied a set of real family / personal photographs in
`images-reference/` (repo root). For a first, low-cost image pass we want the
PEOPLE in every generated image to look like these real people ("take the
person as reference, create the rest from the story"). Objects, animals,
weapons, environments and pure scenes stay text-only.

This module is the single source of truth for:
  1. ARCHETYPES   - who each reference photo is (an archetype = one real person
                    or a coherent group), with an ordered list of photo files.
  2. infer_cast() - given a character's category + name + subject text, decide
                    which archetype should face-reference it (by inferred
                    gender + age band).
  3. assign_reference() - the ready-to-attach reference block for one job:
                    a primary photo, the full pool, the mode (face|style),
                    a suggested strength, and an identity clause to append to
                    the positive prompt.

The human-readable casting sheet is `reference-casting.md`. Keep the two in
sync. Re-run `build_prompts.py` after editing this file.

Casting philosophy (a personal family saga — easily changed here):
  hero      -> the two protagonists (lead man / lead woman)
  ally      -> friends / siblings pools (young man / young woman)
  operative -> friends pools
  villain   -> generic adult/elder pools (NOT the protagonists' faces)
  crowd     -> a group photo as a *style* reference (look/ethnicity, not a face)
  child / elder characters route to the children / grandparent photos.
"""

# All paths are relative to the repo root so a downstream consumer can open them
# directly (e.g. for IP-Adapter / InstantID / img2img face conditioning).
REF_DIR = "images-reference"


def _p(*names):
    return [f"{REF_DIR}/{n}" for n in names]


# --- The cast -------------------------------------------------------------
# Each archetype: label, who, mode (face=lock identity, style=general look),
# and an ordered pool of photos (clearest / most frontal first).
ARCHETYPES = {
    "lead_man": {
        "label": "Lead man (protagonist)",
        "who": "young adult male, ~30s, beard — the recurring male hero",
        "mode": "face",
        "descriptor": "adult Indian man",
        "refs": _p("460.jpeg", "642.jpeg", "139934.jpeg", "2P6A9388.jpeg", "IMG_4576.jpeg", "122298.jpeg"),
    },
    "lead_woman": {
        "label": "Lead woman (protagonist)",
        "who": "young adult female, ~30s — the recurring female hero",
        "mode": "face",
        "descriptor": "adult Indian woman",
        "refs": _p("IMG_6299.jpeg", "172962.jpeg", "86391.jpeg", "IMG_1999.jpeg", "2P6A9388.jpeg", "IMG_4576.jpeg"),
    },
    "young_man": {
        "label": "Young man (ally / friend)",
        "who": "secondary adult males — friends, brothers, operatives",
        "mode": "face",
        "descriptor": "young adult Indian man",
        "refs": _p("122298.jpeg", "505.jpeg", "IMG_20211219_181434_Original.jpeg", "109555.jpeg"),
    },
    "young_woman": {
        "label": "Young woman (ally / sister)",
        "who": "secondary adult females — sisters, friends, seers",
        "mode": "face",
        "descriptor": "young adult Indian woman",
        "refs": _p("250.jpeg", "173115.jpeg", "153441.jpeg", "132299.jpeg", "IMG_7373.jpeg"),
    },
    "elder_man": {
        "label": "Elder man (sage / king / old villain)",
        "who": "elderly male, silver hair, white dhoti — grandfather",
        "mode": "face",
        "descriptor": "elderly Indian man",
        "refs": _p("83167.jpeg", "83168.jpeg"),
    },
    "elder_woman": {
        "label": "Elder woman (matriarch / queen mother)",
        "who": "elderly female — grandmother / mother",
        "mode": "face",
        "descriptor": "elderly Indian woman",
        "refs": _p("IMG_6288.jpeg", "83168.jpeg"),
    },
    "boy_child": {
        "label": "Boy child (young prince / child hero)",
        "who": "young boy ~6 years",
        "mode": "face",
        "descriptor": "young Indian boy",
        "refs": _p("IMG_2784 Edited.jpeg", "IMG_4537.jpeg"),
    },
    "infant_child": {
        "label": "Infant / girl child",
        "who": "baby girl / infant character",
        "mode": "face",
        "descriptor": "Indian infant child",
        "refs": _p("IMG_3901.jpeg", "IMG_6450.jpeg", "IMG_4346.jpeg"),
    },
    "crowd_group": {
        "label": "Crowd / group look",
        "who": "group photos — used as a STYLE reference for crowds, not a face lock",
        "mode": "style",
        "descriptor": "crowd of everyday Indian people",
        "refs": _p("109555.jpeg", "IMG_7373.jpeg", "IMG_4566.jpeg", "153441.jpeg"),
    },
}

# Suggested conditioning strength for the downstream pipeline.
FACE_WEIGHT = 0.65
STYLE_WEIGHT = 0.30

PEOPLE_CATEGORIES = {"hero", "villain", "ally", "operative", "crowd"}

# --- Gender / age inference ----------------------------------------------
_FEMALE = (
    " woman", " women", "girl", "maiden", "devi", "sister", "mother", "queen",
    "rani", "priestess", "matriarch", "goddess", " lady", " she ", " her ",
    "wife", "daughter", "amma", "akka", "seeress", "nun", "-devi", "feminine",
)
_MALE = (
    " man", " men", " boy", " king", "raja", "father", "brother", "monk",
    "sultan", " lord", " he ", " his ", "prince", "guru", "swami", "yogi",
    "masculine", "husband", "son ", "patriarch",
)
_ELDER = (
    "old ", "elder", "aged", "ancient", "grey-haired", "gray-haired",
    "white-haired", "grandfather", "grandmother", "veteran", "wrinkled",
    "wizened", "venerable", "greybeard", "greying", "graying", "decrepit",
)
_CHILD = (
    " child", "infant", "baby", "toddler", " boy", " girl", " kid ",
    "little boy", "little girl", "young boy", "young girl",
)
# Explicit grown-up nouns. If one of these describes the subject, an incidental
# "baby"/"child" in the scene text (e.g. a midwife holding an infant) must NOT
# demote the character to a child.
_ADULT_NOUN = (
    " woman", " women", " man", " men", "warrior", "monk", "sage", " king",
    "queen", "priest", "priestess", "guru", "matriarch", "patriarch", "sultan",
    " lord", " lady", "maiden", "rani", "raja", "mother", "father", "wife",
    "husband", "swami", "yogi", "midwife", "guardian", "general", "commander",
)


def _has(text, needles):
    return any(n in text for n in needles)


def infer_gender(text):
    """Return 'f', 'm', or None (unknown) from subject/name text."""
    f = _has(text, _FEMALE)
    m = _has(text, _MALE)
    if f and not m:
        return "f"
    if m and not f:
        return "m"
    if f and m:
        # Both mentioned (e.g. "twin face to a ... man") -> prefer the subject's
        # own noun: whichever appears first wins.
        fi = min((text.find(n) for n in _FEMALE if n in text), default=1 << 30)
        mi = min((text.find(n) for n in _MALE if n in text), default=1 << 30)
        return "f" if fi <= mi else "m"
    return None


def infer_age(text):
    """Return 'child', 'elder', or 'adult'.

    A child cue only wins when no explicit adult noun describes the subject, so
    an adult standing near a baby isn't mis-cast as an infant.
    """
    if _has(text, _CHILD) and not _has(text, _ADULT_NOUN):
        return "child"
    if _has(text, _ELDER):
        return "elder"
    return "adult"


def infer_cast(category, name, subject):
    """Map a character to an archetype id, or None for text-only jobs."""
    if category not in PEOPLE_CATEGORIES:
        return None
    if category == "crowd":
        return "crowd_group"

    text = f" {name.lower().replace('-', ' ')} {subject.lower()} "
    gender = infer_gender(text)
    age = infer_age(text)

    if age == "child":
        # girl/infant cues -> infant pool, else boy pool
        return "infant_child" if gender == "f" else "boy_child"
    if age == "elder":
        return "elder_woman" if gender == "f" else "elder_man"

    # adults
    if category == "hero":
        return "lead_woman" if gender == "f" else "lead_man"
    # ally / operative / villain -> generic (never the protagonists' faces)
    return "young_woman" if gender == "f" else "young_man"


def _identity_clause(arch, mode):
    desc = arch["descriptor"]
    if mode == "style":
        return (
            f"{desc} matching the look, ethnicity and attire feel of the "
            "reference group photograph"
        )
    return (
        f"preserve the exact facial identity and features of the reference "
        f"portrait, same real person's face, {desc} likeness kept consistent"
    )


def assign_reference(category, name, subject, seq):
    """Return the reference block for one job, or None if text-only.

    `seq` rotates the primary pick across the pool so repeated uses of the same
    archetype (many heroes, variants) don't all land on the identical photo.
    """
    arch_id = infer_cast(category, name, subject)
    if arch_id is None:
        return None
    arch = ARCHETYPES[arch_id]
    pool = arch["refs"]
    primary = pool[seq % len(pool)]
    mode = arch["mode"]
    return {
        "reference_archetype": arch_id,
        "reference_image": primary,
        "reference_pool": pool,
        "reference_mode": mode,  # "face" = lock identity, "style" = look only
        "reference_weight": FACE_WEIGHT if mode == "face" else STYLE_WEIGHT,
        "identity_clause": _identity_clause(arch, mode),
    }


def reference_index():
    """Machine-readable catalog written to data/reference_index.json."""
    return {
        "reference_dir": REF_DIR,
        "face_weight": FACE_WEIGHT,
        "style_weight": STYLE_WEIGHT,
        "people_categories": sorted(PEOPLE_CATEGORIES),
        "archetypes": {
            aid: {
                "label": a["label"],
                "who": a["who"],
                "mode": a["mode"],
                "descriptor": a["descriptor"],
                "refs": a["refs"],
            }
            for aid, a in ARCHETYPES.items()
        },
        "how_to_use": (
            "For each job with a non-null reference_image, feed that photo to a "
            "face/identity conditioner (IP-Adapter, InstantID, or img2img) at "
            "reference_weight. mode=face locks the person's identity; mode=style "
            "only borrows the group's look. Objects/animals/places have no "
            "reference and are pure text-to-image."
        ),
    }
