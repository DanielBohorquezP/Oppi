import type { ReactNode } from "react";

const tones = {
  yellow: "text-[var(--color-brand-yellow)]",
  coral: "text-[var(--color-coral-pulse)]",
  graphite: "text-[var(--color-graphite)]",
  ink: "text-[var(--color-ink-black)]",
} as const;

// Etiqueta pequeña en mayúsculas sobre los títulos. Aquí van los términos que
// la gente busca (SEO, Google Ads, Marketing Digital); el dolor va en el título.
export function Eyebrow({
  tone = "coral",
  children,
  className = "",
}: {
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-body-sm font-semibold uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
