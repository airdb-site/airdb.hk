# Company site verification

Implementation branch: feat/company-site. Baseline: 874c57c; approved design c5ff22e, plan 4d08393. Local only; no push, PR, merge or deployment.

## Environment

Node 26.13.0; pnpm 11.9.0 located in existing npm cache. Frozen install could not download because registry DNS was unavailable. A separate copy of the existing baseline node_modules is used; package.json and pnpm-lock.yaml unchanged. Build runs `node node_modules/astro/bin/astro.mjs build` (the exact underlying package script); pnpm's pre-run dependency check otherwise attempts another network install.

Native worktree tool unavailable; Git worktree created in task-7/airdb-company-site. Browser plugin unavailable; existing Playwright with installed Chrome channel, headless, no browser installation. Baseline screenshot paths in /tmp/airdb-company-qa/baseline-{375,1440}.png. All baseline network resources were localhost HTML, CSS, self-hosted fonts and favicon.

## Interim checks

Task 1: 5/5 Node route/content tests pass; missing page and empty notice reject publication. Test first failed with missing model module, then passed.
Task 2: baseline and new builds pass. Three homepages at 375 and 1440: one h1/main, no horizontal overflow, menu Escape closes and returns focus, no JS content/links accessible, no page errors. Screenshots inspected for cream/green palette, serif English/system Chinese, first-screen hierarchy, spacing and mobile stacking. New screenshots remain local in /tmp/airdb-company-qa.

Complete regression, article evidence and independent review results will follow.
Task 3: 21 content routes + 404 pass built-output metadata/link/anchor checks; missing /platform/ was observed before implementation. Localized solutions → company contact → footer trust → Traditional same-topic switch passes in browser.
Task 4: complete 24 content routes + 404 pass. All three articles contain nine substantive sections and a scoped official protocol citation; Chinese body is approximately 1,850 CJK characters. Official x402 HTTP transport v2 read on 2026-11-01; main remains mutable. Claims distinguish protocol facts, hypotheses, editorial opinion and current site state. Browser contents links and same-topic switches pass in all three article languages. Astro diagnostics using existing /tmp/airdb-tech-audit check tool: 0 errors, 0 warnings, 0 hints (24 files).

## Final regression

- 96 route/viewport combinations (all 24 pages × 320, 375, 768, 1440), meaningful body, expected URL/title, one h1/main, no page overflow: passed. No framework overlay observed in screenshots.
- Keyboard: skip to main; native menu open, Escape close/focus return; menu navigation; localized company contact and footer trust flows; article contents and same-topic language switching: passed.
- No-JavaScript article/navigation checks in all three languages: passed. CSS zoom 200% on representative home/platform/article and reduced-motion: passed. This is a reflow simulation, not a claim of testing every browser’s native zoom UI.
- Text contrast measured from rendered styles on home, platform, developer and article surfaces: no AA failures. Protocol focus initially measured 2.62:1 on dark background; changed to pale green, now 12.19:1. Keyboard horizontal code scrolling passes.
- 404 initially retained an obsolete button class. Browser test caught zero button padding; updated to shared button/actions styles. Return links remain the three original home paths, noindex retained.
- No third-party requests during the local browser suite. No tracking, external font or payment requests.
- Baseline vs final uncompressed bytes: English homepage HTML 11,610 → 10,885; generated CSS 14,824 → 14,118; self-hosted fonts unchanged 239,752. Total HTML increased 34,461 → 181,036 because the site expands from three content pages to 24. These are build sizes, not latency or Lighthouse claims.
- Package/lockfile/deployment workflow/astro configuration/CNAME unchanged. Astro diagnostic tool reports 0 errors, 0 warnings, 0 hints. No new project dependencies.

## Visual and content review

Compared local baseline and final rendered screenshots using view_image. Verified cream/deep-green palette, inherited font family, editorial type hierarchy, approved section order, restrained concept flow, grid spacing and single-column mobile reading. Long headings use balanced wrapping. No live-dashboard or customer-logo imagery added; no raster concept was introduced because the approved written design and established site system are binding.

Migration map reviewed against three language datasets: original trade/e-CNY, Agent mandate values and caveat, x402, small payments and planned sandbox retained. All four capability states remain planned/exploring; no claims of live channels, licensing, clients, revenue, throughput or actual payment execution. Business model is explicitly hypothetical; public-purpose technology remains cultural context.

## Evidence and limits

Browser artifacts and temporary scripts are local only in `/tmp/airdb-company-qa`, not uploaded or committed. Primary screenshots: final-en/zh-hans/zh-hant-{375,1440}.png, platform-1440.png, trust-1440.png, research-ai-cross-border-payments-1440.png, 404.png. Automated matrix results: results.json. Original source worktree remains untouched.

Official x402 source was accessible and checked. Existing AirDB Group destination is preserved, but the web tool could not access it during this run; availability is not claimed. Mailto target was checked without sending email. Online GitHub Pages routing, clean dependency download, Safari/Firefox, assistive-technology screen readers and real target-customer feedback are not verified here. No deployment has occurred.

## Independent review and fix

Fresh whole-branch review at 18b408a: no Critical findings, one Important completeness-guard gap, no additional Minor findings. Reviewer independently repeated Node/output checks and 96 Chrome route/viewport combinations, plus 801/900/1100/1101 breakpoints, no-JS language navigation, menu traversal and unknown-path HTTP404.

The gap allowed deletion of a required CTA, flow caption or capability title to pass validation. Six new tests reproduced missing CTA, flow caption, capability title, navigation label, status label and empty flow. The validator now explicitly requires UI, navigation, statuses, capability fields and structured section text while allowing the article's intentional empty sections array. All six tests failed before the fix; full suite now 12/12 passes. Build/output checks remain green; no content or layout changed in this fix.

Unknown local path also verified independently by implementer: HTTP404, custom Page not found title and three language home links. Final branch is retained locally; original source remains on 874c57c and clean. Review limits remain production hosting/clean install, native zoom/non-Chromium/screen readers, and commercial or financial-service validation.
