import type { Metadata, Viewport } from "next";
import { Archivo_Black, Barlow } from "next/font/google";
import Script from "next/script";
import { getSiteUrl } from "@/lib/site";
import "../styles/globals.css";

const siteUrl = getSiteUrl();

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Criação de Sites em Recife | DiegoCodes",
  description:
    "Criação de sites e landing pages em Recife para profissionais e negócios locais. Projetos responsivos, personalizados e integrados ao WhatsApp.",
  applicationName: "DiegoCodes",
  authors: [{ name: "Diego Ewerton", url: siteUrl }],
  keywords: [
    "criação de sites em Recife",
    "desenvolvedor web em Recife",
    "landing pages em Recife",
    "sites para negócios locais",
    "criação de site profissional",
    "desenvolvimento web em Pernambuco",
    "desenvolvedor web Recife",
    "site para personal trainer",
    "landing page profissional",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Criação de Sites em Recife | DiegoCodes",
    description:
      "Criação de sites e landing pages em Recife para profissionais e negócios locais, com projetos responsivos e integrados ao WhatsApp.",
    url: siteUrl,
    siteName: "DiegoCodes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DiegoCodes | criação de sites em Recife para negócios locais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites em Recife | DiegoCodes",
    description:
      "Sites e landing pages em Recife para negócios locais apresentarem serviços e receberem contatos pelo WhatsApp.",
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
      className={`dark ${archivoBlack.variable} ${barlow.variable} font-sans`}
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
