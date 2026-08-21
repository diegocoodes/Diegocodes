"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

type ScrollLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  ariaCurrent?: "page" | "step" | "location" | "date" | "time" | true;
  offset?: number;
  duration?: number;
  onClick?: () => void;
  style?: CSSProperties;
  tabIndex?: number;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export default function ScrollLink({
  href,
  children,
  className,
  ariaLabel,
  ariaCurrent,
  offset = 104,
  duration = 760,
  onClick,
  style,
  tabIndex,
}: ScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();

    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const startY = window.scrollY;
    const targetY = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - offset
    );

    if (prefersReducedMotion) {
      window.scrollTo({ top: targetY });
      return;
    }

    const distance = targetY - startY;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo({ top: startY + distance * eased });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      className={className}
      style={style}
      tabIndex={tabIndex}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
