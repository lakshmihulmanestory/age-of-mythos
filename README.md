# Age of Mythos

A story-world (novel + kingdoms + characters) and a website that presents it. The
website is a small Python app; the story content lives in `content/`, `targets/`
and `media/` and is only ever **read**, never modified, by the app.

This README covers the quickest path: **run the website in Docker and open it in
your browser.**

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and
  running (this includes `docker compose`).

## Start the container

From the repository root:

```bash
docker compose -f docker/docker-compose.yml up
```

The first run builds the image (`age-of-mythos-web`); later runs start instantly.

To run it in the background, add `-d`:

```bash
docker compose -f docker/docker-compose.yml up -d
```

## View the UI

Once the container is running, open:

**<http://localhost:5566>**

From there you can:

- browse the six continents (volumes) → chapters → kingdoms,
- open the **modern reader** for any story (serif typography, light/dark mode,
  font sizing, reading progress, scene art, narration audio),
- use **‹ Previous / Next ›** to walk the whole novel in order,
- visit `/characters` and `/search`.

## Stop the container

Press `Ctrl+C` in the terminal running it, or if you started it with `-d`:

```bash
docker compose -f docker/docker-compose.yml down
```

## How content updates work

The story folders (`content/`, `targets/`, `media/`, `Volume-1-Family-Tree.md`)
are bind-mounted **read-only** into the container, so the app reads your writing
but can never change it. After editing a `story.md` on disk, refresh the app's
view without a full restart:

```bash
curl -X POST http://localhost:5566/api/reload
```

## Rebuild after code changes

If you change the app code under `app/`, rebuild the image:

```bash
docker compose -f docker/docker-compose.yml up --build
```

---

For running the site **without** Docker, the JSON game-data API, and the MCP
integration, see [`app/README.md`](app/README.md).
