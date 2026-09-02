"use client";

import { useEffect, useState } from "react";

const INTRO_DURATION = 2080;

export default function SiteIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="site-intro pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      <div className="site-intro-panel site-intro-panel-left absolute inset-y-0 left-0 w-1/2" />
      <div className="site-intro-panel site-intro-panel-right absolute inset-y-0 right-0 w-1/2" />
      <div className="site-intro-grid absolute inset-0" />
      <div className="site-intro-glow absolute inset-0" />
      <div className="site-intro-mark absolute inset-0 z-10 flex flex-col justify-between px-5 py-7 sm:px-9 sm:py-9 lg:px-12">
        <div className="site-intro-topline flex items-center justify-between font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-xs">
          <span>DiegoCodes®</span>
          <span>Recife — PE</span>
        </div>

        <div className="mx-auto flex w-full max-w-[1040px] items-center gap-5 sm:gap-8">
          <div className="site-intro-monogram relative hidden h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/15 sm:flex lg:h-28 lg:w-28">
            <span className="font-display text-3xl tracking-[-0.08em] text-white">DC</span>
            <span className="site-intro-orbit absolute inset-[-7px] rounded-full border border-[var(--accent-hover)]/45" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="site-intro-status mb-4 flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/48 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] shadow-[0_0_14px_rgba(61,220,132,0.8)]" />
              Construindo presença digital
            </div>
            <div className="overflow-hidden pb-2">
              <span className="site-intro-word block font-display text-[clamp(52px,12vw,124px)] uppercase leading-[0.78] tracking-[-0.065em] text-white">
                diego<span className="text-[#c99bea]">codes</span>
              </span>
            </div>
          </div>
        </div>

        <div className="site-intro-meta">
          <div className="mb-3 flex items-center justify-between font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-xs">
            <span>Estratégia · Design · Tecnologia</span>
            <span>Portfólio / 2026</span>
          </div>
          <div className="h-px overflow-hidden bg-white/12">
            <span className="site-intro-progress block h-full bg-gradient-to-r from-[var(--accent-primary)] via-[#c99bea] to-[var(--success)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
