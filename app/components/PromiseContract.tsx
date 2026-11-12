"use client";

import React, { useState } from "react";
import {
  Feather,
  FileCheck,
  Shield,
  Heart,
  Coins,
  Check,
  X,
  Sparkles,
} from "lucide-react";

interface Pillar {
  id: string;
  number: string;
  title: string;
  promise: string;
  icon: React.ElementType;
  stampClass: string;
  sealLabel: string;
  manuscriptDetails: string;
}

const PILLARS: Pillar[] = [
  {
    id: "autonomia",
    number: "CLÁUSULA I",
    title: "Soberanía de tu Tiempo",
    promise:
      "Tus decisiones son tuyas. La aplicación jamás colocará trampas de atención ni complicará tu salida con laberintos diseñados para retenerte a la fuerza.",
    icon: Shield,
    stampClass: "rubber-stamp-forest",
    sealLabel: "AUTONOMÍA BLINDADA",
    manuscriptDetails:
      "Cero casillas preseleccionadas. Cancelación en exactamente 1 clic con la misma facilidad que el alta. Telemetría desactivada por defecto.",
  },
  {
    id: "dinero",
    number: "CLÁUSULA II",
    title: "Honradez Financiera",
    promise:
      "La palabra vale más que cualquier truco de facturación. No existen cargos sorpresa, cobros retroactivos ni renovaciones silenciosas a traición.",
    icon: Coins,
    stampClass: "rubber-stamp-amber",
    sealLabel: "TARIFA INMUTABLE",
    manuscriptDetails:
      "Preaviso vinculante de 60 días naturales ante cualquier modificación de precio. Congelación garantizada de tarifa para los miembros activos.",
  },
  {
    id: "salud-mental",
    number: "CLÁUSULA III",
    title: "Calma y Silencio Mental",
    promise:
      "Diseñamos software que apaga el ruido en vez de multiplicarlo. Cero rachas artificiales para provocar ansiedad, cero notificaciones de falso pánico.",
    icon: Heart,
    stampClass: "rubber-stamp-terracotta",
    sealLabel: "PAZ DIGITAL",
    manuscriptDetails:
      "Diseño bajo el estándar 'Quiet by Default'. Sin contadores en rojo de urgencia artificial ni scroll infinito.",
  },
];

