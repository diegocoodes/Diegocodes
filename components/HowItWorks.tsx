import { MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/home-content";

type HowItWorksProps = {
  whatsappUrl: string;
};

export default function HowItWorks({ whatsappUrl }: HowItWorksProps) {
  return (
    <section id="processo" className="section-space scroll-mt-28">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.55fr)] lg:items-end">
          <Reveal>
            <span className="section-kicker">Como funciona</span>
            <h2 className="section-title mt-5">Como funciona</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              Um fluxo simples para sair da conversa inicial até um site
              revisado, publicado e pronto para divulgação.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="surface-card flex h-full min-h-[250px] flex-col rounded-2xl bg-[rgba(17,17,17,0.9)] p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-6xl leading-none text-[var(--accent-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-8 font-accent text-xl font-semibold leading-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-track="whatsapp_process_click"
            data-track-label="process"
            className="button-primary"
          >
            Conversar sobre meu projeto
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
