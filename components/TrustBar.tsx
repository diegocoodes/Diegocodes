import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { trustIndicators } from "@/lib/home-content";

export default function TrustBar() {
  return (
    <section
      aria-label="Indicadores de confiança"
      className="border-y border-white/8 bg-[rgba(17,17,17,0.74)] py-5"
    >
      <div className="container-shell">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator, index) => (
            <Reveal key={indicator.title} delay={index * 0.03}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--success)]/25 bg-[var(--success)]/10 text-[var(--success)]">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-accent text-sm font-semibold text-white">
                    {indicator.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                    {indicator.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
