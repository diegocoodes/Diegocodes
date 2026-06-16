import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { portfolioProjects } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="section-space scroll-mt-28 bg-[rgba(17,17,17,0.22)]"
    >
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.6fr)] lg:items-end">
          <Reveal>
            <span className="section-kicker">Projetos</span>
            <h2 className="section-title mt-5">
              Sites criados para transformar visitas em pedidos de orçamento.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5">
              <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Cada projeto é pensado para gerar autoridade, confiança e
                conversão real para negócios locais.
              </p>
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-hover)]"
              >
                Ver todos os projetos
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolioProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <Reveal
                key={project.name}
                delay={index * 0.05}
                className={isFeatured ? "lg:col-span-2" : undefined}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  featured={isFeatured}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
