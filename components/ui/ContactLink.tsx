"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

/*
  Enlace al formulario #contacto de la misma página. Baja suave dejando 110 px
  de margen (también cuando el hash ya estaba puesto, donde un <Link> normal no
  se mueve) y pone el foco en el primer control del formulario. Si la página no
  tiene #contacto, navega normal (p. ej. "/#contacto").
*/
export function ContactLink({
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || String(props.href) !== "#contacto") return;
    const form = document.getElementById("contacto");
    if (!form) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: form.getBoundingClientRect().top + window.scrollY - 110,
      behavior: reduce ? "auto" : "smooth",
    });
    form
      .querySelector<HTMLElement>("select, input:not([type=checkbox]), button")
      ?.focus({ preventScroll: true });
  };
  return <Link {...props} onClick={handleClick} />;
}
