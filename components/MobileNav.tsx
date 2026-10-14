"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { VersionSelect } from "@/components/VersionSelect";

type NavLink = {
  href: string;
  label: string;
};

type VersionOption = {
  id: string;
  label: string;
  href: string;
};

export function MobileNav({
  label,
  closeLabel,
  links,
  versionLabel,
  versionOptions,
}: {
  label: string;
  closeLabel: string;
  links: NavLink[];
  versionLabel: string;
  versionOptions: VersionOption[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? closeLabel : label}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-9 items-center justify-center rounded-full border border-line/80 bg-surface/70 text-ink backdrop-blur-sm transition-[background-color,transform] duration-200 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100"
      >
        <span className="relative block h-3.5 w-4">
          <span
            className={`absolute left-0 h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-1.5 left-0 h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 motion-reduce:transition-none ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      <div
        id="site-menu"
        inert={!open}
        className={`absolute inset-x-0 top-full grid origin-top bg-paper shadow-[0_16px_40px_-24px_rgba(27,39,66,0.45)] transition-[grid-template-rows,opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
          open
            ? "grid-rows-[1fr] translate-y-0 opacity-100"
            : "pointer-events-none grid-rows-[0fr] -translate-y-1 opacity-0"
        }`}
      >
        <nav aria-label={label} className="overflow-hidden border-b border-line/70">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            <div className="flex items-center justify-between gap-4 border-b border-line/60 py-3">
              <span className="text-sm text-ink-2">{versionLabel}</span>
              <VersionSelect label={versionLabel} options={versionOptions} />
            </div>
            {links.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="border-b border-line/60 py-3 text-base text-ink transition-colors duration-200 last:border-b-0 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-line/60 py-3 text-base text-ink transition-colors duration-200 last:border-b-0 hover:text-gold lg:hidden"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
