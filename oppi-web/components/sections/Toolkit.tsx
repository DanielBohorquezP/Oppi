"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  {
    icon: <WebIcon />,
    title: "Desarrollo web optimizado",
    description: "Sitios rápidos, claros y enfocados en convertir visitas en clientes.",
  },
  {
    icon: <SeoIcon />,
    title: "Estrategia SEO",
    description: "Contenido y estructura técnica para que te encuentren en Google.",
  },
  {
    icon: <AdsIcon />,
    title: "Google Ads gestionado",
    description: "Campañas de búsqueda y remarketing optimizadas cada semana, no una vez y listo.",
  },
  {
    icon: <ReportIcon />,
    title: "Reportes mensuales",
    description: "Resultados claros de tráfico, conversión y costo por cliente, sin tecnicismos.",
  },
];

export function Toolkit() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80 md:py-96">
      <Reveal className="mx-auto grid max-w-[1280px] gap-48 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-16 text-body-sm font-semibold uppercase tracking-wide text-[var(--color-amber-edge)]">
            Todo incluido
          </p>
          <h2 className="tracking-heading text-heading font-semibold text-[var(--color-ink-black)] md:text-heading-lg">
            Tu kit completo para vender más
          </h2>
          <div className="mt-32 space-y-4">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`flex w-full items-start gap-16 rounded-[var(--radius-cards-sm)] p-16 text-left transition-colors ${
                  active === index
                    ? "bg-white shadow-[var(--shadow-subtle)]"
                    : "hover:bg-white/50"
                }`}
              >
                <span className="mt-2 flex h-32 w-32 shrink-0 items-center justify-center rounded-[var(--radius-icons)] bg-[var(--color-ink-black)] text-[var(--color-brand-yellow)]">
                  {item.icon}
                </span>
                <span>
                  <span className="block text-body font-semibold text-[var(--color-ink-black)]">
                    {item.title}
                  </span>
                  {active === index && (
                    <span className="mt-4 block text-body-sm text-[var(--color-graphite)]">
                      {item.description}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[var(--radius-cards)] bg-[var(--color-ink-black)]">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="scale-[2.2]">{items[active].icon}</div>
          </div>
          <div className="relative z-10 mx-24 rounded-[var(--radius-cards-sm)] bg-white p-24 text-center shadow-[var(--shadow-subtle)]">
            <p className="text-body-sm font-semibold text-[var(--color-slate)]">
              {items[active].title}
            </p>
            <p className="mt-8 text-body text-[var(--color-graphite)]">
              {items[active].description}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AdsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 20V10M12 20V4M19 20v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
