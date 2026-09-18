"use client";

import { useRouter } from "next/navigation";

import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/config";

const OPTIONS: { locale: Locale; label: string; ariaLabel: string }[] = [
  { locale: "en", label: "EN", ariaLabel: "English" },
  { locale: "ja", label: "JA", ariaLabel: "日本語" },
];

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();

  function setLocale(next: Locale) {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    router.refresh();
  }

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-full border border-line/80 bg-surface/70 p-0.5 backdrop-blur-sm"
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map(({ locale: value, label, ariaLabel }) => {
        const active = value === locale;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            className={`rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
              active
                ? "bg-ink text-paper"
                : "text-ink-2 hover:bg-surface hover:text-ink"
            }`}
            aria-label={ariaLabel}
            aria-pressed={active}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
