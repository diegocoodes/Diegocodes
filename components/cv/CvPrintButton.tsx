import { Download } from "lucide-react";

export default function CvPrintButton() {
  return (
    <a
      href="/curriculo/Diego.cv%20(1)%20(2).pdf"
      download="Curriculo-Diego-Ewerton.pdf"
      className="cv-no-print inline-flex min-h-11 items-center justify-center gap-2 border-b border-[#24182f]/25 px-1 py-3 font-accent text-xs font-semibold text-[#24182f] transition hover:border-[#7b2fbe] hover:text-[#7b2fbe]"
    >
      <Download aria-hidden="true" className="h-4 w-4" />
      Baixar CV
    </a>
  );
}