export default function PromiseContract() {
  const [signedPillars, setSignedPillars] = useState<Record<string, boolean>>({
    autonomia: true,
    dinero: true,
    "salud-mental": false,
  });
  const [signatureName, setSignatureName] = useState<string>("Pedro Picapiedra");
  const [showSignedModal, setShowSignedModal] = useState<boolean>(false);

  const toggleSign = (id: string) => {
    setSignedPillars((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allSigned = Object.values(signedPillars).every(Boolean);

  return (
    <section id="promesa" className="py-24 border-b border-[#E7E0D6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera del Capítulo */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="rubber-stamp rubber-stamp-terracotta">
            CAPÍTULO III • La Promesa
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
            El Pacto con el Usuario
          </h2>
          <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
            Un pacto formal firmado a puño y letra entre quienes forjan el software
            y las personas que depositan su confianza en él.
          </p>
        </div>

        {/* Pergamino Central del Contrato */}
        <div className="paper-sheet-cream p-8 sm:p-12 rounded-2xl border-2 border-[#D6CBC0] relative shadow-lg">
          {/* Sellos de Cera / Decorativos */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b-2 border-dashed border-[#D6CBC0]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/40 flex items-center justify-center text-[#C85A32]">
                <Feather className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-base text-[#1C1917] block">
                  Contrato de Garantía Humana
                </span>
                <span className="font-mono text-xs text-[#78716C]">
                  Protocolo de Taller • Válido a perpetuidad
                </span>
              </div>
            </div>

            <span className="hidden sm:inline-block rubber-stamp rubber-stamp-forest">
              DOCUMENTO VINCULANTE
            </span>
          </div>

          {/* Tres Pilares Táctiles */}
          <div className="space-y-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSigned = signedPillars[pillar.id];

              return (
                <div
                  key={pillar.id}
                  className={`paper-sheet p-6 rounded-xl border transition-all ${
                    isSigned ? "border-[#D6CBC0] bg-white" : "border-[#E7E0D6] bg-[#FDFBF7]/60 opacity-80"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-md bg-[#F5EFEB] border border-[#D6CBC0] flex items-center justify-center text-[#C85A32] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[#78716C] uppercase">
                            {pillar.number}
                          </span>
                          <span className={`rubber-stamp ${pillar.stampClass} text-[9px]`}>
                            {pillar.sealLabel}
                          </span>
                        </div>
                        <h4 className="font-editorial text-xl font-normal text-[#1C1917]">
                          {pillar.title}
                        </h4>
                        <p className="text-sm text-[#57534E] leading-relaxed">
                          {pillar.promise}
                        </p>
                        <div className="text-xs text-[#78716C] font-mono pt-2 border-t border-[#E7E0D6] mt-2">
                          ✦ {pillar.manuscriptDetails}
                        </div>
                      </div>
                    </div>

                    {/* Botón de Sello Individual */}
                    <button
                      type="button"
                      onClick={() => toggleSign(pillar.id)}
                      className={`px-3 py-1.5 rounded-md font-serif text-xs font-bold border transition-all cursor-pointer shrink-0 self-start sm:self-center ${
                        isSigned
                          ? "bg-[#2E5A44] border-[#2E5A44] text-white shadow-sm"
                          : "bg-white border-[#D6CBC0] text-[#78716C] hover:border-[#C85A32]"
                      }`}
                    >
                      {isSigned ? "✓ Sellado" : "Pendiente de Sello"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Área de Firma Manuscrita */}
          <div className="mt-10 pt-8 border-t-2 border-dashed border-[#D6CBC0] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="w-full sm:w-auto">
              <label
                htmlFor="signature-input"
                className="font-mono text-xs text-[#78716C] uppercase block mb-1.5"
              >
                Firma de Conformidad del Usuario:
              </label>
              <input
                id="signature-input"
                type="text"
                value={signatureName}
                onChange={(e) => setSignatureName(e.target.value)}
                placeholder="Escribe tu nombre..."
                className="font-serif italic text-lg px-4 py-2 bg-white border border-[#D6CBC0] rounded-lg text-[#1C1917] focus:outline-none focus:border-[#C85A32] shadow-sm w-full sm:w-72"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => setShowSignedModal(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#292524] text-white font-serif font-bold text-sm hover:bg-black transition-all shadow-md active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <Feather className="w-4 h-4 text-[#F5EFEB]" />
                <span>Firmar y Descargar Pliego</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Pliego Sellado */}
      {showSignedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="paper-sheet p-8 rounded-2xl max-w-lg w-full border-2 border-[#C85A32] relative shadow-2xl space-y-4">
            <div className="text-center space-y-2">
              <span className="rubber-stamp rubber-stamp-terracotta text-sm">
                DOCUMENTO RUBRICADO
              </span>
              <h3 className="font-editorial text-2xl font-normal text-[#1C1917]">
                Pacto Formal Registrado
              </h3>
              <p className="text-sm text-[#57534E]">
                El pliego queda rubricado a nombre de <strong className="text-[#1C1917]">{signatureName || "Firmante Anónimo"}</strong>.
                Todos los compromisos son vinculantes y están garantizados bajo los estatutos del Código LSC.
              </p>
            </div>

            <div className="p-4 bg-[#F5EFEB] rounded-lg border border-[#D6CBC0] font-mono text-xs text-[#78716C] space-y-1">
              <div>✦ Sello: LSC-SEAL-{Date.now().toString().slice(-6)}</div>
              <div>✦ Estado: Activo e Inmutable</div>
              <div>✦ Jurisdicción: Ética Humana de Código Abierto</div>
            </div>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setShowSignedModal(false)}
                className="px-6 py-2.5 rounded-lg bg-[#292524] text-white font-serif font-bold text-xs hover:bg-black cursor-pointer"
              >
                Cerrar y Conservar Copia
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
