import { ClientLogos } from "@/components/sections/ClientLogos";
import { Hero } from "@/components/sections/Hero";
import { ServiceSummary } from "@/components/sections/ServiceSummary";
import { Toolkit } from "@/components/sections/Toolkit";
import { JourneyBand } from "@/components/sections/JourneyBand";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Home: qué hacemos (hero + formulario), quién confía, servicios (con la
// promesa de Oppi como título), kit con el equipo, cómo trabajamos y CTA final. Los datos de IA/ChatGPT viven en la
// página de SEO y el equipo completo en Quiénes Somos.
export default function Home() {
  return (
    <>
      <Hero />

      <ClientLogos />

      <div id="servicios" className="scroll-mt-96 px-24 pt-32 md:px-80">
        <SectionHeading
          title="Convierte tu marketing en tu mejor vendedor."
          description="Tus campañas y contenido llegan a las personas correctas, te encuentran en Google y en la IA, y tus anuncios rinden más."
        />
      </div>
      <ServiceSummary />

      <Toolkit />

      <JourneyBand />

      <FinalCta />
    </>
  );
}
