"use client";

import { useId, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import ScrollLink from "@/components/ui/ScrollLink";
import { faqs } from "@/lib/home-content";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqs[0]?.question ?? null
  );
  const headingId = useId();

  return (
    <section
      id="perguntas"
      className="section-space scroll-mt-28"
      aria-labelledby={headingId}
    >
      <div className="container-shell">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">FAQ</span>
          <h2 id={headingId} className="motion-heading section-title mt-5">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={Math.min(index * 0.035, 0.16)}>
              <FAQItem
                faq={faq}
                index={index}
                isOpen={openQuestion === faq.question}
                onToggle={() =>
                  setOpenQuestion((current) =>
                    current === faq.question ? null : faq.question
                  )
                }
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <ScrollLink
            href="#topo"
            ariaLabel="Voltar ao topo da página"
            className="button-secondary"
          >
            Voltar ao topo
          </ScrollLink>
        </Reveal>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const buttonId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={`faq-shell rounded-2xl border bg-[rgba(17,17,17,0.9)] p-6 ${
        isOpen ? "border-[var(--accent-primary)]/45" : "border-white/10"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-center justify-between gap-6 text-left font-accent text-xl font-semibold text-white"
          onClick={onToggle}
        >
          <span>{faq.question}</span>
          <span
            aria-hidden="true"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--accent-hover)] transition-transform ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        data-open={isOpen}
        className="faq-answer-grid"
      >
        <div className="faq-answer-inner">
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
