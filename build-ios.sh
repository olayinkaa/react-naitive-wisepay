#!/usr/bin/env bash
set -euo pipefail
 
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/" && pwd)"
ARTIFACT="$ROOT/ios/build/Build/Products/Release-iphonesimulator/wisepay.app"
DEST_DIR="$HERE/builds"
DEST="$DEST_DIR/wisepay.app"
 
echo "==> Building iOS Simulator .app (Release)"
cd "$ROOT/ios"
xcodebuild \
  -workspace wisepay.xcworkspace \
  -scheme wisepay \
  -configuration Release \
  -sdk iphonesimulator \
  -derivedDataPath build \
  CODE_SIGNING_ALLOWED=NO \
  -quiet
 
mkdir -p "$DEST_DIR"
rm -rf "$DEST"
cp -R "$ARTIFACT" "$DEST"
 
echo "Done: $DEST"