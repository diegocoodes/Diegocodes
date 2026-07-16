import { CheckCircle2, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { differentials } from "@/lib/home-content";

type WhyChooseProps = {
  whatsappUrl: string;
};

export default function WhyChoose({ whatsappUrl }: WhyChooseProps) {
  return (
    <section id="diferenciais" className="section-space scroll-mt-28">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.55fr)] lg:items-end">
          <Reveal>
            <span className="section-kicker">Por que escolher</span>
            <h2 className="section-title mt-5">
              Por que desenvolver seu projeto com a DiegoCodes?
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Um processo próximo, transparente e adaptado ao que seu negócio
                precisa comunicar.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Falar com Diego sobre um site profissional"
                data-track="whatsapp_differentials_click"
                data-track-label="differentials"
                className="button-secondary mt-6"
              >
                Conversar sobre meu projeto
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="surface-card flex h-full min-h-[220px] flex-col rounded-2xl bg-[rgba(17,17,17,0.88)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--accent-hover)]">
                    <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="font-accent text-xs font-semibold text-white/36">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-accent text-xl font-semibold leading-tight text-white">
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
