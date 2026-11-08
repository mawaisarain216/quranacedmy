# AHI Reusable Component Library — Development Status

## Approved direction
- Target brand: Ali Hassan Institute (AHI). Lumo Loft Studio is reference-only.
- Approved visual direction: deep/primary green, restrained gold accents, ivory/soft-green surfaces, clean typography, rounded controls and premium minimal layouts.
- Initial palette: primary green #246C3F, hover green #1B5733, deep green #0B3424, heading #123D2B, gold #C89B40, light gold #E2AE4A, soft green #EAF3ED, background #F7FAF8, body #33483E, muted #65756D, border #DDE8E1, white #FFFFFF.
- User explicitly approved implementation of the reusable component library. Future refinements are expected.

## Repository baseline (inspected before changes)
- Repository: mawaisarain216/quranacedmy
- Base branch: main
- Stack: Next.js 16.3.4, React 19.2, TypeScript strict, Tailwind CSS 4, lucide-react, Prisma.
- Existing public homepage calls SiteHeader and SiteFooter directly.
- Existing reusable primitives are in src/components/ui.tsx.
- Existing root layout does not wrap every route in public header/footer; preserve admin/login route behavior.
- Existing trial form posts to /api/trial. Preserve its endpoint, field names, validation attributes, and submission behavior.
- Existing project includes a README and CI scripts: typecheck, lint, build, check.

## Scope
Build a shared AHI design-token layer and reusable UI components for:
- Global public header/navigation and responsive mobile menu.
- Global public footer.
- Buttons and icon buttons.
- Text/email/phone/password fields, textarea, select, checkbox, radio, switch, file input.
- Form field wrappers and validation feedback.
- Course, feature, teacher, statistic and content cards.
- Alerts, badges, modal/dialog, tabs, accordion, breadcrumbs, pagination, skeleton/loading states, progress indicators and media frames.
- LMS-friendly dashboard/stat and lesson UI primitives.

## Non-negotiable implementation rules
- Work only on feat/ahi-reusable-component-library; do not push to or merge into main.
- Preserve existing business logic, routes, form actions, API contracts and data access.
- Keep components accessible, keyboard usable and mobile responsive.
- Reuse shared tokens; avoid per-page copies of repeated components.
- Do not replace the actual AHI logo with an invented logo. Retain the current placeholder until the supplied official asset is located.
- Do not claim build/test success unless the checks were actually run.
- Security hardening remains deferred to the later agreed phase; do not remove existing baseline security configuration.

## Progress
- [x] User approved initial component-library visual direction.
- [x] Inspected README, package scripts, root layout, global CSS, homepage, current UI primitives, header/footer, login and admin layout.
- [x] Created isolated feature branch.
- [x] Implement approved AHI design tokens and a shared component library (buttons, icon buttons, text/password/textarea/select fields, checkbox, radio group, switch, badges, alerts, cards, feature/stat/course/teacher cards, progress, skeleton, accordion, tabs, breadcrumbs, pagination, media frame, modal, file input and empty state).
- [x] Refine the existing shared public header with responsive mobile navigation and the existing footer with reusable global AHI styling; preserve current route composition.
- [x] Integrate reusable input and password controls into the login UI; preserve the current authentication placeholder and do not imply authentication is active.
- [ ] Run typecheck, lint and build; record exact results. (Not yet executed; must be checked before merge.)

## Implemented in this branch
- `src/components/design-system.tsx`: shared accessible AHI UI primitives and LMS-ready components.
- `src/components/site-header.tsx`: responsive desktop navigation and polished mobile dropdown menu; existing links/routes retained.
- `src/components/site-footer.tsx`: shared branded footer with quick links and contact/social placeholders.
- `src/app/globals.css`: approved AHI palette tokens and legacy theme aliases.
- `src/app/login/page.tsx`: shared AHI input/password controls and visual styling; authentication remains intentionally unimplemented.

## Verification note
- No local runtime/build environment was available through the GitHub connector during this pass. Typecheck, lint, production build and browser-level mobile/desktop checks remain mandatory before merge. Do not describe this branch as error-free until those checks pass.
