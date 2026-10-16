"use client";

import { useState } from "react";
import { PiPlus, PiWhatsappLogo } from "react-icons/pi";
import { whatsappHref } from "@/content/site";

export type QA = { question: string; answer: string };

// Preguntas frecuentes: acordeón (una abierta a la vez, la primera por
// defecto) con el título fijo a la izquierda.
export function Faq({ items }: { items: QA[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-start gap-x-[80px] gap-y-[40px]">
        <div
          data-reveal="up"
          className="lg:sticky lg:top-[120px] max-w-[400px] flex-[1_1_300px]"
        >
          <p className="text-[14px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
            Preguntas frecuentes
          </p>
          <h2 className="mt-[12px] text-[length:clamp(32px,4vw,48px)] leading-[1.08] tracking-[-0.02em] text-[#040054]">
            Todo lo que debes saber
          </h2>
          <p className="mt-[16px] text-[16px] leading-[1.55] text-[#3d3d3d]">
            Aquí van los detalles técnicos. Si te queda una duda, escríbenos por
            WhatsApp.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[24px] inline-flex items-center gap-[8px] text-[15px] font-bold text-[#040054] [transition:gap_300ms,color_300ms] hover:gap-[12px] hover:text-[#f8673e]"
          >
            <PiWhatsappLogo aria-hidden="true" className="text-[20px] text-[#f8673e]" />
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-[12px]">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.question}
                data-reveal="up"
                data-delay={i * 60}
                className={`rounded-[20px] border bg-white [transition:background-color_400ms,border-color_400ms] ${
                  open ? "border-[rgba(4,0,84,0.25)]" : "border-[#e0e0e0]"
                }`}
              >
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={open}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-[16px] px-[24px] py-[22px] text-left text-[17px] leading-[1.4] font-bold text-[#040054]"
                >
                  {item.question}
                  <span
                    aria-hidden="true"
                    className={`flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full [transition:transform_500ms_cubic-bezier(.16,1,.3,1),background-color_300ms] ${
                      open
                        ? "bg-[#f8673e] text-white [transform:rotate(45deg)]"
                        : "bg-[#fff8e6] text-[#040054]"
                    }`}
                  >
                    <PiPlus />
                  </span>
                </button>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  inert={!open}
                  className="grid [transition:grid-template-rows_550ms_cubic-bezier(.16,1,.3,1)]"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] px-[24px] pb-[24px] text-[15px] leading-[1.6] text-[#3d3d3d]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
