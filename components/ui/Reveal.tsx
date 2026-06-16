"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
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
      gsap.set(element, { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }

    const triggerPoint = `${Math.round((1 - amount) * 100)}%`;

    const ctx = gsap.context(() => {
      gsap.set(element, { opacity: 0, y: 20 });

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: `top ${triggerPoint}`,
          once: true,
        },
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [amount, delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
