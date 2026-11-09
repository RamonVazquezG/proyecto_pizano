"use client";

import React, { useState } from "react";
import {
  Cpu,
  Zap,
  Scale,
  Terminal,
  Eye,
  ShieldCheck,
  MoveHorizontal,
} from "lucide-react";

interface CodeLine {
  lineNumber: number;
  code: string;
  isAiGenerated?: boolean;
  aiTag?: string;
  originPrompt?: string;
  energyWh?: string;
  licenseDetected?: string;
  licenseCompliant?: boolean;
}

const CODE_SAMPLE: CodeLine[] = [
  {
    lineNumber: 1,
    code: "import { createHash, timingSafeEqual } from 'node:crypto';",
  },
  {
    lineNumber: 2,
    code: "import type { TelemetryPacket, UserConsent } from '@/types/lsc';",
  },
  {
    lineNumber: 3,
    code: "",
  },
  {
    lineNumber: 4,
    code: "export async function processAnalytics(packet: TelemetryPacket, consent: UserConsent) {",
  },
  {
    lineNumber: 5,
    code: "  if (!consent.explicitOptIn || consent.revokedAt !== null) {",
  },
  {
    lineNumber: 6,
    code: "    return { status: 'ABORTED_BY_USER_SOVEREIGNTY', bytesStored: 0 };",
  },
  {
    lineNumber: 7,
    code: "  }",
  },
  {
    lineNumber: 8,
    code: "  // [BLOQUE SINTETIZADO POR MODELO GENERATIVO]",
    isAiGenerated: true,
    aiTag: "LLM-GEN // Claude-Sonnet-LSC-Audited",
    originPrompt:
      "Prompt: 'Genera un filtro diferencial de anonimización k-anonymity sin retener IPs en memoria'",
    energyWh: "0.42 Wh (Inferencia medida)",
    licenseDetected: "GPL-3.0 Compatible (Atribución: @open-privacy/k-anon v2.1)",
    licenseCompliant: true,
  },
  {
    lineNumber: 9,
    code: "  const ephemeralSalt = createHash('sha256').update(packet.epochWindow).digest();",
    isAiGenerated: true,
  },
  {
    lineNumber: 10,
    code: "  const anonymizedDigest = timingSafeEqual(ephemeralSalt, packet.signature)",
    isAiGenerated: true,
  },
  {
    lineNumber: 11,
    code: "    ? packet.metrics.filter((m) => !m.containsPII)",
    isAiGenerated: true,
  },
  {
    lineNumber: 12,
    code: "    : [];",
    isAiGenerated: true,
  },
  {
    lineNumber: 13,
    code: "  return { status: 'COMMITTED_WITH_ATTRIBUTION', payload: anonymizedDigest };",
  },
  {
    lineNumber: 14,
    code: "}",
  },
];

