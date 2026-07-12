import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink transition-opacity hover:opacity-80"
        >
          <Image
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className="rounded-lg shadow-sm"
            priority
          />
          <span className="font-display text-lg tracking-tight sm:text-xl">
            {site.name}
          </span>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-ink-2 sm:gap-7">
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-ink">
            Terms
          </Link>
          <a
            href={`mailto:${site.supportEmail}`}
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ink/90 sm:inline-flex"
          >
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}
