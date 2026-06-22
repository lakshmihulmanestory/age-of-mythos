# Age of Mythos — application layer (`app/`)

This folder holds the **website code**. The **story itself stays outside it**, at
the repository root (`content/`, `story-text/`, `audio/`, `generated-images/`,
`media/`). Nothing here ever changes your writing — it only reads and presents it.

```
age-of-mythos/
├── content/, story-text/, audio/, …   the story (untouched)
├── app/
│   ├── aom/core/    shared library: reads the story into one structured "world"
│   ├── aom/web/     the website (modern reader) + a JSON API for game-building
│   └── pyproject.toml
├── mcp-server/      local MCP server so an AI agent can explore the world (root)
└── docker/          Dockerfile + docker-compose to run the site in a container (root)
```

`app/aom/core` loads the world once; both the website and the MCP server read
from it. That is the clean split: **content is data, this is code.** Docker
(deployment) and the MCP server (AI integration) sit at the repo root, separate
from the website app.

---

## 1. Run the website (easiest)

Double-click **`Start Modern Website.command`** in the project's main folder.
The first run sets everything up; then your browser opens to
<http://localhost:8000>.

Or from a terminal:

```bash
cd app
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
python -m aom.web.main          # → http://localhost:8000
```

What you get:

- **`/`** — the six continents (volumes) as tiles.
- **`/v/1`** → chapters → kingdoms → the **modern reader** (`/read/<story>`):
  serif typography, light/dark, font-size, reading-progress, scene art,
  narration audio, and ‹ Previous / Next › that walks the whole novel in order.
- **`/characters`**, **`/search`**.

Edit a `story.md` on disk, then `POST /api/reload` (or restart) to see the change.

## 2. Run it in Docker (one command)

```bash
docker compose -f docker/docker-compose.yml up
```

The story folders are mounted **read-only** into the container, so the app can
read them but never alter them. Site is at <http://localhost:8000>.

## 3. Game-building data (JSON API)

Every endpoint is read-only and returns clean JSON for a game engine:

| Endpoint | What it gives |
|---|---|
| `GET /api/export.json` | the **entire world** in one document |
| `GET /api/kingdoms` · `/api/kingdoms/{slug}` | kingdoms + heroes/villains/weapons/vehicles/art |
| `GET /api/characters` · `/api/characters/{id}` | full character stats |
| `GET /api/stories` · `/api/stories/{id}` | story text + asset URLs |
| `GET /api/search?q=` | search stories / kingdoms / characters |
| `POST /api/reload` | rebuild the world after editing story files |

## 4. Connect an AI agent (MCP, local)

The MCP server lives at the repo root in **`mcp-server/`** (see its own README).
It lets Claude Desktop explore the world (read stories, search, pull game data).
Register it once by merging the `age-of-mythos` block from
**`mcp-server/claude_desktop_config.json`** into Claude Desktop's config, then
restart Claude Desktop. Test by hand:

```bash
app/.venv/bin/python mcp-server/server.py     # speaks MCP over stdio
```

---

### Settings (environment variables)

| Variable | Default | Purpose |
|---|---|---|
| `AOM_REPO_ROOT` | the repo root | where the story content lives |
| `AOM_PORT` / `AOM_HOST` | `8000` / `0.0.0.0` | website address |
| `AOM_RELOAD` | unset | set to `1` for auto-reload while developing |
