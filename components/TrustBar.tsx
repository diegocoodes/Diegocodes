import AstroMissionBand, {
  type AstroStat,
} from "@/components/ui/astro-mission-band";
import { trustIndicators } from "@/lib/home-content";

export default function TrustBar() {
  const marks: AstroStat["icon"][] = [
    "projects",
    "clock",
    "responsive",
    "person",
  ];
  const stats: AstroStat[] = trustIndicators.map((indicator, index) => ({
    value: indicator.title,
    label: indicator.description,
    icon: marks[index] ?? "projects",
    images:
      index === 0
        ? [
            {
              src: "/projects/universo-mkt-hero.webp",
              alt: "Projeto Universo Marketing",
            },
            {
              src: "/projects/fcar-garage-hero.webp",
              alt: "Projeto Fcar Garage",
            },
          ]
        : index === 3
          ? [{ src: "/perfil/diego.png", alt: "Diego Ewerton" }]
          : undefined,
  }));
  return <AstroMissionBand stats={stats} />;
}
