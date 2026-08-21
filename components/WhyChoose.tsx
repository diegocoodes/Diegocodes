import { CheckCircle2 } from "lucide-react";
import MotionSurface from "@/components/ui/MotionSurface";
import Reveal from "@/components/ui/Reveal";
import { differentials } from "@/lib/home-content";

export default function WhyChoose() {
  return (
    <section id="diferenciais" className="section-space scroll-mt-28">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.55fr)] lg:items-end">
          <Reveal>
            <span className="section-kicker">Por que escolher</span>
            <h2 className="motion-heading section-title mt-5">
              Projeto direto, sem excesso de etapas.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              Quatro pontos sustentam o processo: conversa direta, visual feito
              para o negócio, acompanhamento claro e página focada em contato.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <MotionSurface className="group flex h-full min-h-[220px] flex-col rounded-[8px] border border-white/10 bg-[rgba(17,17,17,0.88)] p-6 transition-colors duration-300 hover:border-[var(--accent-primary)]/55 hover:bg-[rgba(22,22,22,0.94)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="motion-icon flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--accent-hover)] group-hover:border-[var(--success)]/35 group-hover:text-[var(--success)]">
                    <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="motion-index font-accent text-xs font-semibold text-white/36">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-accent text-lg font-semibold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </MotionSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
