import type { Metadata } from "next";
import { ServiceIntro } from "@/components/sections/ServiceIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Faq } from "@/components/sections/Faq";
import { PastelCard } from "@/components/ui/PastelCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { TeamMemberIntro } from "@/components/sections/TeamMemberIntro";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Google Ads y SEM que generan clientes hoy — Oppi",
  description:
    "Gestionamos campañas de búsqueda, display y remarketing en Google Ads con optimización continua para bajar tu costo por cliente y generar ventas mientras el SEO madura.",
};

const steps = [
  {
    title: "Auditoría de cuenta",
    description:
      "Revisamos tu cuenta actual (o tu mercado, si empiezas de cero) para detectar dónde se está perdiendo presupuesto.",
  },
  {
    title: "Estructura de campañas",
    description:
      "Organizamos campañas y grupos de anuncios por intención de búsqueda, con seguimiento de conversiones desde el día uno.",
  },
  {
    title: "Lanzamiento y calibración",
    description:
      "Lanzamos con presupuesto controlado y ajustamos pujas y segmentación en las primeras semanas.",
  },
  {
    title: "Optimización mensual",
    description:
      "Reportamos ROAS, CPA y CTR cada mes y reasignamos presupuesto hacia lo que mejor convierte.",
  },
];

const faqs = [
  {
    question: "¿Cuánto presupuesto de anuncios necesito para empezar?",
    answer:
      "Depende de tu industria y competencia, pero solemos recomendar un mínimo mensual de anuncios que definimos juntos en la auditoría inicial, además de nuestra tarifa de gestión.",
  },
  {
    question: "¿Qué diferencia hay entre esto y el servicio de SEO?",
    answer:
      "El SEO construye visibilidad orgánica de forma gradual; SEM te pone arriba de los resultados de búsqueda de inmediato, pagando por cada clic. Muchos clientes usan ambos: SEM mientras el SEO madura.",
  },
  {
    question: "Ya tengo una cuenta de Google Ads, ¿pueden tomarla?",
    answer:
      "Sí, empezamos con una auditoría de tu cuenta actual para identificar qué está funcionando y qué está desperdiciando presupuesto antes de hacer cualquier cambio.",
  },
  {
    question: "¿Cómo miden si la campaña está funcionando?",
    answer:
      "Con seguimiento de conversiones configurado desde el inicio: llamadas, formularios o compras. Cada reporte mensual muestra CPA, ROAS y CTR, no solo clics.",
  },
];

export default function SemPage() {
  return (
    <>
      <ServiceIntro
        eyebrow="Resultados inmediatos"
        title="Clientes nuevos mientras tu SEO todavía está creciendo"
        description="Diseñamos y gestionamos campañas de Google Ads (búsqueda, display y remarketing) enfocadas en un solo objetivo: bajar tu costo por cliente y llenar tu agenda o tu carrito, no solo generar clics."
        ctaHref="/quienes-somos#contacto"
        ctaLabel="Agenda una auditoría de cuenta"
      />

      <TeamMemberIntro member={team.sem} />

      <section className="px-24 py-64 md:px-80">
        <SectionHeading
          eyebrow="Qué incluye"
          title="Campañas gestionadas, no piloto automático"
        />
        <Reveal className="mx-auto mt-40 grid max-w-[1280px] gap-24 md:grid-cols-3">
          <PastelCard wash="peach">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Campañas de búsqueda
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Apareces primero cuando alguien busca exactamente lo que
              ofreces, pagando solo por clics con intención real de compra.
            </p>
          </PastelCard>
          <PastelCard wash="sky">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Remarketing inteligente
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Volvemos a impactar a quienes visitaron tu sitio sin convertir,
              con anuncios de display en el momento correcto.
            </p>
          </PastelCard>
          <PastelCard wash="lilac">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Optimización continua
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Ajustamos pujas, palabras clave negativas y creatividades cada
              semana: nada se deja en piloto automático.
            </p>
          </PastelCard>
        </Reveal>
      </section>

      <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
        <SectionHeading eyebrow="Nuestro proceso" title="Cómo trabajamos mes a mes" />
        <div className="mt-40">
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <section className="px-24 py-64 md:px-80">
        <Reveal className="mx-auto max-w-[1280px] rounded-[var(--radius-cards)] border border-black/5 border-t-4 border-t-[var(--color-coral-pulse)] bg-white p-32 text-center shadow-[var(--shadow-subtle)] md:p-48">
          <p className="text-body-sm font-semibold text-[var(--color-charcoal)]">
            Resultado típico a 90 días
          </p>
          <p className="tracking-heading mt-8 font-mono-metric text-display font-bold text-[var(--color-coral-pulse)]">
            -32%
          </p>
          <p className="text-body text-[var(--color-graphite)]">
            costo por adquisición (CPA)
          </p>
        </Reveal>
      </section>

      <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Todo lo que debes saber" />
        <div className="mt-40">
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="¿Listo para generar clientes desde hoy?"
        description="Agenda una auditoría gratuita de tu cuenta de Google Ads (o de tu mercado si aún no tienes campañas)."
      />
    </>
  );
}
