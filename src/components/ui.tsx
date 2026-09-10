import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2";
  const styles = variant === "primary"
    ? "bg-[var(--green)] text-white shadow-lg shadow-[rgba(14,90,69,0.2)] hover:-translate-y-0.5 hover:bg-[var(--green-dark)]"
    : "border border-[var(--border)] bg-white text-[var(--green)] hover:bg-[var(--cream)]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function IconCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white p-6 text-[var(--foreground)] shadow-sm">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--cream)] text-[var(--green)]">
        <Icon size={21} aria-hidden="true" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
    </div>
  );
}

export function CourseCard({
  title,
  category,
  level,
  description,
}: {
  title: string;
  category: string;
  level: string;
  description: string;
}) {
  return (
    <article className="group rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-[var(--cream)] px-3 py-1 text-xs font-semibold text-[var(--green)]">{category}</span>
        <span className="text-xs text-slate-500">{level}</span>
      </div>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--green)] text-white">
        <BookOpen size={25} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>
      <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--green)]">
        View program <ArrowRight size={16} aria-hidden="true" />
      </span>
    </article>
  );
}
