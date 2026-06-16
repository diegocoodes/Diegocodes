import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SpotlightPanel from "@/components/ui/SpotlightPanel";
import type { PortfolioProject } from "@/lib/projects";
import { getProjectPath } from "@/lib/projects";

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <SpotlightPanel className="surface-card group h-full rounded-[28px] bg-[rgba(17,17,17,0.9)]">
      <article
        className={`grid h-full gap-6 p-4 md:p-5 ${
          featured ? "lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)]" : ""
        }`}
      >
        <ProjectMockup project={project} featured={featured} />

        <div
          className={`flex flex-col justify-between px-1 pb-2 ${
            featured ? "py-4 md:p-4" : "pt-1"
          }`}
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Projeto {String(index + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--success)]/25 bg-[var(--success)]/10 px-3 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--success)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                {project.status}
              </span>
            </div>

            <p className="mt-7 font-accent text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              {project.niche}
            </p>
            <h3
              className={`mt-3 font-display uppercase leading-none tracking-[0.04em] text-white ${
                featured ? "text-[64px] md:text-[82px]" : "text-[44px] md:text-[52px]"
              }`}
            >
              {project.name}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
              {project.cardDescription}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 sm:flex-row">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir projeto ${project.name} em nova aba`}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)] px-5 py-3 font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:brightness-110"
              >
                Ver projeto
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            ) : null}

            <Link
              href={getProjectPath(project)}
              aria-label={`Ver detalhes do projeto ${project.name}`}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[var(--success)]/45 hover:text-[var(--success)]"
            >
              {project.liveUrl ? "Sobre" : "Ver detalhes"}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </SpotlightPanel>
  );
}

function ProjectMockup({
  project,
  featured,
}: {
  project: PortfolioProject;
  featured: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#050505] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
      <div
        className={`relative overflow-hidden rounded-[18px] border border-white/10 bg-black ${
          featured ? "aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          loading="lazy"
          sizes={
            featured
              ? "(min-width: 1024px) 56vw, 100vw"
              : "(min-width: 1024px) 45vw, 100vw"
          }
          className={`object-cover transition duration-700 group-hover:scale-[1.035] ${
            project.imageClassName ?? "object-center"
          }`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_56%,rgba(0,0,0,0.44)_100%)]" />
      </div>
    </div>
  );
}
