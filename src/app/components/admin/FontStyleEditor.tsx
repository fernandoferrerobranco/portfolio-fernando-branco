import { useState } from 'react';
import { Monitor, Smartphone, X, Bold, Italic, Underline, Link as LinkIcon } from 'lucide-react';
import { Input } from '../ui/input';
import type { FieldStyle } from '../../../lib/storage';

interface FontStyleEditorProps {
  style?: FieldStyle;
  onChange: (style: FieldStyle) => void;
  onClose?: () => void;
}

export function FontStyleEditor({ style = {}, onChange, onClose }: FontStyleEditorProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  // Helper: Obter valor baseado no modo
  const getValue = (desktopKey: keyof FieldStyle, mobileKey: keyof FieldStyle) => {
    if (deviceMode === 'mobile') {
      // Se mobile key existe, usar; senão fallback para desktop
      return (style[mobileKey] as string) || (style[desktopKey] as string) || '';
    }
    return (style[desktopKey] as string) || '';
  };

  // Helper: Atualizar valor baseado no modo
  const updateValue = (desktopKey: keyof FieldStyle, mobileKey: keyof FieldStyle, value: string) => {
    if (deviceMode === 'mobile') {
      onChange({ ...style, [mobileKey]: value });
    } else {
      onChange({ ...style, [desktopKey]: value });
    }
  };

  // Helper: Toggle estilos
  const toggleStyle = (styleName: 'bold' | 'italic' | 'underline') => {
    const currentStyles = style.textDecoration || '';
    
    switch (styleName) {
      case 'bold':
        const currentWeight = getValue('fontWeight', 'fontWeightMobile');
        const isBold = currentWeight === '700' || currentWeight === '800' || currentWeight === '900';
        updateValue('fontWeight', 'fontWeightMobile', isBold ? '400' : '700');
        break;
      
      case 'italic':
        const currentStyle = style.fontStyle || 'normal';
        onChange({ ...style, fontStyle: currentStyle === 'italic' ? 'normal' : 'italic' });
        break;
      
      case 'underline':
        const hasUnderline = currentStyles.includes('underline');
        onChange({ ...style, textDecoration: hasUnderline ? 'none' : 'underline' });
        break;
    }
  };

  // Verificar se estilos estão ativos
  const isBold = () => {
    const weight = getValue('fontWeight', 'fontWeightMobile');
    return weight === '700' || weight === '800' || weight === '900';
  };
  const isItalic = () => style.fontStyle === 'italic';
  const isUnderline = () => (style.textDecoration || '').includes('underline');

  return (
    <div className="absolute top-full right-0 mt-1 z-[100] w-[320px] bg-slate-900 border border-purple-500/30 rounded-lg shadow-2xl shadow-purple-500/20">
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
        <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
          🅰️ Tipografia
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-800/50 rounded transition-colors"
          >
            <X className="text-slate-400" size={14} />
          </button>
        )}
      </div>

      {/* Conteúdo com SCROLL */}
      <div className="max-h-[400px] overflow-y-auto p-3 space-y-3">
        
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

        {/* FONTE (Compartilhada - Largura Total) */}
        <div>
          <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
            Fonte
          </label>
          <select
            value={style?.fontFamily || 'Inter, system-ui, sans-serif'}
            onChange={(e) => onChange({ ...style, fontFamily: e.target.value })}
            className="w-full px-2 py-1.5 bg-slate-800 border border-slate-700 text-white rounded text-[10px]"
          >
            <option value="Inter, system-ui, sans-serif">Inter</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Courier New, monospace">Courier</option>
            <option value="Times New Roman, serif">Times</option>
            <option value="Verdana, sans-serif">Verdana</option>
          </select>
        </div>

        {/* LINHA 1: Tamanho + Espessura */}
        <div className="grid grid-cols-2 gap-2">
          {/* Tamanho */}
          <div>
            <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
              Tamanho {deviceMode === 'mobile' ? '📱' : '🖥️'}
            </label>
            <Input
              value={getValue('fontSize', 'fontSizeMobile')}
              onChange={(e) => updateValue('fontSize', 'fontSizeMobile', e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-[10px] h-8"
              placeholder="16px"
            />
          </div>

          {/* Espessura */}
          <div>
            <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
              Espessura {deviceMode === 'mobile' ? '📱' : '🖥️'}
            </label>
            <select
              value={getValue('fontWeight', 'fontWeightMobile')}
              onChange={(e) => updateValue('fontWeight', 'fontWeightMobile', e.target.value)}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-700 text-white rounded text-[10px]"
            >
              <option value="100">100 - Thin</option>
              <option value="200">200 - Extra Light</option>
              <option value="300">300 - Light</option>
              <option value="400">400 - Normal</option>
              <option value="500">500 - Medium</option>
              <option value="600">600 - Semi Bold</option>
              <option value="700">700 - Bold</option>
              <option value="800">800 - Extra Bold</option>
              <option value="900">900 - Black</option>
            </select>
          </div>
        </div>

        {/* LINHA 2: Letter Spacing + Transform */}
        <div className="grid grid-cols-2 gap-2">
          {/* Letter Spacing */}
          {style.letterSpacing !== undefined && (
            <div>
              <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
                Letter Spacing {deviceMode === 'mobile' ? '📱' : '🖥️'}
              </label>
              <Input
                value={getValue('letterSpacing', 'letterSpacingMobile')}
                onChange={(e) => updateValue('letterSpacing', 'letterSpacingMobile', e.target.value)}
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-8"
                placeholder="0.05em"
              />
            </div>
          )}

          {/* Transform */}
          <div>
            <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
              Transform
            </label>
            <select
              value={style.textTransform || 'none'}
              onChange={(e) => onChange({ ...style, textTransform: e.target.value as any })}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-700 text-white rounded text-[10px]"
            >
              <option value="none">Normal</option>
              <option value="uppercase">MAIÚSCULA</option>
              <option value="lowercase">minúscula</option>
              <option value="capitalize">Capitalizada</option>
            </select>
          </div>
        </div>

        {/* LINHA 3: Line Height (se existir) */}
        {style.lineHeight !== undefined && (
          <div>
            <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-1">
              Line Height {deviceMode === 'mobile' ? '📱' : '🖥️'}
            </label>
            <Input
              value={getValue('lineHeight', 'lineHeightMobile')}
              onChange={(e) => updateValue('lineHeight', 'lineHeightMobile', e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-[10px] h-8"
              placeholder="1.5"
            />
          </div>
        )}

        {/* ESTILOS - Bold, Italic, Underline */}
        <div>
          <label className="text-[9px] text-slate-400 uppercase tracking-wide block mb-2">
            Estilos
          </label>
          <div className="grid grid-cols-3 gap-1">
            {/* Bold */}
            <button
              onClick={() => toggleStyle('bold')}
              className={`flex items-center justify-center py-2 px-2 rounded text-[10px] transition-all ${
                isBold()
                  ? 'bg-purple-500 text-white border border-purple-400'
                  : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-purple-400 hover:border-purple-500/30'
              }`}
              title="Bold"
            >
              <Bold size={14} />
            </button>

            {/* Italic */}
            <button
              onClick={() => toggleStyle('italic')}
              className={`flex items-center justify-center py-2 px-2 rounded text-[10px] transition-all ${
                isItalic()
                  ? 'bg-purple-500 text-white border border-purple-400'
                  : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-purple-400 hover:border-purple-500/30'
              }`}
              title="Italic"
            >
              <Italic size={14} />
            </button>

            {/* Underline */}
            <button
              onClick={() => toggleStyle('underline')}
              className={`flex items-center justify-center py-2 px-2 rounded text-[10px] transition-all ${
                isUnderline()
                  ? 'bg-purple-500 text-white border border-purple-400'
                  : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-purple-400 hover:border-purple-500/30'
              }`}
              title="Underline"
            >
              <Underline size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}