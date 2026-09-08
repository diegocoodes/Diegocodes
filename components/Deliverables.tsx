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
        <Reveal>
          <div>
          <span className="section-kicker">Serviços</span>
          <h2 className="motion-heading mt-4 whitespace-nowrap font-display text-[clamp(23px,6.2vw,82px)] uppercase leading-none tracking-[-0.04em] text-white sm:mt-5">
            Tudo no seu projeto
          </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {deliverables.map((item, index) => {
            const Icon = serviceIcons[index] ?? CheckCircle2;

            return (
            <Reveal key={item.title} delay={index * 0.04}>
              <MotionSurface className="group relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(145deg,rgba(18,18,18,0.96),rgba(8,8,8,0.98))] p-5 transition-colors duration-300 hover:border-[var(--success)]/35 sm:min-h-[210px] sm:p-6">
                <span
                  aria-hidden="true"
                  className="motion-rule absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent-primary),var(--success))] opacity-70"
                />
                <div className="motion-icon flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--success)]/25 bg-[var(--success)]/10 text-[var(--success)] sm:h-11 sm:w-11 sm:rounded-2xl">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg uppercase leading-tight tracking-[-0.025em] text-white sm:mt-6 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-[var(--text-secondary)] sm:mt-3 sm:text-base sm:leading-7">
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
