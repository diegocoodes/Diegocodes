import dynamic from "next/dynamic";
import AnalyticsBridge from "@/components/AnalyticsBridge";
import Deliverables from "@/components/Deliverables";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { contactConfig } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const AudienceSection = dynamic(() => import("@/components/AudienceSection"), {
  loading: () => <SectionFallback className="h-[420px]" />,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionFallback className="h-[520px]" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <SectionFallback className="h-[480px]" />,
});

const WhyChoose = dynamic(() => import("@/components/WhyChoose"), {
  loading: () => <SectionFallback className="h-[480px]" />,
});

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <SectionFallback className="h-[440px]" />,
});

const AboutDiego = dynamic(() => import("@/components/AboutDiego"), {
  loading: () => <SectionFallback className="h-[420px]" />,
});

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <SectionFallback className="h-[420px]" />,
});

const CTAFinal = dynamic(() => import("@/components/CTAFinal"), {
  loading: () => <SectionFallback className="h-[320px]" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <SectionFallback className="h-[120px]" />,
});

function SectionFallback({ className }: { className?: string }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className={`surface-card animate-pulse ${className ?? "h-64"}`} />
      </div>
    </section>
  );
}

export default function Home() {
  const whatsappUrl = createWhatsAppUrl();
  const siteUrl = getSiteUrl();
  const jsonLd = getHomeJsonLd(siteUrl);

  return (
    <main className="relative overflow-x-clip bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnalyticsBridge />
      <Navbar whatsappUrl={whatsappUrl} />
      <Hero whatsappUrl={whatsappUrl} />
      <TrustBar />
      <AudienceSection />
      <Projects limit={3} />
      <Deliverables />
      <HowItWorks whatsappUrl={whatsappUrl} />
      <WhyChoose whatsappUrl={whatsappUrl} />
      <Testimonials />
      <AboutDiego whatsappUrl={whatsappUrl} />
      <FAQ />
      <CTAFinal whatsappUrl={whatsappUrl} />
      <Footer />
      <WhatsAppFloat whatsappUrl={whatsappUrl} />
    </main>
  );
}

function getHomeJsonLd(siteUrl: string) {
  const personId = `${siteUrl}/#diego-ewerton`;
  const serviceId = `${siteUrl}/#professional-service`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: "Diego Ewerton",
      jobTitle: "Desenvolvedor web",
      url: siteUrl,
      sameAs: [contactConfig.instagramUrl],
      homeLocation: {
        "@type": "Place",
        name: "Recife, Pernambuco",
      },
      worksFor: {
        "@id": serviceId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: "DiegoCodes",
      url: siteUrl,
      description:
        "Criação de sites e landing pages em Recife para profissionais, prestadores de serviço e negócios locais.",
      founder: {
        "@id": personId,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Recife",
        },
        {
          "@type": "State",
          name: "Pernambuco",
        },
      ],
      serviceType: [
        "Criação de sites em Recife",
        "Landing pages em Recife",
        "Sites para negócios locais",
        "Desenvolvimento web em Pernambuco",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: "Portuguese",
        areaServed: "BR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "DiegoCodes",
      url: siteUrl,
      publisher: {
        "@id": serviceId,
      },
      inLanguage: "pt-BR",
    },
  ];
}
