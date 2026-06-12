#!/bin/bash
# render_kannada_audio.sh — render edge-tts Kannada audio for every
# story-text/kannada/*.kn.txt that doesn't already have a matching mp3 in
# audio/kannada/. Idempotent: re-run as new translations are added.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=story-text/kannada
OUT=audio/kannada
VOICE="${1:-kn-IN-SapnaNeural}"
mkdir -p "$OUT"
shopt -s nullglob
for f in "$SRC"/*.kn.txt; do
  base=$(basename "$f" .kn.txt)
  mp3="$OUT/$base.kn.mp3"
  if [[ -f "$mp3" ]]; then
    echo "skip (exists): $base"
    continue
  fi
  echo "render: $base"
  python3.14 -m edge_tts --voice "$VOICE" -f "$f" --write-media "$mp3"
done
echo "done."
