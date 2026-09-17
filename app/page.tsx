import Link from "next/link";

import { AppPreviewStack } from "@/components/AppPreviewStack";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";

const features = [
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
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-x-clip">
        <div className="hero-backdrop absolute inset-0 -z-10" />
        <div className="hero-glow-gold pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full opacity-50" />
        <div className="hero-glow-ink pointer-events-none absolute bottom-[-20%] left-[-8%] h-[380px] w-[380px] rounded-full opacity-40" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-28 pb-20 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
          <div>
            <p className="animate-rise font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {site.name}
            </p>
            <h1 className="animate-rise-delay-1 mt-4 max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">
              {site.tagline}
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-lg text-lg leading-relaxed text-ink-2">
              Build streaks for the gym, class, or any place you go — check in
              when you arrive or by hand. Keep daily macros on the same phone.
              No account. No cloud. No ads.
            </p>
            <div className="animate-rise-delay-2 mt-8">
              <StoreButtons />
            </div>
          </div>

          <div className="animate-rise-delay-1 flex justify-center lg:justify-end">
            <AppPreviewStack />
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-display text-2xl text-ink sm:text-3xl">
            Built for showing up
          </p>
          <p className="mt-3 max-w-2xl text-ink-2">
            One iPhone app: activity streaks (place or manual), optional clock
            reminders, and a lightweight meal log — without accounts, servers,
            or ads.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="max-w-md">
                <h2 className="font-display text-xl text-ink">{feature.title}</h2>
                <p className="mt-2 leading-relaxed text-ink-2">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-display text-2xl text-ink sm:text-3xl">
            Your data stays with you
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
            StreakSpot does not create user accounts or sync to our servers.
            Location is used on-device for geofencing when you allow it.
            Notifications are local only. A backup is a file you save — not a
            StreakSpot cloud. Apple’s App Privacy label is data not collected.
            Read the full details in our{" "}
            <Link
              href="/privacy"
              className="font-medium text-gold hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="font-medium text-gold hover:underline"
            >
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
