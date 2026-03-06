import { useState } from 'react';
import { Input } from '../ui/input';
import { Palette, Type, Bold, AlignLeft } from 'lucide-react';
import type { FieldStyle } from '../../../lib/storage';

interface CompactFieldEditorProps {
  value: string;
  style: FieldStyle;
  onValueChange: (value: string) => void;
  onStyleChange: (style: FieldStyle) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}

export function CompactFieldEditor({
  value,
  style,
  onValueChange,
  onStyleChange,
  placeholder,
  icon,
}: CompactFieldEditorProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateStyle = (field: keyof FieldStyle, val: string) => {
    onStyleChange({ ...style, [field]: val });
  };

  return (
    <div className="space-y-1.5">
      {/* Linha principal: Input + Controles INLINE */}
      <div className="flex items-center gap-1.5">
        {/* Ícone opcional */}
        {icon && (
          <div className="flex-shrink-0 w-7 h-7 bg-cyan-500/10 rounded border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
            {icon}
          </div>
        )}

        {/* Input de texto */}
        <Input
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-slate-900 border-slate-700 text-white text-xs h-7 px-2"
          // NÃO aplicar fontSize/fontWeight aqui - apenas no preview!
          // Mantém fonte pequena e legível no admin
        />

        {/* Cor */}
        <input
          type="color"
          value={style.color || '#ffffff'}
          onChange={(e) => updateStyle('color', e.target.value)}
          className="w-7 h-7 rounded border border-slate-700 cursor-pointer bg-slate-900"
          title="Cor"
        />

        {/* Tamanho */}
        <Input
          value={style.fontSize}
          onChange={(e) => updateStyle('fontSize', e.target.value)}
          className="w-14 bg-slate-900 border-slate-700 text-white text-[10px] h-7 px-1.5 text-center"
          placeholder="16px"
          title="Tamanho"
        />

        {/* Peso */}
        <select
          value={style.fontWeight}
          onChange={(e) => updateStyle('fontWeight', e.target.value)}
          className="w-16 h-7 px-1 bg-slate-900 border border-slate-700 text-white rounded-md text-[10px]"
          title="Peso"
        >
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>

        {/* Botão avançado */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`flex-shrink-0 w-7 h-7 rounded flex items-center justify-center transition ${
            showAdvanced
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
              : 'bg-slate-800 text-slate-500 border border-slate-700 hover:text-cyan-400'
          }`}
          title="Mais opções"
        >
          <Palette className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Painel avançado (collapsible) */}
      {showAdvanced && (
        <div className="bg-slate-900/50 border border-cyan-500/10 rounded p-2.5 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {/* Fonte */}
            <div>
              <label className="text-[9px] text-slate-500 mb-1 block uppercase tracking-wider">
                Fonte
              </label>
              <select
                value={style.fontFamily}
                onChange={(e) => updateStyle('fontFamily', e.target.value)}
                className="w-full px-2 py-1 bg-slate-800 border border-slate-700 text-white rounded text-[10px]"
              >
                <option value="Inter, system-ui, sans-serif">Inter</option>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Georgia, serif">Georgia</option>
                <option value="Courier New, monospace">Courier</option>
                <option value="Times New Roman, serif">Times</option>
                <option value="Verdana, sans-serif">Verdana</option>
              </select>
            </div>

            {/* Transform */}
            <div>
              <label className="text-[9px] text-slate-500 mb-1 block uppercase tracking-wider">
                Transform
              </label>
              <select
                value={style.textTransform || 'none'}
                onChange={(e) => updateStyle('textTransform', e.target.value as any)}
                className="w-full px-2 py-1 bg-slate-800 border border-slate-700 text-white rounded text-[10px]"
              >
                <option value="none">Normal</option>
                <option value="uppercase">MAIÚSC</option>
                <option value="lowercase">minúsc</option>
                <option value="capitalize">Capital</option>
              </select>
            </div>

            {/* Line Height */}
            {style.lineHeight !== undefined && (
              <div>
                <label className="text-[9px] text-slate-500 mb-1 block uppercase tracking-wider">
                  Line Height
                </label>
                <Input
                  value={style.lineHeight}
                  onChange={(e) => updateStyle('lineHeight', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white text-[10px] h-7"
                  placeholder="1.5"
                />
              </div>
            )}

            {/* Letter Spacing */}
            {style.letterSpacing !== undefined && (
              <div>
                <label className="text-[9px] text-slate-500 mb-1 block uppercase tracking-wider">
                  Spacing
                </label>
                <Input
                  value={style.letterSpacing}
                  onChange={(e) => updateStyle('letterSpacing', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white text-[10px] h-7"
                  placeholder="0.05em"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}