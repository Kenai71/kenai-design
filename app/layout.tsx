import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Fonte padrão para os textos normais
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 2. Fonte EXTREMAMENTE GROSSA para o "KENAI DESIGN"
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"], // Peso máximo (Black)
  variable: "--font-montserrat",
});

// 3. Fonte ELEGANTE E CLÁSSICA para a Logo "Kenai."
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
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
      {/* Injetando as variáveis de fonte no Body */}
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-sans bg-[#030303] text-zinc-100 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}