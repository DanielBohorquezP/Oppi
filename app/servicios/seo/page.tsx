import type { Metadata } from "next";
import {
  PiArticle,
  PiLightning,
  PiMagnifyingGlass,
  PiMapPin,
  PiSparkle,
  PiWhatsappLogo,
  PiWrench,
} from "react-icons/pi";
import { ServiceIntro } from "@/components/sections/ServiceIntro";
import { IncludeGrid, type IncludeItem } from "@/components/sections/IncludeGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Faq, type QA } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { TeamMemberIntro } from "@/components/sections/TeamMemberIntro";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Agencia SEO: aparece primero en Google y en la IA | Oppi",
  description:
    "Tus clientes te buscan en Google. Posicionamos tu negocio para que te encuentren a ti y no a tu competencia, también en ChatGPT, Claude, Perplexity y Gemini.",
};

const includes: IncludeItem[] = [
  {
    icon: PiWrench,
    accent: "yellow",
    title: "Arreglamos lo que te esconde",
    text: "Revisamos velocidad y estructura de tu sitio para que Google pueda encontrarte y mostrarte.",
  },
  {
    icon: PiArticle,
    accent: "coral",
    title: "Respondemos lo que tu cliente busca",
    text: "Contenido sobre las preguntas reales de tus clientes, publicado mes a mes.",
  },
  {
    icon: PiMapPin,
    accent: "ink",
    title: "Te eligen los que están cerca",
    text: "Tu ficha de Google bien hecha para que te encuentre quien busca en tu zona.",
  },
  {
    icon: PiSparkle,
    accent: "slate",
    title: "La IA te recomienda",
    text: "Preparamos tu contenido para que ChatGPT, Claude, Perplexity y Gemini te recomienden cuando preguntan por lo que vendes.",
  },
];

const webPerks = [
  { icon: PiLightning, label: "Rápida y pensada para celular" },
  { icon: PiMagnifyingGlass, label: "Lista para aparecer en Google" },
  { icon: PiWhatsappLogo, label: "Conectada a WhatsApp y formularios" },
];

const steps = [
  {
    title: "Diagnóstico",
    description:
      "Te mostramos por qué hoy Google no te muestra y quién se está quedando con tus clientes.",
  },
  {
    title: "Plan",
    description: "Atacamos primero lo que más rápido te hace aparecer.",
  },
  {
    title: "Trabajo mensual",
    description:
      "Mejoramos tu página y publicamos contenido cada mes, ajustando según lo que funciona.",
  },
  {
    title: "Reporte claro",
    description:
      "Cada mes ves cuántas personas te encontraron y cuántas se volvieron clientes.",
  },
];

const faqs: QA[] = [
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
    question: "¿Qué es la visibilidad en IA (GEO)?",
    answer:
      "Estructuramos tu contenido para que ChatGPT, Claude, Perplexity, Gemini y Copilot lo puedan leer y citar como fuente, no solo Google.",
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
        eyebrow="Estrategia SEO"
        title="Tus clientes te buscan en Google. Hoy encuentran a tu competencia."
        highlight="tu competencia"
        description="Posicionamos tu página para que, cuando alguien busque lo que vendes en Google o le pregunte a una IA como ChatGPT, Claude o Perplexity, tu negocio sea la primera opción. Clientes que llegan solos, mes a mes."
        ctaLabel="Descubre por qué no apareces"
      />

      <IncludeGrid title="Todo lo que hace falta para que Google te elija a ti" items={includes}>
        <div
          id="desarrollo-web"
          className="mt-24 flex scroll-mt-96 flex-wrap items-center gap-x-48 gap-y-32 rounded-[var(--radius-cards)] bg-[var(--color-cloud-gray)] p-[28px] md:p-48"
        >
          <div className="flex-[1_1_360px]">
            <Eyebrow tone="graphite" className="mb-8">
              Desarrollo web
            </Eyebrow>
            <h2 className="tracking-heading text-heading font-semibold text-balance text-[var(--color-ink-black)]">
              ¿Tu página espanta clientes?
            </h2>
            <p className="mt-12 max-w-[480px] text-body-lg text-[var(--color-graphite)]">
              Te hacemos una que aparece en Google y convierte visitas en ventas.
            </p>
          </div>
          <ul className="flex flex-[1_1_320px] flex-col gap-12">
            {webPerks.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-12 rounded-[16px] bg-white px-16 py-[14px] font-semibold text-[var(--color-ink-black)]"
              >
                <Icon size={20} aria-hidden="true" className="shrink-0 text-[var(--color-coral-pulse)]" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </IncludeGrid>

      <TeamMemberIntro member={team.seo} />

      <ProcessSteps title="Cómo trabajamos mes a mes" steps={steps} />

      <Faq items={faqs} />

      <CtaBand
        ctaHref="#contacto"
        title="¿Por qué tu competencia aparece y tú no?"
        description="Te lo mostramos gratis revisando tu sitio."
      />
    </>
  );
}
