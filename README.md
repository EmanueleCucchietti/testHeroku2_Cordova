# testHeroku2_Cordova

Cordova Branch
Android Application Based on Cordova

Npm Modules Installed:
- `cordova-android` -> "Cordova Android is an Android application library that allows for Cordova-based projects to be built for the Android Platform" - https://www.npmjs.com/package/cordova-android

App makes requests to heroku-based server at "https://emacuch-test2.herokuapp.com/"
Cordova App due to the android references can only make https request, so every http request will be blocked

## Cordova
To build and emulate cordova project is necessary:
- Download npm packages:
    - "npm i" (in the project root folder)
- Download and add the android platform:
    - "cordova platform add android" (in the project root folder)

To emulate the cordova project is necessary:
- Start Android Studio
- "cordova emulate android" (in the project root folder)


---------------------------------------------------

# Emanule Cucchietti