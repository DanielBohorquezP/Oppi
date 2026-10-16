import { ContactLink } from "@/components/ui/ContactLink";
import { PiArrowRight } from "react-icons/pi";
import { TeamPhoto } from "@/components/ui/TeamPhoto";
import { team } from "@/content/team";
import type { ServiceKey, ServicePageData } from "@/content/service-pages";

// "Quién lleva tu cuenta": tarjeta de color del servicio con la foto de la
// persona apoyada en el borde inferior.
export function TeamMemberIntro({
  serviceKey,
  page,
}: {
  serviceKey: ServiceKey;
  page: ServicePageData;
}) {
  const member = team[serviceKey];
  const first = member.name.split(" ")[0];

  return (
    <section className="px-[clamp(24px,5vw,80px)]">
      <div
        data-reveal="scale"
        className="relative mx-auto flex min-h-[420px] max-w-[1280px] flex-wrap items-center justify-between overflow-hidden rounded-[32px] pt-[56px] pr-[clamp(32px,5vw,72px)] pb-0 pl-[clamp(32px,5vw,72px)]"
        style={{ background: page.surface }}
      >
        <div
          aria-hidden="true"
          className="absolute right-[4%] -bottom-[180px] h-[560px] w-[560px] rounded-full"
          style={{ background: page.glow }}
        />
        <div className="relative z-[1] max-w-[540px] flex-[1_1_380px] pb-[56px]">
          <p
            className="text-[14px] font-bold tracking-[0.06em] uppercase"
            style={{ color: page.text }}
          >
            Quién lleva tu cuenta
          </p>
          <h2
            className="mt-[12px] text-[length:clamp(32px,4vw,52px)] leading-[1.06] tracking-[-0.02em]"
            style={{ color: page.text }}
          >
            {member.name}
          </h2>
          <p className="mt-[8px] text-[16px] font-bold" style={{ color: page.text }}>
            {member.role}
          </p>
          <p
            className="mt-[16px] max-w-[460px] text-[18px] leading-[1.5]"
            style={{ color: page.body }}
          >
            {member.blurb} Hablas directo con quien hace el trabajo.
          </p>
          <ContactLink
            href="#contacto"
            className="mt-[28px] inline-flex items-center gap-[8px] rounded-[40px] px-[24px] py-[13px] text-[16px] font-bold [transition:transform_350ms_cubic-bezier(.16,1,.3,1)] hover:[transform:translateY(-3px)]"
            style={{ background: page.btnBg, color: page.btnText }}
          >
            Agenda con {first}
            <PiArrowRight aria-hidden="true" />
          </ContactLink>
        </div>
        <TeamPhoto
          member={serviceKey}
          height={400}
          reveal="up"
          delay={200}
          className="relative z-[1] mr-[4%] self-end"
        />
      </div>
    </section>
  );
}
