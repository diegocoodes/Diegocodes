import type { ReactNode } from "react";

type SpotlightPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightPanel({
  children,
  className,
}: SpotlightPanelProps) {
  return (
    <div className={`motion-card relative overflow-hidden ${className ?? ""}`}>
      <div className="h-full">{children}</div>
    </div>
  );
}
