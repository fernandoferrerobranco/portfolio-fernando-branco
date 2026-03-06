import React from 'react';
import { BilingualFieldEditor } from '../BilingualFieldEditor';
import { ImageUploader } from '../ImageUploader';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import type { PortfolioData, ContainerStyle, EffectsStyle } from '../../../../lib/storage';
import { useAdmin } from '../../../context/AdminContext';

interface HeroEditorProps {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
}

export function HeroEditor({ data, onChange }: HeroEditorProps) {
  const { hero, heroStyles } = data;
  const { scrollToComponent } = useAdmin();

  const updateHeroValue = (field: keyof typeof hero, value: string) => {
    console.log('💾 HeroEditor - updateHeroValue:', field, '=', value.substring(0, 50));
    const newData = {
      ...data,
      hero: { ...hero, [field]: value },
    };
    onChange(newData);
  };

  const updateHeroStyle = (field: keyof typeof heroStyles, style: any) => {
    console.log('🎨 HeroEditor - updateHeroStyle:', field, style);
    console.log('📦 Style completo recebido:', JSON.stringify(style, null, 2));
    const newData = {
      ...data,
      heroStyles: { ...heroStyles, [field]: style },
    };
    console.log('💾 Salvando no localStorage...', newData.heroStyles[field]);
    onChange(newData);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="pb-4 border-b border-cyan-500/20">
        <h2 className="text-xl font-black text-white">Seção Hero</h2>
        <p className="text-xs text-slate-500 mt-1">
          ⚡ Edição instantânea • Mudanças aparecem em tempo real
        </p>
      </div>

      {/* Badge - 🎉 NOVO: Com Container e Effects */}
      <div id="hero-badge" data-editing-for="hero-badge">
        <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2 block">
          🏷️ Badge
        </Label>
        <BilingualFieldEditor
          valuePt={hero.badge_pt}
          valueEn={hero.badge_en}
          style={heroStyles.badge}
          onValuePtChange={(v) => updateHeroValue('badge_pt', v)}
          onValueEnChange={(v) => updateHeroValue('badge_en', v)}
          onStyleChange={(s) => updateHeroStyle('badge', s)}
          placeholder="Ex: Sênior Operations Leader"
          anchorId="hero-badge"
          onAnchor={scrollToComponent}
          contentColors={heroStyles.badgeContent}
          elementColors={heroStyles.badgeElement}
          onContentColorsChange={(c) => updateHeroStyle('badgeContent', c)}
          onElementColorsChange={(e) => updateHeroStyle('badgeElement', e)}
          showContainerEditor={true}
          showEffectsEditor={true}
          containerStyle={heroStyles.badgeContainer}
          effectsStyle={heroStyles.badgeEffects}
          onContainerChange={(c) => updateHeroStyle('badgeContainer', c)}
          onEffectsChange={(e) => updateHeroStyle('badgeEffects', e)}
        />
      </div>

      {/* Títulos (4 linhas) */}
      <div 
        className="bg-slate-900/30 border border-cyan-500/10 rounded p-3"
      >
        <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-3 block">
          ✨ Títulos Principais (4 linhas)
        </Label>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} id={`hero-title${num}`}>
              <BilingualFieldEditor
                valuePt={hero[`title${num}_pt` as keyof typeof hero] as string}
                valueEn={hero[`title${num}_en` as keyof typeof hero] as string}
                style={heroStyles[`title${num}` as keyof typeof heroStyles]}
                onValuePtChange={(v) => updateHeroValue(`title${num}_pt` as any, v)}
                onValueEnChange={(v) => updateHeroValue(`title${num}_en` as any, v)}
                onStyleChange={(s) => updateHeroStyle(`title${num}` as any, s)}
                placeholder={`Linha ${num}`}
                icon={<span className="text-[10px] font-bold">{num}</span>}
                anchorId={`hero-title${num}`}
                onAnchor={scrollToComponent}
                showContainerEditor={true}
                showEffectsEditor={true}
                containerStyle={heroStyles[`title${num}Container` as keyof typeof heroStyles] as ContainerStyle}
                effectsStyle={heroStyles[`title${num}Effects` as keyof typeof heroStyles] as EffectsStyle}
                onContainerChange={(c) => updateHeroStyle(`title${num}Container` as any, c)}
                onEffectsChange={(e) => updateHeroStyle(`title${num}Effects` as any, e)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Localização */}
      <div id="hero-location">
        <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2 block">
          📍 Localização
        </Label>
        <BilingualFieldEditor
          valuePt={hero.location_pt}
          valueEn={hero.location_en}
          style={heroStyles.location}
          onValuePtChange={(v) => updateHeroValue('location_pt', v)}
          onValueEnChange={(v) => updateHeroValue('location_en', v)}
          onStyleChange={(s) => updateHeroStyle('location', s)}
          placeholder="São Paulo, Brasil"
          anchorId="hero-location"
          onAnchor={scrollToComponent}
          showContainerEditor={true}
          showEffectsEditor={true}
          contentColors={heroStyles.locationContent}
          onContentColorsChange={(c) => updateHeroStyle('locationContent', c)}
          containerStyle={heroStyles.locationContainer}
          effectsStyle={heroStyles.locationEffects}
          onContainerChange={(c) => updateHeroStyle('locationContainer', c)}
          onEffectsChange={(e) => updateHeroStyle('locationEffects', e)}
        />
      </div>

      {/* Email */}
      <div id="hero-email">
        <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2 block">
          ✉️ Email
        </Label>
        <BilingualFieldEditor
          valuePt={hero.email}
          valueEn={hero.email}
          style={heroStyles.email}
          onValuePtChange={(v) => updateHeroValue('email', v)}
          onValueEnChange={(v) => updateHeroValue('email', v)}
          onStyleChange={(s) => updateHeroStyle('email', s)}
          placeholder="seu@email.com"
          anchorId="hero-email"
          onAnchor={scrollToComponent}
          showContainerEditor={true}
          showEffectsEditor={true}
          contentColors={heroStyles.emailContent}
          onContentColorsChange={(c) => updateHeroStyle('emailContent', c)}
          containerStyle={heroStyles.emailContainer}
          effectsStyle={heroStyles.emailEffects}
          onContainerChange={(c) => updateHeroStyle('emailContainer', c)}
          onEffectsChange={(e) => updateHeroStyle('emailEffects', e)}
        />
      </div>

      {/* ═══════════════════ BOTÕES CTA ═══════════════════ */}
      <div 
        id="hero-buttons"
        className="bg-slate-900/30 border border-cyan-500/10 rounded p-3"
      >
        <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-3 block">
          🔗 Botões de Ação
        </Label>
        <div className="space-y-3">
          {/* Botão 1 */}
          <div className="space-y-1.5">
            <Label className="text-[10px] text-slate-500 uppercase tracking-wider">
              Botão 1 (Primário)
            </Label>
            <BilingualFieldEditor
              valuePt={hero.button1Text_pt}
              valueEn={hero.button1Text_en}
              style={heroStyles.button1}
              onValuePtChange={(v) => updateHeroValue('button1Text_pt', v)}
              onValueEnChange={(v) => updateHeroValue('button1Text_en', v)}
              onStyleChange={(s) => updateHeroStyle('button1', s)}
              placeholder="Texto"
              icon={<span className="text-[10px]">B1</span>}
              anchorId="hero-buttons"
              onAnchor={scrollToComponent}
              showContainerEditor={true}
              showEffectsEditor={true}
              elementColors={heroStyles.button1Element}
              onElementColorsChange={(e) => updateHeroStyle('button1Element', e)}
              containerStyle={heroStyles.button1Container}
              effectsStyle={heroStyles.button1Effects}
              onContainerChange={(c) => updateHeroStyle('button1Container', c)}
              onEffectsChange={(e) => updateHeroStyle('button1Effects', e)}
            />
            <Input
              value={hero.button1Link}
              onChange={(e) => updateHeroValue('button1Link', e.target.value)}
              placeholder="https://..."
              className="bg-slate-900 border-slate-700 text-white text-xs h-8"
            />
          </div>

          {/* Botão 2 */}
          <div className="space-y-1.5">
            <Label className="text-[10px] text-slate-500 uppercase tracking-wider">
              Botão 2 (Secundário)
            </Label>
            <BilingualFieldEditor
              valuePt={hero.button2Text_pt}
              valueEn={hero.button2Text_en}
              style={heroStyles.button2}
              onValuePtChange={(v) => updateHeroValue('button2Text_pt', v)}
              onValueEnChange={(v) => updateHeroValue('button2Text_en', v)}
              onStyleChange={(s) => updateHeroStyle('button2', s)}
              placeholder="Texto"
              icon={<span className="text-[10px]">B2</span>}
              anchorId="hero-buttons"
              onAnchor={scrollToComponent}
              showContainerEditor={true}
              showEffectsEditor={true}
              elementColors={heroStyles.button2Element}
              onElementColorsChange={(e) => updateHeroStyle('button2Element', e)}
              containerStyle={heroStyles.button2Container}
              effectsStyle={heroStyles.button2Effects}
              onContainerChange={(c) => updateHeroStyle('button2Container', c)}
              onEffectsChange={(e) => updateHeroStyle('button2Effects', e)}
            />
            <Input
              value={hero.button2Link}
              onChange={(e) => updateHeroValue('button2Link', e.target.value)}
              placeholder="https://..."
              className="bg-slate-900 border-slate-700 text-white text-xs h-8"
            />
          </div>
        </div>
      </div>

      {/* Card Lateral */}
      <div className="bg-slate-900/30 border border-cyan-500/10 rounded p-3">
        <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-3 block">
          💼 Card Lateral
        </Label>
        <div className="space-y-2">
          {/* Avatar */}
          <ImageUploader
            value={hero.avatarUrl}
            onChange={(v) => updateHeroValue('avatarUrl', v)}
            label="Foto do Avatar"
            maxSizeKB={300}
          />

          {/* Nome */}
          <BilingualFieldEditor
            valuePt={hero.cardName_pt}
            valueEn={hero.cardName_en}
            style={heroStyles.cardName}
            onValuePtChange={(v) => updateHeroValue('cardName_pt', v)}
            onValueEnChange={(v) => updateHeroValue('cardName_en', v)}
            onStyleChange={(s) => updateHeroStyle('cardName', s)}
            placeholder="Nome"
            anchorId="hero-card"
            onAnchor={scrollToComponent}
            showContainerEditor={true}
            showEffectsEditor={true}
            contentColors={heroStyles.cardNameContent}
            onContentColorsChange={(c) => updateHeroStyle('cardNameContent', c)}
            containerStyle={heroStyles.cardNameContainer}
            effectsStyle={heroStyles.cardNameEffects}
            onContainerChange={(c) => updateHeroStyle('cardNameContainer', c)}
            onEffectsChange={(e) => updateHeroStyle('cardNameEffects', e)}
          />

          {/* Cargo */}
          <BilingualFieldEditor
            valuePt={hero.cardRole_pt}
            valueEn={hero.cardRole_en}
            style={heroStyles.cardRole}
            onValuePtChange={(v) => updateHeroValue('cardRole_pt', v)}
            onValueEnChange={(v) => updateHeroValue('cardRole_en', v)}
            onStyleChange={(s) => updateHeroStyle('cardRole', s)}
            placeholder="Cargo"
            anchorId="hero-card"
            onAnchor={scrollToComponent}
            showContainerEditor={true}
            showEffectsEditor={true}
            contentColors={heroStyles.cardRoleContent}
            onContentColorsChange={(c) => updateHeroStyle('cardRoleContent', c)}
            containerStyle={heroStyles.cardRoleContainer}
            effectsStyle={heroStyles.cardRoleEffects}
            onContainerChange={(c) => updateHeroStyle('cardRoleContainer', c)}
            onEffectsChange={(e) => updateHeroStyle('cardRoleEffects', e)}
          />
        </div>
      </div>

      {/* Background */}
      <div className="bg-slate-900/30 border border-cyan-500/10 rounded p-3">
        <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-3 block">
          🎨 Background
        </Label>
        <div className="space-y-2">
          {/* Upload de Imagem de Fundo */}
          <div>
            <Label className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 block">
              Imagem de Fundo
            </Label>
            <ImageUploader
              value={hero.backgroundImage || ''}
              onChange={(v) => updateHeroValue('backgroundImage' as any, v)}
              label=""
              maxSizeKB={500}
              aspectRatio="landscape"
            />
            {hero.backgroundImage && (
              <button
                onClick={() => updateHeroValue('backgroundImage' as any, '')}
                className="mt-1.5 text-[10px] text-red-400 hover:text-red-300"
              >
                🗑️ Remover imagem
              </button>
            )}
          </div>

          {/* Cor */}
          <div>
            <Label className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 block flex items-center justify-between">
              <span>Cor Sólida</span>
              {hero.backgroundColor && (
                <button
                  onClick={() => updateHeroValue('backgroundColor', '')}
                  className="text-[8px] text-red-400 hover:text-red-300 uppercase"
                >
                  Limpar
                </button>
              )}
            </Label>
            <div className="flex gap-2">
              <input
                type="color"
                value={hero.backgroundColor || '#0f172a'}
                onChange={(e) => updateHeroValue('backgroundColor', e.target.value)}
                className="w-12 h-8 rounded border border-slate-700 cursor-pointer"
              />
              <Input
                value={hero.backgroundColor || ''}
                onChange={(e) => updateHeroValue('backgroundColor', e.target.value)}
                className="flex-1 bg-slate-900 border-slate-700 text-white text-xs h-8"
                placeholder="#06b6d4 (deixe vazio para usar gradiente)"
              />
            </div>
            <p className="text-[9px] text-slate-600 mt-1">
              💡 Tem prioridade sobre o gradiente
            </p>
          </div>

          {/* Gradiente */}
          <div>
            <Label className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 block flex items-center justify-between">
              <span>Gradiente CSS</span>
              {hero.backgroundGradient && (
                <button
                  onClick={() => updateHeroValue('backgroundGradient', '')}
                  className="text-[8px] text-red-400 hover:text-red-300 uppercase"
                >
                  Limpar
                </button>
              )}
            </Label>
            <Input
              value={hero.backgroundGradient || ''}
              onChange={(e) => updateHeroValue('backgroundGradient', e.target.value)}
              className="bg-slate-900 border-slate-700 text-white text-xs h-8"
              placeholder="linear-gradient(...)"
            />
            <p className="text-[9px] text-slate-600 mt-1">
              💡 Usado apenas se cor sólida estiver vazia
            </p>
          </div>

          {/* Preview */}
          <div>
            <Label className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 block">
              Preview
            </Label>
            <div
              className="h-16 rounded border border-slate-700 bg-cover bg-center"
              style={{
                backgroundImage: hero.backgroundImage ? `url(${hero.backgroundImage})` : 'none',
                background: hero.backgroundImage 
                  ? `url(${hero.backgroundImage})` 
                  : (hero.backgroundColor && hero.backgroundColor.trim() !== '') 
                    ? hero.backgroundColor 
                    : (hero.backgroundGradient || 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}