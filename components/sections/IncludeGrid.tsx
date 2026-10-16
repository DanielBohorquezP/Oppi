import type { IconType } from "react-icons";
import {
  PiArrowUUpLeft,
  PiArticle,
  PiCalendarCheck,
  PiFilmStrip,
  PiLightning,
  PiMagnifyingGlass,
  PiMapPin,
  PiMegaphone,
  PiSparkle,
  PiTarget,
  PiWhatsappLogo,
  PiWrench,
} from "react-icons/pi";
import type { IncludeCard } from "@/content/service-pages";

const ICONS: Record<string, IconType> = {
  wrench: PiWrench,
  article: PiArticle,
  "map-pin": PiMapPin,
  sparkle: PiSparkle,
  "magnifying-glass": PiMagnifyingGlass,
  "arrow-u-up-left": PiArrowUUpLeft,
  "calendar-check": PiCalendarCheck,
  target: PiTarget,
  "film-strip": PiFilmStrip,
  megaphone: PiMegaphone,
};

const webPerks = [
  { icon: PiLightning, label: "Rápida y pensada para celular" },
  { icon: PiMagnifyingGlass, label: "Lista para aparecer en Google" },
  { icon: PiWhatsappLogo, label: "Conectada a WhatsApp y formularios" },
];

// "Qué incluye": tarjetas numeradas sobre fondo marfil. En SEO lleva debajo el
// bloque de desarrollo web.
export function IncludeGrid({
  title,
  items,
  showWeb,
}: {
  title: string;
  items: IncludeCard[];
  showWeb?: boolean;
}) {
  return (
    <section className="bg-[#fff8e6] px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div className="mx-auto max-w-[1280px]">
        <div data-reveal="up" className="max-w-[760px]">
          <p className="text-[14px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
            Qué incluye
          </p>
          <h2 className="mt-[12px] text-[length:clamp(32px,4vw,52px)] leading-[1.06] tracking-[-0.02em] text-balance text-[#040054]">
            {title}
          </h2>
        </div>
        <div className="mt-[48px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[20px]">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? PiSparkle;
            return (
              <div
                key={item.title}
                data-reveal="up"
                data-delay={i * 100}
                className="relative flex min-h-[300px] flex-col gap-[16px] rounded-[24px] border border-[rgba(4,0,84,0.06)] bg-white px-[28px] py-[32px] shadow-[0_1px_2px_rgba(4,0,84,0.05)] [transition:transform_500ms_cubic-bezier(.16,1,.3,1),box-shadow_500ms,border-color_300ms] hover:border-[rgba(4,0,84,0.14)] hover:shadow-[0_30px_60px_-28px_rgba(4,0,84,0.35)] hover:[transform:translateY(-8px)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-[16px] text-[24px]"
                    style={{
                      background: item.accent,
                      color: item.accent === "#ffe848" ? "#040054" : "#fff",
                    }}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="font-[family-name:var(--font-archivo-black)] text-[14px] text-[#a6a6a6]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-auto pt-[24px] text-[21px] leading-[1.25] text-balance text-[#040054]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-[#3d3d3d]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {showWeb && (
          <div
            id="desarrollo-web"
            data-reveal="up"
            className="relative mt-[20px] flex scroll-mt-[96px] flex-wrap items-center justify-between gap-[32px] overflow-hidden rounded-[24px] bg-[#040054] p-[clamp(28px,4vw,48px)]"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-[140px] -left-[80px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,232,72,0.3),transparent_70%)]"
            />
            <div className="relative min-w-0 flex-[1_1_420px]">
              <p className="text-[14px] font-bold tracking-[0.06em] text-[#ffe848] uppercase">
                Desarrollo web
              </p>
              <h2 className="mt-[8px] text-[length:clamp(26px,3vw,38px)] leading-[1.12] text-white">
                ¿Tu página espanta clientes?
              </h2>
              <p className="mt-[12px] max-w-[560px] text-[17px] leading-[1.5] text-[#e0e0e0]">
                Te hacemos una que aparece en Google y convierte visitas en
                ventas.
              </p>
            </div>
            <div className="relative flex flex-[1_1_320px] flex-col gap-[10px]">
              {webPerks.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-[12px] rounded-[16px] border border-white/10 bg-white/[0.07] px-[16px] py-[14px] text-[14px] font-bold text-white [transition:transform_400ms_cubic-bezier(.16,1,.3,1),background-color_300ms] hover:bg-white/[0.12] hover:[transform:translateX(6px)]"
                >
                  <Icon aria-hidden="true" className="text-[18px] text-[#ffe848]" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
