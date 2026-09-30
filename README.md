# FlowSight Students

Standalone Next.js site for the proposed FlowSight Students organization program. It is intended for `students.flowsight.site`; `solo.flowsight.site` remains the FlowSight Individual site in its existing repository.

The home page shows the institutional offer, authentic FlowSight Individual captures, privacy boundaries and one-time bulk pricing. `/dashboard-preview` is an illustrative organization dashboard with sample figures. The site is in a prelaunch state: there is no checkout, private buyer dashboard, license delivery or student data collection in this repository.

## Local development

```bash
corepack pnpm install
corepack pnpm dev
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm build
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin. The root and dashboard preview both remain `noindex` until the pilot is ready for publication.

## Launch boundary

The displayed €25 and €10 prices are one-time, tax-inclusive figures approved for the proposal. Live checkout must wait for verified payment, installer delivery, license activation and recovery, and a private buyer dashboard. Real focus metrics require an explicit voluntary contribution flow in the desktop apps and aggregation over at least 10 contributors. The current dashboard preview uses sample data only.
