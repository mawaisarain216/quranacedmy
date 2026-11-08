import { AhiButton, AhiInput, AhiPasswordInput } from "@/components/design-system";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--ahi-background)] px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-[var(--ahi-border)] bg-white p-6 shadow-xl shadow-[rgba(18,61,43,0.08)] sm:p-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--ahi-deep)] text-2xl text-white ring-1 ring-[var(--ahi-gold)]/30">ق</div>
        <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--ahi-gold)]">Ali Hassan Institute</p>
        <h1 className="mt-2 text-center text-2xl font-semibold tracking-tight text-[var(--ahi-heading)]">Welcome back</h1>
        <p className="mt-2 text-center text-sm text-[var(--ahi-muted)]">Student, parent and teacher portal</p>
        <form className="mt-8 space-y-5">
          <AhiInput label="Email address" name="email" type="email" placeholder="you@example.com" autoComplete="username" required />
          <AhiPasswordInput label="Password" name="password" placeholder="Enter your password" autoComplete="current-password" required />
          <AhiButton type="submit" className="w-full">Sign in</AhiButton>
        </form>
        <p className="mt-5 text-center text-xs leading-5 text-[var(--ahi-muted)]">Authentication will be connected in the authentication implementation phase.</p>
      </div>
    </main>
  );
}
