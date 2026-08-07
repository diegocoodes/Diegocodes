type WhatsAppFloatProps = {
  whatsappUrl: string;
};

export default function WhatsAppFloat({ whatsappUrl }: WhatsAppFloatProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp com Diego"
      data-track="whatsapp_float_click"
      data-track-label="floating_whatsapp"
      className="group fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.12] bg-[var(--accent-primary)] text-white transition duration-300 hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:bottom-7 md:right-7 md:h-auto md:w-auto md:gap-3 md:px-4 md:py-3"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full md:bg-black/15">
        <WhatsAppIcon />
      </span>
      <span className="hidden pr-1 text-left md:block">
        <span className="block font-accent text-xs font-semibold text-white/72">
          WhatsApp
        </span>
        <span className="mt-1 block font-accent text-sm font-semibold text-white">
          Solicitar orçamento
        </span>
      </span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M20 12A8 8 0 0 1 8.35 19.12L4 20L4.9 15.77A8 8 0 1 1 20 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.55 9.26C9.72 8.9 9.9 8.88 10.16 8.89C10.37 8.89 10.62 8.89 10.86 8.9C11.05 8.91 11.3 8.83 11.47 9.24C11.64 9.65 12.05 10.67 12.09 10.75C12.13 10.83 12.16 10.94 12.08 11.06C12 11.18 11.95 11.25 11.83 11.39C11.71 11.52 11.57 11.69 11.46 11.8C11.34 11.92 11.22 12.05 11.39 12.35C11.56 12.65 12.14 13.57 13.02 14.36C14.15 15.37 15.11 15.69 15.44 15.83C15.77 15.97 15.96 15.94 16.12 15.76C16.28 15.58 16.81 14.96 16.99 14.7C17.17 14.43 17.34 14.48 17.57 14.57C17.8 14.66 19.05 15.27 19.3 15.39C19.55 15.52 19.72 15.58 19.79 15.69C19.86 15.8 19.86 16.31 19.69 16.79C19.52 17.27 18.72 17.71 18.36 17.83C18 17.95 17.53 18 17.02 17.87C16.51 17.74 15.87 17.49 15.02 17.12C14.17 16.75 12.94 15.98 11.85 14.93C10.75 13.89 9.88 12.61 9.45 11.86C9.01 11.11 9 10.41 9.17 10.02C9.28 9.77 9.39 9.55 9.55 9.26Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
