import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import MotionWords from "@/components/ui/MotionWords";
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
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-end lg:pb-14">
          <Reveal>
            <div className="flex items-center gap-3 font-accent text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--success)]">
              <span className="h-px w-10 bg-[var(--success)]" />
              Projetos selecionados
            </div>
            <h2 className="mt-6 max-w-[920px] font-display text-[clamp(54px,9.4vw,126px)] uppercase leading-[0.82] tracking-[-0.045em] text-white">
              <MotionWords
                words={[
                  "Ideias",
                  "que",
                  "ganharam",
                  { text: "tela.", className: "text-[var(--accent-hover)]" },
                ]}
              />
            </h2>
          </Reveal>

          <Reveal delay={0.1} fromX={18} fromY={0}>
            <div className="lg:border-l lg:border-white/10 lg:pl-8">
              <p className="max-w-sm text-sm leading-7 text-white/58 md:text-base">
                Uma seleção de experiências digitais pensadas para comunicar valor,
                gerar confiança e transformar visitas em conversas.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-4 divide-y divide-white/10">
          {visibleProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={Math.min(index * 0.04, 0.12)}
              fromX={index % 2 === 0 ? -22 : 22}
              fromY={0}
            >
              <ProjectCase project={project} index={index} priority={index === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-end md:mt-14">
          <TransitionLink
            href="/projetos"
            className="motion-link group inline-flex min-h-14 items-center gap-4 rounded-md border border-white/12 bg-white/[0.045] py-2 pl-6 pr-2 font-accent text-xs font-semibold text-white transition hover:border-[var(--accent-hover)]/55 hover:bg-[rgba(123,47,190,0.09)]"
          >
            Explorar portfólio completo
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--accent-primary)] text-white">
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
  priority,
}: {
  project: PortfolioProject;
  index: number;
  priority: boolean;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article className="project-case group relative grid gap-7 py-9 md:py-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-16">
      <div
        className={`project-case-visual motion-media-frame relative overflow-hidden rounded-md border border-white/10 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.34)] lg:col-span-7 ${
          isReversed ? "lg:order-2" : ""
        }`}
        style={{ viewTransitionName: `project-${project.slug}-visual` }}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            priority={priority}
            quality={92}
            sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
            className={`object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${
              project.imageClassName ?? "object-center"
            }`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,5,5,0.05)_35%,rgba(123,47,190,0.16)_100%)] opacity-70 transition duration-500 group-hover:opacity-30" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

        </div>
      </div>

      <div
        className={`project-case-content lg:col-span-5 ${
          isReversed ? "lg:order-1 lg:pr-4" : "lg:pl-4"
        }`}
      >
        <div className="flex flex-wrap items-center gap-2 font-accent text-[11px] font-semibold uppercase leading-5 tracking-[0.035em] text-white/60">
          <span>{project.niche}</span>
          <span aria-hidden="true">/</span>
          <span>{project.service}</span>
          <span aria-hidden="true">/</span>
          <span>{project.status}</span>
        </div>

        <h3 className="mt-5 break-words font-display text-[38px] uppercase leading-[0.86] tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[var(--accent-hover)] sm:text-[clamp(42px,6vw,76px)] [overflow-wrap:anywhere]">
          {project.name}
        </h3>
        <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 md:text-base">
          {project.shortDescription}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-5">
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
