# Product communication improvements — 2026-11-05

- Narrowed all three homepages to orders, payment authorization and reconciliation for trade platforms and Agent teams.
- Explained Hong Kong positioning and distinguished digital renminbi channel research from Agent/x402 protocol research.
- Added two localized static workflow examples with input, five steps, expected output, exception handling and context-specific contact links.
- Added separate trade and Agent collaboration email subjects; no email was sent.
- Replaced repeated full notices on ordinary inner pages with a concise exploration-stage label; retained the full home/developer/trust notices, capability states and footer boundaries.
- Preserved existing routes, same-topic language navigation and old homepage anchors.

Verification: 13 Node tests passed; Astro production build generated 24 content routes plus 404; scripts/check-site.py passed; git diff --check passed. Browser checked simplified Chinese home → solutions → trade contact and its mailto target, Traditional Chinese solutions at 375px, and English solutions at 320px without horizontal overflow.

Build used `node node_modules/astro/bin/astro.mjs build` because the local pnpm launcher stalled before producing output. No dependencies, deployment settings or remote branch were changed. Changes have not been committed, pushed or deployed.
