import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="max-w-lg text-center">
        <p className="text-6xl font-semibold text-[var(--gold)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">The page you requested does not exist or may have moved.</p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-[var(--green)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--green-dark)]">
          Back to Quran Academy
        </Link>
      </div>
    </main>
  );
}
