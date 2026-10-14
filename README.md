# StreakSpot

Marketing and legal site for **[StreakSpot](https://www.streakspot.com)** — an offline habit app for iPhone and Android.

**Live:** [www.streakspot.com](https://www.streakspot.com)

- `/` — latest app version (Version 2). Each version is its own page; the dropdown switches them.
- `/v/1` — Version 1, the previous landing copy
- `/android` — Android APK download (until Google Play)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Use

The Android APK is a GitHub Release asset: [StreakSpot.apk](https://github.com/ernshahi/streak-spot-web/releases/latest/download/StreakSpot.apk) (no login required).

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional env vars are listed in `.env.example`. The App Store button links to the live listing. Leave the Play Store URL empty until that listing is public; the Android button uses the Release download URL until then.

```bash
pnpm build
pnpm start
```

## Brand

Navy (`#1B2742`) and gold (`#A07A30`), cool paper canvas, editorial display type.
