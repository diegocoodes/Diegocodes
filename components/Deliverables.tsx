import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { deliverables } from "@/lib/home-content";

export default function Deliverables() {
  return (
    <section
      id="servicos"
      className="section-space scroll-mt-28 bg-[rgba(17,17,17,0.24)]"
    >
      <div className="container-shell">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">Serviços</span>
          <h2 className="section-title mt-5">
            O que está incluso no seu projeto
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            A entrega combina apresentação profissional, estrutura para contato
            e base técnica sem promessas irreais de resultado no Google.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="surface-card flex h-full min-h-[190px] flex-col rounded-2xl bg-[rgba(17,17,17,0.88)] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--success)]/25 bg-[var(--success)]/10 text-[var(--success)]">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-accent text-xl font-semibold leading-tight text-white">
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
