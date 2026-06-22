# MCP server (local) — let an AI agent explore the world

This is the **AI-agent integration**, kept at the repo root and separate from the
website. It speaks the **Model Context Protocol** over stdio and reads the shared
`aom.core` library in `app/` (it never writes to your story files).

### Setup (once)
1. Run the website setup once so dependencies are installed — double-click
   **`Start Modern Website.command`** (this creates `app/.venv`).
2. Merge the `age-of-mythos` block from **`claude_desktop_config.json`** into
   Claude Desktop's config:
   `~/Library/Application Support/Claude/claude_desktop_config.json`
   (fix the absolute paths if you moved the project).
3. Restart Claude Desktop.

### Test it by hand
```bash
app/.venv/bin/python mcp-server/server.py     # speaks MCP over stdio
```

### Tools the agent gets
`list_volumes`, `list_kingdoms`, `get_kingdom`, `get_story`, `search`,
`list_characters`, `get_character`, `get_game_data` (heroes/villains/weapons/
vehicles), `get_connections` (family tree), `reload_world`. Story texts are also
exposed as MCP resources (`story://<id>`).
