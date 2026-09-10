import { getSiteContent } from "@/lib/content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Hero, HowItWorks, Programs, TrialSection, WhyUs } from "@/components/home-sections";

export const dynamic = "force-dynamic";

export default async function Home() {
  const copy = await getSiteContent();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero copy={copy} />
        <Programs />
        <WhyUs title={copy.trustTitle} />
        <HowItWorks />
        <TrialSection copy={copy} />
      </main>
      <SiteFooter text={copy.footerText} />
    </>
  );
}
