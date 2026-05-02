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