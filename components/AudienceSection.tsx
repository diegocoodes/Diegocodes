import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { audienceSegments } from "@/lib/home-content";

export default function AudienceSection() {
  return (
    <section
      id="publico"
      className="section-space scroll-mt-28 bg-[rgba(17,17,17,0.18)]"
    >
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.55fr)] lg:items-end">
          <Reveal>
            <span className="section-kicker">Para quem é</span>
            <h2 className="section-title mt-5 max-w-4xl">
              Sites pensados para quem precisa apresentar melhor o próprio
              negócio
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              Cada projeto é adaptado à identidade, aos serviços e ao objetivo
              comercial de cada cliente.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audienceSegments.map((segment, index) => (
            <Reveal key={segment} delay={index * 0.03}>
              <article className="group flex min-h-[116px] items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[rgba(17,17,17,0.86)] p-5 transition duration-300 hover:border-[var(--accent-primary)] hover:bg-white/[0.04]">
                <h3 className="font-accent text-lg font-semibold leading-7 text-white">
                  {segment}
                </h3>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-[var(--success)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
