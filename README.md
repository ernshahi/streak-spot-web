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

1. Import this repo in Vercel.
2. Framework preset: Next.js (defaults are fine).
3. Add custom domain `streakspot.app` (and `www` if you want).
4. Confirm the mobile app points at:
   - Privacy: `https://streakspot.app/privacy`
   - Support: `hello@streakspot.app`

```bash
pnpm build
pnpm start
```

## Brand

Visual language matches the mobile app: navy (`#1B2742`) and gold (`#A07A30`), cool paper canvas, editorial display type.
