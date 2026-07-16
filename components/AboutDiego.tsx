import {
  AtSign,
  CheckCircle2,
  Globe2,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { contactConfig } from "@/lib/contact";

type AboutDiegoProps = {
  whatsappUrl: string;
};

const highlights = [
  {
    title: "Desenvolvimento personalizado",
    icon: <CheckCircle2 aria-hidden="true" className="h-4 w-4" />,
  },
  {
    title: "Atendimento direto comigo",
    icon: <MessageCircle aria-hidden="true" className="h-4 w-4" />,
  },
  {
    title: "Projetos para todo o Brasil",
    icon: <Globe2 aria-hidden="true" className="h-4 w-4" />,
  },
] as const;

export default function AboutDiego({ whatsappUrl }: AboutDiegoProps) {
  return (
    <section
      id="sobre"
      className="section-space scroll-mt-28 overflow-hidden bg-[#050505]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_72%_28%,rgba(123,47,190,0.16),transparent_38%)]"
      />
      <div className="container-shell">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,0.58fr)] lg:items-center">
          <Reveal>
            <span className="section-kicker">Sobre mim</span>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(48px,8vw,92px)] uppercase leading-[0.92] text-white">
              Prazer, eu sou
              <span className="mt-1 block text-[var(--accent-hover)]">
                Diego Ewerton.
              </span>
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-white/68 md:text-lg">
              <p>
                Sou Diego Ewerton, desenvolvedor web de Recife e criador da
                DiegoCodes. Ajudo profissionais e negócios locais a
                transformarem suas ideias em sites claros, modernos e
                preparados para gerar contatos.
              </p>
              <p>
                Cuido de todo o processo, desde a organização das informações e
                do design até o desenvolvimento, os ajustes e a publicação do
                projeto.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-white/76"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--success)]/20 bg-[var(--success)]/10 text-[var(--success)]">
                    {item.icon}
                  </span>
                  <span className="font-accent text-sm font-semibold leading-5">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-track="whatsapp_about_click"
                data-track-label="about"
                className="button-primary min-h-12 w-full sm:w-auto"
              >
                Conversar sobre meu projeto
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={contactConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary min-h-12 w-full sm:w-auto"
              >
                Conhecer meu Instagram
                <AtSign aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(17,17,17,0.88)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
              <div
                aria-hidden="true"
                className="absolute -inset-8 bg-[radial-gradient(circle_at_center,rgba(123,47,190,0.18),transparent_58%)] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#070707]">
                <div className="relative min-h-[360px] overflow-hidden md:min-h-[440px] lg:min-h-[500px]">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-8 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[rgba(123,47,190,0.22)] blur-3xl"
                  />
                  <Image
                    src="/perfil/diego.png"
                    alt="Foto profissional de Diego Ewerton."
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-cover object-center"
                    priority={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(7,7,7,0.84)_100%)]" />
                  <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/58 px-3 py-2 font-accent text-xs font-semibold text-white/78 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-[var(--success)] shadow-[0_0_14px_rgba(61,220,132,0.82)]" />
                    Disponível para novos projetos
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-accent text-2xl font-semibold leading-tight text-white">
                    Diego Ewerton
                  </h3>
                  <p className="mt-2 text-base leading-7 text-white/62">
                    Desenvolvedor web e fundador da DiegoCodes
                  </p>

                  <div className="mt-5 grid gap-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <MapPin
                        aria-hidden="true"
                        className="h-5 w-5 text-[var(--success)]"
                      />
                      <span className="text-sm text-white/72">
                        {contactConfig.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <MonitorSmartphone
                        aria-hidden="true"
                        className="h-5 w-5 text-[var(--success)]"
                      />
                      <span className="text-sm text-white/72">
                        Atendimento online
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
