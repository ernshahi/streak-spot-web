import type { Metadata } from "next";

import { LegalDocument, LegalSection } from "@/components/LegalDocument";
import { site, supportMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing your use of the ${site.name} mobile application.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalDocument title="Terms of Use">
      <LegalSection title="Agreement">
        <p>
          These Terms of Use (“Terms”) govern your download and use of the{" "}
          {site.name} mobile application (“App”). By installing or using the
          App, you agree to these Terms. If you do not agree, do not use the App.
        </p>
        <p>
          The App is provided by the {site.name} team. Support contact:{" "}
          <a
            href={supportMailto}
            className="font-medium text-gold hover:underline"
          >
            {site.supportEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="What the App does">
        <p>
          {site.name} helps you track{" "}
          <strong className="font-semibold text-ink">
            place-based activity streaks
          </strong>{" "}
          (via geofencing and/or manual visits) and{" "}
          <strong className="font-semibold text-ink">manual meal / macro logs</strong>
          . The App stores your data on your device and does not require a
          StreakSpot account or cloud sync.
        </p>
        <p>
          Features, design, and availability may change over time. Store listing
          descriptions and in-app copy describe current functionality more
          specifically than these Terms.
        </p>
      </LegalSection>

      <LegalSection title="License">
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable
          license to install and use the App on devices you own or control, for
          your own non-commercial use, subject to these Terms and the rules of
          the Apple App Store or Google Play (as applicable).
        </p>
        <p>
          You may not copy, modify, distribute, reverse engineer (except where
          prohibited restrictions are not allowed by law), rent, or create
          derivative works from the App, or remove proprietary notices.
        </p>
      </LegalSection>

      <LegalSection title="Your responsibilities">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You are responsible for the accuracy of activities, locations,
            visits, and meal entries you create.
          </li>
          <li>
            You are responsible for granting, denying, or revoking device
            permissions (location, notifications) and for understanding that
            background location can affect battery usage.
          </li>
          <li>
            You are responsible for backing up or exporting anything you need
            before uninstalling or using in-app data reset. The App does not
            provide a StreakSpot cloud backup.
          </li>
          <li>
            Do not use the App in any way that violates applicable law or
            interferes with others’ use of devices or networks.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Location and notifications">
        <p>
          Automatic check-ins require location permission (and Always /
          background access for check-ins while the App is closed). Location
          accuracy depends on your device, OS, GPS conditions, and geofence
          settings. Missed or incorrect check-ins can occur; you can log or edit
          visits manually.
        </p>
        <p>
          Local notifications are optional. The App does not rely on remote push
          from our servers.
        </p>
      </LegalSection>

      <LegalSection title="No medical or professional advice">
        <p>
          Macro tracking is a convenience feature based on values{" "}
          <strong className="font-semibold text-ink">you enter</strong>. The App
          does not provide medical, nutritional, or fitness advice, diagnoses, or
          treatment. Consult a qualified professional for health decisions.
        </p>
      </LegalSection>

      <LegalSection title="Privacy">
        <p>
          Our{" "}
          <a href="/privacy" className="font-medium text-gold hover:underline">
            Privacy Policy
          </a>{" "}
          explains how information is handled on your device and which platform
          services may be involved. By using the App, you also acknowledge that
          policy.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services and stores">
        <p>
          The App may rely on operating-system services (location, notifications,
          share sheets) and, on Android, Google Maps for map display. Your use of
          those services is also subject to the third party’s terms. Purchases,
          refunds, and store billing (if any) are handled by Apple or Google
          under their store terms.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of warranties">
        <p>
          THE APP IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF
          ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
        </p>
        <p>
          We do not warrant that streaks, geofence detection, notifications, or
          calorie totals will be uninterrupted, accurate, or error-free.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {site.name.toUpperCase()} AND
          ITS CONTRIBUTORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA,
          PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF (OR INABILITY TO USE)
          THE APP.
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY
          CLAIM ARISING OUT OF THESE TERMS OR THE APP WILL NOT EXCEED THE GREATER
          OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE MONTHS BEFORE
          THE CLAIM OR (B) USD $50.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations; in those places,
          the above limits apply only to the fullest extent allowed.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          You may stop using the App at any time by uninstalling it. We may stop
          distributing or updating the App, or deny access where required by law
          or store policy. Provisions that by their nature should survive
          (including disclaimers and limitations of liability) will survive
          termination.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these Terms from time to time. The effective date at the
          top of this page will change when we do. Continued use after an update
          constitutes acceptance of the revised Terms, except where prohibited by
          law.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms:{" "}
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
