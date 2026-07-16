import { AtSign, Mail } from "lucide-react";
import ScrollLink from "@/components/ui/ScrollLink";
import { contactConfig } from "@/lib/contact";

const footerLinks = [
  { href: "/#projetos", label: "Projetos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#processo", label: "Processo" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#perguntas", label: "Perguntas" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-shell flex flex-col gap-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <ScrollLink
            href="/#topo"
            ariaLabel="Voltar ao topo"
            className="font-display text-4xl uppercase leading-none"
          >
            diegocodes
            <span className="text-[var(--accent-primary)]">_</span>
          </ScrollLink>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap gap-x-5 gap-y-3"
          >
            {footerLinks.map((link) => (
              <ScrollLink
                key={link.href}
                href={link.href}
                className="font-accent text-sm font-medium text-[var(--text-secondary)] transition hover:text-white"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contactConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram da DiegoCodes"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[var(--bg-surface)] text-white transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              <AtSign aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${contactConfig.email}`}
              aria-label="Enviar e-mail para Diego"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[var(--bg-surface)] text-white transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/8 pt-5 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} diegocodes_ · Recife, PE</p>
          <p>Criação de sites em Recife e atendimento online.</p>
        </div>
      </div>
    </footer>
  );
}
