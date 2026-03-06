import { useState, useEffect, useRef } from 'react';
import { Type, Palette, Box, Sparkles } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { AnchorButton } from './AnchorButton';
import { FontStyleEditor } from './FontStyleEditor';
import { ColorStyleEditor } from './ColorStyleEditor';
import { ContainerStyleEditor } from './ContainerStyleEditor';
import { EffectsStyleEditor } from './EffectsStyleEditor';
import type { FieldStyle, ContentColors, ElementColors, ContainerStyle, EffectsStyle } from '../../../lib/storage';

interface BilingualFieldEditorProps {
  valuePt: string;
  valueEn: string;
  style: FieldStyle;
  onValuePtChange: (value: string) => void;
  onValueEnChange: (value: string) => void;
  onStyleChange: (style: FieldStyle) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  anchorId?: string; // 🎯 ID do elemento no preview para scroll
  onAnchor?: (targetId: string) => void; // 🎯 Callback de scroll
  // 🎨 CORES - Props opcionais para controles de cores separados
  contentColors?: ContentColors;
  elementColors?: ElementColors;
  onContentColorsChange?: (colors: ContentColors) => void;
  onElementColorsChange?: (colors: ElementColors) => void;
  // 📦 CONTAINER & ✨ EFEITOS - Props opcionais para elementos que tem container próprio
  containerStyle?: ContainerStyle;
  effectsStyle?: EffectsStyle;
  onContainerChange?: (container: ContainerStyle) => void;
  onEffectsChange?: (effects: EffectsStyle) => void;
}

export function BilingualFieldEditor({
  valuePt,
  valueEn,
  style,
  onValuePtChange,
  onValueEnChange,
  onStyleChange,
  placeholder,
  icon,
  anchorId,
  onAnchor,
  // 🎨 CORES - Props opcionais para controles de cores separados
  contentColors,
  elementColors,
  onContentColorsChange,
  onElementColorsChange,
  // 📦 CONTAINER & ✨ EFEITOS
  containerStyle,
  effectsStyle,
  onContainerChange,
  onEffectsChange,
}: BilingualFieldEditorProps) {
  const [activeTab, setActiveTab] = useState<'pt' | 'en'>('pt');
  const [showFontPanel, setShowFontPanel] = useState(false);
  const [showColorPanel, setShowColorPanel] = useState(false);
  const [showContainerPanel, setShowContainerPanel] = useState(false);
  const [showEffectsPanel, setShowEffectsPanel] = useState(false);

  // 🛡️ PROTEÇÃO: Garantir que valores nunca sejam undefined
  const currentValue = activeTab === 'pt' ? (valuePt || '') : (valueEn || '');
  const handleChange = activeTab === 'pt' ? onValuePtChange : onValueEnChange;

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
        return; // Não fechar nenhum painel se clicar em Select dropdown
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
      {/* Ícone customizável */}
      {icon && (
        <div className="flex items-center justify-center w-5 h-5 text-slate-400 shrink-0">
          {icon}
        </div>
      )}

      {/* Tabs PT/EN */}
      <div className="flex gap-0.5 shrink-0">
        <button
          onClick={() => setActiveTab('pt')}
          className={`px-2 py-1 text-[10px] font-bold uppercase transition-all rounded-l ${
            activeTab === 'pt'
              ? 'bg-cyan-500 text-slate-900'
              : 'bg-slate-800 text-slate-500 hover:text-cyan-400'
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setActiveTab('en')}
          className={`px-2 py-1 text-[10px] font-bold uppercase transition-all rounded-r ${
            activeTab === 'en'
              ? 'bg-cyan-500 text-slate-900'
              : 'bg-slate-800 text-slate-500 hover:text-cyan-400'
          }`}
        >
          EN
        </button>
      </div>

      {/* Input */}
      <Input
        value={currentValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-slate-900 border-slate-700 text-white text-sm h-8"
      />

      {/* Botões de controle - 🎨 Agora em LINHA */}
      <div className="flex items-center gap-1 shrink-0">
        {/* Botão FONTE */}
        <div className="relative" ref={fontPanelRef}>
          <button
            onClick={() => {
              setShowFontPanel(!showFontPanel);
              setShowColorPanel(false);
              setShowContainerPanel(false);
              setShowEffectsPanel(false);
            }}
            className={`p-1.5 rounded transition-all ${
              showFontPanel
                ? 'bg-purple-500/20 border border-purple-500/50 text-purple-400'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-purple-400 hover:border-purple-500/30'
            }`}
            title="Editar fonte"
          >
            <Type size={14} />
          </button>

          {/* 🎨 PAINEL FONTE */}
          {showFontPanel && (
            <FontStyleEditor
              style={style}
              onChange={onStyleChange}
            />
          )}
        </div>

        {/* Botão COR */}
        <div className="relative" ref={colorPanelRef}>
          <button
            onClick={() => {
              setShowColorPanel(!showColorPanel);
              setShowFontPanel(false);
              setShowContainerPanel(false);
              setShowEffectsPanel(false);
            }}
            className={`p-1.5 rounded transition-all ${
              showColorPanel
                ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-green-400 hover:border-green-500/30'
            }`}
            title="Editar cor"
          >
            <Palette size={14} />
          </button>

          {/* 🎨 PAINEL COR */}
          {showColorPanel && (
            <ColorStyleEditor
              value={style}
              onChange={onStyleChange}
              contentColors={contentColors}
              elementColors={elementColors}
              onContentColorsChange={onContentColorsChange}
              onElementColorsChange={onElementColorsChange}
            />
          )}
        </div>

        {/* 📦 Botão CONTAINER */}
        <div className="relative" ref={containerPanelRef}>
          <button
            onClick={() => {
              setShowContainerPanel(!showContainerPanel);
              setShowFontPanel(false);
              setShowColorPanel(false);
              setShowEffectsPanel(false);
            }}
            className={`p-1.5 rounded transition-all ${
              showContainerPanel
                ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-500/30'
            }`}
            title="Editar container"
          >
            <Box size={14} />
          </button>

          {/* 📦 POPUP CONTAINER */}
          {showContainerPanel && onContainerChange && (
            <ContainerStyleEditor
              value={containerStyle || {}}
              onChange={onContainerChange}
            />
          )}
        </div>

        {/* ✨ Botão EFEITOS */}
        <div className="relative" ref={effectsPanelRef}>
          <button
            onClick={() => {
              setShowEffectsPanel(!showEffectsPanel);
              setShowFontPanel(false);
              setShowColorPanel(false);
              setShowContainerPanel(false);
            }}
            className={`p-1.5 rounded transition-all ${
              showEffectsPanel
                ? 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-yellow-400 hover:border-yellow-500/30'
            }`}
            title="Editar efeitos"
          >
            <Sparkles size={14} />
          </button>

          {/* ✨ POPUP EFEITOS */}
          {showEffectsPanel && onEffectsChange && (
            <EffectsStyleEditor
              value={effectsStyle || {}}
              onChange={onEffectsChange}
            />
          )}
        </div>

        {/* Botão de âncora (scroll para preview) */}
        {anchorId && onAnchor && (
          <AnchorButton
            targetId={anchorId}
            onAnchor={onAnchor}
            size="sm"
          />
        )}
      </div>
    </div>
  );
}