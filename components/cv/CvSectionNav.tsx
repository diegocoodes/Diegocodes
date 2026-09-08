"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const sections = [
  { id: "perfil", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "linguagens", label: "Stack" },
  { id: "formacao", label: "Formação" },
  { id: "github", label: "GitHub" },
];

export default function CvSectionNav() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id));
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = "";
      for (const element of elements) {
        if (element && element.getBoundingClientRect().top <= 160) current = element.id;
      }
      setActive(current);
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      ref.current?.style.setProperty("--cv-progress", String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <nav ref={ref} className="cv-index cv-no-print" aria-label="Seções do currículo">
      <div className="cv-shell cv-index-inner">
        <div className="cv-index-links">
          {sections.map(({ id, label }, index) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
              <span aria-hidden="true">0{index + 1}</span>{label}
            </a>
          ))}
        </div>
        <a className="cv-index-contact" href="#contato">Contato <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <span className="cv-read-progress" aria-hidden="true" />
    </nav>
  );
}
