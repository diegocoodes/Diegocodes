import { ArrowUpRight, AtSign, MessageCircle } from "lucide-react";
import Image from "next/image";
import MotionWords from "@/components/ui/MotionWords";
import Reveal from "@/components/ui/Reveal";
import { contactConfig } from "@/lib/contact";

type AboutDiegoProps = {
  whatsappUrl: string;
};

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
      <div className="container-shell relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 font-accent text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--success)]">
            <span className="h-px w-10 bg-[var(--success)]" />
            Sobre mim
          </div>
          <h2 className="mt-6 max-w-[1100px] font-display text-[clamp(50px,8.5vw,112px)] uppercase leading-[0.86] tracking-[-0.045em] text-white">
            <MotionWords
              words={[
                "Ideias",
                "ganham",
                "força",
                "quando",
                "cada",
                { text: "detalhe", className: "text-[#c99bea]" },
                "tem",
                "intenção.",
              ]}
            />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(340px,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-16 xl:gap-24">
          <Reveal fromX={-24} fromY={0}>
            <div className="about-portrait motion-media-frame relative mx-auto max-w-[520px] lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/10 bg-[#111] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
                <Image
                  src="/perfil/diegocomfundo.png"
                  alt="Diego Ewerton, desenvolvedor web e fundador da DiegoCodes."
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <p className="font-display text-4xl uppercase leading-none tracking-[-0.035em] text-white md:text-5xl">
                    Diego Ewerton
                  </p>
                  <p className="mt-2 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white/54">
                    Fundador e desenvolvedor
                  </p>
                </div>
              </div>

            </div>
          </Reveal>

          <div>
            <Reveal delay={0.05} fromX={20} fromY={0}>
              <p className="max-w-3xl font-accent text-[clamp(28px,3.5vw,48px)] font-medium leading-[1.15] tracking-[-0.035em] text-white">
                Sou Diego Ewerton, desenvolvedor web e criador da DiegoCodes.
                Transformo ideias em sites claros, atuais e preparados para conectar
                marcas às pessoas certas.
              </p>
            </Reveal>

            <Reveal delay={0.1} fromX={20} fromY={0}>
              <div className="mt-8 max-w-2xl border-l border-[var(--accent-hover)]/55 pl-6 text-base leading-8 text-white/60 md:pl-8 md:text-lg">
                <p>
                  Participo de todo o processo: entendo o objetivo, organizo o
                  conteúdo, desenho a experiência e desenvolvo a solução até a
                  publicação. Cada entrega mantém intenção, consistência e cuidado do
                  primeiro rascunho ao site no ar.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14} className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track="whatsapp_about_click"
                  data-track-label="about"
                  className="button-primary min-h-[52px] w-full sm:w-auto"
                >
                  Vamos conversar
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href={contactConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-link inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.035] px-7 py-3.5 font-accent text-sm font-semibold text-white transition hover:border-[var(--accent-hover)]/50 hover:bg-white/[0.06] sm:w-auto"
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
