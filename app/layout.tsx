import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { getSiteUrl } from "@/lib/site";
import "../styles/globals.css";

const siteUrl = getSiteUrl();

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Diego Codes | Sites que transformam visitas em clientes",
  description:
    "Sites profissionais para negócios locais de Recife que querem passar mais confiança, aparecer melhor online e receber contatos pelo WhatsApp.",
  applicationName: "diegocodes",
  authors: [{ name: "Diego", url: siteUrl }],
  keywords: [
    "desenvolvedor web Recife",
    "freelancer Recife",
    "site para clínica",
    "site para barbearia",
    "site para personal trainer",
    "site para psicólogo",
    "site para advogado",
    "site para empresas",
    "landing page restaurante",
    "identidade visual Recife",
    "Next.js Recife",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Diego Codes | Sites que transformam visitas em clientes",
    description:
      "Criação de sites para negócios locais que querem uma presença profissional e contato direto pelo WhatsApp.",
    url: siteUrl,
    siteName: "diegocodes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "diegocodes - sites premium para negócios locais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Codes | Sites que transformam visitas em clientes",
    description:
      "Sites profissionais para negócios locais que precisam de uma presença digital mais clara.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable} font-sans`}
    >
      <body className="bg-[var(--bg-primary)] font-sans text-white antialiased">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3894043180889934');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3894043180889934&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
