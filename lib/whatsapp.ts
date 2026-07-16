import { contactConfig } from "@/lib/contact";

const defaultWhatsAppNumber = contactConfig.whatsappNumber;
const invalidWhatsAppNumbers = new Set(["5581999999999"]);

export function getWhatsAppNumber(rawValue?: string) {
  const normalizedWhatsAppNumber = rawValue?.replace(/\D/g, "") ?? "";

  return normalizedWhatsAppNumber.length >= 12 &&
    !invalidWhatsAppNumbers.has(normalizedWhatsAppNumber)
    ? normalizedWhatsAppNumber
    : defaultWhatsAppNumber;
}

export function createWhatsAppUrl(
  message: string = contactConfig.defaultMessage,
  rawNumber?: string
) {
  const whatsappNumber = getWhatsAppNumber(
    rawNumber ?? process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  );

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
