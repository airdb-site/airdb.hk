# AirDB Company Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 airdb.hk 建成面向企业与 Agent 的公司级三语主站，完整保留原业务故事与安全边界，交付 24 个内容页面和统一 404。

**Architecture:** 沿用 Astro 静态输出，保留三份首页入口，其余 21 个路径由静态动态路由生成。共享路由与状态定义、按语言组织的类型化内容、独立 Markdown 专题和少量组件分工；无服务端金融功能，无 CMS 或新框架。

**Tech Stack:** 现有 Astro `^7.3.5`、@astrojs/sitemap `^3.7.4`、TypeScript、CSS、本地 Markdown；锁文件维持不变，pnpm `11.9.0`，执行环境与现有 CI 对齐 Node 26。检查使用 Node 内置 test/assert、Python 3 标准库及可用浏览器工具，不新增测试框架。

**Spec:** `docs/superpowers/specs/2026-10-31-airdb-hk-company-site-design.md`（设计文档 c5ff22e）。用户随后对“这份方案可以作为第一版的建设依据吗”回答“好的”，详细设计已批准；本文为待确认执行计划。原设计保留当时状态，本文记录后续批准，不将网站设计批准解释为金融功能或发布授权。

## Global Constraints

- “首期共 8 个页面类型 × 3 语言，加现有统一 404。”
- “初版金融能力仅使用探索/规划”；“本网站展示研究与产品规划，不处理真实支付，不提供钱包、托管、兑换或清算服务，不暗示监管批准或官方关联。”
- “技术公益作为文化初心，不能取代核心定位。”
- “沿用 Astro 静态站与当前依赖版本”；不升级依赖，不改锁文件、部署工作流、CNAME 或 DNS。
- “原根路径不变”；保留首页 `#scenarios`、`#infrastructure`、`#protocol`、`#roadmap`、`#contact`、`#top`。
- “核心页面缺任何语言或关键信息就阻止发布，不悄悄混用英文。”
- “每页独立 title/description、canonical、三语言 hreflang 与指向该页英文版的 x-default”；404 noindex。
- “真实金融后台、支付执行、钱包/托管/兑换/清算、牌照与通道接入”不在范围。
- 保留基线 874c57c 的三语导航、移动菜单点击关闭和 Escape、对比度、404、跳过主内容修复；保留邮件 `info@airdb.com` 与 `https://airdb.group`，不新增组织关系声明。
- 本计划交付阶段不安装依赖、不写产品代码、不执行产品构建。执行须等待计划及执行方式确认；执行完先交付本地成果和证据，推送、合并、部署另遵循当时明确授权。

## Review Focus

1. 从专题切换语言或直接打开中文深链接，应留在相同主题而不是回首页；任务 1 路由测试与任务 4 输出检查覆盖。
2. 320px、长英文导航、200% 缩放与键盘操作，不能遮挡菜单、语言、正文或焦点；任务 2/5 浏览器检查覆盖。
3. 老收藏锚点、无 JS 访问、未知路径，应到对应摘要或三语 404 入口；任务 3/5 检查覆盖。
4. 翻译和路线标题可能把“规划沙盒”误读为现在可用，状态、CTA 与示例必须一致；任务 1 状态测试与任务 4/5 语义审查覆盖。
5. 长协议代码、引用 URL、页脚邮件及 reduced-motion，不能撑破布局或依赖动画阅读；任务 4/5 输出与视觉检查覆盖。

---

## 文件边界与接口约定

实施起点：task-7 独立克隆的文档分支；先读取设计与当前 git 状态。`origin` 当前是本机 task-6 源仓库，**不向此 origin 推送**，不修改源仓库。执行时按 using-git-worktrees 技能决定隔离工作位置；后续代码分支以包含设计/计划的 HEAD 为起点，先核对 upstream 是否存在新提交，不重置他人改动。

