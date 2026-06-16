import { ArrowDownRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ScrollLink from "@/components/ui/ScrollLink";

type HeroProps = {
  whatsappUrl: string;
};

const floatingCards = [
  {
    label: "Botão para WhatsApp",
    className: "left-4 top-10 md:-left-8 md:top-20",
  },
  {
    label: "Preparado para Google",
    className: "right-4 top-24 md:-right-6 md:top-28",
  },
  {
    label: "Visual profissional",
    className: "left-6 bottom-24 md:-left-10 md:bottom-28",
  },
  {
    label: "Link para bio",
    className: "right-8 bottom-10 md:right-4 md:bottom-16",
  },
] as const;

const previewItems = [
  "Serviços claros",
  "Prova visual",
  "Contato direto",
] as const;

export default function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#050505] pb-12 pt-[92px] md:pb-20 md:pt-32 lg:min-h-screen lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(123,47,190,0.42),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(61,220,132,0.12),transparent_22%),linear-gradient(180deg,#170627_0%,#08050d_48%,#050505_100%)]"
      />
      <div
        aria-hidden="true"
        className="ghost-grid absolute inset-0 opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-22%] h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.32),rgba(147,51,234,0.08)_42%,transparent_72%)]"
      />

      <div className="container-shell relative z-10 flex lg:min-h-[calc(100vh-9rem)] lg:items-center">
        <div className="grid w-full gap-5 md:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] lg:items-center lg:gap-12">
          <Reveal className="order-2 md:order-1">
            <div className="max-w-3xl">
              <h1 className="font-accent text-[clamp(24px,7.5vw,34px)] font-bold leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[68px]">
                <span className="block whitespace-nowrap lg:inline lg:whitespace-normal">
                  Seu negócio precisa{" "}
                </span>
                <span className="block whitespace-nowrap lg:inline lg:whitespace-normal">
                  aparecer melhor online?
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-[15px] leading-6 text-white/68 md:mt-6 md:text-lg md:leading-8">
                Eu crio sites profissionais para você mostrar seus serviços,
                passar mais confiança e receber clientes pelo WhatsApp.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row md:mt-8 md:gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir conversa no WhatsApp para criar um site profissional"
                  data-track="whatsapp_cta_click"
                  data-track-label="hero"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,#7b2fbe,#9b4dca)] px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.08em] text-white shadow-[0_0_30px_rgba(147,51,234,0.38)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_46px_rgba(147,51,234,0.56)] md:min-h-12 md:py-3.5 md:text-sm"
                >
                  Pedir orçamento
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                </a>

                <ScrollLink
                  href="#projetos"
                  ariaLabel="Ir para a seção de projetos"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:border-[var(--success)]/45 hover:text-[var(--success)] md:min-h-12 md:py-3.5 md:text-sm"
                >
                  Ver projetos
                  <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
                </ScrollLink>
              </div>

              <p className="mt-4 font-accent text-xs font-medium leading-5 text-white/50 md:mt-5 md:text-sm">
                Site profissional • WhatsApp direto • Pronto para divulgar
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-[660px] lg:mr-0">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[28px] bg-[rgba(147,51,234,0.18)] blur-[30px] md:-inset-8 md:rounded-[32px] md:bg-[rgba(147,51,234,0.24)] md:blur-[72px]"
              />

              <div className="relative h-[clamp(170px,53vw,210px)] overflow-hidden rounded-[22px] border border-[rgba(155,77,202,0.42)] bg-[rgba(12,12,12,0.92)] p-2 shadow-[0_20px_52px_rgba(0,0,0,0.36),0_0_32px_rgba(123,47,190,0.18)] backdrop-blur-xl md:h-auto md:rounded-[28px] md:border-white/10 md:p-4 md:shadow-[0_36px_110px_rgba(0,0,0,0.36)]">
                <div className="relative h-full overflow-hidden rounded-[16px] border border-white/10 bg-[#0b0b0b] md:aspect-[16/10] md:h-auto md:rounded-[20px]">
                  <Image
                    src="/projects/matheus-personal.png"
                    alt="Prévia desktop do projeto Matheus Personal."
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover object-top opacity-90"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,5,5,0.14)_0%,transparent_48%,rgba(123,47,190,0.22)_100%)]" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#080808]/82 px-3 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/82 shadow-[0_10px_24px_rgba(0,0,0,0.28)] backdrop-blur-md md:left-4 md:top-4 md:px-3.5 md:py-2 md:text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] shadow-[0_0_10px_rgba(61,220,132,0.68)]" />
                    Projeto real
                  </span>
                </div>

                <div className="mt-4 hidden gap-3 md:grid md:grid-cols-3">
                  {previewItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-[16px] border border-white/10 bg-white/[0.04] px-4 py-3"
                    >
                      <span className="block h-1.5 w-8 rounded-full bg-[var(--success)] shadow-[0_0_16px_rgba(61,220,132,0.5)]" />
                      <p className="mt-3 font-accent text-xs font-semibold uppercase tracking-normal text-white/70">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className={`absolute hidden rounded-full border border-white/12 bg-[#0b0b0b]/88 px-4 py-2 font-accent text-[11px] font-semibold uppercase tracking-normal text-white/72 shadow-[0_18px_42px_rgba(0,0,0,0.28)] backdrop-blur lg:block ${card.className}`}
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--success)] shadow-[0_0_12px_rgba(61,220,132,0.72)]" />
                  {card.label}
                </div>
              ))}

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
