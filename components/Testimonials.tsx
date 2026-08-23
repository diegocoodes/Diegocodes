"use client";

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/home-content";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragOffsetRef = useRef(0);
  const activeTestimonial = testimonials[activeIndex];
  const hasMultipleTestimonials = testimonials.length > 1;

  const showPrevious = () => {
    if (!hasMultipleTestimonials) {
      return;
    }

    setSlideDirection("previous");
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNext = () => {
    if (!hasMultipleTestimonials) {
      return;
    }

    setSlideDirection("next");
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (!hasMultipleTestimonials) {
      return;
    }

    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null || !hasMultipleTestimonials) {
      return;
    }

    const offset = event.clientX - dragStartX.current;
    const constrainedOffset = Math.max(-72, Math.min(72, offset));
    dragOffsetRef.current = constrainedOffset;
    setDragOffset(constrainedOffset);
  }

  function finishDrag() {
    if (dragOffsetRef.current <= -42) {
      showNext();
    } else if (dragOffsetRef.current >= 42) {
      showPrevious();
    }

    dragStartX.current = null;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    setIsDragging(false);
  }

  return (
    <section
      id="depoimentos"
      className="section-space scroll-mt-28 overflow-hidden border-t border-[var(--success)]/35 bg-[#070707]"
    >
      <div className="container-shell relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="section-kicker text-white/62">Depoimentos</span>
          <h2 className="motion-heading mt-5 font-display text-[42px] uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-[58px] lg:text-[72px]">
            Experiências de <span className="text-[var(--success)]">clientes</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Feedbacks reais de quem teve um projeto desenvolvido pela DiegoCodes.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <div
            aria-live="polite"
            className={`relative overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(145deg,rgba(24,24,24,0.96),rgba(10,10,10,0.98))] p-6 md:p-8 lg:p-10 ${
              hasMultipleTestimonials ? "cursor-grab touch-pan-y active:cursor-grabbing" : ""
            }`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
          >
            <span
              aria-hidden="true"
              className="motion-rule-vertical absolute left-0 top-8 h-24 w-1 origin-top bg-[var(--success)]"
            />

            <div
              className="testimonial-drag"
              style={{
                transform: `translate3d(${dragOffset}px, 0, 0)`,
                opacity: 1 - Math.abs(dragOffset) / 240,
                transition: isDragging ? "none" : undefined,
              }}
            >
              <div
                key={activeTestimonial.name}
                data-direction={slideDirection}
                className="testimonial-swap grid gap-7 md:grid-cols-[190px_minmax(0,1fr)] md:items-start lg:gap-10"
              >
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
          </div>

          {hasMultipleTestimonials ? (
            <div
              className="mt-5 flex items-center justify-center gap-4"
              aria-label="Navegação dos depoimentos"
            >
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Mostrar depoimento anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-[var(--success)] hover:text-[var(--success)]"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2" aria-label="Indicadores de depoimentos">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => {
                      setSlideDirection(index >= activeIndex ? "next" : "previous");
                      setActiveIndex(index);
                    }}
                    aria-label={`Mostrar depoimento ${index + 1} de ${testimonials.length}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition ${
                      activeIndex === index
                        ? "text-[var(--success)]"
                        : "text-white/30 hover:text-white/60"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2.5 rounded-full bg-current transition-all ${
                        activeIndex === index ? "w-8" : "w-2.5"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Mostrar próximo depoimento"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-[var(--success)] hover:text-[var(--success)]"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          ) : null}
        </Reveal>

      </div>
    </section>
  );
}
