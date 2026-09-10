export default function Loading() {
  return (
    <main aria-busy="true" className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="h-5 w-36 animate-pulse rounded-full bg-[var(--cream)]" />
        <div className="mt-7 h-16 max-w-2xl animate-pulse rounded-2xl bg-[var(--cream)]" />
        <div className="mt-4 h-16 max-w-xl animate-pulse rounded-2xl bg-[var(--cream)]" />
        <div className="mt-8 h-12 w-44 animate-pulse rounded-full bg-[var(--cream)]" />
      </div>
    </main>
  );
}
