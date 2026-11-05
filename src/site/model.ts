export const localeIds = ["en", "zh-hans", "zh-hant"] as const;
export type Locale = (typeof localeIds)[number];
export const pageIds = [
  "home",
  "platform",
  "solutions",
  "developers",
  "trust",
  "research",
  "article",
  "company",
] as const;
export type PageId = (typeof pageIds)[number];
export const capabilityStates = {
  orchestration: "planned",
  authorization: "planned",
  reconciliation: "planned",
  agent: "exploring",
} as const;
export type CapabilityId = keyof typeof capabilityStates;
export type CapabilityStatus = "planned" | "exploring";
export function routeFor(locale: Locale, pageId: PageId): string {
  const prefix = locale === "en" ? "" : `/${locale}`;
  const slug =
    pageId === "home"
      ? ""
      : pageId === "article"
        ? "research/ai-cross-border-payments"
        : pageId;
  return `${prefix}/${slug}${slug ? "/" : ""}`;
}
export function allPages(): Array<{
  locale: Locale;
  pageId: PageId;
  path: string;
}> {
  return localeIds.flatMap((locale) =>
    pageIds.map((pageId) => ({
      locale,
      pageId,
      path: routeFor(locale, pageId),
    })),
  );
}
export interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  caseStudy?: {
    label: string;
    stepsLabel: string;
    resultLabel: string;
    exceptionLabel: string;
    exception: string;
    cta: string;
  };
}
export interface PageCopy {
  title: string;
  description: string;
  heading: string;
  intro: string;
  sections: Section[];
}
export interface CapabilityCopy {
  title: string;
  summary: string;
  input: string;
  output: string;
  boundaries: string[];
}
export interface LocaleCopy {
  lang: "en" | "zh-Hans" | "zh-Hant";
  nav: Record<
    "platform" | "solutions" | "developers" | "research" | "company",
    string
  >;
  ui: {
    menu: string;
    contact: string;
    skip: string;
    top: string;
    primary: string;
    secondary: string;
    notice: string;
    legal: string;
    figureNote: string;
    status: Record<CapabilityStatus, string>;
    read: string;
    flowTitle: string;
    flow: string[];
    external: string;
    human: string;
    vision: string;
    research: string;
    back: string;
    source: string;
    date: string;
    author: string;
  };
  pages: Record<PageId, PageCopy>;
  capabilities: Record<CapabilityId, CapabilityCopy>;
}
