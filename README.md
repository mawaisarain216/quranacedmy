# Quran Academy LMS

A production-oriented Quran education platform built with **Next.js 16 App Router, React 19, TypeScript, Tailwind CSS and PostgreSQL/Supabase**.

## Current foundation

- Next.js 16.3.4 App Router
- React Server Components by default
- TypeScript strict mode
- Reusable UI/site component structure
- Responsive public academy homepage
- Accessible navigation, focus states and reduced-motion support
- Metadata, Open Graph/Twitter metadata, sitemap, robots and web manifest
- Route loading, 404 and error boundaries
- Production security headers in `next.config.ts`
- Prisma/PostgreSQL data layer with safe singleton reuse
- Supabase client foundation
- Validated free-trial request API
- Health-check endpoint at `/api/health`
- Admin dashboard/CMS foundation
- GitHub CI for type checking, linting and production build
- Vercel-compatible Prisma generation on install/build

## Project structure

```text
quranacedmy/
├── .github/workflows/       # CI quality gates
├── prisma/                  # Database schema and future migrations
├── src/
│   ├── app/                 # Next.js App Router routes
│   │   ├── api/             # Server-only route handlers
│   │   ├── admin/           # Admin area (auth/RBAC required before production)
│   │   ├── login/           # Authentication UI foundation
│   │   ├── error.tsx        # Route error boundary
│   │   ├── loading.tsx      # Route loading UI
│   │   ├── not-found.tsx    # 404 UI
│   │   ├── layout.tsx       # Root metadata/layout
│   │   ├── manifest.ts      # Web app manifest
│   │   ├── robots.ts        # Crawler policy
│   │   └── sitemap.ts       # Sitemap
│   ├── components/          # Reusable UI and feature components
│   └── lib/                 # Database, CMS and server utilities
├── next.config.ts           # Next.js configuration/security headers
├── eslint.config.mjs        # ESLint flat config
└── package.json              # Build, typecheck, lint and deployment scripts
```

## Local setup

1. Install Node.js 20.19+ (Node 22 LTS is recommended for this repository).
2. Copy `.env.example` to `.env.local`.
3. Add the Supabase PostgreSQL `DATABASE_URL` and `DIRECT_URL`.
4. Run `npm install`.
5. Run `npx prisma generate`.
6. For development only, apply schema changes with the chosen Prisma migration workflow.
7. Run `npm run dev`.

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run check
```

## Vercel + Supabase

Connect the repository to Vercel and keep the root directory as `./`. Add the Supabase `DATABASE_URL` and `DIRECT_URL` to the correct Vercel environments. The repository is configured so Prisma Client is generated during dependency installation and the build.

For production database changes, use committed Prisma migrations and `prisma migrate deploy`; do not use `prisma db push` against production.

For Vercel/serverless runtime queries, `DATABASE_URL` should use the Supabase transaction pooler. `DIRECT_URL` should use the Supabase session pooler for Prisma migrations/admin tooling.

## Security status

This is the **foundation**, not the finished production LMS. Authentication, session management, RBAC, tenant isolation, rate limiting, audit logging, private media authorization, payment webhooks and other privileged workflows must be implemented before public production use.

Never place secrets in `NEXT_PUBLIC_*` variables or commit `.env` files.
