"use client";

import { useEffect, useState } from "react";
import { PiWhatsappLogo } from "react-icons/pi";
import { whatsappHref } from "@/content/site";

/*
  Botón flotante de WhatsApp (solo el logo, en el verde de WhatsApp). El globo de
  texto aparece unos segundos y se va solo, para no tapar contenido; en móvil
  no se muestra (el círculo ya se entiende solo).
*/
export function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setShowBubble(true), 2500);
    const hide = setTimeout(() => setShowBubble(false), 8500);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-24 left-24 z-40 flex items-end gap-8"
    >
      <span className="flex h-64 w-64 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] transition group-hover:scale-105">
        <PiWhatsappLogo size={34} aria-hidden="true" />
      </span>
      <span
        className={`mb-40 hidden rounded-[16px] rounded-bl-none bg-white px-16 py-8 text-body-sm font-semibold text-[var(--color-ink-black)] shadow-[var(--shadow-subtle)] transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:block ${
          showBubble ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        Escríbenos por WhatsApp
      </span>
    </a>
  );
}
