import { ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TransitionLink from "@/components/ui/TransitionLink";
import { testimonialExamples, testimonials } from "@/lib/home-content";
import {
  getProjectPath,
  portfolioProjects,
  type PortfolioProject,
} from "@/lib/projects";

export default function Testimonials() {
  const deliveredProjects = portfolioProjects
    .filter((project: PortfolioProject) => project.featuredOnHome !== false)
    .slice(0, 6);

  return (
    <section
      id="depoimentos"
      aria-labelledby="feedback-heading"
      className="section-space relative scroll-mt-28 overflow-hidden border-t border-[var(--success)]/35 bg-[#070707]"
    >
      <div
        aria-hidden="true"
        className="ghost-grid absolute inset-0 opacity-[0.035] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />
      <div className="container-shell relative z-10">
        <Reveal className="border-b border-white/10 pb-7 sm:pb-9">
          <span className="section-kicker text-white/60">
            Feedbacks &amp; resultados
          </span>
          <h2
            id="feedback-heading"
            className="mt-4 font-display text-[clamp(30px,4.8vw,68px)] uppercase leading-[1.02] tracking-[-0.05em] text-white"
          >
            Confiança que vira{" "}
            <span className="text-[var(--success)]">parceria.</span>
          </h2>
        </Reveal>

        <div
          className={`mt-7 grid gap-5 ${testimonials.length > 1 ? "lg:grid-cols-2" : ""}`}
        >
          {testimonials.map((feedback) => (
            <article
              key={feedback.name}
              className="feedback-quote relative rounded-xl border border-white/10 bg-[linear-gradient(120deg,rgba(123,47,190,0.16),rgba(16,16,16,0.98)_60%)] p-6 sm:p-8"
            >
              <Quote
                aria-hidden="true"
                className="mb-5 h-8 w-8 text-[var(--success)]"
              />
              <blockquote className="max-w-4xl text-base leading-8 text-white/80 sm:text-lg">
                <p>“{feedback.text}”</p>
              </blockquote>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white">
                    <Image
                      src={feedback.imageSrc}
                      alt={feedback.imageAlt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-accent text-sm font-semibold text-white">
                      {feedback.name}
                    </p>
                    <p className="mt-1 text-xs text-white/55">
                      Depoimento do cliente · {feedback.segment}
                    </p>
                  </div>
                </div>
                <a
                  href={feedback.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-[var(--success)]"
                >
                  Ver projeto{" "}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="feedback-examples mt-5 grid gap-5 lg:grid-cols-3">
          {testimonialExamples.map((example) => (
            <article
              key={example.title}
              className="rounded-xl border border-white/10 bg-white/[0.025] p-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/55">
                Exemplo ilustrativo
              </p>
              <h3 className="mt-3 text-base font-semibold text-white">
                {example.title}
              </h3>
              <blockquote className="mt-4 text-sm leading-7 text-white/70">
                <p>“{example.text}”</p>
              </blockquote>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <h3 className="font-accent text-sm font-semibold text-white">
            Outros projetos entregues
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/55">
            Conheça o que foi desenvolvido para cada negócio.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliveredProjects.map((project) => (
              <article
                key={project.slug}
                className="project-result flex flex-col rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-md border border-white/10 bg-black">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--success)]">
                      Resultado do projeto
                    </p>
                    <h4 className="mt-1 text-sm font-semibold leading-5 text-white">
                      {project.name}
                    </h4>
                  </div>
                </div>
                <p className="mb-5 mt-4 text-sm leading-6 text-white/65">
                  {project.resultSummary}
                </p>
                <TransitionLink
                  href={getProjectPath(project)}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-white/80 transition hover:text-[var(--success)]"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--success)]"
                  />
                  Conhecer a entrega
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </TransitionLink>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
