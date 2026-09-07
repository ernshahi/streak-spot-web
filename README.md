# StreakSpot Web

Marketing and legal site for the **StreakSpot** mobile app.

- `/` — landing
- `/privacy` — Privacy Policy (App Store / Play link target)
- `/terms` — Terms of Use

Stack: Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Vercel-ready.

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional store links (see `.env.example`):

```bash
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/...
```

## Deploy (Vercel)

**Live:** [https://www.streakspot.com](https://www.streakspot.com)

Project: `streak-spot` · Dashboard: [Vercel project](https://vercel.com/ernabinshahi-gmailcoms-projects/streak-spot)

### Redeploy (CLI)

Linked via `.vercel/project.json`. From the repo root:

```bash
npx vercel deploy --prod --scope ernabinshahi-gmailcoms-projects
```

Preview deploy (no production alias):

```bash
npx vercel deploy --scope ernabinshahi-gmailcoms-projects
```

### First-time / new machine

```bash
npx vercel link --scope ernabinshahi-gmailcoms-projects
npx vercel deploy --prod --scope ernabinshahi-gmailcoms-projects
```

Framework preset: Next.js (auto-detected). Optional env vars from `.env.example` can be set in the Vercel project settings.

### Live URLs

Custom domain is live:

- Site: [https://www.streakspot.com](https://www.streakspot.com/)
- Privacy: [https://www.streakspot.com/privacy](https://www.streakspot.com/privacy)
- Terms: [https://www.streakspot.com/terms](https://www.streakspot.com/terms)
- Support: `support@streakspot.com`

The mobile app defaults (`EXPO_PUBLIC_PRIVACY_POLICY_URL` / `EXPO_PUBLIC_TERMS_OF_USE_URL`) point at these URLs.

### Local production build

```bash
pnpm build
pnpm start
```

## Brand

Visual language matches the mobile app: navy (`#1B2742`) and gold (`#A07A30`), cool paper canvas, editorial display type.
