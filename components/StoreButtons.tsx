import { site } from "@/lib/site";

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
          <StorePill sub="In review" label="App Store" />
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
      {!site.appStoreUrl ? (
        <p className="max-w-md text-sm leading-relaxed text-ink-3">
          iPhone 1.0 is in App Store review.
        </p>
      ) : null}
    </div>
  );
}
