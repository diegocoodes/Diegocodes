"use client";

import { useEffect, useState } from "react";

const INTRO_DURATION = 1880;

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
      <div className="site-intro-glow absolute inset-0" />
      <div className="site-intro-mark absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-8">
        <div className="w-full max-w-[860px]">
          <div className="overflow-hidden pb-2">
            <span className="site-intro-word block font-display text-[clamp(48px,13vw,132px)] uppercase leading-[0.82] tracking-[-0.06em] text-white">
              diegocodes
            </span>
          </div>
          <div className="site-intro-meta mt-5 flex items-center justify-between border-t border-white/16 pt-4 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/48 sm:text-xs">
            <span>Experiências digitais</span>
            <span className="text-[var(--success)]">Recife / PE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
