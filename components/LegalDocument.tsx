import type { ReactNode } from "react";

import { site } from "@/lib/site";

export function LegalDocument({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #EEF1F7 0%, #F7F8FC 35%, #FFFFFF 100%)",
        }}
      />

      <article className="mx-auto max-w-6xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-gold uppercase">
            {site.name}
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-3">
            Effective date: {site.legalEffectiveDate}
          </p>

          <div className="legal-prose mt-10 space-y-8 text-[17px] leading-relaxed text-ink-2">
            {children}
          </div>
        </div>
      </article>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
