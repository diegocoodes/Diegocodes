import Reveal from "@/components/ui/Reveal";
import { trustIndicators } from "@/lib/home-content";

export default function TrustBar() {
  return (
    <section
      aria-label="Indicadores de confiança"
      className="border-y border-[var(--accent-primary)]/22 bg-[linear-gradient(90deg,rgba(45,27,105,0.74),rgba(16,10,22,0.92))] py-2"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator, index) => {
            return (
              <Reveal key={indicator.title} delay={index * 0.03}>
                <div className="h-full border-l border-white/10 px-3 py-3 sm:px-5 lg:py-2">
                  <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.025em] text-white sm:text-xs">
                    {indicator.title}
                  </p>
                  <p className="mt-1 hidden max-w-[220px] text-[11px] leading-4 text-white/48 sm:block">
                    {indicator.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
