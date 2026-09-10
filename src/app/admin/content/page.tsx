import { getSiteContent } from "@/lib/content";
import ContentEditor from "./editor";

export default async function ContentPage() {
  const content = await getSiteContent();

  return (
    <div className="p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-[#0e5a45]">WEBSITE CMS</p>
        <h1 className="mt-1 text-3xl font-semibold">Front-end content editor</h1>
        <p className="mt-2 text-slate-500">
          Edit live homepage content from the background dashboard. Changes are stored in Supabase when DATABASE_URL is configured.
        </p>
        <div className="mt-8">
          <ContentEditor initial={content} />
        </div>
      </div>
    </div>
  );
}
