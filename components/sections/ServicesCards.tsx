import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

const cards = [
  {
    chip: "Redes sociales",
    border: "#ffe848",
    title: "Contenido en redes sociales que vende",
    text: "Contenido y anuncios en redes pensados para atraer clientes, no solo likes.",
    href: "/servicios/marketing",
    cta: "Ver Marketing Digital",
  },
  {
    chip: "Crecimiento",
    border: "#040054",
    title: "Estrategia SEO",
    text: "Posicionamos tu negocio en Google y en la IA (ChatGPT, Gemini) para que te encuentren clientes listos para comprar.",
    href: "/servicios/seo",
    cta: "Ver Estrategia SEO",
  },
  {
    chip: "Resultados inmediatos",
    border: "#f8673e",
    title: "Google Ads que generan clientes hoy",
    text: "Campañas de búsqueda y remarketing gestionadas y optimizadas cada semana para bajar tu costo por cliente.",
    href: "/servicios/sem",
    cta: "Ver Google Ads",
  },
];

// "Convierte tu marca en tu mejor vendedor." — reemplaza a la antigua sección
// "¿Dónde estás perdiendo clientes hoy?". Es el destino de #servicios.
export function ServicesCards() {
  return (
    <section
      id="servicios"
      className="scroll-mt-[80px] bg-white px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]"
    >
      <div className="mx-auto max-w-[1400px]">
        <div data-reveal="up" className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[length:clamp(36px,4.6vw,64px)] leading-[1.05] tracking-[-0.02em] text-balance text-[#040054]">
            Convierte tu marca en tu mejor vendedor.
          </h2>
          <p className="mx-auto mt-[24px] max-w-[700px] text-[length:clamp(18px,1.6vw,22px)] leading-[1.5] text-pretty text-[#3d3d3d]">
            Te encuentran en Google y en la IA, tus anuncios rinden más y cada
            visita sabe qué hacer para comprarte.
          </p>
        </div>
        <div className="mt-[clamp(48px,6vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[32px]">
          {cards.map((card, i) => (
            <article
              key={card.href}
              data-reveal="up"
              data-delay={i * 120}
              className="flex flex-col rounded-[28px] border border-[rgba(4,0,84,0.08)] border-t-[3px] bg-white p-[40px] [transition:transform_500ms_cubic-bezier(.16,1,.3,1),box-shadow_500ms] hover:shadow-[0_24px_48px_-24px_rgba(4,0,84,0.25)] hover:[transform:translateY(-6px)]"
              style={{ borderTopColor: card.border }}
            >
              <span className="inline-block self-start rounded-full bg-[#fff3d6] px-[14px] py-[4px] text-[14px] text-[#3d3d3d]">
                {card.chip}
              </span>
              <h3 className="mt-[28px] font-[family-name:var(--font-archivo-black)] text-[length:clamp(24px,2.2vw,30px)] leading-[1.25] text-balance text-[#040054]">
                {card.title}
              </h3>
              <p className="mt-[16px] text-[18px] leading-[1.5] text-pretty text-[#3d3d3d]">
                {card.text}
              </p>
              <Link
                href={card.href}
                className="mt-auto inline-flex items-center gap-[8px] self-start pt-[28px] text-[16px] font-bold text-[#040054] [transition:gap_300ms_cubic-bezier(.16,1,.3,1),color_300ms] hover:gap-[14px] hover:text-[#f8673e]"
              >
                {card.cta}
                <PiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
