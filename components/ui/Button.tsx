"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CONTACT_TRIGGER_HREF, useContactModal } from "@/lib/contact-modal";

type Variant = "coral" | "ghost-dark" | "ghost-light" | "nav-outline";

/*
  Botón con un brillo que recorre el borde en loop (adaptado de un componente
  "StarButton" de la comunidad shadcn). Se dejó el mecanismo real (offset-path
  + radial-gradient animado) pero se reemplazó el fondo decorativo de
  "estrellas" del original por el color sólido de marca de Oppi — el patrón
  de estrellas no encajaba con el sistema visual plano/editorial del sitio.
*/

const variantStyles: Record<
  Variant,
  {
    backgroundColor: string;
    lightColor: string;
    textFrom: string;
    textTo: string;
    borderClass: string;
    sizeClass: string;
    lightWidth: number;
  }
> = {
  coral: {
    backgroundColor: "var(--color-coral-pulse)",
    lightColor: "var(--color-brand-yellow)",
    textFrom: "#ffffff",
    textTo: "var(--color-frost-gray)",
    borderClass: "border-white/15",
    sizeClass: "px-24 py-12 text-body",
    lightWidth: 90,
  },
  "ghost-dark": {
    backgroundColor: "var(--color-ink-black)",
    lightColor: "var(--color-brand-yellow)",
    textFrom: "#ffffff",
    textTo: "var(--color-frost-gray)",
    borderClass: "border-white/20",
    sizeClass: "px-24 py-12 text-body",
    lightWidth: 90,
  },
  "ghost-light": {
    backgroundColor: "#ffffff",
    lightColor: "var(--color-coral-pulse)",
    textFrom: "var(--color-ink-black)",
    textTo: "var(--color-graphite)",
    borderClass: "border-black/10",
    sizeClass: "px-24 py-12 text-body",
    lightWidth: 90,
  },
  "nav-outline": {
    backgroundColor: "#ffffff",
    lightColor: "var(--color-brand-yellow)",
    textFrom: "var(--color-ink-black)",
    textTo: "var(--color-graphite)",
    borderClass: "border-black/10",
    sizeClass: "px-20 py-8 text-body-sm",
    lightWidth: 60,
  },
};

function useStarPath<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty(
      "--path",
      `path('M 0 0 H ${el.offsetWidth} V ${el.offsetHeight} H 0 V 0')`
    );
  }, []);
  return ref;
}

export function Button({
  href,
  variant = "coral",
  children,
  onClick,
  type = "button",
  className = "",
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}) {
  const style = variantStyles[variant];
  const linkRef = useStarPath<HTMLAnchorElement>();
  const buttonRef = useStarPath<HTMLButtonElement>();
  const { open: openContactModal } = useContactModal();

  const cssVars = {
    "--duration": 3,
    "--light-color": style.lightColor,
    isolation: "isolate",
  } as CSSProperties;

  const classes = cn(
    "relative inline-flex items-center justify-center gap-8 overflow-hidden rounded-[var(--radius-buttons)] font-semibold transition-opacity hover:opacity-90",
    style.sizeClass,
    className
  );

  const content = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 aspect-square animate-star-btn bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
        style={
          {
            offsetPath: "var(--path)",
            offsetDistance: "0%",
            width: `${style.lightWidth}px`,
          } as CSSProperties
        }
      />
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-[2] rounded-[inherit] border",
          style.borderClass
        )}
        style={{ backgroundColor: style.backgroundColor }}
      />
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to top, ${style.textFrom}, ${style.textTo})`,
        }}
      >
        {children}
      </span>
    </>
  );

  if (href === CONTACT_TRIGGER_HREF) {
    return (
      <button
        ref={buttonRef}
        type="button"
        onClick={openContactModal}
        className={classes}
        style={cssVars}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} ref={linkRef} className={classes} style={cssVars}>
        {content}
      </Link>
    );
  }
  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      className={classes}
      style={cssVars}
    >
      {content}
    </button>
  );
}
