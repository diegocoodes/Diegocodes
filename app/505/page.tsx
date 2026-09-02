import type { Metadata } from "next";
import ErrorPage from "@/components/ErrorPage";

export const metadata: Metadata = {
  title: "Erro de comunicação",
  description: "O servidor não conseguiu concluir esta comunicação.",
  alternates: {
    canonical: "/505",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Error505Page() {
  return (
    <ErrorPage
      code="505"
      eyebrow="Falha de comunicação"
      title="A conexão não respondeu como deveria."
      description="Houve uma incompatibilidade temporária na comunicação. Tente voltar à página inicial para continuar navegando pelo portfólio."
    />
  );
}
