export const site = {
  name: "StreakSpot",
  tagline: "Habits that stick to places.",
  description:
    "StreakSpot tracks place-based activity streaks and daily macros entirely on your phone — no account, no cloud.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ||
    "https://streakspot.app",
  supportEmail: "hello@streakspot.app",
  // Set these when store listings go live; leave empty to show “Coming soon”.
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || "",
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || "",
  legalEffectiveDate: "July 12, 2026",
} as const;

export const supportMailto = `mailto:${site.supportEmail}?subject=${encodeURIComponent("StreakSpot support")}`;
