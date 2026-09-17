export const site = {
  name: "StreakSpot",
  tagline: "Habits that stick to places.",
  description:
    "StreakSpot is an offline iPhone habit app: place-based activity streaks, optional clock reminders, and a daily macros log. No account. No cloud. No ads.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ||
    "https://www.streakspot.com",
  supportEmail: "support@streakspot.com",
  // ASC App ID (listing is not public until Apple publishes 1.0).
  appStoreId: "6811304319",
  // Set when the App Store listing is live; leave empty to show “In review”.
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || "",
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || "",
  legalEffectiveDate: "September 17, 2026",
} as const;

export const supportMailto = `mailto:${site.supportEmail}?subject=${encodeURIComponent("StreakSpot support")}`;
