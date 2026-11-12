"use client";

import React, { useState } from "react";
import {
  FileCode,
  Sparkles,
  Zap,
  CheckCircle,
  Eye,
  Sliders,
  Layers,
  Leaf,
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
    code: "  // [APUNTE DE TALLER: Fragmento asistido por modelo algorítmico]",
    isAiGenerated: true,
    aiTag: "Asistido // Claude-3.5-Sonnet (Revisado manualmente)",
    originPrompt:
      "'Genera un filtro diferencial de anonimización k-anonymity sin retener IPs en memoria'",
    energyWh: "0.42 Wh (Huella eléctrica auditada)",
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
    code: "  return { status: 'OK', records: anonymizedDigest.length };",
  },
  {
    lineNumber: 14,
    code: "}",
  },
];

export default function AiAuditTool() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedAiLine, setSelectedAiLine] = useState<CodeLine | null>(CODE_SAMPLE[7]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="rubber-stamp rubber-stamp-forest mb-2">
            INSTRUMENTO DE LA REGLA 01 • CUADERNO DE TRAZABILIDAD
          </span>
          <h4 className="font-editorial text-xl font-normal text-[#1C1917]">
            Código de Autor vs. Código Asistido
          </h4>
          <p className="text-xs text-[#78716C] mt-1 max-w-2xl">
            Desliza el visor para revelar con honestidad qué líneas fueron escritas a mano
            y cuáles requirieron asistencia algorítmica, incluyendo su huella energética y licencia.
          </p>
        </div>

        {/* Métrica de Energía */}
        <div className="flex items-center gap-2 bg-[#F5EFEB] border border-[#D6CBC0] px-3.5 py-2 rounded-lg self-start">
          <Leaf className="w-4 h-4 text-[#2E5A44]" />
          <div className="text-xs font-mono">
            <span className="text-[#78716C] block text-[10px]">COSTE ENERGÉTICO TOTAL</span>
            <span className="text-[#2E5A44] font-bold">0.42 Wh • Compensado</span>
          </div>
        </div>
      </div>

      {/* Control Deslizante Táctil de Taller */}
      <div className="paper-sheet-cream p-4 rounded-lg space-y-2 border border-[#D6CBC0]">
        <div className="flex justify-between items-center text-xs font-mono text-[#78716C]">
          <span className="flex items-center gap-1.5 font-serif font-bold text-[#1C1917]">
            🖋️ Manuscrito Original (0%)
          </span>
          <span className="bg-white px-2 py-0.5 rounded border border-[#D6CBC0] font-bold text-[#C85A32]">
            Visor al {sliderPosition}%
          </span>
          <span className="flex items-center gap-1.5 font-serif font-bold text-[#2E5A44]">
            🔍 Revelado Total de Atribución (100%)
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="w-full workshop-slider cursor-pointer"
        />
      </div>

      {/* Visor de Pliego de Código y Ficha Técnica */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Editor con aspecto de hoja técnica de imprenta */}
        <div className="lg:col-span-7 bg-[#292524] text-[#F5EFEB] rounded-xl p-4 sm:p-5 font-mono text-xs overflow-x-auto shadow-inner border border-[#1C1917]">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-700 text-[11px] text-stone-400">
            <span>archivo: lib/telemetry/anonymizer.ts</span>
            <span className="text-amber-400">TypeScript 5.x</span>
          </div>

          <div className="space-y-1">
            {CODE_SAMPLE.map((line) => {
              const showAiHighlight = line.isAiGenerated && sliderPosition > 57;
              return (
                <div
                  key={line.lineNumber}
                  onClick={() => line.isAiGenerated && setSelectedAiLine(line)}
                  className={`flex items-start gap-3 px-2 py-0.5 rounded transition-colors ${showAiHighlight
                      ? "bg-[#C85A32]/25 border-l-2 border-[#C85A32] text-amber-100 cursor-pointer"
                      : "text-stone-300 hover:bg-stone-800/60"
                    }`}
                >
                  <span className="text-stone-500 w-5 text-right select-none shrink-0">
                    {line.lineNumber}
                  </span>
                  <span className="flex-1 whitespace-pre">{line.code}</span>
                  {showAiHighlight && line.aiTag && (
                    <span className="text-[10px] bg-[#C85A32] text-white px-1.5 py-0.2 rounded font-sans uppercase shrink-0">
                      Asistido
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Ficha de Taller / Tarjeta de Procedencia */}
        <div className="lg:col-span-5 flex flex-col justify-between paper-sheet p-5 rounded-xl border border-[#D6CBC0]">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7E0D6]">
              <span className="font-serif font-bold text-sm text-[#1C1917] flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-[#C85A32]" />
                Ficha de Procedencia
              </span>
              <span className="rubber-stamp rubber-stamp-forest text-[10px]">
                REVISADO POR HUMANO
              </span>
            </div>

            {selectedAiLine ? (
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#78716C] block text-[11px] font-mono">ASISTENTE UTILIZADO:</span>
                  <span className="font-semibold text-[#1C1917]">
                    {selectedAiLine.aiTag || "Módulo de generación"}
                  </span>
                </div>

                <div className="p-3 bg-[#FDFBF7] rounded-lg border border-[#E7E0D6]">
                  <span className="text-[#78716C] block text-[10px] font-mono mb-1">PETICIÓN REGISTRADA:</span>
                  <p className="italic text-[#44403C] font-serif text-xs">
                    {selectedAiLine.originPrompt}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                  <div className="p-2 bg-[#F5EFEB] rounded border border-[#E7E0D6]">
                    <span className="text-[#78716C] block text-[9px]">ENERGÍA CONSUMIDA</span>
                    <span className="font-bold text-[#2E5A44]">{selectedAiLine.energyWh}</span>
                  </div>
                  <div className="p-2 bg-[#F5EFEB] rounded border border-[#E7E0D6]">
                    <span className="text-[#78716C] block text-[9px]">COMPATIBILIDAD</span>
                    <span className="font-bold text-[#1C1917]">GPL-3.0 / Abierta</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#78716C] flex items-start gap-2 pt-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2E5A44] shrink-0 mt-0.5" />
                  <span>Sin mezclas ilegales ni apropiación de código ajeno sin atribución.</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-[#78716C] text-xs">
                Haz clic en cualquier línea destacada del editor para inspeccionar su trazabilidad.
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-[#E7E0D6] text-[11px] font-mono text-[#78716C] flex items-center justify-between">
            <span>Estándar LSC v2.6</span>
            <span>Atribución Completa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
