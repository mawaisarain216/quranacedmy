import Link from "next/link";

export function SiteFooter({ text }: { text: string }) {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-700">Quran Academy</p>
          <p className="mt-1 max-w-md leading-6">{text}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/" className="hover:text-[var(--green)]">Home</Link>
          <Link href="/login" className="hover:text-[var(--green)]">Login</Link>
          <Link href="#trial" className="hover:text-[var(--green)]">Free Trial</Link>
        </nav>
        <p>© {new Date().getFullYear()} Quran Academy</p>
      </div>
    </footer>
  );
}
