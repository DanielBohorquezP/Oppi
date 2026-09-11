import type { ReactNode } from "react";

// Dirección "editorial + índigo": las tarjetas comparten un fondo blanco
// neutro; lo que identifica a cada servicio/tema es un borde superior de su
// propio acento, no un fondo pastel completo (ver app/globals.css).
const accents = {
  yellow: "var(--color-brand-yellow)",
  sky: "var(--color-sky-signal)",
  sage: "var(--color-amber-edge)",
  lilac: "var(--color-indigo-bloom)",
  peach: "var(--color-coral-pulse)",
  cream: "var(--color-slate)",
} as const;

export type Wash = keyof typeof accents;

export function PastelCard({
  wash = "yellow",
  children,
  className = "",
}: {
  wash?: Wash;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius-cards)] border border-black/5 bg-white p-32 shadow-[var(--shadow-subtle)] ${className}`}
      style={{ borderTop: `3px solid ${accents[wash]}` }}
    >
      {children}
    </div>
  );
}
