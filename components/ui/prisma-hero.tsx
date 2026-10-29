"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import ScrollLink from "@/components/ui/ScrollLink";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const backgroundVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      style={style}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={false}
          animate={{ y: isInView ? 0 : 18 }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="prisma-word relative inline-block"
          style={{ marginRight: index === words.length - 1 ? 0 : "0.25em" }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
          {showAsterisk && index === words.length - 1 && (
            <span aria-hidden="true" className="prisma-asterisk">
              ✳
            </span>
          )}
        </motion.span>
      ))}
    </span>
  );
}

interface Segment {
  text: string;
  className?: string;
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
  style,
}: {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      style={style}
    >
      {segments.map((segment, index) => (
        <WordsPullUp
          key={`${segment.text}-${index}`}
          text={segment.text}
          className={segment.className}
        />
      ))}
    </span>
  );
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    let visible = false;

    function syncPlayback() {
      if (!video) return;
      if (
        paused ||
        preference.matches ||
        connection?.saveData ||
        !visible ||
        document.hidden
      ) {
        video.pause();
        return;
      }
      if (!video.getAttribute("src")) video.src = backgroundVideo;
      void video.play().catch(() => undefined);
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video);
    preference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [paused]);

  return (
    <>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        poster="/hero-prisma-poster.webp"
        aria-hidden="true"
        tabIndex={-1}
        className="prisma-video absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-label={
          paused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"
        }
        className="prisma-video-toggle absolute right-5 top-28 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/80 backdrop-blur-sm transition hover:bg-black/45 sm:right-8 sm:top-32"
      >
        {paused ? (
          <Play aria-hidden="true" className="h-3.5 w-3.5" />
        ) : (
          <Pause aria-hidden="true" className="h-3.5 w-3.5" />
        )}
      </button>
    </>
  );
}

export function PrismaHero({
  whatsappUrl = createWhatsAppUrl(),
}: {
  whatsappUrl?: string;
}) {
  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="prisma-hero relative bg-[#08060c] p-2 sm:p-3"
    >
      <div className="prisma-hero-frame relative isolate flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#15101c] sm:rounded-[28px]">
        <HeroVideo />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,5,15,0.38)_0%,rgba(17,7,30,0.12)_35%,rgba(9,5,15,0.86)_78%,rgba(9,5,15,0.98)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(37,15,61,0.3),transparent_60%,rgba(22,10,38,0.2))]"
        />
        <div
          aria-hidden="true"
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light"
        />

        <div className="container-shell relative z-10 mt-auto w-full pb-6 pt-36 sm:pb-8 lg:pt-48">
          <div className="grid items-end gap-7 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)] lg:gap-10">
            <div className="min-w-0">
              <h1
                id="hero-heading"
                className="prisma-hero-title font-display uppercase text-white"
                aria-label="Sites com identidade."
              >
                <WordsPullUp text="Sites com" className="block" />
                <WordsPullUp
                  text="identidade."
                  className="block text-[#d0aceb]"
                  showAsterisk
                />
              </h1>
            </div>

            <div className="max-w-md pb-1 lg:pb-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir conversa no WhatsApp para solicitar orçamento"
                data-track="whatsapp_hero_click"
                data-track-label="hero_primary"
                className="prisma-primary-cta group mt-6 inline-flex min-h-14 items-center gap-5 rounded-full bg-[var(--accent-primary)] py-1.5 pl-6 pr-1.5 font-accent text-xs font-semibold text-white shadow-[0_10px_35px_rgba(123,47,190,0.2)] transition hover:bg-[#9140cb]"
              >
                Vamos criar seu site
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/25 transition-transform group-hover:-rotate-45">
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </a>
              <ScrollLink
                href="#projetos"
                ariaLabel="Ir para a seção de projetos"
                className="mt-4 flex min-h-11 w-fit items-center gap-2.5 font-accent text-xs font-semibold text-white/70 transition hover:text-[var(--success)]"
              >
                Explorar projetos{" "}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </ScrollLink>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/15 pt-5 sm:mt-10">
            <p className="font-accent text-[9px] uppercase tracking-[0.08em] text-white/50 sm:text-[10px] sm:tracking-[0.14em]">
              Sites & landing pages{" "}
              <span
                aria-hidden="true"
                className="mx-2 text-[var(--accent-hover)]"
              >
                /
              </span>{" "}
              Recife, PE
            </p>
            <ScrollLink
              href="#projetos"
              ariaLabel="Rolar para conhecer os projetos"
              className="flex min-h-11 items-center gap-2 font-accent text-[9px] uppercase tracking-[0.08em] text-white/65 sm:text-[10px]"
            >
              Continue explorando{" "}
              <ArrowDownRight
                aria-hidden="true"
                className="h-4 w-4 text-[var(--success)]"
              />
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}
