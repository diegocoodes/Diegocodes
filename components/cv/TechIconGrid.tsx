import type { CSSProperties } from "react";
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
import Reveal from "@/components/ui/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Technology = { label: string; icon: IconType; color: string };
type TechnologyCategory = {
  title: string;
  description: string;
  technologies: Technology[];
};

const categories: TechnologyCategory[] = [
  {
    title: "Linguagens",
    description:
      "TypeScript e JavaScript no dia a dia. Java e Go também fazem parte dos meus estudos e projetos.",
    technologies: [
      { label: "TypeScript", icon: SiTypescript, color: "#65a9f3" },
      { label: "JavaScript", icon: SiJavascript, color: "#f0db4f" },
      { label: "Java", icon: FaJava, color: "#f1a16d" },
      { label: "Go", icon: SiGo, color: "#60d8e9" },
      { label: "HTML", icon: SiHtml5, color: "#fa9275" },
      { label: "CSS", icon: IoLogoCss3, color: "#85b8ff" },
    ],
  },
  {
    title: "Front-end",
    description:
      "React para a web, React Native para mobile. CSS e animação para cuidar dos detalhes da interface.",
    technologies: [
      { label: "React", icon: SiReact, color: "#77dff5" },
      { label: "React Native", icon: SiReact, color: "#77dff5" },
      { label: "AngularJS", icon: SiAngular, color: "#f788a8" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#6cdeeb" },
      { label: "GSAP", icon: SiGreensock, color: "#b2ef6b" },
    ],
  },
  {
    title: "Back-end",
    description:
      "APIs, autenticação e bancos de dados. A parte que faz as telas funcionarem de verdade.",
    technologies: [
      { label: "Node.js", icon: SiNodedotjs, color: "#92cb79" },
      { label: ".NET", icon: SiDotnet, color: "#bc9cff" },
      { label: "EJS", icon: SiEjs, color: "#d3c885" },
      { label: "PostgreSQL", icon: SiPostgresql, color: "#94bfe5" },
      { label: "MySQL", icon: SiMysql, color: "#80bfd1" },
      { label: "MongoDB", icon: SiMongodb, color: "#8ad89c" },
      { label: "Prisma", icon: SiPrisma, color: "#d4d6ee" },
      { label: "Supabase", icon: SiSupabase, color: "#70dfaf" },
    ],
  },
  {
    title: "Infra & deploy",
    description:
      "Git para acompanhar as mudanças. Docker, AWS e Vercel para preparar e publicar as aplicações.",
    technologies: [
      { label: "Docker", icon: SiDocker, color: "#7ebaff" },
      { label: "AWS", icon: FaAws, color: "#ffbf72" },
      { label: "Git", icon: SiGit, color: "#f79581" },
      { label: "Vercel", icon: SiVercel, color: "#eee8f4" },
    ],
  },
];

export default function TechIconGrid() {
  return (
    <Reveal>
      <Tabs defaultValue="Linguagens" className="cv-stack-tabs">
        <TabsList className="cv-stack-tablist" aria-label="Áreas de tecnologia">
          {categories.map((category) => (
            <TabsTrigger
              key={category.title}
              value={category.title}
              className="cv-stack-tab"
            >
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent
            key={category.title}
            value={category.title}
            forceMount
            className="cv-stack-panel"
          >
            <header>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </header>
            <ul className="cv-tech-tiles">
              {category.technologies.map(
                ({ label, icon: Icon, color }, techIndex) => (
                  <li
                    key={label}
                    style={
                      {
                        "--tech-color": color,
                        "--tech-delay": `${techIndex * 45 + 100}ms`,
                      } as CSSProperties
                    }
                  >
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ),
              )}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </Reveal>
  );
}
