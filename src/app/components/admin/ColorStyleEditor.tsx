import { useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { ColorPicker } from './ColorPicker';
import type { FieldStyle, ContentColors, ElementColors } from '../../../lib/storage';

interface ColorStyleEditorProps {
  value?: FieldStyle;
  onChange: (style: FieldStyle) => void;
  // 🎨 CORES - Props opcionais para controles de cores separados
  contentColors?: ContentColors;
  elementColors?: ElementColors;
  onContentColorsChange?: (colors: ContentColors) => void;
  onElementColorsChange?: (colors: ElementColors) => void;
}

export function ColorStyleEditor({ 
  value = {}, 
  onChange,
  contentColors,
  elementColors,
  onContentColorsChange,
  onElementColorsChange,
}: ColorStyleEditorProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const showContentColors = !!(contentColors && onContentColorsChange);
  const showElementColors = !!(elementColors && onElementColorsChange);

  // Helper: Obter cor baseado no modo
  const getColorValue = (desktopColor: string | undefined, mobileColor: string | undefined) => {
    if (deviceMode === 'mobile') {
      return mobileColor || desktopColor || '#ffffff';
    }
    return desktopColor || '#ffffff';
  };

  // Helper: Atualizar cor de conteúdo
  const updateContentColor = (
    desktopKey: keyof ContentColors,
    mobileKey: keyof ContentColors,
    color: string
  ) => {
    if (!contentColors || !onContentColorsChange) return;
    
    if (deviceMode === 'mobile') {
      onContentColorsChange({ ...contentColors, [mobileKey]: color });
    } else {
      onContentColorsChange({ ...contentColors, [desktopKey]: color });
    }
  };

  // 🆕 Helper: Atualizar opacidade de conteúdo
  const updateContentOpacity = (
    opacityKey: keyof ContentColors,
    opacity: number
  ) => {
    if (!contentColors || !onContentColorsChange) return;
    onContentColorsChange({ ...contentColors, [opacityKey]: opacity });
  };

  // Helper: Atualizar cor de elemento
  const updateElementColor = (
    desktopKey: keyof ElementColors,
    mobileKey: keyof ElementColors,
    color: string
  ) => {
    if (!elementColors || !onElementColorsChange) return;
    
    if (deviceMode === 'mobile') {
      onElementColorsChange({ ...elementColors, [mobileKey]: color });
    } else {
      onElementColorsChange({ ...elementColors, [desktopKey]: color });
    }
  };

  // 🆕 Helper: Atualizar opacidade de elemento
  const updateElementOpacity = (
    opacityKey: keyof ElementColors,
    opacity: number
  ) => {
    if (!elementColors || !onElementColorsChange) return;
    onElementColorsChange({ ...elementColors, [opacityKey]: opacity });
  };

  return (
    <div className="absolute top-full right-0 mt-1 z-[100] w-[380px] bg-slate-900 border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/20">
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
          🎨 Cores & Estilos
        </span>
      </div>

      {/* Conteúdo com SCROLL */}
      <div className="max-h-[400px] overflow-y-auto p-3 space-y-4">
        
        {/* Toggle Desktop/Mobile */}
        <div className="flex gap-1 p-0.5 bg-slate-950 border border-slate-700 rounded">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${
              deviceMode === 'desktop'
                ? 'bg-cyan-500 text-slate-950'
                : 'text-slate-400 hover:text-cyan-400'
            }`}
          >
            <Monitor size={12} />
            Desktop
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${
              deviceMode === 'mobile'
                ? 'bg-cyan-500 text-slate-950'
                : 'text-slate-400 hover:text-cyan-400'
            }`}
          >
            <Smartphone size={12} />
            Mobile
          </button>
        </div>

        {/* ═══════════════════ CONTEÚDO ═══════════════════ */}
        {showContentColors && contentColors && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 pb-1.5 border-b border-green-500/30">
              <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">
                📝 CONTEÚDO
              </span>
            </div>

            {/* Layout GRID - 4 colunas */}
            <div className="grid grid-cols-4 gap-2">
              
              {/* Text Color */}
              <div>
                <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                  Texto
                </label>
                <ColorPicker
                  value={getColorValue(contentColors.textColor, contentColors.textColorMobile)}
                  onChange={(color) => updateContentColor('textColor', 'textColorMobile', color)}
                  allowGradient={true}
                />
              </div>

              {/* Text Hover Color */}
              {contentColors.textColorHover !== undefined && (
                <div>
                  <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                    Texto Hover
                  </label>
                  <ColorPicker
                    value={getColorValue(contentColors.textColorHover, contentColors.textColorHoverMobile)}
                    onChange={(color) => updateContentColor('textColorHover', 'textColorHoverMobile', color)}
                    allowGradient={true}
                  />
                </div>
              )}

              {/* Icon Color */}
              {contentColors.iconColor !== undefined && (
                <div>
                  <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                    Ícone
                  </label>
                  <ColorPicker
                    value={getColorValue(contentColors.iconColor, contentColors.iconColorMobile)}
                    onChange={(color) => updateContentColor('iconColor', 'iconColorMobile', color)}
                    allowGradient={true}
                  />
                </div>
              )}

              {/* Icon Background Color */}
              {contentColors.iconBackgroundColor !== undefined && (
                <div>
                  <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                    Fundo Ícone
                  </label>
                  <ColorPicker
                    value={getColorValue(contentColors.iconBackgroundColor, contentColors.iconBackgroundColorMobile)}
                    onChange={(color) => updateContentColor('iconBackgroundColor', 'iconBackgroundColorMobile', color)}
                    allowGradient={true}
                  />
                </div>
              )}

              {/* Bullet Color */}
              {contentColors.bulletColor !== undefined && (
                <div>
                  <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                    Bullets
                  </label>
                  <ColorPicker
                    value={getColorValue(contentColors.bulletColor, contentColors.bulletColorMobile)}
                    onChange={(color) => updateContentColor('bulletColor', 'bulletColorMobile', color)}
                    allowGradient={true}
                  />
                </div>
              )}

              {/* Accent Color */}
              {contentColors.accentColor !== undefined && (
                <div>
                  <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                    Destaque
                  </label>
                  <ColorPicker
                    value={getColorValue(contentColors.accentColor, contentColors.accentColorMobile)}
                    onChange={(color) => updateContentColor('accentColor', 'accentColorMobile', color)}
                    allowGradient={true}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══════════════════ ELEMENTOS ═══════════════════ */}
        {showElementColors && elementColors && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 pb-1.5 border-b border-green-500/30">
              <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">
                🎨 ELEMENTOS
              </span>
            </div>

            {/* Layout GRID - 4 colunas */}
            <div className="grid grid-cols-4 gap-2">
              
              {/* Background Color */}
              <div>
                <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                  Fundo
                </label>
                <ColorPicker
                  value={getColorValue(elementColors.backgroundColor, elementColors.backgroundColorMobile)}
                  onChange={(color) => updateElementColor('backgroundColor', 'backgroundColorMobile', color)}
                  allowGradient={true}
                  showTransparent={true}
                  opacity={elementColors.backgroundColorOpacity ?? 1}
                  onOpacityChange={(opacity) => updateElementOpacity('backgroundColorOpacity', opacity)}
                />
              </div>

              {/* Hover Background */}
              {elementColors.hoverBgColor !== undefined && (
                <div>
                  <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                    Hover Fundo
                  </label>
                  <ColorPicker
                    value={getColorValue(elementColors.hoverBgColor, elementColors.hoverBgColorMobile)}
                    onChange={(color) => updateElementColor('hoverBgColor', 'hoverBgColorMobile', color)}
                    allowGradient={true}
                    showTransparent={true}
                  />
                </div>
              )}

              {/* Border Color */}
              <div>
                <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                  Borda
                </label>
                <ColorPicker
                  value={getColorValue(elementColors.borderColor, elementColors.borderColorMobile)}
                  onChange={(color) => updateElementColor('borderColor', 'borderColorMobile', color)}
                  allowGradient={true}
                  showTransparent={true}
                />
              </div>

              {/* Hover Border */}
              {elementColors.hoverBorderColor !== undefined && (
                <div>
                  <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                    Hover Borda
                  </label>
                  <ColorPicker
                    value={getColorValue(elementColors.hoverBorderColor, elementColors.hoverBorderColorMobile)}
                    onChange={(color) => updateElementColor('hoverBorderColor', 'hoverBorderColorMobile', color)}
                    allowGradient={true}
                    showTransparent={true}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mensagem se nenhuma cor disponível */}
        {!showContentColors && !showElementColors && (
          <div className="text-center py-6 text-slate-500 text-xs">
            Nenhum controle de cor disponível para este campo
          </div>
        )}
      </div>
    </div>
  );
}