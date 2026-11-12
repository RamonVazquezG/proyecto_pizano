"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Flame,
  Check,
  ChevronRight,
  AlertTriangle,
  Play,
  RotateCcw,
  BookOpen,
} from "lucide-react";

interface CrisisPhase {
  timeWindow: string;
  title: string;
  actions: string[];
  fieldNotes: string[];
  statusLabel: string;
}

interface Scenario {
  id: "sim-a" | "sim-b";
  stamp: string;
  stampClass: string;
  title: string;
  description: string;
  phases: CrisisPhase[];
}

const SCENARIOS: Record<"sim-a" | "sim-b", Scenario> = {
  "sim-a": {
    id: "sim-a",
    stamp: "PROTOCOLO 01",
    stampClass: "rubber-stamp-crimson",
    title: "Vulnerabilidad o Fuga Imprevista",
    description:
      "Protocolo de actuación inmediata ante cualquier fallo de seguridad, priorizando la honestidad radical por encima de la imagen corporativa.",
    phases: [
      {
        timeWindow: "Primeras 2 Horas",
        title: "Fase I: Aislamiento y Parada de Emergencia",
        actions: [
          "Revocación inmediata de todas las credenciales y llaves de acceso.",
          "Desconexión preventiva de los sistemas afectados.",
          "Publicación de aviso honesto de contingencia (sin excusas técnicas).",
        ],
        fieldNotes: [
          "00:15h — Detección de anomalía. Se activa el protocolo de oficio.",
          "00:30h — Llaves revocadas. Se apagan servidores vulnerables para proteger al usuario.",
          "00:50h — Aviso público publicado con lenguaje humano, sin tecnicismos evasivos.",
        ],
        statusLabel: "Contención perimetral: Completada",
      },
      {
        timeWindow: "De 2 a 6 Horas",
        title: "Fase II: Claridad y Notificación Personal",
        actions: [
          "Comunicación directa y personalizada a cada persona cuyos datos hayan podido verse expuestos.",
          "Publicación del informe forense preliminar en acceso libre.",
        ],
        fieldNotes: [
          "02:40h — Se determina el alcance exacto: 1,420 registros comprometidos.",
          "03:15h — Correos directos enviados con las recomendaciones prácticas.",
          "04:00h — Publicación en el diario de incidentes público.",
        ],
        statusLabel: "Notificación directa: 100% efectuada",
      },
      {
        timeWindow: "De 6 a 24 Horas",
        title: "Fase III: Reparación y Auditoría Externa",
        actions: [
          "Lanzamiento de parche con código abierto para que la comunidad pueda auditarlo.",
          "Revisión por pares de terceros independientes.",
        ],
        fieldNotes: [
          "08:30h — Parche desplegado y verificado por dos ingenieros independientes.",
          "14:00h — Informe final publicado con lecciones aprendidas.",
        ],
        statusLabel: "Resolución definitiva: Verificada",
      },
    ],
  },
  "sim-b": {
    id: "sim-b",
    stamp: "PROTOCOLO 02",
    stampClass: "rubber-stamp-forest",
    title: "Picos de Consumo Energético Imprevisto",
    description:
      "Plan de contención ecológica cuando un bucle de infraestructura o un servicio externo dispara la huella de carbono de la aplicación.",
    phases: [
      {
        timeWindow: "Primeros 30 Minutos",
        title: "Fase I: Frenado de Procesos Innecesarios",
        actions: [
          "Suspensión inmediata de tareas de procesamiento secundarias y modelos generativos pesados.",
          "Paso automático a modo de bajo consumo y algoritmos locales livianos.",
        ],
        fieldNotes: [
          "00:10h — Alerta de consumo inusual en servidores.",
          "00:20h — Apagado de llamadas redundantes a APIs de terceros.",
        ],
        statusLabel: "Consumo reducido al 15%",
      },
      {
        timeWindow: "De 1 a 4 Horas",
        title: "Fase II: Optimización de Código de Base",
        actions: [
          "Sustitución del cuello de botella por algoritmos deterministas eficientes.",
          "Verificación del contador de vatios por petición.",
        ],
        fieldNotes: [
          "01:30h — Rediseño del algoritmo causante del sobrecalentamiento.",
          "02:45h — Retorno a valores estándar de taller (0.002 Wh/acción).",
        ],
        statusLabel: "Estabilidad ecológica restaurada",
      },
      {
        timeWindow: "De 4 a 12 Horas",
        title: "Fase III: Compensación y Transparencia",
        actions: [
          "Publicación de la métrica exacta de consumo en el panel comunitario.",
          "Compensación activa de la huella residual generada.",
        ],
        fieldNotes: [
          "05:00h — Registro público de emisiones emitido.",
          "06:30h — Créditos de mitigación ecológica aplicados.",
        ],
        statusLabel: "Balance neutro auditado",
      },
    ],
  },
};

