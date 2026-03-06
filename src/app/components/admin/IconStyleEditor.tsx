import { FontStyleEditor } from './FontStyleEditor';
import { ColorStyleEditor } from './ColorStyleEditor';
import { ContainerStyleEditor } from './ContainerStyleEditor';
import { EffectsStyleEditor } from './EffectsStyleEditor';
import type { FieldStyle, ContainerStyle, EffectsStyle } from '../../../lib/storage';

interface IconStyleEditorProps {
  iconStyle: FieldStyle;
  containerStyle: ContainerStyle;
  effectsStyle: EffectsStyle;
  onIconStyleChange: (style: Partial<FieldStyle>) => void;
  onContainerChange: (style: Partial<ContainerStyle>) => void;
  onEffectsChange: (style: Partial<EffectsStyle>) => void;
}

export function IconStyleEditor({
  iconStyle,
  containerStyle,
  effectsStyle,
  onIconStyleChange,
  onContainerChange,
  onEffectsChange,
}: IconStyleEditorProps) {
  return (
    <div className="space-y-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
        Estilos do Ícone
      </div>
      
      {/* TIPOGRAFIA - Roxo */}
      <div className="relative">
        <FontStyleEditor
          style={iconStyle}
          onChange={onIconStyleChange}
        />
      </div>

      {/* CORES - Verde */}
      <div className="relative">
        <ColorStyleEditor
          style={iconStyle}
          onChange={onIconStyleChange}
        />
      </div>

      {/* CONTAINER - Azul */}
      <div className="relative">
        <ContainerStyleEditor
          value={containerStyle}
          onChange={onContainerChange}
        />
      </div>

      {/* EFEITOS - Amarelo */}
      <div className="relative">
        <EffectsStyleEditor
          value={effectsStyle}
          onChange={onEffectsChange}
        />
      </div>
    </div>
  );
}