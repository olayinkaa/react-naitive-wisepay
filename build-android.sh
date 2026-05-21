#!/usr/bin/env bash
set -euo pipefail
 
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
ARTIFACT="$ROOT/android/app/build/outputs/apk/release/app-release.apk"
DEST_DIR="$HERE/builds"
DEST="$DEST_DIR/platano.apk"
 
echo "==> Building Android release APK"
cd "$ROOT/android"
./gradlew assembleRelease
 
mkdir -p "$DEST_DIR"
rm -f "$DEST"
cp "$ARTIFACT" "$DEST"
 
echo "Done: $DEST"