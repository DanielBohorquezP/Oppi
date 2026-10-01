"use client";

import { useEffect } from "react";
import { useContactModal } from "@/lib/contact-modal";
import { GuideFlow } from "@/components/sections/GuideFlow";

/*
  Popup de agendamiento. Muestra el mismo flujo de 3 pasos de la tarjeta del
  hero (servicio → reto → datos). Al cerrarse se desmonta, así que el flujo
  vuelve a empezar desde el paso 1 la próxima vez.
*/
export function ContactModal() {
  const { isOpen, close } = useContactModal();

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-16 md:p-24"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Cerrar"
        className="modal-backdrop-in fixed inset-0 bg-[var(--color-ink-black)]/80 backdrop-blur-sm"
        onClick={close}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="modal-in relative z-10 my-auto w-full max-w-[440px] overflow-hidden rounded-[24px] border border-white/10 bg-[var(--color-ink-black)] p-32"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={close}
          className="absolute right-12 top-12 z-10 flex h-40 w-40 items-center justify-center rounded-full text-[var(--color-frost-gray)] transition-opacity hover:opacity-70"
        >
          <CloseIcon />
        </button>

        <div className="pr-32">
          <GuideFlow titleId="contact-modal-title" onClose={close} />
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
