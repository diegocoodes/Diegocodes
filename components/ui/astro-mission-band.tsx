"use client";

import Image from "next/image";
import {
  Clock3,
  Layers3,
  MonitorSmartphone,
  Pause,
  Play,
  UserRound,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type AstroStat = {
  value: string;
  label: string;
  icon: "projects" | "clock" | "responsive" | "person";
  images?: readonly { src: string; alt: string }[];
};

export type AstroPalette = {
  ground: string;
  colors: readonly string[];
};

export type AstroMissionBandProps = {
  id?: string;
  stats: readonly AstroStat[];
  bandTitle?: string;
  palette?: AstroPalette;
  backgroundImage?: string;
  seed?: number;
  className?: string;
};

const diegoPalette: AstroPalette = {
  ground: "#36104f",
  colors: ["#4c1b71", "#65228e", "#7b2fbe", "#9b4dca", "#bf83df", "#3ddc84"],
};

const icons = {
  projects: Layers3,
  clock: Clock3,
  responsive: MonitorSmartphone,
  person: UserRound,
};

// Seeded bubbles and a knocked-out brand mark, adapted from the supplied Astro band.
function mulberry32(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value + 0x6d2b79f5) >>> 0;
    let next = value;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function Bubbles({
  palette,
  paused,
  seed,
}: {
  palette: AstroPalette;
  paused: boolean;
  seed: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    const host = canvas?.parentElement;
    if (!canvas || !context || !host) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let ratio = 1;
    let frame = 0;
    let visible = false;
    let lastFrame = 0;
    let time = 0;
    const pointer = { x: -1000, y: -1000 };
    let bubbles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      phase: number;
      speed: number;
      ox: number;
      oy: number;
    }[] = [];

    function draw() {
      if (!context || !canvas) return;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.globalCompositeOperation = "source-over";
      context.clearRect(0, 0, width, height);
      context.fillStyle = palette.ground;
      context.fillRect(0, 0, width, height);
      for (const bubble of bubbles) {
        const dx = bubble.x - pointer.x;
        const dy = bubble.y - pointer.y;
        const distance = Math.hypot(dx, dy) || 1;
        const push =
          !preference.matches && !paused
            ? Math.max(0, 1 - distance / 150) * 22
            : 0;
        bubble.ox += ((dx / distance) * push - bubble.ox) * 0.09;
        bubble.oy += ((dy / distance) * push - bubble.oy) * 0.09;
        context.fillStyle = bubble.color;
        context.beginPath();
        context.arc(
          bubble.x +
            Math.sin(time * bubble.speed + bubble.phase) * 9 +
            bubble.ox,
          bubble.y +
            Math.cos(time * bubble.speed * 0.8 + bubble.phase) * 6 +
            bubble.oy,
          bubble.radius,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
      // The DiegoCodes D replaces the astronomy logo from the reference.
      const size = height * 0.88;
      context.save();
      context.translate(width * 0.73 - size / 2, height * 0.06);
      context.scale(size / 64, size / 64);
      context.globalCompositeOperation = "destination-out";
      context.fillStyle = "#000";
      context.fill(
        new Path2D(
          "M20 16H34.5C44.7173 16 52 22.2452 52 32C52 41.7548 44.7173 48 34.5 48H20V16ZM32.25 40C38.4272 40 42.5 36.8564 42.5 32C42.5 27.1436 38.4272 24 32.25 24H29.5V40H32.25Z",
        ),
        "evenodd",
      );
      context.restore();
    }

    function stop() {
      window.cancelAnimationFrame(frame);
      frame = 0;
      lastFrame = 0;
    }

    function tick(now: number) {
      frame = window.requestAnimationFrame(tick);
      if (lastFrame && now - lastFrame < 32) return;
      time += lastFrame ? Math.min(now - lastFrame, 64) / 1000 : 0;
      lastFrame = now;
      draw();
    }

    function sync() {
      stop();
      draw();
      if (visible && !paused && !preference.matches && !document.hidden)
        frame = window.requestAnimationFrame(tick);
    }

    function resize() {
      if (!canvas) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      const random = mulberry32(seed);
      bubbles = Array.from(
        { length: Math.min(150, Math.max(40, Math.round(width / 10))) },
        () => ({
          x: random() * width,
          y: random() * height,
          radius: 5 + random() ** 2 * 38,
          color: palette.colors[Math.floor(random() * palette.colors.length)],
          phase: random() * Math.PI * 2,
          speed: 0.25 + random() * 0.5,
          ox: 0,
          oy: 0,
        }),
      ).sort((a, b) => b.radius - a.radius);
      sync();
    }

    function move(event: PointerEvent) {
      if (!canvas) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    }

    function leave() {
      pointer.x = -1000;
      pointer.y = -1000;
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersectionObserver.observe(canvas);
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerleave", leave);
    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, [palette, paused, seed]);

  return <canvas ref={ref} aria-hidden="true" className="astro-band-canvas" />;
}

export default function AstroMissionBand({
  id = "confianca",
  stats,
  bandTitle = "Cada detalhe pensado para o seu negócio",
  palette = diegoPalette,
  backgroundImage = "/projects/universo-mkt-hero.webp",
  seed = 103,
  className = "",
}: AstroMissionBandProps) {
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const headingId = useId();
  const trackId = useId();

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={headingId}
      className={`astro-mission-band ${className}`}
      data-paused={paused}
      data-visible={visible}
    >
      <Image
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="astro-band-backdrop object-cover object-center"
      />
      <Bubbles palette={palette} paused={paused} seed={seed} />
      <div aria-hidden="true" className="astro-band-shade" />
      <div className="container-shell astro-band-heading">
        <h2
          id={headingId}
          className="font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85"
        >
          <span aria-hidden="true" className="astro-band-status" />
          {bandTitle}
        </h2>
        <button
          type="button"
          aria-label={
            paused ? "Reproduzir animação da faixa" : "Pausar animação da faixa"
          }
          aria-controls={trackId}
          onClick={() => setPaused((value) => !value)}
          className="astro-band-toggle"
        >
          {paused ? (
            <Play aria-hidden="true" className="h-3.5 w-3.5" />
          ) : (
            <Pause aria-hidden="true" className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
      <div className="astro-band-viewport" id={trackId}>
        <div className="astro-band-track">
          {[false, true].map((copy) => (
            <ul
              key={String(copy)}
              aria-hidden={copy || undefined}
              className={`astro-band-group ${copy ? "astro-band-copy" : ""}`}
            >
              {stats.map((stat) => {
                const Icon = icons[stat.icon];
                return (
                  <li key={stat.value} className="astro-band-item">
                    <div
                      className={`astro-band-visual ${stat.images?.length ? "astro-band-photos" : ""}`}
                    >
                      {stat.images?.length ? (
                        stat.images.map((image) => (
                          <span key={image.src} className="astro-band-photo">
                            <Image
                              src={image.src}
                              alt={copy ? "" : image.alt}
                              fill
                              sizes="44px"
                              className="object-cover object-top"
                            />
                          </span>
                        ))
                      ) : (
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      )}
                    </div>
                    <div>
                      <p className="astro-band-value font-display">
                        {stat.value}
                      </p>
                      <p className="astro-band-label">{stat.label}</p>
                    </div>
                    <span aria-hidden="true" className="astro-band-star">
                      ✳
                    </span>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
