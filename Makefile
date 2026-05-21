dev:
	npm start
del:
	rm -rf node_modules package-lock.json
refresh:
	npx expo start --clear
icons:
	npm run generate-icons
kill:
	adb kill-server && adb start-server
token:
	npm run tokens
list-route:
	npx expo-router-sitemap  
prebuild:
	npx expo prebuild
prebuild-c:
	npx expo prebuild --clean
tree:
	tree app -> structure.txt  
ios-devices:
	xcrun simctl list devices
run-ios:
	npx expo run:ios --device "$$(xcrun simctl list devices booted | grep -oE '[A-F0-9-]{36}' | head -n 1)"
generate-apk:
	cd android && ./gradlew assembleRelease
install-apk:
	adb install -r android/app/build/outputs/apk/release/app-release.apk