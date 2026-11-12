"use client";

import React, { useState } from "react";
import {
  Scale,
  Receipt,
  Users,
  AlertTriangle,
  Lock,
  RotateCcw,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function FeeSimulator() {
  const [downloads, setDownloads] = useState<number>(250000);
  const [mode, setMode] = useState<"retroactive" | "lsc_protected">("retroactive");

  const retroactiveDebt = Math.round(downloads * 0.15);
  const phantomInstalls = Math.round(downloads * 0.35);

  return (
    <div className="space-y-6">
      {/* Cabecera del Instrumento */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="rubber-stamp rubber-stamp-amber mb-2">
            INSTRUMENTO DE TALLER 02 • BÁSCULA CONTRACTUAL
          </span>
          <h4 className="font-editorial text-xl font-normal text-[#1C1917]">
            El Libro de Cuentas: Cobro Sorpresivo vs. Pacto Sellado
          </h4>
          <p className="text-xs text-[#78716C] mt-1 max-w-2xl">
            Compara el impacto de un peaje retroactivo impuesto a traición 
            frente a la garantía de un contrato de versión sellado y permanente.
          </p>
        </div>

        {/* Interruptor de Modo */}
        <div className="flex items-center gap-1 bg-[#F5EFEB] p-1 rounded-lg border border-[#D6CBC0] self-start">
          <button
            type="button"
            onClick={() => setMode("retroactive")}
            className={`px-3 py-1.5 rounded-md text-xs font-serif font-bold transition-all cursor-pointer ${
              mode === "retroactive"
                ? "bg-[#991B1B] text-white shadow-sm"
                : "text-[#78716C] hover:text-[#991B1B]"
            }`}
          >
            ⚠️ Peaje Retroactivo
          </button>
          <button
            type="button"
            onClick={() => setMode("lsc_protected")}
            className={`px-3 py-1.5 rounded-md text-xs font-serif font-bold transition-all cursor-pointer ${
              mode === "lsc_protected"
                ? "bg-[#2E5A44] text-white shadow-sm"
                : "text-[#78716C] hover:text-[#2E5A44]"
            }`}
          >
            📜 Contrato Protegido (LSC)
          </button>
        </div>
      </div>

      {/* Báscula Interactiva de Descargas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controles de Entrada */}
        <div className="lg:col-span-7 space-y-4">
          <div className="paper-sheet p-5 rounded-xl border border-[#D6CBC0] space-y-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="downloads-slider"
                className="font-serif font-bold text-sm text-[#1C1917] flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-[#C85A32]" />
                Comunidad de Usuarios / Descargas del Software:
              </label>
              <span className="font-mono text-xs font-bold bg-[#F5EFEB] px-2.5 py-1 rounded border border-[#E7E0D6] text-[#1C1917]">
                {downloads.toLocaleString("es-ES")} descargas
              </span>
            </div>

            <input
              id="downloads-slider"
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={downloads}
              onChange={(e) => setDownloads(Number(e.target.value))}
              className="w-full workshop-slider cursor-pointer"
            />

            <div className="flex justify-between text-[11px] font-mono text-[#78716C]">
              <span>10,000 (Taller artesanal)</span>
              <span>500,000 (Comunidad viva)</span>
              <span>1,000,000 (Éxito viral)</span>
            </div>
          </div>

          {/* Explicación de contexto */}
          <div className="p-4 rounded-lg bg-[#FDFBF7] border border-[#E7E0D6] text-xs text-[#57534E] leading-relaxed">
            {mode === "retroactive" ? (
              <p>
                <strong className="text-[#991B1B]">Alerta de peaje abusivo:</strong> Cuando un proveedor cambia las reglas a posteriori, 
                cobra un peaje fijo (\$0.15) por cada instalación, incluyendo reinstalaciones en nuevos dispositivos.
                Un juego o programa 100% gratuito acumula deudas imposibles de pagar.
              </p>
            ) : (
              <p>
                <strong className="text-[#2E5A44]">Paz de taller:</strong> Bajo el Código LSC, las versiones descargadas 
                están selladas para siempre. Cualquier cambio de modelo de negocio aplica solo para nuevas versiones opcionales 
                y con 90 días naturales de preaviso formal.
              </p>
            )}
          </div>
        </div>

        {/* Ticket de Recibo Impreso (Visual Analógico) */}
        <div className="lg:col-span-5">
          <div
            className={`p-6 rounded-xl border relative shadow-md transition-all ${
              mode === "retroactive"
                ? "bg-[#FFFBFB] border-[#991B1B]/40"
                : "bg-[#F7FAF8] border-[#2E5A44]/40"
            }`}
          >
            {/* Cabecera del Recibo */}
            <div className="text-center pb-4 border-b border-dashed border-[#D6CBC0]">
              <Receipt className="w-6 h-6 mx-auto mb-2 text-[#78716C]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#78716C] block">
                BALANCE FISCAL DE LA VERSIÓN
              </span>
              <span className="font-serif font-bold text-base text-[#1C1917]">
                {mode === "retroactive" ? "Liquidación Impuesta Unilateralmente" : "Contrato de Oficio Respetado"}
              </span>
            </div>

            {/* Desglose de Líneas */}
            <div className="py-4 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-[#57534E]">
                <span>Descargas registradas:</span>
                <span className="font-bold">{downloads.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#57534E]">
                <span>Reinstalaciones estimadas:</span>
                <span className="font-bold">+{phantomInstalls.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#57534E]">
                <span>Ingreso directo percibido:</span>
                <span className="font-bold">\$0.00 USD (Obra Gratuita)</span>
              </div>

              <div className="pt-2 border-t border-dashed border-[#D6CBC0] flex justify-between items-baseline">
                <span className="font-serif font-bold text-sm text-[#1C1917]">
                  Deuda Exigida:
                </span>
                <span
                  className={`text-xl font-bold font-mono ${
                    mode === "retroactive" ? "text-[#991B1B]" : "text-[#2E5A44]"
                  }`}
                >
                  {mode === "retroactive"
                    ? `\$${retroactiveDebt.toLocaleString()} USD`
                    : "\$0.00 USD (Inviolable)"}
                </span>
              </div>
            </div>

            {/* Sello de dictamen */}
            <div className="pt-4 border-t border-dashed border-[#D6CBC0] text-center">
              {mode === "retroactive" ? (
                <span className="rubber-stamp rubber-stamp-crimson text-[11px]">
                  RUG-PULL DETECTADO // QUIEBRA INJUSTA
                </span>
              ) : (
                <span className="rubber-stamp rubber-stamp-forest text-[11px]">
                  ACUERDO PERPETUO // PROTECCIÓN TOTAL
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
