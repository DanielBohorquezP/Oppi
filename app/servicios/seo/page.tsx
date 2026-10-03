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
  title: "Estrategia SEO para visibilidad y ventas orgánicas | Oppi",
  description:
    "Trabajamos la estructura técnica, el contenido y las señales de autoridad de tu sitio para que aparezcas primero cuando tus clientes buscan lo que ofreces.",
};

const steps = [
  {
    title: "Auditoría inicial",
    description:
      "Revisamos la salud técnica, el contenido y la competencia de tu sitio en buscadores.",
  },
  {
    title: "Plan de acción",
    description:
      "Priorizamos las mejoras con mayor impacto: velocidad, estructura, contenido y autoridad.",
  },
  {
    title: "Ejecución mensual",
    description:
      "Optimizamos on-page, publicamos contenido y ajustamos según los resultados de cada mes.",
  },
  {
    title: "Reportes claros",
    description:
      "Recibes un reporte mensual con posiciones, tráfico y próximos pasos, sin tecnicismos.",
  },
];

const faqs = [
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer:
      "El SEO es una estrategia de mediano plazo: los primeros movimientos suelen verse entre el mes 2 y 3, y los resultados más sólidos entre el mes 4 y 6.",
  },
  {
    question: "¿Qué incluye la estrategia mensual?",
    answer:
      "Optimización on-page, estructura de datos (schema), estrategia de contenidos, señales de SEO local si aplica, y un reporte mensual de posiciones y tráfico.",
  },
  {
    question: "¿Funciona para negocios locales?",
    answer:
      "Sí, es uno de nuestros casos más comunes: optimizamos tu ficha de Google, consistencia de nombre/dirección/teléfono y contenido enfocado en búsquedas locales.",
  },
  {
    question: "¿Necesito cambiar de sitio web para hacer SEO?",
    answer:
      "No necesariamente. Podemos trabajar sobre tu sitio actual; si detectamos limitaciones técnicas serias, te lo decimos como parte de la auditoría inicial.",
  },
  {
    question: "¿Y si mi sitio necesita rediseño o uno nuevo?",
    answer:
      "Si la auditoría muestra que tu web frena el SEO (es lenta, se ve desactualizada o no existe), podemos desarrollarla como complemento de la estrategia, pensada desde el inicio para posicionar y convertir.",
  },
];

export default function SeoPage() {
  return (
    <>
      <ServiceIntro
        serviceId="seo"
        eyebrow="Crecimiento orgánico"
        title="Que te encuentren cuando buscan lo que ofreces"
        description="Trabajamos la estructura técnica, el contenido y las señales de autoridad de tu sitio para posicionarte donde tus clientes ya están buscando."
        ctaHref="/quienes-somos#contacto"
        ctaLabel="Solicita una auditoría"
      />

      <TeamMemberIntro member={team.seo} />

      <section className="px-24 py-64 md:px-80">
        <SectionHeading eyebrow="Qué incluye" title="Una estrategia completa, no solo palabras clave" />
        <Reveal className="mx-auto mt-40 grid max-w-[1280px] gap-24 md:grid-cols-2 lg:grid-cols-4">
          <PastelCard wash="yellow">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Auditoría técnica
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Velocidad, indexación y estructura de tu sitio, sin puntos
              ciegos.
            </p>
          </PastelCard>
          <PastelCard wash="sky">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Contenido con intención
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Contenido que responde lo que tus clientes realmente buscan,
              mes a mes.
            </p>
          </PastelCard>
          <PastelCard wash="lilac">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              SEO local y schema
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Datos estructurados y consistencia de tu ficha de Google para
              búsquedas cercanas.
            </p>
          </PastelCard>
          <PastelCard wash="peach">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Visibilidad en IA (GEO)
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Estructuramos tu contenido para que ChatGPT, Gemini y Copilot
              lo puedan leer y citar como fuente, no solo Google. Con 900M+
              de usuarios semanales en ChatGPT (OpenAI, 2026), es donde ya
              buscan tus clientes.
            </p>
          </PastelCard>
        </Reveal>
      </section>

      <section id="desarrollo-web" className="px-24 pb-64 md:px-80">
        <Reveal className="mx-auto max-w-[1280px] rounded-[var(--radius-cards)] border border-black/5 bg-white p-32 shadow-[var(--shadow-subtle)] md:p-48">
          <p className="text-body-sm font-semibold uppercase tracking-wide text-[var(--color-graphite)]">
            Desarrollo web
          </p>
          <h2 className="tracking-heading mt-8 text-heading font-semibold text-[var(--color-ink-black)]">
            ¿Tu web necesita un rediseño o aún no tienes una? También la hacemos
          </h2>
          <p className="mt-12 max-w-[720px] text-body text-[var(--color-graphite)]">
            El SEO rinde más sobre un sitio rápido, claro y bien estructurado.
            Si en la auditoría vemos que tu web limita el posicionamiento,
            podemos rediseñarla o construirla desde cero como parte de la
            estrategia.
          </p>
          <ul className="mt-24 grid gap-12 text-body-sm font-medium text-[var(--color-ink-black)] md:grid-cols-3">
            <li className="rounded-[var(--radius-cards-sm)] bg-[var(--color-cloud-gray)] p-16">
              Sitios rápidos y mobile-first
            </li>
            <li className="rounded-[var(--radius-cards-sm)] bg-[var(--color-cloud-gray)] p-16">
              Estructura y schema listos para SEO
            </li>
            <li className="rounded-[var(--radius-cards-sm)] bg-[var(--color-cloud-gray)] p-16">
              Integración con WhatsApp, formularios y analítica
            </li>
          </ul>
        </Reveal>
      </section>

      <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
        <SectionHeading eyebrow="Nuestro proceso" title="Cómo trabajamos mes a mes" />
        <div className="mt-40">
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <section className="px-24 py-64 md:px-80">
        <Reveal className="mx-auto max-w-[1280px] rounded-[var(--radius-cards)] border border-black/5 border-t-4 border-t-[var(--color-indigo-bloom)] bg-white p-32 text-center shadow-[var(--shadow-subtle)] md:p-48">
          <p className="text-body-sm font-semibold text-[var(--color-charcoal)]">
            Lo que ves cada mes
          </p>
          <p className="tracking-heading mt-8 text-heading font-semibold text-[var(--color-ink-black)]">
            Un reporte claro
          </p>
          <p className="mx-auto mt-8 max-w-[560px] text-body text-[var(--color-graphite)]">
            Tráfico orgánico, posiciones y consultas que llegan desde Google y
            la IA, explicados sin tecnicismos.
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
        title="Empecemos con una auditoría gratuita"
        description="Te mostramos exactamente qué está frenando tu visibilidad en Google."
      />
    </>
  );
}
