import type { VersionId } from "@/lib/versions";

import type { VersionContent } from "./types";

export const enVersions: Record<VersionId, VersionContent> = {
  "2": {
    id: "2",
    label: "Version 2",
    description:
      "StreakSpot: place-based activity streaks, a daily macros log, and an optional meal photo scan. Activities and meals stay on your phone. Sign in only to scan.",
    heroBody:
      "Build streaks for the gym, class, or any place you go — check in when you arrive or by hand. Log meals and macros on the same phone, and photograph a meal when you want an estimate. Streaks and meals stay on the device.",
    featuresTitle: "Built for showing up",
    featuresIntro:
      "Place-based streaks, a meal log, and an optional photo scan. Activities, visits, and meals you type stay on your phone.",
    features: [
      {
        title: "Place-based streaks",
        body: "Tie a habit to a real place — gym, class, studio — or skip the pin and stay manual-only. Load samples if you want a head start. Geofences can check you in when you arrive, even if the app is closed.",
      },
      {
        title: "Manual when you need it",
        body: "Log visits by hand, confirm automatic check-ins so a GPS glitch does not count, or skip Always location entirely. Rest days and a start date stay in the streak math.",
      },
      {
        title: "Clock reminders",
        body: "Add optional times on any activity — medication, a class, a walk. They ping on your active weekdays only. A reminder never logs a visit or changes your streak.",
      },
      {
        title: "Macros, simply",
        body: "Log meals with calories (protein, carbs, and fat optional). Optional profile setup estimates daily goals; you can edit or skip. Day view, calendar, and meal reminders. Type a meal, or photograph one and confirm the estimate before it is saved.",
      },
      {
        title: "Meal scan",
        body: "Photograph a meal or a nutrition label with the camera or your photo library. The picture is resized on your phone and sent once to estimate the name, calories, and protein, carbs, and fat. The photo is not stored. Sign in with email or Google to scan. Typing a meal does not need an account.",
      },
      {
        title: "Account",
        body: "Settings shows the signed-in email. Sign out from there. Delete account asks you to confirm, then removes that sign-in and its scan data. Streaks, visits, and meals already on the phone stay.",
      },
      {
        title: "Support notes",
        body: "Send a note from the app, at least a short message, with up to three photos. The note is saved so it can be read.",
      },
      {
        title: "On your phone",
        body: "Activities, visits, and meals you type live in on-device SQLite. No ads. Export, reset, or uninstall to remove them from the phone. A scan photo is sent once for the estimate and is not kept.",
      },
      {
        title: "Backup you keep",
        body: "Export a JSON file through the share sheet (Files, AirDrop). Restore replaces what is on the phone. That file is not uploaded.",
      },
    ],
    privacyCta: {
      title: "What stays on your phone",
      body: "Activities, visits, typed meals, and places stay in on-device SQLite. Location is used on the device for geofencing when you allow it. Notifications are local. A backup is a file you save. Scanning a meal sends that photo once and does not store it, and needs a sign-in. A support note can be saved with up to three photos. Read the {{privacy}} and {{terms}}.",
      privacyLabel: "Privacy Policy",
      termsLabel: "Terms of Use",
    },
  },
  "1": {
    id: "1",
    label: "Version 1",
    description:
      "StreakSpot is an offline habit app for iPhone and Android: place-based activity streaks, optional clock reminders, and a daily macros log. No account. No cloud. No ads.",
    heroBody:
      "Build streaks for the gym, class, or any place you go — check in when you arrive or by hand. Keep daily macros on the same phone. No account. No cloud. No ads.",
    featuresTitle: "Built for showing up",
    featuresIntro:
      "One app: activity streaks (place or manual), optional clock reminders, and a lightweight meal log — without accounts, servers, or ads.",
    features: [
      {
        title: "Place-based streaks",
        body: "Tie a habit to a real place — gym, class, studio — or skip the pin and stay manual-only. Load samples if you want a head start. Geofences can check you in when you arrive, even if the app is closed.",
      },
      {
        title: "Manual when you need it",
        body: "Log visits by hand, confirm automatic check-ins so a GPS glitch does not count, or skip Always location entirely. Rest days and a start date stay in the streak math.",
      },
      {
        title: "Clock reminders",
        body: "Add optional times on any activity — medication, a class, a walk. They ping on your active weekdays only. A reminder never logs a visit or changes your streak.",
      },
      {
        title: "Macros, simply",
        body: "Log meals with calories (protein, carbs, and fat optional). Optional profile setup estimates daily goals; you can edit or skip. Day view, calendar, and meal reminders — no camera, barcode, food search, or AI.",
      },
      {
        title: "Private by design",
        body: "No account. No cloud sync. No ads. Everything lives in on-device SQLite until you export it, reset it, or uninstall. Apple App Privacy: data not collected.",
      },
      {
        title: "Backup you keep",
        body: "Export a JSON file through the share sheet (Files, AirDrop). Restore replaces what is on the phone. We never upload that file.",
      },
    ],
    privacyCta: {
      title: "Your data stays with you",
      body: "StreakSpot does not create user accounts or sync to our servers. Location is used on-device for geofencing when you allow it. Notifications are local only. A backup is a file you save — not a StreakSpot cloud. Apple’s App Privacy label is data not collected. Read the full details in our {{privacy}} and {{terms}}.",
      privacyLabel: "Privacy Policy",
      termsLabel: "Terms of Use",
    },
  },
};
