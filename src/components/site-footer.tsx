import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function SiteFooter({ text }: { text: string }) {
  return (
    <footer className="bg-[var(--ahi-deep)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.35fr_.8fr_.8fr] lg:py-16">
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Ali Hassan Institute home">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl font-semibold text-white">ق</span>
            <span>
              <strong className="block text-base tracking-tight">Ali Hassan Institute</strong>
              <small className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--ahi-gold-light)]">Learn • Implement • Convey</small>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-7 text-white/70">{text}</p>

        </div>

        <nav aria-label="Quick links" className="grid content-start gap-3">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ahi-gold-light)]">Explore</h2>
          <Link href="/" className="text-sm text-white/75 transition hover:text-white">Home</Link>
          <Link href="#programs" className="text-sm text-white/75 transition hover:text-white">Our Programs</Link>
          <Link href="#why" className="text-sm text-white/75 transition hover:text-white">About the Institute</Link>
          <Link href="#trial" className="text-sm text-white/75 transition hover:text-white">Free Trial</Link>
          <Link href="/login" className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white">Student Portal <ArrowUpRight size={14} /></Link>
        </nav>

        <div className="grid content-start gap-3">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ahi-gold-light)]">Learning</h2>
          <p className="text-sm text-white/75">Quran Reading</p>
          <p className="text-sm text-white/75">Tajweed</p>
          <p className="text-sm text-white/75">Hifz Program</p>
          <p className="text-sm text-white/75">Islamic Studies</p>
          <div className="mt-2 inline-flex items-center gap-2 text-xs text-white/50"><BookOpen size={14} /> Learn with purpose</div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ali Hassan Institute. All rights reserved.</p>
          <p>Learn • Implement • Convey</p>
        </div>
      </div>
    </footer>
  );
}
