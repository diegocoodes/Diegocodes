"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  fromX?: number;
  fromY?: number;
  fromScale?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
  fromX = 0,
  fromY = 20,
  fromScale = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      element.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: amount }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [amount]);

  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-x": `${fromX}px`,
    "--reveal-y": `${fromY}px`,
    "--reveal-scale": String(fromScale),
  } as CSSProperties;

  return (
    <div ref={ref} className={`reveal-motion ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}
