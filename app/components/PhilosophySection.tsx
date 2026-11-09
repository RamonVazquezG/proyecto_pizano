"use client";

import React, { useState } from "react";
import {
  Clock,
  FileSignature,
  Zap,
  Database,
  Wrench,
  CheckCircle2,
  AlertOctagon,
  SlidersHorizontal,
} from "lucide-react";

interface ThesisItem {
  id: string;
  number: string;
  lscTitle: string;
  predatoryTitle: string;
  icon: React.ElementType;
  spanClass: string;
  lscDescription: string;
  predatoryDescription: string;
  lscMetricLabel: string;
  lscMetricValue: string;
  predatoryMetricLabel: string;
  predatoryMetricValue: string;
}

const THESES: ThesisItem[] = [
  {
    id: "retencion",
    number: "TESIS 01",
    lscTitle: "Retención por Utilidad",
    predatoryTitle: "Retención por Fricción",
    icon: Clock,
    spanClass: "lg:col-span-2",
    lscDescription:
      "No medimos nuestro impacto por la cantidad de minutos que logramos atrapar a un usuario en una pantalla, sino por la velocidad y dignidad con la que resolvemos su problema para que pueda volver a su vida.",
    predatoryDescription:
      "Optimización de 'Time-on-Site' mediante flujos laberínticos, notificaciones de urgencia falsas y barreras artificiales que penalizan al usuario cuando intenta desconectarse o exportar su trabajo.",
    lscMetricLabel: "Tiempo medio de resolución",
    lscMetricValue: "< 45 seg (Cero fricción)",
    predatoryMetricLabel: "KPI extractivo",
    predatoryMetricValue: "+42 min de captura atencional",
  },
  {
    id: "estabilidad",
    number: "TESIS 02",
    lscTitle: "Estabilidad Contractual",
    predatoryTitle: "Monopolio Retroactivo",
    icon: FileSignature,
    spanClass: "lg:col-span-1",
    lscDescription:
      "Un acuerdo comercial es inmutable. Jamás atraeremos usuarios con condiciones accesibles para luego modificar unilateralmente los términos cuando el costo de migración sea prohibitivo.",
    predatoryDescription:
      "Estrategia 'Bait & Switch': capturar el ecosistema con licencias gratuitas o abiertas y, tras lograr dependencia técnica total (vendor lock-in), imponer peajes retroactivos sobre versiones ya desplegadas.",
    lscMetricLabel: "Inmutabilidad de licencia",
    lscMetricValue: "100% Perpetua por versión",
    predatoryMetricLabel: "Riesgo de Rug-Pull",
    predatoryMetricValue: "Modificación unilateral ToS",
  },
  {
    id: "eficiencia",
    number: "TESIS 03",
    lscTitle: "Eficiencia Técnica",
    predatoryTitle: "Despliegue Innecesario de Hype",
    icon: Zap,
    spanClass: "lg:col-span-1",
    lscDescription:
      "No inflaremos nuestra infraestructura con modelos masivos de IA generativa para complacer narrativas de inversión a costa de la latencia del usuario y del consumo eléctrico global.",
    predatoryDescription:
      "Invocar LLMs multimillonarios en parámetros para tareas deterministas triviales (como ordenar listas o validar formularios), multiplicando por 1,000x la huella energética y degradando la respuesta.",
    lscMetricLabel: "Huella energética por acción",
    lscMetricValue: "0.002 Wh (Algoritmo local)",
    predatoryMetricLabel: "Desperdicio por Hype IA",
    predatoryMetricValue: "2.8 Wh / llamada innecesaria",
  },
  {
    id: "propiedad",
    number: "TESIS 04",
    lscTitle: "Propiedad y Soberanía",
    predatoryTitle: "Cosecha Oculta de Datos",
    icon: Database,
    spanClass: "lg:col-span-1",
    lscDescription:
      "Los datos del usuario pertenecen exclusivamente al usuario. No existen cláusulas en letra pequeña que transfieran la propiedad de sus creaciones para alimentar nuestros algoritmos.",
    predatoryDescription:
      "Cláusulas ocultas en el EULA que otorgan sub-licencias perpetuas e irrevocables para raspar repositorios privados, documentos e interacciones con el fin de entrenar modelos comerciales propietarios.",
    lscMetricLabel: "Entrenamiento sin permiso",
    lscMetricValue: "0 Bytes recolectados",
    predatoryMetricLabel: "Ingesta silenciosa",
    predatoryMetricValue: "Opt-out oculto en 5 submenús",
  },
  {
    id: "mantenibilidad",
    number: "TESIS 05",
    lscTitle: "Mantenibilidad y Longevidad",
    predatoryTitle: "Obsolescencia Inducida",
    icon: Wrench,
    spanClass: "lg:col-span-1",
    lscDescription:
      "Construimos arquitecturas desacopladas y preparadas para perdurar en el tiempo, sin forzar migraciones artificiales ni descontinuar funciones críticas con el fin de obligar a recomprar licencias.",
    predatoryDescription:
      "Romper deliberadamente la retrocompatibilidad de formatos de archivo cada 18 meses y apagar servidores de validación para forzar el paso de licencias perpetuas a alquileres mensuales perpetuos.",
    lscMetricLabel: "Formatos abiertos y exportables",
    lscMetricValue: "Soporte LTS 10+ años",
    predatoryMetricLabel: "Ciclo de caducidad forzada",
    predatoryMetricValue: "Bloqueo de versión cada 12m",
  },
];

