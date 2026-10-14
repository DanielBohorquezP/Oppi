import { ClientLogos } from "@/components/sections/ClientLogos";
import { Hero } from "@/components/sections/Hero";
import { PainServices } from "@/components/sections/PainServices";
import { Toolkit } from "@/components/sections/Toolkit";
import { JourneyBand } from "@/components/sections/JourneyBand";
import { FinalCta } from "@/components/sections/FinalCta";

// Home: el dolor (hero + formulario), quién confía, los 3 dolores con su
// servicio, el equipo a cargo de cada frente, cómo trabajamos y CTA final.
export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <PainServices />
      <Toolkit />
      <JourneyBand />
      <FinalCta />
    </>
  );
}
