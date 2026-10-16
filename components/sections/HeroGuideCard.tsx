import { GuideFlow } from "@/components/sections/GuideFlow";
import type { Service } from "@/content/guide";

/*
  Tarjeta de vidrio del hero con el formulario guiado de 3 pasos (id
  "contacto"). Es el destino de todos los "Diagnóstico gratis" de la página.
*/
export function HeroGuideCard({
  initialServiceId,
}: {
  initialServiceId?: Service["id"];
}) {
  return (
    <div
      id="contacto"
      data-reveal="scale"
      data-delay="300"
      className="relative min-w-0 flex-[0_1_440px] scroll-mt-[110px] overflow-hidden rounded-[28px] border border-white/[0.14] bg-white/[0.06] p-[24px] sm:p-[32px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] backdrop-blur-[16px]"
    >
      <GuideFlow initialServiceId={initialServiceId} />
    </div>
  );
}
