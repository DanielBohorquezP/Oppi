"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { PiArrowRight, PiCaretDown, PiCheck } from "react-icons/pi";
import { team } from "@/content/team";
import { services, type Challenge, type Service } from "@/content/guide";

/*
  Flujo guiado de 3 pasos: 1) servicio, 2) reto, 3) datos de contacto. Es el
  mismo en la tarjeta del hero y en el popup de agendamiento (ContactModal).
  No muestra foto, nombre ni cargo de ninguna persona. Todo es estado local.

  Otras secciones de la misma página pueden dejarlo en el paso 3 con un
  servicio y un reto ya elegidos (ver `presetGuide`).
*/

const stepLabels = ["Inicio", "Tu reto", "Tus datos"];

// Los mismos nombres de servicio que las tarjetas y el menú.
const serviceLabels: Record<Service["id"], string> = {
  marketing: "Marketing Digital",
  seo: "Estrategia SEO",
  sem: "Google Ads (SEM)",
};

type Contact = { name: string; email: string; whatsapp: string; url: string };
const emptyContact: Contact = { name: "", email: "", whatsapp: "", url: "" };

const PRESET_EVENT = "oppi:guide-preset";

/** Deja el formulario de la página en el paso 3 con ese servicio y reto. */
export function presetGuide(serviceId: Service["id"], challengeIndex: number) {
  window.dispatchEvent(
    new CustomEvent(PRESET_EVENT, { detail: { serviceId, challengeIndex } })
  );
}

const fields: {
  key: keyof Contact;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
}[] = [
  { key: "name", label: "Nombre", type: "text", placeholder: "Ej. Juan Pérez", autoComplete: "name" },
  { key: "email", label: "Email", type: "email", placeholder: "Ej. hola@tuempresa.com", autoComplete: "email" },
  { key: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "Ej. +57 300 000 0000", autoComplete: "tel" },
  { key: "url", label: "Tu sitio web (opcional)", type: "text", placeholder: "Ej. www.tuempresa.com", autoComplete: "url" },
];

const primaryButton =
  "w-full rounded-[40px] bg-[#f8673e] px-[24px] py-[13px] text-[16px] font-bold text-white transition-[background-color,color,opacity] duration-200 disabled:cursor-not-allowed disabled:opacity-40 enabled:cursor-pointer";

