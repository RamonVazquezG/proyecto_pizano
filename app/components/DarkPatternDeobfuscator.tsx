"use client";

import React, { useState } from "react";
import {
  Check,
  RotateCcw,
  ToggleLeft,
  ToggleRight,
  Smile,
  Frown,
  Phone,
  FolderOpen,
  FileText,
  Trash2,
  ShieldAlert,
  Tag,
  Receipt,
  GripVertical,
} from "lucide-react";

interface EmojiPair {
  id: string;
  word: string;
  emoji: string;
}

const CAPTCHA_PAIRS: EmojiPair[] = [
  { id: "candado", word: "Candado", emoji: "🔒" },
  { id: "dinero", word: "Dinero", emoji: "💸" },
  { id: "reloj", word: "Reloj", emoji: "⏳" },
];

const SHUFFLED_EMOJIS: EmojiPair[] = [
  { id: "dinero", word: "Dinero", emoji: "💸" },
  { id: "reloj", word: "Reloj", emoji: "⏳" },
  { id: "candado", word: "Candado", emoji: "🔒" },
];

export default function DarkPatternDeobfuscator() {
  const [honestMode, setHonestMode] = useState<boolean>(false);
  const [cancelledSuccess, setCancelledSuccess] = useState<boolean>(false);
  const [trapStep, setTrapStep] = useState<number>(0);

  // Paso 2 (trapStep === 1): Teléfono y código
  const [phoneOpened, setPhoneOpened] = useState<boolean>(false);
  const [generatedCode, setGeneratedCode] = useState<string>("48291037");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  // Paso 4 (trapStep === 3): Minijuego de relacionar palabras con emojis
  const [draggedWordId, setDraggedWordId] = useState<string | null>(null);
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const generateNewPhoneCode = () => {
    const random8 = Math.floor(10000000 + Math.random() * 90000000).toString();
    setGeneratedCode(random8);
    setPhoneOpened(true);
    setPhoneError(null);
  };

  const handleVerifyPhoneCode = () => {
    if (phoneInput.trim() === generatedCode) {
      setPhoneError(null);
      setTrapStep(2);
    } else {
      setPhoneError(
        "Código incorrecto. Debes transcribir exactamente los 8 dígitos proyectados en el teléfono."
      );
    }
  };

  const assignWordToEmoji = (emojiTargetId: string, wordId: string) => {
    setCaptchaError(null);
    setMatches((prev) => {
      const updated = { ...prev };
      // Si la palabra ya estaba en otro emoji, limpiarla
      Object.keys(updated).forEach((key) => {
        if (updated[key] === wordId) {
          delete updated[key];
        }
      });
      updated[emojiTargetId] = wordId;
      return updated;
    });
    setSelectedWordId(null);
    setDraggedWordId(null);
  };

  const isCaptchaCompleteAndCorrect = CAPTCHA_PAIRS.every(
    (pair) => matches[pair.id] === pair.id
  );

  const handleVerifyCaptcha = () => {
    if (isCaptchaCompleteAndCorrect) {
      setCaptchaError(null);
      setTrapStep(4);
    } else {
      setCaptchaError(
        "Relación incorrecta o incompleta. Arrastra o toca cada palabra hacia su emoji correspondiente."
      );
    }
  };

  const handleHonestCancel = () => {
    setCancelledSuccess(true);
    setTrapStep(0);
  };

  const resetDemo = () => {
    setCancelledSuccess(false);
    setTrapStep(0);
    setPhoneOpened(false);
    setPhoneInput("");
    setPhoneError(null);
    setDraggedWordId(null);
    setSelectedWordId(null);
    setMatches({});
    setCaptchaError(null);
  };

  return (
    <div className="space-y-6">
      {/* Cabecera del Instrumento */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="rubber-stamp rubber-stamp-crimson mb-2">
            INSTRUMENTO DE LA REGLA 03 • LÁPIZ ROJO DE CORRECCIÓN
          </span>
          <h4 className="font-editorial text-xl font-normal text-[#1C1917]">
            Manipulación Culpígena vs. Trato Justo
          </h4>
          <p className="text-xs text-[#78716C] mt-1 max-w-2xl">
            Compara cómo una interfaz deshonesta chantajea emocionalmente y pone obstáculos al
            usuario para evitar que cancele, frente a la honestidad de una puerta abierta en un
            solo clic.
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
              <span>Modo Honesto LSC: INACTIVO</span>
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
              Suscripción Cancelada
            </h5>
            <p className="text-sm text-[#57534E] max-w-md mx-auto">
              {honestMode ? (
                <>
                  Sin penalizaciones y sin letras pequeñas. <br />
                  Tus datos te acompañan y puedes volver cuando lo desees.
                </>
              ) : (
                <>
                  Lograste superar los 6 niveles del laberinto de retención y se te ha cobrado una
                  penalización abusiva de $80 USD por ejercer tu derecho a cancelar.
                </>
              )}
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
              /* MODO DESHONESTO / LABERINTO DE 6 PASOS */
              <div className="space-y-4">
                {/* PASO 1 (trapStep === 0): Chantaje emocional inicial */}
                {trapStep === 0 && (
                  <>
                    <div className="p-4 bg-[#FFF5F5] border border-[#991B1B]/30 rounded-lg">
                      <p className="font-editorial text-sm text-[#7F1D1D] italic leading-relaxed">
                        &ldquo;Si cancelas ahora, perderás todos tus descuentos acumulados,
                        borraremos tus proyectos y decepcionarás a nuestro equipo que tanto se
                        esfuerza...&rdquo;
                      </p>
                    </div>

                    <div className="flex flex-col gap-2.5 pt-2">
                      <button
                        type="button"
                        onClick={resetDemo}
                        className="w-full py-3 rounded-lg bg-[#C85A32] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B34B26] cursor-pointer shadow-md"
                      >
                        ¡QUIERO QUEDARME Y SALVAR MIS DESCUENTOS!
                      </button>

                      <button
                        type="button"
                        onClick={() => setTrapStep(1)}
                        className="text-[11px] text-[#A8A29E] underline hover:text-[#991B1B] pt-2 text-center cursor-pointer"
                      >
                        No me importa perder todo y prefiero cancelar de todos modos
                      </button>
                    </div>
                  </>
                )}

                {/* PASO 2 (trapStep === 1): Llamar en horario laboral y telefonito */}
                {trapStep === 1 && (
                  <div className="space-y-4">
                    <div className="p-3.5 bg-[#FEF3C7] border border-[#F59E0B] rounded-lg text-xs text-[#92400E]">
                      ⚠️ <strong>Confirmación Telefónica Obligatoria:</strong> Por favor llama por
                      teléfono en horario comercial a nuestras oficinas para obtener un código de 8
                      dígitos de confirmación.
                    </div>

                    {/* Pequeño telefonito proyectando el número */}
                    {phoneOpened && (
                      <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#D6CBC0] space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-16 rounded-lg bg-[#1C1917] border-2 border-[#57534E] flex flex-col items-center justify-between p-1.5 text-white shrink-0 shadow-inner">
                            <div className="w-4 h-0.5 rounded bg-[#78716C]" />
                            <Phone className="w-5 h-5 text-emerald-400 animate-bounce" />
                            <div className="w-2 h-2 rounded-full bg-[#78716C]" />
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">
                              CONEXIÓN TELEFÓNICA AUTOMÁTICA • DICTADO DE VOZ:
                            </span>
                            <div className="inline-block px-3 py-1 rounded bg-[#1C1917] text-emerald-400 font-mono text-base font-bold tracking-[0.25em] select-none">
                              {generatedCode}
                            </div>
                            <p className="text-[11px] text-[#57534E]">
                              Transcribe el número proyectado en la pantalla del teléfono para
                              validar tu baja:
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 pt-1">
                          <input
                            type="text"
                            maxLength={8}
                            value={phoneInput}
                            onChange={(e) => setPhoneInput(e.target.value)}
                            placeholder="Ingresa el código de 8 dígitos..."
                            className="flex-1 px-3 py-2 rounded-md bg-white border border-[#D6CBC0] font-mono text-xs text-[#1C1917] focus:outline-none focus:border-[#991B1B]"
                          />
                          <button
                            type="button"
                            onClick={handleVerifyPhoneCode}
                            className="px-4 py-2 rounded-md bg-[#E7E0D6] hover:bg-[#D6CBC0] text-[#44403C] font-mono text-xs cursor-pointer"
                          >
                            Verificar código y pasar al siguiente paso
                          </button>
                        </div>

                        {phoneError && (
                          <p className="text-[11px] text-[#991B1B] font-mono">{phoneError}</p>
                        )}
                      </div>
                    )}

                    <div className="flex flex-col gap-2.5 pt-2">
                      {/* Botón muy visible */}
                      <button
                        type="button"
                        onClick={resetDemo}
                        className="w-full py-3.5 rounded-lg bg-[#C85A32] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B34B26] cursor-pointer shadow-md"
                      >
                        Quiero anular mi cancelación
                      </button>

                      {/* Botón poco perceptible */}
                      <button
                        type="button"
                        onClick={generateNewPhoneCode}
                        className="text-[11px] text-[#C7C0B8] hover:text-[#78716C] underline pt-1 text-center cursor-pointer"
                      >
                        Llamar a la empresa
                      </button>
                    </div>
                  </div>
                )}

                {/* PASO 3 (trapStep === 2): Árbol de Archivos y amenaza de eliminación */}
                {trapStep === 2 && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-lg bg-[#991B1B] text-white text-center shadow-sm">
                      <div className="flex items-center justify-center gap-2 font-bold text-sm sm:text-base tracking-wide uppercase">
                        <Trash2 className="w-5 h-5 animate-pulse" />
                        <span>¡TODA TU INFORMACIÓN SERÁ ELIMINADA!</span>
                      </div>
                      <p className="text-[11px] text-red-100 mt-0.5">
                        Los siguientes archivos propietarios serán purgados irreversiblemente de la
                        nube:
                      </p>
                    </div>

                    {/* Árbol de Archivos */}
                    <div className="p-4 rounded-lg bg-[#1C1917] text-[#E7E0D6] font-mono text-xs space-y-1.5 border border-[#44403C]">
                      <div className="flex items-center gap-2 text-amber-400 font-bold">
                        <FolderOpen className="w-4 h-4" />
                        <span>/mis_documentos_personales_y_trabajo/</span>
                      </div>
                      <div className="pl-5 space-y-1 text-[11px]">
                        <div className="flex items-center justify-between py-0.5 border-b border-white/10">
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-blue-400" />
                            ├─ Tesis_Final_Revisada_v8.docx
                          </span>
                          <span className="text-red-400">[SE BORRARÁ]</span>
                        </div>
                        <div className="flex items-center justify-between py-0.5 border-b border-white/10">
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-red-400" />
                            ├─ Declaracion_Impuestos_y_Contratos.pdf
                          </span>
                          <span className="text-red-400">[SE BORRARÁ]</span>
                        </div>
                        <div className="flex items-center justify-between py-0.5 border-b border-white/10">
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-purple-400" />
                            ├─ Rediseño_Identidad_Cliente_Master.psd
                          </span>
                          <span className="text-red-400">[SE BORRARÁ]</span>
                        </div>
                        <div className="flex items-center justify-between py-0.5">
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-emerald-400" />
                            └─ Presupuesto_Ahorros_Familiar_2026.xlsx
                          </span>
                          <span className="text-red-400">[SE BORRARÁ]</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 pt-2">
                      {/* Botón color naranja llamativo */}
                      <button
                        type="button"
                        onClick={resetDemo}
                        className="w-full py-3.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
                      >
                        Mantener suscripción activa
                      </button>

                      {/* Botón casi sin color */}
                      <button
                        type="button"
                        onClick={() => setTrapStep(3)}
                        className="w-full py-1.5 rounded bg-transparent text-[#C7C0B8] hover:text-[#A8A29E] text-[11px] text-center cursor-pointer"
                      >
                        Continuar de todos modos
                      </button>
                    </div>
                  </div>
                )}

                {/* PASO 4 (trapStep === 3): Minijuego verificación "Humano" relacionar palabras y emojis */}
                {trapStep === 3 && (
                  <div className="space-y-4">
                    <div className="p-3.5 bg-[#F5EFEB] border border-[#D6CBC0] rounded-lg">
                      <div className="flex items-center gap-2 font-serif font-bold text-xs text-[#1C1917] mb-1">
                        <ShieldAlert className="w-4 h-4 text-[#991B1B]" />
                        <span>Verificación de Seguridad: Confirma que eres un Humano</span>
                      </div>
                      <p className="text-xs text-[#57534E]">
                        Para evitar cancelaciones automatizadas,{" "}
                        <strong>arrastra cada palabra hacia su emoji correspondiente</strong> (o
                        toca una palabra y luego su emoji) para relacionarlos:
                      </p>
                    </div>

                    {/* Banco de 3 palabras arrastrables */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-[#78716C] block">
                        1. Palabras disponibles (arrástralas o selecciónalas):
                      </span>
                      <div className="grid grid-cols-3 gap-2.5">
                        {CAPTCHA_PAIRS.map((item) => {
                          const isAlreadyMatched = Object.values(matches).includes(item.id);
                          const isSelected = selectedWordId === item.id;
                          return (
                            <div
                              key={item.id}
                              draggable
                              onDragStart={() => {
                                setDraggedWordId(item.id);
                                setSelectedWordId(item.id);
                              }}
                              onClick={() =>
                                setSelectedWordId(isSelected ? null : item.id)
                              }
                              className={`p-2.5 rounded-lg border font-mono text-xs font-bold flex items-center justify-center gap-1.5 select-none cursor-grab active:cursor-grabbing transition-all ${
                                isSelected
                                  ? "bg-[#1C1917] text-white border-[#1C1917]"
                                  : isAlreadyMatched
                                  ? "bg-[#E7E0D6]/60 text-[#78716C] border-[#D6CBC0] opacity-60"
                                  : "bg-white text-[#1C1917] border-[#D6CBC0] hover:border-[#78716C] shadow-xs"
                              }`}
                            >
                              <GripVertical className="w-3.5 h-3.5 opacity-50" />
                              <span>{item.word}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Casillas de los 3 Emojis */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-[#78716C] block">
                        2. Suelta la palabra sobre el emoji que le corresponda:
                      </span>
                      <div className="grid grid-cols-3 gap-2.5">
                        {SHUFFLED_EMOJIS.map((target) => {
                          const matchedWordId = matches[target.id];
                          const matchedWordObj = CAPTCHA_PAIRS.find(
                            (p) => p.id === matchedWordId
                          );
                          const isCorrect = matchedWordId === target.id;

                          return (
                            <div
                              key={target.id}
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={(e) => {
                                e.preventDefault();
                                const wordToAssign = draggedWordId || selectedWordId;
                                if (wordToAssign) {
                                  assignWordToEmoji(target.id, wordToAssign);
                                }
                              }}
                              onClick={() => {
                                if (selectedWordId) {
                                  assignWordToEmoji(target.id, selectedWordId);
                                }
                              }}
                              className={`p-3 rounded-lg border-2 border-dashed flex flex-col items-center justify-center gap-1.5 min-h-[86px] transition-all cursor-pointer ${
                                matchedWordObj
                                  ? isCorrect
                                    ? "bg-[#2E5A44]/10 border-[#2E5A44]"
                                    : "bg-[#991B1B]/10 border-[#991B1B]"
                                  : "bg-[#FAF7F2] border-[#D6CBC0] hover:border-[#78716C]"
                              }`}
                            >
                              <span className="text-2xl select-none">{target.emoji}</span>
                              {matchedWordObj ? (
                                <span
                                  className={`px-2 py-0.5 rounded font-mono text-[11px] font-bold ${
                                    isCorrect
                                      ? "bg-[#2E5A44] text-white"
                                      : "bg-[#991B1B] text-white"
                                  }`}
                                >
                                  {matchedWordObj.word}
                                </span>
                              ) : (
                                <span className="text-[10px] font-mono text-[#A8A29E]">
                                  Soltar aquí
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {captchaError && (
                      <p className="text-[11px] text-[#991B1B] font-mono">{captchaError}</p>
                    )}

                    <div className="flex flex-col gap-2.5 pt-2">
                      <button
                        type="button"
                        onClick={resetDemo}
                        className="w-full py-3 rounded-lg bg-[#C85A32] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B34B26] cursor-pointer shadow-md"
                      >
                        Abandonar verificación y mantener mi cuenta
                      </button>

                      <button
                        type="button"
                        onClick={handleVerifyCaptcha}
                        className="text-[11px] text-[#B8B0A6] hover:text-[#78716C] underline pt-1 text-center cursor-pointer"
                      >
                        Confirmar relaciones y continuar con la baja
                      </button>
                    </div>
                  </div>
                )}

                {/* PASO 5 (trapStep === 4): Oferta de retención del 30% */}
                {trapStep === 4 && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#FEF3C7] border border-[#F59E0B] space-y-2">
                      <div className="flex items-center gap-2 text-[#92400E] font-serif font-bold text-sm">
                        <Tag className="w-4 h-4" />
                        <span>¡Oferta Exclusiva de Último Minuto!</span>
                      </div>
                      <p className="text-xs text-[#78350F] leading-relaxed">
                        No queremos que te vayas. Te otorgamos inmediatamente una{" "}
                        <strong>Reducción del 30% en tu suscripción mensual</strong> durante los
                        próximos 12 meses si decides quedarte hoy.
                      </p>
                      <div className="p-2.5 rounded bg-white/80 border border-[#F59E0B]/40 font-mono text-[11px] text-[#92400E] flex items-center justify-between">
                        <span>Beneficio desbloqueado:</span>
                        <span className="font-bold">-30% DTO. MENSUAL + BONO VIP</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 pt-2">
                      {/* Botón buen contraste */}
                      <button
                        type="button"
                        onClick={resetDemo}
                        className="w-full py-3.5 rounded-lg bg-[#2E5A44] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
                      >
                        Aceptar oferta
                      </button>

                      {/* Botón poco contraste */}
                      <button
                        type="button"
                        onClick={() => setTrapStep(5)}
                        className="w-full py-1.5 text-[11px] text-[#C7C0B8] hover:text-[#A8A29E] text-center cursor-pointer"
                      >
                        Rechazar y continuar
                      </button>
                    </div>
                  </div>
                )}

                {/* PASO 6 (trapStep === 5): Barrera de pago por cancelación del 80% */}
                {trapStep === 5 && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#991B1B]/40 space-y-3">
                      <div className="flex items-center gap-2 text-[#991B1B] font-serif font-bold text-sm">
                        <Receipt className="w-4 h-4" />
                        <span>Liquidación y Factura por Cancelación Anticipada</span>
                      </div>
                      <p className="text-xs text-[#7F1D1D] leading-relaxed">
                        De acuerdo con la cláusula 14.9 de nuestro contrato anual, para procesar la
                        baja definitiva debes abonar una{" "}
                        <strong>
                          factura por cancelación equivalente al 80% del costo de tu suscripción
                          anual
                        </strong>
                        .
                      </p>

                      <div className="p-3 rounded-lg bg-white border border-[#E7E0D6] font-mono text-xs space-y-1.5">
                        <div className="flex justify-between text-[#57534E]">
                          <span>Costo base de suscripción anual:</span>
                          <span>$100.00 USD</span>
                        </div>
                        <div className="flex justify-between text-[#991B1B] font-bold pt-1.5 border-t border-[#E7E0D6]">
                          <span>Cargo obligatorio para cancelar (80%):</span>
                          <span>$80.00 USD</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 pt-2">
                      {/* Botón de alto contraste */}
                      <button
                        type="button"
                        onClick={resetDemo}
                        className="w-full py-3.5 rounded-lg bg-[#C85A32] hover:bg-[#B34B26] text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
                      >
                        Conservar mi suscripción y ahorrarme los $80 USD
                      </button>

                      {/* Botón de bajo contraste */}
                      <button
                        type="button"
                        onClick={() => setCancelledSuccess(true)}
                        className="w-full py-1.5 text-[11px] text-[#C7C0B8] hover:text-[#A8A29E] text-center cursor-pointer"
                      >
                        Pagar factura de $80 USD y cancelar definitivamente
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
