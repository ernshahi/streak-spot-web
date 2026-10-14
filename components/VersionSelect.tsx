"use client";

import { usePathname, useRouter } from "next/navigation";

type VersionOption = {
  id: string;
  label: string;
  href: string;
};

export function VersionSelect({
  label,
  options,
}: {
  label: string;
  options: VersionOption[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentId =
    options.find((option) => option.href === pathname)?.id ?? options[0]?.id ?? "";

  return (
    <div className="relative inline-flex shrink-0">
      <select
        value={currentId}
        aria-label={label}
        onChange={(event) => {
          const next = options.find((option) => option.id === event.target.value);
          if (next && next.id !== currentId) router.push(next.href);
        }}
        className="cursor-pointer appearance-none rounded-full border border-line/80 bg-surface/80 py-1.5 pr-8 pl-3 text-sm font-medium text-ink shadow-sm backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 12 12"
        className="pointer-events-none absolute top-1/2 right-2.5 h-3 w-3 -translate-y-1/2 text-ink-2"
      >
        <path
          d="M2.5 4.5 6 8l3.5-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
