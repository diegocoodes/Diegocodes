import type { IconType } from "react-icons";
import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiGit,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Technology = {
  label: string;
  icon: IconType;
};

const technologies: Technology[] = [
  { label: "React", icon: SiReact },
  { label: "React Native", icon: SiReact },
  { label: "TypeScript", icon: SiTypescript },
  { label: "JavaScript", icon: SiJavascript },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "AngularJS", icon: SiAngular },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "MySQL", icon: SiMysql },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Prisma", icon: SiPrisma },
  { label: "Supabase", icon: SiSupabase },
  { label: "MongoDB", icon: SiMongodb },
  { label: ".NET", icon: SiDotnet },
  { label: "Go", icon: SiGo },
  { label: "Docker", icon: SiDocker },
  { label: "Git", icon: SiGit },
  { label: "Vercel", icon: SiVercel },
];

const technologyRows = [technologies.slice(0, 9), technologies.slice(9)];

export default function TechIconGrid() {
  return (
    <div
      className="cv-tech-marquee border-y border-white/15"
      aria-label="Tecnologias que utilizo"
    >
      <ul className="sr-only">
        {technologies.map(({ label }) => (
          <li key={label}>{label}</li>
        ))}
      </ul>

      {technologyRows.map((row, rowIndex) => (
        <div
          key={row[0].label}
          className={`cv-tech-viewport ${
            rowIndex === 1 ? "border-t border-white/10" : ""
          }`}
          aria-hidden="true"
        >
          <div
            className={`cv-tech-track ${
              rowIndex === 1 ? "cv-tech-track-reverse" : ""
            }`}
          >
            <TechnologyGroup technologies={row} />
            <TechnologyGroup technologies={row} duplicate />
          </div>
        </div>
      ))}
    </div>
  );
}

function TechnologyGroup({
  technologies,
  duplicate = false,
}: {
  technologies: Technology[];
  duplicate?: boolean;
}) {
  return (
    <div className="cv-tech-group">
      {technologies.map(({ label, icon: Icon }) => (
        <div
          key={`${duplicate ? "duplicate-" : ""}${label}`}
          className="cv-tech-item"
        >
          <Icon
            aria-hidden="true"
            className="h-7 w-7 shrink-0 text-[#c99bea] sm:h-8 sm:w-8"
          />
          <span className="font-accent text-sm font-semibold text-white sm:text-base">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
