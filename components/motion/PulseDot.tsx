// Punto amarillo que pulsa (oppiPulse 1.8 s) de las píldoras de los heroes.
export function PulseDot() {
  return (
    <span
      aria-hidden="true"
      className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#ffe848] animate-[oppiPulse_1.8s_ease-out_infinite]"
    />
  );
}
