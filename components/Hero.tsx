import { ArrowDownRight, ArrowUpRight, MessageCircle } from "lucide-react";
import HeroWaves from "@/components/ui/HeroWaves";
import ScrollLink from "@/components/ui/ScrollLink";

type HeroProps = {
  whatsappUrl: string;
};

export default function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden border-b border-white/[0.08] bg-[#050308] px-0 pb-14 pt-28 md:pb-20 md:pt-32"
    >
      <HeroBackground />

      <div className="container-shell relative z-20 flex w-full justify-center">
        <div className="mx-auto flex max-w-[1040px] flex-col items-center text-center">
          <div>
            <h1 className="hero-new-title max-w-[1100px] font-display text-[clamp(35px,9.6vw,126px)] uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-[clamp(40px,11vw,126px)] sm:leading-[0.84]">
              <span className="block">
                Sites que <span className="text-[#c99bea]">transformam</span>
              </span>
            </h1>
          </div>

          <div>
            <p className="mt-6 max-w-[720px] text-sm leading-6 text-white/68 sm:mt-10 sm:text-base sm:leading-7 md:text-lg md:leading-8">
              Estratégia, identidade e tecnologia reunidas em experiências digitais
              que apresentam o seu valor, fortalecem sua marca e aproximam novos
              clientes.
            </p>
          </div>

          <HeroActions whatsappUrl={whatsappUrl} />

          <div className="mt-10 sm:mt-12">
            <ScrollLink
              href="#projetos"
              ariaLabel="Conhecer os projetos selecionados"
              className="group inline-flex min-h-11 items-center gap-2 px-2 font-accent text-[11px] font-semibold uppercase tracking-[0.05em] text-white/65 transition hover:text-white"
            >
              Conheça o trabalho
              <ArrowDownRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
              />
            </ScrollLink>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 z-20 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-white/30 to-transparent"
      />
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0">
      <HeroWaves />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,3,8,0.08)_0%,rgba(5,3,8,0.38)_48%,rgba(5,3,8,0.74)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,8,0.48)_0%,rgba(5,3,8,0.06)_46%,rgba(5,3,8,0.74)_100%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.11] mix-blend-soft-light" />
    </div>
  );
}

function HeroActions({ whatsappUrl }: HeroProps) {
  return (
    <div>
      <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir conversa no WhatsApp para solicitar orçamento"
          data-track="whatsapp_hero_click"
          data-track-label="hero_primary"
          className="button-primary attention-once min-h-14 w-full max-w-[320px] border border-white/10 shadow-[0_16px_42px_rgba(74,24,120,0.34)] sm:w-auto sm:max-w-none"
        >
          Solicitar orçamento
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
        </a>

        <ScrollLink
          href="#projetos"
          ariaLabel="Ir para a seção de projetos"
          className="motion-link inline-flex min-h-14 w-full max-w-[320px] items-center justify-center gap-3 rounded-md border border-white/18 bg-black/20 px-8 py-3.5 font-accent text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/42 hover:bg-white/[0.08] sm:w-auto sm:max-w-none"
        >
          Ver projetos
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </ScrollLink>
      </div>
    </div>
  );
}
