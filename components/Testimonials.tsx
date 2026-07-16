import { ExternalLink, Quote } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { proofCards, testimonials } from "@/lib/home-content";

export default function Testimonials() {
  const mainTestimonial = testimonials[0];

  return (
    <section
      id="depoimentos"
      className="section-space scroll-mt-28 bg-[#f4f3f6] text-[#111111]"
    >
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.6fr)] lg:items-end">
          <Reveal>
            <span className="section-kicker text-black/45">Depoimentos</span>
            <h2 className="section-title mt-5">O que os clientes dizem</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base leading-8 text-black/64 md:text-lg">
              Provas reais ajudam o visitante a entender o cuidado na entrega,
              o nível de acabamento e a confiança transmitida pelo projeto.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(320px,0.86fr)_minmax(0,1.14fr)]">
          <Reveal>
            <article className="flex h-full flex-col rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_55px_rgba(0,0,0,0.06)] md:p-8">
              <Quote aria-hidden="true" className="h-10 w-10 text-[var(--accent-primary)]" />
              <blockquote className="mt-7 text-lg leading-9 text-black/74">
                “{mainTestimonial.text}”
              </blockquote>

              <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={mainTestimonial.imageSrc}
                    alt={mainTestimonial.imageAlt}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-accent text-lg font-semibold text-[#111111]">
                      {mainTestimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-black/52">
                      {mainTestimonial.segment}
                    </p>
                  </div>
                </div>

                <a
                  href={mainTestimonial.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-black px-5 py-3 font-accent text-xs font-semibold text-white transition hover:bg-[var(--accent-primary)]"
                >
                  Projeto relacionado
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {proofCards.map((proof, index) => (
              <Reveal key={proof.title} delay={0.08 + index * 0.05}>
                <article className="flex h-full min-h-[300px] flex-col rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_55px_rgba(0,0,0,0.06)]">
                  <Image
                    src={proof.imageSrc}
                    alt={proof.imageAlt}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <p className="mt-7 text-sm font-medium text-black/48">
                    {proof.segment}
                  </p>
                  <h3 className="mt-2 font-accent text-2xl font-semibold leading-tight text-[#111111]">
                    {proof.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-8 text-black/64">
                    {proof.description}
                  </p>
                  <a
                    href={proof.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 border-t border-black/10 pt-5 font-accent text-xs font-semibold text-black/52 transition hover:text-[var(--accent-primary)]"
                  >
                    Ver site desenvolvido
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
