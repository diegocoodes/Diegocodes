import { AtSign, Mail, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contactConfig } from "@/lib/contact";

type CTAFinalProps = {
  whatsappUrl: string;
};

export default function CTAFinal({ whatsappUrl }: CTAFinalProps) {
  return (
    <section
      id="contato"
      className="section-space scroll-mt-28 bg-[var(--bg-secondary-accent)]"
    >
      <div className="container-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] lg:items-end">
            <div>
              <span className="section-kicker text-white/70">
                Próximo passo
              </span>
              <h2 className="section-title mt-5 max-w-4xl">
                Seu negócio merece mais do que apenas um perfil no Instagram.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Tenha um endereço profissional para apresentar seus serviços,
                fortalecer sua marca e facilitar o contato com novos clientes.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Conversar com Diego pelo WhatsApp sobre um projeto"
                data-track="whatsapp_final_cta_click"
                data-track-label="final_cta"
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-accent text-sm font-semibold text-[var(--accent-primary)] transition duration-300 hover:scale-[1.02] hover:brightness-95"
              >
                Quero conversar sobre meu projeto
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-white/64">
                Você receberá uma resposta com as próximas etapas e as
                informações necessárias para o orçamento.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={`mailto:${contactConfig.email}`}
                aria-label="Enviar e-mail para Diego"
                className="rounded-2xl border border-white/12 bg-black/15 px-5 py-4 transition hover:border-white/30 hover:bg-black/20"
              >
                <span className="flex items-center gap-2 font-accent text-sm font-semibold text-white/58">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  E-mail
                </span>
                <p className="mt-2 break-words font-accent text-base font-medium text-white">
                  {contactConfig.email}
                </p>
              </a>

              <a
                href={contactConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram de DiegoCodes"
                className="rounded-2xl border border-white/12 bg-black/15 px-5 py-4 transition hover:border-white/30 hover:bg-black/20"
              >
                <span className="flex items-center gap-2 font-accent text-sm font-semibold text-white/58">
                  <AtSign aria-hidden="true" className="h-4 w-4" />
                  Instagram
                </span>
                <p className="mt-2 font-accent text-base font-medium text-white">
                  {contactConfig.instagramHandle}
                </p>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
