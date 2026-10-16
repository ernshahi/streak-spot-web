export type VersionContent = {
  id: string;
  /** Dropdown label, e.g. "Version 2". */
  label: string;
  description: string;
  heroBody: string;
  featuresTitle: string;
  featuresIntro: string;
  features: Array<{ title: string; body: string }>;
  /** Android download page copy for this version's APK. */
  apk: {
    /** Intro line on the Android page. */
    body: string;
    /** "What's new" bullets for this build. */
    notes: string[];
  };
  privacyCta: {
    title: string;
    /** Use {{privacy}} and {{terms}} for linked labels. */
    body: string;
    privacyLabel: string;
    termsLabel: string;
  };
};
