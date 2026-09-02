import type { Metadata } from "next";
import ErrorPage from "@/components/ErrorPage";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você tentou acessar não foi encontrada.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      eyebrow="Página não encontrada"
      title="Essa página saiu do mapa."
      description="O endereço pode ter mudado ou não existe mais. Volte ao início ou conheça os projetos desenvolvidos pela DiegoCodes."
    />
  );
}
