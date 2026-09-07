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

**Live:** [https://streak-spot.vercel.app](https://streak-spot.vercel.app)

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

### Custom domain

Add `streakspot.app` (and `www` if you want) in the Vercel project → Domains when ready. Until then, the live URLs are:

- Site: [https://streak-spot.vercel.app](https://streak-spot.vercel.app/)
- Privacy: [https://streak-spot.vercel.app/privacy](https://streak-spot.vercel.app/privacy)
- Terms: [https://streak-spot.vercel.app/terms](https://streak-spot.vercel.app/terms)
- Support: `support@streakspot.com`

The mobile app defaults (`EXPO_PUBLIC_PRIVACY_POLICY_URL`) already point at the Vercel privacy URL.

### Local production build

```bash
pnpm build
pnpm start
```

## Brand

Visual language matches the mobile app: navy (`#1B2742`) and gold (`#A07A30`), cool paper canvas, editorial display type.
