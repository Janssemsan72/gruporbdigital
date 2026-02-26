import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dados – Pedro Rian Bernardo Vieira",
  description:
    "Soluções Estratégicas em Promoção, Conteúdo e Capacitação. Atuamos de forma integrada na promoção de vendas, produção de conteúdos editoriais e desenvolvimento profissional.",
  verification: {
    other: {
      "facebook-domain-verification": ["j0gfq2khilk4td8uh029fub2w25vde"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
