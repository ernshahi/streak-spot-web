import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { ProductPage } from "@/components/ProductPage";
import { getLocale, getMessages } from "@/lib/i18n/getLocale";
import {
  isVersionId,
  latestVersionId,
  versionPath,
  versions,
} from "@/lib/versions";
import { getVersionContent } from "@/lib/versions/getVersion";

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

  const locale = await getLocale();
  const content = getVersionContent(locale, version);

  return {
    title: content.label,
    description: content.description,
    alternates: { canonical: versionPath(version) },
    openGraph: {
      title: content.label,
      description: content.description,
    },
  };
}

export default async function VersionPage({ params }: PageProps) {
  const { version } = await params;
  if (!isVersionId(version)) notFound();
  if (version === latestVersionId) redirect("/");

  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  const content = getVersionContent(locale, version);

  return (
    <ProductPage
      content={content}
      tagline={messages.site.tagline}
      supportSubject={messages.site.supportSubject}
      store={messages.store}
    />
  );
}
