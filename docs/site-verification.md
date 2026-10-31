# Company site verification

Implementation branch: feat/company-site. Baseline: 874c57c; approved design c5ff22e, plan 4d08393. Local only; no push, PR, merge or deployment.

## Environment

Node 26.13.0; pnpm 11.9.0 located in existing npm cache. Frozen install could not download because registry DNS was unavailable. A separate copy of the existing baseline node_modules is used; package.json and pnpm-lock.yaml unchanged. Build runs `node node_modules/astro/bin/astro.mjs build` (the exact underlying package script); pnpm's pre-run dependency check otherwise attempts another network install.

Native worktree tool unavailable; Git worktree created in task-7/airdb-company-site. Browser plugin unavailable; existing Playwright with installed Chrome channel, headless, no browser installation. Baseline screenshot paths in /tmp/airdb-company-qa/baseline-{375,1440}.png. All baseline network resources were localhost HTML, CSS, self-hosted fonts and favicon.

## Interim checks

Task 1: 5/5 Node route/content tests pass; missing page and empty notice reject publication. Test first failed with missing model module, then passed.
Task 2: baseline and new builds pass. Three homepages at 375 and 1440: one h1/main, no horizontal overflow, menu Escape closes and returns focus, no JS content/links accessible, no page errors. Screenshots inspected for cream/green palette, serif English/system Chinese, first-screen hierarchy, spacing and mobile stacking. New screenshots remain local in /tmp/airdb-company-qa.

Complete regression, article evidence and independent review results will follow.
