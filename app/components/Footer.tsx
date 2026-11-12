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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E7E0D6]">
          {/* Identidad de Taller */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-white border border-[#D6CBC0] flex items-center justify-center text-[#C85A32] shadow-sm">
                <Feather className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-base text-[#1C1917] block">
                  Taller del Código LSC
                </span>
                <span className="font-mono text-xs text-[#78716C]">
                  Ingeniería de Oficio & Manifiesto Humano
                </span>
              </div>
            </div>

            <p className="text-[#57534E] text-sm leading-relaxed max-w-xl font-serif">
              Forjado con esmero para demostrar que la tecnología puede tratarse como un oficio digno:
              con calma, respeto hacia la voluntad del usuario y transparencia total en cada línea de código.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="rubber-stamp rubber-stamp-forest text-[11px]">
                LICENCIA COMUNITARIA LIBRE (CC BY-SA 4.0)
              </span>
              <span className="rubber-stamp rubber-stamp-terracotta text-[11px]">
                CERO RASTREADORES NI COOKIES DE VENTA
              </span>
            </div>
          </div>

          {/* Ficha de Calidad del Entregable */}
          <div className="lg:col-span-6 paper-sheet p-6 rounded-xl border border-[#D6CBC0]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E0D6]">
              <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#1C1917] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#C85A32]" />
                Ficha de Entrega y Criterios del Taller
              </span>
              <span className="text-[10px] font-mono text-[#2E5A44] font-bold">
                100% CONFORME
              </span>
            </div>

            <ul className="space-y-2">
              {CHECKLIST_ITEMS.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#57534E]"
                >
                  <Check className="w-4 h-4 text-[#2E5A44] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
