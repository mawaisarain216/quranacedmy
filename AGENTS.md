# Agent instructions — Ali Hassan Institute

## Hallmark design skill
Use Nutlope/Hallmark v2 (MIT) for new pages, explicitly requested redesigns, and UI audits when available. Install in this checkout with `npx skills add nutlope/hallmark`; global install is `npx skills add nutlope/hallmark -g`. The existing institute identity and Urdu/English meaning take precedence over any theme.

## Project-specific design scope
- Improve public Quran academy pages, course/program presentation, student/parent journeys, contact and enrollment forms, and responsive layouts.
- Preserve the exact meaning of approved Urdu source content in English translations; optimize SEO without changing the message.
- Respect the institute's existing colors, typography, logo, imagery, and Tutor LMS/WooCommerce/Zoom or Google Meet integrations where present.
- Do not invent teachers, credentials, course outcomes, student counts, testimonials, prices, or religious claims.

## Non-negotiable change controls
- Hallmark is a design aid, not permission to change LMS enrollment, memberships, payments, user roles, course access, or integrations.
- Record existing routes, forms, links, course actions, and test hooks before redesign; verify they remain afterward.
- Run available lint, TypeScript, production build, and relevant enrollment/payment/access checks. Do not claim checks passed unless actually run.
- Use a feature branch and PR. Do not merge to `main` or deploy without explicit approval.
