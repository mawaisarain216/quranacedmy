"use client";

import {
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  useId,
  useState,
} from "react";
import {
  Check, ChevronDown, ChevronLeft, ChevronRight, Eye, EyeOff, X,
} from "lucide-react";

type Tone = "primary" | "secondary" | "outline" | "gold" | "ghost" | "danger";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { tone?: Tone; loading?: boolean };

const buttonTone: Record<Tone, string> = {
  primary: "bg-[var(--ahi-primary)] text-white shadow-sm hover:bg-[var(--ahi-hover)]",
  secondary: "bg-[var(--ahi-soft)] text-[var(--ahi-primary)] hover:bg-[var(--ahi-border)]",
  outline: "border border-[var(--ahi-primary)] bg-transparent text-[var(--ahi-primary)] hover:bg-[var(--ahi-soft)]",
  gold: "bg-[var(--ahi-gold)] text-white hover:bg-[var(--ahi-gold-light)]",
  ghost: "bg-transparent text-[var(--ahi-primary)] hover:bg-[var(--ahi-soft)]",
  danger: "bg-red-700 text-white hover:bg-red-800",
};

export function AhiButton({ tone = "primary", loading = false, className = "", disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ahi-gold)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-55 ${buttonTone[tone]} ${className}`}
    >
      {loading ? <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" /> : null}
      {children}
    </button>
  );
}

export function AhiIconButton({ label, className = "", children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return <button {...props} aria-label={label} title={label} className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--ahi-border)] bg-white text-[var(--ahi-primary)] transition hover:bg-[var(--ahi-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ahi-gold)] disabled:opacity-50 ${className}`}>{children}</button>;
}

type FieldProps = { label: string; hint?: string; error?: string; className?: string };
function FieldShell({ label, hint, error, id, children }: FieldProps & { id: string; children: ReactNode }) {
  return <div className="grid gap-1.5"><label htmlFor={id} className="text-sm font-semibold text-[var(--ahi-heading)]">{label}</label>{children}{error ? <p role="alert" className="text-xs text-red-700">{error}</p> : hint ? <p className="text-xs text-[var(--ahi-muted)]">{hint}</p> : null}</div>;
}
const fieldClass = "min-h-12 w-full rounded-xl border border-[var(--ahi-border)] bg-white px-4 py-3 text-sm text-[var(--ahi-body)] outline-none transition placeholder:text-[var(--ahi-muted)]/75 hover:border-[var(--ahi-primary)]/50 focus:border-[var(--ahi-primary)] focus:ring-2 focus:ring-[var(--ahi-primary)]/10";

export function AhiInput({ label, hint, error, className = "", id: suppliedId, ...props }: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  return <FieldShell id={id} label={label} hint={hint} error={error}><input {...props} id={id} aria-invalid={Boolean(error)} aria-describedby={error || hint ? `${id}-help` : undefined} className={`${fieldClass} ${className}`} /></FieldShell>;
}

export function AhiPasswordInput({ label = "Password", hint, error, className = "", id: suppliedId, ...props }: FieldProps & Omit<InputHTMLAttributes<HTMLInputElement>, "type">) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const [visible, setVisible] = useState(false);
  return <FieldShell id={id} label={label} hint={hint} error={error}><div className="relative"><input {...props} id={id} type={visible ? "text" : "password"} aria-invalid={Boolean(error)} className={`${fieldClass} pr-12 ${className}`} /><button type="button" onClick={() => setVisible((value) => !value)} aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible} className="absolute inset-y-0 right-2 inline-flex w-10 items-center justify-center rounded-lg text-[var(--ahi-muted)] hover:bg-[var(--ahi-soft)] hover:text-[var(--ahi-primary)]">{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></FieldShell>;
}

export function AhiTextarea({ label, hint, error, className = "", id: suppliedId, ...props }: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  return <FieldShell id={id} label={label} hint={hint} error={error}><textarea {...props} id={id} aria-invalid={Boolean(error)} className={`${fieldClass} min-h-28 resize-y ${className}`} /></FieldShell>;
}

