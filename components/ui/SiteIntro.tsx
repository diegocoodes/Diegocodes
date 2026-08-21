"use client";

import { useEffect, useState } from "react";

const INTRO_DURATION = 1550;

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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeout = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      setIsVisible(false);
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div aria-hidden="true" className="site-intro fixed inset-0 z-[100]">
      <div className="site-intro-panel site-intro-panel-top" />
      <div className="site-intro-panel site-intro-panel-bottom" />

      <div className="site-intro-mark absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="w-full max-w-[520px]">
          <div className="flex items-end justify-between gap-4">
            <span className="font-display text-[clamp(52px,10vw,112px)] uppercase leading-none tracking-[-0.02em] text-white">
              diegocodes
              <span className="text-[var(--accent-hover)]">_</span>
            </span>
            <span className="mb-2 hidden font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:block">
              Digital studio
            </span>
          </div>
          <span className="site-intro-line mt-4 block h-px origin-left bg-[var(--accent-hover)]" />
        </div>
      </div>
    </div>
  );
}
