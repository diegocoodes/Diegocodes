import {
  CheckCircle2,
  Globe2,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import MotionSurface from "@/components/ui/MotionSurface";
import { deliverables } from "@/lib/home-content";

const serviceIcons = [PenTool, MonitorSmartphone, MessageCircle, Globe2] as const;

export default function Deliverables() {
  return (
    <section
      id="servicos"
      className="section-space scroll-mt-28 bg-[rgba(17,17,17,0.24)]"
    >
      <div className="container-shell">
        <Reveal className="grid gap-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,0.48fr)] lg:items-end">
          <div>
          <span className="section-kicker">Serviços</span>
          <h2 className="section-title mt-5">
            O que está incluso no seu projeto
          </h2>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            Menos itens soltos, mais pacote fechado: apresentação, mobile,
            contato e publicação organizados em uma entrega enxuta.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {deliverables.map((item, index) => {
            const Icon = serviceIcons[index] ?? CheckCircle2;

            return (
            <Reveal key={item.title} delay={index * 0.04}>
              <MotionSurface className="group relative flex h-full min-h-[210px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(18,18,18,0.96),rgba(8,8,8,0.98))] p-6 transition-colors duration-300 hover:border-[var(--success)]/35">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent-primary),var(--success))] opacity-70"
                />
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--success)]/25 bg-[var(--success)]/10 text-[var(--success)] transition duration-300 group-hover:scale-105">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-accent text-xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </MotionSurface>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
