import type { ReactNode } from "react";

type MotionSurfaceProps = {
  children: ReactNode;
  className?: string;
};

export default function MotionSurface({ children, className }: MotionSurfaceProps) {
  return (
    <article className={`motion-card ${className ?? ""}`}>
      {children}
    </article>
  );
}
