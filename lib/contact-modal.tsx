"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

/*
  Cualquier Button con este href abre el popup de agendamiento en vez de
  navegar (ver components/ui/Button.tsx). Se mantiene el href real como
  fallback por si JS no ha hidratado aún.
*/
export const CONTACT_TRIGGER_HREF = "/quienes-somos#contacto";

type ContactModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error(
      "useContactModal debe usarse dentro de <ContactModalProvider>"
    );
  }
  return ctx;
}
