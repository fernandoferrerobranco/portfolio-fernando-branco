import { useState, useEffect, useRef } from 'react';
import { Type, Palette, Box, Sparkles } from 'lucide-react';
import { Input } from '../ui/input';
import { AnchorButton } from './AnchorButton';
import { FontStyleEditor } from './FontStyleEditor';
import { ColorStyleEditor } from './ColorStyleEditor';
import { ContainerStyleEditor } from './ContainerStyleEditor';
import { EffectsStyleEditor } from './EffectsStyleEditor';
import type { FieldStyle, ContentColors, ElementColors, ContainerStyle, EffectsStyle } from '../../../lib/storage';

interface TextFieldEditorProps {
  value: string;
  style: FieldStyle;
  onValueChange: (value: string) => void;
  onStyleChange: (style: FieldStyle) => void;
  placeholder?: string;
  anchorId?: string;
  onAnchor?: (targetId: string) => void;
  // 🎨 CORES - Props opcionais para controles de cores separados
  contentColors?: ContentColors;
  elementColors?: ElementColors;
  onContentColorsChange?: (colors: ContentColors) => void;
  onElementColorsChange?: (colors: ElementColors) => void;
  // 📦 CONTAINER & ✨ EFEITOS
  containerStyle?: ContainerStyle;
  effectsStyle?: EffectsStyle;
  onContainerChange?: (container: ContainerStyle) => void;
  onEffectsChange?: (effects: EffectsStyle) => void;
}

export function TextFieldEditor({
  value,
  style,
  onValueChange,
  onStyleChange,
  placeholder,
  anchorId,
  onAnchor,
  contentColors,
  elementColors,
  onContentColorsChange,
  onElementColorsChange,
  containerStyle,
  effectsStyle,
  onContainerChange,
  onEffectsChange,
}: TextFieldEditorProps) {
  const [showFontPanel, setShowFontPanel] = useState(false);
  const [showColorPanel, setShowColorPanel] = useState(false);
  const [showContainerPanel, setShowContainerPanel] = useState(false);
  const [showEffectsPanel, setShowEffectsPanel] = useState(false);

  // 📦 Refs dos painéis para fechar ao clicar fora
  const fontPanelRef = useRef<HTMLDivElement>(null);
  const colorPanelRef = useRef<HTMLDivElement>(null);
  const containerPanelRef = useRef<HTMLDivElement>(null);
  const effectsPanelRef = useRef<HTMLDivElement>(null);

  // 🎧 Fechar painéis ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // ⚠️ CRITICAL: Ignorar cliques em SelectContent (que renderiza em Portal)
      const isSelectContent = (target as Element).closest('[role="listbox"]') || 
                             (target as Element).closest('[data-slot="select-content"]');
      
      if (isSelectContent) {
        return;
      }

      if (fontPanelRef.current && !fontPanelRef.current.contains(target)) {
        setShowFontPanel(false);
      }
      if (colorPanelRef.current && !colorPanelRef.current.contains(target)) {
        setShowColorPanel(false);
      }
      if (containerPanelRef.current && !containerPanelRef.current.contains(target)) {
        setShowContainerPanel(false);
      }
      if (effectsPanelRef.current && !effectsPanelRef.current.contains(target)) {
        setShowEffectsPanel(false);
      }
    };

    if (showFontPanel || showColorPanel || showContainerPanel || showEffectsPanel) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showFontPanel, showColorPanel, showContainerPanel, showEffectsPanel]);

  return (
    <div className="flex items-center gap-2 group relative">
      {/* Input */}
      <Input
        value={value || ''}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-slate-900 border-slate-700 text-white text-sm h-8"
      />

      {/* 🎯 Botão de Âncora */}
      {anchorId && onAnchor && (
        <AnchorButton targetId={anchorId} onAnchor={onAnchor} />
      )}

      {/* 🎨 Botões dos 4 editores */}
      <div className="flex gap-0.5">
        {/* 🟣 TIPOGRAFIA */}
        <button
          onClick={() => {
            setShowFontPanel(!showFontPanel);
            setShowColorPanel(false);
            setShowContainerPanel(false);
            setShowEffectsPanel(false);
          }}
          className={`p-1.5 rounded transition-all ${
            showFontPanel
              ? 'bg-purple-500/20 text-purple-400'
              : 'bg-slate-800 text-slate-500 hover:bg-purple-500/10 hover:text-purple-400'
          }`}
          title="Tipografia"
        >
          <Type className="w-3.5 h-3.5" />
        </button>

        {/* 🟢 CORES */}
        <button
          onClick={() => {
            setShowColorPanel(!showColorPanel);
            setShowFontPanel(false);
            setShowContainerPanel(false);
            setShowEffectsPanel(false);
          }}
          className={`p-1.5 rounded transition-all ${
            showColorPanel
              ? 'bg-green-500/20 text-green-400'
              : 'bg-slate-800 text-slate-500 hover:bg-green-500/10 hover:text-green-400'
          }`}
          title="Cores"
        >
          <Palette className="w-3.5 h-3.5" />
        </button>

        {/* 🔵 CONTAINER */}
        {containerStyle && onContainerChange && (
          <button
            onClick={() => {
              setShowContainerPanel(!showContainerPanel);
              setShowFontPanel(false);
              setShowColorPanel(false);
              setShowEffectsPanel(false);
            }}
            className={`p-1.5 rounded transition-all ${
              showContainerPanel
                ? 'bg-blue-500/20 text-blue-400'
                : 'bg-slate-800 text-slate-500 hover:bg-blue-500/10 hover:text-blue-400'
            }`}
            title="Container"
          >
            <Box className="w-3.5 h-3.5" />
          </button>
        )}

        {/* 🟡 EFEITOS */}
        {effectsStyle && onEffectsChange && (
          <button
            onClick={() => {
              setShowEffectsPanel(!showEffectsPanel);
              setShowFontPanel(false);
              setShowColorPanel(false);
              setShowContainerPanel(false);
            }}
            className={`p-1.5 rounded transition-all ${
              showEffectsPanel
                ? 'bg-yellow-500/20 text-yellow-400'
                : 'bg-slate-800 text-slate-500 hover:bg-yellow-500/10 hover:text-yellow-400'
            }`}
            title="Efeitos"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 🟣 PAINEL TIPOGRAFIA */}
      {showFontPanel && (
        <div ref={fontPanelRef}>
          <FontStyleEditor
            style={style}
            onChange={onStyleChange}
            onClose={() => setShowFontPanel(false)}
          />
        </div>
      )}

      {/* 🟢 PAINEL CORES */}
      {showColorPanel && (
        <div ref={colorPanelRef}>
          <ColorStyleEditor
            style={style}
            onChange={onStyleChange}
            onClose={() => setShowColorPanel(false)}
            contentColors={contentColors}
            elementColors={elementColors}
            onContentColorsChange={onContentColorsChange}
            onElementColorsChange={onElementColorsChange}
          />
        </div>
      )}

      {/* 🔵 PAINEL CONTAINER */}
      {showContainerPanel && containerStyle && onContainerChange && (
        <div ref={containerPanelRef}>
          <ContainerStyleEditor
            style={containerStyle}
            onChange={onContainerChange}
            onClose={() => setShowContainerPanel(false)}
          />
        </div>
      )}

      {/* 🟡 PAINEL EFEITOS */}
      {showEffectsPanel && effectsStyle && onEffectsChange && (
        <div ref={effectsPanelRef}>
          <EffectsStyleEditor
            style={effectsStyle}
            onChange={onEffectsChange}
            onClose={() => setShowEffectsPanel(false)}
          />
        </div>
      )}
    </div>
  );
}