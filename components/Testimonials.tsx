"use client";

import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { proofCards, testimonials } from "@/lib/home-content";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];
  const hasMultipleTestimonials = testimonials.length > 1;

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="depoimentos"
      className="section-space scroll-mt-28 overflow-hidden border-t border-[var(--success)]/35 bg-[#070707]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 select-none whitespace-nowrap font-display text-[92px] uppercase leading-none tracking-normal text-white/[0.025] sm:text-[150px] lg:text-[200px]"
      >
        EXPERIÊNCIAS
      </div>

      <div className="container-shell relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-3 font-accent text-xs font-semibold uppercase text-white/62">
            <span className="h-px w-8 bg-[var(--success)]" />
            Depoimentos
            <span className="h-px w-8 bg-[var(--success)]" />
          </span>
          <h2 className="mt-5 font-accent text-[40px] font-bold leading-[0.98] text-white sm:text-[52px] lg:text-[60px]">
            Experiências de <span className="text-[var(--success)]">clientes</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Feedbacks reais de quem teve um projeto desenvolvido pela DiegoCodes.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <div
            aria-live="polite"
            className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(145deg,rgba(24,24,24,0.96),rgba(10,10,10,0.98))] p-6 md:p-8 lg:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-8 h-24 w-1 bg-[var(--success)] shadow-[0_0_18px_rgba(61,220,132,0.42)]"
            />

            <div className="grid gap-7 md:grid-cols-[190px_minmax(0,1fr)] md:items-start lg:gap-10">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-white p-2 md:h-24 md:w-24">
                  <Image
                    src={activeTestimonial.imageSrc}
                    alt={activeTestimonial.imageAlt}
                    width={96}
                    height={96}
                    quality={92}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-accent text-xl font-semibold text-white">
                    {activeTestimonial.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/52">
                    {activeTestimonial.segment}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-2 font-accent text-xs font-semibold text-[var(--success)]">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                    Projeto publicado
                  </p>
                </div>
              </div>

              <div className="relative border-t border-white/8 pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-10">
                <Quote
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-9 w-9 text-[var(--success)]/72"
                />
                <blockquote className="max-w-3xl pr-10 text-base leading-8 text-white/72 md:text-lg md:leading-9">
                  “{activeTestimonial.text}”
                </blockquote>

                <a
                  href={activeTestimonial.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver o projeto ${activeTestimonial.project}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 border-t border-white/8 pt-5 font-accent text-sm font-semibold text-white/62 transition hover:text-[var(--success)]"
                >
                  Ver projeto relacionado
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-5 flex items-center justify-center gap-4"
            aria-label="Navegação dos depoimentos"
          >
            <button
              type="button"
              onClick={showPrevious}
              disabled={!hasMultipleTestimonials}
              aria-label="Mostrar depoimento anterior"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-[var(--success)] hover:text-[var(--success)] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2" aria-label="Indicadores de depoimentos">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Mostrar depoimento ${index + 1} de ${testimonials.length}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-[var(--success)]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              disabled={!hasMultipleTestimonials}
              aria-label="Mostrar próximo depoimento"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-[var(--success)] hover:text-[var(--success)] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="section-kicker">Portfólio</span>
              <h3 className="mt-3 font-accent text-2xl font-semibold text-white md:text-3xl">
                Outros projetos desenvolvidos
              </h3>
            </div>
            <p className="max-w-lg text-sm leading-6 text-white/52">
              Soluções publicadas para profissionais e empresas de diferentes segmentos.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {proofCards.map((project) => (
              <a
                key={project.title}
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir o projeto ${project.title} em uma nova aba`}
                className="group overflow-hidden rounded-[12px] border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-[var(--success)]/38"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 31vw, 100vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <h4 className="font-accent text-base font-semibold text-white">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-white/48">
                      {project.segment}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-accent text-[11px] font-semibold text-[var(--success)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                    Publicado
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
