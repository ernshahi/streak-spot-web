import type { Metadata } from "next";

import {
  LegalBlock,
  LegalDocument,
  LegalSection,
} from "@/components/LegalDocument";
import { getMessages } from "@/lib/i18n/getLocale";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title: messages.privacy.title,
    description: messages.privacy.metaDescription,
    alternates: { canonical: "/privacy" },
  };
}

export default async function PrivacyPage() {
  const messages = await getMessages();

  return (
    <LegalDocument
      title={messages.privacy.title}
      effectiveDateLabel={messages.legal.effectiveDateLabel}
      effectiveDate={messages.site.legalEffectiveDate}
    >
      {messages.privacy.sections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.blocks.map((block, index) => (
            <LegalBlock
              key={`${section.title}-${index}`}
              block={block}
              supportSubject={messages.site.supportSubject}
            />
          ))}
        </LegalSection>
      ))}
    </LegalDocument>
  );
}
