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
  "Apareces primero cuando te buscan en Google, orgánico y pagado",
  "Google Ads: apareces arriba mientras tu SEO crece",
  "Reportes mensuales claros de resultados",
];

export function ComparisonBlock() {
  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
      <SectionHeading
        eyebrow="La diferencia"
        title="Antes de Oppi vs. con Oppi"
      />
      <Reveal className="mx-auto mt-40 grid max-w-[1000px] gap-24 md:grid-cols-2">
        <div className="rounded-[var(--radius-cards)] bg-white p-32">
          <p className="text-body-sm font-semibold text-[var(--color-slate)]">
            Sin Oppi
          </p>
          <ul className="mt-16 space-y-12">
            {before.map((item) => (
              <li
                key={item}
                className="flex items-start gap-12 text-body-sm text-[var(--color-graphite)]"
              >
                <XIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-cards)] border border-black/5 bg-white p-32 shadow-[var(--shadow-subtle)]" style={{ borderTop: "3px solid var(--color-coral-pulse)" }}>
          <p className="text-body-sm font-semibold text-[var(--color-charcoal)]">
            Con Oppi
          </p>
          <ul className="mt-16 space-y-12">
            {after.map((item) => (
              <li
                key={item}
                className="flex items-start gap-12 text-body-sm font-medium text-[var(--color-ink-black)]"
              >
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-2 shrink-0">
      <path
        d="M20 6 9 17l-5-5"
        stroke="var(--color-coral-pulse)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-2 shrink-0">
      <path
        d="M18 6 6 18M6 6l12 12"
        stroke="var(--color-ash)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
