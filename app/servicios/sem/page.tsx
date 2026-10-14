import type { Metadata } from "next";
import { PiArrowUUpLeft, PiCalendarCheck, PiMagnifyingGlass } from "react-icons/pi";
import { ServiceIntro } from "@/components/sections/ServiceIntro";
import { IncludeGrid, type IncludeItem } from "@/components/sections/IncludeGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Faq, type QA } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { TeamMemberIntro } from "@/components/sections/TeamMemberIntro";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Google Ads: deja de pagar clics que no compran | Oppi",
  description:
    "Campañas de Google Ads gestionadas cada semana para que pagues por clientes, no por curiosos. Te mostramos cuánto presupuesto estás perdiendo.",
};

const includes: IncludeItem[] = [
  {
    icon: PiMagnifyingGlass,
    accent: "coral",
    title: "Apareces cuando van a comprar",
    text: "Tu anuncio sale arriba justo cuando alguien busca lo que vendes. Pagas por gente con intención, no por curiosos.",
  },
  {
    icon: PiArrowUUpLeft,
    accent: "yellow",
    title: "Recuperas a los que se fueron",
    text: "Volvemos a mostrarle tu negocio a quien visitó tu página y no compró.",
  },
  {
    icon: PiCalendarCheck,
    accent: "ink",
    title: "Revisión cada semana",
    text: "Cortamos palabras y anuncios que gastan sin vender. Nada en piloto automático.",
  },
];

const steps = [
  {
    title: "Revisión de tu cuenta",
    description:
      "Encontramos dónde se está yendo tu presupuesto (o estudiamos tu mercado si empiezas de cero).",
  },
  {
    title: "Campañas ordenadas",
    description:
      "Organizamos tus anuncios según lo que la gente busca y medimos cada contacto desde el día uno.",
  },
  {
    title: "Lanzamiento con control",
    description:
      "Arrancamos con presupuesto controlado y ajustamos en las primeras semanas.",
  },
  {
    title: "Resultados",
    description:
      "Te mostramos cuánto invertiste, cuántos clientes llegaron y cuánto te costó cada uno.",
  },
];

const faqs: QA[] = [
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
      "Con seguimiento de conversiones configurado desde el inicio: llamadas, formularios o compras. Cada reporte mensual muestra CPA (costo por cliente), ROAS (retorno por peso invertido) y CTR (porcentaje de clics), no solo clics.",
  },
  {
    question: "¿Qué incluye la gestión?",
    answer:
      "Campañas de búsqueda, display y remarketing; ajuste semanal de pujas, palabras clave negativas y creatividades.",
  },
];

export default function SemPage() {
  return (
    <>
      <ServiceIntro
        serviceId="sem"
        eyebrow="Google Ads (SEM)"
        title="Deja de pagar clics que no te compran"
        highlight="no te compran"
        description="Ponemos tu negocio arriba en Google justo cuando alguien está buscando lo que vendes, y cada semana cortamos lo que gasta sin vender. Pagas por clientes, no por curiosos."
        ctaLabel="Descubre cuánto presupuesto estás perdiendo"
      />

      <IncludeGrid title="Cada peso trabajando, ninguno desperdiciado" items={includes} />

      <TeamMemberIntro member={team.sem} />

      <ProcessSteps title="Cómo trabajamos mes a mes" steps={steps} />

      <Faq items={faqs} />

      <CtaBand
        ctaHref="#contacto"
        title="¿Cuánto de tu presupuesto se va en clics que no compran?"
        description="Revisamos tu cuenta gratis y te mostramos dónde recuperarlo."
      />
    </>
  );
}
