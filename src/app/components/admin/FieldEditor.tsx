import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Type, Palette, Settings2, ChevronDown, ChevronUp } from 'lucide-react';
import type { FieldStyle } from '../../../lib/storage';

interface FieldEditorProps {
  label: string;
  value: string;
  style: FieldStyle;
  onValueChange: (value: string) => void;
  onStyleChange: (style: FieldStyle) => void;
  multiline?: boolean;
  placeholder?: string;
}

export function FieldEditor({
  label,
  value,
  style,
  onValueChange,
  onStyleChange,
  multiline = false,
  placeholder,
}: FieldEditorProps) {
  const [showStyleEditor, setShowStyleEditor] = useState(false);

  const updateStyle = (field: keyof FieldStyle, val: string) => {
    onStyleChange({ ...style, [field]: val });
  };

  const fontFamilies = [
    'Inter, system-ui, sans-serif',
    'Arial, sans-serif',
    'Georgia, serif',
    'Courier New, monospace',
    'Times New Roman, serif',
    'Verdana, sans-serif',
    'Trebuchet MS, sans-serif',
    'Comic Sans MS, cursive',
  ];

  const fontWeights = [
    { value: '100', label: 'Thin' },
    { value: '200', label: 'Extra Light' },
    { value: '300', label: 'Light' },
    { value: '400', label: 'Normal' },
    { value: '500', label: 'Medium' },
    { value: '600', label: 'Semibold' },
    { value: '700', label: 'Bold' },
    { value: '800', label: 'Extra Bold' },
    { value: '900', label: 'Black' },
  ];

  const textTransforms = [
    { value: 'none', label: 'Normal' },
    { value: 'uppercase', label: 'MAIÚSCULAS' },
    { value: 'lowercase', label: 'minúsculas' },
    { value: 'capitalize', label: 'Capitalize' },
  ];

  return (
    <Card className="bg-slate-800/50 border-cyan-500/10">
      <CardContent className="pt-6 space-y-4">
        {/* Valor do campo */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-slate-300 font-semibold">{label}</Label>
            <Button
              type="button"
              onClick={() => setShowStyleEditor(!showStyleEditor)}
              variant="ghost"
              size="sm"
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 text-xs"
            >
              <Palette className="w-3 h-3 mr-1" />
              Estilos
              {showStyleEditor ? (
                <ChevronUp className="w-3 h-3 ml-1" />
              ) : (
                <ChevronDown className="w-3 h-3 ml-1" />
              )}
            </Button>
          </div>

          {multiline ? (
            <Textarea
              value={value}
              onChange={(e) => onValueChange(e.target.value)}
              placeholder={placeholder}
              rows={3}
              className="bg-slate-900 border-slate-700 text-white"
              style={{
                fontFamily: style.fontFamily,
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                color: style.color,
                lineHeight: style.lineHeight,
                textTransform: style.textTransform,
                letterSpacing: style.letterSpacing,
              }}
            />
          ) : (
            <Input
              value={value}
              onChange={(e) => onValueChange(e.target.value)}
              placeholder={placeholder}
              className="bg-slate-900 border-slate-700 text-white"
              style={{
                fontFamily: style.fontFamily,
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                color: style.color,
                lineHeight: style.lineHeight,
                textTransform: style.textTransform,
                letterSpacing: style.letterSpacing,
              }}
            />
          )}
        </div>

        {/* Editor de estilos (collapsible) */}
        {showStyleEditor && (
          <div className="space-y-4 pt-4 border-t border-cyan-500/10">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
              <Settings2 className="w-4 h-4" />
              Configurações de Estilo
            </div>

            {/* Grid de 2 colunas */}
            <div className="grid grid-cols-2 gap-4">
              {/* Cor */}
              <div>
                <Label className="text-slate-400 text-xs mb-1">Cor</Label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={style.color || '#ffffff'}
                    onChange={(e) => updateStyle('color', e.target.value)}
                    className="w-12 h-9 rounded border border-slate-700 cursor-pointer bg-slate-900"
                  />
                  <Input
                    value={style.color}
                    onChange={(e) => updateStyle('color', e.target.value)}
                    className="flex-1 bg-slate-900 border-slate-700 text-white text-xs"
                    placeholder="#ffffff"
                  />
                </div>
              </div>

              {/* Tamanho */}
              <div>
                <Label className="text-slate-400 text-xs mb-1">Tamanho</Label>
                <Input
                  value={style.fontSize}
                  onChange={(e) => updateStyle('fontSize', e.target.value)}
                  className="bg-slate-900 border-slate-700 text-white text-xs"
                  placeholder="16px"
                />
              </div>

              {/* Peso */}
              <div>
                <Label className="text-slate-400 text-xs mb-1">Peso</Label>
                <select
                  value={style.fontWeight}
                  onChange={(e) => updateStyle('fontWeight', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 text-white rounded-md text-xs"
                >
                  {fontWeights.map((fw) => (
                    <option key={fw.value} value={fw.value}>
                      {fw.label} ({fw.value})
                    </option>
                  ))}
                </select>
              </div>

              {/* Transform */}
              <div>
                <Label className="text-slate-400 text-xs mb-1">Transform</Label>
                <select
                  value={style.textTransform || 'none'}
                  onChange={(e) =>
                    updateStyle(
                      'textTransform',
                      e.target.value as FieldStyle['textTransform']
                    )
                  }
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 text-white rounded-md text-xs"
                >
                  {textTransforms.map((tt) => (
                    <option key={tt.value} value={tt.value}>
                      {tt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Fonte (full width) */}
            <div>
              <Label className="text-slate-400 text-xs mb-1">Fonte</Label>
              <select
                value={style.fontFamily}
                onChange={(e) => updateStyle('fontFamily', e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 text-white rounded-md text-xs"
              >
                {fontFamilies.map((ff) => (
                  <option key={ff} value={ff} style={{ fontFamily: ff }}>
                    {ff.split(',')[0]}
                  </option>
                ))}
              </select>
            </div>

            {/* Line Height */}
            {style.lineHeight !== undefined && (
              <div>
                <Label className="text-slate-400 text-xs mb-1">Altura da Linha</Label>
                <Input
                  value={style.lineHeight}
                  onChange={(e) => updateStyle('lineHeight', e.target.value)}
                  className="bg-slate-900 border-slate-700 text-white text-xs"
                  placeholder="1.5"
                />
              </div>
            )}

            {/* Letter Spacing */}
            {style.letterSpacing !== undefined && (
              <div>
                <Label className="text-slate-400 text-xs mb-1">
                  Espaçamento de Letras
                </Label>
                <Input
                  value={style.letterSpacing}
                  onChange={(e) => updateStyle('letterSpacing', e.target.value)}
                  className="bg-slate-900 border-slate-700 text-white text-xs"
                  placeholder="0.05em"
                />
              </div>
            )}

            {/* Preview */}
            <div className="bg-slate-900 p-4 rounded border border-cyan-500/20">
              <p className="text-xs text-slate-500 mb-2">Preview:</p>
              <div
                style={{
                  fontFamily: style.fontFamily,
                  fontSize: style.fontSize,
                  fontWeight: style.fontWeight,
                  color: style.color,
                  lineHeight: style.lineHeight,
                  textTransform: style.textTransform,
                  letterSpacing: style.letterSpacing,
                }}
              >
                {value || 'Texto de exemplo'}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}