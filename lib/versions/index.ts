/**
 * Newest first. The first id is the public homepage (`/`).
 * Older ids live at `/v/:id`. To ship a new version, add it at the
 * front of this list, add English and Japanese copy, and set `apkTag`
 * to that version's GitHub release. The Android page and store button
 * pick the file from the selected version.
 */
const APK_RELEASE_BASE =
  "https://github.com/ernshahi/streak-spot-web/releases/download";

export const versions = [
  { id: "2", apkTag: "android-2.0.0-7" },
  { id: "1", apkTag: "android-1.0.0-4" },
] as const;

export type VersionId = (typeof versions)[number]["id"];

export const latestVersionId: VersionId = versions[0].id;

export function isVersionId(value: string): value is VersionId {
  return versions.some((version) => version.id === value);
}

export function versionPath(id: VersionId): string {
  return id === latestVersionId ? "/" : `/v/${id}`;
}

/** Latest APK page is `/android`. Older ones are `/v/:id/android`. */
export function androidPath(id: VersionId): string {
  return id === latestVersionId ? "/android" : `/v/${id}/android`;
}

/** "2.0.0 (7)" from a tag like "android-2.0.0-7". */
export function apkBuildLabel(id: VersionId): string {
  const tag = versions.find((item) => item.id === id)?.apkTag ?? "";
  const match = tag.match(/^android-(.+)-(\d+)$/);
  return match ? `${match[1]} (${match[2]})` : tag.replace(/^android-/, "");
}

export function apkUrl(id: VersionId): string {
  const version = versions.find((item) => item.id === id);
  return `${APK_RELEASE_BASE}/${version?.apkTag ?? versions[0].apkTag}/StreakSpot.apk`;
}

/** Product page, or that version's Android page. Other routes return null. */
export function versionIdFromPath(pathname: string): VersionId | null {
  if (pathname === "/" || pathname === "/android") return latestVersionId;
  const match = pathname.match(/^\/v\/([^/]+)(?:\/android)?$/);
  if (match && isVersionId(match[1])) return match[1];
  return null;
}

export function isAndroidPath(pathname: string): boolean {
  return pathname === "/android" || /^\/v\/[^/]+\/android$/.test(pathname);
}
