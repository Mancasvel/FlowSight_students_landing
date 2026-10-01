# Supported by addition — 2026-10-01

## Scope and source

Add Supported by directly below the Students hero using the six confirmed partners and real assets from the main FlowSight site: Xiji Incubator, Universidad de Sevilla, Barner Brand, MongoDB, Microsoft, Xiaomi. Main reference: `FlowSight_landing/src/components/redesign/PartnersBar.tsx` and `public/logos`.

The isolated worktree starts at `bf0744849aa7e4d8ec4c555227623507d2b9841e`. Existing Students content and pilot boundaries are retained.

## Implementation

- Add the same component and stylesheet as the Solo Supported by section.
- Use real partner assets, with unchanged image pixels and source provenance metadata in the PNG/JPEG files.
- Use the existing fonts and theme tokens, with two mobile columns, three tablet columns and six desktop columns.
- Adapt transparent and opaque logos to system dark mode; honor reduced motion.
- Render an accessible list with `role="list"`; images next to visible labels have empty alt text to avoid repeating names.

## Verification

- `corepack pnpm lint`, `corepack pnpm typecheck`, and production build pass.
- `scripts/verify-supported-by.mjs` verifies the exact six names/order, every loaded logo, contained image boxes, HTTP 200, no page errors and no horizontal overflow at 1440px, 390px and 320px in light/dark modes.
- Impeccable detector returned no findings on the new component and stylesheet.
- Independent scoped visual review found no material visual defects. Its one accessibility fix, explicit list role for Safari VoiceOver, was applied and scored resolved; final disposition `ship`.
- Local captures and reports are saved in `.impeccable/review/students-supported-by-*`. Production evidence is saved under `artifacts/supported-by-production/` after rollout.

## Production target

Project: `flowsight-students-landing`, `prj_QewFwBeFBt40emSA1ENuCuhw8PAZ`.

Stable public target: <https://flowsight-students-landing.vercel.app>. `students.flowsight.site` is assigned to the project; user is managing its DNS.

Feature commit `3c3f3f1` was pushed as a fast-forward to `origin/main` after confirming the remote still matched the exact base. Vercel's Git integration deployed it automatically to production as `dpl_8shCzsyMFY6GaqNbsaR8iigw8mJv`, <https://flowsight-students-landing-aeil5ybjy-mancasvels-projects.vercel.app>; status Ready, with the stable public alias assigned.

Production verification against <https://flowsight-students-landing.vercel.app> passed all four viewports: HTTP 200, all six exact partner names/order, loaded/contained logos, no page errors, no horizontal overflow. Captures from `artifacts/supported-by-production/students-supported-by-{desktop,mobile,dark,mobile-dark}.png` were opened and visually inspected. The matching JSON report records the checks. No DNS settings were changed.

The original `FlowSight_students_landing` working tree remains at its prior HEAD with its `.gitignore` edit untouched. This feature lives in the isolated `FlowSight_supported_by_worktrees/students` checkout and remote main.
