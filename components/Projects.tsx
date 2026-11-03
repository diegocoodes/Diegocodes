import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TransitionLink from "@/components/ui/TransitionLink";
import { createWhatsAppUrl } from "@/lib/whatsapp";
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
      className="section-space projects-section relative scroll-mt-28 overflow-hidden border-y border-white/[0.07] bg-[#070707]"
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
        <Reveal className="border-b border-white/10 pb-6 sm:pb-7">
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
            Uma seleção do que já saiu do papel. Conheça cada projeto.
          </p>
        </Reveal>
        <div className="project-grid mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectPreviewCard key={project.slug} project={project} />
          ))}
          <aside className="project-contact-card flex h-full min-w-0 flex-col items-start justify-center rounded-xl border border-[var(--accent-hover)]/40 bg-[linear-gradient(145deg,rgba(123,47,190,0.18),rgba(16,16,18,0.96))] p-6 sm:p-8">
            <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--success)]">
              Vamos criar juntos
            </span>
            <h3 className="mt-5 font-display text-[clamp(28px,3vw,42px)] uppercase leading-[1.02] tracking-[-0.04em] text-white">
              Seu próximo projeto.
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/65">
              Um site com a identidade do seu negócio pode começar com uma
              conversa.
            </p>
            <a
              href={createWhatsAppUrl(
                "Olá, Diego! Quero conversar sobre um site para meu negócio.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-[var(--accent-primary)] px-5 py-3 text-xs font-semibold text-white transition hover:brightness-110"
            >
              Conversar com Diego
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </aside>
        </div>
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

export function ProjectPreviewCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="project-preview-card group flex h-full min-w-0 flex-col rounded-xl border border-white/10 bg-[#101012]">
      <TransitionLink
        href={getProjectPath(project)}
        aria-label={`Ver estudo de caso de ${project.name}`}
        className="project-monitor-stage relative block overflow-hidden rounded-t-xl px-4 pb-4 pt-5 sm:px-5 sm:pb-5 sm:pt-6"
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
                sizes="(min-width: 1280px) 330px, (min-width: 1024px) 29vw, (min-width: 768px) 42vw, 85vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-[1.015] ${project.imageClassName ?? "object-top"}`}
              />
            </div>
            <div
              aria-hidden="true"
              className="flex h-4 items-center justify-center sm:h-5"
            >
              <span className="h-1 w-1 rounded-full bg-[var(--success)] shadow-[0_0_7px_rgba(61,220,132,0.5)]" />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="project-monitor-neck mx-auto h-4 w-[16%] sm:h-5"
          />
          <div
            aria-hidden="true"
            className="project-monitor-foot mx-auto h-1.5 w-[36%] rounded-t-full sm:h-2"
          />
        </div>
      </TransitionLink>
      <div className="flex flex-1 flex-col border-t border-white/[0.07] p-4 sm:p-5">
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
        <h3 className="mt-3 break-words font-display text-[clamp(23px,2.2vw,30px)] uppercase leading-[1.02] tracking-[-0.04em] text-white">
          {project.name}
        </h3>
        <p className="mb-4 mt-3 max-w-xl text-sm leading-6 text-white/60">
          {project.cardDescription}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-white/10 pt-3">
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
