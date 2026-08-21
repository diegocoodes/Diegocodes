import {
  BadgeCheck,
  Clock3,
  MonitorSmartphone,
  UserRoundCheck,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { trustIndicators } from "@/lib/home-content";

const trustIcons = [
  BadgeCheck,
  Clock3,
  MonitorSmartphone,
  UserRoundCheck,
] as const;

export default function TrustBar() {
  return (
    <section
      aria-label="Indicadores de confiança"
      className="border-y border-[var(--accent-primary)]/22 bg-[linear-gradient(90deg,rgba(45,27,105,0.74),rgba(16,10,22,0.92))] py-2"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
          {trustIndicators.map((indicator, index) => {
            const Icon = trustIcons[index];

            return (
              <Reveal key={indicator.title} delay={index * 0.03}>
                <div className="motion-card group flex h-full items-start gap-2 rounded-xl border border-white/8 bg-white/[0.035] px-3 py-3 lg:rounded-none lg:border-x-0 lg:border-y-0 lg:bg-transparent lg:px-2 lg:py-2">
                  <span className="motion-icon mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] text-[var(--success)]">
                    <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-accent text-[11px] font-semibold leading-4 text-white sm:text-xs">
                      {indicator.title}
                    </p>
                    <p className="mt-1 hidden max-w-[220px] text-[11px] leading-4 text-white/48 sm:block">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
