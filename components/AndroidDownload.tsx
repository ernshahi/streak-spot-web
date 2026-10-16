import type { Metadata } from "next";

import { getLocale, getMessages } from "@/lib/i18n/getLocale";
import { androidPath, apkBuildLabel, apkUrl, type VersionId } from "@/lib/versions";
import { getVersionContent } from "@/lib/versions/getVersion";

export async function androidMetadata(versionId: VersionId): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title: messages.android.title,
    description: messages.android.metaDescription,
    alternates: { canonical: androidPath(versionId) },
  };
}

/** Android sideload page for one app version (latest at /android, older at /v/:id/android). */
export async function AndroidDownload({ versionId }: { versionId: VersionId }) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  const content = getVersionContent(locale, versionId);
  const fileUrl = apkUrl(versionId);

  return (
    <div className="mx-auto max-w-2xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28">
      <h1 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
        {messages.android.heading}
      </h1>
      <p className="mt-2 text-sm font-medium text-ink-3">
        {content.label} · {messages.android.build.replace("{{build}}", apkBuildLabel(versionId))}
      </p>
      <p className="mt-5 text-lg leading-relaxed text-ink-2">{content.apk.body}</p>

      <a
        href={fileUrl}
        className="mt-8 inline-flex items-center rounded-2xl bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-[0_8px_24px_-12px_rgba(18,24,32,0.45)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-ink/90"
      >
        {messages.android.download}
      </a>

      {content.apk.notes.length > 0 ? (
        <>
          <h2 className="mt-12 font-display text-xl text-ink">{messages.android.whatsNew}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-2">
            {content.apk.notes.map((note) => (
              <li key={note} className="leading-relaxed">
                {note}
              </li>
            ))}
          </ul>
        </>
      ) : null}

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
