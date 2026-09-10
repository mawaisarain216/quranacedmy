import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why us" },
  { href: "#trial", label: "Free Trial" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#fbfaf5]/95 backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Quran Academy home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--green)] text-lg font-bold text-white shadow-sm">
            ق
          </span>
          <span>
            <strong className="block text-sm sm:text-base">Quran Academy</strong>
            <small className="hidden text-[10px] uppercase tracking-[0.2em] text-[var(--green)] sm:block">
              Learn • Grow • Excel
            </small>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[var(--green)]">
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="transition-colors hover:text-[var(--green)]">
            Login
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#trial" className="hidden sm:inline-flex">
            Start Free Trial <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--green)] shadow-sm" aria-label="Open navigation menu">
              <span aria-hidden="true" className="text-xl leading-none">☰</span>
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 mt-2 w-64 rounded-2xl border border-[var(--border)] bg-white p-2 shadow-xl">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-[var(--cream)]">
                  {link.label}
                </Link>
              ))}
              <Link href="/login" className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-[var(--cream)]">
                Login
              </Link>
              <Link href="#trial" className="mt-1 block rounded-xl bg-[var(--green)] px-4 py-3 text-center text-sm font-semibold text-white">
                Start Free Trial
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
