# Quran Academy LMS

Scalable Quran education platform built with Next.js, React, TypeScript and PostgreSQL/Neon.

## Phase 3
- Premium responsive public academy website
- Quran, Tajweed, Hifz, Kids and Islamic Studies programs
- Admin dashboard foundation
- Background website CMS for front-end copy
- Neon/PostgreSQL Prisma schema
- Roles: Super Admin, Admin, Teacher, Parent, Student
- Courses, modules, lessons, enrollments and progress
- Live classes and attendance models
- Trial request model
- Vercel-ready App Router architecture

## Local setup
1. Install Node.js 20.9+.
2. Copy `.env.example` to `.env.local`.
3. Add the Neon `DATABASE_URL`.
4. Run `npm install`, `npx prisma generate`, `npx prisma db push`, then `npm run dev`.

## Vercel + Neon
Connect this GitHub repository to Vercel. Add `DATABASE_URL` to Vercel Production and Preview environment variables. Vercel can automatically redeploy pushes to `main`.

## Important
Phase 3 establishes the architecture and CMS foundation. Authentication and privileged admin authorization are intentionally completed in Phase 4 before production use. Do not expose the CMS route publicly until RBAC/authentication is enabled.
