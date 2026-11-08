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
- [ ] Implement design tokens and shared primitives.
- [ ] Integrate shared public header/footer without changing route behavior.
- [ ] Integrate reusable form controls in existing public trial form and login UI where safe.
- [ ] Run typecheck, lint and build; record exact results.