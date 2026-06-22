#!/bin/bash
# Double-click this file to start the NEW modern reader website.
# The first run sets things up automatically (takes a minute). After it starts,
# your browser opens to the site. Close this window to stop the website.
cd "$(dirname "$0")/app"

if [ ! -d ".venv" ]; then
  echo "First-time setup: preparing the website (this happens once)..."
  python3 -m venv .venv
  .venv/bin/python -m pip install --upgrade pip >/dev/null
  .venv/bin/python -m pip install -e . >/dev/null
fi

echo ""
echo "Starting the Age of Mythos website..."
echo "When it says 'Uvicorn running', your site is live at:  http://localhost:5566"
echo "Leave this window open while you read. Close it to stop."
( sleep 3 ; open "http://localhost:5566" ) &
exec .venv/bin/python -m aom.web.main
