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
    title: messages.terms.title,
    description: messages.terms.metaDescription,
    alternates: { canonical: "/terms" },
  };
}

export default async function TermsPage() {
  const messages = await getMessages();

  return (
    <LegalDocument
      title={messages.terms.title}
      effectiveDateLabel={messages.legal.effectiveDateLabel}
      effectiveDate={messages.site.legalEffectiveDate}
    >
      {messages.terms.sections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.blocks.map((block, index) => (
            <LegalBlock
              key={`${section.title}-${index}`}
              block={block}
              privacyLabel={messages.privacy.title}
              supportSubject={messages.site.supportSubject}
            />
          ))}
        </LegalSection>
      ))}
    </LegalDocument>
  );
}
