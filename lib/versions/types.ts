export type VersionContent = {
  id: string;
  /** Dropdown label, e.g. "Version 2". */
  label: string;
  description: string;
  heroBody: string;
  featuresTitle: string;
  featuresIntro: string;
  features: Array<{ title: string; body: string }>;
  privacyCta: {
    title: string;
    /** Use {{privacy}} and {{terms}} for linked labels. */
    body: string;
    privacyLabel: string;
    termsLabel: string;
  };
};
