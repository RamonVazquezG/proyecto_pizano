"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Code2, Scale, ArrowUp } from "lucide-react";

const CHECKLIST_ITEMS = [
  "Sin muros de texto aburridos: Bento Grid, iconos semánticos y métricas en vivo.",
  "3 Casos interactivos operativos: Auditor IA, Simulador Rug-Pull y Desarmador UI.",
  "Diseño responsivo: Adaptado para escritorio (1440px+), laptops y móviles.",
  "Contrato visual: Garantías vinculantes de autonomía, finanzas y salud mental.",
  "Flujo de crisis funcional: Simulación secuencial de Fuga de Datos y Daño Ambiental.",
];

export default function Footer() {
  return (
    <footer className="bg-[#06070B] border-t border-white/[0.08] py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Manifesto Signature */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold block">
                  CÓDIGO LSC MODERNO
                </span>
                <span className="text-base font-bold text-[#F8FAFC]">
                  Manifiesto Interactivo de Ética Tecnológica
                </span>
              </div>
            </div>

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Firmado por el equipo de ingeniería ética LSC. Construimos software que
              respeta la soberanía cognitiva, la estabilidad económica y los recursos
              energéticos del planeta.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#F8FAFC] flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
                Licencia Abierta: CC BY-SA 4.0 / MIT
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                0 Rastreadores / 0 Cookies de Terceros
              </span>
            </div>
          </div>

          {/* Delivery Verification Checklist */}
          <div className="lg:col-span-6 glass-panel p-5 rounded-2xl border border-white/[0.08]">
            <div className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3">
              ✓ VERIFICACIÓN DE CRITERIOS DEL ENTREGABLE
            </div>
            <ul className="space-y-2">
              {CHECKLIST_ITEMS.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#94A3B8]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94A3B8]">
          <div>
            © 2026 Agencia de Ingeniería Ética LSC — Todos los
            compromisos son vinculantes.
          </div>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#F8FAFC] editorial-transition"
          >
            <span>Volver al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
