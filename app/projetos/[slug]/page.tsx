import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/ui/Reveal";
import TransitionLink from "@/components/ui/TransitionLink";
import {
  getProjectBySlug,
  getProjectPath,
  portfolioProjects,
  type PortfolioProject,
  type ProjectVisual,
} from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

const siteUrl = getSiteUrl();

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  const projectUrl = `${siteUrl}${getProjectPath(project)}`;
  const projectImageUrl = new URL(project.imageSrc, siteUrl).toString();

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: [
      `${project.service} em Recife`,
      `site para ${project.niche}`,
      `projeto de site ${project.name}`,
      "criação de site profissional",
      "DiegoCodes",
    ],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: projectUrl,
      type: "article",
      images: [
        {
          url: projectImageUrl,
          width: 1200,
          height: 630,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [projectImageUrl],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const whatsappMessage = `Olá, Diego! Vi o projeto ${project.name} e quero um site parecido para meu negócio.`;
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);
  const projectUrl = `${siteUrl}${getProjectPath(project)}`;
  const desktopVisual =
    project.visuals.find((visual) => visual.format === "desktop") ??
    project.visuals[0];
  const quickFacts = [
    { label: "Cliente", value: project.name },
    { label: "Nicho", value: project.niche },
    { label: "Serviço", value: project.service },
    { label: "Objetivo", value: project.goal },
    project.year ? { label: "Ano", value: project.year } : null,
  ].filter((fact): fact is { label: string; value: string } => fact !== null);
  const jsonLd = getProjectJsonLd(project, projectUrl);

  return (
    <main
      id="topo"
      className="relative overflow-x-clip bg-[var(--bg-primary)] pt-28"
    >
      <Navbar whatsappUrl={whatsappUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14 lg:pb-24 lg:pt-16">
        <div
          aria-hidden="true"
          className="ghost-grid absolute inset-0 opacity-[0.08]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_78%_22%,rgba(123,47,190,0.22),transparent_38%)]"
        />

        <div className="container-shell relative z-10">
          <TransitionLink
            href="/projetos"
            className="inline-flex min-h-10 items-center gap-2 font-accent text-xs font-semibold text-white/56 transition hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Voltar aos projetos
          </TransitionLink>

          <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-14 xl:gap-20">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="section-kicker">Case DiegoCodes</span>
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.035em] text-[var(--success)]">
                  {project.status}
                </span>
              </div>
              <h1 className="motion-heading mt-6 max-w-[680px] whitespace-normal break-normal font-display text-[clamp(46px,5.2vw,76px)] uppercase leading-[0.88] tracking-[-0.045em] text-white [overflow-wrap:normal] [word-break:normal]">
                {project.name}
              </h1>
              <p className="mt-7 max-w-[620px] font-accent text-base font-medium leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
                {project.shortDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary"
                  >
                    Ver projeto online
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track="whatsapp_project_click"
                  data-track-label={`projeto_${project.slug}_hero`}
                  className="button-secondary"
                >
                  Quero um site parecido
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="relative lg:-mr-5 xl:-mr-10">
              <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[40px] bg-[var(--accent-primary)]/10 blur-3xl" />
              <ProjectDesktopVisual
                visual={desktopVisual}
                priority
                transitionName={`project-${project.slug}-visual`}
                className="shadow-[0_32px_100px_rgba(0,0,0,0.5)]"
              />
            </Reveal>
          </div>

          <Reveal className="mt-12 border-t border-white/10 pt-6 lg:mt-16 lg:pt-7" delay={0.14}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="min-w-0 lg:border-l lg:border-white/10 lg:px-6 lg:first:border-l-0 lg:first:pl-0"
                >
                  <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.08em] text-white/40">
                    {fact.label}
                  </p>
                  <p className="mt-2 line-clamp-3 font-accent text-sm font-semibold leading-5 text-white/88 sm:text-base sm:leading-6">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-[rgba(17,17,17,0.24)]">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <InfoBlock title="O desafio" body={project.challenge} />
            </Reveal>
            <Reveal delay={0.08}>
              <InfoBlock title="A solução" body={project.solution} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <span className="section-kicker">Entrega</span>
              <h2 className="motion-heading section-title mt-5">O que foi entregue</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.deliverables.map((deliverable, index) => (
              <Reveal key={deliverable} delay={index * 0.04}>
                <div className="surface-card flex min-h-[116px] items-start gap-4 rounded-[20px] bg-[rgba(17,17,17,0.86)] p-5">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--success)]/25 bg-[var(--success)]/10 text-[var(--success)]">
                    <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <p className="font-accent text-base font-semibold leading-7 text-white">
                    {deliverable}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f4f3f6] text-[#111111]">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <span className="section-kicker text-black/45">Visual</span>
            <h2 className="motion-heading section-title mt-5">Prova visual do projeto</h2>
            <p className="mt-5 text-base leading-8 text-black/64 md:text-lg">
              A imagem abaixo mostra a prévia desktop do projeto, com foco na
              apresentação principal do site.
            </p>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <ProjectDesktopVisual visual={desktopVisual} light />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.6fr)] lg:items-center">
            <Reveal>
              <span className="section-kicker">Resultado</span>
              <h2 className="motion-heading section-title mt-5">
                Uma presença online mais profissional.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="surface-card rounded-[24px] bg-[rgba(17,17,17,0.9)] p-7">
                <p className="text-lg leading-8 text-[var(--text-secondary)]">
                  {project.resultSummary}
                </p>
                {project.testimonial ? (
                  <p className="mt-6 border-t border-white/8 pt-5 font-accent text-base font-semibold leading-7 text-white">
                    {project.testimonial}
                  </p>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-[rgba(17,17,17,0.26)]">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="section-kicker">Contato</span>
              <h2 className="motion-heading section-title mt-5">
                Quer um site parecido para o seu negócio?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Se você também quer uma página profissional para apresentar seu
                serviço, passar mais confiança e receber contatos pelo
                WhatsApp, me chama e eu te mostro o melhor caminho.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-track="whatsapp_project_click"
                data-track-label={`projeto_${project.slug}_final`}
                className="button-primary mt-8"
              >
                Quero um site parecido
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat whatsappUrl={whatsappUrl} />
    </main>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <article className="surface-card h-full rounded-[24px] bg-[rgba(17,17,17,0.9)] p-7 md:p-8">
      <h2 className="font-display text-[52px] uppercase leading-none text-white">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
        {body}
      </p>
    </article>
  );
}

