import type { ReactNode } from "react";

import { RichText } from "@/lib/i18n/parse";
import type { LegalBlock as LegalBlockType } from "@/lib/i18n/messages/types";
import { site } from "@/lib/site";

export function LegalDocument({
  title,
  effectiveDateLabel,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDateLabel: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="legal-backdrop absolute inset-0 -z-10" />

      <article className="mx-auto max-w-6xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-gold uppercase">
            {site.name}
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-3">
            {effectiveDateLabel}: {effectiveDate}
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

export function LegalBlock({
  block,
  privacyLabel,
  supportSubject,
}: {
  block: LegalBlockType;
  privacyLabel?: string;
  supportSubject?: string;
}) {
  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item}>
            <RichText
              text={item}
              privacyLabel={privacyLabel}
              supportSubject={supportSubject}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p>
      <RichText
        text={block.text}
        privacyLabel={privacyLabel}
        supportSubject={supportSubject}
      />
    </p>
  );
}
