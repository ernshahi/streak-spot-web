/**
 * Newest first. The first id is the public homepage (`/`).
 * Older ids live at `/v/:id`. To ship a new version, add it at the
 * front of this list and add matching English and Japanese copy.
 */
export const versions = [{ id: "2" }, { id: "1" }] as const;

export type VersionId = (typeof versions)[number]["id"];

export const latestVersionId: VersionId = versions[0].id;

export function isVersionId(value: string): value is VersionId {
  return versions.some((version) => version.id === value);
}

export function versionPath(id: VersionId): string {
  return id === latestVersionId ? "/" : `/v/${id}`;
}
