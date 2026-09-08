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
        <div>
          <Reveal>
            <span className="section-kicker">Como funciona</span>
            <h2 className="motion-heading mt-4 whitespace-nowrap font-display text-[clamp(30px,8.7vw,80px)] uppercase leading-none tracking-[-0.035em] sm:mt-5 sm:text-[clamp(40px,6vw,80px)] sm:leading-[0.9]">Como funciona</h2>
          </Reveal>
        </div>

        <ol className="mt-8 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.05}>
                <article className="motion-card surface-card group flex h-full min-h-[190px] flex-col rounded-md bg-[rgba(17,17,17,0.9)] p-5 sm:min-h-[240px] sm:p-6">
                  <span className="motion-rule h-1 w-14 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-24 group-hover:bg-[var(--success)]" />
                  <h3 className="mt-7 font-display text-lg uppercase leading-tight tracking-[-0.025em] text-white sm:mt-9 sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-8 sm:mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-track="whatsapp_process_click"
            data-track-label="process"
            className="button-primary w-full sm:w-auto"
          >
            Conversar sobre meu projeto
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
