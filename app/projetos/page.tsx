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
  title: "Projetos de sites profissionais | Diego Codes",
  description:
    "Conheça projetos de sites, landing pages e portais criados pela Diego Codes para apresentar negócios com mais confiança e gerar contatos pelo WhatsApp.",
  alternates: {
    canonical: `${siteUrl}/projetos`,
  },
  openGraph: {
    title: "Projetos de sites profissionais | Diego Codes",
    description:
      "Veja projetos reais de sites profissionais com foco em apresentação, confiança e contato pelo WhatsApp.",
    url: `${siteUrl}/projetos`,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Projetos Diego Codes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos de sites profissionais | Diego Codes",
    description:
      "Projetos reais de sites, landing pages e portais criados para negócios locais.",
    images: [ogImageUrl],
  },
};

export default function ProjectsPage() {
  const whatsappUrl = createWhatsAppUrl(
    "Olá, Diego! Vi seus projetos e quero um site profissional para meu negócio."
  );

  return (
    <main
      id="topo"
      className="relative overflow-x-clip bg-[var(--bg-primary)] pt-28"
    >
      <Navbar whatsappUrl={whatsappUrl} />

      <section className="section-space overflow-hidden">
        <div
          aria-hidden="true"
          className="ghost-grid absolute inset-0 opacity-[0.08]"
        />
        <div className="container-shell relative z-10">
          <Reveal className="max-w-5xl">
            <span className="section-kicker">Portfólio</span>
            <h1 className="display-title mt-6">
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
                  delay={index * 0.05}
                  className={isFeatured ? "lg:col-span-2" : undefined}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    featured={isFeatured}
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
