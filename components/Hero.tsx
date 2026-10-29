import { PrismaHero } from "@/components/ui/prisma-hero";

export default function Hero({ whatsappUrl }: { whatsappUrl: string }) {
  return <PrismaHero whatsappUrl={whatsappUrl} />;
}
