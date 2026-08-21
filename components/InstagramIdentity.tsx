import { AtSign, MessageCircle } from "lucide-react";
import Image from "next/image";
import MotionWords from "@/components/ui/MotionWords";
import Reveal from "@/components/ui/Reveal";

type InstagramIdentityProps = {
  whatsappUrl: string;
};

const identityProjects = [
  {
    name: "DiegoCodes",
    niche: "Tecnologia e criação",
    imageSrc: "/projects/diegocodesidentidade.png",
    imageAlt:
      "Identidade visual do Instagram da DiegoCodes com publicações em preto, roxo e verde",
    accentClassName: "text-[var(--success)]",
    palette: ["#7b2fbe", "#35d58b", "#111111"],
    deliverables: ["Direção de arte", "Feed editorial", "Destaques"],
  },
  {
    name: "Delivery do Bigode",
    niche: "Gastronomia",
    imageSrc: "/projects/bigodeidentidade.png",
    imageAlt:
      "Identidade visual do Instagram do Delivery do Bigode em amarelo e preto",
    accentClassName: "text-[#ffd33d]",
    palette: ["#f5c518", "#db612d", "#111111"],
    deliverables: ["Paleta de marca", "Templates", "Conteúdo"],
  },
  {
    name: "Grupo AD",
    niche: "Tecnologia para varejo",
    imageSrc: "/projects/grupoadidentidade.png",
    imageAlt:
      "Identidade visual corporativa do Instagram do Grupo AD em preto e branco",
    accentClassName: "text-white/72",
    palette: ["#eeeeee", "#777777", "#111111"],
    deliverables: ["Sistema visual", "Conteúdo B2B", "Consistência"],
  },
  {
    name: "Holanda Personal",
    niche: "Saúde e performance",
    imageSrc: "/projects/identidadeholanda.png",
    imageAlt:
      "Identidade visual do Instagram da Holanda Personal em preto e laranja",
    accentClassName: "text-[#ff6b2c]",
    palette: ["#f26a2e", "#f4f4f4", "#111111"],
    deliverables: ["Direção de arte", "Feed", "Destaques"],
  },
] as const;

export default function InstagramIdentity({
  whatsappUrl,
}: InstagramIdentityProps) {
  return (
    <section
      id="identidade-instagram"
      className="section-space scroll-mt-28 overflow-hidden border-y border-white/[0.06] bg-[#090909]"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[rgba(123,47,190,0.13)] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="ghost-grid absolute inset-0 opacity-[0.045]"
      />

      <div className="container-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.55fr)] lg:items-end">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-accent text-xs font-semibold uppercase tracking-[0.16em] text-white/52">
              <AtSign
                aria-hidden="true"
                className="h-4 w-4 text-[var(--accent-secondary)]"
              />
              Identidade visual para Instagram
            </span>
            <h2 className="motion-heading mt-5 max-w-4xl font-accent text-[clamp(38px,6.6vw,76px)] font-bold leading-[0.94] tracking-[-0.045em] text-white">
              <MotionWords
                words={[
                  "Perfis",
                  "que",
                  "parecem",
                  { text: "marca", className: "text-[var(--success)]" },
                  "—",
                  "não",
                  "apenas",
                  "posts.",
                ]}
              />
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              Direção visual, paleta, tipografia e uma linha de conteúdo coerente
              para transformar cada visita ao perfil em percepção de valor.
            </p>
            <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
              <strong className="font-display text-5xl font-normal leading-none text-white">
                04
              </strong>
              <span className="max-w-32 font-accent text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-white/42">
                universos visuais criados
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:mt-12 md:grid-cols-2 lg:gap-7">
          {identityProjects.map((project, index) => (
            <Reveal
              key={project.name}
              className="h-full min-w-0"
              delay={index * 0.055}
              fromY={28}
            >
              <article className="motion-card group flex h-full flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#0d0d0d] shadow-[0_22px_70px_rgba(0,0,0,0.18)] hover:border-[rgba(155,77,202,0.42)] sm:rounded-[20px]">
                <div className="motion-media-frame ghost-grid relative aspect-[7/5] shrink-0 overflow-hidden border-b border-white/[0.07] bg-[#050505]">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    quality={92}
                    sizes="(min-width: 1280px) 590px, (min-width: 768px) calc(50vw - 42px), calc(100vw - 40px)"
                    className="z-10 object-contain transition duration-700 ease-out group-hover:scale-[1.012]"
                  />
                  <div className="pointer-events-none absolute inset-0 z-20 ring-1 ring-inset ring-white/[0.035]" />
                </div>

                <div className="flex min-h-[164px] flex-1 flex-col p-4 sm:min-h-[172px] sm:p-5 lg:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] font-display text-2xl leading-none sm:h-11 sm:w-11 sm:text-3xl ${project.accentClassName}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="font-accent text-[10px] font-semibold uppercase leading-4 tracking-[0.13em] text-white/42 sm:text-[11px]">
                        {project.niche}
                      </p>
                      <h3 className="mt-1 break-words font-accent text-lg font-semibold leading-tight text-white sm:text-xl">
                        {project.name}
                      </h3>
                    </div>

                    <div
                      aria-hidden="true"
                      className="hidden shrink-0 items-center gap-1.5 sm:flex"
                    >
                      {project.palette.map((color) => (
                        <span
                          key={color}
                          className="h-3.5 w-3.5 rounded-full border border-white/15 shadow-[0_0_0_2px_#0d0d0d]"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/[0.07] pt-4">
                    {project.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 font-accent text-[10px] font-medium leading-4 text-white/48 sm:px-3 sm:text-[11px]"
                      >
                        {deliverable}
                      </span>
                    ))}

                    <div
                      aria-hidden="true"
                      className="ml-auto flex shrink-0 items-center gap-1.5 sm:hidden"
                    >
                      {project.palette.map((color) => (
                        <span
                          key={color}
                          className="h-3 w-3 rounded-full border border-white/15 shadow-[0_0_0_2px_#0d0d0d]"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
              Sua marca também pode ter um perfil reconhecível, consistente e
              pronto para chamar a atenção do cliente certo.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-track="whatsapp_instagram_identity_click"
              data-track-label="instagram_identity"
              className="button-primary w-full max-w-full shrink-0 px-5 text-center sm:w-auto sm:px-8"
            >
              Quero uma identidade para meu Instagram
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
