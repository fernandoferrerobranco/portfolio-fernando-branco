import { useState, useEffect, useRef } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Slider } from '../ui/slider';
import type { EffectsStyle } from '../../../lib/storage';
import { ColorPicker } from './ColorPicker';

interface EffectsStyleEditorProps {
  value?: EffectsStyle;
  onChange: (value: EffectsStyle) => void;
}

// 🎬 CATEGORIAS DE EFEITOS
type EffectCategory = 'scroll' | 'shadow' | 'hover' | 'filters' | 'transforms' | 'transitions' | 'opacity';

// 🌟 PRESETS DE SOMBRAS SIMPLIFICADOS
const SHADOW_PRESETS = {
  none: 'none',
  glow: (color: string) => `0 0 20px ${color}, 0 0 40px ${color}`, // Neon adaptativo
  'glow-soft': (color: string) => `0 0 15px ${color}`, // Neon suave
};

export function EffectsStyleEditor({ value = {}, onChange }: EffectsStyleEditorProps) {
  const [activeCategory, setActiveCategory] = useState<EffectCategory>('scroll');
  
  // 🎨 ESTADO LOCAL para cor da sombra (SEMPRE preservado!)
  const currentShadowColor = useRef(value.shadowColor || 'rgba(6, 182, 212, 0.6)');
  
  // ✅ Sincronizar cor quando mudar externamente
  useEffect(() => {
    if (value.shadowColor) {
      currentShadowColor.current = value.shadowColor;
    }
  }, [value.shadowColor]);

  const updateValue = (key: keyof EffectsStyle, val: any) => {
    console.log('✨ EffectsStyleEditor - updateValue:', key, val);
    onChange({ ...value, [key]: val });
    
    // 🎬 Se mudou qualquer propriedade de animação, disparar evento para replay
    if (key === 'scrollAnimation' || key === 'scrollAnimationDuration' || key === 'scrollAnimationDelay') {
      window.dispatchEvent(new CustomEvent('admin-effect-change'));
    }
  };
  
  // 🎨 HELPER para atualizar sombra SEMPRE preservando a cor
  const updateShadow = (params: {
    offsetX?: string;
    offsetY?: string;
    blur?: string;
    spread?: string;
  }) => {
    const color = currentShadowColor.current; // ✅ SEMPRE usar a referência salva
    const offsetX = params.offsetX ?? value.shadowOffsetX ?? '0px';
    const offsetY = params.offsetY ?? value.shadowOffsetY ?? '4px';
    const blur = params.blur ?? value.shadowBlur ?? '8px';
    const spread = params.spread ?? value.shadowSpread ?? '0px';
    
    console.log('🎨 updateShadow - usando cor:', color);
    
    // ✅ SALVAR tudo de uma vez, GARANTINDO que shadowColor está incluído
    onChange({
      ...value,
      shadowOffsetX: offsetX,
      shadowOffsetY: offsetY,
      shadowBlur: blur,
      shadowSpread: spread,
      shadowColor: color, // ✅ SEMPRE incluir!
      boxShadow: `${offsetX} ${offsetY} ${blur} ${spread} ${color}`
    });
  };

  // 🔄 CONVERTERS: Opacity 0-1 ↔ 0-100
  const toPercent = (val?: string): number => {
    if (!val) return 100;
    return Math.round(parseFloat(val) * 100);
  };

  const fromPercent = (percent: number): string => {
    return (percent / 100).toFixed(2);
  };

  // 🔍 DETECTAR qual preset de sombra está ativo
  const getCurrentShadowPreset = (): string => {
    const currentShadow = value.boxShadow || 'none';
    const preset = Object.entries(SHADOW_PRESETS).find(([_, val]) => val === currentShadow);
    return preset ? preset[0] : 'custom';
  };

  // 📋 CATEGORIAS COM ÍCONES
  const categories = [
    { id: 'scroll' as const, icon: '🎬', label: 'Scroll' },
    { id: 'shadow' as const, icon: '🌑', label: 'Sombra' },
    { id: 'hover' as const, icon: '🖱️', label: 'Hover' },
    { id: 'filters' as const, icon: '🎨', label: 'Filtros' },
    { id: 'transforms' as const, icon: '🔄', label: 'Transform' },
    { id: 'transitions' as const, icon: '⚡', label: 'Transição' },
    { id: 'opacity' as const, icon: '💫', label: 'Opacidade' },
  ];

  return (
    <div className="absolute top-full right-0 mt-1 z-[100] w-[380px] bg-slate-900 border border-yellow-500/30 rounded-lg shadow-2xl shadow-yellow-500/20">
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
        <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
          ✨ Efeitos
        </span>
      </div>

      {/* 🎯 ABAS DE CATEGORIAS (8 quadradinhos MINIMALISTAS) */}
      <div className="grid grid-cols-8 gap-1 p-2 border-b border-yellow-500/10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              flex items-center justify-center p-1.5 rounded text-sm transition-all
              ${activeCategory === cat.id 
                ? 'bg-yellow-500/20 border border-yellow-500/40' 
                : 'bg-transparent border border-transparent hover:bg-slate-800/30'
              }
            `}
            title={cat.label}
          >
            <span className="opacity-60">{cat.icon}</span>
          </button>
        ))}
      </div>

      {/* CONTEÚDO DA ABA ATIVA */}
      <div className="max-h-[400px] overflow-y-auto p-3">
        
        {/* 🎬 ANIMAÇÕES DE SCROLL */}
        {activeCategory === 'scroll' && (
          <div className="space-y-3">
            <Label className="text-[10px] text-yellow-400 uppercase tracking-wider mb-2 block font-bold">
              🎬 Animação de Entrada
            </Label>
            
            {/* PREVIEW DA ANIMAÇÃO */}
            {value.scrollAnimation && value.scrollAnimation !== 'none' && (
              <div className="mb-3 p-3 bg-slate-800/50 border border-yellow-500/20 rounded">
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-2 block">
                  Preview
                </Label>
                <div
                  key={value.scrollAnimation + value.scrollAnimationDuration}
                  className="h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded flex items-center justify-center text-white text-sm font-medium"
                  style={{
                    animation: `${value.scrollAnimation} ${value.scrollAnimationDuration || '600ms'} ${value.scrollAnimationDelay || '0ms'} ease-out both`
                  }}
                >
                  ✨ {value.scrollAnimation}
                </div>
              </div>
            )}
            
            <div>
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                Tipo de Animação
              </Label>
              <Select
                value={value.scrollAnimation || 'none'}
                onValueChange={(val) => updateValue('scrollAnimation', val as any)}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white text-xs h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 z-[200]">
                  <SelectItem value="none" className="text-xs text-white">Nenhuma</SelectItem>
                  <SelectItem value="fadeIn" className="text-xs text-white">✨ Fade In (Aparecer)</SelectItem>
                  <SelectItem value="slideBottom" className="text-xs text-white">⬆️ Slide Bottom (De Baixo)</SelectItem>
                  <SelectItem value="slideLeft" className="text-xs text-white">➡️ Slide Left (Da Esquerda)</SelectItem>
                  <SelectItem value="slideRight" className="text-xs text-white">️ Slide Right (Da Direita)</SelectItem>
                  <SelectItem value="slideTop" className="text-xs text-white">⬇️ Slide Top (De Cima)</SelectItem>
                  <SelectItem value="scaleIn" className="text-xs text-white">🔍 Scale In (Crescer)</SelectItem>
                  <SelectItem value="rotateIn" className="text-xs text-white">🔄 Rotate In (Girar)</SelectItem>
                  <SelectItem value="bounceIn" className="text-xs text-white">🎾 Bounce In (Pular)</SelectItem>
                  <SelectItem value="flipIn" className="text-xs text-white">🎴 Flip In (Virar)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                Duração
              </Label>
              <Select
                value={value.scrollAnimationDuration || '600ms'}
                onValueChange={(val) => updateValue('scrollAnimationDuration', val)}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white text-xs h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 z-[200]">
                  <SelectItem value="300ms" className="text-xs text-white">⚡ Rápida (300ms)</SelectItem>
                  <SelectItem value="600ms" className="text-xs text-white">→ Normal (600ms)</SelectItem>
                  <SelectItem value="1000ms" className="text-xs text-white"> Lenta (1s)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                Atraso (Delay)
              </Label>
              <Select
                value={value.scrollAnimationDelay || '0ms'}
                onValueChange={(val) => updateValue('scrollAnimationDelay', val)}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white text-xs h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 z-[200]">
                  <SelectItem value="0ms" className="text-xs text-white">Sem atraso</SelectItem>
                  <SelectItem value="100ms" className="text-xs text-white">100ms</SelectItem>
                  <SelectItem value="200ms" className="text-xs text-white">200ms</SelectItem>
                  <SelectItem value="400ms" className="text-xs text-white">400ms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* 🌑 SOMBRAS */}
        {activeCategory === 'shadow' && (
          <div className="space-y-3">
            <Label className="text-[10px] text-yellow-400 uppercase tracking-wider mb-2 block font-bold">
              🌑 Sombras
            </Label>
            
            {/* 🎨 COR + PRESETS NA MESMA LINHA */}
            <div className="grid grid-cols-2 gap-2">
              {/* Color Picker */}
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                  🎨 Cor da Sombra
                </Label>
                <ColorPicker
                  value={value.shadowColor || 'rgba(6, 182, 212, 0.6)'}
                  onChange={(color) => {
                    // ✅ ATUALIZAR a referência local PRIMEIRO
                    currentShadowColor.current = color;
                    
                    // ✅ SEMPRE salvar a cor escolhida
                    updateValue('shadowColor', color);
                    
                    // ✨ ATUALIZAR PRESET SE ESTIVER ATIVO
                    const currentShadow = value.boxShadow || '';
                    
                    // Detectar se é Glow (tem dois valores 0 0)
                    if (currentShadow.includes('0 0 20px') && currentShadow.includes('0 0 40px')) {
                      // É Glow forte → recriar com nova cor
                      updateValue('boxShadow', `0 0 20px ${color}, 0 0 40px ${color}`);
                    } 
                    // Detectar se é Glow Suave (apenas um valor 0 0 15px)
                    else if (currentShadow.includes('0 0 15px') && !currentShadow.includes('0 0 20px')) {
                      // É Glow Suave → recriar com nova cor
                      updateValue('boxShadow', `0 0 15px ${color}`);
                    }
                    // Caso contrário, é sombra customizada → manter valores atuais
                    else if (currentShadow && currentShadow !== 'none') {
                      const offsetX = value.shadowOffsetX || '0px';
                      const offsetY = value.shadowOffsetY || '4px';
                      const blurRadius = value.shadowBlur || '8px';
                      const spreadRadius = value.shadowSpread || '0px';
                      updateValue('boxShadow', `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} ${color}`);
                    }
                  }}
                />
              </div>

              {/* Presets */}
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                  ⚡ Presets
                </Label>
                <Select
                  value={'custom'}
                  onValueChange={(preset) => {
                    // ✅ USAR a cor salva, ou salvar a cor padrão se não existir
                    let color = value.shadowColor;
                    if (!color) {
                      color = 'rgba(6, 182, 212, 0.6)';
                      updateValue('shadowColor', color); // Salvar para uso futuro
                    }
                    
                    if (preset === 'none') {
                      updateValue('boxShadow', 'none');
                    } else if (preset === 'glow') {
                      // 💡 Usar a cor SALVA
                      updateValue('boxShadow', `0 0 20px ${color}, 0 0 40px ${color}`);
                    } else if (preset === 'glow-soft') {
                      // 💡 Usar a cor SALVA
                      updateValue('boxShadow', `0 0 15px ${color}`);
                    }
                  }}
                >
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white text-xs h-9">
                    <SelectValue placeholder="Aplicar" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 z-[200]">
                    <SelectItem value="none" className="text-xs text-white">🚫 Remover</SelectItem>
                    <SelectItem value="glow" className="text-xs text-cyan-400">💡 Glow</SelectItem>
                    <SelectItem value="glow-soft" className="text-xs text-cyan-400">💡 Suave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* PREVIEW DA SOMBRA */}
            <div>
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                Preview
              </Label>
              <div
                className="h-16 bg-yellow-500/10 border border-yellow-500/20 rounded flex items-center justify-center text-white text-sm font-medium"
                style={{ boxShadow: value.boxShadow }}
              >
                ✨ {value.boxShadow && value.boxShadow !== 'none' ? 'Sombra Aplicada' : 'Sem Sombra'}
              </div>
            </div>

            {/* 🎛️ AJUSTES PERSONALIZADOS */}
            <div className="space-y-2 pt-2 border-t border-yellow-500/10">
              <Label className="text-[9px] text-yellow-400 uppercase tracking-wider mb-1 block">
                🎛️ Ajustes Personalizados
              </Label>

              {/* Offset X */}
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1 block">
                  Deslocamento X: {value.shadowOffsetX || '0px'}
                </Label>
                <Slider
                  value={[parseInt(value.shadowOffsetX || '0')]}
                  onValueChange={([val]) => {
                    updateShadow({ offsetX: `${val}px` });
                  }}
                  min={-50}
                  max={50}
                  step={1}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>

              {/* Offset Y */}
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1 block">
                  Deslocamento Y: {value.shadowOffsetY || '4px'}
                </Label>
                <Slider
                  value={[parseInt(value.shadowOffsetY || '4')]}
                  onValueChange={([val]) => {
                    updateShadow({ offsetY: `${val}px` });
                  }}
                  min={-50}
                  max={50}
                  step={1}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>

              {/* Blur */}
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1 block">
                  Desfoque: {value.shadowBlur || '8px'}
                </Label>
                <Slider
                  value={[parseInt(value.shadowBlur || '8')]}
                  onValueChange={([val]) => {
                    updateShadow({ blur: `${val}px` });
                  }}
                  min={0}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>

              {/* Spread */}
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1 block">
                  Expansão: {value.shadowSpread || '0px'}
                </Label>
                <Slider
                  value={[parseInt(value.shadowSpread || '0')]}
                  onValueChange={([val]) => {
                    updateShadow({ spread: `${val}px` });
                  }}
                  min={-50}
                  max={50}
                  step={1}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* 🖱️ HOVER EFFECTS */}
        {activeCategory === 'hover' && (
          <div className="space-y-3">
            <Label className="text-[10px] text-yellow-400 uppercase tracking-wider mb-2 block font-bold">
              🖱️ Efeitos de Hover
            </Label>
            
            {/* 👁️ PREVIEW DO HOVER EFFECT */}
            {value.hoverEffect && value.hoverEffect !== 'none' && (
              <div className="mb-3 p-3 bg-slate-800/50 border border-yellow-500/20 rounded">
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-2 block">
                  Preview - Passe o mouse
                </Label>
                <div
                  className="h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded flex items-center justify-center text-white text-sm font-medium cursor-pointer"
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const effect = value.hoverEffect;
                    switch(effect) {
                      case 'scaleUp':
                        e.currentTarget.style.transform = `scale(${value.hoverScale || '1.05'})`;
                        break;
                      case 'scaleDown':
                        e.currentTarget.style.transform = `scale(${value.hoverScale || '0.95'})`;
                        break;
                      case 'lift':
                        e.currentTarget.style.transform = `translateY(${value.hoverTranslateY || '-4px'})`;
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                        break;
                      case 'rotate':
                        e.currentTarget.style.transform = `rotate(${value.hoverRotate || '5deg'})`;
                        break;
                      case 'brightness':
                        e.currentTarget.style.filter = `brightness(${value.hoverBrightness || '1.2'})`;
                        break;
                      case 'blur':
                        e.currentTarget.style.filter = `blur(${value.hoverBlur || '2px'})`;
                        break;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.filter = 'none';
                  }}
                >
                  🖱️ {value.hoverEffect}
                </div>
              </div>
            )}
            
            <div>
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                Tipo de Efeito
              </Label>
              <Select
                value={value.hoverEffect || 'none'}
                onValueChange={(val) => updateValue('hoverEffect', val as any)}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white text-xs h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 z-[200]">
                  <SelectItem value="none" className="text-xs text-white">Nenhum</SelectItem>
                  <SelectItem value="scaleUp" className="text-xs text-white"> Crescer</SelectItem>
                  <SelectItem value="scaleDown" className="text-xs text-white">🔻 Diminuir</SelectItem>
                  <SelectItem value="lift" className="text-xs text-white">⬆️ Levantar</SelectItem>
                  <SelectItem value="rotate" className="text-xs text-white">🔄 Girar</SelectItem>
                  <SelectItem value="brightness" className="text-xs text-white">💡 Brilhar</SelectItem>
                  <SelectItem value="blur" className="text-xs text-white">🌫️ Desfocar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {value.hoverEffect === 'scaleUp' || value.hoverEffect === 'scaleDown' ? (
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                  Escala: {value.hoverScale || '1.05'}
                </Label>
                <Slider
                  value={[parseFloat(value.hoverScale || '1.05') * 100]}
                  onValueChange={([val]) => updateValue('hoverScale', (val / 100).toFixed(2))}
                  min={80}
                  max={150}
                  step={5}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>
            ) : null}

            {value.hoverEffect === 'rotate' ? (
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                  Rotação: {value.hoverRotate || '5deg'}
                </Label>
                <Slider
                  value={[parseFloat(value.hoverRotate || '5')]}
                  onValueChange={([val]) => updateValue('hoverRotate', `${val}deg`)}
                  min={-45}
                  max={45}
                  step={5}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>
            ) : null}

            {value.hoverEffect === 'lift' ? (
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                  Altura: {value.hoverTranslateY || '-4px'}
                </Label>
                <Slider
                  value={[parseFloat(value.hoverTranslateY || '-4')]}
                  onValueChange={([val]) => updateValue('hoverTranslateY', `${val}px`)}
                  min={-20}
                  max={0}
                  step={2}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>
            ) : null}

            {value.hoverEffect === 'brightness' ? (
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                  Intensidade: {value.hoverBrightness || '1.2'}
                </Label>
                <Slider
                  value={[parseFloat(value.hoverBrightness || '1.2') * 100]}
                  onValueChange={([val]) => updateValue('hoverBrightness', (val / 100).toFixed(1))}
                  min={50}
                  max={200}
                  step={10}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>
            ) : null}

            {value.hoverEffect === 'blur' ? (
              <div>
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                  Desfoque: {value.hoverBlur || '2px'}
                </Label>
                <Slider
                  value={[parseFloat(value.hoverBlur || '2')]}
                  onValueChange={([val]) => updateValue('hoverBlur', `${val}px`)}
                  min={0}
                  max={10}
                  step={1}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>
            ) : null}
          </div>
        )}

        {/* 🎨 FILTROS CSS */}
        {activeCategory === 'filters' && (
          <div className="space-y-3">
            <Label className="text-[10px] text-yellow-400 uppercase tracking-wider mb-2 block font-bold">
              🎨 Filtros CSS
            </Label>
            
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label className="text-[9px] text-slate-400 uppercase tracking-wider">
                    Blur (Desfoque)
                  </Label>
                  <span className="text-xs text-yellow-400 font-mono">
                    {value.filterBlur || '0px'}
                  </span>
                </div>
                <Slider
                  value={[parseFloat(value.filterBlur || '0')]}
                  onValueChange={([val]) => updateValue('filterBlur', `${val}px`)}
                  min={0}
                  max={10}
                  step={1}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label className="text-[9px] text-slate-400 uppercase tracking-wider">
                    Grayscale (P&B)
                  </Label>
                  <span className="text-xs text-yellow-400 font-mono">
                    {value.filterGrayscale || '0%'}
                  </span>
                </div>
                <Slider
                  value={[parseFloat(value.filterGrayscale || '0')]}
                  onValueChange={([val]) => updateValue('filterGrayscale', `${val}%`)}
                  min={0}
                  max={100}
                  step={10}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label className="text-[9px] text-slate-400 uppercase tracking-wider">
                    Brightness (Brilho)
                  </Label>
                  <span className="text-xs text-yellow-400 font-mono">
                    {value.filterBrightness || '100%'}
                  </span>
                </div>
                <Slider
                  value={[parseFloat(value.filterBrightness || '100')]}
                  onValueChange={([val]) => updateValue('filterBrightness', `${val}%`)}
                  min={0}
                  max={200}
                  step={10}
                  className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* 🔄 TRANSFORMAÇÕES */}
        {activeCategory === 'transforms' && (
          <div className="space-y-3">
            <Label className="text-[10px] text-yellow-400 uppercase tracking-wider mb-2 block font-bold">
              🔄 Transformações
            </Label>
            <p className="text-[10px] text-slate-500 italic">
              Transformações permanentes no elemento (não confundir com hover)
            </p>
            
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider">
                  Scale (Escala)
                </Label>
                <span className="text-xs text-yellow-400 font-mono">
                  {value.scale || '1'}
                </span>
              </div>
              <Slider
                value={[parseFloat(value.scale || '1') * 100]}
                onValueChange={([val]) => updateValue('scale', (val / 100).toFixed(2))}
                min={50}
                max={200}
                step={10}
                className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider">
                  Rotate (Rotação)
                </Label>
                <span className="text-xs text-yellow-400 font-mono">
                  {value.rotate || '0deg'}
                </span>
              </div>
              <Slider
                value={[parseFloat(value.rotate || '0')]}
                onValueChange={([val]) => updateValue('rotate', `${val}deg`)}
                min={-180}
                max={180}
                step={15}
                className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
              />
            </div>
          </div>
        )}

        {/* ⚡ TRANSIÇÕES */}
        {activeCategory === 'transitions' && (
          <div className="space-y-3">
            <Label className="text-[10px] text-yellow-400 uppercase tracking-wider mb-2 block font-bold">
              ⚡ Transições
            </Label>
            
            {/* 👁️ PREVIEW DA TRANSIÇÃO */}
            <div className="mb-3 p-3 bg-slate-800/50 border border-yellow-500/20 rounded">
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-2 block">
                Preview - Passe o mouse
              </Label>
              <div
                className="h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded flex items-center justify-center text-white text-sm font-medium cursor-pointer"
                style={{
                  // ✅ Usar apenas propriedades individuais (evita conflito com shorthand)
                  transitionProperty: 'all',
                  transitionDuration: value.transitionDuration || '300ms',
                  transitionTimingFunction: value.transitionEasing || 'ease',
                  transitionDelay: value.transitionDelay || '0ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(234, 179, 8, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '';
                }}
              >
                ⚡ {value.transitionDuration || '300ms'} · {value.transitionEasing || 'ease'}
              </div>
            </div>
            
            <div>
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                Velocidade
              </Label>
              <Select
                value={value.transitionDuration || '300ms'}
                onValueChange={(val) => {
                  console.log('⚡ Mudando transitionDuration para:', val);
                  updateValue('transitionDuration', val);
                  // ✅ NÃO salvar shorthand 'transition' - usar APENAS individuais
                }}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white text-xs h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 z-[200]">
                  <SelectItem value="150ms" className="text-xs text-white">⚡ Rápida (150ms)</SelectItem>
                  <SelectItem value="300ms" className="text-xs text-white">→ Normal (300ms)</SelectItem>
                  <SelectItem value="500ms" className="text-xs text-white">🐌 Lenta (500ms)</SelectItem>
                  <SelectItem value="800ms" className="text-xs text-white">🐢 Muito Lenta (800ms)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                Suavização (Easing)
              </Label>
              <Select
                value={value.transitionEasing || 'ease'}
                onValueChange={(val) => {
                  console.log('⚡ Mudando transitionEasing para:', val);
                  updateValue('transitionEasing', val);
                  // ✅ NÃO salvar shorthand 'transition' - usar APENAS individuais
                }}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white text-xs h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 z-[200]">
                  <SelectItem value="linear" className="text-xs text-white">Linear (constante)</SelectItem>
                  <SelectItem value="ease" className="text-xs text-white">Ease (natural)</SelectItem>
                  <SelectItem value="ease-in" className="text-xs text-white">Ease-in (acelera)</SelectItem>
                  <SelectItem value="ease-out" className="text-xs text-white">Ease-out (desacelera)</SelectItem>
                  <SelectItem value="ease-in-out" className="text-xs text-white">Ease-in-out (suave)</SelectItem>
                  <SelectItem value="cubic-bezier(0.68, -0.55, 0.265, 1.55)" className="text-xs text-white">Bounce (quica)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5 block">
                Atraso (Delay)
              </Label>
              <Select
                value={value.transitionDelay || '0ms'}
                onValueChange={(val) => {
                  console.log('⚡ Mudando transitionDelay para:', val);
                  updateValue('transitionDelay', val);
                }}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white text-xs h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 z-[200]">
                  <SelectItem value="0ms" className="text-xs text-white">Sem atraso</SelectItem>
                  <SelectItem value="100ms" className="text-xs text-white">100ms</SelectItem>
                  <SelectItem value="200ms" className="text-xs text-white">200ms</SelectItem>
                  <SelectItem value="300ms" className="text-xs text-white">300ms</SelectItem>
                  <SelectItem value="400ms" className="text-xs text-white">400ms</SelectItem>
                  <SelectItem value="500ms" className="text-xs text-white">500ms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* 💫 OPACIDADE */}
        {activeCategory === 'opacity' && (
          <div className="space-y-3">
            <Label className="text-[10px] text-yellow-400 uppercase tracking-wider mb-2 block font-bold">
              💫 Opacidade
            </Label>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider">
                  Normal
                </Label>
                <span className="text-xs text-yellow-400 font-mono">
                  {toPercent(value.opacity)}%
                </span>
              </div>
              <Slider
                value={[toPercent(value.opacity)]}
                onValueChange={([percent]) => updateValue('opacity', fromPercent(percent))}
                min={0}
                max={100}
                step={5}
                className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-[9px] text-slate-400 uppercase tracking-wider">
                  Hover
                </Label>
                <span className="text-xs text-yellow-400 font-mono">
                  {toPercent(value.hoverOpacity)}%
                </span>
              </div>
              <Slider
                value={[toPercent(value.hoverOpacity)]}
                onValueChange={([percent]) => updateValue('hoverOpacity', fromPercent(percent))}
                min={0}
                max={100}
                step={5}
                className="[&_[role=slider]]:bg-yellow-500 [&_[role=slider]]:border-yellow-400"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}