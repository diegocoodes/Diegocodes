import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ProjectCarousel from "@/components/ProjectCarousel";
import Reveal from "@/components/ui/Reveal";
import TransitionLink from "@/components/ui/TransitionLink";
import {
  getProjectPath,
  portfolioProjects,
  type PortfolioProject,
} from "@/lib/projects";

export default function Projects() {
  const visibleProjects = portfolioProjects.filter(
    (project: PortfolioProject) => project.featuredOnHome !== false,
  );

  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="section-space relative scroll-mt-28 overflow-hidden border-y border-white/[0.07] bg-[#070707]"
    >
      <div
        aria-hidden="true"
        className="ghost-grid absolute inset-0 opacity-[0.045] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-[rgba(123,47,190,0.12)] blur-[140px]"
      />
      <div className="container-shell relative z-10">
        <Reveal className="border-b border-white/10 pb-7 sm:pb-9 lg:pb-11">
          <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--success)]">
            Projetos selecionados
          </p>
          <h2
            id="projects-heading"
            className="mt-4 whitespace-nowrap font-display text-[clamp(17px,5.3vw,88px)] uppercase leading-none tracking-[-0.045em] text-white sm:mt-5"
          >
            Ideias que{" "}
            <span className="text-[var(--accent-hover)]">ganharam tela</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
            Uma seleção do que já saiu do papel. Deslize para conhecer cada
            projeto.
          </p>
        </Reveal>
        <ProjectCarousel names={visibleProjects.map((project) => project.name)}>
          {visibleProjects.map((project, index) => (
            <ProjectSlide
              key={project.slug}
              project={project}
              index={index}
              total={visibleProjects.length}
            />
          ))}
        </ProjectCarousel>
        <div className="mt-8 flex justify-end md:mt-12">
          <TransitionLink
            href="/projetos"
            className="motion-link group inline-flex min-h-12 items-center gap-3 rounded-md border border-white/15 bg-white/[0.045] py-1.5 pl-4 pr-1.5 font-accent text-[11px] font-semibold text-white transition hover:border-[var(--accent-hover)]/55 hover:bg-[rgba(123,47,190,0.09)] sm:min-h-14 sm:gap-4 sm:py-2 sm:pl-6 sm:pr-2 sm:text-xs"
          >
            Explorar portfólio completo
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[var(--accent-primary)] text-white sm:h-10 sm:w-10">
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}

function ProjectSlide({
  project,
  index,
  total,
}: {
  project: PortfolioProject;
  index: number;
  total: number;
}) {
  return (
    <article
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} de ${total}: ${project.name}`}
      className="project-slide group flex h-full flex-col rounded-xl border border-white/10 bg-[#101012]"
    >
      <TransitionLink
        href={getProjectPath(project)}
        aria-label={`Ver estudo de caso de ${project.name}`}
        className="project-monitor-stage relative block overflow-hidden rounded-t-xl px-4 pb-5 pt-7 sm:px-9 sm:pb-7 sm:pt-10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(123,47,190,0.16),transparent_70%)]"
        />
        <div
          className="project-monitor relative"
          style={{ viewTransitionName: `project-${project.slug}-visual` }}
        >
          <div className="rounded-t-lg border border-white/20 bg-[#222226] p-[5px] pb-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:p-2 sm:pb-0">
            <div className="relative aspect-[16/10] overflow-hidden rounded-t-sm bg-black">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                quality={85}
                sizes="(min-width: 1280px) 740px, (min-width: 768px) 60vw, 82vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-[1.015] ${project.imageClassName ?? "object-top"}`}
              />
            </div>
            <div
              aria-hidden="true"
              className="flex h-5 items-center justify-center sm:h-7"
            >
              <span className="h-1 w-1 rounded-full bg-[var(--success)] shadow-[0_0_7px_rgba(61,220,132,0.5)]" />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="project-monitor-neck mx-auto h-5 w-[16%] sm:h-8"
          />
          <div
            aria-hidden="true"
            className="project-monitor-foot mx-auto h-1.5 w-[36%] rounded-t-full sm:h-2"
          />
        </div>
      </TransitionLink>
      <div className="flex flex-1 flex-col border-t border-white/[0.07] p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4 font-accent text-[10px] font-semibold uppercase tracking-[0.06em] text-white/55 sm:text-[11px]">
          <span>{project.niche}</span>
          <span className="flex shrink-0 items-center gap-1.5 text-[var(--success)]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-current"
            />
            {project.status}
          </span>
        </div>
        <h3 className="mt-4 break-words font-display text-[clamp(28px,3.7vw,52px)] uppercase leading-[0.98] tracking-[-0.04em] text-white">
          {project.name}
        </h3>
        <p className="mb-6 mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
          {project.cardDescription}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-4">
          <TransitionLink
            href={getProjectPath(project)}
            className="motion-link inline-flex min-h-11 items-center gap-2 font-accent text-[11px] font-semibold text-white sm:text-xs"
          >
            Ver estudo de caso{" "}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 text-[var(--accent-hover)]"
            />
          </TransitionLink>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visitar ${project.name} em nova aba`}
              className="motion-link inline-flex min-h-11 items-center gap-2 font-accent text-[11px] font-semibold text-white/60 transition hover:text-[var(--success)] sm:text-xs"
            >
              Visitar site{" "}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
