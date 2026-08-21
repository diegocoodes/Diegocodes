import { ArrowDownRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ScrollLink from "@/components/ui/ScrollLink";

type HeroProps = {
  whatsappUrl: string;
};

export default function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#050505] pb-0 pt-[92px] md:pt-32 lg:min-h-screen lg:pt-32"
    >
      <HeroBackground />

      <div className="container-shell relative z-10">
        <div className="grid lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,0.95fr)] lg:items-end lg:gap-4 xl:gap-8">
          <HeroContent whatsappUrl={whatsappUrl} />
          <HeroPortrait />
          <HeroActions
            whatsappUrl={whatsappUrl}
            className="order-2 mt-7 md:hidden"
            mobile
          />
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
        className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#090909_0%,#050505_64%,#050505_100%)]"
      />
      <div
        aria-hidden="true"
        className="hero-wordmark pointer-events-none absolute left-1/2 top-[76%] z-0 w-[150vw] -translate-x-1/2 -translate-y-1/2 select-none text-center font-display text-[72px] uppercase leading-none text-white opacity-[0.035] sm:text-[108px] md:top-[36%] md:text-[158px] md:opacity-[0.045] lg:top-[31%] lg:w-[118vw] lg:text-[204px] lg:opacity-[0.055] xl:text-[242px]"
      >
        <span className="hero-wordmark-text inline-block">DIEGOCODES</span>
      </div>
    </>
  );
}

function HeroContent({ whatsappUrl }: HeroProps) {
  return (
    <div className="relative z-30 order-1 max-w-[610px] md:pb-10 lg:pb-24">
      <Reveal>
        <div className="inline-flex items-center gap-2.5 font-accent text-[11px] font-semibold uppercase tracking-[0.03em] text-[var(--success)] md:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-hover)]" />
          Desenvolvimento web em Recife
        </div>
      </Reveal>

      <Reveal delay={0.09}>
        <h1 className="mt-4 max-w-[680px] font-display text-[52px] uppercase leading-[0.86] text-[#f5f5f5] min-[360px]:text-[58px] min-[390px]:text-[62px] sm:text-[76px] md:mt-5 md:text-[96px] lg:text-[112px] xl:text-[128px] min-[1440px]:text-[136px]">
          <span className="block">VÁ ALÉM DO</span>
          <span className="hero-highlight mt-2 inline-block rounded-[10px] bg-[var(--accent-primary)] px-3.5 py-1.5 text-white md:rounded-xl md:px-5 md:py-2">
            INSTAGRAM.
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.13}>
        <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-[#c8c8ce] md:mt-6 md:text-lg md:leading-8">
          Seu negócio não precisa depender só do Instagram. Eu crio{" "}
          <strong className="font-semibold text-white">sites e landing pages</strong>{" "}
          que apresentam seu trabalho, mostram seus serviços e levam o cliente
          direto para o{" "}
          <strong className="font-semibold text-[var(--success)]">WhatsApp</strong>.
        </p>
      </Reveal>

      <HeroActions whatsappUrl={whatsappUrl} className="hidden md:block" />
    </div>
  );
}

function HeroActions({
  whatsappUrl,
  className,
  mobile = false,
}: HeroProps & {
  className?: string;
  mobile?: boolean;
}) {
  return (
    <Reveal delay={0.17} className={className}>
      <div
        className={`flex flex-col gap-3 ${
          mobile ? "" : "md:mt-8 md:flex-row"
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir conversa no WhatsApp para solicitar orçamento"
          data-track="whatsapp_hero_click"
          data-track-label={mobile ? "hero_mobile_primary" : "hero_primary"}
          className={`button-primary min-h-14 w-full ${mobile ? "" : "attention-once"} ${
            mobile ? "" : "md:w-auto"
          }`}
        >
          Solicitar orçamento
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
        </a>

        <ScrollLink
          href="#projetos"
          ariaLabel="Ir para a seção de projetos"
          className={`button-secondary min-h-14 w-full border-[var(--accent-primary)] bg-transparent text-white hover:border-[var(--accent-hover)] hover:bg-[rgba(123,47,190,0.08)] ${
            mobile ? "" : "md:w-auto"
          }`}
        >
          Ver projetos
          <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
        </ScrollLink>
      </div>
    </Reveal>
  );
}

function HeroPortrait() {
  return (
    <Reveal delay={0.11} fromX={18} fromY={0} className="order-3 lg:order-2">
      <div className="motion-media-frame relative z-20 mx-auto mt-7 h-[280px] w-full max-w-[360px] min-[390px]:h-[300px] md:-mt-6 md:h-[520px] md:max-w-[540px] lg:mt-0 lg:h-[min(82vh,780px)] lg:max-w-[700px]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[57%] h-[58%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(123,47,190,0.08)] blur-[52px] md:top-[54%] md:h-[64%] md:bg-[rgba(123,47,190,0.1)] md:blur-[68px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-6 bottom-0 h-28 rounded-full bg-black/76 blur-2xl"
        />
        <Image
          src="/perfil/diego.png"
          alt="Diego Ewerton, desenvolvedor web e criador da DiegoCodes"
          fill
          priority
          sizes="(min-width: 1280px) 620px, (min-width: 1024px) 48vw, (min-width: 768px) 560px, 96vw"
          className="translate-y-[3%] scale-[1.02] object-contain object-bottom md:translate-y-[4%] md:scale-[1.1] lg:translate-y-[4%] lg:scale-[1.12]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent_0%,rgba(5,5,5,0.2)_34%,#050505_88%)] md:h-36"
        />
      </div>
    </Reveal>
  );
}
