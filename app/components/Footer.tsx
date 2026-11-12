"use client";

import React from "react";
import { Feather, Check, BookOpen, Heart, ArrowUp } from "lucide-react";

const CHECKLIST_ITEMS = [
  "Estética de taller editorial: Tipografía Newsreader, papel natural 120g y tintas de autor.",
  "3 Instrumentos táctiles de taller: Visor de trazabilidad IA, Báscula de contratos y Lápiz de corrección.",
  "Pliego de garantías vinculantes: Soberanía de tiempo, honradez financiera y calma mental.",
  "Cuaderno de bitácora de contingencia: Fuga de datos y contención de consumo ecológico.",
  "Diseño respirable y respetuoso: Cero artificios de neón, cero ansiedad y navegación libre.",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5EFEB] border-t border-[#D6CBC0] py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pie y Retorno al Inicio */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#78716C]">
          <div>
            © 2026 Taller de Ética Tecnológica LSC — Construido para seres humanos.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white hover:bg-[#FDFBF7] border border-[#D6CBC0] text-[#1C1917] shadow-sm transition-all cursor-pointer font-serif font-bold"
          >
            <span>Subir al Inicio</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C85A32]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
