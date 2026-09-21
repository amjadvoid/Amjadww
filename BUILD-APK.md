# Iron Mandate → Android APK

This project is prepared for Capacitor 8 and Android.

## Important: the app has a backend

Iron Mandate uses TanStack Start server functions for nation saves, world data,
architect actions, and related state. For a fully working APK, the web app must
be deployed somewhere reachable by the phone.

Set the deployment URL as `CAP_SERVER_URL`, for example:

```text
https://your-iron-mandate.example.com
```

If `CAP_SERVER_URL` is not set, Capacitor packages the generated static web
assets instead. The UI may load, but backend actions that require the server
will not work.

## Local build (computer with Android SDK)

```bash
npm install
npx cap add android
npm run mobile:sync
cd android
./gradlew assembleDebug
```

APK:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## GitHub Actions

Push this project to a GitHub repository. Optionally create a repository
variable named `CAP_SERVER_URL` containing the deployed Iron Mandate URL.
Then run **Actions → Build Iron Mandate APK → Run workflow**.

The workflow uploads `app-debug.apk` as an artifact.

## App identity

- Name: Iron Mandate
- Package ID: `com.amjad.ironmandate`
