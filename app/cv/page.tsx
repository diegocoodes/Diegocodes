import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import CvSectionNav from "@/components/cv/CvSectionNav";
import GifCutout from "@/components/cv/GifCutout";
import TechIconGrid from "@/components/cv/TechIconGrid";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "@/components/ui/Reveal";
import { contactConfig } from "@/lib/contact";
import { cvCertificates, cvExperiences, cvProfessionalLinks, cvProjectNotes } from "@/lib/cv";
import { getProjectPath, portfolioProjects } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diego Ewerton | Desenvolvedor Full Stack",
  description: "Experiência, projetos e formação de Diego Ewerton. Desenvolvedor full stack em Recife, com atuação na Prefeitura do Paulista e na diegocodes.",
  alternates: { canonical: `${getSiteUrl()}/cv` },
  robots: { index: false, follow: false },
};

export default function CvPage() {
  return (
    <main className="cv-page" id="inicio">
      <a href="#perfil" className="cv-skip-link">Pular para o currículo</a>
      <header className="cv-masthead">
        <div className="cv-shell cv-masthead-inner">
          <Link href="/cv" className="cv-wordmark" aria-label="Diego Ewerton, início do currículo">de<span>.</span></Link>
          <p className="cv-masthead-caption">Diego Ewerton<br /><span>Desenvolvedor full stack</span></p>
          <div className="cv-masthead-actions">
            <a href={cvProfessionalLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
            <a href="/curriculo/Diego.cv%20(1)%20(2).pdf" download="Curriculo-Diego-Ewerton.pdf" className="cv-download">Baixar CV <Download aria-hidden="true" /></a>
          </div>
        </div>
      </header>

      <CvSectionNav />

      <section className="cv-hero" aria-labelledby="cv-name">
        <div className="cv-shell cv-hero-grid">
          <div className="cv-identity">
            <p className="cv-kicker cv-hero-kicker"><span className="cv-dot" aria-hidden="true" />Recife, Pernambuco <span>Brasil</span></p>
            <h1 id="cv-name" className="cv-name"><span className="cv-name-line"><span>Diego</span></span><span className="cv-name-line"><span>Ewerton<span className="cv-name-period">.</span></span></span></h1>
            <div className="cv-hero-bottom">
              <p>Desenvolvedor<br /><strong>Full Stack</strong></p>
              <a href="#projetos" className="cv-round-link" aria-label="Conhecer os projetos"><ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
          <div className="cv-portrait-panel cv-screen-only">
            <span className="cv-portrait-caption">Interfaces, sistemas<br />e código em produção.</span>
            <div className="cv-portrait">
              <Image src="/perfil/diego.png" alt="Diego Ewerton" fill priority sizes="(min-width: 1024px) 36vw, (min-width: 640px) 40vw, 90vw" className="cv-portrait-image" />
            </div>
            <div className="cv-portrait-bottom"><span>Atualmente na<br /><strong>Prefeitura do Paulista</strong></span><ArrowUpRight aria-hidden="true" /></div>
          </div>
        </div>
        <div className="cv-shell cv-hero-footnote"><span>React · TypeScript · Node.js</span><a href={cvProfessionalLinks.github} target="_blank" rel="noreferrer"><SiGithub aria-hidden="true" /> diegocoodes <ArrowUpRight aria-hidden="true" /></a></div>
      </section>

      <section id="perfil" className="cv-section cv-profile" data-cv-tone="dark">
        <div className="cv-shell">
          <SectionHeading number="01" title="Sobre mim" />
          <div className="cv-profile-grid">
            <Reveal className="cv-profile-lead" fromY={30}>
              <p>Eu desenho as telas.<br /><span>E escrevo o código.</span></p>
            </Reveal>
            <Reveal delay={0.08} className="cv-profile-copy">
              <p>Sou desenvolvedor full stack em Recife. Na Prefeitura do Paulista, trabalho no portal institucional e em sistemas usados pela gestão e pelos servidores.</p>
              <p>Também criei a diegocodes, onde desenvolvo sites e aplicações para empresas. Acompanho a conversa com o cliente, o design, o desenvolvimento e a publicação.</p>
              <dl className="cv-profile-facts"><div><dt>Formação</dt><dd>Análise e Desenvolvimento de Sistemas</dd></div><div><dt>Atuação</dt><dd>Web, interfaces e back-end</dd></div><div><dt>Localização</dt><dd>Recife / PE</dd></div></dl>
            </Reveal>
          </div>
          <div className="cv-personal-strip cv-screen-only">
            <p>Também cabe<br /><span>um lado nerd.</span></p>
            <GifCutout character="gengar" />
            <GifCutout character="gojo" />
            <GifCutout character="raven" />
          </div>
        </div>
      </section>

      <section id="experiencia" className="cv-section cv-experience" data-cv-tone="dark">
        <div className="cv-shell cv-experience-layout">
          <div className="cv-experience-intro">
            <SectionHeading number="02" title="Experiência" />
            <p className="cv-section-note">Projetos institucionais,<br />trabalho independente<br />e desenvolvimento web.</p>
            <span className="cv-experience-years" aria-hidden="true">2025<br /><span>— hoje</span></span>
          </div>
          <ol className="cv-career-list">
            {cvExperiences.map((experience, index) => (
              <li key={`${experience.company}-${experience.role}`} className={`cv-career-entry ${index === 0 ? "cv-career-current" : ""}`}>
                <Reveal fromY={20}>
                  <div className="cv-career-meta"><span>{experience.period}</span><span>{experience.type}</span></div>
                  <h3>{experience.role}</h3>
                  <p className="cv-career-company">{experience.company} <span> / {experience.workMode}</span></p>
                  <p className="cv-body">{experience.description}</p>
                  <TechnologyLine technologies={experience.technologies} />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="projetos" className="cv-section cv-projects" data-cv-tone="light">
        <div className="cv-shell">
          <SectionHeading number="03" title="Projetos selecionados" note="Do briefing ao site publicado. Abra um projeto para ver os detalhes." />
          <Accordion type="single" collapsible defaultValue={portfolioProjects[0].slug} className="cv-project-directory">
            {portfolioProjects.map((project, index) => {
              const note = cvProjectNotes[project.slug as keyof typeof cvProjectNotes];
              return (
                <AccordionItem value={project.slug} key={project.slug} className="cv-project-entry">
                  <AccordionTrigger className="cv-project-trigger">
                    <span className="cv-project-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="cv-project-name">{project.name}</span>
                    <span className="cv-project-kind">{project.service}</span>
                  </AccordionTrigger>
                  <AccordionContent className="cv-project-expanded">
                    <div className="cv-project-detail-grid">
                      <Link href={getProjectPath(project)} className="cv-project-image" aria-label={`Conhecer ${project.name}`}>
                        <Image src={project.imageSrc} alt={project.imageAlt} fill quality={82} sizes="(min-width: 1280px) 650px, (min-width: 768px) 55vw, 92vw" className={project.imageClassName ?? "object-cover"} style={{objectFit: project.imageClassName?.includes("object-contain") ? "contain" : "cover"}} />
                        <span className="cv-image-link-label">Ver projeto <ArrowUpRight aria-hidden="true" /></span>
                      </Link>
                      <div className="cv-project-description">
                        <p className="cv-kicker">{project.niche} / {project.status}</p>
                        <p className="cv-project-summary">{note?.description ?? project.shortDescription}</p>
                        <div className="cv-project-delivery"><h4>Meu trabalho</h4><p>{note?.delivery ?? project.resultSummary}</p></div>
                        <div className="cv-project-actions"><Link href={getProjectPath(project)}>Conhecer o projeto <ArrowUpRight aria-hidden="true" /></Link>{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Abrir site <ArrowUpRight aria-hidden="true" /></a> : null}</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <div className="cv-print-projects">{portfolioProjects.map(project => <article key={project.slug}><h3>{project.name}</h3><p>{cvProjectNotes[project.slug as keyof typeof cvProjectNotes]?.description ?? project.shortDescription}</p></article>)}</div>
        </div>
      </section>

      <section id="linguagens" className="cv-section cv-stack" data-cv-tone="dark">
        <div className="cv-shell">
          <SectionHeading number="04" title="Linguagens & ferramentas" />
          <div className="cv-stack-layout">
            <Reveal className="cv-stack-intro"><p className="cv-stack-lead">O projeto define<br /><span>a ferramenta.</span></p><p className="cv-body">React, TypeScript e Node.js fazem parte do meu dia a dia. Também trabalho com bancos de dados, aplicações mobile e infraestrutura.</p><p className="cv-kicker">Explore as áreas ao lado <ArrowUpRight aria-hidden="true" /></p></Reveal>
            <TechIconGrid />
          </div>
        </div>
      </section>

      <section id="formacao" className="cv-section cv-education" data-cv-tone="dark">
        <div className="cv-shell">
          <SectionHeading number="05" title="Formação & estudos" />
          <div className="cv-education-layout">
            <Reveal className="cv-degree">
              <p className="cv-kicker">Graduação / 2023–2025</p>
              <span className="cv-degree-monogram" aria-hidden="true">ADS</span>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>UNIBRA<br /><span>Centro Universitário Brasileiro</span></p>
              <p className="cv-degree-date">fev. de 2023 — dez. de 2025</p>
            </Reveal>
            <div className="cv-certificates"><h3 className="cv-certificate-heading">Cursos & certificações <span>{String(cvCertificates.length).padStart(2,"0")}</span></h3>
              {cvCertificates.map((certificate, index) => (
                <Reveal key={`${certificate.name}-${certificate.date}`} delay={Math.min(index * 0.02, 0.1)} fromY={14}>
                  <article className="cv-certificate-row">
                    <div><p className="cv-certificate-issuer">{certificate.issuer}</p><h4>{"credentialUrl" in certificate ? <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">{certificate.name}<ArrowUpRight aria-hidden="true" /></a> : certificate.name}</h4></div>
                    <p className="cv-certificate-date">{certificate.date}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="github" className="cv-section cv-github" data-cv-tone="dark">
        <div className="cv-shell">
          <SectionHeading number="06" title="Código aberto" />
          <Reveal className="cv-github-layout">
            <div className="cv-github-profile"><SiGithub aria-hidden="true" /><h3>@diegocoodes</h3><p>Repositórios, estudos e contribuições públicas.</p><a href={cvProfessionalLinks.github} target="_blank" rel="noreferrer">Ver no GitHub <ArrowUpRight aria-hidden="true" /></a></div>
            <div className="cv-github-activity"><div className="cv-activity-label"><span>Histórico de contribuições</span><span>Último ano</span></div><div className="cv-chart-scroll" tabIndex={0} role="region" aria-label="Calendário de contribuições; role horizontalmente para ver todo o período">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://ghchart.rshah.org/7650a3/diegocoodes" alt="Contribuições públicas de diegocoodes no GitHub durante o último ano" loading="lazy" width={722} height={112} />
            </div><p className="cv-chart-caption">Dados públicos do GitHub · calendário por ghchart</p></div>
          </Reveal>
        </div>
      </section>

      <footer id="contato" className="cv-contact" data-cv-tone="light">
        <div className="cv-shell">
          <Reveal className="cv-contact-top"><p className="cv-kicker">Contato profissional</p><h2>Vamos<br />conversar<span>?</span></h2><a className="cv-contact-email" href={`mailto:${contactConfig.email}`}><span>{contactConfig.email}</span><Mail aria-hidden="true" /></a></Reveal>
          <div className="cv-footer-bottom"><span>Diego Ewerton / Recife, PE</span><div><a href={cvProfessionalLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a><a href={cvProfessionalLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a><a href="#inicio">Voltar ao topo <ArrowUpRight aria-hidden="true" /></a></div></div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({number, title, note}: {number: string; title: string; note?: string}) {
  return <Reveal className="cv-section-heading" fromY={22}><header><span className="cv-section-number" aria-hidden="true">{number}</span><h2>{title}</h2>{note ? <p>{note}</p> : null}</header></Reveal>;
}

function TechnologyLine({technologies}: {technologies: readonly string[]}) {
  return <ul className="cv-technology-tags" aria-label="Tecnologias utilizadas">{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>;
}
