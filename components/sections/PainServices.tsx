import Link from "next/link";
import { PiArrowRight, PiChatCircle } from "react-icons/pi";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagChip } from "@/components/ui/TagChip";
import { services } from "@/content/services";

// Una tarjeta por dolor: arriba la frase del cliente sobre el color del
// servicio, abajo lo que logra con Oppi y el nombre del servicio como etiqueta.
export function PainServices() {
  return (
    <section id="servicios" className="scroll-mt-96 px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-x-64 gap-y-24">
          <div className="max-w-[720px]">
            <Eyebrow tone="coral" className="mb-12">
              SEO, Google Ads y Marketing Digital en Barranquilla
            </Eyebrow>
            <h2 className="tracking-heading text-heading leading-[1.08] font-semibold text-balance text-[var(--color-ink-black)] md:text-[52px]">
              ¿Dónde estás perdiendo clientes hoy?
            </h2>
          </div>
          <p className="max-w-[360px] text-body-lg text-[var(--color-graphite)]">
            Elige por dónde empezar según lo que más te duele.
          </p>
        </div>

        <Reveal className="mt-48 grid gap-24 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="flex flex-col overflow-hidden rounded-[var(--radius-cards)] border border-black/5 bg-white shadow-[var(--shadow-subtle)] transition-[transform,box-shadow] duration-300 hover:-translate-y-4 hover:shadow-[0_18px_40px_-18px_rgba(4,0,84,0.3)]"
            >
              <div
                className="flex min-h-[176px] flex-col justify-between gap-24 px-32 pb-32 pt-[28px]"
                style={{ backgroundColor: service.painSurface, color: service.painText }}
              >
                <span
                  className="flex items-center gap-8 text-caption font-semibold uppercase tracking-wide"
                  style={{ color: service.painLabel }}
                >
                  <PiChatCircle size={16} aria-hidden="true" />
                  Lo que nos dicen
                </span>
                <p
                  className="text-[22px] leading-[1.25] text-balance"
                  style={{ fontFamily: "var(--font-archivo-black)" }}
                >
                  “{service.pain}”
                </p>
              </div>
              <div className="flex flex-1 flex-col px-32 pb-32 pt-[28px]">
                <div>
                  <TagChip>{service.tag}</TagChip>
                </div>
                <h3 className="mt-16 text-heading-sm font-semibold text-balance text-[var(--color-ink-black)]">
                  {service.title}
                </h3>
                <p className="mt-12 flex-1 text-body text-[var(--color-graphite)]">
                  {service.summary}
                </p>
                <span className="mt-24 flex items-center gap-8 text-body-sm font-semibold text-[var(--color-coral-pulse)]">
                  Ver cómo lo hacemos
                  <PiArrowRight aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