| 文件 | 职责 / 改动 |
| --- | --- |
| `src/site/model.ts` | 新建纯类型、locale/page 常量、slug 映射、routeFor、所有页面路径、能力状态 |
| `src/site/en.ts`, `zh-hans.ts`, `zh-hant.ts`, `index.ts` | 新建按语言的完整文案及聚合验证；从现有 content.ts 语义迁移 |
| `src/content.ts` | 迁移完成后删除；旧 Home 未换接前保留，禁止双套长期数据 |
| `src/layouts/SiteLayout.astro` | 新建文档 head、SEO、跳过链接、main、页眉页脚及基础样式导入 |
| `src/components/SiteHeader.astro`, `SiteFooter.astro` | 新建全站导航、同页三语切换、菜单交互、边界与邮件 |
| `src/components/StatusBadge.astro`, `CapabilityCard.astro`, `FlowDiagram.astro` | 新建状态文本、四能力卡片、标为示意的有序流程 |
| `src/components/Home.astro` | 修改为公司首页，保留三份现有首页路由包装 |
| `src/components/CompanyPage.astro` | 新建平台/场景/开发者/信任/研究索引/公司六类内容模板；按 pageId 分支，复用共享布局 |
| `src/components/ResearchArticle.astro` | 新建专题模板，选取三份本地 Markdown，展示元数据、来源和联系链接 |
| `src/articles/ai-cross-border-payments.{en,zh-hans,zh-hant}.md` | 新建完整等义文章，不以摘要替代翻译 |
| `src/site/sources.ts` | 新建专题来源与 claim 关联台账 |
| `src/pages/[...path].astro` | 新建：getStaticPaths 只生成 7 类非首页 × 3 语言；dispatch 到 CompanyPage/ResearchArticle |
| `src/pages/index.astro`, `zh-hans/index.astro`, `zh-hant/index.astro` | 保持现有 Home locale 入口接口 |
| `src/pages/404.astro` | 保留独立 noindex、三语首页链接；仅适配必要的共享样式 |
| `src/styles/product.css`, `src/styles/hk.css` | 保留字体/颜色基础，整理 hk 布局、内页、阅读及响应式样式；不新增第三套视觉系统 |
| `tests/site-model.test.ts` | 新建关键路由、完整性和状态契约测试 |
| `scripts/check-site.py` | 新建：用 HTMLParser 读取构建产物，检查路由、元数据、链接锚点、文章结构和禁用元素 |
| `docs/content-migration.md`, `docs/site-verification.md`, `README.md` | 迁移逐项核对、实际验证证据、更新开发/内容说明；原 docs/implementation.md 保留历史 |

不增加 package scripts 也能执行检查；除非实际必要，不改 package.json。纯内容排版不写逐字快照测试；只自动检查容易造成跨页回归的契约。

### 稳定接口（以下任务共同使用）

`Locale = 'en' | 'zh-hans' | 'zh-hant'`；`PageId = 'home' | 'platform' | 'solutions' | 'developers' | 'trust' | 'research' | 'article' | 'company'`。

slug：home `''`；article `'research/ai-cross-border-payments'`；其余等于 PageId。`routeFor(locale: Locale, pageId: PageId): string` 返回带开头及结尾 `/` 的路径；`allPages(): Array<{locale: Locale; pageId: PageId; path: string}>` 返回全部 24 条。

`CapabilityId = 'orchestration' | 'authorization' | 'reconciliation' | 'agent'`；`CapabilityStatus = 'planned' | 'exploring'`。共享 `capabilityStates: Record<CapabilityId, CapabilityStatus>` 前三项 planned、agent exploring；沙盒只在路线说明中作为未来规划，不能进入可用能力列表。

内容最小类型：`Section { id: string; title: string; paragraphs: string[]; bullets?: string[] }`；`PageCopy { title: string; description: string; heading: string; intro: string; sections: Section[] }`；`CapabilityCopy { title: string; summary: string; input: string; output: string; boundaries: string[] }`。

`LocaleCopy { lang: 'en'|'zh-Hans'|'zh-Hant'; nav: Record<'platform'|'solutions'|'developers'|'research'|'company',string>; ui: {menu:string; contact:string; skip:string; top:string; primary:string; secondary:string; notice:string; legal:string; figureNote:string; status:Record<CapabilityStatus,string>}; pages:Record<PageId,PageCopy>; capabilities:Record<CapabilityId,CapabilityCopy> }`。`copy: Record<Locale,LocaleCopy>` 与 `validateCopy(value: Record<Locale,LocaleCopy>): void` 从 index.ts 导出；验证缺项、空关键字符串、能力 key 不齐即抛错。不要实现通用 CMS schema 或任意 HTML 数据渲染。

组件 Props：SiteLayout `{locale,pageId,title?,description?}`；Header/Footer `{locale,pageId}`；Home `{locale}`；CompanyPage `{locale,pageId: Exclude<PageId,'home'|'article'>}`；ResearchArticle `{locale}`；StatusBadge `{locale,status}`；CapabilityCard `{locale,id}`；FlowDiagram `{locale}`。布局提供唯一 `<main id="main" tabindex="-1">` 和 `<body id="top">`，内容组件不再嵌套完整 HTML 或 main。

