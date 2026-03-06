import { useState, useRef, useEffect } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { Pipette, MoveHorizontal, MoveVertical, Circle } from 'lucide-react';

interface ColorPickerProps {
  value?: string;
  onChange: (color: string) => void;
  allowGradient?: boolean;
  showTransparent?: boolean;
  opacity?: number;
  onOpacityChange?: (opacity: number) => void;
}

export function ColorPicker({ 
  value = '', 
  onChange, 
  allowGradient = false, 
  showTransparent = false,
  opacity = 1,
  onOpacityChange,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'solid' | 'gradient'>('solid');
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isTransparent, setIsTransparent] = useState(value === 'transparent');
  
  // 🔥 ESTADO LOCAL DE OPACIDADE - permite movimento independente!
  const [localOpacity, setLocalOpacity] = useState(opacity);
  
  const safeValue = value || '';
  const [solidColor, setSolidColor] = useState(
    safeValue.includes('gradient') || safeValue === 'transparent' ? '#06b6d4' : (safeValue || '#06b6d4')
  );
  
  const [gradientColor1, setGradientColor1] = useState('#06b6d4');
  const [gradientColor2, setGradientColor2] = useState('#3b82f6');
  const [gradientType, setGradientType] = useState<'horizontal' | 'vertical' | 'radial'>('horizontal');
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // 🔧 HELPER: Converte rgba para hex
  const rgbaToHex = (rgba: string): string => {
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (!match) return '#06b6d4';
    
    const r = parseInt(match[1]).toString(16).padStart(2, '0');
    const g = parseInt(match[2]).toString(16).padStart(2, '0');
    const b = parseInt(match[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  };

  // 🔧 HELPER: Extrai opacidade de rgba
  const extractOpacity = (rgba: string): number => {
    const match = rgba.match(/rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*([\d.]+))?\)/);
    return match && match[1] ? parseFloat(match[1]) : 1;
  };

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const applyOpacityToGradient = (gradient: string, alpha: number) => {
    return gradient.replace(/#([0-9a-fA-F]{6})/g, (match) => {
      return hexToRgba(match, alpha);
    });
  };

  useEffect(() => {
    const safeVal = value || '';
    setIsTransparent(safeVal === 'transparent');
    
    // 🔥 Se recebeu rgba(), extrai o hex e sincroniza!
    if (safeVal.startsWith('rgba(') || safeVal.startsWith('rgb(')) {
      const extractedHex = rgbaToHex(safeVal);
      const extractedOpacity = extractOpacity(safeVal);
      
      if (extractedHex !== solidColor) {
        setSolidColor(extractedHex);
      }
      if (Math.abs(extractedOpacity - localOpacity) > 0.01) {
        setLocalOpacity(extractedOpacity);
      }
    } 
    // Se recebeu hex direto, atualiza normalmente
    else if (safeVal && !safeVal.includes('gradient') && safeVal !== 'transparent') {
      if (safeVal !== solidColor) {
        setSolidColor(safeVal);
      }
    }
  }, [value]);

  // 🔥 SINCRONIZA localOpacity com a prop opacity
  useEffect(() => {
    setLocalOpacity(opacity);
  }, [opacity]);

  const generateGradient = (type: typeof gradientType, c1: string, c2: string) => {
    if (type === 'radial') {
      return `radial-gradient(circle, ${c1} 0%, ${c2} 100%)`;
    } else if (type === 'horizontal') {
      return `linear-gradient(90deg, ${c1} 0%, ${c2} 100%)`;
    } else {
      return `linear-gradient(180deg, ${c1} 0%, ${c2} 100%)`;
    }
  };

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const updatePosition = () => {
        if (!buttonRef.current) return;
        
        const rect = buttonRef.current.getBoundingClientRect();
        let left = rect.right + 8;
        let top = rect.top;
        
        const popoverWidth = 460;
        if (left + popoverWidth > window.innerWidth) {
          left = rect.left - popoverWidth - 8;
        }
        
        const popoverHeight = 400;
        if (top + popoverHeight > window.innerHeight) {
          top = Math.max(10, window.innerHeight - popoverHeight - 10);
        }
        
        setPosition({ top, left });
      };
      
      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current && 
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleOpacityChange = (newOpacity: number) => {
    if (!onOpacityChange) return;
    
    onOpacityChange(newOpacity);
    
    if (mode === 'solid') {
      if (newOpacity < 1) {
        onChange(hexToRgba(solidColor, newOpacity));
      } else {
        onChange(solidColor);
      }
    } else {
      const gradient = generateGradient(gradientType, gradientColor1, gradientColor2);
      if (newOpacity < 1) {
        onChange(applyOpacityToGradient(gradient, newOpacity));
      } else {
        onChange(gradient);
      }
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-7 h-7 rounded border border-slate-700 cursor-pointer bg-slate-900 hover:border-cyan-500/50 transition-colors flex items-center justify-center group relative overflow-hidden"
        title="Seletor de Cor"
        type="button"
      >
        <div className="absolute inset-0.5 rounded" style={{ background: value }} />
        <Pipette className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity relative z-10 drop-shadow-lg" />
      </button>

      {isOpen && (
        <div 
          ref={popoverRef}
          className="fixed z-[9999] bg-slate-950 border border-cyan-500/30 rounded-lg shadow-2xl p-3 space-y-3 min-w-[460px]"
          style={{ 
            top: `${position.top}px`, 
            left: `${position.left}px`,
          }}
        >
          {allowGradient && (
            <div className="flex gap-1 p-1 bg-slate-900 rounded border border-cyan-500/20">
              <button
                onClick={() => {
                  setMode('solid');
                  onChange(solidColor);
                }}
                className={`flex-1 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition ${
                  mode === 'solid'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
                type="button"
              >
                🎨 Cor Sólida
              </button>
              <button
                onClick={() => {
                  const gradient = generateGradient(gradientType, gradientColor1, gradientColor2);
                  setMode('gradient');
                  onChange(gradient);
                }}
                className={`flex-1 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition ${
                  mode === 'gradient'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
                type="button"
              >
                🌈 Gradiente
              </button>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {/* COLUNA 1: Picker ou Preview Gradiente */}
            <div className="space-y-2 isolate">
              {mode === 'solid' ? (
                <>
                  <HexColorPicker 
                    color={solidColor} 
                    onChange={(c) => {
                      setSolidColor(c);
                      if (localOpacity < 1) {
                        onChange(hexToRgba(c, localOpacity));
                      } else {
                        onChange(c);
                      }
                    }} 
                    className="!w-full" 
                  />

                  <div className="bg-slate-900/50 border border-cyan-500/20 rounded p-2 space-y-1.5">
                    {/* 🎨 PREVIEW da cor com opacidade atual */}
                    <div 
                      className="w-full h-8 rounded border border-cyan-500/30 mb-2"
                      style={{ 
                        background: localOpacity < 1 ? hexToRgba(solidColor, localOpacity) : solidColor 
                      }}
                    />
                    
                    <label className="text-[9px] font-bold text-cyan-400 uppercase tracking-wider block">
                      HEX
                    </label>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 text-xs font-mono">#</span>
                      <HexColorInput
                        color={solidColor}
                        onChange={(c) => {
                          setSolidColor(c);
                          if (!isTransparent) {
                            if (localOpacity < 1) {
                              onChange(hexToRgba(c, localOpacity));
                            } else {
                              onChange(c);
                            }
                          }
                        }}
                        className="flex-1 bg-slate-950 border border-slate-700 text-white text-xs font-mono rounded px-2 py-1 uppercase focus:border-cyan-500/50 focus:outline-none"
                        prefixed={false}
                        placeholder="06b6d4"
                        disabled={isTransparent}
                      />
                    </div>
                    
                    {showTransparent && (
                      <div className="flex items-center gap-2 pt-1 border-t border-slate-700/50">
                        <input 
                          type="checkbox"
                          id="transparent-check"
                          checked={isTransparent}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setIsTransparent(checked);
                            if (checked) {
                              onChange('transparent');
                            } else {
                              onChange(solidColor);
                            }
                          }}
                          className="w-3.5 h-3.5 rounded border-slate-600 bg-slate-950 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <label 
                          htmlFor="transparent-check"
                          className="text-[9px] text-slate-400 uppercase tracking-wide cursor-pointer select-none hover:text-cyan-400 transition"
                        >
                          Transparente
                        </label>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  {/* 🎨 PREVIEW do gradiente COM OPACIDADE */}
                  <div 
                    className="w-full h-16 rounded border border-cyan-500/30"
                    style={{ 
                      background: localOpacity < 1 
                        ? applyOpacityToGradient(generateGradient(gradientType, gradientColor1, gradientColor2), localOpacity)
                        : generateGradient(gradientType, gradientColor1, gradientColor2) 
                    }}
                  />
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[8px] text-slate-400 uppercase tracking-wide block mb-1">
                        Cor 1
                      </label>
                      <div className="flex items-center gap-1">
                        <div 
                          className="w-6 h-6 rounded border border-slate-700"
                          style={{ backgroundColor: gradientColor1 }}
                        />
                        <div className="flex-1 flex items-center gap-0.5">
                          <span className="text-slate-500 text-[10px] font-mono">#</span>
                          <HexColorInput
                            color={gradientColor1}
                            onChange={(c) => {
                              setGradientColor1(c);
                              onChange(generateGradient(gradientType, c, gradientColor2));
                            }}
                            className="flex-1 bg-slate-950 border border-slate-700 text-white text-[10px] font-mono rounded px-1 py-0.5 uppercase focus:border-cyan-500/50 focus:outline-none"
                            prefixed={false}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-[8px] text-slate-400 uppercase tracking-wide block mb-1">
                        Cor 2
                      </label>
                      <div className="flex items-center gap-1">
                        <div 
                          className="w-6 h-6 rounded border border-slate-700"
                          style={{ backgroundColor: gradientColor2 }}
                        />
                        <div className="flex-1 flex items-center gap-0.5">
                          <span className="text-slate-500 text-[10px] font-mono">#</span>
                          <HexColorInput
                            color={gradientColor2}
                            onChange={(c) => {
                              setGradientColor2(c);
                              onChange(generateGradient(gradientType, gradientColor1, c));
                            }}
                            className="flex-1 bg-slate-950 border border-slate-700 text-white text-[10px] font-mono rounded px-1 py-0.5 uppercase focus:border-cyan-500/50 focus:outline-none"
                            prefixed={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[8px] text-slate-400 uppercase tracking-wide block">
                      Direção
                    </label>
                    <div className="grid grid-cols-3 gap-1">
                      <button
                        onClick={() => {
                          setGradientType('horizontal');
                          onChange(generateGradient('horizontal', gradientColor1, gradientColor2));
                        }}
                        className={`py-2.5 rounded border flex items-center justify-center transition ${
                          gradientType === 'horizontal' 
                            ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400' 
                            : 'border-slate-700 text-slate-500 hover:border-cyan-500/30'
                        }`}
                        type="button"
                      >
                        <MoveHorizontal size={16} />
                      </button>
                      <button
                        onClick={() => {
                          setGradientType('vertical');
                          onChange(generateGradient('vertical', gradientColor1, gradientColor2));
                        }}
                        className={`py-2.5 rounded border flex items-center justify-center transition ${
                          gradientType === 'vertical' 
                            ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400' 
                            : 'border-slate-700 text-slate-500 hover:border-cyan-500/30'
                        }`}
                        type="button"
                      >
                        <MoveVertical size={16} />
                      </button>
                      <button
                        onClick={() => {
                          setGradientType('radial');
                          onChange(generateGradient('radial', gradientColor1, gradientColor2));
                        }}
                        className={`py-2.5 rounded border flex items-center justify-center transition ${
                          gradientType === 'radial' 
                            ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400' 
                            : 'border-slate-700 text-slate-500 hover:border-cyan-500/30'
                        }`}
                        type="button"
                      >
                        <Circle size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* COLUNA 2: Presets + Slider de Opacidade */}
            <div className="space-y-3 relative z-10">
              {mode === 'solid' && (
                <div>
                  <label className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1.5">
                    Presets Tech
                  </label>
                  <div className="grid grid-cols-6 gap-1">
                    {[
                      '#06b6d4', '#0891b2', '#0e7490',
                      '#3b82f6', '#2563eb', '#1d4ed8',
                      '#ffffff', '#f1f5f9', '#64748b',
                      '#334155', '#1e293b', '#000000',
                    ].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => {
                          setSolidColor(preset);
                          if (localOpacity < 1) {
                            onChange(hexToRgba(preset, localOpacity));
                          } else {
                            onChange(preset);
                          }
                        }}
                        className="w-6 h-6 rounded border border-slate-700 hover:border-cyan-500/50 transition-colors"
                        style={{ backgroundColor: preset }}
                        title={preset}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              )}

              {mode === 'gradient' && (
                <div>
                  <label className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1.5">
                    Presets Gradiente
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { c1: '#06b6d4', c2: '#3b82f6', type: 'horizontal' as const },
                      { c1: '#3b82f6', c2: '#8b5cf6', type: 'horizontal' as const },
                      { c1: '#06b6d4', c2: '#10b981', type: 'horizontal' as const },
                      { c1: '#f59e0b', c2: '#ef4444', type: 'horizontal' as const },
                      { c1: '#06b6d4', c2: '#3b82f6', type: 'radial' as const },
                      { c1: '#0f172a', c2: '#1e293b', type: 'vertical' as const },
                    ].map((preset, i) => {
                      // 🎨 PRESETS sempre mostram SEM opacidade, aplicam só ao clicar
                      const gradient = generateGradient(preset.type, preset.c1, preset.c2);
                      
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            setGradientColor1(preset.c1);
                            setGradientColor2(preset.c2);
                            setGradientType(preset.type);
                            const newGradient = generateGradient(preset.type, preset.c1, preset.c2);
                            if (localOpacity < 1) {
                              onChange(applyOpacityToGradient(newGradient, localOpacity));
                            } else {
                              onChange(newGradient);
                            }
                          }}
                          className="h-8 rounded border border-slate-700 hover:border-cyan-500/50 transition-colors"
                          style={{ background: gradient }}
                          type="button"
                        />
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* SLIDER DE OPACIDADE */}
              {onOpacityChange && (
                <div className="bg-slate-900/50 border border-cyan-500/20 rounded p-2 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[9px] font-bold text-cyan-400 uppercase tracking-wider">
                      Opacidade
                    </label>
                    <span className="text-[10px] font-mono text-slate-400">
                      {Math.round(localOpacity * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={Math.round(localOpacity * 100)}
                    onChange={(e) => {
                      const newOpacity = Number(e.target.value) / 100;
                      setLocalOpacity(newOpacity);
                      handleOpacityChange(newOpacity);
                    }}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-cyan-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}