export function GuideFlow({
  titleId,
  onClose,
  initialServiceId,
}: {
  /** id del título, para aria-labelledby del diálogo. */
  titleId?: string;
  /** Si existe, el botón del mensaje de éxito cierra el popup. */
  onClose?: () => void;
  /** Servicio preseleccionado (p. ej. en la página de ese servicio). */
  initialServiceId?: Service["id"];
}) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<Service | null>(
    () => services.find((s) => s.id === initialServiceId) ?? null
  );
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [contact, setContact] = useState<Contact>(emptyContact);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const onPreset = (e: Event) => {
      const { serviceId, challengeIndex } = (
        e as CustomEvent<{ serviceId: Service["id"]; challengeIndex: number }>
      ).detail;
      const next = services.find((s) => s.id === serviceId);
      if (!next) return;
      setService(next);
      setChallenge(next.challenges[challengeIndex] ?? next.challenges[0]);
      setStep(2);
      setSent(false);
      setError(false);
    };
    window.addEventListener(PRESET_EVENT, onPreset);
    return () => window.removeEventListener(PRESET_EVENT, onPreset);
  }, []);

  // Solo se usa para enrutar la solicitud internamente; no se muestra.
  const owner = team[service?.id ?? "seo"];
  const canSubmit =
    contact.name.trim() !== "" &&
    contact.email.trim() !== "" &&
    contact.whatsapp.trim() !== "";

  const reset = () => {
    setSent(false);
    setStep(0);
    setChallenge(null);
    setContact(emptyContact);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || sending || !service || !challenge) return;

    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Nueva solicitud de llamada: ${contact.name}`,
          from_name: "Oppi (sitio web)",
          replyto: contact.email,
          botcheck: new FormData(e.currentTarget).get("botcheck") ?? "",
          Nombre: contact.name,
          Email: contact.email,
          WhatsApp: contact.whatsapp,
          "Sitio web": contact.url || "No indicó",
          Servicio: service.id,
          Reto: challenge.label,
          Especialista: owner.name,
        }),
      });
      const data = await res.json();
      if (data.success) setSent(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const set = (key: keyof Contact) => (value: string) =>
    setContact((c) => ({ ...c, [key]: value }));

  if (sent) {
    return (
      <div className="oppi-step-in py-[16px] text-center">
        <span className="inline-flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#ffe848] text-[30px] text-[#040054]">
          <PiCheck aria-hidden="true" />
        </span>
        <h2 id={titleId} className="mt-[20px] text-[24px] leading-[1.3] text-white">
          ¡Listo, {contact.name.trim().split(" ")[0]}!
        </h2>
        <p className="mt-[12px] text-[16px] leading-[1.45] text-[#e0e0e0]">
          Te vamos a escribir por WhatsApp o email para confirmar el horario de
          tu diagnóstico.
        </p>
        <button
          type="button"
          onClick={onClose ?? reset}
          className="mt-[24px] cursor-pointer rounded-[40px] bg-[#f8673e] px-[24px] py-[12px] text-[16px] font-bold text-white"
        >
          Cerrar
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Barra de progreso */}
      <div className="absolute inset-x-0 top-0 h-[4px] bg-white/10">
        <div
          className="h-full bg-[#ffe848] [transition:width_600ms_cubic-bezier(.16,1,.3,1)]"
          style={{ width: `${((step + 1) / 3) * 100}%` }}
        />
      </div>

      <div className="flex justify-between text-[13px] uppercase tracking-[0.05em]">
        <span className="text-[#e0e0e0]">Paso {step + 1} de 3</span>
        <span className="font-bold text-[#ffe848]">{stepLabels[step]}</span>
      </div>

      <div key={step} className="oppi-step-in">
        {step === 0 && (
          <>
            <label className="mt-[24px] block">
              <span className="text-[14px] text-[#e0e0e0]">Servicio</span>
              <span className="relative mt-[8px] block">
                <select
                  value={service?.id ?? ""}
                  onChange={(e) => {
                    setService(services.find((s) => s.id === e.target.value) ?? null);
                    setChallenge(null);
                  }}
                  className="w-full cursor-pointer appearance-none rounded-full border border-white/20 bg-white/5 py-[12px] pr-[48px] pl-[20px] text-[16px] text-white outline-none"
                >
                  <option value="">Elige un servicio</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {serviceLabels[s.id]}
                    </option>
                  ))}
                </select>
                <PiCaretDown
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-[20px] -translate-y-1/2 text-[#ffe848]"
                />
              </span>
            </label>
            <h2 id={titleId} className="mt-[24px] text-[24px] leading-[1.3] text-white">
              Hablemos un rato
            </h2>
            <p className="mt-[8px] text-[16px] leading-[1.45] text-[#e0e0e0]">
              Elige el servicio que te interesa y te conectamos con la persona
              indicada del equipo.
            </p>
            <button
              type="button"
              onClick={() => service && setStep(1)}
              disabled={!service}
              className={`mt-[24px] ${primaryButton} enabled:hover:bg-[#ffe848] enabled:hover:text-[#040054]`}
            >
              Continuar
            </button>
          </>
        )}

        {step === 1 && service && (
          <>
            <h2 id={titleId} className="mt-[24px] text-[24px] leading-[1.3] text-white">
              {service.question}
            </h2>
            <div className="mt-[24px] flex flex-col gap-[10px]">
              {service.challenges.map((c) => (
                <button
                  type="button"
                  key={c.label}
                  onClick={() => {
                    setChallenge(c);
                    setStep(2);
                  }}
                  className="flex cursor-pointer items-center justify-between gap-[12px] rounded-[16px] border border-white/15 bg-transparent px-[20px] py-[16px] text-left text-[16px] leading-[1.35] font-bold text-white [transition:border-color_200ms,background-color_200ms,transform_300ms_cubic-bezier(.16,1,.3,1)] hover:border-[#ffe848] hover:bg-white/[0.06] hover:[transform:translateX(4px)]"
                >
                  {c.label}
                  <PiArrowRight aria-hidden="true" className="shrink-0 text-[#ffe848]" />
                </button>
              ))}
            </div>
            <BackButton onClick={() => setStep(0)}>Cambiar servicio</BackButton>
          </>
        )}

        {step === 2 && service && challenge && (
          <form onSubmit={handleSubmit}>
            <p id={titleId} className="mt-[16px] text-[16px] leading-[1.45] text-white">
              “{challenge.pitch}”
            </p>
            <div className="mt-[24px] flex flex-col gap-[12px]">
              {fields.map((f) => (
                <label key={f.key} className="block">
                  <span className="text-[14px] text-[#e0e0e0]">{f.label}</span>
                  <input
                    type={f.type}
                    value={contact[f.key]}
                    onChange={(e) => set(f.key)(e.target.value)}
                    placeholder={f.placeholder}
                    autoComplete={f.autoComplete}
                    className="mt-[8px] w-full rounded-full border border-white/20 bg-white/5 px-[20px] py-[12px] text-[16px] text-white outline-none transition-colors duration-200 focus:border-[#ffe848]"
                  />
                </label>
              ))}
            </div>
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <button
              type="submit"
              disabled={!canSubmit || sending}
              className={`mt-[24px] ${primaryButton}`}
            >
              {sending ? "Enviando..." : "Agenda tu diagnóstico gratis"}
            </button>
            {error && (
              <p role="alert" className="mt-[12px] text-[14px] text-[#f8673e]">
                No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.
              </p>
            )}
            <p className="mt-[12px] text-[12px] leading-[1.3] text-[#a6a6a6]">
              Al enviar aceptas el tratamiento de tus datos según nuestra{" "}
              <Link href="/politica-de-privacidad" className="underline">
                política de privacidad
              </Link>
              .
            </p>
            <BackButton onClick={() => setStep(1)}>Elegir otro reto</BackButton>
          </form>
        )}
      </div>
    </>
  );
}

function BackButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-[12px] w-full cursor-pointer p-[8px] text-[14px] text-[#e0e0e0]"
    >
      ← {children}
    </button>
  );
}
