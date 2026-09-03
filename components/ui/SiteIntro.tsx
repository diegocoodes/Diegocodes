"use client";

import { useEffect, useState } from "react";

const INTRO_DURATION = 2080;

export default function SiteIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
      className="site-intro pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-5"
    >
      <div className="overflow-hidden pb-2">
        <span className="site-intro-word block font-display text-[clamp(40px,13vw,148px)] uppercase leading-[0.78] tracking-[-0.065em] text-white">
          diego<span className="text-[#e0c1f6]">codes</span>
        </span>
      </div>
    </div>
  );
}
