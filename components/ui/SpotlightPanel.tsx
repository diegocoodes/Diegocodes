"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";

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

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const rect = panel.getBoundingClientRect();
    panel.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    panel.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
    panel.dataset.spotlight = "true";
  }

  function handlePointerLeave() {
    const panel = panelRef.current;

    if (panel) {
      panel.dataset.spotlight = "false";
    }
  }

  return (
    <div
      ref={panelRef}
      className={`spotlight-panel relative overflow-hidden ${className ?? ""}`}
      style={
        {
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
        } as CSSProperties
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        aria-hidden="true"
        className={`spotlight-glow pointer-events-none absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(123,47,190,0.16)_0%,rgba(123,47,190,0.08)_38%,transparent_72%)] opacity-0 blur-2xl ${glowClassName ?? ""}`}
      />
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  );
}