export function AhiSelect({ label, hint, error, className = "", id: suppliedId, children, ...props }: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  return <FieldShell id={id} label={label} hint={hint} error={error}><div className="relative"><select {...props} id={id} aria-invalid={Boolean(error)} className={`${fieldClass} appearance-none pr-10 ${className}`}>{children}</select><ChevronDown aria-hidden="true" size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--ahi-muted)]" /></div></FieldShell>;
}

export function AhiCheckbox({ label, className = "", ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <label className={`inline-flex cursor-pointer items-start gap-2.5 text-sm text-[var(--ahi-body)] ${className}`}><input {...props} type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--ahi-primary)]" /><span>{label}</span></label>;
}

export function AhiRadioGroup({ label, name, options, value, onChange }: { label: string; name: string; options: { label: string; value: string }[]; value?: string; onChange?: (value: string) => void }) {
  return <fieldset className="grid gap-2"><legend className="mb-1 text-sm font-semibold text-[var(--ahi-heading)]">{label}</legend>{options.map((option) => <label key={option.value} className="inline-flex cursor-pointer items-center gap-2.5 text-sm text-[var(--ahi-body)]"><input type="radio" name={name} value={option.value} checked={value === option.value} onChange={(event) => onChange?.(event.target.value)} className="h-4 w-4 accent-[var(--ahi-primary)]" />{option.label}</label>)}</fieldset>;
}

export function AhiSwitch({ label, checked, onChange, disabled = false }: { label: string; checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean }) {
  return <button type="button" role="switch" aria-checked={checked} disabled={disabled} onClick={() => onChange(!checked)} className="inline-flex items-center gap-3 text-sm text-[var(--ahi-body)] disabled:opacity-50"><span className={`relative h-6 w-11 rounded-full transition ${checked ? "bg-[var(--ahi-primary)]" : "bg-slate-300"}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${checked ? "left-6" : "left-1"}`} /></span>{label}</button>;
}

export function AhiBadge({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "gold" | "gray" | "red" }) {
  const styles = { green: "bg-[var(--ahi-soft)] text-[var(--ahi-primary)]", gold: "bg-amber-50 text-amber-800", gray: "bg-slate-100 text-slate-700", red: "bg-red-50 text-red-700" };
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[tone]}`}>{children}</span>;
}

export function AhiAlert({ title, children, tone = "success" }: { title?: string; children: ReactNode; tone?: "success" | "warning" | "error" | "info" }) {
  const styles = { success: "border-emerald-200 bg-emerald-50 text-emerald-900", warning: "border-amber-200 bg-amber-50 text-amber-900", error: "border-red-200 bg-red-50 text-red-900", info: "border-sky-200 bg-sky-50 text-sky-900" };
  return <div role="status" className={`rounded-xl border px-4 py-3 text-sm ${styles[tone]}`}>{title ? <p className="mb-1 font-semibold">{title}</p> : null}<div>{children}</div></div>;
}

export function AhiCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-[var(--ahi-border)] bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

export function AhiFeatureCard({ icon, title, children }: { icon?: ReactNode; title: string; children: ReactNode }) {
  return <AhiCard><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ahi-soft)] text-[var(--ahi-primary)]">{icon}</div><h3 className="font-semibold text-[var(--ahi-heading)]">{title}</h3><div className="mt-2 text-sm leading-6 text-[var(--ahi-muted)]">{children}</div></AhiCard>;
}

export function AhiStatCard({ label, value, icon }: { label: string; value: string | number; icon?: ReactNode }) {
  return <AhiCard><div className="flex items-center justify-between gap-3"><p className="text-sm text-[var(--ahi-muted)]">{label}</p><span className="text-[var(--ahi-primary)]">{icon}</span></div><p className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ahi-heading)]">{value}</p></AhiCard>;
}

export function AhiProgress({ value, label, showValue = true }: { value: number; label?: string; showValue?: boolean }) {
  const safeValue = Math.min(100, Math.max(0, value));
  return <div className="grid gap-2">{label || showValue ? <div className="flex justify-between gap-3 text-xs text-[var(--ahi-muted)]">{label ? <span>{label}</span> : <span />}{showValue ? <span>{safeValue}%</span> : null}</div> : null}<div role="progressbar" aria-label={label ?? "Progress"} aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeValue} className="h-2 overflow-hidden rounded-full bg-[var(--ahi-border)]"><div className="h-full rounded-full bg-[var(--ahi-primary)] transition-[width]" style={{ width: `${safeValue}%` }} /></div></div>;
}

export function AhiSkeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded-lg bg-[var(--ahi-soft)] ${className}`} />;
}