function ProjectDesktopVisual({
  visual,
  priority = false,
  light = false,
  className,
  transitionName,
}: {
  visual: ProjectVisual;
  priority?: boolean;
  light?: boolean;
  className?: string;
  transitionName?: string;
}) {
  return (
    <figure
      className={`motion-media-frame overflow-hidden rounded-[24px] border ${
        light
          ? "border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
          : "border-white/10 bg-[#050505]"
      } p-3 ${className ?? ""}`}
    >
      <div
        className={`rounded-[18px] border ${
          light ? "border-black/10 bg-black/[0.03]" : "border-white/10 bg-white/[0.04]"
        } p-2`}
      >
        <div
          style={
            transitionName ? { viewTransitionName: transitionName } : undefined
          }
          className="relative aspect-[16/9] overflow-hidden rounded-[14px] bg-black"
        >
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className={`object-cover ${visual.className ?? "object-center"}`}
          />
        </div>
      </div>
      <figcaption
        className={`px-2 pt-4 font-accent text-xs font-semibold ${
          light ? "text-black/48" : "text-white/52"
        }`}
      >
        {visual.label} · {visual.description}
      </figcaption>
    </figure>
  );
}

function getProjectJsonLd(project: PortfolioProject, projectUrl: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `Projeto ${project.name}`,
      headline: project.metaTitle,
      description: project.metaDescription,
      url: projectUrl,
      image: project.visuals.map((visual) =>
        new URL(visual.src, siteUrl).toString()
      ),
      creator: {
        "@type": "Person",
        name: "Diego Ewerton",
        url: siteUrl,
      },
      about: project.niche,
      dateCreated: project.year,
      keywords: [
        project.niche,
        project.service,
        "site profissional",
        "WhatsApp",
        "DiegoCodes",
      ].join(", "),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": projectUrl,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "DiegoCodes",
        url: siteUrl,
      },
      workExample: project.liveUrl
        ? {
            "@type": "WebSite",
            name: project.name,
            url: project.liveUrl,
          }
        : undefined,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projetos",
          item: `${siteUrl}/projetos`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.name,
          item: projectUrl,
        },
      ],
    },
  ];
}
