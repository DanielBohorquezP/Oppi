"use client";

import { useEffect, useState } from "react";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { team } from "@/content/team";
import { whatsappHref } from "@/content/site";

/*
  Botón flotante de WhatsApp con la cara de alguien del equipo. El globo de
  texto aparece unos segundos y se va solo, para no tapar contenido; en móvil
  no se muestra (el círculo ya se entiende solo).
*/
export function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const host = team.sem;

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
      <span className="relative flex h-64 w-64 items-end justify-center overflow-hidden rounded-full border-2 border-[#25D366] bg-[var(--color-ink-black)] shadow-[var(--shadow-subtle)] transition group-hover:scale-105">
        <TeamAvatar member={host} height={60} />
        <span className="absolute bottom-0 right-0 flex h-24 w-24 items-center justify-center rounded-full bg-[#25D366]">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="white" aria-hidden>
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z" />
          </svg>
        </span>
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
