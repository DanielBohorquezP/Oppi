import { ContactLink } from "@/components/ui/ContactLink";
import { PiArrowRight, PiWhatsappLogo } from "react-icons/pi";
import { CtaBlobs } from "@/components/motion/CtaBlobs";
import { whatsappHref } from "@/content/site";

// CTA final de las páginas de servicio: tarjeta índigo con manchas animadas.
export function ServiceCta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div
        data-reveal="scale"
        className="relative isolate mx-auto max-w-[1280px] overflow-hidden rounded-[36px] bg-[#040054] px-[clamp(28px,6vw,80px)] py-[clamp(48px,7vw,96px)] text-center"
      >
        <CtaBlobs />
        <h2 className="mx-auto max-w-[860px] text-[length:clamp(32px,4.4vw,58px)] leading-[1.05] tracking-[-0.02em] text-balance text-white">
          {title}
        </h2>
        <p className="mx-auto mt-[20px] max-w-[540px] text-[18px] leading-[1.5] text-[#e0e0e0]">
          {description}
        </p>
        <div className="mt-[36px] flex flex-wrap justify-center gap-[12px]">
          <ContactLink
            href="#contacto"
            className="inline-flex items-center gap-[10px] rounded-[40px] bg-[#f8673e] px-[28px] py-[15px] text-[16px] font-bold text-white shadow-[0_12px_30px_-10px_rgba(248,103,62,0.7)] [transition:transform_350ms_cubic-bezier(.16,1,.3,1),background-color_200ms,color_200ms] hover:bg-[#ffe848] hover:text-[#040054] hover:[transform:translateY(-3px)]"
          >
            Agenda tu diagnóstico gratis
            <PiArrowRight aria-hidden="true" />
          </ContactLink>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] rounded-[40px] border border-white/[0.22] px-[28px] py-[15px] text-[16px] font-bold text-white [transition:border-color_200ms,color_200ms,transform_350ms_cubic-bezier(.16,1,.3,1)] hover:border-[#ffe848] hover:text-[#ffe848] hover:[transform:translateY(-3px)]"
          >
            <PiWhatsappLogo aria-hidden="true" className="text-[20px]" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
