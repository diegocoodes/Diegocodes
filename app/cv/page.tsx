import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import CvPrintButton from "@/components/cv/CvPrintButton";
import TechIconGrid from "@/components/cv/TechIconGrid";
import Reveal from "@/components/ui/Reveal";
import { contactConfig } from "@/lib/contact";
import {
  cvCertificates,
  cvExperiences,
  cvProfessionalLinks,
  cvServices,
} from "@/lib/cv";
import {
  getProjectPath,
  portfolioProjects,
  type PortfolioProject,
} from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const prefeituraExperiences = cvExperiences.filter(
  (experience) => experience.company === "Prefeitura da Cidade do Paulista"
);
const independentExperiences = cvExperiences.filter(
  (experience) => experience.company !== "Prefeitura da Cidade do Paulista"
);
const primarySkills = ["React", "Node.js", "TypeScript", "JavaScript", "SQL"];

export const metadata: Metadata = {
  title: "Diego Ewerton | Desenvolvedor Full Stack",
  description:
    "Currículo profissional de Diego Ewerton, desenvolvedor Full Stack Júnior com experiência em projetos institucionais, SaaS e produtos web.",
  alternates: {
    canonical: `${siteUrl}/cv`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CvPage() {
  return (
    <main className="cv-page min-h-screen overflow-x-clip bg-white text-[#211b24]">
      <header className="border-b border-[#24182f]/15 bg-white text-[#24182f]">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Link
            href="/cv"
            aria-label="Voltar ao início do currículo"
            className="inline-flex min-h-11 items-center font-display text-xl uppercase leading-none tracking-[-0.035em] sm:text-2xl"
          >
            Diego Ewerton
          </Link>

          <nav
            aria-label="Links profissionais"
            className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-0 sm:w-auto sm:justify-end"
          >
            <HeaderLink href={cvProfessionalLinks.github} label="GitHub" icon="github" />
            <HeaderLink href={cvProfessionalLinks.linkedin} label="LinkedIn" />
            <HeaderLink
              href={`mailto:${contactConfig.email}`}
              label="E-mail"
              external={false}
            />
            <CvPrintButton />
          </nav>
        </div>
      </header>

      <section className="cv-hero relative overflow-hidden bg-[#17101F] text-white">
        <div aria-hidden="true" className="ghost-grid absolute inset-0 opacity-[0.05]" />
        <div
          aria-hidden="true"
          className="cv-hero-rail absolute inset-x-0 top-0 h-1 origin-left bg-[linear-gradient(90deg,#7b2fbe,#c99bea,#3ddc84)]"
        />

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-118px)] max-w-[1220px] items-center gap-8 px-4 pb-0 pt-12 sm:min-h-0 sm:px-8 sm:py-16 lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.28fr)] lg:gap-14 lg:px-10 lg:py-20 xl:gap-20">
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.04em] text-[#d7abea] sm:text-xs">
                Desenvolvedor full stack / Recife
              </p>
              <h1 className="mt-6 font-display text-[clamp(44px,15vw,150px)] uppercase leading-[0.78] tracking-[-0.065em] text-white sm:mt-7">
                Diego
                <span className="block text-[#b96ee2]">Ewerton</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08} fromY={20}>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Desenvolvo produtos digitais completos, conectando interface,
                back-end, dados e publicação em soluções que já operam no mundo real.
              </p>
            </Reveal>

            <Reveal delay={0.13} fromY={18}>
              <div className="mt-8 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
                <div>
                  <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.035em] text-white/58">
                    Stack principal
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/82">
                    {primarySkills.join(" / ")}
                  </p>
                </div>
                <p className="flex items-start gap-2 text-xs leading-6 text-white/65 sm:max-w-[220px]">
                  <MapPin
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-[#c99bea]"
                  />
                  Recife, Pernambuco / presencial ou híbrido
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.1}
            fromX={-24}
            fromY={0}
            className="cv-screen-only order-2 lg:order-1"
          >
            <div className="cv-hero-photo relative mx-auto h-[350px] w-full max-w-[420px] sm:h-[470px] lg:h-[590px]">
              <div
                aria-hidden="true"
                className="absolute inset-x-[8%] bottom-[8%] top-[12%] bg-[radial-gradient(circle_at_center,rgba(123,47,190,0.48),rgba(61,220,132,0.1)_48%,transparent_72%)] blur-2xl"
              />
              <Image
                src="/perfil/diego.png"
                alt="Diego Ewerton, desenvolvedor Full Stack."
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 88vw"
                className="cv-hero-photo-image object-contain object-bottom"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-[5%] bottom-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CvSection id="perfil" label="Perfil" title="Do design ao deploy" tone="light">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.68fr)] lg:gap-16">
          <Reveal>
            <p className="max-w-4xl font-display text-[clamp(34px,8.8vw,68px)] uppercase leading-[0.9] tracking-[-0.045em] text-[#24182f]">
              Produtos digitais claros por fora e sólidos por dentro.
            </p>
          </Reveal>
          <Reveal delay={0.06} fromX={18} fromY={0}>
            <div className="grid gap-5 text-[15px] leading-7 text-[#5f5663] sm:text-base sm:leading-8">
              <p>
                Tenho experiência prática em projetos institucionais e produtos
                próprios. Atualmente mantenho e evoluo o portal da Prefeitura da
                Cidade do Paulista.
              </p>
              <p>
                Também desenvolvo soluções completas, do desenho da experiência à
                integração de dados e ao deploy em produção.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 sm:mt-14">
          <ul className="cv-service-grid grid grid-cols-1 border-l border-t border-[#24182f]/14 min-[380px]:grid-cols-2 lg:grid-cols-4">
            {cvServices.map((service) => (
              <li
                key={service}
                className="flex min-h-[72px] items-end border-b border-r border-[#24182f]/14 p-4 font-accent text-sm font-semibold text-[#403745] sm:min-h-24 sm:p-5"
              >
                {service}
              </li>
            ))}
          </ul>
        </Reveal>
      </CvSection>

      <CvSection
        id="stack"
        label="Stack"
        title="Tecnologias em movimento"
        tone="dark"
      >
        <Reveal fromY={16}>
          <TechIconGrid />
        </Reveal>
      </CvSection>

      <CvSection
        id="experiencia"
        label="Experiência"
        title="Trajetória profissional"
        tone="light"
      >
        <div className="border-t border-[#24182f]/16">
          <Reveal fromX={14} fromY={0}>
            <article className="border-b border-[#24182f]/16 py-7 sm:py-9">
              <header className="grid gap-4 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-10">
                <div>
                  <p className="font-accent text-xs font-semibold uppercase tracking-[0.035em] text-[#7b2fbe]">
                    jan. de 2025 — atual
                  </p>
                  <p className="mt-2 text-xs text-[#625967]">Presencial</p>
                </div>
                <h3 className="font-display text-[clamp(30px,9vw,50px)] uppercase leading-[0.9] tracking-[-0.035em] text-[#24182f]">
                  Prefeitura da Cidade do Paulista
                </h3>
              </header>

              <div className="mt-7 lg:ml-[230px] lg:mt-8">
                {prefeituraExperiences.map((experience) => (
                  <div
                    key={`${experience.role}-${experience.period}`}
                    className="cv-experience-role grid gap-4 border-t border-[#24182f]/12 py-6 sm:grid-cols-[165px_minmax(0,1fr)] sm:gap-7"
                  >
                    <div>
                      <p className="font-accent text-xs font-semibold text-[#7b2fbe]">
                        {experience.period}
                      </p>
                      <p className="mt-1 text-xs text-[#625967]">{experience.type}</p>
                    </div>
                    <div>
                      <h4 className="font-display text-xl uppercase leading-tight tracking-[-0.025em] text-[#24182f] sm:text-2xl">
                        {experience.role}
                      </h4>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f5663] sm:text-base">
                        {experience.description}
                      </p>
                      <TechnologyLine technologies={experience.technologies} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {independentExperiences.map((experience, index) => (
            <Reveal
              key={`${experience.role}-${experience.company}-${experience.period}`}
              delay={Math.min(index * 0.045, 0.12)}
              fromX={14}
              fromY={0}
            >
              <article className="cv-experience-role grid gap-5 border-b border-[#24182f]/16 py-7 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-10 lg:py-9">
                <div>
                  <p className="font-accent text-xs font-semibold uppercase tracking-[0.035em] text-[#7b2fbe]">
                    {experience.period}
                  </p>
                  <p className="mt-2 text-xs text-[#625967]">
                    {experience.type} / {experience.workMode}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[clamp(28px,8vw,42px)] uppercase leading-[0.92] tracking-[-0.035em] text-[#24182f]">
                    {experience.role}
                  </h3>
                  <p className="mt-2 font-accent text-sm font-semibold text-[#514858]">
                    {experience.company}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5f5663] sm:text-base">
                    {experience.description}
                  </p>
                  <TechnologyLine technologies={experience.technologies} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </CvSection>

      <CvSection
        id="projetos"
        label="Projetos feitos"
        title="Produtos publicados"
        tone="dark"
      >
        <div className="border-t border-white/15">
          {portfolioProjects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </CvSection>

      <CvSection
        id="formacao"
        label="Formação"
        title="Base acadêmica e evolução"
        tone="light"
      >
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <div className="border-l-4 border-[#7b2fbe] py-2 pl-5 sm:pl-8">
              <p className="font-accent text-xs font-semibold uppercase tracking-[0.035em] text-[#7b2fbe]">
                Curso Superior de Tecnologia
              </p>
              <h3 className="mt-5 font-display text-[clamp(28px,8vw,42px)] uppercase leading-[0.92] tracking-[-0.035em] text-[#24182f]">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="mt-6 font-accent text-sm font-semibold text-[#514858]">
                UNIBRA — Centro Universitário Brasileiro
              </p>
              <p className="mt-2 text-xs text-[#665c68]">
                fev. de 2023 — dez. de 2025
              </p>
            </div>
          </Reveal>

          <div className="border-t border-[#24182f]/16">
            {cvCertificates.map((certificate, index) => (
              <Reveal
                key={`${certificate.name}-${certificate.date}`}
                delay={index * 0.03}
              >
                <div className="cv-certificate-row grid gap-2 border-b border-[#24182f]/16 py-5 sm:grid-cols-[minmax(0,1fr)_190px] sm:gap-6">
                  <div>
                    {"credentialUrl" in certificate ? (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 py-2 font-accent text-sm font-semibold text-[#24182f] transition hover:text-[#7b2fbe]"
                      >
                        {certificate.name}
                        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <h3 className="font-accent text-sm font-semibold text-[#24182f]">
                        {certificate.name}
                      </h3>
                    )}
                    <p className="mt-1 text-xs leading-5 text-[#665c68]">
                      {certificate.issuer}
                    </p>
                  </div>
                  <time className="font-accent text-xs font-semibold text-[#7b2fbe] sm:text-right">
                    {certificate.date}
                  </time>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </CvSection>

      <CvSection
        id="github"
        label="GitHub"
        title="Contribuições em código"
        tone="dark"
      >
        <Reveal fromY={18}>
          <a
            href={cvProfessionalLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Ver o perfil de Diego Ewerton no GitHub"
            className="group block overflow-hidden border border-white/15 bg-[#21172b] p-4 transition duration-300 hover:border-[#b96ee2]/65 sm:p-7"
          >
            <div className="mb-6 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-accent text-xs font-semibold uppercase tracking-[0.04em] text-[#3ddc84]">
                  github.com/diegocoodes
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
                  Histórico público de contribuições, atualizado pelo GitHub.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-accent text-xs font-semibold text-[#d7abea] transition group-hover:text-white">
                Abrir perfil
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </div>
            {/* The SVG is generated from the public GitHub contribution calendar. */}
            <div className="overflow-x-auto pb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/7b2fbe/diegocoodes"
                alt="Calendário de contribuições de diegocoodes no GitHub no último ano"
                loading="lazy"
                className="h-auto min-w-[720px] w-full rounded-sm bg-white p-3 [filter:saturate(1.15)_hue-rotate(2deg)]"
              />
            </div>
          </a>
        </Reveal>
      </CvSection>

      <section className="cv-contact border-t border-white/10 bg-[#17101F] text-white">
        <Reveal className="mx-auto grid max-w-[1220px] gap-9 px-4 py-14 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)] md:items-end md:py-20 lg:px-10">
          <div>
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.04em] text-[#d7abea]">
              Contato profissional
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-[clamp(40px,12vw,86px)] uppercase leading-[0.86] tracking-[-0.05em]">
              Vamos construir o próximo desafio.
            </h2>
          </div>
          <div className="grid border-t border-white/15">
            <ContactLink href={`mailto:${contactConfig.email}`} label={contactConfig.email} />
            <ContactLink href={cvProfessionalLinks.github} label="github.com/diegocoodes" />
            <ContactLink href={cvProfessionalLinks.linkedin} label="LinkedIn / Diego Ewerton" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function CvSection({
  id,
  label,
  title,
  tone,
  children,
}: {
  id: string;
  label: string;
  title: string;
  tone: "dark" | "light";
  children: React.ReactNode;
}) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      data-cv-tone={tone}
      className={`cv-section scroll-mt-8 py-14 sm:py-16 lg:py-20 ${
        isDark ? "bg-[#17101F] text-white" : "bg-white text-[#24182f]"
      }`}
    >
      <div className="mx-auto max-w-[1220px] px-4 sm:px-8 lg:px-10">
        <Reveal>
          <header
            className={`mb-9 border-b pb-6 sm:mb-12 sm:pb-7 ${
              isDark ? "border-white/15" : "border-[#24182f]/16"
            }`}
          >
            <p
              className={`font-accent text-[11px] font-semibold uppercase tracking-[0.04em] sm:text-xs ${
                isDark ? "text-[#d7abea]" : "text-[#7b2fbe]"
              }`}
            >
              {label}
            </p>
            <h2
              className={`mt-4 max-w-5xl font-display text-[clamp(38px,10vw,76px)] uppercase leading-[0.88] tracking-[-0.045em] ${
                isDark ? "text-white" : "text-[#24182f]"
              }`}
            >
              {title}
            </h2>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const imageOnRight = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index * 0.04, 0.14)} fromY={20}>
      <article className="cv-project-row group grid gap-6 border-b border-white/15 py-8 sm:py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)] lg:items-center lg:gap-12 lg:py-14">
        <div
          className={`cv-project-image relative aspect-[16/10] overflow-hidden border border-white/15 bg-[#2d2731] ${
            imageOnRight ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            quality={82}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className={`cv-project-image-media object-cover ${project.imageClassName ?? ""}`}
            style={
              project.imageClassName?.includes("object-contain")
                ? { objectFit: "contain" }
                : undefined
            }
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#17101F]/35 via-transparent to-transparent"
          />
        </div>

        <div className={imageOnRight ? "lg:order-1" : ""}>
          <p className="font-accent text-[11px] font-semibold uppercase leading-5 tracking-[0.035em] text-[#d7abea] sm:text-xs">
            {project.niche} / {project.service}
          </p>
          <h3 className="mt-4 font-display text-[clamp(30px,9vw,48px)] uppercase leading-[0.9] tracking-[-0.04em] text-white">
            {project.name}
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
            {project.shortDescription}
          </p>
          <p className="mt-4 border-l border-[#c99bea]/55 pl-4 text-sm leading-7 text-white/58">
            {project.resultSummary}
          </p>

          <div className="cv-no-print mt-6 flex flex-col gap-2 min-[420px]:flex-row min-[420px]:gap-5">
            <Link
              href={getProjectPath(project)}
              className="inline-flex min-h-11 items-center justify-between gap-2 border-b border-[#c99bea] py-2 font-accent text-xs font-semibold text-white transition hover:text-[#d7abea] min-[420px]:justify-start"
            >
              Ver estudo do projeto
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-between gap-2 border-b border-white/20 py-2 font-accent text-xs font-semibold text-white/72 transition hover:border-white/55 hover:text-white min-[420px]:justify-start"
              >
                Abrir site
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function TechnologyLine({ technologies }: { technologies: readonly string[] }) {
  return (
    <p className="mt-4 font-accent text-[11px] font-semibold uppercase leading-6 tracking-[0.025em] text-[#625767]">
      {technologies.join(" / ")}
    </p>
  );
}

function HeaderLink({
  href,
  label,
  external = true,
  icon,
}: {
  href: string;
  label: string;
  external?: boolean;
  icon?: "github";
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex min-h-11 items-center gap-2 border-b border-[#24182f]/20 py-3 font-accent text-xs font-semibold text-[#514858] transition hover:border-[#7b2fbe] hover:text-[#7b2fbe]"
    >
      {icon === "github" ? <SiGithub aria-hidden="true" className="h-4 w-4" /> : null}
      {label}
    </a>
  );
}

function ContactLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex min-h-14 items-center justify-between gap-4 border-b border-white/15 py-4 font-accent text-sm font-semibold text-white/72 transition hover:text-white"
    >
      <span className="break-words [overflow-wrap:anywhere]">{label}</span>
      {href.startsWith("mailto:") ? (
        <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-[#c99bea]" />
      ) : (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-[#c99bea] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
