import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serifFont = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taller & Manifiesto de Ética Tecnológica | Código LSC",
  description:
    "El software como oficio humano, no como trampa financiera. Un taller editorial interactivo sobre transparencia en IA, inmutabilidad de contratos y diseño libre de engaños.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#292524] selection:bg-[#E7D7C1] selection:text-[#1C1917]">
        {children}
      </body>
    </html>
  );
}
