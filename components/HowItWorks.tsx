import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Conversa",
    description: "Você me conta sobre seu negócio e o que precisa.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M7 8H17M7 12H13M7 16H11" strokeLinecap="round" />
        <path
          d="M6 4H18C19.1 4 20 4.9 20 6V15C20 16.1 19.1 17 18 17H11L7 20V17H6C4.9 17 4 16.1 4 15V6C4 4.9 4.9 4 6 4Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Orçamento",
    description: "Você recebe uma proposta clara em até 24 horas.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M12 3V21M17 7H9.5C8.1 7 7 8.1 7 9.5C7 10.9 8.1 12 9.5 12H14.5C15.9 12 17 13.1 17 14.5C17 15.9 15.9 17 14.5 17H7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Construção",
    description: "Você acompanha cada etapa do projeto pelo WhatsApp.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M4 18L9 13L12 16L20 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8H20V13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "No ar",
    description: "Seu site é entregue, testado e pronto para funcionar.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 4V20M4 12H20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-space scroll-mt-28">
      <div className="container-shell">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">Como funciona</span>
          <h2 className="section-title mt-5">
            Do orçamento ao ar. Sem enrolação.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 xl:grid-cols-[minmax(0,1.55fr)_320px]">
          <div className="relative">
            <div className="pointer-events-none absolute left-8 right-8 top-16 hidden h-px bg-white/10 xl:block" />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <article className="surface-card relative flex min-h-[290px] flex-col overflow-hidden bg-[rgba(17,17,17,0.9)] p-6">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="flex items-start justify-between">
                      <span className="font-display text-6xl leading-none text-[var(--accent-primary)]">
                        {step.number}
                      </span>
                      <span className="mt-1 text-white/70">{step.icon}</span>
                    </div>

                    <div className="mt-10 flex-1">
                      <h3 className="font-accent text-2xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-8 h-px w-full bg-white/8" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.18}>
            <aside className="surface-card flex h-full min-h-[290px] flex-col justify-between overflow-hidden bg-[var(--bg-panel)] p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-3.5 w-3.5 animate-pulse-soft rounded-full bg-[var(--success)]" />
                  <span className="font-accent text-xs font-semibold uppercase tracking-[0.3em] text-[var(--success)]">
                    Prazo médio
                  </span>
                </div>
                <h3 className="mt-8 font-display text-[64px] uppercase leading-none text-white">
                  15 dias
                </h3>
                <p className="mt-4 max-w-xs text-base leading-7 text-[var(--text-secondary)]">
                  Prazo médio de entrega: 15 dias úteis, com alinhamento claro
                  desde o primeiro contato.
                </p>
              </div>

              <div className="mt-10 rounded-[22px] border border-white/10 bg-black/20 p-5">
                <p className="font-accent text-sm font-semibold uppercase tracking-[0.22em] text-white">
                  Transparência total
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  Escopo definido, proposta objetiva e acompanhamento contínuo
                  pelo WhatsApp.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