文章 frontmatter：`translationKey: 'ai-cross-border-payments'`、`locale`、`title`、`description`、`author: 'AirDB 编辑'`（本地化）、`publishedAt`、`updatedAt`、`kind: 'research'`、`claimRefs: string[]`。日期记录实际文章完成日期，页面标研究日期而非虚构历史发布日期；正式发布时校核。`Source {id,url,checkedAt,version,scope}`；`Claim {id,kind:'external'|'internal'|'opinion'|'hypothesis',statement,sourceIds:string[]}`，由 sources.ts 导出 `sources` 和 `claims`。外部事实至少有来源，观点不伪装成来源事实。

## Task 1：建立完整内容与路由契约

**Files:** 新建 model.ts、三语内容与 index.ts、tests/site-model.test.ts、docs/content-migration.md；本任务不换接现有页面。

**Interfaces:** 使用上述 model/copy 签名；输出后续模板能直接使用的 24 页 metadata、六类内页 sections、首页叙事和四能力文案。文章正文由任务 4 提供。

- [ ] 1. 核对 git status/log/remotes、Node/pnpm、现有工作区修改，记录基线；按执行技能建立隔离代码分支，不改源仓库。执行授权后才允许 `pnpm install --frozen-lockfile`；如所需运行时不可用先报告，不自行升级锁文件。
- [ ] 2. 写 `tests/site-model.test.ts` 的 Node 内置测试，至少包含下列断言；额外验证三语八页和四能力非空、`validateCopy` 对删除任一页面/空 notice 的副本抛错。

```ts
assert.equal(routeFor('zh-hant', 'article'), '/zh-hant/research/ai-cross-border-payments/');
assert.equal(routeFor('en', 'home'), '/');
assert.equal(allPages().length, 24);
assert.equal(new Set(allPages().map(p => p.path)).size, 24);
assert.deepEqual(capabilityStates, {
  orchestration: 'planned', authorization: 'planned',
  reconciliation: 'planned', agent: 'exploring',
});
```

- [ ] 3. 运行 `node --test tests/site-model.test.ts`，确认因待实现模块缺失而失败；测试导入显式 `.ts`，纯类型使用 `import type`，不依赖 Astro 运行时。
- [ ] 4. 实现 model.ts 的签名与常量，创建三语内容和完整性校验；index.ts 导入后执行 validateCopy，使构建也拒绝缺译。段落与标题只按已批准设计写，不虚构金融能力。
- [ ] 5. 填写 content-migration.md：原内容每项对应新 pageId/section id 和三语核对栏；包含政策示例数值及其非定价注释、协议分层、数字人民币、小额支付、公益和原外链。
- [ ] 6. 再运行 Node 测试，预期全部通过；人工比较三语语义，标清商业模式为内部假设，官网不发虚构报价。仅提交本任务文件，提交建议 `feat: define multilingual company content and routes`。

## Task 2：共享框架与可访问的公司首页

**Files:** 新建 SiteLayout/Header/Footer/StatusBadge/CapabilityCard/FlowDiagram；修改 Home.astro、hk.css，必要时 product.css；新建 docs/site-verification.md。首页包装文件不改接口。

**Interfaces:** 消费任务 1 copy/routeFor/capabilityStates；组件使用约定 Props。先交付三语首页；内部新页链接在任务 3/4 完成，不把此阶段当发布候选。

- [ ] 1. 在 site-verification.md 记录原首页 375/1440 宽度截图、基础输出字节与网络请求清单，作为视觉和资源对比基线；没有浏览器可用则记录阻塞，不能写成通过。
- [ ] 2. 实现 SiteLayout 的 metadata、当前页三语 alternate/x-default、唯一 main、skip link 和静态导航；Header 保留 details 菜单点击关闭、Escape 后焦点返回 summary；Footer 保留邮件、Group 和边界。
- [ ] 3. 实现状态卡与流程组件：实际状态取共享枚举；流程可读有序文本，外部通道虚线并标“未来接入评估”，整图标示意；不显示余额和交易成功数字。
- [ ] 4. 重构 Home，按设计首屏、问题、四能力、两类客户、专题、信任路线、联系顺序组织。保留六个旧锚点在有实质摘要的区域；主 CTA 平台、次 CTA 对应语言公司页 contact。
- [ ] 5. 整理样式：米白深绿琥珀、自托管字体、中文无衬线；桌面约55/45首屏，内容最大宽约1140px，移动先文案与状态再图，不延续固定定位导致换行遮挡菜单。
- [ ] 6. 运行 `pnpm build`，预期成功；用 `pnpm preview --host 127.0.0.1 --port 4321` 检查三语首页，375/1440、键盘菜单、无 JS 导航、状态与 CTA 同屏。更新实际证据；提交建议 `feat: build accessible company homepage and shared shell`。

