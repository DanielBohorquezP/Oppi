"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { team } from "@/content/team";
import { services, type Challenge, type Service } from "@/content/guide";

/*
  Flujo guiado de 3 pasos: 1) servicio, 2) reto, 3) especialista + datos de
  contacto. Es el mismo en la tarjeta del hero y en el popup de agendamiento
  (ContactModal), así cualquier "Agenda una llamada" lleva a la misma
  experiencia. Todo es estado local.
*/

const stepLabels = ["Inicio", "Tu reto", "Tus datos"];

type Contact = { name: string; email: string; whatsapp: string; url: string };
const emptyContact: Contact = { name: "", email: "", whatsapp: "", url: "" };

export function GuideFlow({
  titleId,
  onClose,
  initialServiceId,
}: {
  /** id del título, para aria-labelledby del diálogo. */
  titleId?: string;
  /** Si existe, el mensaje de éxito muestra un botón "Cerrar". */
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

  const host = team[service?.id ?? "sem"];
  const canSubmit =
    contact.name.trim() !== "" &&
    contact.email.trim() !== "" &&
    contact.whatsapp.trim() !== "";

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
          Especialista: host.name,
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
      <div className="animate-[fadeIn_0.35s_ease] py-16 text-center">
        <h2 id={titleId} className="text-heading-sm font-semibold text-white">
          ¡Listo, {contact.name.split(" ")[0]}!
        </h2>
        <p className="mt-12 text-body text-[var(--color-frost-gray)]">
          {host.name.split(" ")[0]} te va a escribir por WhatsApp o email para
          confirmar el horario de tu llamada.
        </p>
        {onClose && (
          <Button onClick={onClose} className="mt-24">
            Cerrar
          </Button>
        )}
      </div>
    );
  }

  return (
    <>
      {/* Barra de progreso */}
      <div className="absolute inset-x-0 top-0 h-4 bg-white/10">
        <div
          className="h-full bg-[var(--color-brand-yellow)] transition-all duration-500"
          style={{ width: `${((step + 1) / 3) * 100}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-body-sm uppercase tracking-wide">
        <span className="text-[var(--color-frost-gray)]">
          Paso {step + 1} de 3
        </span>
        <span className="font-semibold text-[var(--color-brand-yellow)]">
          {stepLabels[step]}
        </span>
      </div>

      <div key={step} className="animate-[fadeIn_0.35s_ease]">
        {step === 0 && (
          <>
            <Specialist member={host} />
            <label className="mt-24 block">
              <span className="text-body-sm text-[var(--color-frost-gray)]">
                Servicio
              </span>
              <span className="relative mt-8 block">
                <select
                  value={service?.id ?? ""}
                  onChange={(e) => {
                    setService(
                      services.find((s) => s.id === e.target.value) ?? null
                    );
                    setChallenge(null);
                  }}
                  className="w-full cursor-pointer appearance-none rounded-full border border-white/20 bg-white/5 py-12 pl-20 pr-48 text-white outline-none transition-colors focus:border-[var(--color-brand-yellow)]"
                >
                  <option value="" className="bg-[var(--color-ink-black)]">
                    Elige un servicio
                  </option>
                  {services.map((s) => (
                    <option
                      key={s.id}
                      value={s.id}
                      className="bg-[var(--color-ink-black)]"
                    >
                      {team[s.id].role}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden
                  viewBox="0 0 20 20"
                  className="pointer-events-none absolute right-20 top-1/2 h-16 w-16 -translate-y-1/2 fill-[var(--color-brand-yellow)]"
                >
                  <path d="M5.2 7.5 10 12.3l4.8-4.8 1.2 1.2-6 6-6-6z" />
                </svg>
              </span>
            </label>
            <h2
              id={titleId}
              className="mt-24 text-heading-sm font-semibold text-white"
            >
              Hablemos un rato
            </h2>
            <p className="mt-8 text-body text-[var(--color-frost-gray)]">
              Elige el servicio que te interesa y te conectamos con la persona
              indicada del equipo.
            </p>
            <Button
              onClick={() => setStep(1)}
              disabled={!service}
              className="mt-24 w-full"
            >
              Continuar
            </Button>
          </>
        )}

        {step === 1 && service && (
          <>
            <h2
              id={titleId}
              className="mt-24 text-heading-sm font-semibold text-white"
            >
              {service.question}
            </h2>
            <div className="mt-24 flex flex-col gap-12">
              {service.challenges.map((c) => (
                <button
                  type="button"
                  key={c.label}
                  onClick={() => {
                    setChallenge(c);
                    setStep(2);
                  }}
                  className="rounded-[16px] border border-white/15 px-20 py-16 text-left font-semibold text-white transition hover:border-[var(--color-brand-yellow)] hover:bg-white/5"
                >
                  {c.label}
                </button>
              ))}
            </div>
            <BackButton onClick={() => setStep(0)}>Cambiar servicio</BackButton>
          </>
        )}

        {step === 2 && service && challenge && (
          <form onSubmit={handleSubmit}>
            <div className="animate-[fadeIn_0.35s_ease_60ms_both]">
              <Specialist member={host} size={80} accentRole />
            </div>
            <p
              id={titleId}
              className="mt-16 text-body text-white"
            >
              “{challenge.pitch}”
            </p>
            <div className="mt-24 space-y-12">
              <Input label="Nombre" value={contact.name} onChange={set("name")} placeholder="Ej. Juan Pérez" autoComplete="name" />
              <Input label="Email" type="email" value={contact.email} onChange={set("email")} placeholder="Ej. hola@tuempresa.com" autoComplete="email" />
              <Input label="WhatsApp" type="tel" value={contact.whatsapp} onChange={set("whatsapp")} placeholder="Ej. +57 300 000 0000" autoComplete="tel" />
              <Input label="Tu sitio web (opcional)" value={contact.url} onChange={set("url")} placeholder="Ej. www.tuempresa.com" autoComplete="url" />
            </div>
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <Button
              type="submit"
              disabled={!canSubmit || sending}
              className="mt-24 w-full"
            >
              {sending ? "Enviando..." : "Agenda una llamada"}
            </Button>
            {error && (
              <p role="alert" className="mt-12 text-body-sm text-[var(--color-coral-pulse)]">
                No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.
              </p>
            )}
            <p className="mt-12 text-caption text-[var(--color-ash)]">
              Al enviar aceptas el tratamiento de tus datos según nuestra{" "}
              <Link href="/politica-de-privacidad" className="underline hover:text-white">
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

function Specialist({
  member,
  size = 110,
  accentRole = false,
}: {
  member: (typeof team)[keyof typeof team];
  size?: number;
  accentRole?: boolean;
}) {
  return (
    <div className="mt-24 flex items-end gap-16">
      <TeamAvatar member={member} height={size} />
      <div className="pb-8">
        <p className="font-semibold text-white">{member.name}</p>
        <p
          className={
            accentRole
              ? "text-body-sm font-semibold"
              : "text-body-sm text-[var(--color-frost-gray)]"
          }
          style={accentRole ? { color: member.accent } : undefined}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-body-sm text-[var(--color-frost-gray)]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-8 w-full rounded-full border border-white/20 bg-white/5 px-20 py-12 text-white outline-none transition-colors placeholder:text-[var(--color-slate)] focus:border-[var(--color-brand-yellow)]"
      />
    </label>
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
      className="mt-12 w-full py-8 text-body-sm text-[var(--color-frost-gray)] hover:text-white"
    >
      ← {children}
    </button>
  );
}
