"""
Story data for Age of Mythos image prompts, split per region / chapter.

Each module exposes a module-level `STORIES` list. A story is a dict:
    {
      "id": "<NN>-<kingdom-slug>",   # also used as filename stem
      "chapter": 1,                   # chapter number within Volume I
      "region": "south",              # region of Bharatavarsha
      "kingdom": "...",               # in-world kingdom name
      "state": "...",                 # real Indian state / territory inspiration
      "title": "...",
      "modern_ok": False,             # True allows near-future tech in scenes
      "style": "...",                 # FULL style anchor: Indian regional architecture,
                                      #   structures, dress aesthetic + DEDICATED palette
      "color_theme": "...",           # dedicated palette guidance (distinct per kingdom)
      "entities": [ (category, name, subject_prompt, opts_or_None), ... ],
    }

The engine (build_prompts.py) prepends `style` to each subject, appends a global
India anchor, and emits one job per entity (plus one per variant).

ALL_STORIES is the concatenation in reading order (Ch1 by region, then Ch2-4).
"""

from . import (
    ch1_south,
    ch1_central,
    ch1_east,
    ch1_north,
    ch1_northeast,
    ch1_west,
    ch2_civil_war,
    ch3_rise_of_beasts,
    ch4_great_epic,
)

ALL_STORIES = (
    ch1_south.STORIES
    + ch1_central.STORIES
    + ch1_east.STORIES
    + ch1_north.STORIES
    + ch1_northeast.STORIES
    + ch1_west.STORIES
    + ch2_civil_war.STORIES
    + ch3_rise_of_beasts.STORIES
    + ch4_great_epic.STORIES
)
