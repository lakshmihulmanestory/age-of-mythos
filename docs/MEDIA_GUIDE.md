# Age of Mythos — Where Pictures & Media Go

> Plain guide to where every image, video, or audio file belongs.
> (This replaces an older, aspirational layout that was never actually used.)

---

## The simple rule

**Media lives next to the thing it belongs to.** There is no separate giant
`media/` tree to learn — you put a picture in the same folder as the story or
kingdom it illustrates.

```
content/.../<kingdom>/
    media/                 ← pictures for the WHOLE kingdom
        emblem/  portraits/  weapons/  vehicles/  tattoo/
    stories/
        <story-name>/
            story.md       ← the story
            images/        ← pictures for THIS story only
```

| I have a picture of... | Put it in... | Use it in the story by writing... |
|---|---|---|
| a scene from one story | that story's `images/` folder | `![](images/scene-name.png)` |
| the kingdom's hero / emblem / weapon | the kingdom's `media/` folder | (kingdom pages already show these) |
| the whole world (maps, family trees, origins) | `content/world/` or `media/maps/` | linked from World & Lore |

That's all most people need. The rest below is reference for artists.

---

## Adding a picture to a story (step by step)

1. Open the story's folder (e.g. `content/volume-1-maha-parva/chapter-1-rise-of-legends/south/parashurama-kshetra/stories/the-109th-form/`).
   *(Chapter 1 stories sit under `bharatavarsha/regions/<region>/` in the path — follow the folders, or just use the website's Map to find the story, then look in that folder.)*
2. Drop your image file into the `images/` folder there.
3. Open `story.md` and, on its own line where you want the picture, write:
   `![](images/your-file-name.png)`
4. Save, then double-click **`Rebuild Website.command`** in the main folder.

---

## File naming (recommended, optional)

Keep names lowercase with hyphens so they work everywhere:

```
<subject>-<type>-<number>.<ext>
e.g.  parashurama-portrait-01.png   axe-scene-02.jpg   kerala-backwaters-bg-01.png
```

Type words that help: `portrait`, `scene`, `bg` (background), `emblem`,
`weapon`, `vehicle`, `map`, `cover`, `concept`, `ref` (reference).

---

## World & lore art

World-level material that belongs to no single kingdom (continent origins, the
galactic threat, family trees, vimana zones, full-world maps) lives in:

```
content/world/        ← the lore pages themselves
media/maps/           ← whole-world / continent maps
media/volumes/        ← volume cover art
```

These show up on the home page and the Map under **World & Lore**.
