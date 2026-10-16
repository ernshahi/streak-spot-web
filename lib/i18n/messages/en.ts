import type { Messages } from "./types";

export const en = {
  site: {
    tagline: "Habits that stick to places.",
    description:
      "StreakSpot is a habit app for iPhone and Android: place-based activity streaks, optional clock reminders, and a daily macros log. Activities, visits, and meals stay on your phone.",
    legalEffectiveDate: "October 15, 2026",
    supportSubject: "StreakSpot feedback",
  },
  nav: {
    privacy: "Privacy",
    terms: "Terms",
    android: "Android",
    support: "Feedback",
    menu: "Menu",
    closeMenu: "Close menu",
  },
  footer: {
    blurb:
      "Place-based streaks and a meal log. Activities and meals stay on your phone.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    android: "Android",
    rights: "All rights reserved.",
  },
  versions: {
    label: "App version",
  },
  store: {
    downloadOnThe: "Download on the",
    getItOn: "Get it on",
    appStore: "App Store",
    googlePlay: "Google Play",
    inReview: "In review",
    comingSoon: "Coming soon",
    reviewNote: "iPhone 1.0 is in App Store review.",
    downloadApk: "Download APK",
    getTheApk: "Get the APK",
  },
  android: {
    title: "Download StreakSpot for Android",
    metaDescription:
      "Sideload the StreakSpot APK until the app is on Google Play. Offline habit streaks and macros. No account.",
    heading: "StreakSpot for Android",
    body: "Google Play is not live yet. You can install the same 1.0 app from an APK hosted here. Data stays on your phone — no account, no cloud.",
    download: "Download APK",
    packaging: "The Android APK is being packaged. Check back shortly.",
    whatsNew: "What's new",
    build: "Build {{build}}",
    stepsTitle: "Install",
    steps: [
      "Tap Download APK and save the file.",
      "Open the download. If Android asks, allow your browser to install unknown apps.",
      "Install StreakSpot, then open it from the app drawer.",
    ],
    playNote: "Play Protect may warn because this build is not from Google Play yet. That is expected for a site download.",
  },
  theme: {
    toggle: "Toggle color theme",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
  },
  copyEmail: {
    copy: "Copy email",
    copied: "Copied",
    copyAria: "Copy {{email}}",
    copiedAria: "Email copied",
  },
  legal: {
    effectiveDateLabel: "Effective date",
  },
  privacy: {
    title: "Privacy Policy",
    metaDescription:
      "How StreakSpot handles your information: habits, places, and meals stay on your device; optional sign-in for meal scan; scan photos are analyzed and not kept on our servers.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "StreakSpot (“we,” “us”) is a mobile app for place-based activity streaks and a daily meal / macros log. Activities, visits, places, meals, goals, and settings are stored on your device. We do not show ads and we do not sync your habit, location, or meal log to a server.",
          },
          {
            type: "p",
            text: "A few optional features send data off the device: meal scan (which requires signing in), the sign-in account itself, and support notes you choose to send. This policy explains what each one sends, why, and how to delete it. Everything else works without an account. There is no StreakSpot cloud backup; you can export or restore a JSON file on the device through the system share sheet.",
          },
        ],
      },
      {
        title: "Information stored on your device",
        blocks: [
          {
            type: "p",
            text: "The following is stored locally in an on-device SQLite database and related app storage:",
          },
          {
            type: "ul",
            items: [
              "Activities — names, icons/colors, active weekdays / rest days, start dates, minimum on-site duration, optional clock reminder times, and related settings.",
              "Locations — map pins (latitude / longitude), geofence radius, and metadata used to prioritize which regions are monitored.",
              "Visits — check-in / check-out times, confirmation status (for example pending, confirmed, expired), whether a visit came from a geofence or was logged manually, and optional location tags.",
              "Meals / macros — meal names, calories, optional protein / carbs / fat, and timestamps; for meals saved from a scan, whether the meal came from a scan, the estimated ingredient list, and a small thumbnail of the photo; daily macro goals; optional meal-reminder preferences; and, if you use profile setup, height, weight, age, gender, activity level, and goal used only to estimate those targets on the device.",
              "App preferences — appearance (theme, accent color, and related display preferences), notification toggles, visit-confirmation settings, and similar configuration.",
            ],
          },
          {
            type: "p",
            text: "Streak and macro summaries are computed on-device from this local data. We do not receive copies of it.",
          },
        ],
      },
      {
        title: "Account (optional)",
        blocks: [
          {
            type: "p",
            text: "Signing in is only needed for meal scan. You can create an account with an email address and password, or sign in with Google. Accounts are handled by Supabase, the service that hosts our sign-in and scan server. Your account holds your email address and a user ID. We use the user ID to apply daily scan limits; a small usage counter is kept for this. Your meals and habits are not linked to the account or uploaded.",
          },
          {
            type: "p",
            text: "You can delete your account at any time in the app (Settings → Account → Delete account). This deletes your sign-in account and its scan usage record from our server and signs you out. Data on your device stays until you reset it or uninstall the app.",
          },
        ],
      },
      {
        title: "Meal scan photos",
        blocks: [
          {
            type: "p",
            text: "Meal scan is optional. When you take or choose a photo of a meal or nutrition label and tap Scan, the app shrinks the photo on your device and sends it, together with the optional note you typed (for example the portion size), to our server. Our server forwards the photo and note to OpenAI only to estimate the meal name, calories, macros, and ingredients, and returns the estimate to the app.",
          },
          {
            type: "p",
            text: "The photo and note are used only for that analysis. They are not kept on our servers. OpenAI processes them as a third-party service under its own terms and policies.",
          },
          {
            type: "p",
            text: "If you save the meal, the app keeps a small thumbnail of the photo on your device only, so you can recognize the meal in your log. The thumbnail is never uploaded and is deleted when you delete the meal. Backup files contain only a reference to it, not the image.",
          },
        ],
      },
      {
        title: "Support notes",
        blocks: [
          {
            type: "p",
            text: "If you send a note from Support in the app, we store the note, up to 3 photos you attach, the app version, platform, and app language, plus your user ID if you are signed in, so we can read and respond to it. Nothing is sent unless you tap Send.",
          },
        ],
      },
      {
        title: "Location",
        blocks: [
          {
            type: "p",
            text: "StreakSpot can use your device’s location to detect when you enter or leave activity locations you define (geofencing), including while the app is closed, if you grant Always / background location permission. You may also grant When-In-Use access only, or deny location entirely and log visits manually.",
          },
          {
            type: "p",
            text: "Location coordinates for your saved places and visits are stored on your device. Geofence monitoring is performed using Apple or Google operating-system location services on your device. Those platform providers process location according to their own terms and privacy policies.",
          },
          {
            type: "p",
            text: "We do not upload your location history to a StreakSpot server. Denying or later revoking location permission does not remove the rest of the app; automatic check-ins simply will not run.",
          },
        ],
      },
      {
        title: "Maps",
        blocks: [
          {
            type: "p",
            text: "When you add or edit a place, the app shows a map so you can drop a pin and set a geofence radius. On iOS this uses Apple Maps (MapKit). On Android it may use Google Maps / the Maps SDK. Map tiles and related map services are provided by Apple or Google and are subject to their terms and privacy policies. A Google Maps API key configured for the Android app is used to load those map services; it is not used by us to collect your personal habit data.",
          },
        ],
      },
      {
        title: "Notifications",
        blocks: [
          {
            type: "p",
            text: "StreakSpot uses local notifications only (for example check-in / check-out alerts, confirm-visit reminders, optional per-activity clock reminders, and optional meal reminders you schedule). Activity clock reminders do not log a visit or change streak math. The app does not use remote push notification delivery through our servers.",
          },
          {
            type: "p",
            text: "Notification permission is optional. You can control activity and meal reminder settings inside the app, and in your device system settings.",
          },
        ],
      },
      {
        title: "Local backup",
        blocks: [
          {
            type: "p",
            text: "Settings lets you export a JSON backup (activities, reminders, visits, meals, goals, preferences, and saved places) through the system share sheet — for example Files or AirDrop. Meal photo thumbnails are not included. Restore replaces the data on this device with that file after you confirm. We do not receive or store the backup. Anyone you share the file with can read it; treat it like other personal files on your device.",
          },
        ],
      },
      {
        title: "What we do not collect",
        blocks: [
          {
            type: "ul",
            items: [
              "No cloud sync or server copy of your activities, visits, places, or meal log.",
              "No location history on our servers.",
              "No advertising, tracking, analytics SDK, or crash-reporting service operated by us.",
              "No HealthKit / Google Fit sync or similar third-party health connectors.",
            ],
          },
          {
            type: "p",
            text: "Your device manufacturer, app store, or OS may still process technical information (for example install attribution, diagnostics you opt into with Apple or Google) under their policies. That is outside StreakSpot’s control.",
          },
        ],
      },
      {
        title: "How we use information",
        blocks: [
          {
            type: "p",
            text: "We use information only to provide app features, such as:",
          },
          {
            type: "ul",
            items: [
              "Automatic and manual visit logging and streak calculation.",
              "Optional activity clock reminders and meal reminders.",
              "Macro totals, goals, calendars, and (if you choose) on-device estimates from a profile you enter.",
              "Estimating a meal from a photo you choose to scan, and applying scan limits to your account.",
              "Reading and responding to support notes you send.",
              "Remembering your appearance and notification preferences.",
              "Local export and restore of a backup file you control.",
            ],
          },
          {
            type: "p",
            text: "We do not sell your information or use it for advertising.",
          },
        ],
      },
      {
        title: "Retention and deletion",
        blocks: [
          {
            type: "p",
            text: "Data on your device remains until you delete it. From Settings you can reset activities (and related locations, reminders, and visits), reset macros (meals, default goals, meal reminders, and setup profile), or reset the entire app. Deleting a meal also deletes its photo thumbnail. Uninstalling StreakSpot removes the app’s local storage, subject to how your operating system handles device backups. A file you exported earlier is not deleted unless you delete it yourself.",
          },
          {
            type: "p",
            text: "Scan photos and notes are not kept on our servers after the analysis. Your account and its scan usage record are kept until you delete the account in the app. For questions about support notes you sent, contact {{email}}.",
          },
        ],
      },
      {
        title: "Children",
        blocks: [
          {
            type: "p",
            text: "StreakSpot is not directed at children under 13 (or the equivalent minimum age in your jurisdiction), and we do not knowingly collect personal information from children. Most data stays on the device, so parents and guardians should supervise device use, sign-in, and permissions as appropriate.",
          },
        ],
      },
      {
        title: "International users",
        blocks: [
          {
            type: "p",
            text: "Most processing described here happens on your device. Sign-in, meal scan, and support notes are processed by Supabase and, for meal scan, OpenAI, which may be located in other countries. If you contact us by email, your message is processed where we read and respond to support mail.",
          },
        ],
      },
      {
        title: "Changes",
        blocks: [
          {
            type: "p",
            text: "We may update this Privacy Policy as the product or legal requirements change. The effective date at the top of this page will be revised when we do. Continued use of the app after an update means you acknowledge the revised policy.",
          },
        ],
      },
      {
        title: "Contact",
        blocks: [
          {
            type: "p",
            text: "Questions about privacy: {{email}}.",
          },
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    metaDescription: "Terms governing your use of the StreakSpot mobile application.",
    sections: [
      {
        title: "Agreement",
        blocks: [
          {
            type: "p",
            text: "These Terms of Use (“Terms”) govern your download and use of the StreakSpot mobile application (“App”). By installing or using the App, you agree to these Terms. If you do not agree, do not use the App.",
          },
          {
            type: "p",
            text: "The App is provided by the StreakSpot team. Support contact: {{email}}.",
          },
        ],
      },
      {
        title: "What the App does",
        blocks: [
          {
            type: "p",
            text: "StreakSpot helps you track place-based activity streaks (via optional geofencing and/or manual visits), optional clock reminders on activities, and meal / macro logs, with an optional photo-based meal scan. The App stores your data on your device, does not use cloud sync, and does not show ads. An account (email and password, or Google) is only needed for meal scan, and you can delete it in the App.",
          },
          {
            type: "p",
            text: "Features, design, and availability may change over time. Store listing descriptions and in-app copy describe current functionality more specifically than these Terms.",
          },
        ],
      },
      {
        title: "License",
        blocks: [
          {
            type: "p",
            text: "We grant you a personal, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, for your own non-commercial use, subject to these Terms and the rules of the Apple App Store or Google Play (as applicable).",
          },
          {
            type: "p",
            text: "You may not copy, modify, distribute, reverse engineer (except where prohibited restrictions are not allowed by law), rent, or create derivative works from the App, or remove proprietary notices.",
          },
        ],
      },
      {
        title: "Your responsibilities",
        blocks: [
          {
            type: "ul",
            items: [
              "You are responsible for the accuracy of activities, locations, visits, reminder times, profile details, and meal entries you create.",
              "You are responsible for granting, denying, or revoking device permissions (location, notifications) and for understanding that background location can affect battery usage.",
              "The App does not provide a StreakSpot cloud backup. You may export or restore a local JSON file through the system share sheet. You are responsible for that file. Resetting data in Settings or uninstalling the App permanently deletes on-device information (subject to how your operating system handles device backups).",
              "Do not use the App in any way that violates applicable law or interferes with others’ use of devices or networks.",
            ],
          },
        ],
      },
      {
        title: "Location and notifications",
        blocks: [
          {
            type: "p",
            text: "Automatic check-ins require location permission (and Always / background access for check-ins while the App is closed). Location accuracy depends on your device, OS, GPS conditions, and geofence settings. Missed or incorrect check-ins can occur; you can log or edit visits manually.",
          },
          {
            type: "p",
            text: "Local notifications are optional (check-in alerts, confirm-visit, per-activity clock reminders, and meal reminders). Clock reminders do not log a visit. The App does not rely on remote push from our servers.",
          },
        ],
      },
      {
        title: "No medical or professional advice",
        blocks: [
          {
            type: "p",
            text: "Macro tracking is a convenience feature. Meal calories and macros are values you enter or AI estimates from a photo you scan; estimates can be wrong, so check and edit them. Optional profile setup estimates daily targets on the device from details you provide; those numbers are estimates you can edit, not medical, nutritional, or fitness advice, diagnoses, or treatment. Consult a qualified professional for health decisions. Activity reminders (including medication times) do not confirm that a dose was taken.",
          },
        ],
      },
      {
        title: "Privacy",
        blocks: [
          {
            type: "p",
            text: "Our {{privacy}} explains how information is handled on your device, what optional features such as meal scan send off the device, and which services may be involved. By using the App, you also acknowledge that policy.",
          },
        ],
      },
      {
        title: "Third-party services and stores",
        blocks: [
          {
            type: "p",
            text: "The App may rely on operating-system services (location, notifications) and map display (Apple Maps on iOS; Google Maps on Android). Sign-in, meal scan, and support notes use Supabase, and meal scan uses OpenAI to estimate meals from photos. Your use of those services is also subject to the third party’s terms. Purchases, refunds, and store billing (if any) are handled by Apple or Google under their store terms.",
          },
        ],
      },
      {
        title: "Disclaimer of warranties",
        blocks: [
          {
            type: "p",
            text: "THE APP IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.",
          },
          {
            type: "p",
            text: "We do not warrant that streaks, geofence detection, notifications, reminder times, estimated macro goals, or calorie totals will be uninterrupted, accurate, or error-free.",
          },
        ],
      },
      {
        title: "Limitation of liability",
        blocks: [
          {
            type: "p",
            text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, STREAKSPOT AND ITS CONTRIBUTORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF (OR INABILITY TO USE) THE APP.",
          },
          {
            type: "p",
            text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS OR THE APP WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) USD $50.",
          },
          {
            type: "p",
            text: "Some jurisdictions do not allow certain limitations; in those places, the above limits apply only to the fullest extent allowed.",
          },
        ],
      },
      {
        title: "Termination",
        blocks: [
          {
            type: "p",
            text: "You may stop using the App at any time by uninstalling it. We may stop distributing or updating the App, or deny access where required by law or store policy. Provisions that by their nature should survive (including disclaimers and limitations of liability) will survive termination.",
          },
        ],
      },
      {
        title: "Changes",
        blocks: [
          {
            type: "p",
            text: "We may update these Terms from time to time. The effective date at the top of this page will change when we do. Continued use after an update constitutes acceptance of the revised Terms, except where prohibited by law.",
          },
        ],
      },
      {
        title: "Contact",
        blocks: [
          {
            type: "p",
            text: "Questions about these Terms: {{email}}.",
          },
        ],
      },
    ],
  },
} satisfies Messages;
