"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollLink from "@/components/ui/ScrollLink";

const navLinks = [
  { anchor: "#topo", label: "Início" },
  { anchor: "#projetos", label: "Projetos" },
  { anchor: "#servicos", label: "Serviços" },
  { anchor: "#processo", label: "Processo" },
  { anchor: "#sobre", label: "Sobre" },
  { anchor: "#perguntas", label: "Perguntas" },
];

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
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        <div className="container-shell pt-3 md:pt-4">
          <div className="border-b border-white/[0.08] bg-[rgba(5,5,5,0.92)] px-4 py-2.5 md:rounded-xl md:border md:border-white/[0.08] md:px-5 md:py-3 md:backdrop-blur-sm">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <ScrollLink
                href={getHref("#topo")}
                ariaLabel="Voltar ao topo"
                className="font-display text-[26px] uppercase leading-none text-white md:text-[30px]"
              >
                diegocodes
                <span className="text-[var(--accent-hover)]">_</span>
              </ScrollLink>

              <nav
                aria-label="Navegação principal"
                className="hidden items-center justify-center gap-4 lg:gap-6 md:flex"
              >
                {navLinks.map((link) => {
                  const isActive = isHome && activeHref === link.anchor;

                  return (
                    <ScrollLink
                      key={link.anchor}
                      href={getHref(link.anchor)}
                      ariaCurrent={isActive ? "location" : undefined}
                      className={`relative py-2 font-accent text-xs font-semibold transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-[var(--accent-hover)] after:transition-transform ${
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
                  data-track="whatsapp_header_click"
                  data-track-label="header_desktop"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)] px-5 py-3 font-accent text-xs font-semibold text-white transition duration-300 hover:scale-[1.02] hover:brightness-110 lg:px-6"
                >
                  Solicitar orçamento
                </a>
              </div>

              <button
                type="button"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-[var(--accent-primary)] md:hidden"
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
        className={`fixed right-0 top-0 z-50 h-screen w-[min(320px,88vw)] border-l border-white/10 bg-[rgba(10,10,10,0.98)] px-6 py-24 shadow-[-18px_0_48px_rgba(0,0,0,0.34)] transition-transform duration-300 md:hidden ${
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
                className={`font-display text-4xl uppercase ${
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
          data-track="whatsapp_header_click"
          data-track-label="header_mobile"
          className="button-primary mt-10 w-full"
          onClick={handleClose}
        >
          Solicitar orçamento
        </a>
      </aside>
    </>
  );
}
