"use client";

import { useEffect, useState } from "react";

const INTRO_DURATION = 1780;

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
      className="site-intro pointer-events-none fixed inset-0 z-[45] overflow-hidden"
    >
      <div className="site-intro-wash absolute inset-0" />
      <div className="site-intro-mark absolute inset-x-0 top-[42%] z-10 px-4 sm:px-8">
        <div className="mx-auto w-full max-w-[760px]">
          <span className="site-intro-word block font-display text-[clamp(42px,13vw,112px)] uppercase leading-none tracking-[-0.055em] text-white">
            diegocodes
          </span>
          <span className="site-intro-line mt-3 block h-px origin-left bg-[var(--accent-hover)] sm:mt-4" />
        </div>
      </div>
    </div>
  );
}
