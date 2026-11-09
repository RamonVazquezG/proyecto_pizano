"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  Lock,
  ShieldCheck,
  DollarSign,
  Users,
  RefreshCw,
  FileCheck2,
} from "lucide-react";

export default function FeeSimulator() {
  const [downloads, setDownloads] = useState<number>(250000);
  const [mode, setMode] = useState<"retroactive" | "lsc_protected">("retroactive");

  // At 250,000 downloads -> $37,500 USD ($0.15 per install including phantom reinstalls)
  const retroactiveDebt = Math.round(downloads * 0.15);
  const phantomInstalls = Math.round(downloads * 0.38);

  return (
    <div
      className={`glass-panel rounded-2xl p-6 sm:p-8 border editorial-transition relative overflow-hidden ${
        mode === "retroactive"
          ? "border-red-500/40 bg-red-950/[0.12]"
          : "border-emerald-500/40 bg-emerald-950/[0.08]"
      }`}
    >
      {/* Top Semantic Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs mb-2">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>MECANISMO INTERACTIVO 02 // SIMULADOR DE RUNTIME FEE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
            Calculadora de Impacto: Tarifa Retroactiva vs. Candado Criptográfico LSC
          </h3>
          <p className="text-sm text-[#94A3B8] mt-1">
            Simula el impacto financiero sobre un estudio independiente con un juego gratuito
            cuando el motor subyacente impone un cobro retroactivo por descarga.
          </p>
        </div>

        {/* Status Pill */}
        <div
          className={`px-3.5 py-2 rounded-xl font-mono text-xs font-semibold border flex items-center gap-2 self-start ${
            mode === "retroactive"
              ? "bg-red-500/20 border-red-500/40 text-red-300 animate-pulse"
              : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
          }`}
        >
          {mode === "retroactive" ? (
            <>
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>ALERTA ROJA: RUG-PULL CONTRACTUAL ACTIVO</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>PROTECCIÓN LSC: LICENCIA PERPETUA SELLADA</span>
            </>
          )}
        </div>
      </div>

      {/* Main Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Controls & Input */}
        <div className="lg:col-span-7 space-y-5">
          <div className="p-5 rounded-xl bg-[#090A0F]/80 border border-white/[0.08]">
            <div className="flex items-center justify-between mb-3">
              <label
                htmlFor="downloads-input"
                className="font-mono text-xs uppercase text-[#94A3B8] flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-amber-400" />
                Usuarios / Descargas de Juego Gratuito ($0 Ingresos):
              </label>
              <button
                type="button"
                onClick={() => setDownloads(250000)}
                className="text-[11px] font-mono text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Reset 250,000
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
              <input
                id="downloads-input"
                type="number"
                min={10000}
                max={2000000}
                step={10000}
                value={downloads}
                onChange={(e) => setDownloads(Math.max(0, Number(e.target.value)))}
                className="bg-white/[0.04] border border-white/[0.12] rounded-lg px-4 py-2.5 font-mono text-lg font-bold text-[#F8FAFC] focus:outline-none focus:border-amber-400 w-full sm:w-48"
              />
              <input
                type="range"
                min={50000}
                max={1000000}
                step={25000}
                value={downloads}
                onChange={(e) => setDownloads(Number(e.target.value))}
                aria-label=" Ajustar volumen de descargas"
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06] font-mono text-xs">
              <div>
                <span className="text-[#94A3B8] block">Precio del Juego:</span>
                <span className="text-[#F8FAFC] font-semibold">$0.00 USD (Free-to-Play)</span>
              </div>
              <div>
                <span className="text-[#94A3B8] block">Instalaciones Fantasma / Bots:</span>
                <span className="text-amber-300 font-semibold">
                  ~{phantomInstalls.toLocaleString("en-US")} no auditables
                </span>
              </div>
            </div>
          </div>

          {/* Action Trigger Buttons specified in the Plan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setMode("retroactive")}
              className={`p-4 rounded-xl border font-mono text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 editorial-transition cursor-pointer ${
                mode === "retroactive"
                  ? "bg-red-500/25 border-red-500 text-red-200 shadow-lg shadow-red-500/15"
                  : "bg-white/[0.03] border-white/[0.1] text-[#94A3B8] hover:text-white hover:border-red-500/40"
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Activar Tarifa Retroactiva</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("lsc_protected")}
              className={`p-4 rounded-xl border font-mono text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 editorial-transition cursor-pointer ${
                mode === "lsc_protected"
                  ? "bg-emerald-500/25 border-emerald-500 text-emerald-200 shadow-lg shadow-emerald-500/15"
                  : "bg-white/[0.03] border-white/[0.1] text-[#94A3B8] hover:text-white hover:border-emerald-500/40"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Aplicar Garantía LSC</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Financial & Cryptographic Output */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-[#090A0F]/90 border border-white/[0.1]">
          {mode === "retroactive" ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold">
                  DEUDA IMPREVISTA POR CAMBIO RETROACTIVO
                </span>
                <DollarSign className="w-5 h-5 text-red-400" />
              </div>

              <div className="py-3 border-y border-red-500/20">
                <div className="text-3xl sm:text-4xl font-mono font-bold text-red-400 tabular-nums">
                  -${retroactiveDebt.toLocaleString("en-US")} USD
                </div>
                <p className="text-xs text-red-200/80 mt-1 font-mono">
                  Calculado sobre {downloads.toLocaleString("en-US")} descargas ($0.15/instalación)
                  incluyendo reinstalaciones fantasma y piratería.
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#94A3B8]">
                <div className="flex items-center justify-between font-mono">
                  <span>Estado del Estudio Indie:</span>
                  <span className="text-red-400 font-semibold">INSOLVENCIA INMEDIATA</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span>Versión del Motor Afectada:</span>
                  <span className="text-amber-300">v2021.3 LTS (Compilada hace 2 años)</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span>Auditabilidad de Telemetría:</span>
                  <span className="text-red-400">Caja Negra Propietaria</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  CANDADO CRIPTOGRÁFICO LSC ACTIVO
                </span>
                <FileCheck2 className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="py-3 border-y border-emerald-500/20">
                <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-400 tabular-nums">
                  $0.00 USD
                </div>
                <p className="text-xs text-emerald-200/80 mt-1 font-mono">
                  Deuda retroactiva anulada. La versión compilada permanece protegida bajo la
                  licencia perpetua original firmada al iniciar el proyecto.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/25 font-mono text-[11px] text-emerald-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400">HASH DE LICENCIA INMUTABLE:</span>
                  <span>SHA256-Verified</span>
                </div>
                <div className="truncate text-emerald-300/90">
                  0x8f9c2b4e1d7a3f6c9b0e2a5d8c1f4e7b9a2c5d8f1e4b7a0c
                </div>
                <div className="text-[10px] text-[#94A3B8] pt-1">
                  Cláusula LSC-02: Ningún cambio tarifario puede aplicarse a versiones ya
                  publicadas.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
