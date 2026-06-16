import {
  BadgeCheck,
  Globe2,
  LayoutTemplate,
  MessageCircle,
  MousePointerClick,
  RefreshCw,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type WhyChooseProps = {
  whatsappUrl: string;
};

const differentials = [
  {
    title: "Design profissional",
    description: "Seu site fica com visual premium, organizado e coerente com o seu negócio.",
    icon: <LayoutTemplate aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Foco em conversão",
    description: "Cada seção orienta o visitante para entender a oferta e chamar no contato certo.",
    icon: <MousePointerClick aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Pronto para WhatsApp",
    description: "Botões diretos facilitam o pedido de orçamento e reduzem etapas.",
    icon: <MessageCircle aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Responsivo",
    description: "O layout funciona bem no celular e no desktop, sem perder clareza.",
    icon: <RefreshCw aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Preparado para Google",
    description: "A estrutura básica ajuda o site a ser indexado e compartilhado corretamente.",
    icon: <Globe2 aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Processo simples",
    description: "Você acompanha o projeto com escopo claro, prazo definido e conversa direta.",
    icon: <BadgeCheck aria-hidden="true" className="h-6 w-6" />,
  },
] as const;

export default function WhyChoose({ whatsappUrl }: WhyChooseProps) {
  return (
    <section id="diferenciais" className="section-space scroll-mt-28">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.55fr)] lg:items-end">
          <Reveal>
            <span className="section-kicker">Por que escolher</span>
            <h2 className="section-title mt-5">
              Por que escolher a DiegoCodes?
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Um processo direto para criar uma presença profissional, clara e
                pronta para receber contatos.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Falar com Diego sobre um site profissional"
                data-track="whatsapp_cta_click"
                data-track-label="why_choose"
                className="button-secondary mt-6"
              >
                Quero conversar
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="surface-card flex h-full min-h-[220px] flex-col rounded-[22px] bg-[rgba(17,17,17,0.88)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[var(--accent-hover)]">
                    {item.icon}
                  </div>
                  <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.22em] text-white/36">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-accent text-2xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
