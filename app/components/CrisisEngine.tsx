"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Flame,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Lock,
} from "lucide-react";

interface CrisisPhase {
  timeWindow: string;
  title: string;
  actions: string[];
  terminalLogs: string[];
  metricStatus: string;
}

interface SimulationScenario {
  id: "sim-a" | "sim-b";
  code: string;
  title: string;
  subtitle: string;
  badgeColor: string;
  icon: React.ElementType;
  phases: CrisisPhase[];
}

const SCENARIOS: Record<"sim-a" | "sim-b", SimulationScenario> = {
  "sim-a": {
    id: "sim-a",
    code: "SIMULACIÓN A",
    title: "Fuga de Datos / Vulnerabilidad Crítica",
    subtitle:
      "Protocolo de respuesta inmediata ante compromiso de credenciales o exfiltración no autorizada.",
    badgeColor: "text-red-300 bg-red-500/15 border-red-500/30",
    icon: ShieldAlert,
    phases: [
      {
        timeWindow: "[T+0h a T+2h]",
        title: "FASE 1: AISLAMIENTO Y PARADA DE EMERGENCIA",
        actions: [
          "Revocación inmediata de tokens de sesión y claves API.",
          "Desconexión de microservicios comprometidos.",
          "Despliegue de página de contingencia estática.",
        ],
        terminalLogs: [
          "[ALERTA T+00:02] Anomalía detectada en endpoint /api/v2/auth-vault",
          "[ACTION T+00:08] Revocando 100% de JWT y API Keys activas (Kill-Switch ejecutado)",
          "[ACTION T+00:19] Microservicio 'vault-worker' aislado de la red privada",
          "[STATUS T+00:45] Página de contingencia estática servida vía CDN borde",
        ],
        metricStatus: "Contención perimetral: 100% Aislado",
      },
      {
        timeWindow: "[T+2h a T+6h]",
        title: "FASE 2: TRANSPARENCIA RADICAL PÚBLICA",
        actions: [
          "Publicación de post-mortem en vivo sin eufemismos legales.",
          "Notificación personalizada por correo a usuarios afectados.",
        ],
        terminalLogs: [
          "[AUDIT T+02:15] Alcance forense determinado: 1,420 registros de metadatos expuestos",
          "[PUBLIC T+03:00] Post-mortem en vivo publicado en status.lsc-manifesto.org (Cero eufemismos)",
          "[NOTIFY T+04:12] Despacho de notificaciones directas por correo con detalle exacto por usuario",
        ],
        metricStatus: "Transparencia: Notificación 100% enviada",
      },
      {
        timeWindow: "[T+6h a T+24h]",
        title: "FASE 3: DESPLIEGUE DEL PARCHE Y AUDITORÍA",
        actions: [
          "Despliegue de hotfix con hash de commit público para verificación.",
          "Auditoría externa de seguridad con publicación del dictamen.",
        ],
        terminalLogs: [
          "[PATCH T+07:40] Hotfix verificado desplegado — Commit público: 9f4a2c8e1b",
          "[AUDIT T+14:20] Firma de ciberseguridad externa independiente inicia pentesting completo",
          "[REPORT T+22:00] Dictamen técnico íntegro publicado sin censura en el repositorio",
        ],
        metricStatus: "Vulnerabilidad corregida y auditada",
      },
      {
        timeWindow: "[T+24h+]",
        title: "FASE 4: REMEDIACIÓN Y COMPENSACIÓN",
        actions: [
          "Apertura de canal de indemnización y soporte prioritario.",
        ],
        terminalLogs: [
          "[REMEDY T+24:30] Fondo de garantía LSC activado para usuarios afectados",
          "[SUPPORT T+26:00] Canal de soporte humano prioritario 24/7 habilitado sin bots",
          "[CLOSED T+36:00] Incidente cerrado con invariantes de regresión añadidos al CI/CD",
        ],
        metricStatus: "Remediación ética completada",
      },
    ],
  },
  "sim-b": {
    id: "sim-b",
    code: "SIMULACIÓN B",
    title: "Daño Ambiental / Bucle Descontrolado de Inferencia",
    subtitle:
      "Protocolo de corte térmico/energético ante recursión algorítmica o gasto desbocado de GPU.",
    badgeColor: "text-amber-300 bg-amber-500/15 border-amber-500/30",
    icon: Flame,
    phases: [
      {
        timeWindow: "[T+0m a T+15m]",
        title: "FASE 1: THROTTLING Y CORTE AUTOMÁTICO",
        actions: [
          "Monitoreo de consumo de GPU: parada por rebase de umbral térmico/KWh.",
          "Fallback inmediato a modelos locales compactos o heurísticas clásicas.",
        ],
        terminalLogs: [
          "[TELEMETRY T+00:01m] Alerta crítica: Cluster GPU-04 supera umbral de 450 KWh/h",
          "[BREAKER T+00:03m] Disyuntor energético LSC activado: Inferencia masiva abortada",
          "[FALLBACK T+00:05m] Tráfico redirigido a heurística determinista local (0.002 Wh/req)",
        ],
        metricStatus: "Corte automático en < 5 minutos",
      },
      {
        timeWindow: "[T+15m a T+2h]",
        title: "FASE 2: AUDITORÍA DE IMPACTO ENERGÉTICO",
        actions: [
          "Cálculo del exceso de KWh consumidos y emisiones de CO2 generadas.",
          "Identificación del bucle o recursión algorítmica fallida en producción.",
        ],
        terminalLogs: [
          "[ROOT-CAUSE T+00:28m] Detectada recursión infinita en agente autónomo de indexación",
          "[ENERGY-CALC T+01:10m] Exceso energético cuantificado: 184.6 KWh (78.4 kg CO₂ eq)",
          "[REPORT T+01:45m] Telemetría ambiental firmada y publicada en el panel público",
        ],
        metricStatus: "Huella cuantificada: 184.6 KWh",
      },
      {
        timeWindow: "[T+2h+]",
        title: "FASE 3: COMPENSACIÓN Y CORRECCIÓN ESTRUCTURAL",
        actions: [
          "Adquisición y comprobación pública de créditos de remoción de carbono.",
          "Rediseño de la cuota de inferencia con limitadores de tasa permanentes.",
        ],
        terminalLogs: [
          "[CARBON-OFFSET T+02:15h] Remoción verificada al 200% del exceso (Certificado #LSC-CO2-994)",
          "[ARCH-FIX T+03:30h] Límite duro de presupuesto energético por proceso compilado en kernel",
          "[VERIFIED T+04:00h] Sistema operando en modo de eficiencia estricta",
        ],
        metricStatus: "200% Carbono compensado + Rate Limit Fijo",
      },
    ],
  },
};

