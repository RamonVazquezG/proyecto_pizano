"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, Terminal, Activity, Compass, Lock, AlertTriangle } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Portada", icon: Compass },
  { id: "filosofia", label: "1. Filosofía", icon: ShieldCheck },
  { id: "codigo-lsc", label: "2. Código LSC", icon: Terminal },
  { id: "promesa", label: "3. La Promesa", icon: Lock },
  { id: "crisis", label: "4. Plan de Crisis", icon: AlertTriangle },
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
      const scrollPosition = window.scrollY + 240;

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
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/[0.08]">
      {/* Reading progress bar */}
      <div className="h-[2px] w-full bg-white/[0.04] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#10B981] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 editorial-transition">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs tracking-widest uppercase text-indigo-400 font-semibold">
              LSC // MANIFIESTO v2.6
            </span>
            <span className="text-xs text-[#94A3B8] hidden sm:inline">
              Ética Tecnológica Aplicada
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav aria-label="Navegación de secciones" className="hidden md:flex items-center gap-1 bg-white/[0.02] p-1 rounded-xl border border-white/[0.06]">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium editorial-transition ${
                  isActive
                    ? "bg-white/[0.09] text-[#F8FAFC] shadow-sm border border-white/[0.1]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-indigo-400" : "text-slate-500"}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Live Telemetry Indicator */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AUDITORÍA ACTIVA</span>
          </div>
          <div className="font-mono text-xs text-[#94A3B8] bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06] tabular-nums">
            <Activity className="w-3 h-3 inline mr-1 text-cyan-400" />
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>

      {/* Mobile section selector bar */}
      <div className="md:hidden flex items-center gap-1 overflow-x-auto px-4 py-1.5 border-t border-white/[0.05] bg-[#090A0F]/90 no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`shrink-0 px-2.5 py-1 rounded-md text-[11px] font-mono editorial-transition ${
                isActive
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "text-[#94A3B8]"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}