export default function AiAuditTool() {
  const [splitPercent, setSplitPercent] = useState<number>(68);
  const [consentGranted, setConsentGranted] = useState<boolean>(true);

  const auditLevel =
    splitPercent < 30
      ? "OPACO (Riesgo de Infracción)"
      : splitPercent < 75
      ? "INSPECCIÓN PARCIAL"
      : "AUDITORÍA LSC COMPLETA";

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-indigo-500/25 relative overflow-hidden">
      {/* Top Semantic Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>MECANISMO INTERACTIVO 01 // EL AUDITOR DE CÓDIGO IA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
            Split-Diff: Producción Opaca vs. Trazabilidad LSC
          </h3>
          <p className="text-sm text-[#94A3B8] mt-1">
            Desliza el control para revelar los bloques generados por IA, su prompt de
            origen, su costo energético en vatios-hora y las licencias GPL detectadas en el
            corpus.
          </p>
        </div>

        {/* Preset Quick Buttons */}
        <div className="flex flex-wrap items-center gap-2 self-start">
          <button
            type="button"
            onClick={() => setSplitPercent(0)}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs border editorial-transition cursor-pointer ${
              splitPercent === 0
                ? "bg-slate-800 text-white border-white/30"
                : "bg-white/[0.03] text-[#94A3B8] border-white/[0.08] hover:text-white"
            }`}
          >
            0% Opaco
          </button>
          <button
            type="button"
            onClick={() => setSplitPercent(50)}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs border editorial-transition cursor-pointer ${
              splitPercent === 50
                ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
                : "bg-white/[0.03] text-[#94A3B8] border-white/[0.08] hover:text-white"
            }`}
          >
            50% Split-Diff
          </button>
          <button
            type="button"
            onClick={() => setSplitPercent(100)}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs border editorial-transition cursor-pointer ${
              splitPercent === 100
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                : "bg-white/[0.03] text-[#94A3B8] border-white/[0.08] hover:text-white"
            }`}
          >
            100% Auditoría LSC
          </button>
        </div>
      </div>

      {/* Interactive Range Control Bar */}
      <div className="my-6 bg-[#090A0F]/90 p-4 rounded-xl border border-white/[0.08]">
        <div className="flex items-center justify-between text-xs font-mono mb-2">
          <span className="text-[#94A3B8] flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-slate-400" />
            Lado Izquierdo: Modo Producción Opaco
          </span>
          <span className="text-cyan-400 font-semibold">
            Nivel de Escaneo: {splitPercent}% ({auditLevel})
          </span>
          <span className="text-indigo-400 flex items-center gap-1.5">
            Lado Derecho: Modo Auditoría LSC
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
          </span>
        </div>

        <div className="relative flex items-center">
          <input
            type="range"
            min={0}
            max={100}
            value={splitPercent}
            onChange={(e) => setSplitPercent(Number(e.target.value))}
            aria-label="Porcentaje de revelación de auditoría de IA"
            className="w-full split-slider z-20"
          />
          <div className="pointer-events-none absolute inset-0 h-2 my-auto rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"
              style={{ width: `${splitPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Dual-Channel Code Inspector */}
      <div className="relative rounded-xl border border-white/[0.1] bg-[#06070B] overflow-hidden font-mono text-xs sm:text-sm">
        {/* Editor Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            <span className="ml-2 text-xs text-[#94A3B8]">
              src/telemetry/analytics-pipeline.ts
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded border border-indigo-500/30">
              LSC-AI-TRACE v2.4
            </span>
          </div>
        </div>

        {/* Split-Diff Viewport */}
        <div className="relative p-4 sm:p-6 overflow-x-auto">
          {/* Visual Split Divider Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 z-10 border-r-2 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-75"
            style={{ left: `${splitPercent}%` }}
          >
            <div className="sticky top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#090A0F] border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-lg">
              <MoveHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1.5 min-w-[620px]">
            {CODE_SAMPLE.map((line) => {
              const showAuditHighlight = line.isAiGenerated && splitPercent >= 25;

              return (
                <div key={line.lineNumber} className="relative">
                  {/* Metadata Callout Banner above line 8 when audited */}
                  {line.originPrompt && splitPercent >= 35 && (
                    <div
                      className="mb-2 p-3 rounded-lg bg-indigo-950/70 border border-indigo-500/50 text-xs transition-all duration-200"
                      style={{
                        opacity: Math.min(1, (splitPercent - 25) / 50),
                      }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="font-semibold text-indigo-300 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                          {line.aiTag}
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <Zap className="w-3 h-3" /> {line.energyWh}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <Scale className="w-3 h-3" /> {line.licenseDetected}
                          </span>
                        </div>
                      </div>
                      <p className="text-indigo-200/90 font-mono text-[11px]">
                        {line.originPrompt}
                      </p>
                    </div>
                  )}

                  {/* Code Line */}
                  <div
                    className={`flex items-center px-3 py-1 rounded-md transition-colors duration-200 ${
                      showAuditHighlight
                        ? "bg-indigo-500/20 border-l-2 border-indigo-400 text-indigo-100"
                        : "text-slate-300"
                    }`}
                  >
                    <span className="w-8 shrink-0 text-slate-600 select-none text-right pr-4">
                      {line.lineNumber}
                    </span>
                    <pre className="whitespace-pre font-mono">{line.code}</pre>
                    {showAuditHighlight && (
                      <span className="ml-auto pl-4 text-[10px] uppercase tracking-wider text-indigo-300 font-semibold">
                        [IA AUDITADA]
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Consent Verification Bar */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07]">
          <div className="text-[11px] font-mono uppercase text-[#94A3B8] mb-1">
            Huella de Inferencia Acumulada
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-lg font-mono font-bold text-cyan-400">
              {splitPercent >= 25 ? "0.42 Wh" : "Oculto (Opaco)"}
            </span>
            <span className="text-xs font-mono text-emerald-400">
              Equiv. 0.18g CO₂
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07]">
          <div className="text-[11px] font-mono uppercase text-[#94A3B8] mb-1">
            Trazabilidad de Corpus y Licencias
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-mono font-semibold text-indigo-300">
              {splitPercent >= 25
                ? "1 Dependencia GPL-3.0 Atribuida"
                : "Sin atribución visible"}
            </span>
            <span className="text-xs font-mono text-emerald-400">Verificado</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase text-[#94A3B8]">
              Consentimiento Expreso IA
            </div>
            <div className="text-xs font-mono text-[#F8FAFC] mt-0.5">
              {consentGranted ? "Autorizado por el usuario" : "Inferencia bloqueada (Fallback local)"}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setConsentGranted(!consentGranted)}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border editorial-transition cursor-pointer ${
              consentGranted
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-amber-500/20 text-amber-300 border-amber-500/40"
            }`}
          >
            {consentGranted ? "ACTIVO" : "REVOCADO"}
          </button>
        </div>
      </div>
    </div>
  );
}
