import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Voltando para a Inter (Padrão ouro de UI Design, moderna e limpa)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], 
});

export const metadata: Metadata = {
  title: "Kenai Design | Inovação & Tecnologia",
  description: "Portfólio de Kenai Almeida - Programador Full Stack, Web Designer e Designer Gráfico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030303] text-zinc-100 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}