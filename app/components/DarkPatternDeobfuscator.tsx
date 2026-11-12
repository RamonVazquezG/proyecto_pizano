"use client";

import React, { useState } from "react";
import {
  EyeOff,
  Check,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  Smile,
  Frown,
} from "lucide-react";

export default function DarkPatternDeobfuscator() {
  const [honestMode, setHonestMode] = useState<boolean>(false);
  const [cancelledSuccess, setCancelledSuccess] = useState<boolean>(false);
  const [trapStep, setTrapStep] = useState<number>(0);

  const handlePredatoryCancelAttempt = () => {
    setTrapStep((prev) => prev + 1);
  };

  const handleHonestCancel = () => {
    setCancelledSuccess(true);
    setTrapStep(0);
  };

  const resetDemo = () => {
    setCancelledSuccess(false);
    setTrapStep(0);
  };

  return (
    <div className="space-y-6">
      {/* Cabecera del Instrumento */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="rubber-stamp rubber-stamp-crimson mb-2">
            INSTRUMENTO DE TALLER 03 • LÁPIZ ROJO DE CORRECCIÓN
          </span>
          <h4 className="font-editorial text-xl font-normal text-[#1C1917]">
            Desarmador de Trampas: Manipulación Culpígena vs. Trato Justo
          </h4>
          <p className="text-xs text-[#78716C] mt-1 max-w-2xl">
            Compara cómo una interfaz deshonesta chantajea emocionalmente al usuario para evitar que cancele,
            frente a la honestidad de una puerta abierta en un solo clic.
          </p>
        </div>

        {/* Interruptor de Modo */}
        <button
          type="button"
          onClick={() => {
            setHonestMode(!honestMode);
            resetDemo();
          }}
          className={`px-4 py-2 rounded-lg font-serif text-xs font-bold border flex items-center gap-2.5 transition-all cursor-pointer self-start ${
            honestMode
              ? "bg-[#2E5A44] border-[#2E5A44] text-white shadow-sm"
              : "bg-white border-[#D6CBC0] text-[#991B1B] hover:border-[#991B1B]"
          }`}
        >
          {honestMode ? (
            <>
              <ToggleRight className="w-5 h-5 text-white" />
              <span>Modo Honesto LSC: ACTIVO</span>
            </>
          ) : (
            <>
              <ToggleLeft className="w-5 h-5 text-[#991B1B]" />
              <span>Ver la Trampa Habitual</span>
            </>
          )}
        </button>
      </div>

      {/* Tarjeta de Demostración */}
      <div className="paper-sheet p-6 sm:p-8 rounded-xl border border-[#D6CBC0] max-w-2xl mx-auto shadow-md">
        {cancelledSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#2E5A44]/10 text-[#2E5A44] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h5 className="font-editorial text-2xl font-normal text-[#1C1917]">
              Suscripción Cancelada con Respeto
            </h5>
            <p className="text-sm text-[#57534E] max-w-md mx-auto">
              Sin preguntas inquisitivas, sin penalizaciones y sin letras pequeñas.
              Tus datos te acompañan y puedes volver cuando lo desees.
            </p>
            <button
              type="button"
              onClick={resetDemo}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#F5EFEB] border border-[#D6CBC0] text-xs font-mono text-[#57534E] hover:bg-white cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reiniciar demostración
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E0D6]">
              <div className="flex items-center gap-2">
                {honestMode ? (
                  <Smile className="w-5 h-5 text-[#2E5A44]" />
                ) : (
                  <Frown className="w-5 h-5 text-[#991B1B]" />
                )}
                <span className="font-serif font-bold text-base text-[#1C1917]">
                  {honestMode
                    ? "Confirmación de Cancelación Directa"
                    : "¿De verdad nos vas a abandonar?"}
                </span>
              </div>
              <span className="font-mono text-xs text-[#78716C]">
                {honestMode ? "Paso 1 de 1" : `Laberinto: Paso ${trapStep + 1} de 6`}
              </span>
            </div>

            {/* Contenido según modo */}
            {honestMode ? (
              <div className="space-y-4">
                <p className="text-sm text-[#44403C] leading-relaxed">
                  Lamentamos que te vayas, pero respetamos plenamente tu decisión. Tu suscripción
                  estará activa hasta el final del periodo pagado. No se realizarán más cargos.
                </p>

                <div className="p-4 bg-[#F5EFEB] rounded-lg border border-[#E7E0D6] text-xs space-y-1.5 text-[#57534E]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2E5A44]" />
                    <span>Cero preguntas obligatorias.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2E5A44]" />
                    <span>Exportación de tus datos en formato abierto en 1 clic.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleHonestCancel}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#292524] text-white font-serif font-bold text-xs hover:bg-black cursor-pointer shadow-sm"
                  >
                    Confirmar Cancelación Inmediata
                  </button>
                  <button
                    type="button"
                    onClick={resetDemo}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white border border-[#D6CBC0] text-[#57534E] font-serif font-bold text-xs hover:bg-[#F5EFEB] cursor-pointer"
                  >
                    Mantener mi Suscripción
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-[#FFF5F5] border border-[#991B1B]/30 rounded-lg">
                  <p className="font-editorial text-sm text-[#7F1D1D] italic leading-relaxed">
                    &ldquo;Si cancelas ahora, perderás todos tus descuentos acumulados,
                    borraremos tus proyectos y decepcionarás a nuestro equipo que tanto se esfuerza...&rdquo;
                  </p>
                </div>

                {trapStep > 0 && (
                  <div className="p-3 bg-[#FEF3C7] border border-[#F59E0B] rounded-lg text-xs text-[#92400E]">
                    ⚠️ <strong>Traba burocrática No. {trapStep}:</strong> Por favor llama por teléfono en horario comercial
                    a nuestras oficinas para obtener un código de 8 dígitos de confirmación.
                  </div>
                )}

                <div className="flex flex-col gap-2.5 pt-2">
                  {/* Botón engañoso prominente */}
                  <button
                    type="button"
                    onClick={resetDemo}
                    className="w-full py-3 rounded-lg bg-[#C85A32] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B34B26] cursor-pointer shadow-md"
                  >
                    ¡QUIERO QUEDARME Y SALVAR MIS DESCUENTOS!
                  </button>

                  {/* Enlace de cancelación diminuto y oculto a propósito */}
                  <button
                    type="button"
                    onClick={handlePredatoryCancelAttempt}
                    className="text-[11px] text-[#A8A29E] underline hover:text-[#991B1B] pt-2 text-center cursor-pointer"
                  >
                    No me importa perder todo y prefiero cancelar de todos modos
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
