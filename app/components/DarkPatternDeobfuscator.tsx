"use client";

import React, { useState } from "react";
import {
  EyeOff,
  CheckCircle2,
  AlertOctagon,
  ToggleLeft,
  ToggleRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export default function DarkPatternDeobfuscator() {
  const [honestMode, setHonestMode] = useState<boolean>(false);
  const [cancelledSuccess, setCancelledSuccess] = useState<boolean>(false);
  const [trapMessage, setTrapMessage] = useState<string | null>(null);

  const handlePredatoryCancelAttempt = () => {
    setTrapMessage(
      "Paso 1 de 7: Antes de continuar, debes completar una encuesta obligatoria de 12 preguntas y hablar con un agente de retención en horario laboral."
    );
  };

  const handleHonestCancel = () => {
    setTrapMessage(null);
    setCancelledSuccess(true);
  };

  const resetDemo = () => {
    setCancelledSuccess(false);
    setTrapMessage(null);
  };

  return (
    <div
      className={`glass-panel rounded-2xl p-6 sm:p-8 border editorial-transition relative overflow-hidden ${
        honestMode
          ? "border-emerald-500/40 bg-emerald-950/[0.08]"
          : "border-red-500/40 bg-red-950/[0.1]"
      }`}
    >
      {/* Top Semantic Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-500/15 border border-red-500/30 text-red-300 font-mono text-xs mb-2">
            <EyeOff className="w-3.5 h-3.5 text-red-400" />
            <span>MECANISMO INTERACTIVO 03 // EL DESARMADOR DE TRAMPAS UI</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
            Modal de Cancelación: Manipulación Culpígena vs. Simetría LSC
          </h3>
          <p className="text-sm text-[#94A3B8] mt-1">
            Activa el interruptor de &ldquo;Modo Honesto&rdquo; para desarmar en tiempo real el
            lenguaje culpígeno (*confirmshaming*), las casillas preseleccionadas y la
            asimetría visual.
          </p>
        </div>

        {/* Toggle "Modo Honesto" */}
        <button
          type="button"
          onClick={() => {
            setHonestMode(!honestMode);
            setTrapMessage(null);
            setCancelledSuccess(false);
          }}
          className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold border flex items-center gap-3 self-start editorial-transition cursor-pointer ${
            honestMode
              ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-200 shadow-lg shadow-emerald-500/10"
              : "bg-red-500/20 border-red-500/50 text-red-200 hover:bg-red-500/30"
          }`}
        >
          {honestMode ? (
            <ToggleRight className="w-6 h-6 text-emerald-400" />
          ) : (
            <ToggleLeft className="w-6 h-6 text-red-400" />
          )}
          <span>Modo Honesto LSC: {honestMode ? "ACTIVADO" : "DESACTIVADO"}</span>
        </button>
      </div>

      {/* Simulated Modal Container */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Interactive Modal Preview */}
        <div className="lg:col-span-7 bg-[#090A0F] rounded-2xl border border-white/[0.12] p-6 sm:p-7 shadow-2xl relative">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
            <span className="font-mono text-xs text-[#94A3B8]">
              {honestMode
                ? "modal://gestion-de-cuenta/cancelacion-directa"
                : "modal://retencion-forzada/paso-1-de-7"}
            </span>
            <span
              className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase font-semibold ${
                honestMode
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-red-500/20 text-red-300 border border-red-500/30"
              }`}
            >
              {honestMode ? "1 Solo Paso Simétrico" : "3 Patrones Oscuros Detectados"}
            </span>
          </div>

          {cancelledSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[#F8FAFC]">
                Suscripción cancelada en 1 clic
              </h4>
              <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                No se realizarán más cargos. Tus datos han sido exportados y eliminados de
                nuestros servidores sin fricción ni cuestionarios coercitivos.
              </p>
              <button
                type="button"
                onClick={resetDemo}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-[#F8FAFC] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reiniciar demostración
              </button>
            </div>
          ) : !honestMode ? (
            /* PREDATORY VERSION */
            <div className="space-y-5">
              <div>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">
                  ¡Espera! ¿Realmente quieres abandonar tu progreso y perder todo?
                </h4>
                <p className="text-sm text-[#94A3B8]">
                  Si cancelas ahora, perderás inmediatamente tus beneficios acumulados, tus
                  proyectos quedarán bloqueados y tu tarifa subirá un 40% si decides volver.
                </p>
              </div>

              {/* Hidden Pre-checked Boxes */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-red-500/25 space-y-2.5 text-xs text-slate-400">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 accent-red-500"
                  />
                  <span>
                    Acepto pausar mi cuenta por solo $9.99/mes en lugar de cancelar y autorizo
                    recibir ofertas diarias de reactivación.
                    <span className="ml-2 px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-[10px]">
                      [Preseleccionado oculto]
                    </span>
                  </span>
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 accent-red-500"
                  />
                  <span>
                    No deseo conservar la portabilidad de mis archivos locales tras cerrar
                    sesión.
                  </span>
                </label>
              </div>

              {/* Asymmetric Buttons + Confirmshaming */}
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => setTrapMessage(null)}
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 cursor-pointer"
                >
                  ¡Sí, quiero mantener mi cuenta activa y ahorrar dinero!
                </button>

                <button
                  type="button"
                  onClick={handlePredatoryCancelAttempt}
                  className="w-full py-1.5 text-[11px] text-slate-600 hover:text-slate-400 underline decoration-dotted cursor-pointer"
                >
                  No, no me importa perder todos mis ahorros y beneficios
                </button>
              </div>

              {trapMessage && (
                <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-xs text-red-200 font-mono flex items-start gap-2">
                  <AlertOctagon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{trapMessage}</span>
                </div>
              )}
            </div>
          ) : (
            /* HONEST LSC VERSION */
            <div className="space-y-5">
              <div>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">
                  Confirmar cancelación de suscripción
                </h4>
                <p className="text-sm text-[#94A3B8]">
                  Tu ciclo de facturación finalizará hoy sin cargos adicionales. Conservas
                  acceso completo para exportar tus archivos en formato estándar abierto.
                </p>
              </div>

              {/* Transparent Summary */}
              <div className="p-3.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/25 space-y-1.5 font-mono text-xs text-emerald-200">
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Cargos futuros:</span>
                  <span className="font-semibold text-emerald-300">$0.00 USD (Inmediato)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Casillas preseleccionadas:</span>
                  <span className="font-semibold text-emerald-300">0 (Prohibidas por LSC)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Pasos requeridos:</span>
                  <span className="font-semibold text-emerald-300">1 clic simétrico</span>
                </div>
              </div>

              {/* Visually Symmetric Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetDemo}
                  className="py-3 px-4 rounded-xl border border-white/[0.18] bg-white/[0.05] hover:bg-white/[0.1] text-[#F8FAFC] font-medium text-sm editorial-transition cursor-pointer"
                >
                  Mantener suscripción
                </button>
                <button
                  type="button"
                  onClick={handleHonestCancel}
                  className="py-3 px-4 rounded-xl border border-emerald-400/50 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-100 font-medium text-sm editorial-transition cursor-pointer"
                >
                  Confirmar cancelación
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Live Audit Checklist of Dark Patterns */}
        <div className="lg:col-span-5 space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Diagnóstico de Interfaz en Tiempo Real
          </div>

          <div
            className={`p-4 rounded-xl border ${
              honestMode
                ? "bg-emerald-500/[0.06] border-emerald-500/25"
                : "bg-red-500/[0.06] border-red-500/25"
            }`}
          >
            <div className="font-mono text-xs font-semibold mb-1 text-[#F8FAFC]">
              1. Lenguaje Culpígeno (Confirmshaming)
            </div>
            <p className="text-xs text-[#94A3B8]">
              {honestMode
                ? "ERRADICADO: El botón usa lenguaje objetivo ('Confirmar cancelación') sin chantaje emocional."
                : "DETECTADO: 'No, no me importa perder todos mis ahorros y beneficios' manipula emocionalmente al usuario."}
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              honestMode
                ? "bg-emerald-500/[0.06] border-emerald-500/25"
                : "bg-red-500/[0.06] border-red-500/25"
            }`}
          >
            <div className="font-mono text-xs font-semibold mb-1 text-[#F8FAFC]">
              2. Simetría Visual y de Esfuerzo
            </div>
            <p className="text-xs text-[#94A3B8]">
              {honestMode
                ? "CUMPLIDO: Ambos botones comparten dimensiones, contraste tipográfico y jerarquía visual idéntica."
                : "VIOLACIÓN: El botón de retención es brillante y masivo; la opción de cancelar está oculta en gris de bajo contraste."}
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              honestMode
                ? "bg-emerald-500/[0.06] border-emerald-500/25"
                : "bg-red-500/[0.06] border-red-500/25"
            }`}
          >
            <div className="font-mono text-xs font-semibold mb-1 text-[#F8FAFC]">
              3. Laberinto de Retención (Roach Motel)
            </div>
            <p className="text-xs text-[#94A3B8]">
              {honestMode
                ? "CUMPLIDO: Cancelación ejecutada en 1 solo paso directo, igual que el registro."
                : "VIOLACIÓN: Exige 7 pasos, encuestas obligatorias y casillas preseleccionadas con cargos ocultos."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
