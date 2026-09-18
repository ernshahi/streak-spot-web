import Link from "next/link";

import { CopyEmail } from "@/components/CopyEmail";
import { getMessages } from "@/lib/i18n/getLocale";
import { site } from "@/lib/site";

export async function SiteFooter() {
  const messages = await getMessages();

  return (
    <footer className="border-t border-line/80 bg-paper-2/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg text-ink">{site.name}</p>
          <p className="mt-1 max-w-sm text-sm text-ink-3">{messages.footer.blurb}</p>
        </div>

        <div className="flex flex-col items-start gap-2 text-sm text-ink-2 sm:items-end">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-ink">
              {messages.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-ink">
              {messages.footer.terms}
            </Link>
            <Link href={site.androidPagePath} className="hover:text-ink">
              {messages.footer.android}
            </Link>
          </div>
          <CopyEmail
            copyLabel={messages.copyEmail.copy}
            copiedLabel={messages.copyEmail.copied}
            copyAria={messages.copyEmail.copyAria}
            copiedAria={messages.copyEmail.copiedAria}
            supportSubject={messages.site.supportSubject}
          />
        </div>
      </div>
      <div className="border-t border-line/60">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-ink-3 sm:px-8">
          © {new Date().getFullYear()} {site.name}. {messages.footer.rights}
        </p>
      </div>
    </footer>
  );
}
