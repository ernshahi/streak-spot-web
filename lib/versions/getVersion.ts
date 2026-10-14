import type { Locale } from "@/lib/i18n/config";
import { latestVersionId, versionPath, versions, type VersionId } from "@/lib/versions";

import { enVersions } from "./en";
import { jaVersions } from "./ja";
import type { VersionContent } from "./types";

const catalogs: Record<Locale, Record<VersionId, VersionContent>> = {
  en: enVersions,
  ja: jaVersions,
};

export function getVersionContent(locale: Locale, id: VersionId): VersionContent {
  return catalogs[locale][id];
}

export function getVersionOptions(locale: Locale) {
  return versions.map((version) => {
    const content = getVersionContent(locale, version.id);
    return {
      id: version.id,
      label: content.label,
      href: versionPath(version.id),
    };
  });
}

export function getLatestVersionContent(locale: Locale): VersionContent {
  return getVersionContent(locale, latestVersionId);
}
