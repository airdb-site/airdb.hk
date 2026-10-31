# airdb.hk

AirDB Hong Kong’s multilingual company and research site: financial infrastructure for enterprises and AI agents, beginning with cross-border trade. English `/`, Simplified Chinese `/zh-hans/`, Traditional Chinese `/zh-hant/`.

The static site contains eight page types in each language (24 content routes) and a standalone 404. Financial capabilities are **planned or exploratory**. There is no live payment, wallet, custody, exchange, settlement, SDK, API key or sandbox. x402 protocol research and proposed digital renminbi channel exploration are separate topics.

## Local development

Use Node 26 and pnpm 11.9.0 (matching the existing configuration):

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview --host 127.0.0.1 --port 4321
```

Check the printed preview address if that port is occupied. Astro may keep its preview server running independently; use `pnpm exec astro preview status` and `pnpm exec astro preview stop` to manage it.

## Content and routes

- `src/site/model.ts`: route IDs, locale IDs, shared capability states and content interfaces.
- `src/site/{en,zh-hans,zh-hant}.ts`: complete localized pages and navigation. `index.ts` rejects missing required content during builds.
- `src/articles/*.md`: complete research article translations and metadata. `src/site/sources.ts` records dated sources and the claims they support.
- `src/layouts/SiteLayout.astro`: shared HTML, metadata and accessibility structure.
- `src/components/`: homepage, inner pages, article, header, footer and reusable capability/flow components.
- `src/pages/[...path].astro`: 21 non-home static routes. The original three homepage wrappers remain.
- `src/styles/product.css` and `hk.css`: self-hosted fonts, established tokens, responsive layouts and reading styles.

Use stable page IDs and `routeFor(locale, pageId)` for links. Contact points to the corresponding company page `#contact`; email remains `info@airdb.com`, without a form backend. Preserve old homepage anchors and the content migration map in `docs/content-migration.md`.

Update all three languages together. Keep financial status labels truthful. A roadmap is not a release announcement; do not label a sandbox or capability available without verified access, scope and ownership. Research must distinguish source-backed facts, opinion and hypotheses. Recheck mutable protocol sources when changing related claims.

## Verification

```sh
node --test tests/*.test.ts
pnpm build
python3 scripts/check-site.py --stage complete
git diff --check
```

The output checker validates 24 routes, metadata, same-topic language alternates, internal links and fragments, old homepage anchors, sitemap, 404 and prohibited form/remote-script elements. Browser checks are also required: layouts at 320/375/768/1440, keyboard menus and skip link, 200% reflow, reduced motion, no JavaScript and article reading. Automated checks do not establish the truth of business or regulatory claims; review those explicitly.

`docs/site-verification.md` records this implementation’s actual checks and environment limitations. `docs/implementation.md` is the original site’s historical implementation note, not the current content map.

## Deployment boundary

Existing GitHub Actions publishes main pushes to gh-pages. This reconstruction has been implemented and verified locally only. It does not authorize a push, merge, PR or deployment. Keep the existing workflow, lockfile, CNAME and DNS unchanged unless a separate task authorizes changes.
