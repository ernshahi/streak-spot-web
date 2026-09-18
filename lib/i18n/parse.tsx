import type { ReactNode } from "react";

import { site, supportMailto } from "@/lib/site";

/**
 * Renders plain legal/marketing text with optional markers:
 * - {{email}} → mailto link to support
 * - {{privacy}} → /privacy link (label from `privacyLabel`)
 * - {{terms}} → /terms link (label from `termsLabel`)
 */
export function RichText({
  text,
  privacyLabel,
  termsLabel,
  supportSubject,
  className,
}: {
  text: string;
  privacyLabel?: string;
  termsLabel?: string;
  supportSubject?: string;
  className?: string;
}): ReactNode {
  const parts = text.split(/(\{\{email\}\}|\{\{privacy\}\}|\{\{terms\}\})/g);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part === "{{email}}") {
          return (
            <a
              key={i}
              href={supportMailto(supportSubject)}
              className="font-medium text-gold hover:underline"
            >
              {site.supportEmail}
            </a>
          );
        }
        if (part === "{{privacy}}" && privacyLabel) {
          return (
            <a
              key={i}
              href="/privacy"
              className="font-medium text-gold hover:underline"
            >
              {privacyLabel}
            </a>
          );
        }
        if (part === "{{terms}}" && termsLabel) {
          return (
            <a
              key={i}
              href="/terms"
              className="font-medium text-gold hover:underline"
            >
              {termsLabel}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
