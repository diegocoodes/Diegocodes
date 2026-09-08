import { ArrowRight, ArrowUpRight, CheckCircle2, Target } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TransitionLink from "@/components/ui/TransitionLink";
import {
  getProjectPath,
  portfolioProjects,
  type PortfolioProject,
} from "@/lib/projects";

type ProjectsProps = {
  limit?: number;
};

export default function Projects({ limit = 4 }: ProjectsProps) {
  const visibleProjects = portfolioProjects.slice(0, limit);

  return (
    <section
      id="projetos"
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
        <div className="border-b border-white/10 pb-7 sm:pb-9 lg:pb-11">
          <Reveal>
            <div className="font-accent text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--success)]">
              Projetos selecionados
            </div>
            <h2 className="mt-4 whitespace-nowrap font-display text-[clamp(17px,5.3vw,88px)] uppercase leading-none tracking-[-0.045em] text-white sm:mt-5">
              Ideias que <span className="text-[var(--accent-hover)]">ganharam tela</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-3 divide-y divide-white/10 sm:mt-5 lg:mt-7">
          {visibleProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={Math.min(index * 0.04, 0.12)}
              fromX={index % 2 === 0 ? -22 : 22}
              fromY={0}
            >
              <ProjectCase project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex justify-end md:mt-14">
          <TransitionLink
            href="/projetos"
            className="motion-link group inline-flex min-h-12 items-center gap-3 rounded-md border border-white/12 bg-white/[0.045] py-1.5 pl-4 pr-1.5 font-accent text-[11px] font-semibold text-white transition hover:border-[var(--accent-hover)]/55 hover:bg-[rgba(123,47,190,0.09)] sm:min-h-14 sm:gap-4 sm:py-2 sm:pl-6 sm:pr-2 sm:text-xs"
          >
            Explorar portfólio completo
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[var(--accent-primary)] text-white sm:h-10 sm:w-10">
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </TransitionLink>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCase({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article className="project-case group relative grid gap-5 py-8 sm:gap-7 sm:py-10 md:py-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-16">
      <div
        className={`project-case-visual motion-media-frame relative overflow-hidden rounded-md border border-white/10 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.34)] transition duration-500 group-hover:border-[var(--accent-hover)]/35 lg:col-span-7 ${
          isReversed ? "lg:order-2" : ""
        }`}
        style={{ viewTransitionName: `project-${project.slug}-visual` }}
      >
        <TransitionLink
          href={getProjectPath(project)}
          aria-label={`Ver estudo de caso de ${project.name}`}
          className="block"
        >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            quality={75}
            sizes="(min-width: 1280px) 674px, (min-width: 1024px) calc(58.33vw - 73px), (min-width: 640px) calc(100vw - 72px), calc(100vw - 48px)"
            className={`object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${
              project.imageClassName ?? "object-center"
            }`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,5,5,0.05)_35%,rgba(123,47,190,0.16)_100%)] opacity-70 transition duration-500 group-hover:opacity-30" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-3 top-3 flex items-center justify-between rounded-sm border border-white/10 bg-black/55 px-2.5 py-1.5 backdrop-blur-md sm:inset-x-5 sm:top-5 sm:px-3 sm:py-2">
            <div aria-hidden="true" className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff6b5f]" />
              <span className="h-2 w-2 rounded-full bg-[#f7c948]" />
              <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
            </div>
            <span className="font-accent text-[9px] font-semibold uppercase tracking-[0.12em] text-white/58">
              Projeto publicado
            </span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-4 sm:bottom-5 sm:left-5 sm:right-5">
            <span className="rounded-sm border border-white/10 bg-black/60 px-2.5 py-1.5 font-accent text-[9px] font-semibold uppercase tracking-[0.1em] text-white/76 backdrop-blur-md sm:px-3 sm:py-2 sm:text-[10px]">
              {project.status}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:-rotate-6 group-hover:bg-[var(--success)] sm:h-11 sm:w-11">
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </div>
        </div>
        </TransitionLink>
      </div>

      <div
        className={`project-case-content lg:col-span-5 ${
          isReversed ? "lg:order-1 lg:pr-4" : "lg:pl-4"
        }`}
      >
        <div className="flex flex-wrap items-center gap-1.5 font-accent text-[10px] font-semibold uppercase leading-5 tracking-[0.025em] text-white/60 sm:gap-2 sm:text-[11px] sm:tracking-[0.035em]">
          <span>{project.niche}</span>
          <span aria-hidden="true">/</span>
          <span>{project.service}</span>
          <span aria-hidden="true">/</span>
          <span>{project.status}</span>
        </div>

        <h3 className="mt-3 break-words font-display text-[34px] uppercase leading-[0.9] tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[var(--accent-hover)] sm:mt-5 sm:text-[clamp(42px,6vw,76px)] sm:leading-[0.86] [overflow-wrap:anywhere]">
          {project.name}
        </h3>
        <p className="mt-4 max-w-lg text-[15px] leading-6 text-white/60 sm:mt-5 md:text-base md:leading-7">
          {project.shortDescription}
        </p>

        <div className="mt-5 border-l-2 border-[var(--accent-primary)] bg-white/[0.025] px-3 py-3 sm:mt-6 sm:px-4">
          <p className="flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-hover)]">
            <Target aria-hidden="true" className="h-3.5 w-3.5" />
            Objetivo
          </p>
          <p className="mt-2 text-sm leading-6 text-white/62">{project.goal}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {project.deliverables.slice(0, 3).map((deliverable, deliverableIndex) => (
            <span
              key={deliverable}
              className={`items-center gap-1.5 rounded-sm border border-white/[0.09] px-2.5 py-1.5 text-[11px] text-white/48 ${
                deliverableIndex === 2 ? "hidden sm:inline-flex" : "inline-flex"
              }`}
            >
              <CheckCircle2
                aria-hidden="true"
                className="h-3 w-3 text-[var(--success)]"
              />
              {deliverable}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-5 sm:mt-7">
          <TransitionLink
            href={getProjectPath(project)}
            className="motion-link inline-flex min-h-11 items-center gap-2 border-b border-[var(--accent-hover)] pb-1 font-accent text-xs font-semibold text-white"
          >
            Ver estudo de caso
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </TransitionLink>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="motion-link inline-flex min-h-11 items-center gap-2 font-accent text-xs font-semibold text-white/52 transition hover:text-[var(--success)]"
            >
              Visitar site
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
