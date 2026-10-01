import { cn } from "@/lib/utils";
import { GuideFlow } from "@/components/sections/GuideFlow";
import type { Service } from "@/content/guide";

/*
  Tarjeta guiada del hero (inspirada en el "Paso 1 de 3" de kickranking).
  El flujo vive en GuideFlow y es el mismo que abre el popup de agendamiento.
*/
export function HeroGuideCard({
  className,
  initialServiceId,
}: {
  className?: string;
  initialServiceId?: Service["id"];
}) {
  return (
    <div
      className={cn(
        "relative max-w-[440px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-32 backdrop-blur",
        className
      )}
    >
      <GuideFlow initialServiceId={initialServiceId} />
    </div>
  );
}
