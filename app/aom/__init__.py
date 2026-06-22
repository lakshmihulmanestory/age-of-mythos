"""Age of Mythos — technical application layer.

This package holds *only* technical code (website, game-data API, MCP server).
The story content lives outside it, at the repository root (``content/``,
``story-text/``, ``audio/``, ``generated-images/``, ``media/``) and is the single
source of truth. Nothing here writes to the story; it only reads and presents it.
"""

__version__ = "0.1.0"
