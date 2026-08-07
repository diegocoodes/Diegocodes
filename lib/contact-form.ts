export type ContactFormValues = {
  name: string;
  phone: string;
  projectType: string;
  message: string;
  email?: string;
  budget?: string;
  deadline?: string;
};

export function buildContactMessage(values: ContactFormValues) {
  const optionalLine = (label: string, value?: string) =>
    value?.trim() ? `*${label}:* ${value.trim()}` : null;
  const lines = [
    "Olá, Diego! Preenchi o formulário no site da DiegoCodes.",
    "",
    `*Nome:* ${values.name.trim()}`,
    `*WhatsApp:* ${values.phone.trim()}`,
    `*Tipo de projeto:* ${values.projectType.trim()}`,
    optionalLine("Faixa de investimento", values.budget),
    optionalLine("Prazo desejado", values.deadline),
    optionalLine("E-mail", values.email),
    "",
    "*Sobre o projeto:*",
    values.message.trim(),
  ];

  return lines.filter((line): line is string => line !== null).join("\n");
}

export function formatPhoneInput(rawValue: string) {
  const digits = rawValue.replace(/\D/g, "").slice(0, 11);

  if (!digits) {
    return "";
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
