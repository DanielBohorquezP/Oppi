import { GradientWave } from "@/components/ui/gradient-wave";
import { cn } from "@/lib/utils";

// Ondas de fondo con la paleta de Oppi: base azul de marca, un índigo más
// claro para dar profundidad y toques de coral y amarillo.
const waveColors = ["#040054", "#1c168f", "#f8673e", "#040054", "#ffe848"];

/*
  Fondo animado de los heroes (home y páginas de servicio). Va dentro de una
  sección con `relative isolate overflow-hidden`; el contenido encima necesita
  `relative z-10`. El velo azul es más denso donde va el texto: de arriba hacia
  abajo en móvil y de izquierda a derecha cuando el formulario va al lado
  (`splitAt`).
*/
export function HeroBackdrop({ splitAt = "xl" }: { splitAt?: "lg" | "xl" }) {
  return (
    <>
      <GradientWave colors={waveColors} />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgb(4_0_84/0.75),rgb(4_0_84/0.35))]",
          splitAt === "lg"
            ? "lg:bg-[linear-gradient(to_right,rgb(4_0_84/0.85)_30%,rgb(4_0_84/0.2))]"
            : "xl:bg-[linear-gradient(to_right,rgb(4_0_84/0.85)_30%,rgb(4_0_84/0.2))]"
        )}
      />
    </>
  );
}
