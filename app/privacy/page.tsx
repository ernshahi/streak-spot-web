import type { Metadata } from "next";

import { LegalDocument, LegalSection } from "@/components/LegalDocument";
import { site, supportMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles information on your device — offline, no account, no cloud sync.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy">
      <LegalSection title="Overview">
        <p>
          {site.name} (“we,” “us”) is a mobile app for place-based activity
          streaks and manual macro / meal tracking. The app is designed to work{" "}
          <strong className="font-semibold text-ink">offline</strong>. We do{" "}
          <strong className="font-semibold text-ink">not</strong> require an
          account, and we do{" "}
          <strong className="font-semibold text-ink">
            not operate a StreakSpot backend that receives your habit, location,
            meal, or settings data
          </strong>
          .
        </p>
        <p>
          This policy describes what information is processed on your device,
          what device or platform services may be involved when you use optional
          features (location, maps, notifications, sharing), and how you can
          delete your data.
        </p>
      </LegalSection>

      <LegalSection title="Information stored on your device">
        <p>
          When you use {site.name}, the following categories of information may
          be stored locally in an on-device SQLite database (and related app
          storage):
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Activities</span> — names,
            icons/colors, active weekdays / rest days, start dates, minimum
            on-site duration, and related settings.
          </li>
          <li>
            <span className="font-medium text-ink">Locations</span> — map pins
            (latitude / longitude), geofence radius, and metadata used to
            prioritize which regions are monitored.
          </li>
          <li>
            <span className="font-medium text-ink">Visits</span> — check-in /
            check-out times, confirmation status (for example pending, confirmed,
            expired), whether a visit came from a geofence or was logged
            manually, and optional location tags.
          </li>
          <li>
            <span className="font-medium text-ink">Meals / macros</span> — meal
            names, calories, optional protein / carbs / fat, and timestamps;
            plus your daily macro goals and meal-reminder preferences.
          </li>
          <li>
            <span className="font-medium text-ink">App preferences</span> —
            appearance (theme, corner radius, fonts, accent color), notification
            toggles, visit-confirmation settings, and similar configuration.
          </li>
          <li>
            <span className="font-medium text-ink">Optional demo data</span> —
            on first launch with an empty activities list, the app may seed
            sample activities so you can explore the product. Seeding does not
            overwrite existing user data.
          </li>
        </ul>
        <p>
          Streak and macro summaries are computed on-device from this local data.
          We do not receive copies of it.
        </p>
      </LegalSection>

      <LegalSection title="Location">
        <p>
          {site.name} can use your device’s location to detect when you enter or
          leave activity locations you define (geofencing), including while the
          app is closed, if you grant{" "}
          <strong className="font-semibold text-ink">
            Always / background location
          </strong>{" "}
          permission. You may also grant When-In-Use access only, or deny
          location entirely and log visits manually.
        </p>
        <p>
          Location coordinates for your saved places and visits are stored on
          your device. Geofence monitoring is performed using Apple or Google
          operating-system location services on your device. Those platform
          providers process location according to their own terms and privacy
          policies.
        </p>
        <p>
          We do not upload your location history to a StreakSpot server. Denying
          or later revoking location permission does not remove the rest of the
          app; automatic check-ins simply will not run.
        </p>
      </LegalSection>

      <LegalSection title="Maps (Android)">
        <p>
          On Android, choosing or viewing a place on the map may use Google Maps
          / the Maps SDK. Map tiles and related map services are provided by
          Google and are subject to Google’s terms and privacy policy. A
          Google Maps API key configured for the app is used to load those map
          services; it is not used by us to collect your personal habit data.
        </p>
      </LegalSection>

      <LegalSection title="Notifications">
        <p>
          {site.name} uses{" "}
          <strong className="font-semibold text-ink">
            local notifications only
          </strong>{" "}
          (for example check-in / check-out alerts, confirm-visit reminders, and
          optional meal reminders you schedule). The app does not use remote push
          notification delivery through our servers.
        </p>
        <p>
          Notification permission is optional. You can control activity and meal
          reminder settings inside the app, and in your device system settings.
        </p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>
          If you choose to share a macros day summary (or use other OS share
          sheets), the content you select is handed to the share target you pick
          (Messages, email, and so on). That sharing is initiated by you and
          governed by the destination app or service.
        </p>
      </LegalSection>

      <LegalSection title="What we do not collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>No StreakSpot user accounts or sign-in.</li>
          <li>No StreakSpot cloud sync or backend database of your habits.</li>
          <li>
            No advertising network, analytics SDK, or crash-reporting service
            operated by us in the current product.
          </li>
          <li>
            No food database lookups, barcode scanning, meal photos, HealthKit /
            Google Fit sync, or similar third-party health connectors.
          </li>
        </ul>
        <p>
          Your device manufacturer, app store, or OS may still process technical
          information (for example install attribution, diagnostics you opt into
          with Apple or Google) under their policies. That is outside
          StreakSpot’s control.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>On-device information is used only to provide app features, such as:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Automatic and manual visit logging and streak calculation.</li>
          <li>Macro totals, goals, calendars, and meal reminders.</li>
          <li>Remembering your appearance and notification preferences.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Retention and deletion">
        <p>
          Data remains on your device until you delete it. You can reset
          activities (and related locations / visits) or reset macros (meals,
          default goals, and meal reminders) from Settings in the app. Uninstalling{" "}
          {site.name} also removes the app’s local storage, subject to how your
          operating system handles backups.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          {site.name} is not directed at children under 13 (or the equivalent
          minimum age in your jurisdiction), and we do not knowingly collect
          personal information from children through a StreakSpot account or
          server. Because the app stores data only on-device, parents and
          guardians should supervise device use and permissions as appropriate.
        </p>
      </LegalSection>

      <LegalSection title="International users">
        <p>
          Processing described here happens on your device. If you contact us by
          email, your message is processed where we read and respond to support
          mail.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this Privacy Policy as the product or legal requirements
          change. The effective date at the top of this page will be revised when
          we do. Continued use of the app after an update means you acknowledge
          the revised policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about privacy:{" "}
          <a
            href={supportMailto}
            className="font-medium text-gold hover:underline"
          >
            {site.supportEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
