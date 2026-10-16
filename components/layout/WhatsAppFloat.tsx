"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { whatsappFloatHref } from "@/content/site";

/*
  Botón flotante de WhatsApp. En Inicio y Servicios (las páginas con el
  formulario #contacto en el hero) solo aparece cuando ese formulario ya quedó
  por encima del viewport y faltan más de 700 px para el final de la página;
  en el resto de páginas está siempre visible.
*/
export function WhatsAppFloat() {
  const pathname = usePathname();
  const afterForm = pathname === "/" || pathname.startsWith("/servicios/");
  const [pastForm, setPastForm] = useState(false);
  const visible = !afterForm || pastForm;

  useEffect(() => {
    if (!afterForm) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const form = document.getElementById("contacto");
      if (!form) return;
      const remaining =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);
      setPastForm(form.getBoundingClientRect().bottom < 0 && remaining > 700);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [afterForm, pathname]);

  return (
    <a
      href={whatsappFloatHref}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      tabIndex={visible ? undefined : -1}
      className={`fixed right-[16px] bottom-[16px] sm:right-[24px] sm:bottom-[24px] z-[60] inline-flex items-center gap-[12px] rounded-full bg-[#25d366] p-[10px] sm:pr-[24px] text-[16px] font-bold text-white shadow-[0_18px_40px_-12px_rgba(4,0,84,0.55)] animate-[oppiWaPulse_2.2s_ease-out_infinite] [transition:transform_600ms_cubic-bezier(.16,1,.3,1),opacity_400ms,background-color_200ms] hover:bg-[#1ebe5b] hover:text-white ${
        visible
          ? "opacity-100 [transform:translateY(0)]"
          : "pointer-events-none opacity-0 [transform:translateY(160%)]"
      }`}
    >
      <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white text-[28px] text-[#25d366]">
        <PiWhatsappLogoFill aria-hidden="true" />
      </span>
      <span className="hidden flex-col leading-[1.15] sm:flex">
        <span className="text-[12px] font-bold opacity-90">¿Hablamos?</span>
        Escríbenos por WhatsApp
      </span>
    </a>
  );
}
