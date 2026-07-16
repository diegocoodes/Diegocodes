import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
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
  const highlightedDeliverables = project.deliverables.slice(
    0,
    featured ? 5 : 4
  );

  return (
    <SpotlightPanel className="surface-card group h-full rounded-[24px] bg-[rgba(17,17,17,0.9)]">
      <article
        className={`grid h-full gap-6 p-4 md:p-5 ${
          featured ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]" : ""
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
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-accent text-xs font-semibold text-white/70">
                Projeto {String(index + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--success)]/25 bg-[var(--success)]/10 px-3 py-1.5 font-accent text-xs font-semibold text-[var(--success)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                {project.status}
              </span>
            </div>

            <p className="mt-7 font-accent text-sm font-semibold text-[var(--text-secondary)]">
              {project.niche}
            </p>
            <h3
              className={`mt-3 font-display uppercase leading-none text-white ${
                featured ? "text-[52px] md:text-[68px]" : "text-[42px] md:text-[50px]"
              }`}
            >
              {project.name}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
              {project.cardDescription}
            </p>

            <div className="mt-6 grid gap-4">
              <ProjectContextBlock title="Problema" body={project.challenge} />
              <ProjectContextBlock title="Solução" body={project.solution} />
            </div>

            <div className="mt-6">
              <p className="font-accent text-sm font-semibold text-white">
                Principais entregas
              </p>
              <ul className="mt-3 grid gap-2">
                {highlightedDeliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex items-start gap-2 text-sm leading-6 text-[var(--text-secondary)]"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--success)]"
                    />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 sm:flex-row">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir projeto ${project.name} em nova aba`}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)] px-5 py-3 font-accent text-xs font-semibold text-white transition duration-300 hover:brightness-110"
              >
                Ver projeto
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            ) : null}

            <Link
              href={getProjectPath(project)}
              aria-label={`Ver detalhes do projeto ${project.name}`}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 font-accent text-xs font-semibold text-white transition duration-300 hover:border-[var(--success)]/45 hover:text-[var(--success)]"
            >
              Ver estudo de caso
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </SpotlightPanel>
  );
}

function ProjectContextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
      <p className="font-accent text-xs font-semibold text-[var(--success)]">
        {title}
      </p>
      <p className="mt-2 line-clamp-4 text-sm leading-6 text-[var(--text-secondary)]">
        {body}
      </p>
    </div>
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
    <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#050505] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black ${
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
