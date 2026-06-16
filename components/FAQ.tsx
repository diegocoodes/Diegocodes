"use client";

import { useId, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import ScrollLink from "@/components/ui/ScrollLink";

const faqs = [
  {
    question: "Preciso pagar mensalidade?",
    answer:
      "Não há mensalidade obrigatória pelo site. Custos de domínio, hospedagem ou manutenção são combinados de forma clara antes do projeto começar.",
  },
  {
    question: "O site é preparado para Google?",
    answer:
      "Sim. A entrega inclui estrutura técnica, performance e SEO básico para indexação. O posicionamento depende de concorrência, conteúdo e tempo de busca.",
  },
  {
    question: "Você faz manutenção?",
    answer:
      "Sim. Posso cuidar de ajustes, melhorias, novas seções e atualizações depois da entrega, conforme a necessidade do seu negócio.",
  },
  {
    question: "Posso parcelar?",
    answer:
      "Sim. O parcelamento pode ser combinado na proposta, junto com escopo, prazo e forma de pagamento.",
  },
  {
    question: "Preciso já ter logo e identidade visual?",
    answer:
      "Não precisa. Se você ainda não tiver uma identidade pronta, o site pode ser criado com uma direção visual premium e coerente para o seu nicho.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. O layout é responsivo e pensado para funcionar bem no celular, onde a maioria dos clientes pesquisa e chama no WhatsApp.",
  },
  {
    question: "Você conecta WhatsApp e Instagram?",
    answer:
      "Sim. Os botões podem abrir conversa no WhatsApp com mensagem pronta, além de conectar Instagram e outros canais importantes.",
  },
  {
    question: "Em quanto tempo posso começar a receber contatos?",
    answer:
      "Assim que o site estiver no ar, ele já pode receber contatos pelos botões e formulários. O crescimento pelo Google depende de indexação, busca local e divulgação.",
  },
] as const;

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqs[0]?.question ?? null
  );
  const headingId = useId();

  return (
    <section
      id="faq"
      className="section-space scroll-mt-28"
      aria-labelledby={headingId}
    >
      <div className="container-shell">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">FAQ</span>
          <h2 id={headingId} className="section-title mt-5">
            Perguntas antes de fechar.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.06}>
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
    <div className="rounded-[24px] border border-white/10 bg-[rgba(17,17,17,0.9)] p-6">
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
        hidden={!isOpen}
      >
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
