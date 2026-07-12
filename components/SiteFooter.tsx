import Link from "next/link";

import { site, supportMailto } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 bg-paper-2/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg text-ink">{site.name}</p>
          <p className="mt-1 max-w-sm text-sm text-ink-3">
            Offline habit tracking for places and macros. Data stays on your
            device.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-2">
          <Link href="/privacy" className="hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms of Use
          </Link>
          <a href={supportMailto} className="hover:text-ink">
            {site.supportEmail}
          </a>
        </div>
      </div>
      <div className="border-t border-line/60">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-ink-3 sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
