import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiEjs,
  SiGit,
  SiGo,
  SiGreensock,
  SiHtml5,
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
  { label: "TypeScript", icon: SiTypescript },
  { label: "JavaScript", icon: SiJavascript },
  { label: "Java", icon: FaJava },
  { label: "Go", icon: SiGo },
  { label: "HTML", icon: SiHtml5 },
  { label: "CSS", icon: IoLogoCss3 },
  { label: "React", icon: SiReact },
  { label: "React Native", icon: SiReact },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "AngularJS", icon: SiAngular },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "GSAP", icon: SiGreensock },
  { label: "EJS", icon: SiEjs },
  { label: "MySQL", icon: SiMysql },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Prisma", icon: SiPrisma },
  { label: "Supabase", icon: SiSupabase },
  { label: "MongoDB", icon: SiMongodb },
  { label: ".NET", icon: SiDotnet },
  { label: "Docker", icon: SiDocker },
  { label: "AWS", icon: FaAws },
  { label: "Git", icon: SiGit },
  { label: "Vercel", icon: SiVercel },
];

const technologyRows = [technologies.slice(0, 9), technologies.slice(9)];

export default function TechIconGrid({
  staticMode = false,
}: {
  staticMode?: boolean;
}) {
  if (staticMode) {
    return (
      <ul
        className="grid grid-cols-2 border-l border-t border-white/12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        aria-label="Linguagens e tecnologias que utilizo"
      >
        {technologies.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex min-h-[76px] items-center gap-3 border-b border-r border-white/12 bg-white/[0.025] px-4 py-3 sm:min-h-[84px] sm:px-5"
          >
            <Icon
              aria-hidden="true"
              className="h-6 w-6 shrink-0 text-[#c99bea] sm:h-7 sm:w-7"
            />
            <span className="font-accent text-xs font-semibold text-white/82 sm:text-sm">
              {label}
            </span>
          </li>
        ))}
      </ul>
    );
  }

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
