import dynamic from "next/dynamic";
import AnalyticsBridge from "@/components/AnalyticsBridge";
import Deliverables from "@/components/Deliverables";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionFallback className="h-[520px]" />,
});

const SocialProof = dynamic(() => import("@/components/SocialProof"), {
  loading: () => <SectionFallback className="h-[480px]" />,
});

const WhyChoose = dynamic(() => import("@/components/WhyChoose"), {
  loading: () => <SectionFallback className="h-[480px]" />,
});

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <SectionFallback className="h-[440px]" />,
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

const prefilledMessage =
  "Olá, Diego! Quero criar um site profissional para meu negócio.";

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
  const whatsappUrl = createWhatsAppUrl(prefilledMessage);

  return (
    <main className="relative overflow-x-clip bg-[var(--bg-primary)]">
      <AnalyticsBridge />
      <Navbar whatsappUrl={whatsappUrl} />
      <Hero whatsappUrl={whatsappUrl} />
      <Deliverables />
      <Projects />
      <SocialProof />
      <WhyChoose whatsappUrl={whatsappUrl} />
      <HowItWorks />
      <FAQ />
      <CTAFinal whatsappUrl={whatsappUrl} />
      <Footer />
      <WhatsAppFloat whatsappUrl={whatsappUrl} />
    </main>
  );
}
