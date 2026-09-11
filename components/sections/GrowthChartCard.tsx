// Curva ascendente decorativa: no son datos reales de un cliente, es una
// representación del "sube y a la derecha" que buscan los 3 servicios juntos.
const chartPath =
  "M0,190 C50,180 80,150 100,165 C140,190 160,190 200,175 C240,160 260,120 300,120 C340,120 360,140 400,130 C440,120 470,80 500,70 C530,60 570,55 600,50";
const chartMonths = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];
const chartDots = [
  { x: 0, y: 190 },
  { x: 200, y: 175 },
  { x: 300, y: 120 },
  { x: 400, y: 130 },
  { x: 600, y: 50 },
];

const kpis = [
  { value: "+65%", label: "Tráfico orgánico" },
  { value: "-32%", label: "Costo por cliente" },
  { value: "3 sem.", label: "Para lanzar tu sitio" },
];

export function GrowthChartCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow ambiental detrás de la tarjeta, para que respire dentro del Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-32 -z-10 rounded-full opacity-40 blur-[80px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-coral-pulse), transparent)",
        }}
      />

      <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-24 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm md:p-40">
        <div className="mb-16 flex items-center gap-8">
          <span className="relative flex h-8 w-8">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand-yellow)] opacity-60" />
            <span className="relative inline-flex h-8 w-8 rounded-full bg-[var(--color-brand-yellow)]" />
          </span>
          <span className="text-caption font-semibold uppercase tracking-wide text-[var(--color-frost-gray)]">
            Resultados en tiempo real
          </span>
        </div>

        <p className="text-heading-sm font-semibold text-white">
          Crecimiento con Oppi
        </p>
        <p className="mt-8 max-w-[420px] text-body-sm text-[var(--color-frost-gray)]">
          Web, SEO y SEM trabajando juntos: así se ve el resultado combinado
          de los tres servicios en una cuenta activa.
        </p>

        <div className="mt-24 grid grid-cols-3 gap-16 border-y border-white/10 py-16">
          {kpis.map((kpi) => (
            <div key={kpi.label}>
              <p className="font-mono-metric text-heading-sm font-bold text-white md:text-heading">
                {kpi.value}
              </p>
              <p className="mt-4 text-caption text-[var(--color-ash)]">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>

        <svg
          viewBox="0 0 600 220"
          className="mt-24 h-[220px] w-full md:h-[260px]"
          role="img"
          aria-label="Gráfica ascendente de crecimiento"
        >
          {[50, 110, 170].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="600"
              y2={y}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          ))}
          <path
            d={`${chartPath} L600,220 L0,220 Z`}
            fill="url(#stat-chart-gradient)"
          />
          <path
            d={chartPath}
            fill="none"
            stroke="url(#stat-chart-line)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {chartDots.map((dot) => (
            <circle
              key={dot.x}
              cx={dot.x}
              cy={dot.y}
              r="5"
              fill="var(--color-ink-black)"
              stroke="url(#stat-chart-line)"
              strokeWidth="3"
            />
          ))}
          <defs>
            <linearGradient id="stat-chart-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-brand-yellow)" />
              <stop offset="100%" stopColor="var(--color-coral-pulse)" />
            </linearGradient>
            <linearGradient id="stat-chart-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-coral-pulse)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--color-coral-pulse)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mt-8 grid grid-cols-6 text-center text-caption text-[var(--color-ash)]">
          {chartMonths.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
