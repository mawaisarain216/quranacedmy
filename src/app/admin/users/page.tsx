export default function UsersPage() {
  return (
    <div className="p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-[#0e5a45]">PEOPLE</p>
        <h1 className="mt-1 text-3xl font-semibold">Students &amp; Teachers</h1>
        <p className="mt-2 text-slate-500">The next LMS layer will connect real users, teacher assignments, parent-child accounts and permissions to Supabase.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6"><p className="text-3xl font-semibold">1,248</p><p className="mt-2 text-sm text-slate-500">Students</p></div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6"><p className="text-3xl font-semibold">42</p><p className="mt-2 text-sm text-slate-500">Teachers</p></div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6"><p className="text-3xl font-semibold">310</p><p className="mt-2 text-sm text-slate-500">Parents</p></div>
        </div>
      </div>
    </div>
  );
}
