import Link from "next/link";
import { PiArrowUpRight, PiChatCircle } from "react-icons/pi";
import { services } from "@/content/services";
import type { ServiceKey } from "@/content/service-pages";

// "¿Te duele otra cosa?": las tarjetas de los otros dos servicios.
export function OtherServices({ current }: { current: ServiceKey }) {
  const others = services.filter((s) => s.key !== current);

  return (
    <section className="bg-[#fff8e6] px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div className="mx-auto max-w-[1280px]">
        <div data-reveal="up" className="max-w-[720px]">
          <p className="text-[14px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
            Otros servicios
          </p>
          <h2 className="mt-[12px] text-[length:clamp(32px,4vw,48px)] leading-[1.08] tracking-[-0.02em] text-balance text-[#040054]">
            ¿Te duele otra cosa?
          </h2>
        </div>
        <div className="mt-[40px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[20px]">
          {others.map((service, i) => (
            <Link
              key={service.key}
              href={service.href}
              data-reveal="up"
              data-delay={i * 120}
              className="flex flex-col overflow-hidden rounded-[24px] border border-[rgba(4,0,84,0.06)] bg-white text-[#040054] [transition:transform_500ms_cubic-bezier(.16,1,.3,1),box-shadow_500ms] hover:text-[#040054] hover:shadow-[0_30px_60px_-28px_rgba(4,0,84,0.35)] hover:[transform:translateY(-8px)]"
            >
              <div
                className="flex min-h-[170px] flex-col justify-between gap-[24px] px-[24px] pt-[24px] pb-[28px] sm:px-[32px] sm:pt-[28px] sm:pb-[32px]"
                style={{ background: service.painSurface }}
              >
                <p
                  className="flex items-center gap-[8px] text-[12px] font-bold tracking-[0.06em] uppercase"
                  style={{ color: service.painLabel }}
                >
                  <PiChatCircle aria-hidden="true" className="text-[16px]" />
                  Lo que nos dicen
                </p>
                <p
                  className="font-[family-name:var(--font-archivo-black)] text-[22px] leading-[1.25] text-balance"
                  style={{ color: service.painText }}
                >
                  “{service.pain}”
                </p>
              </div>
              <div className="flex items-center justify-between gap-[16px] px-[24px] pt-[24px] pb-[28px] sm:px-[32px]">
                <div>
                  <p className="text-[13px] font-bold tracking-[0.05em] text-[#7a7a7a] uppercase">
                    {service.tag}
                  </p>
                  <h3 className="mt-[6px] text-[20px] leading-[1.25]">
                    {service.title}
                  </h3>
                </div>
                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#f8673e] text-[18px] text-white">
                  <PiArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
