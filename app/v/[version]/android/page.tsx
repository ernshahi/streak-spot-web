import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { AndroidDownload, androidMetadata } from "@/components/AndroidDownload";
import { isVersionId, latestVersionId, versions } from "@/lib/versions";

type PageProps = {
  params: Promise<{ version: string }>;
};

export function generateStaticParams() {
  return versions.map((version) => ({ version: version.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { version } = await params;
  if (!isVersionId(version) || version === latestVersionId) return {};
  return androidMetadata(version);
}

export default async function VersionAndroidPage({ params }: PageProps) {
  const { version } = await params;
  if (!isVersionId(version)) notFound();
  if (version === latestVersionId) redirect("/android");
  return <AndroidDownload versionId={version} />;
}
