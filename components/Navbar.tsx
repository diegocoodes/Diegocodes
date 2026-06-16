"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollLink from "@/components/ui/ScrollLink";

const navLinks = [
  { anchor: "#topo", label: "Início" },
  { anchor: "#entregas", label: "Entregas" },
  { anchor: "#projetos", label: "Projetos" },
  { anchor: "#prova-social", label: "Prova" },
  { anchor: "#diferenciais", label: "Diferenciais" },
  { anchor: "#como-funciona", label: "Como funciona" },
  { anchor: "#faq", label: "FAQ" },
  { anchor: "#contato", label: "Contato" },
];

const desktopNavLinks = navLinks.filter((link) =>
  ["#projetos", "#diferenciais", "#contato"].includes(
    link.anchor
  )
);

type NavbarProps = {
  whatsappUrl: string;
};

export default function Navbar({ whatsappUrl }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#topo");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isHome) {
      setActiveHref("");
      return;
    }

    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.anchor))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.12, 0.28, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  const handleClose = () => setIsOpen(false);
  const getHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-shell pt-3 md:pt-5">
          <div className="border border-white/10 bg-[rgba(10,10,10,0.72)] px-4 py-3 shadow-[0_16px_44px_rgba(0,0,0,0.26)] backdrop-blur-xl md:rounded-[22px] md:px-5">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <ScrollLink
                href={getHref("#topo")}
                ariaLabel="Voltar ao topo"
                className="font-display text-[32px] uppercase leading-none tracking-[0.05em] text-white md:text-[34px]"
              >
                diegocodes
                <span className="text-[var(--accent-hover)]">_</span>
              </ScrollLink>

              <nav
                aria-label="Navegação principal"
                className="hidden items-center justify-center gap-8 md:flex"
              >
                {desktopNavLinks.map((link) => {
                  const isActive = isHome && activeHref === link.anchor;

                  return (
                    <ScrollLink
                      key={link.anchor}
                      href={getHref(link.anchor)}
                      ariaCurrent={isActive ? "location" : undefined}
                      className={`relative py-2 font-accent text-[12px] font-semibold uppercase tracking-[0.18em] transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-[var(--accent-hover)] after:transition-transform ${
                        isActive
                          ? "text-white after:scale-x-100"
                          : "text-white/56 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </ScrollLink>
                  );
                })}
              </nav>

              <div className="hidden justify-self-end md:block">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir conversa no WhatsApp para solicitar um site"
                  data-track="whatsapp_cta_click"
                  data-track-label="navbar_desktop"
                  className="inline-flex items-center justify-center rounded-[16px] border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)] px-5 py-3 font-accent text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:scale-[1.02] hover:brightness-110 lg:px-6"
                >
                  Orçamento
                </a>
              </div>

              <button
                type="button"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="justify-self-end inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04] text-white transition hover:border-[var(--accent-primary)] md:hidden"
                onClick={() => setIsOpen((open) => !open)}
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                      isOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                      isOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        aria-label="Fechar menu lateral"
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } md:hidden`}
        onClick={handleClose}
      />

      <aside
        id="mobile-menu"
        aria-label="Menu mobile"
        className={`fixed right-0 top-0 z-50 h-screen w-[300px] border-l border-white/10 bg-[rgba(10,10,10,0.98)] px-6 py-24 shadow-[-18px_0_48px_rgba(0,0,0,0.34)] transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => {
            const label =
              link.anchor === "#topo"
                ? "Ir para o início"
                : `Ir para ${link.label}`;
            const isActive = isHome && activeHref === link.anchor;

            return (
              <ScrollLink
                key={link.anchor}
                href={getHref(link.anchor)}
                ariaLabel={label}
                ariaCurrent={isActive ? "location" : undefined}
                className={`font-display text-4xl uppercase tracking-[0.04em] ${
                  isActive
                    ? "text-[var(--accent-hover)]"
                    : "text-white"
                }`}
                onClick={handleClose}
              >
                {link.label}
              </ScrollLink>
            );
          })}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir conversa no WhatsApp para solicitar um site"
          data-track="whatsapp_cta_click"
          data-track-label="navbar_mobile"
          className="button-primary mt-10 w-full"
          onClick={handleClose}
        >
          Quero meu site profissional
        </a>
      </aside>
    </>
  );
}
