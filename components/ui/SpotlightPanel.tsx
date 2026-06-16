"use client";

import gsap from "gsap";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type SpotlightPanelProps = {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
};

export default function SpotlightPanel({
  children,
  className,
  glowClassName,
}: SpotlightPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const glow = glowRef.current;

    if (!panel || !glow) {
      return;
    }

    const xTo = gsap.quickTo(glow, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(glow, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const handleMove = (event: PointerEvent) => {
      const rect = panel.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      gsap.to(glow, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      xTo(x - rect.width / 2);
      yTo(y - rect.height / 2);
    };

    const handleLeave = () => {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.28,
        ease: "power2.out",
      });
    };

    panel.addEventListener("pointermove", handleMove);
    panel.addEventListener("pointerleave", handleLeave);

    return () => {
      panel.removeEventListener("pointermove", handleMove);
      panel.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div ref={panelRef} className={`relative overflow-hidden ${className ?? ""}`}>
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(123,47,190,0.16)_0%,rgba(123,47,190,0.08)_38%,transparent_72%)] opacity-0 blur-2xl ${glowClassName ?? ""}`}
      />
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  );
}
