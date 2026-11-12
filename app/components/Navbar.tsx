"use client";

import React, { useEffect, useState } from "react";
import { Compass, BookOpen, Feather, Scale, AlertCircle, BookmarkCheck } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Portada", icon: Compass },
  { id: "filosofia", label: "I. Filosofía de Taller", icon: BookOpen },
  { id: "codigo-lsc", label: "II. Las 3 Reglas Vivas", icon: Scale },
  { id: "promesa", label: "III. El Pacto Firmado", icon: Feather },
  { id: "crisis", label: "IV. Protocolo de Taller", icon: AlertCircle },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E7E0D6] transition-all">
      {/* Marcador de lectura como hilo de encuadernación */}
      <div className="h-[3px] w-full bg-[#E7E0D6] overflow-hidden">
        <div
          className="h-full bg-[#C85A32] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Cabecera / Ex Libris */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-md bg-[#F5EFEB] border border-[#D6CBC0] flex items-center justify-center text-[#C85A32] shadow-sm group-hover:border-[#C85A32] transition-colors">
            <Feather className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm tracking-wide font-bold text-[#1C1917]">
              LM & Ladies Devs
            </span>
          </div>
        </a>

        {/* Navegación por capítulos */}
        <nav aria-label="Índice de capítulos" className="hidden md:flex items-center gap-1 bg-[#F5EFEB] p-1 rounded-lg border border-[#E7E0D6]">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#FFFFFF] text-[#1C1917] shadow-sm border border-[#D6CBC0] font-semibold"
                    : "text-[#78716C] hover:text-[#1C1917] hover:bg-[#FFFFFF]/60"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#C85A32]" : "text-[#A8A29E]"}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Sello de verificación en vivo */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-1.5 rubber-stamp rubber-stamp-forest">
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>PLIEGO VERIFICADO</span>
          </div>
          <div className="font-mono text-xs text-[#78716C] bg-[#F5EFEB] px-2.5 py-1 rounded border border-[#E7E0D6] tabular-nums">
            Pág. {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>
    </header>
  );
}
