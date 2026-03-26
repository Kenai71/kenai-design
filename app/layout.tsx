import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Importando uma fonte premium e moderna
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="pt-BR">
      {/* Aplicando a fonte globalmente e garantindo o fundo escuro */}
      <body className={`${spaceGrotesk.className} bg-[#030303] text-zinc-100 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}