"use client";

import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

function subscribeReducedMotion(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotion() {
  return true;
}

export default function ProjectCarousel({
  children,
  names,
}: {
  children: ReactNode;
  names: string[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playback, setPlaying] = useState<boolean | null>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
  const playing = playback ?? !prefersReducedMotion;
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const count = names.length;

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || hovered || !inView || count < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) goTo((active + 1) % count);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [active, count, goTo, hovered, inView, playing]);

  function navigate(index: number) {
    setPlaying(false);
    goTo((index + count) % count);
  }

  function syncActive() {
    const track = trackRef.current;
    if (!track) return;
    let closestIndex = 0;
    let closestDistance = Infinity;
    Array.from(track.children).forEach((slide, index) => {
      const distance = Math.abs(
        (slide as HTMLElement).offsetLeft - track.offsetLeft - track.scrollLeft,
      );
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActive(closestIndex);
  }

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label="Projetos selecionados"
      className="mt-6 sm:mt-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest("[data-carousel-rotation]"))
          setPlaying(false);
      }}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="font-accent text-xs tabular-nums text-white/55">
          <span className="text-white">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="mx-2 text-white/30">/</span>
          {String(count).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            data-carousel-rotation
            aria-label={playing ? "Pausar carrossel" : "Reproduzir carrossel"}
            onClick={() => setPlaying(!playing)}
            className="project-carousel-control"
            aria-controls="project-carousel-track"
          >
            {playing ? (
              <Pause aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Play aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            aria-label="Projeto anterior"
            onClick={() => navigate(active - 1)}
            className="project-carousel-control"
            aria-controls="project-carousel-track"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Próximo projeto"
            onClick={() => navigate(active + 1)}
            className="project-carousel-control project-carousel-next"
            aria-controls="project-carousel-track"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        id="project-carousel-track"
        ref={trackRef}
        className="project-carousel-track"
        tabIndex={0}
        aria-label="Deslize ou use as setas para navegar pelos projetos"
        onScroll={syncActive}
        onPointerDown={() => setPlaying(false)}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            navigate(active + (event.key === "ArrowRight" ? 1 : -1));
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            navigate(event.key === "Home" ? 0 : count - 1);
          }
        }}
      >
        {Children.map(children, (child, index) => (
          <div className="project-carousel-item" key={names[index]}>
            {child}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-1">
        {names.map((name, index) => (
          <button
            key={name}
            type="button"
            onClick={() => navigate(index)}
            aria-label={`Mostrar projeto ${name}`}
            aria-current={active === index ? "true" : undefined}
            className="project-carousel-dot"
            aria-controls="project-carousel-track"
          >
            <span />
          </button>
        ))}
      </div>
      <p
        className="sr-only"
        aria-live={playing ? "off" : "polite"}
        aria-atomic="true"
      >
        Projeto {active + 1} de {count}: {names[active]}
      </p>
    </div>
  );
}
