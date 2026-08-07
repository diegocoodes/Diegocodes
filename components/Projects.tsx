import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { getProjectPath, portfolioProjects, type PortfolioProject } from "@/lib/projects";

type ProjectsProps = {
  limit?: number;
};

export default function Projects({ limit = 4 }: ProjectsProps) {
  const visibleProjects = portfolioProjects.slice(0, limit);

  return (
    <section
      id="projetos"
      className="section-space scroll-mt-28 overflow-hidden bg-[#050505]"
    >
      <div aria-hidden="true" className="ghost-grid absolute inset-0 opacity-[0.07]" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_center,rgba(123,47,190,0.18),transparent_62%)]"
      />

      <div className="container-shell relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-accent text-xs font-semibold text-white/52">
            Portfólio
          </span>
          <h2 className="mt-5 font-accent text-[clamp(36px,7vw,72px)] font-bold leading-[0.95] text-white">
            Projetos de sites desenvolvidos para{" "}
            <span className="text-[var(--success)]">clientes</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectPortfolioCard project={project} priority={index < 2} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/projetos"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 font-accent text-xs font-semibold text-white transition duration-300 hover:border-[var(--success)]/45 hover:text-[var(--success)]"
          >
            Ver todos os projetos
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectPortfolioCard({
  project,
  priority,
}: {
  project: PortfolioProject;
  priority: boolean;
}) {
  const targetUrl = project.liveUrl ?? getProjectPath(project);
  const isExternal = Boolean(project.liveUrl);

  return (
    <article className="group h-full overflow-hidden rounded-[12px] border border-white/10 bg-[rgba(12,12,12,0.72)] transition duration-300 hover:-translate-y-1 hover:border-[var(--success)]/35 hover:bg-[rgba(17,17,17,0.9)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-black">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          priority={priority}
          quality={92}
          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 46vw, 100vw"
          className={`object-cover transition duration-700 group-hover:scale-[1.035] ${
            project.imageClassName ?? "object-center"
          }`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_62%,rgba(5,5,5,0.42)_100%)]" />
        <span className="absolute left-4 top-4 rounded-[6px] border border-white/12 bg-[#080808]/80 px-3 py-1.5 font-accent text-[10px] font-semibold uppercase text-white/58 backdrop-blur">
          {project.niche}
        </span>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-accent text-lg font-semibold leading-tight text-white">
          {project.name}
        </h3>
        <p className="mt-3 min-h-[56px] text-sm leading-7 text-[var(--text-secondary)]">
          {project.shortDescription}
        </p>
        <a
          href={targetUrl}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="mt-5 inline-flex items-center gap-2 font-accent text-xs font-semibold text-[var(--success)] transition group-hover:gap-3"
        >
          Ver site completo
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
