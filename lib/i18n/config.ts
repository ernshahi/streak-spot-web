export const LOCALES = ["en", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "streakspot_locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "ja";
}

/** Match mobile app: Japanese browser language → ja, otherwise en. */
export function resolveLocaleFromAcceptLanguage(
  header: string | null | undefined
): Locale {
  if (!header) return DEFAULT_LOCALE;
  const parts = header.split(",");
  for (const part of parts) {
    const tag = part.trim().split(";")[0]?.trim().toLowerCase().replace(/_/g, "-");
    if (!tag) continue;
    if (tag === "ja" || tag.startsWith("ja-")) return "ja";
  }
  return DEFAULT_LOCALE;
}
