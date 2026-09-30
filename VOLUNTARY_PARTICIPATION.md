# Voluntary organization summaries

FlowSight Students may show an institution broad focus patterns only when learners choose to contribute. This is a product decision for the proposed pilot. The current site displays sample figures; the desktop consent and contribution service are not implemented yet.

## Learner choice

- Group sharing starts **off**. Receiving or activating a license never enables it.
- The desktop app must present a separate opt-in that names the organization, the exact summary fields, the reporting period and who can see the result. The existing product-analytics, cloud-sync and cloud-AI choices cannot grant this permission.
- The learner can decline and still use every included local feature. They can withdraw later in the same settings area. Withdrawal must stop future uploads and remove that learner's retained contributions from the active group summary.
- The app must not upload screenshots, raw screen context, window or app titles, task names, notes, personal reports, timestamps of individual sessions or license codes as report fields.

## Buyer boundary

- The buyer may see an aggregate count of activated codes without group sharing. It never receives a list of people, codes, devices or individual activation events.
- Focus time, deep-focus averages, interruptions and broad activity categories are only future group summaries. They require at least 10 currently consenting contributors for the reporting period. If the count falls below 10, hide all focus metrics and category totals.
- The dashboard must have no person-level filters, drill-down, rankings or arbitrary date ranges that expose one learner by comparing views. Use a fixed reporting window and suppress sparse category values before release.
- Exact contributor identities and the linkage needed for withdrawal stay in a restricted service, outside the buyer dashboard. Treat submitted summaries as personal data until deleted; do not call them anonymous.

## Before a real launch

Build and verify the desktop control, authenticated contribution and withdrawal endpoints, deletion, threshold enforcement, restricted storage, and buyer access. Test opt-in, decline, revocation, a group crossing below 10 contributors, and attempts to retrieve person-level data. Until these checks pass, keep the dashboard in its clearly labelled sample-data state.
