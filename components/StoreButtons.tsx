import { site, supportMailto } from "@/lib/site";

function StorePill({
  href,
  label,
  sub,
}: {
  href?: string;
  label: string;
  sub: string;
}) {
  const className =
    "inline-flex min-w-[168px] flex-col rounded-2xl border border-ink/10 bg-ink px-5 py-3 text-left text-paper transition-transform hover:-translate-y-0.5";

  const content = (
    <>
      <span className="text-[11px] tracking-wide text-paper/65 uppercase">
        {sub}
      </span>
      <span className="text-base font-semibold">{label}</span>
    </>
  );

  if (!href) {
    return (
      <span className={`${className} cursor-default opacity-80`}>{content}</span>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}

export function StoreButtons() {
  const hasStores = Boolean(site.appStoreUrl || site.playStoreUrl);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {site.appStoreUrl ? (
          <StorePill
            href={site.appStoreUrl}
            sub="Download on the"
            label="App Store"
          />
        ) : (
          <StorePill sub="Coming soon" label="App Store" />
        )}
        {site.playStoreUrl ? (
          <StorePill
            href={site.playStoreUrl}
            sub="Get it on"
            label="Google Play"
          />
        ) : (
          <StorePill sub="Coming soon" label="Google Play" />
        )}
      </div>
      {!hasStores ? (
        <a
          href={supportMailto}
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/30 bg-gold-soft px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-gold/50 hover:bg-gold/15"
        >
          Ask for early access
          <span aria-hidden className="text-gold">
            →
          </span>
        </a>
      ) : null}
    </div>
  );
}
