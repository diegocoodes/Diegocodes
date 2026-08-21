import { ArrowUpRight, AtSign, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import MotionWords from "@/components/ui/MotionWords";
import Reveal from "@/components/ui/Reveal";
import { contactConfig } from "@/lib/contact";

type AboutDiegoProps = {
  whatsappUrl: string;
};

const principles = [
  {
    number: "01",
    title: "Clareza antes do código",
    description: "Organizo a mensagem e o caminho do cliente antes de construir a tela.",
  },
  {
    number: "02",
    title: "Design com propósito",
    description: "Cada escolha visual ajuda a posicionar sua marca e facilitar decisões.",
  },
  {
    number: "03",
    title: "Contato sem intermediários",
    description: "Você conversa diretamente comigo durante todo o desenvolvimento.",
  },
] as const;

export default function AboutDiego({ whatsappUrl }: AboutDiegoProps) {
  return (
    <section
      id="sobre"
      className="section-space relative scroll-mt-28 overflow-hidden bg-[#090909]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-48 top-1/3 h-[540px] w-[540px] rounded-full bg-[rgba(123,47,190,0.13)] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 bottom-2 select-none font-display text-[clamp(130px,26vw,390px)] uppercase leading-none text-white/[0.018]"
      >
        sobre
      </div>

      <div className="container-shell relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 font-accent text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--success)]">
            <span className="h-px w-10 bg-[var(--success)]" />
            Por trás da DiegoCodes
          </div>
          <h2 className="mt-6 max-w-[1100px] font-display text-[clamp(55px,9vw,122px)] uppercase leading-[0.84] tracking-[-0.01em] text-white">
            <MotionWords
              words={[
                "Estratégia,",
                "design",
                "e",
                { text: "código.", className: "text-[var(--accent-hover)]" },
              ]}
            />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(360px,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-24">
          <Reveal fromX={-24} fromY={0}>
            <div className="about-portrait motion-media-frame relative mx-auto max-w-[560px] lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-[#111] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
                <Image
                  src="/perfil/diegocomfundo.png"
                  alt="Diego Ewerton, desenvolvedor web e fundador da DiegoCodes."
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <p className="font-display text-4xl uppercase leading-none text-white md:text-5xl">
                    Diego Ewerton
                  </p>
                  <p className="mt-2 font-accent text-xs font-semibold text-white/60">
                    Fundador e desenvolvedor
                  </p>
                </div>
              </div>

              <div className="about-location-float absolute -right-3 top-7 flex items-center gap-2 rounded-full border border-white/12 bg-black/75 px-4 py-3 font-accent text-xs font-semibold text-white/78 shadow-xl backdrop-blur-md sm:-right-5 md:top-10">
                <MapPin aria-hidden="true" className="h-4 w-4 text-[var(--success)]" />
                {contactConfig.location}
              </div>

              <div
                aria-hidden="true"
                className="about-orbit absolute -bottom-5 -left-3 h-24 w-24 rounded-full border border-[var(--accent-hover)]/30 sm:-left-7"
              >
                <span className="absolute inset-3 rounded-full border border-white/10" />
                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--accent-hover)] shadow-[0_0_12px_rgba(155,77,202,0.8)]" />
              </div>
            </div>
          </Reveal>

          <div className="lg:pt-8">
            <Reveal delay={0.05}>
              <p className="max-w-3xl font-accent text-[clamp(26px,3.2vw,44px)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
                Não entrego apenas uma página bonita. Construo uma presença digital
                que explica o seu valor e abre caminho para novos contatos.
              </p>
              <div className="mt-7 max-w-2xl space-y-4 text-base leading-8 text-white/58 md:text-lg">
                <p>
                  Sou Diego Ewerton, desenvolvedor web de Recife e criador da
                  DiegoCodes. Trabalho com profissionais e negócios locais que querem
                  sair da dependência das redes sociais e apresentar seus serviços com
                  mais confiança.
                </p>
                <p>
                  Do primeiro rascunho à publicação, cuido pessoalmente da estratégia,
                  do design e do desenvolvimento do projeto.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 border-t border-white/10">
              {principles.map((principle, index) => (
                <Reveal
                  key={principle.number}
                  delay={0.06 + index * 0.05}
                  fromX={18}
                  fromY={0}
                >
                  <div className="about-principle group grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[52px_minmax(180px,0.7fr)_1fr] sm:items-center sm:gap-5">
                    <span className="font-display text-2xl text-[var(--accent-hover)]">
                      {principle.number}
                    </span>
                    <h3 className="font-accent text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-6 text-white/48">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track="whatsapp_about_click"
                  data-track-label="about"
                  className="button-primary min-h-[52px] w-full sm:w-auto"
                >
                  Vamos criar seu site
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href={contactConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-link inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-7 py-3.5 font-accent text-sm font-semibold text-white transition hover:border-[var(--accent-hover)]/50 hover:bg-white/[0.06] sm:w-auto"
                >
                  <AtSign aria-hidden="true" className="h-4 w-4" />
                  Instagram
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
