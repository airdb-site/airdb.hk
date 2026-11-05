import en from "./en.ts";
import hans from "./zh-hans.ts";
import hant from "./zh-hant.ts";
import { localeIds, pageIds, capabilityStates } from "./model.ts";
import type { Locale, LocaleCopy } from "./model.ts";
export const copy: Record<Locale, LocaleCopy> = {
  en,
  "zh-hans": hans,
  "zh-hant": hant,
};

export function validateCopy(value: Record<Locale, LocaleCopy>): void {
  const missing = (path: string): never => {
    throw new Error(`Missing content: ${path}`);
  };
  const text = (v: unknown, path: string): void => {
    if (typeof v !== "string" || !v.trim()) missing(path);
  };
  const required = (
    v: unknown,
    keys: readonly string[],
    path: string,
  ): void => {
    if (!v || typeof v !== "object") missing(path);
    for (const key of keys)
      text((v as Record<string, unknown>)[key], `${path}.${key}`);
  };
  const texts = (v: unknown, path: string): void => {
    if (!Array.isArray(v) || v.length === 0) missing(path);
    (v as unknown[]).forEach((item, i) => text(item, `${path}.${i}`));
  };
  for (const locale of localeIds) {
    const t = value[locale];
    if (!t) missing(locale);
    text(t.lang, `${locale}.lang`);
    required(
      t.nav,
      ["platform", "solutions", "developers", "research", "company"],
      `${locale}.nav`,
    );
    required(
      t.ui,
      [
        "menu",
        "contact",
        "skip",
        "top",
        "primary",
        "secondary",
        "notice",
        "legal",
        "figureNote",
        "read",
        "flowTitle",
        "external",
        "human",
        "vision",
        "research",
        "back",
        "source",
        "date",
        "author",
      ],
      `${locale}.ui`,
    );
    required(t.ui.status, ["planned", "exploring"], `${locale}.ui.status`);
    texts(t.ui.flow, `${locale}.ui.flow`);
    for (const id of pageIds) {
      const p = t.pages?.[id];
      const path = `${locale}.${id}`;
      required(p, ["title", "description", "heading", "intro"], path);
      if (!Array.isArray(p.sections)) missing(`${path}.sections`);
      // Article body lives in Markdown; an empty sections array here is intentional.
      if (id !== "article" && p.sections.length === 0)
        missing(`${path}.sections`);
      p.sections.forEach((s, i) => {
        const sectionPath = `${path}.sections.${i}`;
        required(s, ["id", "title"], sectionPath);
        texts(s.paragraphs, `${sectionPath}.paragraphs`);
        if (s.bullets !== undefined) texts(s.bullets, `${sectionPath}.bullets`);
        if (s.caseStudy) {
          required(s.caseStudy, ["label", "stepsLabel", "resultLabel", "exceptionLabel", "exception", "cta"], `${sectionPath}.caseStudy`);
          texts(s.bullets, `${sectionPath}.bullets`);
        }
      });
      if (id === "solutions") {
        for (const caseId of ["trade", "agent"]) {
          if (!p.sections.find(s => s.id === caseId)?.caseStudy)
            missing(`${path}.${caseId}.caseStudy`);
        }
      }
    }
    for (const id of Object.keys(capabilityStates) as Array<
      keyof typeof capabilityStates
    >) {
      const c = t.capabilities?.[id];
      const path = `${locale}.capabilities.${id}`;
      required(c, ["title", "summary", "input", "output"], path);
      texts(c.boundaries, `${path}.boundaries`);
    }
  }
}
validateCopy(copy);
