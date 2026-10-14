import Image from "next/image";
import Link from "next/link";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getLocale, getMessages } from "@/lib/i18n/getLocale";
import { site, supportMailto } from "@/lib/site";
import { getVersionOptions } from "@/lib/versions/getVersion";

export async function SiteHeader() {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  const versionOptions = getVersionOptions(locale);
  const supportHref = supportMailto(messages.site.supportSubject);

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-line/40 bg-paper/55 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8 lg:h-20">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 text-ink transition-opacity duration-200 hover:opacity-80"
        >
          <Image
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-lg shadow-sm"
            priority
          />
          <span className="truncate font-display text-lg tracking-tight sm:text-xl">
            {site.name}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <nav className="hidden items-center gap-4 text-sm text-ink-2 lg:flex">
            <Link href="/privacy" className="transition-colors duration-200 hover:text-ink">
              {messages.nav.privacy}
            </Link>
            <Link href="/terms" className="transition-colors duration-200 hover:text-ink">
              {messages.nav.terms}
            </Link>
            <Link
              href={site.androidPagePath}
              className="transition-colors duration-200 hover:text-ink"
            >
              {messages.nav.android}
            </Link>
          </nav>
          <LocaleSwitcher locale={locale} />
          <ThemeToggle
            toggleLabel={messages.theme.toggle}
            lightModeLabel={messages.theme.lightMode}
            darkModeLabel={messages.theme.darkMode}
            switchToLightLabel={messages.theme.switchToLight}
            switchToDarkLabel={messages.theme.switchToDark}
          />
          <MobileNav
            label={messages.nav.menu}
            closeLabel={messages.nav.closeMenu}
            versionLabel={messages.versions.label}
            versionOptions={versionOptions}
            links={[
              { href: "/privacy", label: messages.nav.privacy },
              { href: "/terms", label: messages.nav.terms },
              { href: site.androidPagePath, label: messages.nav.android },
              { href: supportHref, label: messages.nav.support },
            ]}
          />
        </div>
      </div>
    </header>
  );
}