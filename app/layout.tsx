import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Código LSC Moderno | Manifiesto Interactivo de Ética Tecnológica",
  description:
    "El software como herramienta humana, no como trampa financiera. Manifiesto interactivo de ingeniería ética: Transparencia en IA, Inviolabilidad Contractual Anti Rug-Pull y Erradicación de Dark Patterns.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090A0F] text-[#F8FAFC] selection:bg-indigo-500/30 selection:text-slate-100">
        {children}
      </body>
    </html>
  );
}
