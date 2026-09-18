import Image from "next/image";
import Link from "next/link";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getLocale, getMessages } from "@/lib/i18n/getLocale";
import { site, supportMailto } from "@/lib/site";

export async function SiteHeader() {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

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

        <nav className="flex items-center gap-2 text-sm text-ink-2 sm:gap-4">
          <Link href="/privacy" className="transition-colors hover:text-ink">
            {messages.nav.privacy}
          </Link>
          <Link href="/terms" className="transition-colors hover:text-ink">
            {messages.nav.terms}
          </Link>
          <Link href={site.androidPagePath} className="transition-colors hover:text-ink">
            {messages.nav.android}
          </Link>
          <LocaleSwitcher locale={locale} />
          <ThemeToggle
            toggleLabel={messages.theme.toggle}
            lightModeLabel={messages.theme.lightMode}
            darkModeLabel={messages.theme.darkMode}
            switchToLightLabel={messages.theme.switchToLight}
            switchToDarkLabel={messages.theme.switchToDark}
          />
          <a
            href={supportMailto(messages.site.supportSubject)}
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink/90 sm:inline-flex"
          >
            {messages.nav.support}
          </a>
        </nav>
      </div>
    </header>
  );
}
