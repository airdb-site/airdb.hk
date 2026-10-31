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
  const nonempty = (v: unknown, path: string): void => {
    if (typeof v === "string") {
      if (!v.trim()) throw new Error(`Missing content: ${path}`);
    } else if (Array.isArray(v)) {
      v.forEach((item, i) => nonempty(item, `${path}.${i}`));
    } else if (v && typeof v === "object") {
      for (const [k, item] of Object.entries(v)) nonempty(item, `${path}.${k}`);
    } else throw new Error(`Missing content: ${path}`);
  };
  for (const locale of localeIds) {
    const t = value[locale];
    if (!t) throw new Error(`Missing locale ${locale}`);
    for (const id of pageIds) {
      if (!t.pages[id]) throw new Error(`Missing page ${locale}.${id}`);
      for (const key of ["title", "description", "heading", "intro"] as const)
        nonempty(t.pages[id][key], `${locale}.${id}.${key}`);
    }
    for (const id of Object.keys(capabilityStates)) {
      if (!t.capabilities[id as keyof typeof capabilityStates])
        throw new Error(`Missing capability ${locale}.${id}`);
    }
    for (const key of ["notice", "legal", "contact", "skip", "menu"] as const)
      nonempty(t.ui[key], `${locale}.ui.${key}`);
    nonempty(t, locale);
  }
}
validateCopy(copy);
