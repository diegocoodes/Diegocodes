import ScrollLink from "@/components/ui/ScrollLink";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/diegocodes_",
    external: true,
    icon: <InstagramIcon />,
  },
  {
    name: "E-mail",
    href: "mailto:diegoosilvaewerton@gmail.com",
    external: false,
    icon: <EmailIcon />,
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-shell flex flex-col gap-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <ScrollLink
            href="#topo"
            ariaLabel="Voltar ao topo"
            className="font-display text-4xl uppercase leading-none tracking-[0.06em]"
          >
            diegocodes
            <span className="text-[var(--accent-primary)]">_</span>
          </ScrollLink>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="mailto:diegoosilvaewerton@gmail.com"
              aria-label="Enviar e-mail para Diego"
              className="font-accent text-sm font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)] transition hover:text-white"
            >
              diegoosilvaewerton@gmail.com
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  aria-label={`Abrir ${link.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[var(--bg-surface)] text-white transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/8 pt-5 text-sm uppercase tracking-[0.18em] text-[var(--text-secondary)] md:flex-row md:items-center">
          <p>© {currentYear} diegocodes_ · Recife, PE</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path
        d="M4.5 7L12 12.5L19.5 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
