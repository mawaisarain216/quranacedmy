import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button, CourseCard, IconCard } from "@/components/ui";

type SiteCopy = {
  heroTitle: string;
  heroText: string;
  heroPrimary: string;
  heroSecondary: string;
  trustTitle: string;
  ctaTitle: string;
  ctaText: string;
  footerText: string;
};

export function Hero({ copy }: { copy: SiteCopy }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[rgba(201,164,92,0.15)] blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-semibold text-[var(--green)] shadow-sm">
            <Sparkles size={14} aria-hidden="true" /> Trusted online Quran learning
          </span>
          <h1 id="hero-title" className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {copy.heroText}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#trial">
              {copy.heroPrimary} <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href="#programs" variant="secondary">
              {copy.heroSecondary}
            </Button>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
            {[
              "Qualified teachers",
              "Flexible schedules",
              "One-to-one learning",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[var(--green)]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative" aria-label="Example student lesson dashboard">
          <div className="rounded-[42px] bg-[var(--green)] p-4 shadow-2xl shadow-[rgba(14,90,69,0.2)]">
            <div className="rounded-[32px] bg-[var(--cream)] p-7 md:p-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--green)]">
                  Today&apos;s lesson
                </span>
                <span className="text-xs text-slate-500">30 min</span>
              </div>
              <div className="mt-10 rounded-3xl bg-white p-7 shadow-sm">
                <div className="text-5xl text-[var(--green)] sm:text-6xl" lang="ar" dir="rtl">بِسْمِ اللَّهِ</div>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                  Personalized Quran reading with teacher feedback, lesson progress and practice goals.
                </p>
                <div className="mt-7 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label="Course progress" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>
                  <div className="h-full w-[78%] rounded-full bg-[var(--gold)]" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>Course progress</span><span>78%</span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs text-slate-500">Teacher</p>
                  <strong className="mt-1 block">Ustadh Ahmed</strong>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs text-slate-500">Next class</p>
                  <strong className="mt-1 block">7:00 PM</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Programs() {
  const programs = [
    ["Quran Reading", "Quran", "Beginner", "Build confident Quran reading from Arabic letters to fluent recitation."],
    ["Tajweed Mastery", "Tajweed", "All levels", "Learn pronunciation, articulation points and the rules that beautify recitation."],
    ["Hifz Program", "Memorization", "Guided", "A structured memorization and revision journey with teacher accountability."],
    ["Noorani Qaida", "Kids", "Beginner", "A friendly foundation for children learning Arabic letters and Quran reading."],
    ["Islamic Studies", "Deen", "All levels", "Salah, duas, Seerah, manners and essential Islamic knowledge."],
    ["Quran for Kids", "Kids", "Ages 5–12", "Engaging one-to-one lessons designed around children&apos;s pace and confidence."],
  ] as const;

  return (
    <section id="programs" aria-labelledby="programs-title" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--green)]">Our programs</p>
        <h2 id="programs-title" className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Learning paths for every stage</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {programs.map(([title, category, level, description]) => (
          <CourseCard key={title} title={title} category={category} level={level} description={description.replace("&apos;", "'")} />
        ))}
      </div>
    </section>
  );
}

export function WhyUs({ title }: { title: string }) {
  return (
    <section id="why" aria-labelledby="why-title" className="bg-[var(--green)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c77e]">Why Quran Academy</p>
          <h2 id="why-title" className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <IconCard icon={ShieldCheck} title="Qualified teachers" text="Learn from caring teachers with structured lesson plans and feedback." />
          <IconCard icon={Clock3} title="Flexible timing" text="Choose schedules that work across countries and time zones." />
          <IconCard icon={GraduationCap} title="Track progress" text="Students and parents can follow lessons, attendance and progress." />
          <IconCard icon={HeartHandshake} title="Personal attention" text="One-to-one learning designed around the learner's pace." />
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["01", "Book a free trial"],
    ["02", "Meet your teacher"],
    ["03", "Choose your schedule"],
    ["04", "Learn & grow"],
  ];

  return (
    <section id="how" aria-labelledby="how-title" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--green)]">Simple start</p>
        <h2 id="how-title" className="mt-3 text-4xl font-semibold">Your Quran journey in four steps</h2>
      </div>
      <ol className="mt-12 grid gap-6 md:grid-cols-4">
        {steps.map(([number, title]) => (
          <li key={number} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
            <span className="text-5xl font-semibold text-[rgba(201,164,92,0.5)]">{number}</span>
            <h3 className="mt-5 font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">A guided experience designed to make online learning simple.</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TrialSection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="trial" aria-labelledby="trial-title" className="mx-4 mb-16 overflow-hidden rounded-[40px] bg-[var(--cream)] sm:mx-6">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--green)]">Free trial class</p>
            <h2 id="trial-title" className="mt-3 text-4xl font-semibold md:text-5xl">{copy.ctaTitle}</h2>
            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">{copy.ctaText}</p>
          </div>
          <form action="/api/trial" method="post" className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="student-name">Student name</label>
              <input id="student-name" name="name" required maxLength={100} autoComplete="name" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--green)]" placeholder="Student name" />
              <label className="sr-only" htmlFor="parent-name">Parent name</label>
              <input id="parent-name" name="parentName" maxLength={100} autoComplete="name" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--green)]" placeholder="Parent name" />
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" name="email" required type="email" maxLength={254} autoComplete="email" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--green)]" placeholder="Email" />
              <label className="sr-only" htmlFor="whatsapp">WhatsApp</label>
              <input id="whatsapp" name="whatsapp" maxLength={30} autoComplete="tel" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--green)]" placeholder="WhatsApp" />
              <label className="sr-only" htmlFor="program">Program</label>
              <select id="program" name="program" className="rounded-xl border border-slate-200 px-4 py-3 sm:col-span-2">
                <option>Quran Reading</option>
                <option>Tajweed</option>
                <option>Hifz</option>
                <option>Islamic Studies</option>
              </select>
            </div>
            <button type="submit" className="mt-4 w-full rounded-xl bg-[var(--green)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--green-dark)]">
              Request Free Trial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
