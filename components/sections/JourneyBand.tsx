import {
  PiChartLineUp,
  PiMagnifyingGlass,
  PiPencilRuler,
  PiRocketLaunch,
} from "react-icons/pi";
import { Reveal } from "@/components/motion/Reveal";

// Escalera ascendente: cada paso queda más arriba y con más presencia que el
// anterior, y el último (Resultados) es el único en coral. Cuenta "de cero a un
// sistema que vende" sin numerar los pasos.
const steps = [
  {
    icon: PiMagnifyingGlass,
    title: "Diagnóstico",
    description: "Revisamos tu presencia actual: web, posicionamiento orgánico y anuncios.",
    offset: "md:mt-[144px]",
    surface: "bg-white/5",
  },
  {
    icon: PiPencilRuler,
    title: "Diseño",
    description: "Diseñamos la web, la estrategia SEO o la campaña de Ads a la medida de tu negocio.",
    offset: "md:mt-[96px]",
    surface: "bg-white/10",
  },
  {
    icon: PiRocketLaunch,
    title: "Implementación",
    description: "Activamos todo en días, no en meses, con soporte directo nuestro.",
    offset: "md:mt-[48px]",
    surface: "bg-white/[0.16]",
  },
  {
    icon: PiChartLineUp,
    title: "Resultados",
    description: "Medimos tráfico, conversión y costo por cliente mes a mes, sin adivinar.",
    offset: "",
    surface: "bg-[var(--color-coral-pulse)] !text-[var(--color-ink-black)]",
  },
];

export function JourneyBand() {
  return (
    <section className="bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="tracking-heading max-w-[640px] text-heading font-semibold text-white md:text-heading-lg">
          De cero visibilidad a un sistema que vende solo
        </h2>
      </div>
      <Reveal className="mx-auto mt-48 grid max-w-[1280px] items-start gap-16 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const last = index === steps.length - 1;
          return (
            <div
              key={step.title}
              className={`rounded-[var(--radius-cards)] p-24 text-white md:p-32 ${step.offset} ${step.surface}`}
            >
              <span
                className={`flex h-48 w-48 items-center justify-center rounded-full ${
                  last
                    ? "bg-[var(--color-ink-black)] text-[var(--color-coral-pulse)]"
                    : "bg-white/10 text-[var(--color-brand-yellow)]"
                }`}
              >
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-24 text-subheading font-semibold">{step.title}</h3>
              <p
                className={`mt-8 text-body-sm ${
                  last ? "text-[var(--color-ink-black)]" : "text-[var(--color-frost-gray)]"
                }`}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
