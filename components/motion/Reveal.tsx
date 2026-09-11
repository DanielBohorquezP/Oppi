"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
  Patrón de "scroll-reveal" (fade-up al entrar en viewport) extraído del
  análisis estructural de turn.io — ahí se implementa con CSS + IntersectionObserver
  (opacity/translateY, ~0.6s ease-out). Se aplica aquí a bloques completos de
  sección (no card por card) siguiendo la regla de animar 1-2 elementos clave
  por vista, no todo a la vez.
*/
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
