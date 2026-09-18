import type { Metadata } from "next";

import { getMessages } from "@/lib/i18n/getLocale";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title: messages.android.title,
    description: messages.android.metaDescription,
    alternates: { canonical: "/android" },
  };
}

export default async function AndroidDownloadPage() {
  const messages = await getMessages();
  const fileUrl = site.androidApkFileUrl;

  return (
    <div className="mx-auto max-w-2xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28">
      <h1 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
        {messages.android.heading}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-2">{messages.android.body}</p>

      {fileUrl ? (
        <a
          href={fileUrl}
          className="mt-8 inline-flex items-center rounded-2xl bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-[0_8px_24px_-12px_rgba(18,24,32,0.45)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-ink/90"
        >
          {messages.android.download}
        </a>
      ) : (
        <p className="mt-8 rounded-2xl border border-line/70 bg-surface px-4 py-3 text-sm leading-relaxed text-ink-2">
          {messages.android.packaging}
        </p>
      )}

      <h2 className="mt-12 font-display text-xl text-ink">{messages.android.stepsTitle}</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-2">
        {messages.android.steps.map((step) => (
          <li key={step} className="leading-relaxed">
            {step}
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm leading-relaxed text-ink-3">{messages.android.playNote}</p>
    </div>
  );
}
