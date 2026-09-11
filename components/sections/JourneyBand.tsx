import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    icon: <SearchIcon />,
    title: "Diagnóstico",
    description: "Revisamos tu presencia actual: web, posicionamiento orgánico y anuncios.",
  },
  {
    icon: <DesignIcon />,
    title: "Diseño",
    description: "Diseñamos la web, la estrategia SEO o la campaña de Ads a la medida de tu negocio.",
  },
  {
    icon: <RocketIcon />,
    title: "Implementación",
    description: "Activamos todo en días, no en meses, con soporte directo nuestro.",
  },
  {
    icon: <ChartIcon />,
    title: "Resultados",
    description: "Medimos tráfico, conversión y costo por cliente mes a mes, sin adivinar.",
  },
];

export function JourneyBand() {
  return (
    <section className="bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[1280px] text-center">
        <p className="mb-16 text-body-sm font-semibold uppercase tracking-wide text-[var(--color-brand-yellow)]">
          Cómo trabajamos
        </p>
        <h2 className="tracking-heading mx-auto max-w-[640px] text-heading font-semibold text-white md:text-heading-lg">
          De cero visibilidad a un sistema que vende solo
        </h2>
      </div>
      <Reveal className="mx-auto mt-48 grid max-w-[1280px] gap-32 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.title} className="text-center md:text-left">
            <span className="mx-auto flex h-40 w-40 items-center justify-center rounded-[var(--radius-icons)] bg-white/10 text-[var(--color-brand-yellow)] md:mx-0">
              {step.icon}
            </span>
            <h3 className="mt-16 text-body font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-frost-gray)]">
              {step.description}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20l4-1 10-10-3-3L5 16l-1 4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3c3 2 5 6 4 11l-2 2-2-2-2 2-2-2-2-2c-1-5 1-9 4-11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 20V10M12 20V4M19 20v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
