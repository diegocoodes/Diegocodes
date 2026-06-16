import {
  CheckCircle2,
  Globe2,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const deliverables = [
  {
    title: "Design profissional",
    description: "Visual alinhado ao seu nicho, com aparência premium e clara.",
    icon: <LayoutTemplate aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Foco em conversão",
    description: "Página pensada para orientar o visitante até o contato.",
    icon: <CheckCircle2 aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Pronto para WhatsApp",
    description: "Botões diretos com mensagem pronta para facilitar o atendimento.",
    icon: <MessageCircle aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Responsivo",
    description: "Layout preparado para celular, tablet e desktop.",
    icon: <MonitorSmartphone aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Preparado para Google",
    description: "Estrutura básica de SEO para indexação e divulgação.",
    icon: <Globe2 aria-hidden="true" className="h-6 w-6" />,
  },
  {
    title: "Publicação do site",
    description: "Entrega testada, publicada e pronta para ser compartilhada.",
    icon: <Rocket aria-hidden="true" className="h-6 w-6" />,
  },
] as const;

export default function Deliverables() {
  return (
    <section
      id="entregas"
      className="section-space scroll-mt-28 bg-[rgba(17,17,17,0.24)]"
    >
      <div className="container-shell">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">O que eu entrego</span>
          <h2 className="section-title mt-5">
            Um site bonito, rápido e pronto para gerar contatos.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="surface-card flex h-full min-h-[190px] flex-col rounded-[22px] bg-[rgba(17,17,17,0.88)] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--success)]/25 bg-[var(--success)]/10 text-[var(--success)]">
                  {item.icon}
                </div>
                <h3 className="mt-6 font-accent text-2xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
