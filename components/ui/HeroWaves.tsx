"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./GradientWaves.module.css";

const GradientWaves = dynamic(() => import("./GradientWaves"), { ssr: false });

export default function HeroWaves() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    let idleId: number | undefined;
    let timerId: number | undefined;

    function cancelPending() {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    }

    function schedule() {
      cancelPending();
      if (!media.matches || connection?.saveData) {
        setEnabled(false);
        return;
      }
      if (document.readyState !== "complete") return;

      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => setEnabled(true));
      } else {
        timerId = window.setTimeout(() => setEnabled(true), 0);
      }
    }

    schedule();
    window.addEventListener("load", schedule);
    media.addEventListener("change", schedule);
    return () => {
      cancelPending();
      window.removeEventListener("load", schedule);
      media.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <div className={styles.container} aria-hidden="true">
      {enabled && (
        <GradientWaves
          horizonColor="#2D1B69"
          waveColor="#7B2FBE"
          crestColor="#9B4DCA"
          speed={0.22}
          amplitude={1.9}
          waveScale={0.54}
          waveRatio={0.86}
          swell={24}
          turbulence={13}
          tilt={1.08}
          zoom={0.94}
          height={5.7}
          fogDepth={18}
          detail="low"
          brightness={0.82}
          opacity={0.78}
          mouseInteraction
          parallaxStrength={0.2}
          grain={false}
        />
      )}
    </div>
  );
}
