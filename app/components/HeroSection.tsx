"use client";

import React from "react";
import {
  ArrowDown,
  Shield,
  Cpu,
  Scale,
  EyeOff,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between overflow-hidden bg-grid-pattern border-b border-white/[0.08]"
    >
      {/* Ambient radial spotlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#06B6D4]/15 to-transparent blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[300px] rounded-full bg-[#10B981]/10 blur-[130px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Top Metadata Ribbon */}
        <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel mb-8">
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[11px] font-semibold tracking-wider uppercase">
            CÓDIGO LSC MODERNO
          </span>
          <span className="text-xs text-[#94A3B8] font-mono">
            Manifiesto Interactivo de Ética Tecnológica
          </span>
          <span className="text-white/20">•</span>
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Estándar Verificable
          </span>
        </div>

        {/* Impact Editorial Heading */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC] leading-[1.06] mb-6">
            El software como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#10B981]">
              herramienta humana
            </span>
            , no como trampa financiera.
          </h1>

          {/* Core Philosophical Quote */}
          <blockquote className="my-8 pl-5 border-l-2 border-indigo-500/60 text-lg sm:text-xl text-[#94A3B8] italic leading-relaxed max-w-3xl">
            &ldquo;Hacer dinero es una consecuencia de construir valor sostenido; hacer buen
            software es un deber moral con quien deposita su tiempo, sus recursos y su
            confianza en nuestro código.&rdquo;
          </blockquote>
        </div>

        {/* Action Buttons & Quick Jump */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            href="#filosofia"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#F8FAFC] text-[#090A0F] font-semibold text-sm hover:bg-indigo-50 editorial-transition shadow-lg shadow-indigo-500/10"
          >
            <span>Explorar el Manifiesto</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#codigo-lsc"
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl glass-panel glass-panel-hover text-[#F8FAFC] font-mono text-xs sm:text-sm"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Auditar los 3 Dilemas Interactivos</span>
          </a>

          <a
            href="#crisis"
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs hover:bg-amber-500/20 editorial-transition"
          >
            <span>Simulador de Crisis en Vivo →</span>
          </a>
        </div>

        {/* 4 Semantic Pillars Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          <a
            href="#codigo-lsc"
            className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                DILEMA 01 // IA
              </span>
              <Cpu className="w-5 h-5 text-indigo-400 group-hover:scale-110 editorial-transition" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-[#F8FAFC] mb-1">
                Trazabilidad en IA Generativa
              </h2>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Auditoría Split-Diff de código autogenerado, atribución de licencias GPL y huella energética en Wh.
              </p>
            </div>
          </a>

          <a
            href="#codigo-lsc"
            className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                DILEMA 02 // RUG-PULL
              </span>
              <Scale className="w-5 h-5 text-amber-400 group-hover:scale-110 editorial-transition" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-[#F8FAFC] mb-1">
                Inmutabilidad Contractual
              </h2>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Protección criptográfica contra tarifas retroactivas por descarga o cambios unilaterales de licencia.
              </p>
            </div>
          </a>

          <a
            href="#codigo-lsc"
            className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">
                DILEMA 03 // UI TRAPS
              </span>
              <EyeOff className="w-5 h-5 text-red-400 group-hover:scale-110 editorial-transition" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-[#F8FAFC] mb-1">
                Erradicación de Dark Patterns
              </h2>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Simetría visual absoluta, cero confirmshaming y arquitectura de cancelación en 1 solo paso.
              </p>
            </div>
          </a>

          <a
            href="#promesa"
            className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                GARANTÍA // LSC
              </span>
              <Shield className="w-5 h-5 text-emerald-400 group-hover:scale-110 editorial-transition" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-[#F8FAFC] mb-1">
                Contrato Visual y Crisis
              </h2>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                3 garantías vinculantes para el usuario y protocolo de respuesta operativa en tiempo real.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