export default function CrisisEngine() {
  const [activeSim, setActiveSim] = useState<"sim-a" | "sim-b">("sim-a");
  const [activePhaseIdx, setActivePhaseIdx] = useState<number>(0);

  const scenario = SCENARIOS[activeSim];
  const currentPhase = scenario.phases[activePhaseIdx];

  const handleSelectSim = (sim: "sim-a" | "sim-b") => {
    setActiveSim(sim);
    setActivePhaseIdx(0);
  };

  const handleNextStep = () => {
    if (activePhaseIdx < scenario.phases.length - 1) {
      setActivePhaseIdx(activePhaseIdx + 1);
    } else {
      setActivePhaseIdx(0);
    }
  };

  // Accumulate logs up to current phase
  const visibleLogs = scenario.phases
    .slice(0, activePhaseIdx + 1)
    .flatMap((phase) => phase.terminalLogs);

  return (
    <section id="crisis" className="py-24 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-3">
              <span>04 // PLAN DE ACCIÓN DE CRISIS</span>
              <span className="text-white/20">—</span>
              <span>MONITOR DE AMENAZAS Y PROTOCOLO OPERATIVO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-4">
              Simulador de incidentes críticos en tiempo real
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              La ética de un equipo se demuestra cuando ocurre un fallo grave. Selecciona uno
              de los dos escenarios de crisis y detona cada fase del protocolo operativo.
            </p>
          </div>

          {/* Scenario Switcher */}
          <div className="flex flex-wrap items-center gap-3 self-start">
            <button
              type="button"
              onClick={() => handleSelectSim("sim-a")}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold border flex items-center gap-2 editorial-transition cursor-pointer ${
                activeSim === "sim-a"
                  ? "bg-red-500/20 border-red-500/50 text-red-200 shadow-lg shadow-red-500/10"
                  : "glass-panel text-[#94A3B8] hover:text-white"
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>Simulación A: Fuga de Datos</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectSim("sim-b")}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold border flex items-center gap-2 editorial-transition cursor-pointer ${
                activeSim === "sim-b"
                  ? "bg-amber-500/20 border-amber-500/50 text-amber-200 shadow-lg shadow-amber-500/10"
                  : "glass-panel text-[#94A3B8] hover:text-white"
              }`}
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Simulación B: Bucle de Inferencia</span>
            </button>
          </div>
        </div>

        {/* Main Crisis Engine Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Flowchart Phases */}
          <div className="lg:col-span-7 space-y-4">
            <div className="glass-panel p-5 rounded-2xl border border-white/[0.1] flex items-center justify-between gap-4">
              <div>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold border mb-1 ${scenario.badgeColor}`}
                >
                  {`${scenario.code} // PROTOCOLO ACTIVO`}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC]">
                  {scenario.title}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-0.5">{scenario.subtitle}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-4 py-2.5 rounded-xl bg-[#F8FAFC] text-[#090A0F] font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-indigo-100 editorial-transition cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>
                    {activePhaseIdx < scenario.phases.length - 1
                      ? "Avanzar Fase"
                      : "Reiniciar Flujo"}
                  </span>
                </button>
              </div>
            </div>

            {/* Sequential Flowchart Nodes */}
            <div className="space-y-3 relative">
              {scenario.phases.map((phase, idx) => {
                const isCompleted = idx < activePhaseIdx;
                const isCurrent = idx === activePhaseIdx;

                return (
                  <div
                    key={phase.title}
                    onClick={() => setActivePhaseIdx(idx)}
                    className={`p-5 rounded-2xl border editorial-transition cursor-pointer ${
                      isCurrent
                        ? "glass-panel border-cyan-400/60 bg-cyan-950/[0.15] shadow-lg shadow-cyan-500/10"
                        : isCompleted
                        ? "glass-panel border-emerald-500/30 bg-emerald-950/[0.08]"
                        : "glass-panel border-white/[0.06] opacity-60 hover:opacity-90"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`px-2.5 py-0.5 rounded font-mono text-xs font-bold ${
                            isCurrent
                              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                              : isCompleted
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                              : "bg-white/[0.05] text-[#94A3B8]"
                          }`}
                        >
                          {phase.timeWindow}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-[#F8FAFC]">
                          {phase.title}
                        </h4>
                      </div>

                      {isCompleted ? (
                        <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Ejecutado
                        </span>
                      ) : isCurrent ? (
                        <span className="font-mono text-[11px] text-cyan-300 flex items-center gap-1 animate-pulse">
                          <ChevronRight className="w-4 h-4" /> En ejecución
                        </span>
                      ) : (
                        <span className="font-mono text-[11px] text-slate-500">
                          En espera
                        </span>
                      )}
                    </div>

                    <ul className="space-y-1.5 pl-1">
                      {phase.actions.map((action, actionIdx) => (
                        <li
                          key={actionIdx}
                          className="text-xs sm:text-sm text-[#94A3B8] flex items-start gap-2"
                        >
                          <span className="text-cyan-400 font-mono mt-0.5">├─</span>
                          <span className={isCurrent ? "text-[#F8FAFC]" : ""}>
                            {action}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Simulated Live Terminal & Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/[0.12] bg-[#050609] overflow-hidden shadow-2xl">
            <div>
              {/* Terminal Top Bar */}
              <div className="px-4 py-3 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs text-[#F8FAFC] font-semibold">
                    lsc-crisis-daemon // tty1
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePhaseIdx(0)}
                  className="font-mono text-[11px] text-[#94A3B8] hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Live Telemetry Metrics */}
              <div className="grid grid-cols-2 gap-2 p-4 border-b border-white/[0.07] bg-white/[0.01] font-mono text-xs">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] text-[#94A3B8] uppercase block">
                    FASE ACTIVA
                  </span>
                  <span className="text-cyan-300 font-bold">
                    {currentPhase.timeWindow} ({activePhaseIdx + 1}/
                    {scenario.phases.length})
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] text-[#94A3B8] uppercase block">
                    ESTADO DEL SISTEMA
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {currentPhase.metricStatus}
                  </span>
                </div>
              </div>

              {/* Console Log Stream */}
              <div className="p-5 font-mono text-xs space-y-2.5 min-h-[280px]">
                <div className="text-slate-500">
                  # Monitor de Amenazas LSC inicializado. Selecciona o avanza fases para
                  inspeccionar la trazabilidad operativa:
                </div>

                {visibleLogs.map((log, index) => {
                  const isAlert = log.includes("[ALERTA") || log.includes("[TELEMETRY");
                  const isVerified =
                    log.includes("[CLOSED") ||
                    log.includes("[VERIFIED") ||
                    log.includes("[CARBON-OFFSET");

                  return (
                    <div
                      key={index}
                      className={`p-2 rounded border-l-2 leading-relaxed ${
                        isAlert
                          ? "bg-red-500/10 border-red-400 text-red-200"
                          : isVerified
                          ? "bg-emerald-500/10 border-emerald-400 text-emerald-200"
                          : "bg-white/[0.02] border-cyan-400/60 text-slate-200"
                      }`}
                    >
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Guarantee Bar */}
            <div className="p-4 bg-white/[0.03] border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                {activeSim === "sim-a" ? (
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                )}
                Bitácora inmutable de incidentes
              </span>
              <span className="text-emerald-400">Zero-Coverup Policy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