export default function CrisisEngine() {
  const [selectedScenario, setSelectedScenario] = useState<"sim-a" | "sim-b">("sim-a");
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const scenario = SCENARIOS[selectedScenario];
  const currentPhase = scenario.phases[activePhaseIndex];

  const handleNextPhase = () => {
    if (activePhaseIndex < scenario.phases.length - 1) {
      setActivePhaseIndex(activePhaseIndex + 1);
    }
  };

  const handleReset = () => {
    setActivePhaseIndex(0);
    setIsRunning(false);
  };

  return (
    <section id="crisis" className="py-24 border-b border-[#E7E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E7E0D6]">
          <div className="max-w-2xl">
            <span className="rubber-stamp rubber-stamp-terracotta mb-3">
              CAPÍTULO IV • PLAN DE CONTINGENCIA
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight mt-2">
              Protocolo de Taller ante Incidentes
            </h2>
            <p className="text-sm sm:text-base text-[#78716C] mt-3 leading-relaxed">
              Las cosas pueden fallar, pero la respuesta nunca debe ser el silencio, la mentira o el encubrimiento. 
              Aquí se documenta cómo responde el taller en cada etapa.
            </p>
          </div>

          {/* Selector de Escenario */}
          <div className="bg-[#F5EFEB] p-1.5 rounded-lg border border-[#D6CBC0] flex items-center gap-1 self-start">
            <button
              type="button"
              onClick={() => {
                setSelectedScenario("sim-a");
                handleReset();
              }}
              className={`px-3 py-1.5 rounded-md text-xs font-serif font-bold transition-all cursor-pointer ${
                selectedScenario === "sim-a"
                  ? "bg-white text-[#1C1917] shadow-sm border border-[#D6CBC0]"
                  : "text-[#78716C] hover:text-[#1C1917]"
              }`}
            >
              Fuga de Datos
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedScenario("sim-b");
                handleReset();
              }}
              className={`px-3 py-1.5 rounded-md text-xs font-serif font-bold transition-all cursor-pointer ${
                selectedScenario === "sim-b"
                  ? "bg-white text-[#1C1917] shadow-sm border border-[#D6CBC0]"
                  : "text-[#78716C] hover:text-[#1C1917]"
              }`}
            >
              Consumo Ecológico
            </button>
          </div>
        </div>

        {/* Ficha Principal de la Simulación */}
        <div className="paper-sheet p-6 sm:p-10 rounded-2xl border border-[#D6CBC0] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E0D6]">
            <div>
              <span className={`rubber-stamp ${scenario.stampClass} mb-2`}>
                {scenario.stamp}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C1917]">
                {scenario.title}
              </h3>
              <p className="text-sm text-[#57534E] mt-1 max-w-2xl">
                {scenario.description}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F5EFEB] border border-[#D6CBC0] text-xs font-serif font-bold text-[#57534E] hover:bg-white cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reiniciar
              </button>
            </div>
          </div>

          {/* Pasos / Cronología de Fases */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {scenario.phases.map((phase, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  activePhaseIndex === idx
                    ? "bg-[#F5EFEB] border-[#C85A32] shadow-sm"
                    : idx < activePhaseIndex
                    ? "bg-white border-[#2E5A44]/40"
                    : "bg-white border-[#E7E0D6] opacity-60"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                  <span>Paso {idx + 1}</span>
                  <span>{phase.timeWindow}</span>
                </div>
                <div className="font-serif font-bold text-xs text-[#1C1917] mt-1">
                  {phase.title}
                </div>
              </button>
            ))}
          </div>

          {/* Pliego de Detalles de la Fase Activa */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Medidas Concretas */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="font-editorial text-xl font-normal text-[#1C1917]">
                Medidas Vinculantes de esta Fase:
              </h4>
              <ul className="space-y-3">
                {currentPhase.actions.map((act, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FDFBF7] border border-[#E7E0D6] text-xs text-[#44403C]"
                  >
                    <Check className="w-4 h-4 text-[#2E5A44] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-[#78716C]">
                  Estado: <strong className="text-[#2E5A44]">{currentPhase.statusLabel}</strong>
                </span>

                {activePhaseIndex < scenario.phases.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNextPhase}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#292524] text-white text-xs font-serif font-bold hover:bg-black transition-all cursor-pointer shadow-sm"
                  >
                    <span>Avanzar a la Siguiente Fase</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="rubber-stamp rubber-stamp-forest text-xs">
                    PROTOCOLO CULMINADO CON ÉXITO
                  </span>
                )}
              </div>
            </div>

            {/* Cuaderno de Bitácora / Notas de Campo */}
            <div className="lg:col-span-5 bg-[#292524] text-[#F5EFEB] rounded-xl p-5 font-mono text-xs shadow-inner border border-[#1C1917] space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-700 text-[11px] text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    Cuaderno de Bitácora en Vivo
                  </span>
                  <span>Hora Local</span>
                </div>

                <div className="space-y-2 mt-3">
                  {currentPhase.fieldNotes.map((note, i) => (
                    <div key={i} className="text-[11px] text-stone-300 border-l-2 border-[#C85A32] pl-2.5 py-0.5">
                      {note}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-700 text-[10px] text-stone-400 flex items-center justify-between">
                <span>Transparencia Radical</span>
                <span className="text-emerald-400">Auditable públicamente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
