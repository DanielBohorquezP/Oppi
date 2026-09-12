"use client";

import { useEffect, useState } from "react";
import { useContactModal } from "@/lib/contact-modal";

const STORAGE_KEY = "oppi-notification-dismissed";

export function StickyNotification() {
  const [visible, setVisible] = useState(false);
  const { open: openContactModal } = useContactModal();

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  return (
    <div className="fixed bottom-24 right-24 z-40 hidden w-[300px] rounded-[var(--radius-cards-sm)] bg-[var(--color-ink-black)] p-20 text-white shadow-[var(--shadow-subtle)] sm:block">
      <button
        aria-label="Cerrar"
        onClick={dismiss}
        className="absolute right-12 top-12 text-[var(--color-ash)] hover:text-white"
      >
        <CloseIcon />
      </button>
      <p className="pr-16 text-body-sm font-semibold">
        ¿Tu negocio necesita más clientes?
      </p>
      <p className="mt-4 text-caption text-[var(--color-frost-gray)]">
        Agenda una llamada gratuita de 20 minutos.
      </p>
      <button
        type="button"
        onClick={() => {
          dismiss();
          openContactModal();
        }}
        className="mt-16 inline-block rounded-[var(--radius-tags)] bg-[var(--color-brand-yellow)] px-16 py-8 text-caption font-semibold text-[var(--color-ink-black)] transition-opacity hover:opacity-90"
      >
        Agendar ahora
      </button>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
