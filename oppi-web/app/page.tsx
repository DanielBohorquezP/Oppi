import { Hero } from "@/components/sections/Hero";
import { ServiceSummary } from "@/components/sections/ServiceSummary";
import { Toolkit } from "@/components/sections/Toolkit";
import { Testimonial } from "@/components/sections/Testimonial";
import { BigStatement } from "@/components/sections/BigStatement";
import { ComparisonBlock } from "@/components/sections/ComparisonBlock";
import { JourneyBand } from "@/components/sections/JourneyBand";
import { StatBand } from "@/components/sections/StatBand";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GrowthLineDivider } from "@/components/motion/GrowthLineDivider";
import { TeamSpotlight } from "@/components/sections/TeamSpotlight";
import { team } from "@/content/team";

export default function Home() {
  return (
    <>
      <Hero />

      <StatBand />

      <div className="pt-64">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Todo lo que tu negocio necesita para vender más"
          description="Tres servicios que funcionan juntos: presencia web, visibilidad orgánica y campañas pagadas."
        />
      </div>
      <ServiceSummary />

      <TeamSpotlight member={team["desarrollo-web"]} />

      <Toolkit />

      <div className="py-48">
        <GrowthLineDivider />
      </div>

      <Testimonial />

      <TeamSpotlight member={team.sem} imageSide="right" />

      <BigStatement />

      <ComparisonBlock />

      <TeamSpotlight member={team.seo} />

      <div className="py-48">
        <GrowthLineDivider />
      </div>

      <JourneyBand />

      <FinalCta />
    </>
  );
}
