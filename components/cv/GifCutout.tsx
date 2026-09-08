"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const characters = {
  gengar: {
    name: "Gengar",
    series: "Pokémon",
    source:
      "https://tenor.com/view/gengar-dance-gengar-dance-pokemon-gif-12962119049989114711",
  },
  gojo: {
    name: "Gojo",
    series: "Jujutsu Kaisen",
    source: "https://tenor.com/view/gojo-satoru-proud-smile-gif-25209796",
  },
  raven: {
    name: "Ravena",
    series: "Teen Titans",
    source:
      "https://tenor.com/view/peeking-raven-teen-titans-og-glancing-sneaking-a-look-gif-13012038005072229252",
  },
};

export default function GifCutout({
  character,
  className = "",
}: {
  character: keyof typeof characters;
  className?: string;
}) {
  const { name, series, source } = characters[character];
  const ref = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const element = ref.current;
    if (!element) return;
    // Start only when the cutout is in view. A static poster is the SSR default.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!motion.matches) setPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    const stop = () => setPlaying(false);
    motion.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", stop);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    // Short bursts avoid an endless animation beside the résumé text.
    const timeout = window.setTimeout(() => setPlaying(false), 4800);
    return () => window.clearTimeout(timeout);
  }, [playing]);

  return (
    <figure ref={ref} className={`cv-cutout cv-screen-only ${className}`}>
      <div className="cv-cutout-media">
        {/* GIFs are served locally; the poster also provides a real pause state. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/cv/${character}.${playing ? "gif" : "webp"}`}
          alt={`${name}, de ${series}`}
          width={280}
          height={180}
          loading="lazy"
          decoding="async"
          onError={() => setPlaying(false)}
        />
        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          aria-label={`${playing ? "Pausar" : "Animar"} GIF de ${name}`}
          aria-pressed={playing}
        >
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
      </div>
      <figcaption>
        <span>
          {name} <span className="cv-cutout-series">/ {series}</span>
        </span>
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          aria-label={`Fonte do GIF de ${name} no Tenor`}
        >
          Tenor ↗
        </a>
      </figcaption>
    </figure>
  );
}
