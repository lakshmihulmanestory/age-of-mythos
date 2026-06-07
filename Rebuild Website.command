#!/bin/bash
# Double-click this file to update the website after editing any story.
# It rebuilds all the pages from your story.md files. Safe to run anytime.
cd "$(dirname "$0")"
echo "Rebuilding the Age of Mythos website..."
python3 tools/build_site.py
echo ""
echo "Done!  Open  index.html  in your web browser to see the result."
echo "(You can close this window.)"
