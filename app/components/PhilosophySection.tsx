"use client";

import React, { useState } from "react";
import {
  Clock,
  BookOpen,
  Leaf,
  Database,
  Hammer,
  RotateCcw,
  Sparkles,
  ArrowRight,
  PenTool,
} from "lucide-react";

interface ThesisItem {
  id: string;
  number: string;
  artisanTitle: string;
  predatoryTitle: string;
  icon: React.ElementType;
  spanClass: string;
  artisanDescription: string;
  predatoryDescription: string;
  artisanMetricLabel: string;
  artisanMetricValue: string;
  predatoryMetricLabel: string;
  predatoryMetricValue: string;
}

const THESES: ThesisItem[] = [
  {
    id: "retencion",
    number: "TESIS I",
    artisanTitle: "La Dignidad del Tiempo",
    predatoryTitle: "La Trampa del Minuto Forzado",
    icon: Clock,
    spanClass: "lg:col-span-2",
    artisanDescription:
      "No medimos nuestro éxito atrapando a una persona frente a la pantalla, sino permitiéndole resolver su necesidad con precisión y elegancia para que pueda regresar a su vida real.",
    predatoryDescription:
      "Algoritmos obsesionados con 'tiempo en pantalla', bucles de notificaciones ansiosas y barreras artificiales que castigan al usuario cuando desea desconectarse.",
    artisanMetricLabel: "Resolución digna",
    artisanMetricValue: "< 45 seg y libertad",
    predatoryMetricLabel: "Vicio extractivo",
    predatoryMetricValue: "+45 min de fricción artificial",
  },
  {
    id: "estabilidad",
    number: "TESIS II",
    artisanTitle: "La Palabra Dada es Inmutable",
    predatoryTitle: "El Monopolio del Cerco",
    icon: BookOpen,
    spanClass: "lg:col-span-1",
    artisanDescription:
      "Un pacto de oficio no se traiciona. Jamás atraeremos a una comunidad con condiciones accesibles para luego cambiar las reglas del juego cuando migrar sea imposible.",
    predatoryDescription:
      "El anzuelo digital ('Bait & Switch'): prometer apertura hasta lograr dependencia total y luego cobrar peajes retroactivos o cerrar el candado.",
    artisanMetricLabel: "Compromiso de versión",
    artisanMetricValue: "100% Perpetua e intacta",
    predatoryMetricLabel: "Riesgo de Rug-Pull",
    predatoryMetricValue: "Cambio de cláusulas a traición",
  },
  {
    id: "eficiencia",
    number: "TESIS III",
    artisanTitle: "La Herramienta Adecuada",
    predatoryTitle: "El Despilfarro Artificial",
    icon: Leaf,
    spanClass: "lg:col-span-1",
    artisanDescription:
      "No encenderemos hornos nucleares para tostar un pan. Usamos código artesanal limpio, ligero y sensato, sin inflar el software con modelos gigantes innecesarios.",
    predatoryDescription:
      "Consumir vatios masivos de energía invocando servidores lejanos para tareas que una simple fórmula matemática resuelve en microsegundos.",
    artisanMetricLabel: "Huella energética",
    artisanMetricValue: "0.002 Wh (Mínimo impacto)",
    predatoryMetricLabel: "Consumo desmedido",
    predatoryMetricValue: "2.8 Wh por vanidad",
  },
  {
    id: "propiedad",
    number: "TESIS IV",
    artisanTitle: "Tus Datos son tu Territorio",
    predatoryTitle: "La Minería Silenciosa",
    icon: Database,
    spanClass: "lg:col-span-2",
    artisanDescription:
      "Tus creaciones, notas y documentos te pertenecen en su totalidad. No entrenamos algoritmos ajenos con tus palabras ni espiamos lo que construyes en privado.",
    predatoryDescription:
      "Apropiación silenciosa mediante cláusulas ocultas de términos de servicio que convierten cada archivo del usuario en combustible de entrenamiento sin pago.",
    artisanMetricLabel: "Privacidad de origen",
    artisanMetricValue: "Cero extracción silenciosa",
    predatoryMetricLabel: "Apropiación",
    predatoryMetricValue: "Tus archivos son su producto",
  },
  {
    id: "oficio",
    number: "TESIS V",
    artisanTitle: "El Cuidado del Detalle",
    predatoryTitle: "La Obsolescencia Acelerada",
    icon: Hammer,
    spanClass: "lg:col-span-3",
    artisanDescription:
      "El software de calidad se cuida como un mueble de roble o un buen reloj: se repara, se respeta la compatibilidad hacia atrás y no se destruye a propósito con actualizaciones diseñadas para obligar a recomprar.",
    predatoryDescription:
      "Rediseños constantes que desorientan al usuario, degradación planificada del rendimiento y muros de suscripción forzosa.",
    artisanMetricLabel: "Longevidad",
    artisanMetricValue: "Diseñado para perdurar",
    predatoryMetricLabel: "Obsolescencia",
    predatoryMetricValue: "Caducidad programada",
  },
];

