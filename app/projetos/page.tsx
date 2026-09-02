import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/ui/Reveal";
import { portfolioProjects } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const siteUrl = getSiteUrl();
const ogImageUrl = new URL("/opengraph-image", siteUrl).toString();

export const metadata: Metadata = {
  title: "Projetos de Sites e Landing Pages",
  description:
    "Conheça projetos de sites e landing pages criados pela DiegoCodes para negócios locais apresentarem serviços, transmitirem confiança e receberem contatos pelo WhatsApp.",
  keywords: [
    "portfólio desenvolvedor web Recife",
    "projetos de sites profissionais",
    "exemplos de landing pages",
    "sites para negócios locais",
    "designer de sites Recife",
  ],
  alternates: {
    canonical: `${siteUrl}/projetos`,
  },
  openGraph: {
    title: "Projetos de Sites e Landing Pages | DiegoCodes",
    description:
      "Veja projetos reais de sites e landing pages com foco em apresentação, confiança e contato pelo WhatsApp.",
    url: `${siteUrl}/projetos`,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Projetos DiegoCodes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos de Sites e Landing Pages | DiegoCodes",
    description:
      "Projetos reais de sites, landing pages e portais criados para negócios locais.",
    images: [ogImageUrl],
  },
};

export default function ProjectsPage() {
  const whatsappUrl = createWhatsAppUrl(
    "Olá, Diego! Vi seus projetos e quero um site profissional para meu negócio."
  );
  const jsonLd = getProjectsPageJsonLd();

  return (
    <main
      id="topo"
      className="relative overflow-x-clip bg-[var(--bg-primary)] pt-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar whatsappUrl={whatsappUrl} />

      <section className="section-space overflow-hidden">
        <div
          aria-hidden="true"
          className="ghost-grid absolute inset-0 opacity-[0.08]"
        />
        <div className="container-shell relative z-10">
          <Reveal className="max-w-5xl">
            <span className="section-kicker">Portfólio</span>
            <h1 className="motion-heading display-title mt-6">
              Projetos com página própria, prova visual e caminho para contato.
            </h1>
          </Reveal>

          <Reveal className="mt-8 max-w-3xl" delay={0.08}>
            <p className="eyebrow-copy">
              Cada projeto mostra o contexto do cliente, o que foi entregue, as
              imagens do projeto e o link para chamar no WhatsApp com uma
              mensagem personalizada.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="lista-projetos" className="section-space scroll-mt-28 pt-0">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolioProjects.map((project, index) => {
              const isFeatured = index === 0;

              return (
                <Reveal
                  key={project.slug}
                  delay={Math.min(index * 0.045, 0.14)}
                  className={isFeatured ? "lg:col-span-2" : undefined}
                >
                  <ProjectCard
                    project={project}
                    featured={isFeatured}
                    transitionName={`project-${project.slug}-visual`}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat whatsappUrl={whatsappUrl} />
    </main>
  );
}

function getProjectsPageJsonLd() {
  return {
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
    ],
  };
}
