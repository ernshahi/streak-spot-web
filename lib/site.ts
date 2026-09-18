export const site = {
  name: "StreakSpot",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ||
    "https://www.streakspot.com",
  supportEmail: "support@streakspot.com",
  appStoreId: "6811304319",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || "",
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || "",
  androidApkFileUrl:
    process.env.NEXT_PUBLIC_ANDROID_APK_URL?.trim() ||
    "https://github.com/ernshahi/streak-spot-web/releases/latest/download/StreakSpot.apk",
  androidPagePath: "/android",
} as const;

export const supportMailto = (subject?: string) =>
  `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject ?? "StreakSpot support")}`;
