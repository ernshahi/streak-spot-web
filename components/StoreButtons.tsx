import { getMessages } from "@/lib/i18n/getLocale";
import type { Messages } from "@/lib/i18n/messages/types";
import { site } from "@/lib/site";

function AppleMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] shrink-0 fill-current sm:h-5 sm:w-5"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.97 12.45 4.54 9.39c.77-1.49 2.14-2.44 3.63-2.47 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] shrink-0 fill-current sm:h-5 sm:w-5"
    >
      <path d="M4.5 3.1v17.8c0 .7.8 1.1 1.4.7l14.2-8.9c.6-.4.6-1.2 0-1.6L5.9 2.2c-.6-.4-1.4 0-1.4.9z" />
    </svg>
  );
}

function StorePill({
  href,
  label,
  sub,
  icon,
}: {
  href?: string;
  label: string;
  sub: string;
  icon: "apple" | "play";
}) {
  const className =
    "group inline-flex min-w-0 flex-1 items-center gap-2.5 rounded-2xl border border-ink/10 bg-ink px-3 py-2.5 text-left text-paper shadow-[0_8px_24px_-12px_rgba(18,24,32,0.45)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-ink/90 sm:gap-3 sm:px-4 sm:py-3";

  const content = (
    <>
      {icon === "apple" ? <AppleMark /> : <PlayMark />}
      <span className="min-w-0 leading-tight">
        <span className="block text-[9px] font-medium tracking-[0.14em] text-paper/60 uppercase sm:text-[10px]">
          {sub}
        </span>
        <span className="mt-0.5 block truncate text-[13px] font-semibold tracking-tight sm:text-[15px]">
          {label}
        </span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span className={`${className} cursor-default opacity-85`}>{content}</span>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

export async function StoreButtons({
  store,
}: {
  store?: Messages["store"];
} = {}) {
  const messages = store ?? (await getMessages()).store;

  return (
    <div className="flex w-full max-w-none flex-col gap-2.5 lg:max-w-md">
      <div className="flex flex-row items-stretch gap-2 sm:gap-3">
        {site.appStoreUrl ? (
          <StorePill
            href={site.appStoreUrl}
            sub={messages.downloadOnThe}
            label={messages.appStore}
            icon="apple"
          />
        ) : (
          <StorePill
            sub={messages.inReview}
            label={messages.appStore}
            icon="apple"
          />
        )}
        {site.playStoreUrl ? (
          <StorePill
            href={site.playStoreUrl}
            sub={messages.getItOn}
            label={messages.googlePlay}
            icon="play"
          />
        ) : (
          <StorePill
            href={site.androidPagePath}
            sub={messages.getTheApk}
            label={messages.downloadApk}
            icon="play"
          />
        )}
      </div>
      <p className="text-sm leading-relaxed text-ink-3">
        {!site.appStoreUrl ? messages.reviewNote : null}
        {!site.appStoreUrl && !site.playStoreUrl ? " " : null}
        {!site.playStoreUrl ? messages.apkNote : null}
      </p>
    </div>
  );
}
