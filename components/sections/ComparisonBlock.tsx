import { PiCheckBold, PiXBold } from "react-icons/pi";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const before = [
  "Pedir reseñas de palabra, sin seguimiento",
  "Web genérica que no lleva a ninguna acción",
  "Depender solo del boca a boca",
  "Sin datos de qué está funcionando",
];

const after = [
  "Web enfocada en una sola acción clara",
  "Apareces primero en Google, y también cuando te preguntan a ChatGPT o Gemini",
  "Google Ads: apareces arriba mientras tu SEO crece",
  "Reportes mensuales claros de resultados",
];

// Asimetría intencional: el "antes" es una lista tenue y sin relleno; el
// "después" es una tarjeta oscura más grande que domina la composición.
export function ComparisonBlock() {
  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80 md:py-96">
      <SectionHeading title="Antes de Oppi vs. con Oppi" />
      <Reveal className="mx-auto mt-48 grid max-w-[1100px] items-stretch gap-24 md:grid-cols-[1fr_1.2fr] md:gap-0">
        <div className="rounded-[var(--radius-cards)] border border-dashed border-black/20 p-32 md:rounded-r-none md:border-r-0 md:p-48">
          <p className="text-body font-semibold text-[var(--color-slate)]">
            Sin Oppi
          </p>
          <ul className="mt-24 space-y-20">
            {before.map((item) => (
              <li
                key={item}
                className="flex items-start gap-12 text-body text-[var(--color-slate)]"
              >
                <PiXBold
                  aria-hidden="true"
                  className="mt-4 shrink-0 text-[var(--color-ash)]"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-cards)] bg-[var(--color-ink-black)] p-32 shadow-[0_24px_48px_-24px_rgba(4,0,84,0.45)] md:-my-24 md:p-48">
          <p className="text-body font-semibold text-[var(--color-brand-yellow)]">
            Con Oppi
          </p>
          <ul className="mt-24 space-y-20">
            {after.map((item) => (
              <li
                key={item}
                className="flex items-start gap-16 text-body-lg font-medium text-white"
              >
                <span className="mt-2 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[var(--color-coral-pulse)] text-[var(--color-ink-black)]">
                  <PiCheckBold aria-hidden="true" size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
