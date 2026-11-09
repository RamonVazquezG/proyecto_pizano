"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  UserCheck,
  Wallet,
  Brain,
  FileText,
  X,
  CheckCircle2,
  Lock,
  BellOff,
  CalendarClock,
} from "lucide-react";

interface PillarContract {
  id: string;
  pilar: string;
  clausula: string;
  mecanismo: string;
  icon: React.ElementType;
  accentColor: string;
  sealCode: string;
  legalPlainText: string;
  technicalSpecs: string[];
  interactiveLabel: string;
}

const PILLARS: PillarContract[] = [
  {
    id: "autonomia",
    pilar: "Protección de la Autonomía",
    clausula:
      "Nuestras interfaces no deciden por ti ni condicionan tu criterio mediante trucos cognitivos.",
    mecanismo:
      "Arquitectura de cancelación en 1 solo clic. Consentimiento granular para cualquier telemetría con estado por defecto en Off.",
    icon: UserCheck,
    accentColor: "from-indigo-500/20 to-cyan-500/10 border-indigo-500/30",
    sealCode: "LSC-SEAL-AUTONOMY-01",
    legalPlainText:
      "Garantizamos bajo responsabilidad contractual que ningún flujo de usuario empleará asimetría visual, casillas marcadas por defecto ni laberintos de retención. Toda recolección de telemetría nace apagada (Opt-In estricto) y puede revocarse con efecto retroactivo de borrado.",
    technicalSpecs: [
      "Estado inicial de telemetría: telemetry.default = false (Hardcoded)",
      "Paridad DOM: Botones de aceptar y rechazar con idéntico tamaño y contraste WCAG AAA",
      "Endpoint de baja directa: DELETE /api/v1/subscription en 1 petición sin pasos intermedios",
    ],
    interactiveLabel: "Telemetría por defecto: OFF",
  },
  {
    id: "dinero",
    pilar: "Protección del Dinero",
    clausula:
      "Cero cargos ocultos, cero tarifas no anticipadas y predictibilidad económica total.",
    mecanismo:
      "Notificación vinculante con 90 días naturales de anticipación ante cualquier cambio de precio; garantía de congelación de tarifa para planes ya suscritos.",
    icon: Wallet,
    accentColor: "from-amber-500/20 to-emerald-500/10 border-amber-500/30",
    sealCode: "LSC-SEAL-FINANCE-02",
    legalPlainText:
      "Tu factura nunca contendrá cargos sorpresa ni renovaciones silenciosas sin aviso previo. Cualquier ajuste tarifario aplica exclusivamente a nuevos contratos tras un preaviso vinculante de 90 días naturales, manteniendo congelada la tarifa de los usuarios activos mientras conserven su plan.",
    technicalSpecs: [
      "Preaviso obligatorio: 90 días naturales antes de cualquier actualización de catálogo",
      "Cláusula Grandfathering: Congelación criptográfica de tarifa para planes vigentes",
      "Alerta proactiva de renovación: Notificación 7 días antes de cada ciclo con botón de pausa en 1 clic",
    ],
    interactiveLabel: "Preaviso vinculante: 90 Días",
  },
  {
    id: "salud-mental",
    pilar: "Protección de la Salud Mental",
    clausula:
      "Respetamos tu atención: no diseñamos bucles infinitos ni mecánicas dopaminérgicas.",
    mecanismo:
      "Filosofía Quiet by Default: sin alertas sonoras innecesarias, sin gamificación compulsiva (streaks artificiales) y sin feeds de desplazamiento infinito.",
    icon: Brain,
    accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    sealCode: "LSC-SEAL-MIND-03",
    legalPlainText:
      "Nos comprometemos a no secuestrar tu sistema dopaminérgico. Nuestros productos operan bajo el estándar Quiet by Default: cero rachas punitivas (streaks) que generen ansiedad por desconexión, cero paginación infinita y cero insignias rojas de urgencia artificial.",
    technicalSpecs: [
      "Modo Quiet by Default: Notificaciones push y sonoras deshabilitadas de fábrica",
      "Paginación finita y consciente: Prohibición de componentes de Infinite Scroll",
      "Cero FOMO sintético: Erradicación de contadores regresivos falsos y rachas punitivas",
    ],
    interactiveLabel: "Modo Quiet by Default: ACTIVO",
  },
];

