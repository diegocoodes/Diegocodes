import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const metrics = [
  { value: "20+", label: "projetos entregues" },
  { value: "15d", label: "prazo médio de entrega" },
  { value: "24h", label: "para receber proposta" },
] as const;

const proofCards = [
  {
    title: "NeuroPS",
    description:
      "Portfólio visual com agenda, prova de trabalho e contato direto para novos clientes.",
    label: "Agenda",
    imageSrc: "/testimonials/contact-1.jpg",
  },
  {
    title: "Leandro Holanda",
    description:
      "Página premium para apresentar consultoria, método e acompanhamento fitness.",
    label: "Fitness",
    imageSrc: "/testimonials/contact-2.jpg",
  },
  {
    title: "RastroMoville",
    description:
      "Identidade moderna para explicar tecnologia, frota e desempenho com mais clareza.",
    label: "Frota",
    imageSrc: "/testimonials/contact-4.jpg",
  },
] as const;

const testimonialMessage =
  "Quero agradecer ao Diego pelo excelente trabalho no meu site. Ficou exatamente como eu imaginei: moderno, profissional e com uma identidade que realmente representa minha marca. Desde o atendimento até a entrega final, tudo foi feito com atenção aos detalhes e muita dedicação. Dá para perceber o cuidado em cada parte do projeto.";

export default function SocialProof() {
  return (
    <section
      id="prova-social"
      className="section-space scroll-mt-28 bg-[#f4f3f6] text-[#111111]"
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-end">
          <Reveal>
            <span className="section-kicker text-black/45">Prova social</span>
            <h2 className="section-title mt-5">
              Negócios com apresentação profissional passam mais confiança.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/62 md:text-lg">
              Seu site precisa transmitir confiança nos primeiros segundos. É
              isso que ajuda alguém a chamar no WhatsApp em vez de sair da
              página.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-black/10 bg-white px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)]"
                >
                  <p className="font-display text-[54px] leading-none text-[#111111]">
                    {metric.value}
                  </p>
                  <p className="mt-3 font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-black/48">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)]">
          <Reveal delay={0.12}>
            <div className="h-full overflow-hidden rounded-[28px] border border-black/10 bg-[#0b0f0d] text-white shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
              <div className="flex items-center gap-3 border-b border-white/10 bg-[#111715] px-5 py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7e86b] text-[#111111]">
                  <UserIcon />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-accent text-base font-semibold text-white">
                    RastroMoville
                  </p>
                  <p className="mt-0.5 font-accent text-xs font-medium uppercase tracking-[0.18em] text-[var(--success)]">
                    feedback
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-3 text-white/62">
                  <CameraIcon />
                  <PhoneIcon />
                </div>
              </div>

              <div className="relative min-h-[380px] bg-[#ecece8] p-5">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 top-24 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.16),transparent_36%)]"
                />
                <div className="relative max-w-[94%] rounded-[22px] bg-[#242826] px-5 py-4 shadow-[0_18px_38px_rgba(0,0,0,0.16)]">
                  <p className="text-[15px] leading-7 text-white/92">
                    {testimonialMessage}
                  </p>
                  <p className="mt-2 text-right font-accent text-xs text-white/42">
                    12:40
                  </p>
                </div>
                <div className="relative mt-3 inline-flex items-center gap-2 rounded-full bg-[#242826] px-3 py-1.5 shadow-[0_12px_26px_rgba(0,0,0,0.16)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f23045]" />
                  <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    feedback real
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-white/46">
                    Print de cliente
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/78">
                    Depoimento usado como prova de cuidado, entrega e percepção
                    profissional do projeto.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {proofCards.map((proof, index) => (
              <Reveal key={proof.title} delay={0.16 + index * 0.06}>
                <article className="flex h-full min-h-[300px] flex-col rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_55px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-between gap-3">
                    <Image
                      src={proof.imageSrc}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <span className="rounded-full border border-black/10 px-3 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                      {proof.label}
                    </span>
                  </div>

                  <h3 className="mt-8 font-accent text-2xl font-semibold leading-tight text-[#111111]">
                    {proof.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-8 text-black/64">
                    {proof.description}
                  </p>

                  <div className="mt-7 flex items-center gap-3 border-t border-black/10 pt-5">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
                    <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.22em] text-black/42">
                      Prova visual
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20C5.8 15.8 8.2 14 12 14C15.8 14 18.2 15.8 19 20H5Z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="6.5" width="13" height="11" rx="3" />
      <path d="M16.5 10L21 7.5V16.5L16.5 14" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M7 4L10 7L8.4 9.1C9.4 11.2 11.1 12.9 13.2 14L15.3 12.4L18.3 15.4L16.8 18.2C16.3 19.1 15.2 19.5 14.2 19.2C9.4 17.8 5.2 13.6 3.8 8.8C3.5 7.8 3.9 6.7 4.8 6.2L7 4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
