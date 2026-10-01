import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type StaggerFrom = "first" | "center" | "last";

/*
  Texto cuyo peso tipográfico (fuente variable) sube letra por letra al pasar el
  cursor o enfocar el enlace/botón que lo contiene. El efecto se dispara desde
  CSS (ver .vfh-letter en globals.css), así que no necesita estado ni JS en el
  cliente. Una copia invisible en el peso final reserva el ancho para que el
  menú no "salte" al engrosarse.
*/
export function VariableFontHover({
  label,
  className,
  fromFontVariationSettings = "'wght' 400",
  toFontVariationSettings = "'wght' 700",
  staggerDuration = 0.03,
  staggerFrom = "center",
}: {
  label: string;
  className?: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  /** Segundos de desfase entre una letra y la siguiente. */
  staggerDuration?: number;
  staggerFrom?: StaggerFrom;
}) {
  const letters = Array.from(label);
  const last = letters.length - 1;
  const origin =
    staggerFrom === "first" ? 0 : staggerFrom === "last" ? last : last / 2;

  return (
    <span
      className={cn("vfh inline-grid", className)}
      style={
        {
          "--vfh-from": fromFontVariationSettings,
          "--vfh-to": toFontVariationSettings,
        } as CSSProperties
      }
    >
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1 whitespace-pre"
        style={{ fontVariationSettings: toFontVariationSettings }}
      >
        {label}
      </span>
      <span className="col-start-1 row-start-1 whitespace-pre">
        <span className="sr-only">{label}</span>
        {letters.map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            aria-hidden="true"
            className="vfh-letter"
            style={
              {
                "--vfh-delay": `${Math.abs(i - origin) * staggerDuration}s`,
              } as CSSProperties
            }
          >
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
}
