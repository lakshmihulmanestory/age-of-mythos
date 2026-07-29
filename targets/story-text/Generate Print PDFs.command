#!/bin/bash
# Double-click this file (or run it in Terminal) to (re)build all print PDFs
# from the current story text. Safe to run any time you change the .txt files.
#   - 8 chapter-wide PDFs  ->  print-pdf/
#   - 38 region PDFs       ->  print-pdf/by-region/
set -e
cd "$(dirname "$0")"

VENV=".pdf-venv"
if [ ! -d "$VENV" ]; then
  echo "First run: setting up Python tools (one time only)..."
  python3 -m venv "$VENV"
  "$VENV/bin/pip" install --quiet --upgrade pip
  "$VENV/bin/pip" install --quiet pypdf reportlab
fi

echo "Generating chapter-wide PDFs..."
"$VENV/bin/python" make-print-pdfs.py
echo
echo "Generating region-wise PDFs..."
"$VENV/bin/python" make-region-pdfs.py
echo
echo "Done."
echo "  Chapter PDFs: $(pwd)/print-pdf"
echo "  Region PDFs:  $(pwd)/print-pdf/by-region"
