import { Label } from '../ui/label';
import { Input } from '../ui/input';
import type { ContainerStyle } from '../../../lib/storage';

interface ContainerStyleEditorProps {
  value?: ContainerStyle;
  onChange: (value: ContainerStyle) => void;
}

export function ContainerStyleEditor({ value = {}, onChange }: ContainerStyleEditorProps) {
  const updateValue = (key: keyof ContainerStyle, val: any) => {
    console.log('📦 ContainerStyleEditor - updateValue:', key, val);
    onChange({ ...value, [key]: val });
  };

  return (
    <div className="absolute top-full right-0 mt-1 z-[100] w-[320px] bg-slate-900 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20">
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
          📦 Container
        </span>
      </div>

      {/* Conteúdo com SCROLL */}
      <div className="max-h-[400px] overflow-y-auto p-3 space-y-3">
        
        {/* LINHA 1: Border Width + Border Radius */}
        <div className="grid grid-cols-2 gap-2">
          {/* Border Width */}
          <div>
            <Label className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 block">
              Border Width
            </Label>
            <Input
              type="text"
              value={value.borderWidth || ''}
              onChange={(e) => updateValue('borderWidth', e.target.value)}
              placeholder="1px"
              className="bg-slate-800 border-slate-700 text-white text-xs h-8"
            />
          </div>

          {/* Border Radius */}
          <div>
            <Label className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 block">
              Border Radius
            </Label>
            <Input
              type="text"
              value={value.borderRadius || ''}
              onChange={(e) => updateValue('borderRadius', e.target.value)}
              placeholder="4px"
              className="bg-slate-800 border-slate-700 text-white text-xs h-8"
            />
          </div>
        </div>

        {/* PADDING (4 lados NA MESMA LINHA) */}
        <div>
          <Label className="text-[10px] text-cyan-400 uppercase tracking-wider mb-2 block font-bold">
            📐 Padding
          </Label>
          <div className="grid grid-cols-4 gap-1.5">
            {/* Left */}
            <div>
              <Label className="text-[8px] text-slate-400 uppercase tracking-wider mb-1 block">
                L
              </Label>
              <Input
                type="text"
                value={value.paddingLeft || ''}
                onChange={(e) => updateValue('paddingLeft', e.target.value)}
                placeholder="12px"
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-7 px-1.5"
              />
            </div>

            {/* Top */}
            <div>
              <Label className="text-[8px] text-slate-400 uppercase tracking-wider mb-1 block">
                T
              </Label>
              <Input
                type="text"
                value={value.paddingTop || ''}
                onChange={(e) => updateValue('paddingTop', e.target.value)}
                placeholder="8px"
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-7 px-1.5"
              />
            </div>

            {/* Right */}
            <div>
              <Label className="text-[8px] text-slate-400 uppercase tracking-wider mb-1 block">
                R
              </Label>
              <Input
                type="text"
                value={value.paddingRight || ''}
                onChange={(e) => updateValue('paddingRight', e.target.value)}
                placeholder="12px"
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-7 px-1.5"
              />
            </div>

            {/* Bottom */}
            <div>
              <Label className="text-[8px] text-slate-400 uppercase tracking-wider mb-1 block">
                B
              </Label>
              <Input
                type="text"
                value={value.paddingBottom || ''}
                onChange={(e) => updateValue('paddingBottom', e.target.value)}
                placeholder="8px"
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-7 px-1.5"
              />
            </div>
          </div>
        </div>

        {/* MARGIN (4 lados NA MESMA LINHA) */}
        <div>
          <Label className="text-[10px] text-cyan-400 uppercase tracking-wider mb-2 block font-bold">
            📏 Margin
          </Label>
          <div className="grid grid-cols-4 gap-1.5">
            {/* Left */}
            <div>
              <Label className="text-[8px] text-slate-400 uppercase tracking-wider mb-1 block">
                L
              </Label>
              <Input
                type="text"
                value={value.marginLeft || ''}
                onChange={(e) => updateValue('marginLeft', e.target.value)}
                placeholder="0px"
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-7 px-1.5"
              />
            </div>

            {/* Top */}
            <div>
              <Label className="text-[8px] text-slate-400 uppercase tracking-wider mb-1 block">
                T
              </Label>
              <Input
                type="text"
                value={value.marginTop || ''}
                onChange={(e) => updateValue('marginTop', e.target.value)}
                placeholder="0px"
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-7 px-1.5"
              />
            </div>

            {/* Right */}
            <div>
              <Label className="text-[8px] text-slate-400 uppercase tracking-wider mb-1 block">
                R
              </Label>
              <Input
                type="text"
                value={value.marginRight || ''}
                onChange={(e) => updateValue('marginRight', e.target.value)}
                placeholder="0px"
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-7 px-1.5"
              />
            </div>

            {/* Bottom */}
            <div>
              <Label className="text-[8px] text-slate-400 uppercase tracking-wider mb-1 block">
                B
              </Label>
              <Input
                type="text"
                value={value.marginBottom || ''}
                onChange={(e) => updateValue('marginBottom', e.target.value)}
                placeholder="0px"
                className="bg-slate-800 border-slate-700 text-white text-[10px] h-7 px-1.5"
              />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div>
          <Label className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 block">
            Preview
          </Label>
          <div
            className="text-center text-sm text-white bg-cyan-500/10 border-cyan-500/20"
            style={{
              borderWidth: value.borderWidth || '1px',
              borderStyle: 'solid',
              borderRadius: value.borderRadius || '0.125rem',
              // Padding individual com fallback para X/Y (backwards compatibility)
              paddingLeft: value.paddingLeft || value.paddingX || '12px',
              paddingTop: value.paddingTop || value.paddingY || '4px',
              paddingRight: value.paddingRight || value.paddingX || '12px',
              paddingBottom: value.paddingBottom || value.paddingY || '4px',
              // Margin
              marginLeft: value.marginLeft || '0px',
              marginTop: value.marginTop || '0px',
              marginRight: value.marginRight || '0px',
              marginBottom: value.marginBottom || '0px',
            }}
          >
            Sample
          </div>
        </div>

      </div>
    </div>
  );
}