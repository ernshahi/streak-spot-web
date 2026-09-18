import { cookies, headers } from "next/headers";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  isLocale,
  resolveLocaleFromAcceptLanguage,
  type Locale,
} from "./config";
import { en } from "./messages/en";
import { ja } from "./messages/ja";
import type { Messages } from "./messages/types";

const catalogs: Record<Locale, Messages> = { en, ja };

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const saved = jar.get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return saved;
  const headerStore = await headers();
  return resolveLocaleFromAcceptLanguage(headerStore.get("accept-language"));
}

export async function getMessages(): Promise<Messages> {
  const locale = await getLocale();
  return catalogs[locale];
}

export function getMessagesFor(locale: Locale): Messages {
  return catalogs[locale];
}
