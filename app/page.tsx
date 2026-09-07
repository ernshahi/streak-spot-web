import Link from "next/link";

import { AppPreviewStack } from "@/components/AppPreviewStack";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";

const features = [
  {
    title: "Place-based streaks",
    body: "Tie habits to real locations. Geofences check you in when you arrive — even if the app is closed.",
  },
  {
    title: "Manual when you need it",
    body: "Log visits by hand, confirm automatic check-ins, or skip Always location and stay fully manual.",
  },
  {
    title: "Macros, simply",
    body: "Track calories and optional protein, carbs, and fat. Daily goals, calendar history, and optional meal reminders.",
  },
  {
    title: "Private by design",
    body: "No account. No cloud sync. Everything lives in on-device SQLite until you delete it or reset in Settings.",
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
              Build streaks around the places you show up — gym, studio, trail —
              and keep daily macros in the same quiet, offline app.
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
            Two tools, one phone-first app: activity streaks tied to locations,
            and a lightweight meal log — without accounts or servers.
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
            Notifications are local only. Read the full details in our{" "}
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
