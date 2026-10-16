import { ServiceHero } from "@/components/sections/ServiceHero";
import { PainExplorer } from "@/components/sections/PainExplorer";
import { IncludeGrid } from "@/components/sections/IncludeGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TeamMemberIntro } from "@/components/sections/TeamMemberIntro";
import { Faq } from "@/components/sections/Faq";
import { OtherServices } from "@/components/sections/OtherServices";
import { ServiceCta } from "@/components/sections/ServiceCta";
import { servicePages, type ServiceKey } from "@/content/service-pages";

// Las 3 páginas de servicio comparten estructura; los datos salen de
// content/service-pages.ts.
export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const page = servicePages[serviceKey];
  return (
    <>
      <ServiceHero serviceKey={serviceKey} page={page} />
      <PainExplorer serviceKey={serviceKey} />
      <IncludeGrid title={page.includeTitle} items={page.include} showWeb={page.web} />
      <ProcessSteps title={page.processTitle} steps={page.steps} />
      <TeamMemberIntro serviceKey={serviceKey} page={page} />
      <Faq items={page.faqs} />
      <OtherServices current={serviceKey} />
      <ServiceCta title={page.ctaTitle} description={page.ctaDesc} />
    </>
  );
}
