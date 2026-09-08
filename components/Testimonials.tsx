"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { proofCards, testimonials } from "@/lib/home-content";

const feedbacks = [
  ...testimonials.map((testimonial) => ({
    label: "Depoimento do cliente",
    name: testimonial.name,
    segment: testimonial.segment,
    projectUrl: testimonial.projectUrl,
    imageSrc: testimonial.imageSrc,
    imageAlt: testimonial.imageAlt,
    text: testimonial.text,
    isQuote: true,
  })),
  ...proofCards.slice(0, 2).map((project) => ({
    label: "Resultado do projeto",
    name: project.title,
    segment: project.segment,
    projectUrl: project.projectUrl,
    imageSrc: project.imageSrc,
    imageAlt: project.imageAlt,
    text: project.description,
    isQuote: false,
  })),
] as const;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeedback = feedbacks[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % feedbacks.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? feedbacks.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % feedbacks.length);
  };

  return (
    <section
      id="depoimentos"
      className="section-space relative scroll-mt-28 overflow-hidden border-t border-[var(--success)]/35 bg-[#070707]"
    >
      <div
        aria-hidden="true"
        className="ghost-grid absolute inset-0 opacity-[0.035] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />

      <div className="container-shell relative z-10">
        <Reveal className="border-b border-white/10 pb-7 sm:pb-9 lg:pb-11">
          <span className="section-kicker text-white/62">
            Feedbacks &amp; resultados
          </span>
          <h2 className="motion-heading mt-4 whitespace-nowrap font-display text-[clamp(16px,4.8vw,78px)] uppercase leading-none tracking-[-0.05em] text-white sm:mt-5">
            Confiança que vira <span className="text-[var(--success)]">parceria.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-6 sm:mt-8" delay={0.04}>
          <div className="overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(120deg,rgba(123,47,190,0.16),rgba(16,16,16,0.98)_42%,rgba(9,9,9,1))]">
            <article
              key={activeFeedback.name}
              aria-live="polite"
              className="testimonial-swap relative grid items-center gap-5 p-5 sm:min-h-[260px] sm:gap-6 sm:p-6 md:grid-cols-[112px_minmax(0,1fr)_auto] md:p-8 lg:gap-9 lg:p-10"
            >
              <Quote
                aria-hidden="true"
                className="absolute right-4 top-4 h-10 w-10 text-[var(--success)]/14 sm:right-5 sm:top-5 sm:h-12 sm:w-12 md:right-8 md:top-8 md:h-16 md:w-16"
              />

              <div className="flex items-center gap-4 md:block">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/18 bg-white sm:h-20 sm:w-20 md:h-24 md:w-24">
                  <Image
                    src={activeFeedback.imageSrc}
                    alt={activeFeedback.imageAlt}
                    fill
                    quality={90}
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="md:mt-4">
                  <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--success)]">
                    {activeFeedback.label}
                  </p>
                  <h3 className="mt-1 font-accent text-lg font-semibold text-white">
                    {activeFeedback.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/44">
                    {activeFeedback.segment}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5 sm:pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="max-w-3xl text-[15px] leading-7 text-white/72 sm:text-base sm:leading-8 md:text-lg md:leading-9">
                  {activeFeedback.isQuote ? `“${activeFeedback.text}”` : activeFeedback.text}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/42 sm:mt-5">
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--success)]"
                  />
                  Projeto real e publicado
                </div>
              </div>

              <a
                href={activeFeedback.projectUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir projeto ${activeFeedback.name}`}
                className="motion-link relative inline-flex min-h-11 shrink-0 items-center gap-2 self-end font-accent text-xs font-semibold text-white transition hover:text-[var(--success)] md:self-center"
              >
                Ver projeto
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5 sm:gap-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Mostrar feedback anterior"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-[var(--success)] hover:text-[var(--success)] sm:h-11 sm:w-11"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2" aria-label="Navegação dos feedbacks">
              {feedbacks.map((feedback, index) => (
                <button
                  key={feedback.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Mostrar feedback de ${feedback.name}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className="inline-flex min-h-10 min-w-10 items-center justify-center sm:min-h-11 sm:min-w-11"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index
                        ? "w-8 bg-[var(--success)]"
                        : "w-2 bg-white/24"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Mostrar próximo feedback"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-[var(--success)] hover:text-[var(--success)] sm:h-11 sm:w-11"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
