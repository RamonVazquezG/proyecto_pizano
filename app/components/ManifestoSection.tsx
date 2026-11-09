"use client";

import React, { useState } from "react";
import {
  Cpu,
  Scale,
  EyeOff,
  CheckCircle2,
  Ban,
  Layers,
} from "lucide-react";
import AiAuditTool from "./AiAuditTool";
import FeeSimulator from "./FeeSimulator";
import DarkPatternDeobfuscator from "./DarkPatternDeobfuscator";

interface RuleDefinition {
  id: "regla-1" | "regla-2" | "regla-3";
  number: string;
  shortTitle: string;
  fullTitle: string;
  badgeColor: string;
  borderColor: string;
  icon: React.ElementType;
  postulado: string;
  prohibicion: string;
}

const RULES: RuleDefinition[] = [
  {
    id: "regla-1",
    number: "REGLA 01",
    shortTitle: "Transparencia y Atribución en IA Generativa",
    fullTitle: "Regla 1: Transparencia Obligatoria y Trazabilidad en IA Generativa",
    badgeColor: "text-indigo-300 bg-indigo-500/15 border-indigo-500/30",
    borderColor: "border-indigo-500/30",
    icon: Cpu,
    postulado:
      "Todo contenido, código o decisión generado o sugerido por modelos de inteligencia artificial debe ser explícitamente auditable, rotulado y sujeto a consentimiento expreso.",
    prohibicion:
      "Prohibido el uso de pipelines generativos opacos que mezclen código propietario de terceros sin atribución o que desplieguen modelos entrenados con material obtenido sin licencia.",
  },
  {
    id: "regla-2",
    number: "REGLA 02",
    shortTitle: "Inmutabilidad Contractual y Anti Rug-Pull",
    fullTitle: "Regla 2: Inviolabilidad Contractual y Protección Anti Rug-Pull",
    badgeColor: "text-amber-300 bg-amber-500/15 border-amber-500/30",
    borderColor: "border-amber-500/30",
    icon: Scale,
    postulado:
      "Ningún producto o servicio modificará sus esquemas tarifarios, de monetización o de uso de forma retroactiva sobre versiones de software previamente instaladas o publicadas.",
    prohibicion:
      "Queda erradicada cualquier tarifa por instalación o cobro derivado de métricas no auditables (como el caso de la tasa por descarga de Unity). Los contratos de versión son inmutables.",
  },
  {
    id: "regla-3",
    number: "REGLA 03",
    shortTitle: "Autonomía Radical y Cero Dark Patterns",
    fullTitle: "Regla 3: Autonomía Cognitiva y Erradicación Total de Dark Patterns",
    badgeColor: "text-red-300 bg-red-500/15 border-red-500/30",
    borderColor: "border-red-500/30",
    icon: EyeOff,
    postulado:
      "El consentimiento del usuario solo es válido si es explícito, informado y simétrico. La acción de rechazar, cancelar o eliminar un servicio debe requerir el mismo número exacto de clics y el mismo peso visual que la de aceptar o suscribirse.",
    prohibicion:
      "Cero casillas preseleccionadas, cero lenguaje culpígeno (confirmshaming) y cero rutas laberínticas de retención.",
  },
];

export default function ManifestoSection() {
  const [activeTab, setActiveTab] = useState<"regla-1" | "regla-2" | "regla-3" | "all">("all");

  const visibleRules =
    activeTab === "all" ? RULES : RULES.filter((r) => r.id === activeTab);

  return (
    <section
      id="codigo-lsc"
      className="py-24 relative border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
              <span>02 // EL CÓDIGO LSC MODERNO</span>
              <span className="text-white/20">—</span>
              <span>LAS 3 REGLAS DE ORO Y LABORATORIO INTERACTIVO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-4">
              Tres dilemas contemporáneos resueltos con arquitectura ética
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              Cada regla del Código LSC establece un postulado vinculante, una prohibición
              estricta y un mecanismo técnico interactivo que puedes auditar ahora mismo.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="glass-panel p-1.5 rounded-xl flex flex-wrap items-center gap-1 self-start">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 editorial-transition cursor-pointer ${
                activeTab === "all"
                  ? "bg-white/[0.12] text-[#F8FAFC] border border-white/[0.2]"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ver las 3 Reglas</span>
            </button>
            {RULES.map((rule) => {
              const Icon = rule.icon;
              return (
                <button
                  key={rule.id}
                  type="button"
                  onClick={() => setActiveTab(rule.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 editorial-transition cursor-pointer ${
                    activeTab === rule.id
                      ? "bg-indigo-500/20 text-indigo-200 border border-indigo-500/40"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{rule.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rules List + Interactive Laboratories */}
        <div className="space-y-16">
          {visibleRules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div key={rule.id} className="space-y-6">
                {/* Postulado & Prohibicion Header Card */}
                <div className={`glass-panel rounded-2xl p-6 sm:p-8 border ${rule.borderColor}`}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold border ${rule.badgeColor}`}
                      >
                        {rule.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                        {rule.fullTitle}
                      </h3>
                    </div>
                    <Icon className="w-6 h-6 text-[#94A3B8]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Postulado */}
                    <div className="p-5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase text-emerald-400 font-semibold mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>POSTULADO VINCULANTE</span>
                      </div>
                      <p className="text-sm sm:text-base text-[#F8FAFC] leading-relaxed">
                        {rule.postulado}
                      </p>
                    </div>

                    {/* Prohibicion */}
                    <div className="p-5 rounded-xl bg-red-500/[0.06] border border-red-500/20">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase text-red-400 font-semibold mb-2">
                        <Ban className="w-4 h-4" />
                        <span>PROHIBICIÓN ESTRICTA</span>
                      </div>
                      <p className="text-sm sm:text-base text-[#F8FAFC]/90 leading-relaxed">
                        {rule.prohibicion}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corresponding Interactive Component */}
                {rule.id === "regla-1" && <AiAuditTool />}
                {rule.id === "regla-2" && <FeeSimulator />}
                {rule.id === "regla-3" && <DarkPatternDeobfuscator />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
