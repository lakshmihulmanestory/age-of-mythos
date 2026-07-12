# OpenArt image generation — resume point

**Task:** Generate ONE image via the OpenArt MCP server, show it for approval before doing any more.

## Setup already done
- OpenArt MCP server added to Claude Code (HTTP, `https://mcp.openart.ai/mcp`), OAuth authenticated, shows ✓ Connected.
- Tools only load at session startup — that's why we restarted.

## What to generate
- **Subject:** Hero — Vikramaditya, the Hoysala warrior-scholar of Vijayanagara-Reborn.
- **Save to:** `content/volume-1-maha-parva/chapter-1-rise-of-legends/bharatavarsha/regions/south/vijayanagara-reborn/media/kingdoms/vijayanagara-reborn-vikramaditya.png`
  (create the `media/kingdoms/` subfolder — it doesn't exist yet)
- **Prompt source:** [image-prompts/04-vijayanagara-buried-temple.md](image-prompts/04-vijayanagara-buried-temple.md)

## Exact prompt
Positive:
```
cinematic concept art, Karnataka Malenad rainforest fantasy, Hoysala temple architecture, soapstone carving detail, serpent-and-stone motif, deep emerald-green and white-sand palette, misty primordial jungle, reverent archaeological awe, highly detailed, intricate filigree carving, volumetric god-rays, artstation, octane render, 8k — A massive immovable South Indian warrior-scholar, built like the carved pillars of Belur, broad shoulders, skin the colour of seasoned teak, calm patient eyes, scarred, descendant of the Hoysala guards, carrying the Hoysalastra (a heavy serrated dark-magnetite broadsword), simple earth-toned forest warrior dress with Hoysala motifs, a King Cobra bonded near him, moving through dense Malenad rainforest as though the trees know him, holding a torch aloft, quiet strength
```
Negative:
```
slim, ornate royal robes, urban setting, clean-shaven dandy, glossy armor
```

## After the image is generated
Show it to the user for approval. Do NOT generate any further images until they confirm.
