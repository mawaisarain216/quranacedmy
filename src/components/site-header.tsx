import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why us" },
  { href: "#trial", label: "Free Trial" },
];

function BrandMark() {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Quran Academy home">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--ahi-deep)] text-xl font-semibold text-white shadow-sm ring-1 ring-[var(--ahi-gold)]/30 transition group-hover:bg-[var(--ahi-primary)]">
        ق
      </span>
      <span className="leading-tight">
        <strong className="block text-sm font-bold tracking-tight text-[var(--ahi-heading)] sm:text-base">Ali Hassan Institute</strong>
        <small className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--ahi-gold)] sm:text-[10px]">
          Learn • Implement • Convey
        </small>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ahi-border)] bg-white/95 shadow-[0_4px_24px_rgba(18,61,43,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <BrandMark />

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-[var(--ahi-body)] lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md py-2 transition-colors hover:text-[var(--ahi-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ahi-gold)]">
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="transition-colors hover:text-[var(--ahi-primary)]">Student Portal</Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button href="/login" className="hidden sm:inline-flex">
            Student Login <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <details className="group relative lg:hidden">
            <summary aria-label="Open navigation menu" className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--ahi-border)] bg-[var(--ahi-background)] text-[var(--ahi-primary)] transition hover:bg-[var(--ahi-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ahi-gold)] [&::-webkit-details-marker]:hidden">
              <Menu size={21} className="group-open:hidden" aria-hidden="true" />
              <X size={21} className="hidden group-open:block" aria-hidden="true" />
            </summary>
            <div className="fixed inset-x-0 top-[76px] max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[var(--ahi-border)] bg-white p-4 shadow-2xl sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-3 sm:w-[min(22rem,calc(100vw-2rem))] sm:rounded-2xl sm:border">
              <div className="mb-3 flex items-center justify-between px-3 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ahi-gold)]">Explore the institute</span>
                <ChevronDown size={16} className="text-[var(--ahi-primary)]" aria-hidden="true" />
              </div>
              <nav aria-label="Mobile navigation" className="grid gap-1">
                {links.map((link, index) => (
                  <Link key={link.href} href={link.href} className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[var(--ahi-heading)] transition hover:bg-[var(--ahi-soft)]">
                    <span className="w-6 text-xs font-semibold tabular-nums text-[var(--ahi-gold)]">{String(index + 1).padStart(2, "0")}</span>
                    {link.label}
                    <ArrowRight size={15} className="ml-auto text-[var(--ahi-primary)]" aria-hidden="true" />
                  </Link>
                ))}
                <Link href="/login" className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-[var(--ahi-deep)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--ahi-primary)]">
                  Student Portal Login <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                </Link>
              </nav>
              <p className="mt-4 border-t border-[var(--ahi-border)] pt-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--ahi-muted)]">Learn • Implement • Convey</p>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
