import {
  PiChartLineUp,
  PiMagnifyingGlass,
  PiPencilRuler,
  PiRocketLaunch,
} from "react-icons/pi";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Escalera ascendente: cada paso es más alto y con más presencia que el
// anterior (alineados abajo), y el último (Resultados) es el único en coral.
const steps = [
  {
    icon: PiMagnifyingGlass,
    title: "Diagnóstico",
    description: "Te decimos sin rodeos por qué hoy no te están llegando clientes.",
    height: "md:min-h-[260px]",
    surface: "bg-white/5",
  },
  {
    icon: PiPencilRuler,
    title: "Plan",
    description: "Un plan que ataca primero lo que más rápido te va a dar resultados.",
    height: "md:min-h-[310px]",
    surface: "bg-white/10",
  },
  {
    icon: PiRocketLaunch,
    title: "Implementación",
    description: "Lo ponemos en marcha en días; tú sigues atendiendo tu negocio.",
    height: "md:min-h-[360px]",
    surface: "bg-white/[0.16]",
  },
  {
    icon: PiChartLineUp,
    title: "Resultados",
    description: "Cada mes ves cuántos clientes llegaron y cuánto te costó cada uno.",
    height: "md:min-h-[410px]",
    surface: "bg-[var(--color-coral-pulse)] !text-[var(--color-ink-black)]",
  },
];

export function JourneyBand() {
  return (
    <section className="bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow tone="yellow" className="mb-12">
          Cómo trabajamos
        </Eyebrow>
        <h2 className="tracking-heading max-w-[820px] text-heading font-semibold text-balance text-white md:text-heading-lg">
          De “no sé qué está fallando” a saber exactamente qué te trae clientes
        </h2>
      </div>
      <Reveal className="mx-auto mt-48 grid max-w-[1280px] items-end gap-16 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const last = index === steps.length - 1;
          return (
            <div
              key={step.title}
              className={`flex flex-col rounded-[var(--radius-cards)] p-24 text-white md:p-32 ${step.height} ${step.surface}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-48 w-48 items-center justify-center rounded-full ${
                    last
                      ? "bg-[var(--color-ink-black)] text-[var(--color-coral-pulse)]"
                      : "bg-white/10 text-[var(--color-brand-yellow)]"
                  }`}
                >
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className={`text-[14px] ${
                    last ? "text-[var(--color-ink-black)]/55" : "text-white/40"
                  }`}
                  style={{ fontFamily: "var(--font-archivo-black)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-auto pt-32 text-subheading font-semibold">{step.title}</h3>
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
