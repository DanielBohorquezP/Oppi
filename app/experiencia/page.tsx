import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

export const metadata: Metadata = {
  title: "Experiencia | Oppi",
  description:
    "Casos de éxito y resultados de negocios que trabajan con Oppi para vender más.",
};

const cases = [
  {
    name: "Claudia Ladino",
    industry: "Abogada tributaria",
    result: "De cero presencia digital a un nuevo canal de clientes",
    description:
      "“No tenía página web y hoy mi sitio es otro canal de atención y de adquisición de clientes. Oppi lo construyó desde cero y explica mis servicios tributarios con claridad y sin complicaciones.”",
    src: "/clientes/claudia-ladino-carrusel.png",
    background: "#040054",
    href: "https://claudialadino.com/",
  },
  {
    name: "Dr. Luis Anillo",
    industry: "Asesoría estadística en investigación en salud",
    result: "Web propia que vende y es recomendada por la IA",
    description:
      "“Yo no tenía página web. Oppi me la desarrolló y hoy la uso como canal de ventas. Además, la inteligencia artificial me recomienda cuando alguien busca asesoría estadística para investigación en salud.”",
    src: "/clientes/luis-anillo.png",
    href: "https://www.dranillostats.com/",
  },
  {
    name: "Cyrrus Consulting Services",
    industry: "Consultoría empresarial",
    result: "Estrategia digital rediseñada y alineada con sus redes",
    description:
      "“Oppi rediseñó por completo nuestra estrategia digital. Replantearon desde cómo presentamos los servicios hasta la forma en que nos encuentran los clientes, y alinearon la estrategia con todas nuestras redes sociales. Hoy nuestra presencia digital se siente nueva.”",
    src: "/clientes/cyrrus-consulting.png",
    href: "https://cyrruscs.com/",
  },
];

const caseTestimonials = cases.map((item) => ({
  quote: item.description,
  name: item.name,
  designation: `${item.industry} · ${item.result}`,
  src: item.src,
  href: item.href,
  background: item.background,
}));

export default function ExperienciaPage() {
  return (
    <>
      <div className="px-24 pt-64 md:px-80">
        <SectionHeading
          eyebrow="Experiencia"
          title="Resultados reales, no promesas vacías"
          description="Estos son algunos de los negocios que ya trabajan con Oppi."
        />
      </div>

      <section className="mx-auto flex max-w-[1280px] justify-center px-24 py-64 md:px-80">
        <CircularTestimonials
          testimonials={caseTestimonials}
          autoplay
          colors={{
            name: "var(--color-ink-black)",
            designation: "var(--color-slate)",
            testimony: "var(--color-graphite)",
            arrowBackground: "var(--color-ink-black)",
            arrowForeground: "var(--color-brand-yellow)",
            arrowHoverBackground: "var(--color-coral-pulse)",
          }}
          fontSizes={{
            name: "28px",
            designation: "16px",
            quote: "18px",
          }}
        />
      </section>

      <CtaBand
        title="Tu negocio puede ser el próximo caso de éxito"
        description="Agenda una llamada y revisemos juntos qué servicio te dará resultados más rápido."
      />
    </>
  );
}