## Task 3：六类公司内页与旧链接兼容

**Files:** 新建 CompanyPage.astro、src/pages/[...path].astro、scripts/check-site.py；修改三语内容如需校正文案；迁移完成后删除 src/content.ts；保留 404.astro 的独立语义。

**Interfaces:** 消费 allPages/routeFor/copy；getStaticPaths 此阶段生成六类内页×三语，任务4加 article 成最终21非首页路由。CompanyPage 按 pageId 选明确布局分支，无字符串拼 HTML。

- [ ] 1. 编写 Python 标准库产物检查器：`python3 scripts/check-site.py --stage company`，期望 21 内容页（3首页+18内页）和404；检查目录 index.html、唯一h1/main、title/description、lang、canonical、alternate，重复 id 报错。参数 `--stage complete` 留给任务4的24页检查；两种模式只允许已知的阶段差异。
- [ ] 2. 对任务2产物运行 company 检查，预期因缺内页失败，确认是目标缺失而非检查器错误。
- [ ] 3. 实现静态路由与 CompanyPage：平台四能力边界和路线；场景四主题且跨境优先；开发者静态协议示意与沙盒规划；信任责任和网站数据说明；研究真实专题入口；公司愿景、原则、公益与 id=contact 邮件。不要生成 `/contact/` 页面或自动提交表单。
- [ ] 4. 扩展检查器：解析所有内部 href，除本阶段明确的三语 article 待建路径外，链接目标与 fragment 必须存在；三语首页旧锚点存在；mailto 地址和 Group 目标正确；404 noindex、三语主页入口正确且不设置正常页 canonical。
- [ ] 5. 运行 `pnpm build`、`node --test tests/site-model.test.ts`、company 产物检查，预期通过。核对 content-migration.md 全部已有主题已落位，`rg 'content' src` 确认旧模块没有使用后才删除 src/content.ts。
- [ ] 6. 浏览器直接打开三语内页、从页脚进入信任、从场景到联系并切语言；记录实际结果。提交建议 `feat: add company platform and audience pages`。

## Task 4：核心专题、三语来源与完整24页

**Files:** 新建三份文章 Markdown、sources.ts、ResearchArticle.astro；扩展 [...path].astro/check-site.py；修改研究索引与首页摘要使其一致。

**Interfaces:** 使用既定 frontmatter/Source/Claim；ResearchArticle 直接导入三份 Markdown 模块并按 locale 取其 Content 与 frontmatter；不用运行时远端加载和额外 Markdown 插件。

- [ ] 1. 扩展 complete 检查：24条预期路由不得缺失或多出内容页；每篇 article 有 `data-translation-key="ai-cross-border-payments"`、正确 html lang、有效的 time[datetime]、可见作者与研究标识、至少九个正文 h2、来源列表及对应主题的三语链接。检查渲染产物，不让 Python 解析 TypeScript 或依赖未安装的 YAML 库。扩展 Node 测试导入 sources.ts，断言每个 external claim 的 sourceIds 非空且全部对应现有来源、每个来源URL为https且checkedAt有效；这些元数据检查不能代替人工核对来源实际支持内容。
- [ ] 2. 运行 `python3 scripts/check-site.py --stage complete`，确认因三语专题缺失失败。
- [ ] 3. 核对 x402 官方 HTTP transport 当前资料，记录版本或核对日期与支持范围；只为确实使用的外部事实建 claim。数字人民币接入无证据只写探索；不沿用未核实的“目前主要用于”断言。研究稿不引入无证据成本、到账、客户或监管结论。
- [ ] 4. 编写简中完整九节专题，标题保留《AI重构跨境支付：效率、风控与Agent商业时代》，约1800–2500中文字；繁中/英文完整等义。故事明确虚构示例，效率是待验证假设，权限与模型分离；每项外部事实在对应段落引用，不以来源列表代替实际归因。
- [ ] 5. 实现 ResearchArticle 和最终路由：渲染独立正文、元数据、来源、回平台/联系；article 元素设置上述 data-translation-key，日期使用 time 元素；文章内代码块可局部横滚、URL可断行，整页不横滚。所有示例标模拟，不向远端请求付费资源。
- [ ] 6. 构建并运行两类检查；complete 模式不再允许任何待建路由。人工逐段检查三语 claim、语气、状态和数字，记录 source核对日期；无证据的主张删除或明确假设。
- [ ] 7. 浏览器检查三语专题长文、页内目录与引用、代码滚动及语言保留主题；提交建议 `feat: publish multilingual AI payments research article`（仅本地提交，不代表部署）。