export default function PhilosophySection() {
  const [comparisonMode, setComparisonMode] = useState<"artisan" | "predatory">("artisan");

  return (
    <section id="filosofia" className="py-24 border-b border-[#E7E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E7E0D6]">
          <div className="max-w-2xl">
            <span className="rubber-stamp rubber-stamp-terracotta mb-3">
              CAPÍTULO I • FILOSOFÍA DE OFICIO
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight mt-2">
              Las Cinco Tesis del Taller
            </h2>
            <p className="text-sm sm:text-base text-[#78716C] mt-3 leading-relaxed">
              Frente a la cultura del consumo voraz y las interfaces hechas para enganchar, 
              proponemos la calma del artesano: herramientas transparentes, duraderas y respetuosas.
            </p>
          </div>

          {/* Selector de Perspectiva */}
          <div className="bg-[#F5EFEB] p-1.5 rounded-lg border border-[#D6CBC0] flex items-center gap-1 shrink-0 self-start">
            <button
              type="button"
              onClick={() => setComparisonMode("artisan")}
              className={`px-4 py-2 rounded-md text-xs font-serif font-bold transition-all cursor-pointer ${
                comparisonMode === "artisan"
                  ? "bg-white text-[#1C1917] shadow-sm border border-[#D6CBC0]"
                  : "text-[#78716C] hover:text-[#1C1917]"
              }`}
            >
              🌿 Mirada de Taller (LSC)
            </button>
            <button
              type="button"
              onClick={() => setComparisonMode("predatory")}
              className={`px-4 py-2 rounded-md text-xs font-serif font-bold transition-all cursor-pointer ${
                comparisonMode === "predatory"
                  ? "bg-[#991B1B] text-white shadow-sm"
                  : "text-[#78716C] hover:text-[#991B1B]"
              }`}
            >
              ⚠️ La Trampa Habitual
            </button>
          </div>
        </div>

        {/* Retícula de Pliegos de Tesis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {THESES.map((item) => {
            const Icon = item.icon;
            const isArtisan = comparisonMode === "artisan";

            return (
              <article
                key={item.id}
                className={`paper-sheet p-6 sm:p-8 rounded-xl transition-all relative flex flex-col justify-between ${
                  item.spanClass
                } ${
                  isArtisan
                    ? "hover:border-[#C85A32]/50 hover:shadow-md"
                    : "border-[#991B1B]/40 bg-[#FFF5F5]"
                }`}
              >
                <div>
                  {/* Encabezado de Tarjeta */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7E0D6]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#78716C]">
                      {item.number}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center ${
                        isArtisan
                          ? "bg-[#F5EFEB] text-[#C85A32] border border-[#D6CBC0]"
                          : "bg-[#991B1B]/10 text-[#991B1B] border border-[#991B1B]/20"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Título y Cuerpo */}
                  <h3 className="font-editorial text-2xl font-normal text-[#1C1917] mt-5 mb-3">
                    {isArtisan ? item.artisanTitle : item.predatoryTitle}
                  </h3>

                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {isArtisan ? item.artisanDescription : item.predatoryDescription}
                  </p>
                </div>

                {/* Sello de Métrica al Pie */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono rounded px-3 py-2 ${
                    isArtisan
                      ? "border-[#E7E0D6] bg-[#FDFBF7] text-[#2E5A44]"
                      : "border-[#991B1B]/20 bg-white text-[#991B1B]"
                  }`}
                >
                  <span className="text-[#78716C]">
                    {isArtisan ? item.artisanMetricLabel : item.predatoryMetricLabel}:
                  </span>
                  <span className="font-bold">
                    {isArtisan ? item.artisanMetricValue : item.predatoryMetricValue}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
