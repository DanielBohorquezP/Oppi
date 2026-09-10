import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

export const metadata: Metadata = {
  title: "Experiencia — Oppi",
  description:
    "Casos de éxito y resultados de negocios que trabajan con Oppi para vender más.",
};

const cases = [
  {
    name: "Clínica Dental Sonrisa",
    industry: "Salud",
    result: "3.5x más citas agendadas desde la web",
    description:
      "Rediseñamos su sitio con foco en agendar citas: formulario corto, WhatsApp directo y testimonios reales.",
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ferretería Central",
    industry: "Retail",
    result: "+65% tráfico orgánico en 6 meses",
    description:
      "Estrategia SEO local: fichas de producto optimizadas, contenido de guías y schema markup para negocio local.",
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Taller Andino",
    industry: "Servicios automotrices",
    result: "-28% costo por cliente en 90 días",
    description:
      "Migramos de campañas genéricas a una estructura por servicio en Google Ads, con remarketing a quienes cotizaron sin agendar.",
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Estudio Lumen",
    industry: "Fotografía de eventos",
    result: "3x más consultas calificadas por mes",
    description:
      "Campañas de búsqueda estacionales y remarketing de display en Google Ads que llenaron su calendario en temporada alta.",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
];

const caseTestimonials = cases.map((item) => ({
  quote: item.description,
  name: item.name,
  designation: `${item.industry} · ${item.result}`,
  src: item.src,
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