## Task 5：完整回归、视觉检查与交付

**Files:** 完善 scripts/check-site.py、docs/content-migration.md、docs/site-verification.md、README.md；仅为实际失败修改关联组件/文案/样式，不扩大范围。

**Interfaces:** 最终24页与404；使用前述测试命令，记录实际命令、时间、结果、截图路径及未覆盖项。

- [ ] 1. 完善输出检查：sitemap 索引及子文件包含24个canonical且不含404；每页三语alternate和英文x-default准确；禁止form、密码/支付输入、iframe或外部脚本。脚本允许 Astro 为菜单生成的本地资源；不靠关键词扫描自动判定所有文案真实。
- [ ] 2. 执行 `pnpm build`、`node --test tests/site-model.test.ts`、`python3 scripts/check-site.py --stage complete`、`git diff --check`，全部通过再进入交付。检查 git diff 确认依赖锁、工作流、CNAME未变。
- [ ] 3. 启动本地 preview，检查全部24页在375/1440宽度的导航、页脚与内容；每类页面各取最长语言在320/768宽度补查，首页及专题三语均补查320。记录页宽无横向溢出；长代码只能自身滚动。
- [ ] 4. 手动键盘遍历首页/内页/专题：skip、可见焦点、菜单开关和Escape焦点返回、语言链接、CTA、代码滚动；200%缩放与reduced-motion检查；禁JS时正文、主导航与语言仍可读可达。对文字与控件实际配色验算AA对比度（正文4.5:1、大字与控件边界/焦点3:1目标），不能只凭视觉判断。
- [ ] 5. 检查未知路径及静态404产物；本地preview若不模拟Pages的404回退，记录限制并直接验证404.html，不宣称已验证线上托管。抽查邮件、Group、协议外链；链接失效先核对，不伪造成功。
- [ ] 6. 完成内容人工审查：迁移清单全部覆盖；金融能力均探索/规划；沙盒仅未来计划；公益为文化；无资质、伙伴、收入、性能虚构；三语安全边界一致；协议/资产/通道不混写。真实法律主体缺证据不补写。
- [ ] 7. 对比基线资源：无新增第三方追踪、字体CDN或支付请求；报告新增页面与图形带来的实际资源差异，不预先承诺性能分数。截取首页三语桌面/移动、平台、信任、专题长文与404证据，其他检查可用清单记录，不必每项都截图。
- [ ] 8. 更新README新内容路径与检查命令，完成site-verification实际结果和迁移表；运行检查只针对新修复必要回归，不反复无差别重跑。提交建议 `test: verify company site routes content and accessibility`。
- [ ] 9. 按选定执行方式完成独立最终审查，处理阻断问题。交付分支/提交、截图和验证证据，说明线上尚未部署及任何检查限制。真实目标客户访谈是后续建议，不谎称已完成，也不作为无授权外联任务。

## 自查记录与执行交接

本计划已自查设计覆盖：定位/客户/商业假设→任务1/3；四能力/状态/权限→1/2/3/5；8页/三语/SEO→1/3/4/5；专题证据→4；迁移与原修复→2/3/5；视觉与可访问性→2/5；非目标与分期→全局约束及内页内容。公司组织建设、金融后台、访谈执行不属于官网工程任务。

接口自查：PageId共8，allPages含home为24；动态路由最终排除home为21；company阶段21内容页、complete阶段24内容页，两阶段均另加404；联系一律company#contact。组件props与测试使用同一locale/pageId/routeFor命名；状态共享且无sandbox/available枚举。测试无新增依赖；人工语义和视觉检查不能被静态断言替代。所有未来验收框保持未勾选，不将计划自查写成产品测试通过。

推荐 **Native**：由同一实施者顺序完成五个任务，最后一次独立整分支评审。此改动集中在同一套内容、路由与组件，顺序执行减少上下文交接，且无真实资金风险；主要风险是三语语义和公共布局回归，已安排契约测试和最终审查。另一可选方式是 **Subagent-driven**：每任务独立实施者与评审，逐任务检查更细，但交接成本更高。

请父对话交付计划后，请用户确认计划并选择执行方式；尚未获得该确认前，不动产品代码或安装依赖。Native确认后读取executing-plans；Subagent-driven确认后读取subagent-driven-development。不得再次要求确认已批准的公司定位或详细设计。
