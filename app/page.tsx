import { ClientLogos } from "@/components/sections/ClientLogos";
import { Hero } from "@/components/sections/Hero";
import { Toolkit } from "@/components/sections/Toolkit";
import { ServicesCards } from "@/components/sections/ServicesCards";
import { JourneyBand } from "@/components/sections/JourneyBand";
import { FinalCta } from "@/components/sections/FinalCta";

// Home: hero con el formulario, cinta de logos de clientes, el equipo a cargo
// de cada frente, los 3 servicios, cómo trabajamos y CTA final.
export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Toolkit />
      <ServicesCards />
      <JourneyBand />
      <FinalCta />
    </>
  );
}
