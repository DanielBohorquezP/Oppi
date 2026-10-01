"use client";

import Link from "next/link";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CONTACT_TRIGGER_HREF, useContactModal } from "@/lib/contact-modal";

type Variant = "coral" | "ghost-dark" | "ghost-light" | "nav-outline";

/*
  Botón con un brillo radial que sigue al cursor al hacer hover (adaptado de
  "HoverButton" de la comunidad shadcn). La posición se escribe en variables
  CSS (--glow-x / --glow-y) directamente sobre el elemento, sin estado de
  React, para no re-renderizar en cada movimiento del mouse.
*/

const variantStyles: Record<
  Variant,
  {
    backgroundColor: string;
    glowColor: string;
    textColor: string;
    hoverTextColor: string;
    borderClass: string;
    sizeClass: string;
  }
> = {
  coral: {
    backgroundColor: "var(--color-coral-pulse)",
    glowColor: "var(--color-brand-yellow)",
    textColor: "#ffffff",
    hoverTextColor: "var(--color-ink-black)",
    borderClass: "border-white/15",
    sizeClass: "px-24 py-12 text-body",
  },
  "ghost-dark": {
    backgroundColor: "var(--color-ink-black)",
    glowColor: "var(--color-coral-pulse)",
    textColor: "#ffffff",
    hoverTextColor: "var(--color-brand-yellow)",
    borderClass: "border-white/20",
    sizeClass: "px-24 py-12 text-body",
  },
  "ghost-light": {
    backgroundColor: "#ffffff",
    glowColor: "var(--color-coral-pulse)",
    textColor: "var(--color-ink-black)",
    hoverTextColor: "var(--color-ink-black)",
    borderClass: "border-black/10",
    sizeClass: "px-24 py-12 text-body",
  },
  "nav-outline": {
    backgroundColor: "var(--color-brand-yellow)",
    glowColor: "#ffffff",
    textColor: "var(--color-ink-black)",
    hoverTextColor: "var(--color-ink-black)",
    borderClass: "border-black/10",
    sizeClass: "px-20 py-8 text-body-sm",
  },
};

function trackGlow(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
}

export function Button({
  href,
  variant = "coral",
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}) {
  const style = variantStyles[variant];
  const { open: openContactModal } = useContactModal();

  const cssVars = {
    "--glow-x": "50%",
    "--glow-y": "50%",
    "--btn-text": style.textColor,
    "--btn-text-hover": style.hoverTextColor,
    backgroundColor: style.backgroundColor,
    isolation: "isolate",
  } as CSSProperties;

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-8 overflow-hidden rounded-[var(--radius-buttons)] border font-semibold text-[var(--btn-text)] transition-[color,transform] duration-300 ease-out hover:text-[var(--btn-text-hover)] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-[var(--btn-text)]",
    style.borderClass,
    style.sizeClass,
    className
  );

  const content = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full opacity-50 transition-transform duration-[400ms] ease-out group-hover:scale-[1.2] group-disabled:group-hover:scale-0 motion-reduce:transition-none"
        style={{
          left: "var(--glow-x)",
          top: "var(--glow-y)",
          background: `radial-gradient(circle, ${style.glowColor} 10%, transparent 70%)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href === CONTACT_TRIGGER_HREF) {
    return (
      <button
        type="button"
        onClick={openContactModal}
        onMouseMove={trackGlow}
        className={classes}
        style={cssVars}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        onMouseMove={trackGlow}
        className={classes}
        style={cssVars}
      >
        {content}
      </Link>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={trackGlow}
      className={classes}
      style={cssVars}
    >
      {content}
    </button>
  );
}
