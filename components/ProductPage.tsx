import { AppPreviewStack } from "@/components/AppPreviewStack";
import { StoreButtons } from "@/components/StoreButtons";
import { RichText } from "@/lib/i18n/parse";
import { site } from "@/lib/site";
import type { VersionContent } from "@/lib/versions/types";

export function ProductPage({
  content,
  tagline,
  supportSubject,
  store,
}: {
  content: VersionContent;
  tagline: string;
  supportSubject: string;
  store: {
    downloadOnThe: string;
    getItOn: string;
    appStore: string;
    googlePlay: string;
    inReview: string;
    comingSoon: string;
    reviewNote: string;
    downloadApk: string;
    getTheApk: string;
  };
}) {
  return (
    <>
      <section className="relative overflow-x-clip">
        <div className="hero-backdrop absolute inset-0 -z-10" />
        <div className="hero-glow-gold pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full opacity-50" />
        <div className="hero-glow-ink pointer-events-none absolute bottom-[-20%] left-[-8%] h-[380px] w-[380px] rounded-full opacity-40" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-28 pb-20 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-8 lg:pb-28">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="animate-rise font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {site.name}
            </p>
            <h1 className="animate-rise-delay-1 mt-4 max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">
              {tagline}
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-lg text-lg leading-relaxed text-ink-2">
              {content.heroBody}
            </p>
          </div>

          <div className="animate-rise-delay-1 flex justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-end">
            <AppPreviewStack />
          </div>

          <div className="animate-rise-delay-2 lg:col-start-1 lg:row-start-2">
            <StoreButtons store={store} />
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-display text-2xl text-ink sm:text-3xl">
            {content.featuresTitle}
          </p>
          <p className="mt-3 max-w-2xl text-ink-2">{content.featuresIntro}</p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {content.features.map((feature) => (
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
            {content.privacyCta.title}
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
            <RichText
              text={content.privacyCta.body}
              privacyLabel={content.privacyCta.privacyLabel}
              termsLabel={content.privacyCta.termsLabel}
              supportSubject={supportSubject}
            />
          </p>
        </div>
      </section>
    </>
  );
}
