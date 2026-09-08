import localFont from "next/font/local";
import "./cv.css";

const plex = localFont({
  src: "./fonts/plex-sans-latin.woff2",
  variable: "--font-cv-sans",
  display: "swap",
  weight: "400 600",
});

const condensed = localFont({
  src: "./fonts/barlow-condensed-bold.woff2",
  variable: "--font-cv-display",
  display: "swap",
  weight: "700",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-cv-mono",
  display: "swap",
  weight: "100 900",
});

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${plex.variable} ${condensed.variable} ${geistMono.variable}`}>{children}</div>
  );
}
