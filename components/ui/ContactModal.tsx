"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useContactModal } from "@/lib/contact-modal";
import { cn } from "@/lib/utils";

const CHALLENGE_OPTIONS = [
  "Tengo web pero sin visitas",
  "Tengo visitas pero no ventas",
  "Mi competencia domina Google",
];

type FormData = {
  url: string;
  challenge: string;
  name: string;
  email: string;
  whatsapp: string;
};

const initialFormData: FormData = {
  url: "",
  challenge: "",
  name: "",
  email: "",
  whatsapp: "",
};

type Step = "form1" | "form2" | "success";

export function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [step, setStep] = useState<Step>("form1");
  const [data, setData] = useState<FormData>(initialFormData);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      const resetTimer = setTimeout(() => {
        setStep("form1");
        setData(initialFormData);
      }, 300);
      return () => clearTimeout(resetTimer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const canGoNext = data.url.trim() !== "" && data.challenge !== "";
  const canSubmit =
    data.name.trim() !== "" &&
    data.email.trim() !== "" &&
    data.whatsapp.trim() !== "";

  const goNext = () => {
    if (!canGoNext) return;
    setStep("form2");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStep("success");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-16 md:p-24"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Cerrar"
        className="fixed inset-0 bg-[var(--color-ink-black)]/80 backdrop-blur-sm"
        onClick={close}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 w-full max-w-[480px] rounded-[var(--radius-cards)] border border-[var(--color-coral-pulse)]/40 bg-[var(--color-ink-black)] p-24 shadow-[0_0_60px_-15px_var(--color-coral-pulse)] md:p-32"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={close}
          className="absolute right-16 top-16 flex h-32 w-32 items-center justify-center rounded-full text-[var(--color-frost-gray)] transition-opacity hover:opacity-70"
        >
          <CloseIcon />
        </button>

        {step !== "success" && (
          <div className="mb-24 flex items-center gap-8">
            <StepDot active={step === "form1" || step === "form2"} />
            <StepDot active={step === "form2"} />
            <span className="ml-8 text-caption font-medium uppercase tracking-wide text-[var(--color-frost-gray)]">
              Paso {step === "form1" ? "1" : "2"} de 2
            </span>
          </div>
        )}

        {step === "form1" && (
          <div>
            <h2
              id="contact-modal-title"
              className="tracking-heading text-heading-sm font-semibold text-white"
            >
              Agenda una llamada
            </h2>
            <p className="mt-8 text-body-sm text-[var(--color-frost-gray)]">
              Cuéntanos un poco de tu negocio antes de agendar.
            </p>

            <div className="mt-24 space-y-20">
              <Field label="1. URL de tu sitio web">
                <input
                  ref={firstFieldRef}
                  type="text"
                  value={data.url}
                  onChange={(e) =>
                    setData((d) => ({ ...d, url: e.target.value }))
                  }
                  placeholder="Ej. www.tuempresa.com"
                  className={inputClasses}
                />
              </Field>

              <Field label="2. Mayor desafío actual">
                <select
                  value={data.challenge}
                  onChange={(e) =>
                    setData((d) => ({ ...d, challenge: e.target.value }))
                  }
                  className={cn(inputClasses, "appearance-none")}
                  style={{
                    colorScheme: "dark",
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23e0e0e0' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option
                    value=""
                    disabled
                    style={{
                      backgroundColor: "var(--color-ink-black)",
                      color: "var(--color-slate)",
                    }}
                  >
                    Selecciona tu reto...
                  </option>
                  {CHALLENGE_OPTIONS.map((option) => (
                    <option
                      key={option}
                      value={option}
                      style={{
                        backgroundColor: "var(--color-ink-black)",
                        color: "#ffffff",
                      }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-32 flex justify-end">
              <button
                type="button"
                onClick={goNext}
                disabled={!canGoNext}
                className="rounded-[var(--radius-buttons)] bg-[var(--color-coral-pulse)] px-24 py-12 text-body font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {step === "form2" && (
          <form onSubmit={handleSubmit}>
            <div className="rounded-[var(--radius-cards-sm)] border border-dashed border-[var(--color-coral-pulse)]/50 px-16 py-16 text-center">
              <p className="text-body-sm font-semibold text-[var(--color-coral-pulse)]">
                Completa tus datos para acceder al calendario y agendar
                nuestra llamada.
              </p>
            </div>

            <div className="mt-24 space-y-20">
              <Field label="Nombre completo">
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) =>
                    setData((d) => ({ ...d, name: e.target.value }))
                  }
                  placeholder="Ej. Juan Pérez"
                  className={inputClasses}
                />
              </Field>

              <Field label="Email corporativo">
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) =>
                    setData((d) => ({ ...d, email: e.target.value }))
                  }
                  placeholder="Ej. hola@tuempresa.com"
                  className={inputClasses}
                />
              </Field>

              <Field label="Número de WhatsApp">
                <input
                  type="tel"
                  value={data.whatsapp}
                  onChange={(e) =>
                    setData((d) => ({ ...d, whatsapp: e.target.value }))
                  }
                  placeholder="Ej. +57 300 000 0000"
                  className={inputClasses}
                />
              </Field>
            </div>

            <div className="mt-32 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep("form1")}
                className="rounded-[var(--radius-buttons)] border border-white/20 px-24 py-12 text-body font-semibold text-white transition-opacity hover:opacity-90"
              >
                Atrás
              </button>
              <button
                type="submit"
                disabled={!canSubmit}
                className="rounded-[var(--radius-buttons)] bg-[var(--color-coral-pulse)] px-24 py-12 text-body font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Agendar llamada
              </button>
            </div>
          </form>
        )}

        {step === "success" && (
          <div className="py-16 text-center">
            <h2
              id="contact-modal-title"
              className="tracking-heading text-heading-sm font-semibold text-white"
            >
              ¡Listo, {data.name.split(" ")[0]}!
            </h2>
            <p className="mt-12 text-body text-[var(--color-frost-gray)]">
              Recibimos tus datos. Te vamos a escribir por WhatsApp o email
              para confirmar el horario de tu llamada.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-24 rounded-[var(--radius-buttons)] bg-[var(--color-coral-pulse)] px-24 py-12 text-body font-semibold text-white transition-opacity hover:opacity-90"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const inputClasses =
  "w-full rounded-[var(--radius-cards-sm)] border border-white/15 bg-white/5 px-16 py-12 text-body text-white placeholder:text-[var(--color-slate)] outline-none transition-colors focus:border-[var(--color-coral-pulse)]";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-8 block text-body-sm font-semibold text-white">
        {label}
      </span>
      {children}
    </label>
  );
}

function StepDot({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "h-4 w-24 rounded-[var(--radius-tags)] transition-colors",
        active ? "bg-[var(--color-coral-pulse)]" : "bg-white/15"
      )}
    />
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
