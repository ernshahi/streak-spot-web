export type LegalBlock =
  | { type: "p"; text: string; html?: never; items?: never }
  | { type: "ul"; items: string[]; html?: never; text?: never };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type Messages = {
  site: {
    tagline: string;
    description: string;
    legalEffectiveDate: string;
    supportSubject: string;
  };
  nav: {
    privacy: string;
    terms: string;
    android: string;
    support: string;
    menu: string;
    closeMenu: string;
  };
  footer: {
    blurb: string;
    privacy: string;
    terms: string;
    android: string;
    rights: string;
  };
  versions: {
    label: string;
  };
  store: {
    downloadOnThe: string;
    getItOn: string;
    appStore: string;
    googlePlay: string;
    inReview: string;
    comingSoon: string;
    reviewNote: string;
    downloadApk: string;
    getTheApk: string;
  };
  android: {
    title: string;
    metaDescription: string;
    heading: string;
    body: string;
    download: string;
    packaging: string;
    stepsTitle: string;
    steps: string[];
    playNote: string;
  };
  theme: {
    toggle: string;
    lightMode: string;
    darkMode: string;
    switchToLight: string;
    switchToDark: string;
  };
  copyEmail: {
    copy: string;
    copied: string;
    copyAria: string;
    copiedAria: string;
  };
  legal: {
    effectiveDateLabel: string;
  };
  privacy: {
    title: string;
    metaDescription: string;
    sections: LegalSection[];
  };
  terms: {
    title: string;
    metaDescription: string;
    sections: LegalSection[];
  };
};
