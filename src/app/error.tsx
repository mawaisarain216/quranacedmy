"use client";

import { useEffect } from "react";

export default function GlobalRouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Quran Academy route error", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--green)]">Something went wrong</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">We could not load this page.</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">Please try again. If the problem continues, our team can investigate the server error.</p>
        <button type="button" onClick={() => reset()} className="mt-7 rounded-full bg-[var(--green)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--green-dark)]">
          Try again
        </button>
      </div>
    </main>
  );
}
