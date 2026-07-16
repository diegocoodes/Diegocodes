import { ArrowDownRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ScrollLink from "@/components/ui/ScrollLink";

type HeroProps = {
  whatsappUrl: string;
};

const projectPreviews = [
  {
    name: "Holanda Personal",
    src: "/projects/holanda-personal-cover.png",
    alt: "Prévia do projeto Holanda Personal em desktop.",
  },
  {
    name: "RastroMoville",
    src: "/projects/rastromoville-cover.png",
    alt: "Prévia do projeto RastroMoville em desktop.",
  },
] as const;

export default function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#050505] pb-14 pt-[104px] md:pb-20 md:pt-32 lg:min-h-screen lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(123,47,190,0.36),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(61,220,132,0.12),transparent_24%),linear-gradient(180deg,#170627_0%,#08050d_46%,#050505_100%)]"
      />
      <div
        aria-hidden="true"
        className="ghost-grid absolute inset-0 opacity-[0.055]"
      />

      <div className="container-shell relative z-10 flex lg:min-h-[calc(100vh-9rem)] lg:items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-center lg:gap-12">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-accent text-sm font-semibold text-[var(--success)] md:text-base">
                Desenvolvimento web em Recife e atendimento online
              </p>

              <h1 className="mt-5 font-accent text-[clamp(34px,9vw,58px)] font-bold leading-[1.05] text-white lg:text-[64px]">
                Transforme seu Instagram em uma estrutura profissional para
                conquistar clientes.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Crio sites e landing pages para profissionais e negócios locais
                apresentarem seus serviços, transmitirem mais confiança e
                receberem contatos pelo WhatsApp.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir conversa no WhatsApp para solicitar orçamento"
                  data-track="whatsapp_hero_click"
                  data-track-label="hero"
                  className="button-primary min-h-12"
                >
                  Solicitar orçamento
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                </a>

                <ScrollLink
                  href="#projetos"
                  ariaLabel="Ir para a seção de projetos"
                  className="button-secondary min-h-12"
                >
                  Ver projetos
                  <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
                </ScrollLink>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/58">
                Projetos personalizados • Responsivo • Integração com WhatsApp
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/52">
                Projetos a partir de 7 dias, conforme o tamanho e a
                complexidade.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mx-auto w-full max-w-[660px] lg:mr-0">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[32px] bg-[rgba(147,51,234,0.22)] blur-[48px]"
              />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(12,12,12,0.92)] p-3 shadow-[0_32px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl md:p-4">
                <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--success)]" />
                  <span className="ml-3 truncate rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/52">
                    diegocodes.com.br/projetos
                  </span>
                </div>

                <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-[#0b0b0b]">
                  <Image
                    src="/projects/matheus-personal.png"
                    alt="Prévia desktop do projeto Matheus Personal."
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,5,5,0.08)_0%,transparent_48%,rgba(123,47,190,0.2)_100%)]" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#080808]/82 px-3 py-1.5 font-accent text-xs font-semibold text-white/82 shadow-[0_10px_24px_rgba(0,0,0,0.28)] backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] shadow-[0_0_10px_rgba(61,220,132,0.68)]" />
                    Projeto real
                  </span>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {projectPreviews.map((project) => (
                    <div
                      key={project.name}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-2"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-black">
                        <Image
                          src={project.src}
                          alt={project.alt}
                          fill
                          sizes="(min-width: 1024px) 22vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <p className="px-2 pt-3 font-accent text-xs font-semibold text-white/68">
                        {project.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