export default function PhilosophySection() {
  const [globalMode, setGlobalMode] = useState<"lsc" | "predatory" | "split">("split");
  const [cardModes, setCardModes] = useState<Record<string, "lsc" | "predatory">>({});

  const toggleCardMode = (id: string) => {
    setCardModes((prev) => {
      const current = prev[id] ?? (globalMode === "predatory" ? "predatory" : "lsc");
      return { ...prev, [id]: current === "lsc" ? "predatory" : "lsc" };
    });
  };

  return (
    <section
      id="filosofia"
      className="py-24 relative border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3">
              <span>01 // NUESTRA FILOSOFÍA</span>
              <span className="text-white/20">—</span>
              <span>VALOR REAL VS. EXTRACCIÓN PREDATORIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-4">
              Cinco distinciones fundacionales de nuestra agencia
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              Contraste directo entre la ingeniería orientada a la dignidad del usuario y los
              modelos de extracción predominantes en la industria. Inspecciona cada tesis o
              alterna el modo global de comparación.
            </p>
          </div>

          {/* Global Lens Switcher */}
          <div className="glass-panel p-1.5 rounded-xl inline-flex items-center gap-1 self-start">
            <span className="px-2.5 py-1 text-xs font-mono text-[#94A3B8] hidden sm:inline-flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
              Vista:
            </span>
            <button
              type="button"
              onClick={() => {
                setGlobalMode("split");
                setCardModes({});
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono editorial-transition cursor-pointer ${
                globalMode === "split"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Comparativa Dual
            </button>
            <button
              type="button"
              onClick={() => {
                setGlobalMode("lsc");
                setCardModes({});
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono editorial-transition cursor-pointer ${
                globalMode === "lsc"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Enfoque LSC
            </button>
            <button
              type="button"
              onClick={() => {
                setGlobalMode("predatory");
                setCardModes({});
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono editorial-transition cursor-pointer ${
                globalMode === "predatory"
                  ? "bg-red-500/20 text-red-300 border border-red-500/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Enfoque Predatorio
            </button>
          </div>
        </div>

        {/* Bento Grid (5 Foundational Theses) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {THESES.map((thesis) => {
            const Icon = thesis.icon;
            const activeCardView =
              cardModes[thesis.id] ?? (globalMode === "predatory" ? "predatory" : "lsc");
            const isSplit = globalMode === "split" && !cardModes[thesis.id];

            return (
              <article
                key={thesis.id}
                className={`${thesis.spanClass} glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group editorial-transition ${
                  !isSplit && activeCardView === "predatory"
                    ? "border-red-500/30 bg-red-950/[0.12]"
                    : "border-white/[0.08]"
                }`}
              >
                {/* Card Top Header */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-400 block">
                          {thesis.number}
                        </span>
                        <h3 className="text-lg font-bold text-[#F8FAFC] leading-snug">
                          {thesis.lscTitle}{" "}
                          <span className="text-[#94A3B8] font-normal text-sm">vs.</span>{" "}
                          <span className="text-red-400/90 font-medium text-base">
                            {thesis.predatoryTitle}
                          </span>
                        </h3>
                      </div>
                    </div>

                    {/* Individual Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleCardMode(thesis.id)}
                      className="shrink-0 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] font-mono text-[11px] text-[#94A3B8] hover:text-white editorial-transition cursor-pointer"
                      title="Alternar lente en esta tarjeta"
                    >
                      {isSplit
                        ? "Inspeccionar 1:1"
                        : activeCardView === "lsc"
                        ? "Ver Trampa →"
                        : "← Ver LSC"}
                    </button>
                  </div>

                  {/* Content Display: Either Dual Split or Single Focused Mode */}
                  {isSplit ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                      {/* LSC Ethical Column */}
                      <div className="p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-semibold mb-2">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span>COMPROMISO LSC: {thesis.lscTitle.toUpperCase()}</span>
                          </div>
                          <p className="text-sm text-[#F8FAFC]/90 leading-relaxed">
                            {thesis.lscDescription}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-emerald-500/15 flex items-center justify-between font-mono text-xs">
                          <span className="text-[#94A3B8]">{thesis.lscMetricLabel}:</span>
                          <span className="text-emerald-300 font-semibold">
                            {thesis.lscMetricValue}
                          </span>
                        </div>
                      </div>

                      {/* Predatory Extraction Column */}
                      <div className="p-4 rounded-xl bg-red-500/[0.05] border border-red-500/20 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-red-400 font-mono text-xs font-semibold mb-2">
                            <AlertOctagon className="w-3.5 h-3.5 shrink-0" />
                            <span>EXTRACCIÓN: {thesis.predatoryTitle.toUpperCase()}</span>
                          </div>
                          <p className="text-sm text-[#94A3B8] leading-relaxed">
                            {thesis.predatoryDescription}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-red-500/15 flex items-center justify-between font-mono text-xs">
                          <span className="text-[#94A3B8]">{thesis.predatoryMetricLabel}:</span>
                          <span className="text-red-300 font-semibold">
                            {thesis.predatoryMetricValue}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : activeCardView === "lsc" ? (
                    <div className="p-5 rounded-xl bg-emerald-500/[0.07] border border-emerald-500/25 my-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>ENFOQUE ÉTICO LSC — {thesis.lscTitle}</span>
                      </div>
                      <p className="text-sm sm:text-base text-[#F8FAFC] leading-relaxed mb-4">
                        {thesis.lscDescription}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-emerald-500/20 font-mono text-xs">
                        <span className="text-[#94A3B8]">{thesis.lscMetricLabel}</span>
                        <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                          {thesis.lscMetricValue}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-xl bg-red-500/[0.08] border border-red-500/30 my-2">
                      <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold mb-2">
                        <AlertOctagon className="w-4 h-4" />
                        <span>ANTIPATRÓN DE LA INDUSTRIA — {thesis.predatoryTitle}</span>
                      </div>
                      <p className="text-sm sm:text-base text-red-100/90 leading-relaxed mb-4">
                        {thesis.predatoryDescription}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-red-500/20 font-mono text-xs">
                        <span className="text-red-300/70">{thesis.predatoryMetricLabel}</span>
                        <span className="px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 font-semibold">
                          {thesis.predatoryMetricValue}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
