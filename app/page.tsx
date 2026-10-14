import type { Metadata } from "next";

import { ProductPage } from "@/components/ProductPage";
import { getLocale, getMessages } from "@/lib/i18n/getLocale";
import { getLatestVersionContent } from "@/lib/versions/getVersion";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const content = getLatestVersionContent(locale);

  return {
    description: content.description,
    alternates: { canonical: "/" },
    openGraph: { description: content.description },
    twitter: { description: content.description },
  };
}

export default async function HomePage() {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  const content = getLatestVersionContent(locale);

  return (
    <ProductPage
      content={content}
      tagline={messages.site.tagline}
      supportSubject={messages.site.supportSubject}
      store={messages.store}
    />
  );
}
