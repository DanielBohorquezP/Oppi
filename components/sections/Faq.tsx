"use client";

import { useId, useState, type ReactNode } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export type QA = {
  question: string;
  /** Texto plano: se usa en pantalla y en el schema FAQPage. */
  answer: string;
  /** Versión con enlaces u otro marcado; si existe, reemplaza a `answer` en pantalla. */
  answerNode?: ReactNode;
};

// Acordeón en dos columnas. Aquí sí van los términos técnicos (ROAS, CPA,
// schema…). Incluye el JSON-LD FAQPage con las mismas preguntas.
export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80 md:py-96">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto flex max-w-[1280px] flex-wrap gap-x-80 gap-y-40">
        <div className="max-w-[400px] flex-[1_1_300px]">
          <Eyebrow tone="coral" className="mb-12">
            Preguntas frecuentes
          </Eyebrow>
          <h2 className="tracking-heading text-heading font-semibold text-balance text-[var(--color-ink-black)] md:text-heading-lg">
            Todo lo que debes saber
          </h2>
          <p className="mt-16 text-body-lg text-[var(--color-graphite)]">
            Aquí van los detalles técnicos. Si te queda una duda, escríbenos por
            WhatsApp.
          </p>
        </div>

        <Reveal className="flex flex-[2_1_480px] flex-col gap-12">
          {items.map((item, index) => {
            const isOpen = open === index;
            const buttonId = `${baseId}-q${index}`;
            const panelId = `${baseId}-a${index}`;
            return (
              <div
                key={item.question}
                className="rounded-[16px] border border-[var(--color-frost-gray)] bg-white"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-16 rounded-[16px] px-24 py-20 text-left text-body font-semibold text-[var(--color-ink-black)]"
                    style={{ fontFamily: "var(--font-comfortaa)" }}
                  >
                    {item.question}
                    <span className="shrink-0 text-[20px] text-[var(--color-coral-pulse)]">
                      {isOpen ? <PiMinus aria-hidden="true" /> : <PiPlus aria-hidden="true" />}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-24 pb-20 text-body text-[var(--color-graphite)]"
                >
                  {item.answerNode ?? item.answer}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
