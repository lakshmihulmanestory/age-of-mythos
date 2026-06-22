"""Shared content library used by both the website and the MCP server.

Read-only view over the story files on disk, assembled into a structured,
game-friendly :class:`~aom.core.catalog.Catalog`.
"""

from aom.core.catalog import Catalog, get_catalog

__all__ = ["Catalog", "get_catalog"]
