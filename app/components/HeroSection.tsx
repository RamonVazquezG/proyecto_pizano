"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  BookOpen,
  Feather,
  Check,
  Compass,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

export default function HeroSection() {
  const [signedImpression, setSignedImpression] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden border-b border-[#E7E0D6]"
    >
      {/* Guía milimétrica decorativa superior */}
      <div className="ruler-pattern opacity-40 mb-4" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Etiqueta de pliego / Edición */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="rubber-stamp rubber-stamp-terracotta">
            MANIFIESTO V6.7
          </span>
        </div>

        {/* Gran Título Editorial */}
        <div className="space-y-6">
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1C1917] leading-[1.08]">
            LM & Ladies{" "}
            <span className="italic underline decoration-[#C85A32]/40 decoration-wavy decoration-2 text-[#C85A32]">
              Devs
            </span>
          </h1>

          {/* Cita en pergamino */}
          <div className="paper-sheet-cream p-6 sm:p-8 rounded-xl border border-[#D6CBC0] relative mt-8">
            <div className="absolute -top-3.5 left-6 px-3 py-0.5 bg-[#F5EFEB] border border-[#D6CBC0] text-[11px] font-mono text-[#78716C] uppercase tracking-wider rounded">
              Axioma
            </div>
            <blockquote className="font-editorial text-xl sm:text-2xl text-[#44403C] italic leading-relaxed">
              &ldquo;Hacer dinero es una consecuencia natural de construir valor sostenido;
              hacer buen software es un deber moral con quien deposita su tiempo, sus recursos
              y su confianza en nuestras manos.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Acciones e Interacción táctil de Sello */}
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <a
            href="#filosofia"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#292524] text-[#FDFBF7] font-medium text-sm hover:bg-[#1C1917] transition-all shadow-md shadow-stone-900/10 active:translate-y-0.5"
          >
            <BookOpen className="w-4 h-4 text-[#F5EFEB]" />
            <span>Leer el Manifiesto</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setSignedImpression(!signedImpression)}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              signedImpression
                ? "bg-[#2E5A44]/10 border-[#2E5A44] text-[#2E5A44]"
                : "bg-white border-[#D6CBC0] text-[#57534E] hover:border-[#C85A32] hover:text-[#C85A32] shadow-sm"
            }`}
          >
            {signedImpression ? (
              <>
                <Check className="w-4 h-4 text-[#2E5A44]" />
                <span className="font-mono">Pliego Sellado por el Lector</span>
              </>
            ) : (
              <>
                <Feather className="w-4 h-4 text-[#C85A32]" />
                <span>Estampar Sello de Aprobación</span>
              </>
            )}
          </button>
        </div>

        {/* Puntos de Confort Humano */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 mt-12 border-t border-[#E7E0D6]">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded bg-[#F5EFEB] border border-[#D6CBC0] flex items-center justify-center text-[#C85A32] shrink-0 font-serif font-bold text-sm">
              I
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1C1917]">Sin Pistas Falsas</p>
              <p className="text-xs text-[#78716C] mt-0.5">
                Cero trampas visuales, botones engañosos ni letra ilegible.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded bg-[#F5EFEB] border border-[#D6CBC0] flex items-center justify-center text-[#2E5A44] shrink-0 font-serif font-bold text-sm">
              II
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1C1917]">Inmutabilidad de Palabra</p>
              <p className="text-xs text-[#78716C] mt-0.5">
                Los acuerdos se respetan. Sin cambios arbitrarios a traición.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded bg-[#F5EFEB] border border-[#D6CBC0] flex items-center justify-center text-[#B45309] shrink-0 font-serif font-bold text-sm">
              III
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1C1917]">Paz y Espacio Propio</p>
              <p className="text-xs text-[#78716C] mt-0.5">
                Sin notificaciones que generen culpa ni ruido dopaminérgico.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ruler-pattern opacity-40 mt-8" />
    </section>
  );
}
