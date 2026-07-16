import { AtSign, MapPin, MessageCircle, MonitorSmartphone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contactConfig } from "@/lib/contact";

type AboutDiegoProps = {
  whatsappUrl: string;
};

export default function AboutDiego({ whatsappUrl }: AboutDiegoProps) {
  return (
    <section
      id="sobre"
      className="section-space scroll-mt-28 bg-[rgba(17,17,17,0.2)]"
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.58fr)] lg:items-center">
          <Reveal>
            <span className="section-kicker">Sobre</span>
            <h2 className="section-title mt-5">
              Quem está por trás da DiegoCodes?
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              <p>
                Sou Diego Ewerton, desenvolvedor web de Recife. Crio sites e
                landing pages para profissionais e negócios locais que precisam
                apresentar melhor seus serviços, transmitir confiança e facilitar
                o contato com novos clientes.
              </p>
              <p>
                Acompanho cada etapa do projeto, desde a organização inicial das
                informações até a publicação do site.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Instagram
                <AtSign aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-track="whatsapp_about_click"
                data-track-label="about"
                className="button-primary"
              >
                WhatsApp
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(17,17,17,0.9)] p-6">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_center,rgba(123,47,190,0.28),transparent_66%)]"
              />
              <div className="relative flex aspect-[4/5] flex-col justify-between rounded-[22px] border border-white/10 bg-[#070707] p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-accent text-sm font-semibold text-white/58">
                    Diego Ewerton
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--success)] shadow-[0_0_14px_rgba(61,220,132,0.7)]" />
                </div>

                <div>
                  <p className="font-display text-[88px] uppercase leading-none text-white md:text-[112px]">
                    DC
                  </p>
                  <p className="mt-4 max-w-xs text-base leading-7 text-white/68">
                    Desenvolvimento web em Recife com atendimento próximo,
                    estratégia clara e publicação acompanhada.
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <MapPin aria-hidden="true" className="h-5 w-5 text-[var(--success)]" />
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
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
