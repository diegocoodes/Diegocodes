import Reveal from "@/components/ui/Reveal";
import StarDecor from "@/components/ui/StarDecor";

type CTAFinalProps = {
  whatsappUrl: string;
};

const email = "diegoosilvaewerton@gmail.com";
const instagramUrl = "https://instagram.com/diegocodes_";
const conversionNotes = [
  "Resposta rápida no WhatsApp",
  "Atendimento direto com Diego",
  "Projeto pensado para conversão",
  "Estrutura premium para negócios locais",
] as const;

export default function CTAFinal({ whatsappUrl }: CTAFinalProps) {
  return (
    <section id="contato" className="section-space scroll-mt-28">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[var(--bg-secondary-accent)] px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-10 top-10 h-36 w-36 rounded-full bg-white/5 blur-3xl"
            />
            <StarDecor
              className="hero-float absolute left-6 top-6"
              color="#FFFFFF"
              size={20}
            />
            <StarDecor
              className="hero-float-delay absolute bottom-8 right-12"
              color="#9B4DCA"
              size={28}
            />
            <div className="relative max-w-3xl">
              <span className="section-kicker text-white/70">
                Seu próximo site começa aqui
              </span>
              <h2 className="section-title mt-5">
                Enquanto você lê isso, alguém está procurando o serviço que você
                oferece.
              </h2>
              <p className="mt-6 max-w-2xl font-accent text-xl font-medium leading-relaxed text-white/78">
                Seu site pode apresentar melhor o seu negócio e abrir um
                caminho mais claro para contatos pelo WhatsApp.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Falar com Diego pelo WhatsApp"
                data-track="whatsapp_cta_click"
                data-track-label="final_cta"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-accent text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] transition duration-300 hover:scale-[1.03] hover:brightness-95"
              >
                <span>Quero meu site profissional</span>
                <span>→</span>
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                {conversionNotes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 px-4 py-2 text-xs font-accent font-medium uppercase tracking-[0.22em] text-white/78"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${email}`}
                  aria-label="Enviar e-mail para Diego"
                  className="rounded-[22px] border border-white/12 bg-black/15 px-5 py-4 transition hover:border-white/30 hover:bg-black/20"
                >
                  <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                    E-mail
                  </span>
                  <p className="mt-2 font-accent text-base font-medium text-white">
                    {email}
                  </p>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir Instagram de Diego Codes"
                  className="rounded-[22px] border border-white/12 bg-black/15 px-5 py-4 transition hover:border-white/30 hover:bg-black/20"
                >
                  <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                    Instagram
                  </span>
                  <p className="mt-2 font-accent text-base font-medium text-white">
                    @diegocodes_
                  </p>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
