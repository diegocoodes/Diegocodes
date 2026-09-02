import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ErrorPageProps = {
  code: "404" | "505";
  eyebrow: string;
  title: string;
  description: string;
};

export default function ErrorPage({
  code,
  eyebrow,
  title,
  description,
}: ErrorPageProps) {
  return (
    <main className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#050308] text-white">
      <div aria-hidden="true" className="ghost-grid absolute inset-0 opacity-[0.09]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(123,47,190,0.28),transparent_35%),linear-gradient(180deg,rgba(5,3,8,0.18),#050308)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 font-display text-[clamp(220px,38vw,620px)] leading-none tracking-[-0.08em] text-white/[0.025] [transform:translateY(-52%)]"
      >
        {code}
      </div>

      <div className="container-shell relative z-10 flex min-h-[100svh] flex-col py-7 sm:py-9">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            aria-label="Ir para a página inicial da DiegoCodes"
            className="font-display text-2xl uppercase tracking-[-0.045em] sm:text-3xl"
          >
            diego<span className="text-[#c99bea]">codes</span>
          </Link>
          <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-xs">
            Erro / {code}
          </span>
        </header>

        <section className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[0.46fr_1fr] lg:gap-20">
          <div aria-hidden="true" className="relative hidden lg:block">
            <span className="font-display text-[clamp(170px,20vw,300px)] leading-[0.72] tracking-[-0.075em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
              {code}
            </span>
            <span className="absolute -bottom-10 left-2 h-px w-36 bg-gradient-to-r from-[var(--accent-hover)] to-transparent" />
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--success)] shadow-[0_0_18px_rgba(61,220,132,0.75)]" />
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white/52">
                {eyebrow}
              </span>
            </div>
            <p className="mt-7 font-display text-[clamp(92px,28vw,180px)] leading-[0.7] tracking-[-0.075em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.22)] lg:hidden">
              {code}
            </p>
            <h1 className="mt-8 max-w-[820px] font-display text-[clamp(43px,7vw,82px)] uppercase leading-[0.88] tracking-[-0.045em]">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="button-primary min-h-14">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Voltar ao início
              </Link>
              <Link
                href="/projetos"
                className="motion-link inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/18 bg-white/[0.035] px-8 py-3.5 font-accent text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/42 hover:bg-white/[0.08]"
              >
                Explorar projetos
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/10 pt-5 font-accent text-xs text-white/36 sm:flex-row sm:items-center sm:justify-between">
          <span>DiegoCodes · Experiências digitais</span>
          <span>Recife, Pernambuco</span>
        </footer>
      </div>
    </main>
  );
}
