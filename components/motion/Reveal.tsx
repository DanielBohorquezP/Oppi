import type { ElementType, ReactNode } from "react";

/*
  Envuelve un bloque para que aparezca al hacer scroll. La animación la hace
  MotionRoot (components/motion/MotionRoot.tsx) a partir de `data-reveal` y
  `data-delay`; este componente solo los pone.
*/
export type RevealVariant = "up" | "left" | "right" | "scale" | "fade" | "line";

export function Reveal({
  children,
  className,
  variant = "up",
  delay,
  as: Tag = "div",
}: {
  children?: ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** Retraso en ms. */
  delay?: number;
  as?: ElementType;
}) {
  return (
    <Tag className={className} data-reveal={variant} data-delay={delay}>
      {children}
    </Tag>
  );
}
