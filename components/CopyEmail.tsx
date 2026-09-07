"use client";

import { useEffect, useRef, useState } from "react";

import { site, supportMailto } from "@/lib/site";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.supportEmail);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard may be unavailable; leave UI unchanged.
    }
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <a href={supportMailto} className="hover:text-ink">
        {site.supportEmail}
      </a>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-ink-3 transition-colors hover:bg-line/70 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        aria-label={copied ? "Email copied" : `Copy ${site.supportEmail}`}
        title={copied ? "Copied" : "Copy email"}
      >
        {copied ? (
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-3.5 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </span>
  );
}
