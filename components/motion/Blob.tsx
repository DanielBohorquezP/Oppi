import type { CSSProperties } from "react";

/*
  Mancha difusa animada (círculo con blur(90px)). Se usa en "Proceso" y en los
  CTA finales; va dentro de un contenedor `absolute inset-0` con aria-hidden.
*/
export function Blob({
  color,
  position,
  size,
  animation,
  opacity,
}: {
  color: string;
  position: Pick<CSSProperties, "left" | "right" | "top" | "bottom">;
  size: number;
  animation: string;
  opacity: number;
}) {
  return (
    <div
      className="absolute rounded-full blur-[90px]"
      style={{
        ...position,
        width: size,
        height: size,
        background: color,
        opacity,
        animation,
      }}
    />
  );
}
