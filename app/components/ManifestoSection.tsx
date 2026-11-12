"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Scale,
  EyeOff,
  Feather,
  CheckCircle,
  AlertTriangle,
  FileCheck,
} from "lucide-react";
import AiAuditTool from "./AiAuditTool";
import FeeSimulator from "./FeeSimulator";
import DarkPatternDeobfuscator from "./DarkPatternDeobfuscator";

interface RuleDefinition {
  id: "regla-1" | "regla-2" | "regla-3";
  roman: string;
  shortTitle: string;
  fullTitle: string;
  stampClass: string;
  icon: React.ElementType;
  postulado: string;
  prohibicion: string;
}

const RULES: RuleDefinition[] = [
  {
    id: "regla-1",
    roman: "REGLA I",
    shortTitle: "Trazabilidad de la Herramienta (IA)",
    fullTitle: "Transparencia y Origen Honesto de Contenidos Generados",
    stampClass: "rubber-stamp-forest",
    icon: Sparkles,
    postulado:
      "Todo código, diseño o texto asistido por herramientas algorítmicas debe ser claramente reconocido y trazable. Jamás se disfraza una automatización como trabajo artesanal original.",
    prohibicion:
      "El uso de mezclas opacas que vulneren licencias comunitarias o generen contenido sin procedencia verificada.",
  },
  {
    id: "regla-2",
    roman: "REGLA II",
    shortTitle: "Inviolabilidad del Trato (Anti Rug-Pull)",
    fullTitle: "Los Acuerdos son Permanentes e Invariables",
    stampClass: "rubber-stamp-amber",
    icon: Scale,
    postulado:
      "Ninguna herramienta alterará sus tarifas ni condiciones de manera retroactiva sobre obras o versiones que la comunidad ya tiene en sus manos.",
    prohibicion:
      "El cobro sorpresivo por instalación o métricas arbitrarias (como la tasa por descarga). El acuerdo de versión es inviolable.",
  },
  {
    id: "regla-3",
    roman: "REGLA III",
    shortTitle: "Claridad sin Engaños (Cero Dark Patterns)",
    fullTitle: "Respeto Absoluto a la Voluntad del Usuario",
    stampClass: "rubber-stamp-crimson",
    icon: EyeOff,
    postulado:
      "Cerrar la puerta o marcharse de una aplicación debe ser tan sencillo y digno como entrar. El botón de cancelar debe tener la misma visibilidad, sencillez y rapidez que el de aceptar.",
    prohibicion:
      "Las casillas pre-marcadas a traición, los textos manipuladores que intenten dar lástima y los laberintos burocráticos de cancelación.",
  },
];

export default function ManifestoSection() {
  const [activeTab, setActiveTab] = useState<"all" | "regla-1" | "regla-2" | "regla-3">("all");

  const visibleRules =
    activeTab === "all" ? RULES : RULES.filter((r) => r.id === activeTab);

  return (
    <section id="codigo-lsc" className="py-24 border-b border-[#E7E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera del Capítulo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E7E0D6]">
          <div className="max-w-2xl">
            <span className="rubber-stamp rubber-stamp-terracotta mb-3">
              CAPÍTULO II • LAS REGLAS DE OFICIO
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight mt-2">
              Las Tres Reglas de Oro
            </h2>
            <p className="text-sm sm:text-base text-[#78716C] mt-3 leading-relaxed">
              Cada regla cuenta con su propio instrumento interactivo. Puedes auditar
              en tiempo real cómo se desmontan las malas prácticas de la industria.
            </p>
          </div>

          {/* Filtro de Reglas */}
          <div className="flex flex-wrap gap-2 self-start">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-serif font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#292524] text-white shadow-sm"
                  : "bg-white text-[#78716C] border border-[#D6CBC0] hover:text-[#1C1917]"
              }`}
            >
              Las 3 Reglas
            </button>
            {RULES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setActiveTab(r.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-serif font-bold transition-all cursor-pointer ${
                  activeTab === r.id
                    ? "bg-[#C85A32] text-white shadow-sm"
                    : "bg-white text-[#78716C] border border-[#D6CBC0] hover:text-[#1C1917]"
                }`}
              >
                {r.roman}
              </button>
            ))}
          </div>
        </div>

        {/* Listado de Reglas con sus Herramientas */}
        <div className="space-y-16">
          {visibleRules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.id}
                id={rule.id}
                className="paper-sheet p-6 sm:p-10 rounded-xl relative space-y-8"
              >
                {/* Encabezado del Pliego */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E0D6]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#D6CBC0] flex items-center justify-center text-[#C85A32]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`rubber-stamp ${rule.stampClass}`}>
                        {rule.roman}
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C1917] mt-1">
                        {rule.fullTitle}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Contraste: Postulado de Oficio vs Prohibición */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-lg bg-[#FDFBF7] border border-[#E7E0D6]">
                    <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#2E5A44] mb-2 uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4" />
                      El Compromiso Ético
                    </div>
                    <p className="text-sm text-[#44403C] leading-relaxed">
                      {rule.postulado}
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-[#FFF5F5] border border-[#991B1B]/20">
                    <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#991B1B] mb-2 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4" />
                      Práctica Desterrada
                    </div>
                    <p className="text-sm text-[#7F1D1D] leading-relaxed">
                      {rule.prohibicion}
                    </p>
                  </div>
                </div>

                {/* Herramienta Táctil Asociada */}
                <div className="pt-4 border-t border-[#E7E0D6]">
                  {rule.id === "regla-1" && <AiAuditTool />}
                  {rule.id === "regla-2" && <FeeSimulator />}
                  {rule.id === "regla-3" && <DarkPatternDeobfuscator />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
