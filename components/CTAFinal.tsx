"use client";

import {
  AtSign,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import MotionWords from "@/components/ui/MotionWords";
import { contactConfig } from "@/lib/contact";
import { buildContactMessage, formatPhoneInput } from "@/lib/contact-form";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type CTAFinalProps = {
  whatsappUrl: string;
};

type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type SubmitState = "idle" | "sending" | "ready";

const SUBMIT_READY_DELAY_MS = 210;
const WHATSAPP_REDIRECT_DELAY_MS = 420;

const fieldClassName =
  "min-h-[52px] w-full rounded-[8px] border border-white/10 bg-white/[0.035] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/28 hover:border-white/18 focus:border-[var(--accent-hover)] focus:ring-2 focus:ring-[var(--accent-primary)]/20";

export default function CTAFinal({ whatsappUrl }: CTAFinalProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const submitLabel =
    submitState === "sending"
      ? "Abrindo WhatsApp…"
      : submitState === "ready"
        ? "Tudo certo"
        : "Enviar pelo WhatsApp";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitState !== "idle") return;

    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const message = buildContactMessage({
      name: value("name"),
      phone: value("phone"),
      projectType: value("projectType"),
      message: value("message"),
      email: value("email"),
      budget: value("budget"),
      deadline: value("deadline"),
    });

    const destination = createWhatsAppUrl(message);

    setSubmitState("sending");

    window.setTimeout(() => {
      setSubmitState("ready");
    }, SUBMIT_READY_DELAY_MS);

    window.setTimeout(() => {
      window.location.assign(destination);
    }, WHATSAPP_REDIRECT_DELAY_MS);
  }

  return (
    <section
      id="contato"
      className="section-space scroll-mt-28 overflow-hidden bg-[#070707]"
    >
      <div className="container-shell relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="section-kicker text-white/62">Próximo passo</span>
          <h2 className="motion-heading mt-5 font-display text-[42px] uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-[58px] lg:text-[72px]">
            <MotionWords
              words={[
                "Vamos",
                "conversar",
                "sobre",
                "seu",
                { text: "próximo", className: "text-[var(--success)]" },
                { text: "projeto", className: "text-[var(--success)]" },
              ]}
            />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Conte o que você precisa para eu entender o cenário e preparar os próximos passos.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.72fr)] lg:items-stretch">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="contact-form grid gap-5"
              data-submit-state={submitState}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Seu nome" htmlFor="contact-name" required>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    data-required-message="Informe seu nome."
                    placeholder="Como você se chama?"
                    className={fieldClassName}
                    onInvalid={handleInvalidField}
                    onInput={clearFieldError}
                  />
                </FormField>

                <FormField label="Seu WhatsApp" htmlFor="contact-phone" required>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    minLength={14}
                    maxLength={15}
                    data-required-message="Informe seu WhatsApp com DDD."
                    placeholder="(81) 99999-9999"
                    className={fieldClassName}
                    onInvalid={handleInvalidField}
                    onInput={handlePhoneInput}
                  />
                </FormField>

                <FormField label="Seu e-mail" htmlFor="contact-email">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="voce@empresa.com.br"
                    className={fieldClassName}
                    onInvalid={handleInvalidField}
                    onInput={clearFieldError}
                  />
                </FormField>

                <FormField label="Tipo de projeto" htmlFor="contact-project-type" required>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    required
                    defaultValue=""
                    data-required-message="Selecione o tipo de projeto."
                    className={fieldClassName}
                    onInvalid={handleInvalidField}
                    onInput={clearFieldError}
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option>Site institucional</option>
                    <option>Landing page</option>
                    <option>Portfólio profissional</option>
                    <option>Página para campanha ou lançamento</option>
                    <option>Outro projeto</option>
                  </select>
                </FormField>

                <FormField label="Faixa de investimento" htmlFor="contact-budget">
                  <select
                    id="contact-budget"
                    name="budget"
                    defaultValue=""
                    className={fieldClassName}
                    onInput={clearFieldError}
                  >
                    <option value="">Ainda não defini</option>
                    <option>Até R$ 1.500</option>
                    <option>De R$ 1.500 a R$ 3.000</option>
                    <option>De R$ 3.000 a R$ 5.000</option>
                    <option>Acima de R$ 5.000</option>
                  </select>
                </FormField>

                <FormField label="Prazo desejado" htmlFor="contact-deadline">
                  <select
                    id="contact-deadline"
                    name="deadline"
                    defaultValue=""
                    className={fieldClassName}
                    onInput={clearFieldError}
                  >
                    <option value="">Sem prazo definido</option>
                    <option>Até 30 dias</option>
                    <option>De 1 a 2 meses</option>
                    <option>De 2 a 3 meses</option>
                  </select>
                </FormField>
              </div>

              <FormField label="Conte sobre o projeto" htmlFor="contact-message" required>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={20}
                  rows={5}
                  data-required-message="Conte brevemente o que você precisa."
                  placeholder="Fale sobre seu negócio, objetivo e o que espera do site."
                  className={`${fieldClassName} min-h-[148px] resize-y`}
                  onInvalid={handleInvalidField}
                  onInput={clearFieldError}
                />
              </FormField>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  data-track="whatsapp_form_submit"
                  data-track-label="contact_form"
                  data-state={submitState}
                  disabled={submitState !== "idle"}
                  aria-busy={submitState === "sending"}
                  className="contact-submit-button button-primary inline-flex min-h-[52px] w-full px-7 py-4 disabled:cursor-wait disabled:hover:translate-y-0 sm:w-auto sm:min-w-[232px]"
                >
                  <span className="contact-submit-copy">{submitLabel}</span>
                  {submitState === "ready" ? (
                    <CheckCircle2
                      aria-hidden="true"
                      className="contact-submit-icon h-4 w-4"
                    />
                  ) : (
                    <Send
                      aria-hidden="true"
                      className="contact-submit-icon h-4 w-4"
                    />
                  )}
                </button>
                <p
                  className="contact-submit-status min-h-6 text-sm leading-6 text-[var(--success)]"
                  role="status"
                  aria-live="polite"
                  data-state={submitState}
                >
                  {submitState === "idle" ? "" : submitLabel}
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.08} fromX={18} fromY={0}>
            <aside className="relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[var(--success)]/22 bg-[rgba(9,13,11,0.96)] shadow-[0_0_48px_rgba(61,220,132,0.06)]">
              <div className="ghost-grid grid flex-1 content-start gap-8 p-6 md:p-8">
                <ContactItem icon={MapPin} title="Atendimento">
                  <p>Recife, Pernambuco</p>
                  <p>Projetos para todo o Brasil</p>
                </ContactItem>

                <ContactItem icon={MessageCircle} title="Contato">
                  <p>WhatsApp: (81) 99238-8506</p>
                  <p className="break-words">{contactConfig.email}</p>
                </ContactItem>

                <ContactItem icon={Clock3} title="Retorno">
                  <p>Resposta inicial em até 24 horas</p>
                  <p>Atendimento direto com Diego</p>
                </ContactItem>
              </div>

              <div className="border-t border-[var(--success)]/18 bg-[var(--success)]/[0.04] p-6 md:p-8">
                <h3 className="font-accent text-lg font-semibold text-[var(--success)]">
                  Canais diretos
                </h3>
                <div className="mt-5 flex items-center gap-3">
                  <ContactIconLink
                    href={whatsappUrl}
                    label="Abrir WhatsApp"
                    icon={MessageCircle}
                    external
                  />
                  <ContactIconLink
                    href={`mailto:${contactConfig.email}`}
                    label="Enviar e-mail"
                    icon={Mail}
                  />
                  <ContactIconLink
                    href={contactConfig.instagramUrl}
                    label="Abrir Instagram"
                    icon={AtSign}
                    external
                  />
                </div>
              </div>
              <div aria-hidden="true" className="h-1 bg-[var(--success)]/65" />
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
};

