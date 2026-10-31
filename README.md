# airdb.hk

AirDB Hong Kong: a presentation site for cross-border and Agent payment technology. Based on the airdb.io Astro template, using its self-hosted fonts and design foundations.

## Develop
`pnpm install --frozen-lockfile`, then `pnpm dev`. `pnpm build` emits `dist/`.

## Content
English `/`, Traditional Chinese `/zh-hant/`, Simplified Chinese `/zh-hans/`.
Shared copy lives in `src/content.ts`; the shared page is `src/components/Home.astro`.

All payment capabilities are proposed directions. Examples are illustrative only; no funds move, no wallet connects and no payment service is offered by this static site. x402 is described separately from proposed e-CNY channel integration.

## Deployment
The GitHub Actions workflow builds and publishes `dist/` to `gh-pages` on main pushes. After creating the GitHub repository, configure Pages to use that branch, configure DNS and enable HTTPS. No remote repository, DNS or deployment is created by these local files.
Contact uses `mailto:info@airdb.com`; no form backend is required.
