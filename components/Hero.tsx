import { ArrowDownRight, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ScrollLink from "@/components/ui/ScrollLink";

type HeroProps = {
  whatsappUrl: string;
};

const trustItems = [
  "Atendimento direto com o desenvolvedor",
  "Recife e atendimento online",
  "Projetos personalizados",
  "Proposta em até 24 horas",
] as const;

export default function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden bg-[#050505] pb-14 pt-[104px] md:pb-16 md:pt-32 lg:min-h-screen lg:pt-32"
    >
      <HeroBackground />

      <div className="container-shell relative z-10">
        <div className="grid gap-9 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[minmax(0,0.94fr)_minmax(260px,0.78fr)_minmax(250px,0.58fr)] lg:items-center lg:gap-6 xl:gap-10">
          <HeroContent whatsappUrl={whatsappUrl} />
          <HeroPortrait />
          <HeroTrustCard whatsappUrl={whatsappUrl} />
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_22%_22%,rgba(123,47,190,0.24),transparent_32%),radial-gradient(circle_at_76%_28%,rgba(61,220,132,0.08),transparent_22%),linear-gradient(180deg,#0b0b0f_0%,#050505_58%,#050505_100%)]"
      />
      <div
        aria-hidden="true"
        className="ghost-grid absolute inset-0 z-0 opacity-[0.035]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[58%] z-0 w-[160vw] -translate-x-1/2 -translate-y-1/2 select-none text-center font-display text-[clamp(72px,22vw,250px)] uppercase leading-none text-white/70 md:top-[51%] lg:w-[112vw] lg:text-[clamp(130px,18vw,270px)]"
      >
        DIEGOCODES
      </div>
    </>
  );
}

function HeroContent({ whatsappUrl }: HeroProps) {
  return (
    <div className="relative z-30 order-1 max-w-[580px]">
      <Reveal>
        <div className="inline-flex items-center gap-3 font-accent text-xs font-semibold uppercase text-[var(--success)] md:text-sm">
          <span className="h-2 w-2 rounded-full bg-[var(--accent-hover)] shadow-[0_0_18px_rgba(155,77,202,0.72)]" />
          Desenvolvimento web em Recife
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-accent text-xs font-semibold text-white/66">
          Sites estratégicos, responsivos e personalizados.
        </p>
      </Reveal>

      <Reveal delay={0.09}>
        <h1 className="mt-5 font-accent text-[clamp(40px,10vw,62px)] font-bold leading-[0.98] text-[#f5f5f5] md:text-[clamp(52px,6vw,86px)]">
          Seu negócio merece mais do que apenas um perfil no Instagram.
        </h1>
      </Reveal>

      <Reveal delay={0.13}>
        <p className="mt-6 max-w-[540px] text-base leading-8 text-[#a5a5ad] md:text-lg">
          Crio sites e landing pages para profissionais e negócios locais
          apresentarem seus serviços, transmitirem mais confiança e receberem
          contatos pelo WhatsApp.
        </p>
      </Reveal>

      <Reveal delay={0.17}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir conversa no WhatsApp para solicitar orçamento"
            data-track="whatsapp_hero_click"
            data-track-label="hero_primary"
            className="button-primary min-h-12 w-full shadow-[0_18px_40px_rgba(123,47,190,0.3)] hover:-translate-y-0.5 sm:w-auto"
          >
            Solicitar orçamento
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
          </a>

          <ScrollLink
            href="#projetos"
            ariaLabel="Ir para a seção de projetos"
            className="button-secondary min-h-12 w-full sm:w-auto"
          >
            Ver projetos
            <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
          </ScrollLink>
        </div>
      </Reveal>

      <Reveal delay={0.21}>
        <p className="mt-5 max-w-[540px] text-sm leading-6 text-white/56">
          Proposta em até 24 horas • Atendimento direto comigo
        </p>
      </Reveal>
    </div>
  );
}

function HeroPortrait() {
  return (
    <Reveal delay={0.11} className="order-2">
      <div className="relative z-20 mx-auto h-[340px] w-full max-w-[360px] md:h-[430px] md:max-w-[430px] lg:h-[min(68vh,660px)] lg:max-w-[480px]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[52%] h-[74%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(123,47,190,0.24)] blur-[56px]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[18%] right-[16%] h-16 w-16 rounded-full bg-[rgba(61,220,132,0.16)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-8 bottom-0 h-24 rounded-full bg-black/70 blur-2xl"
        />
        <Image
          src="/perfil/diego.png"
          alt="Diego Ewerton, desenvolvedor web e criador da DiegoCodes"
          fill
          priority
          sizes="(min-width: 1280px) 430px, (min-width: 1024px) 34vw, 86vw"
          className="object-contain object-bottom drop-shadow-[0_28px_60px_rgba(0,0,0,0.38)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,#050505_86%)]"
        />
      </div>
    </Reveal>
  );
}

function HeroTrustCard({ whatsappUrl }: HeroProps) {
  return (
    <Reveal delay={0.16} className="order-3">
      <aside className="relative z-30 rounded-[22px] border border-white/10 bg-black/45 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 hover:border-[var(--accent-hover)]/35 hover:bg-black/55 lg:ml-auto lg:max-w-[300px]">
        <div
          aria-hidden="true"
          className="absolute -inset-5 -z-10 rounded-[28px] bg-[rgba(123,47,190,0.14)] blur-2xl"
        />
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--success)] shadow-[0_0_14px_rgba(61,220,132,0.85)] motion-safe:animate-pulse-soft" />
          <p className="font-accent text-xs font-semibold text-white/78">
            Disponível para novos projetos
          </p>
        </div>

        <ul className="mt-5 grid gap-3">
          {trustItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/68">
              <CheckCircle2
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 text-[var(--success)]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar agora com Diego pelo WhatsApp"
          data-track="whatsapp_hero_click"
          data-track-label="hero_trust_card"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--success)]/25 bg-[var(--success)]/10 px-5 py-3 font-accent text-xs font-semibold text-[var(--success)] transition duration-300 hover:border-[var(--success)]/55 hover:bg-[var(--success)]/15"
        >
          Conversar agora
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
        </a>
      </aside>
    </Reveal>
  );
}