export function AhiAccordion({ items }: { items: { title: string; content: ReactNode }[] }) {
  return <div className="divide-y divide-[var(--ahi-border)] rounded-2xl border border-[var(--ahi-border)] bg-white">{items.map((item) => <details key={item.title} className="group p-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--ahi-heading)] [&::-webkit-details-marker]:hidden">{item.title}<ChevronDown size={18} className="shrink-0 text-[var(--ahi-primary)] transition group-open:rotate-180" /></summary><div className="pt-3 text-sm leading-6 text-[var(--ahi-muted)]">{item.content}</div></details>)}</div>;
}

export function AhiTabs({ tabs, active, onChange }: { tabs: { id: string; label: string }[]; active: string; onChange: (id: string) => void }) {
  return <div role="tablist" aria-label="Content tabs" className="flex flex-wrap gap-1 rounded-xl bg-[var(--ahi-soft)] p-1">{tabs.map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={active === tab.id} onClick={() => onChange(tab.id)} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${active === tab.id ? "bg-white text-[var(--ahi-primary)] shadow-sm" : "text-[var(--ahi-muted)] hover:text-[var(--ahi-heading)]"}`}>{tab.label}</button>)}</div>;
}

export function AhiBreadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--ahi-muted)]">{items.map((item, index) => <li key={item.label} className="inline-flex items-center gap-2">{index ? <ChevronRight size={14} aria-hidden="true" /> : null}{item.href ? <a href={item.href} className="hover:text-[var(--ahi-primary)]">{item.label}</a> : <span aria-current="page" className="font-medium text-[var(--ahi-heading)]">{item.label}</span>}</li>)}</ol></nav>;
}

export function AhiPagination({ page, pages, onChange }: { page: number; pages: number; onChange: (page: number) => void }) {
  if (pages < 2) return null;
  return <nav aria-label="Pagination" className="flex items-center justify-center gap-2"><AhiIconButton label="Previous page" disabled={page <= 1} onClick={() => onChange(page - 1)}><ChevronLeft size={18} /></AhiIconButton><span className="px-3 text-sm text-[var(--ahi-muted)]">Page {page} of {pages}</span><AhiIconButton label="Next page" disabled={page >= pages} onClick={() => onChange(page + 1)}><ChevronRight size={18} /></AhiIconButton></nav>;
}

export function AhiMediaFrame({ children, ratio = "video", className = "" }: { children: ReactNode; ratio?: "video" | "square" | "portrait"; className?: string }) {
  const aspect = { video: "aspect-video", square: "aspect-square", portrait: "aspect-[3/4]" };
  return <div className={`relative overflow-hidden rounded-2xl bg-[var(--ahi-soft)] ${aspect[ratio]} ${className}`}>{children}</div>;
}

export function AhiModal({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section role="dialog" aria-modal="true" aria-labelledby="ahi-modal-title" className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"><div className="mb-4 flex items-center justify-between gap-4"><h2 id="ahi-modal-title" className="text-lg font-semibold text-[var(--ahi-heading)]">{title}</h2><AhiIconButton label="Close dialog" onClick={onClose}><X size={18} /></AhiIconButton></div>{children}</section></div>;
}
