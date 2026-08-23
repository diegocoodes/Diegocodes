"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const [isCompact, setIsCompact] = useState(false);
  const [activeHref, setActiveHref] = useState("#topo");
  const [activeIndicator, setActiveIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });
  const progressRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const compactRef = useRef(false);

  useEffect(() => {
    let animationFrame: number | null = null;

    function updateScrollState() {
      animationFrame = null;

      const root = document.documentElement;
      const scrollTop = Math.max(window.scrollY, root.scrollTop, 0);
      const scrollableDistance = Math.max(
        root.scrollHeight - window.innerHeight,
        0
      );
      const progress =
        scrollableDistance > 0
          ? Math.min(scrollTop / scrollableDistance, 1)
          : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      const nextCompact = scrollTop > 48;

      if (nextCompact !== compactRef.current) {
        compactRef.current = nextCompact;
        setIsCompact(nextCompact);
      }
    }

    function requestScrollUpdate() {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateScrollState);
      }
    }

    updateScrollState();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);

    return () => {
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    function closeAtDesktop(event: MediaQueryListEvent | MediaQueryList) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    closeAtDesktop(desktopQuery);
    desktopQuery.addEventListener("change", closeAtDesktop);

    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const menuButton = menuButtonRef.current;
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const drawer = drawerRef.current;
      if (!drawer) {
        return;
      }

      const focusableElements = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (!focusableElements.length) {
        event.preventDefault();
        drawer.focus({ preventScroll: true });
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (!drawer.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);

      const focusTarget =
        previouslyFocused?.isConnected && previouslyFocused !== document.body
          ? previouslyFocused
          : menuButton;
      focusTarget?.focus({ preventScroll: true });
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

    if (!("IntersectionObserver" in window)) {
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

  const updateActiveIndicator = useCallback(() => {
    const nav = navRef.current;

    if (!nav || !isHome || !activeHref) {
      setActiveIndicator((current) =>
        current.visible ? { ...current, visible: false } : current
      );
      return;
    }

    const activeTarget = Array.from(
      nav.querySelectorAll<HTMLElement>("[data-nav-anchor]")
    ).find((target) => target.dataset.navAnchor === activeHref);

    if (!activeTarget) {
      setActiveIndicator((current) =>
        current.visible ? { ...current, visible: false } : current
      );
      return;
    }

    const navBounds = nav.getBoundingClientRect();
    const targetBounds = activeTarget.getBoundingClientRect();
    const nextIndicator = {
      left: targetBounds.left - navBounds.left,
      width: targetBounds.width,
      visible: true,
    };

    setActiveIndicator((current) => {
      const positionIsUnchanged =
        Math.abs(current.left - nextIndicator.left) < 0.5 &&
        Math.abs(current.width - nextIndicator.width) < 0.5 &&
        current.visible === nextIndicator.visible;

      return positionIsUnchanged ? current : nextIndicator;
    });
  }, [activeHref, isHome]);

  useEffect(() => {
    let animationFrame = window.requestAnimationFrame(updateActiveIndicator);
    let isDisposed = false;

    function handleResize() {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveIndicator);
    }

    window.addEventListener("resize", handleResize);

    void document.fonts?.ready.then(() => {
      if (!isDisposed) {
        handleResize();
      }
    });

    return () => {
      isDisposed = true;
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isCompact, updateActiveIndicator]);

  const handleClose = () => setIsOpen(false);
  const getHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  return (
    <>
      <header
        className="nav-enter nav-header fixed inset-x-0 top-0 z-50"
        data-compact={isCompact}
      >
        <span
          ref={progressRef}
          aria-hidden="true"
          className="nav-scroll-progress pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left bg-[var(--accent-hover)] will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />

        <div className="nav-container container-shell pt-3 md:pt-4">
          <div className="nav-panel border-b border-white/[0.08] bg-[rgba(5,5,5,0.92)] px-4 py-2.5 md:rounded-xl md:border md:border-white/[0.08] md:px-5 md:py-3 md:backdrop-blur-sm">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <ScrollLink
                href={getHref("#topo")}
                ariaLabel="Voltar ao topo"
                className="nav-brand font-display text-[26px] uppercase leading-none text-white md:text-[30px]"
              >
                diegocodes
              </ScrollLink>

              <nav
                ref={navRef}
                aria-label="Navegação principal"
                className="nav-desktop relative hidden items-center justify-center gap-4 lg:gap-6 md:flex"
              >
                <span
                  aria-hidden="true"
                  data-visible={activeIndicator.visible}
                  className="nav-active-indicator pointer-events-none absolute -bottom-0.5 left-0 h-px bg-[var(--accent-hover)] transition-[width,transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                  style={{
                    opacity: activeIndicator.visible ? 1 : 0,
                    transform: `translate3d(${activeIndicator.left}px, 0, 0)`,
                    width: `${activeIndicator.width}px`,
                  }}
                />

                {navLinks.map((link) => {
                  const isActive = isHome && activeHref === link.anchor;

                  return (
                    <span
                      key={link.anchor}
                      data-nav-anchor={link.anchor}
                      className="nav-link-target relative"
                    >
                      <ScrollLink
                        href={getHref(link.anchor)}
                        ariaCurrent={isActive ? "location" : undefined}
                        className={`motion-nav-link block py-2 font-accent text-xs font-semibold transition ${
                          isActive
                            ? "text-white"
                            : "text-white/56 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </ScrollLink>
                    </span>
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
                  className="nav-budget-cta inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)] px-5 py-3 font-accent text-xs font-semibold text-white transition duration-300 hover:scale-[1.02] hover:brightness-110 lg:px-6"
                >
                  Solicitar orçamento
                </a>
              </div>

              <button
                ref={menuButtonRef}
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
        tabIndex={-1}
        className={`fixed inset-0 z-[60] bg-black/72 transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } md:hidden`}
        onClick={handleClose}
      />

      <aside
        ref={drawerRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
        aria-hidden={!isOpen}
        data-menu-open={isOpen}
        tabIndex={-1}
        className={`fixed right-0 top-0 z-[70] h-screen h-[100dvh] w-[min(320px,88vw)] overflow-y-auto border-l border-white/10 bg-[rgba(10,10,10,0.99)] px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-24 shadow-[-18px_0_48px_rgba(0,0,0,0.34)] transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Fechar menu"
          tabIndex={isOpen ? 0 : -1}
          onClick={handleClose}
          className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-accent text-2xl text-white transition hover:border-[var(--accent-primary)]"
        >
          ×
        </button>
        <nav className="flex flex-col gap-5">
          {navLinks.map((link, index) => {
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
                className={`mobile-menu-link font-display text-4xl uppercase ${
                  isActive
                    ? "text-[var(--accent-hover)]"
                    : "text-white"
                }`}
                style={{ transitionDelay: isOpen ? `${80 + index * 45}ms` : "0ms" }}
                tabIndex={isOpen ? 0 : -1}
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
          tabIndex={isOpen ? 0 : -1}
          onClick={handleClose}
        >
          Solicitar orçamento
        </a>
      </aside>
    </>
  );
}