function FormField({ label, htmlFor, required = false, children }: FormFieldProps) {
  return (
    <div className="form-field">
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-accent text-sm font-medium text-white/76"
      >
        {label}{" "}
        {required ? (
          <span className="text-[var(--success)]">
            *<span className="sr-only"> obrigatório</span>
          </span>
        ) : (
          <span className="text-xs font-normal text-white/38">(opcional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

type ContactItemProps = {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
};

function ContactItem({ icon: Icon, title, children }: ContactItemProps) {
  return (
    <div>
      <div className="flex items-center gap-3 text-[var(--success)]">
        <Icon aria-hidden="true" className="h-5 w-5" />
        <h3 className="font-accent text-lg font-semibold">{title}</h3>
      </div>
      <div className="mt-3 grid gap-1 text-sm leading-6 text-white/62">{children}</div>
    </div>
  );
}

type ContactIconLinkProps = {
  href: string;
  label: string;
  icon: typeof MessageCircle;
  external?: boolean;
};

function ContactIconLink({
  href,
  label,
  icon: Icon,
  external = false,
}: ContactIconLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--success)]/24 bg-black/45 text-[var(--success)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--success)]/55 hover:bg-black"
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
    </a>
  );
}

function handleInvalidField(event: FormEvent<FieldElement>) {
  const field = event.currentTarget;

  if (field.validity.valueMissing) {
    field.setCustomValidity(
      field.dataset.requiredMessage ?? "Preencha este campo."
    );
    return;
  }

  if (field.validity.typeMismatch) {
    field.setCustomValidity("Informe um valor válido.");
    return;
  }

  if (field.validity.tooShort) {
    field.setCustomValidity("Adicione um pouco mais de informação.");
  }
}

function clearFieldError(event: FormEvent<FieldElement>) {
  event.currentTarget.setCustomValidity("");
}

function handlePhoneInput(event: FormEvent<HTMLInputElement>) {
  const input = event.currentTarget;

  input.value = formatPhoneInput(input.value);
  input.setCustomValidity("");
}