export default function PromiseContract() {
  const [selectedContract, setSelectedContract] = useState<PillarContract | null>(null);
  const [signedByEvaluator, setSignedByEvaluator] = useState<boolean>(true);

  return (
    <section
      id="promesa"
      className="py-24 relative border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3">
              <span>03 // LA PROMESA AL USUARIO</span>
              <span className="text-white/20">—</span>
              <span>CONTRATO VISUAL DE GARANTÍAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-4">
              Tres garantías inviolables respaldadas por arquitectura
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              Las promesas éticas sin mecanismos técnicos son relaciones públicas vacías.
              Cada pilar de nuestro contrato une una cláusula moral con su implementación
              verificable en código.
            </p>
          </div>

          <div className="glass-panel px-4 py-3 rounded-xl border border-emerald-500/30 flex items-center gap-3 self-start">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="font-mono text-xs">
              <div className="text-[#F8FAFC] font-semibold">DIPLOMA DE GARANTÍA LSC</div>
              <div className="text-emerald-400 text-[11px]">
                Haz clic en cualquier sello para inspeccionar el texto legal
              </div>
            </div>
          </div>
        </div>

        {/* 3 Interactive Guarantee Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border bg-gradient-to-b ${item.accentColor} flex flex-col justify-between relative overflow-hidden`}
              >
                <div>
                  {/* Seal Header */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#090A0F]/80 border border-white/[0.1] text-emerald-300">
                      {item.sealCode}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#090A0F]/80 border border-white/[0.12] flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">
                    {item.pilar}
                  </h3>

                  {/* Inviolable Clause */}
                  <div className="p-4 rounded-xl bg-[#090A0F]/70 border border-white/[0.07] mb-4">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-indigo-300 mb-1">
                      CLÁUSULA INVIOLABLE
                    </div>
                    <p className="text-sm text-[#F8FAFC] font-medium leading-relaxed">
                      &ldquo;{item.clausula}&rdquo;
                    </p>
                  </div>

                  {/* Concrete Technical Mechanism */}
                  <div className="p-4 rounded-xl bg-[#090A0F]/90 border border-emerald-500/20 mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 mb-1">
                      MECANISMO CONCRETO DE CUMPLIMIENTO TÉCNICO
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {item.mecanismo}
                    </p>
                  </div>
                </div>

                {/* Footer Action: Inspect Simplified Legal Text */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.interactiveLabel}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedContract(item)}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] font-mono text-xs text-[#F8FAFC] flex items-center gap-1.5 editorial-transition cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Inspeccionar Cláusula</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Visual Contract Matrix Table (From Section 3.3 of Plan) */}
        <div className="glass-panel rounded-2xl border border-white/[0.1] overflow-hidden">
          <div className="px-6 py-4 bg-white/[0.03] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#F8FAFC] font-semibold">
                RESUMEN EJECUTIVO DEL CONTRATO DE GARANTÍAS LSC
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSignedByEvaluator(!signedByEvaluator)}
              className="font-mono text-xs px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-pointer"
            >
              {signedByEvaluator
                ? "✓ Sello Criptográfico Verificado"
                : "Verificar Sello Criptográfico"}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#090A0F]/60 font-mono text-xs uppercase text-[#94A3B8]">
                  <th className="py-3.5 px-6">Pilar de Protección</th>
                  <th className="py-3.5 px-6">Cláusula Inviolable</th>
                  <th className="py-3.5 px-6">Mecanismo Concreto de Cumplimiento Técnico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {PILLARS.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-[#F8FAFC] whitespace-nowrap">
                      {row.pilar}
                    </td>
                    <td className="py-4 px-6 text-[#94A3B8]">{row.clausula}</td>
                    <td className="py-4 px-6 font-mono text-xs text-emerald-300">
                      {row.mecanismo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Inspecting Simplified Legal Text */}
      {selectedContract && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-contract-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div className="glass-panel max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-emerald-500/40 bg-[#090A0F] shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
              <div>
                <span className="font-mono text-xs text-emerald-400 uppercase">
                  {`${selectedContract.sealCode} // TEXTO LEGAL SIMPLIFICADO (SIN LETRA PEQUEÑA)`}
                </span>
                <h3
                  id="modal-contract-title"
                  className="text-2xl font-bold text-[#F8FAFC] mt-1"
                >
                  {selectedContract.pilar}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedContract(null)}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#94A3B8] hover:text-white cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="font-mono text-xs text-indigo-300 uppercase mb-1">
                  TRADUCCIÓN HUMANA VINCULANTE
                </div>
                <p className="text-sm sm:text-base text-[#F8FAFC] leading-relaxed">
                  {selectedContract.legalPlainText}
                </p>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 uppercase mb-2.5">
                  AUDITORÍA DE INVARIANTES TÉCNICOS EN PRODUCCIÓN
                </div>
                <ul className="space-y-2">
                  {selectedContract.technicalSpecs.map((spec, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20 font-mono text-xs text-emerald-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
                <BellOff className="w-4 h-4 text-cyan-400" />
                <CalendarClock className="w-4 h-4 text-amber-400" />
                <span>Invariante verificable en repositorio abierto</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedContract(null)}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-[#090A0F] font-semibold text-xs font-mono hover:bg-emerald-400 editorial-transition cursor-pointer"
              >
                Entendido y Verificado
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
