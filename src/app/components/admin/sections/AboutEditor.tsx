import { useState } from 'react';
import { BilingualFieldEditor } from '../BilingualFieldEditor';
import { TextAreaFieldEditor } from '../TextAreaFieldEditor';
import { TextFieldEditor } from '../TextFieldEditor';
import { IconSelector } from '../IconSelector';
import { IconStyleEditor } from '../IconStyleEditor';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';
import { Plus, Trash2, GripVertical, ArrowRight } from 'lucide-react';
import type { PortfolioData } from '../../../../lib/storage';
import { useAdmin } from '../../../context/AdminContext';
import { updateDataInstant } from '../../../../lib/storage';

interface AboutEditorProps {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
}

export function AboutEditor({ data, onChange }: AboutEditorProps) {
  const { about, aboutStyles } = data;
  const { scrollToComponent } = useAdmin();
  
  console.log('🎨 AboutEditor renderizou - scrollToComponent:', typeof scrollToComponent);

  const updateAbout = (field: keyof typeof about, value: any) => {
    console.log('💾 AboutEditor - updateAbout:', field, '=', typeof value === 'string' ? value.substring(0, 50) : value);
    const newData = {
      ...data,
      about: { ...about, [field]: value },
    };
    onChange(newData);
    
    // ⚡ Preview instantâneo
    updateDataInstant(newData);
  };

  const updateStyle = (field: keyof typeof aboutStyles, style: any) => {
    console.log('🎨 AboutEditor - updateStyle:', field);
    const newData = {
      ...data,
      aboutStyles: { ...aboutStyles, [field]: style },
    };
    onChange(newData);
    
    // ⚡ Preview instantâneo
    updateDataInstant(newData);
  };

  return (
    <div className="space-y-6 overflow-visible">
      {/* Header */}
      <div className="pb-4 border-b border-cyan-500/20">
        <h2 className="text-xl font-black text-white">Seção Trajetória</h2>
        <p className="text-xs text-slate-500 mt-1">
          ⚡ Edição instantânea • Configure sua trajetória profissional
        </p>
      </div>

      {/* ═══════════════════ TÍTULO DA SEÇÃO ═══════════════════ */}
      <div 
        className="bg-slate-900/30 border border-cyan-500/10 rounded p-4 overflow-visible"
      >
        <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-3 block">
          🎯 Título da Seção
        </Label>
        <div className="space-y-2">
          <BilingualFieldEditor
            valuePt={about.sectionTitle_pt}
            valueEn={about.sectionTitle_en}
            style={aboutStyles.sectionTitle}
            onValuePtChange={(v) => updateAbout('sectionTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('sectionTitle_en', v)}
            onStyleChange={(s) => updateStyle('sectionTitle', s)}
            placeholder="Ex: CONHEÇA MINHA"
            icon={<span className="text-[10px]">T1</span>}
            anchorId="trajetoria-title1"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.sectionTitleContainer}
            effectsStyle={aboutStyles.sectionTitleEffects}
            onContainerChange={(c) => updateStyle('sectionTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('sectionTitleEffects', e)}
          />
          <BilingualFieldEditor
            valuePt={about.sectionTitleHighlight_pt}
            valueEn={about.sectionTitleHighlight_en}
            style={aboutStyles.sectionTitleHighlight}
            onValuePtChange={(v) => updateAbout('sectionTitleHighlight_pt', v)}
            onValueEnChange={(v) => updateAbout('sectionTitleHighlight_en', v)}
            onStyleChange={(s) => updateStyle('sectionTitleHighlight', s)}
            placeholder="Ex: TRAJETÓRIA"
            icon={<span className="text-[10px]">T2</span>}
            anchorId="trajetoria-title2"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.sectionTitleHighlightContainer}
            effectsStyle={aboutStyles.sectionTitleHighlightEffects}
            onContainerChange={(c) => updateStyle('sectionTitleHighlightContainer', c)}
            onEffectsChange={(e) => updateStyle('sectionTitleHighlightEffects', e)}
          />
        </div>
      </div>

      {/* ═══════════════════ SOBRE MIM ═══════════════════ */}
      <div 
        className="bg-slate-900/30 border border-cyan-500/10 rounded p-3"
        data-editing-for="about-text"
      >
        <div className="flex justify-between items-center mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            📝 Sobre Mim
          </Label>
        </div>
        <div className="space-y-2">{/* Título */}
          <BilingualFieldEditor
            valuePt={about.aboutTitle_pt}
            valueEn={about.aboutTitle_en}
            style={aboutStyles.aboutTitle}
            onValuePtChange={(v) => updateAbout('aboutTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('aboutTitle_en', v)}
            onStyleChange={(s) => updateStyle('aboutTitle', s)}
            placeholder="Título da seção Sobre"
            anchorId="about-text"
            onAnchor={scrollToComponent}
            contentColors={aboutStyles.aboutContent}
            elementColors={aboutStyles.aboutCard}
            onContentColorsChange={(colors) => updateStyle('aboutContent', colors)}
            onElementColorsChange={(colors) => updateStyle('aboutCard', colors)}
            containerStyle={aboutStyles.aboutTitleContainer}
            effectsStyle={aboutStyles.aboutTitleEffects}
            onContainerChange={(c) => updateStyle('aboutTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('aboutTitleEffects', e)}
          />
          
          {/* Texto PT */}
          <TextAreaFieldEditor
            value={about.aboutText_pt}
            label="Texto PT"
            style={aboutStyles.aboutText}
            onValueChange={(v) => updateAbout('aboutText_pt', v)}
            onStyleChange={(s) => updateStyle('aboutText', s)}
            placeholder="Descrição em português..."
            anchorId="about-text-content"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.aboutTextContainer}
            effectsStyle={aboutStyles.aboutTextEffects}
            onContainerChange={(c) => updateStyle('aboutTextContainer', c)}
            onEffectsChange={(e) => updateStyle('aboutTextEffects', e)}
          />

          {/* Texto EN */}
          <TextAreaFieldEditor
            value={about.aboutText_en}
            label="Texto EN"
            style={aboutStyles.aboutText}
            onValueChange={(v) => updateAbout('aboutText_en', v)}
            onStyleChange={(s) => updateStyle('aboutText', s)}
            placeholder="Description in English..."
            anchorId="about-text-content"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.aboutTextContainer}
            effectsStyle={aboutStyles.aboutTextEffects}
            onContainerChange={(c) => updateStyle('aboutTextContainer', c)}
            onEffectsChange={(e) => updateStyle('aboutTextEffects', e)}
          />
        </div>
      </div>

      {/* ═══════════════════ FORMAÇÃO ══════════════════ */}
      <div 
        className="bg-slate-900/30 border border-cyan-500/10 rounded p-4"
        data-editing-for="about-education"
      >
        <div className="flex items-center justify-between mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            🎓 Formação
          </Label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToComponent('about-education')}
              className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
              title="Ir para o componente no preview"
            >
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                const newItem = {
                  id: Date.now().toString(),
                  degree_pt: '',
                  degree_en: '',
                  institution: '',
                  year: '',
                };
                updateAbout('educationItems', [...about.educationItems, newItem]);
              }}
              className="h-6 px-2 text-[10px] bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
            >
              <Plus className="w-3 h-3 mr-1" />
              Adicionar
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {/* Título */}
          <BilingualFieldEditor
            valuePt={about.educationTitle_pt}
            valueEn={about.educationTitle_en}
            style={aboutStyles.educationTitle}
            onValuePtChange={(v) => updateAbout('educationTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('educationTitle_en', v)}
            onStyleChange={(s) => updateStyle('educationTitle', s)}
            placeholder="Ex: FORMAÇÃO"
            anchorId="about-education"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.educationTitleContainer}
            effectsStyle={aboutStyles.educationTitleEffects}
            onContainerChange={(c) => updateStyle('educationTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('educationTitleEffects', e)}
          />

          {/* Itens */}
          {about.educationItems.map((item, index) => (
            <div key={item.id} className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-4 h-4 text-slate-600" />
                  <span className="text-[10px] font-bold text-cyan-400">#{index + 1}</span>
                </div>
                <Button
                  onClick={() => {
                    updateAbout(
                      'educationItems',
                      about.educationItems.filter((_, i) => i !== index)
                    );
                  }}
                  className="h-6 px-2 text-[10px] bg-red-500/10 hover:bg-red-500/20 text-red-400"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>

              <BilingualFieldEditor
                valuePt={item.degree_pt}
                valueEn={item.degree_en}
                style={aboutStyles.educationDegree}
                onValuePtChange={(v) => {
                  const updated = [...about.educationItems];
                  updated[index] = { ...item, degree_pt: v };
                  updateAbout('educationItems', updated);
                }}
                onValueEnChange={(v) => {
                  const updated = [...about.educationItems];
                  updated[index] = { ...item, degree_en: v };
                  updateAbout('educationItems', updated);
                }}
                onStyleChange={(s) => updateStyle('educationDegree', s)}
                placeholder="Ex: Mestrado / Master's"
                anchorId="about-education"
                onAnchor={scrollToComponent}
                containerStyle={aboutStyles.educationDegreeContainer}
                effectsStyle={aboutStyles.educationDegreeEffects}
                onContainerChange={(c) => updateStyle('educationDegreeContainer', c)}
                onEffectsChange={(e) => updateStyle('educationDegreeEffects', e)}
              />

              <TextFieldEditor
                value={item.institution}
                style={aboutStyles.educationInstitution}
                onValueChange={(v) => {
                  const updated = [...about.educationItems];
                  updated[index] = { ...item, institution: v };
                  updateAbout('educationItems', updated);
                }}
                onStyleChange={(s) => updateStyle('educationInstitution', s)}
                placeholder="Instituição"
                anchorId="about-education"
                onAnchor={scrollToComponent}
                containerStyle={aboutStyles.educationInstitutionContainer}
                effectsStyle={aboutStyles.educationInstitutionEffects}
                onContainerChange={(c) => updateStyle('educationInstitutionContainer', c)}
                onEffectsChange={(e) => updateStyle('educationInstitutionEffects', e)}
              />

              <TextFieldEditor
                value={item.year}
                style={aboutStyles.educationPeriod}
                onValueChange={(v) => {
                  const updated = [...about.educationItems];
                  updated[index] = { ...item, year: v };
                  updateAbout('educationItems', updated);
                }}
                onStyleChange={(s) => updateStyle('educationPeriod', s)}
                placeholder="Ano"
                anchorId="about-education"
                onAnchor={scrollToComponent}
                containerStyle={aboutStyles.educationPeriodContainer}
                effectsStyle={aboutStyles.educationPeriodEffects}
                onContainerChange={(c) => updateStyle('educationPeriodContainer', c)}
                onEffectsChange={(e) => updateStyle('educationPeriodEffects', e)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════ IDIOMAS ═══════════════════ */}
      <div 
        className="bg-slate-900/30 border border-cyan-500/10 rounded p-4"
        data-editing-for="about-languages"
      >
        <div className="flex items-center justify-between mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            🌍 Idiomas
          </Label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToComponent('about-languages')}
              className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
              title="Ir para o componente no preview"
            >
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                const newItem = {
                  id: Date.now().toString(),
                  flag: '🇧🇷',
                  name_pt: '',
                  name_en: '',
                  level_pt: '',
                  level_en: '',
                };
                updateAbout('languageItems', [...about.languageItems, newItem]);
              }}
              className="h-6 px-2 text-[10px] bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
            >
              <Plus className="w-3 h-3 mr-1" />
              Adicionar
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <BilingualFieldEditor
            valuePt={about.languagesTitle_pt}
            valueEn={about.languagesTitle_en}
            style={aboutStyles.languagesTitle}
            onValuePtChange={(v) => updateAbout('languagesTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('languagesTitle_en', v)}
            onStyleChange={(s) => updateStyle('languagesTitle', s)}
            placeholder="Ex: IDIOMAS / LANGUAGES"
            anchorId="about-languages"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.languagesTitleContainer}
            effectsStyle={aboutStyles.languagesTitleEffects}
            onContainerChange={(c) => updateStyle('languagesTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('languagesTitleEffects', e)}
          />

          {about.languageItems.map((item, index) => (
            <div key={item.id} className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-4 h-4 text-slate-600" />
                  <span className="text-[10px] font-bold text-cyan-400">#{index + 1}</span>
                </div>
                <Button
                  onClick={() => {
                    updateAbout(
                      'languageItems',
                      about.languageItems.filter((_, i) => i !== index)
                    );
                  }}
                  className="h-6 px-2 text-[10px] bg-red-500/10 hover:bg-red-500/20 text-red-400"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>

              <TextFieldEditor
                value={item.flag}
                style={aboutStyles.languageFlag}
                onValueChange={(v) => {
                  const updated = [...about.languageItems];
                  updated[index] = { ...item, flag: v };
                  updateAbout('languageItems', updated);
                }}
                onStyleChange={(s) => updateStyle('languageFlag', s)}
                placeholder="Emoji da bandeira (ex: 🇧🇷)"
                anchorId="about-languages"
                onAnchor={scrollToComponent}
                containerStyle={aboutStyles.languageFlagContainer}
                effectsStyle={aboutStyles.languageFlagEffects}
                onContainerChange={(c) => updateStyle('languageFlagContainer', c)}
                onEffectsChange={(e) => updateStyle('languageFlagEffects', e)}
              />

              <BilingualFieldEditor
                valuePt={item.name_pt}
                valueEn={item.name_en}
                style={aboutStyles.languageName}
                onValuePtChange={(v) => {
                  const updated = [...about.languageItems];
                  updated[index] = { ...item, name_pt: v };
                  updateAbout('languageItems', updated);
                }}
                onValueEnChange={(v) => {
                  const updated = [...about.languageItems];
                  updated[index] = { ...item, name_en: v };
                  updateAbout('languageItems', updated);
                }}
                onStyleChange={(s) => updateStyle('languageName', s)}
                placeholder="Nome do idioma"
                anchorId="about-languages"
                onAnchor={scrollToComponent}
                containerStyle={aboutStyles.languageNameContainer}
                effectsStyle={aboutStyles.languageNameEffects}
                onContainerChange={(c) => updateStyle('languageNameContainer', c)}
                onEffectsChange={(e) => updateStyle('languageNameEffects', e)}
              />

              <BilingualFieldEditor
                valuePt={item.level_pt}
                valueEn={item.level_en}
                style={aboutStyles.languageLevel}
                onValuePtChange={(v) => {
                  const updated = [...about.languageItems];
                  updated[index] = { ...item, level_pt: v };
                  updateAbout('languageItems', updated);
                }}
                onValueEnChange={(v) => {
                  const updated = [...about.languageItems];
                  updated[index] = { ...item, level_en: v };
                  updateAbout('languageItems', updated);
                }}
                onStyleChange={(s) => updateStyle('languageLevel', s)}
                placeholder="Nível (ex: Fluente / Fluent)"
                anchorId="about-languages"
                onAnchor={scrollToComponent}
                containerStyle={aboutStyles.languageLevelContainer}
                effectsStyle={aboutStyles.languageLevelEffects}
                onContainerChange={(c) => updateStyle('languageLevelContainer', c)}
                onEffectsChange={(e) => updateStyle('languageLevelEffects', e)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════ COMPETÊNCIAS ═══════════════════ */}
      <div 
        className="bg-slate-900/30 border border-cyan-500/10 rounded p-4"
        data-editing-for="about-skills"
      >
        <div className="flex items-center justify-between mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            💡 Competências
          </Label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToComponent('about-skills')}
              className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
              title="Ir para o componente no preview"
            >
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                updateAbout('skillItems_pt', [...about.skillItems_pt, '']);
                updateAbout('skillItems_en', [...about.skillItems_en, '']);
              }}
              className="h-6 px-2 text-[10px] bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
            >
              <Plus className="w-3 h-3 mr-1" />
              Adicionar
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <BilingualFieldEditor
            valuePt={about.skillsTitle_pt}
            valueEn={about.skillsTitle_en}
            style={aboutStyles.skillsTitle}
            onValuePtChange={(v) => updateAbout('skillsTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('skillsTitle_en', v)}
            onStyleChange={(s) => updateStyle('skillsTitle', s)}
            placeholder="Ex: COMPETÊNCIAS / SKILLS"
            anchorId="about-skills"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.skillsTitleContainer}
            effectsStyle={aboutStyles.skillsTitleEffects}
            onContainerChange={(c) => updateStyle('skillsTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('skillsTitleEffects', e)}
          />

          {about.skillItems_pt.map((skill, index) => (
            <div key={index} className="flex gap-2 group">
              <div className="flex-1 space-y-2">
                <TextFieldEditor
                  value={about.skillItems_pt[index]}
                  style={aboutStyles.skillName}
                  onValueChange={(v) => {
                    const updated = [...about.skillItems_pt];
                    updated[index] = v;
                    updateAbout('skillItems_pt', updated);
                  }}
                  onStyleChange={(s) => updateStyle('skillName', s)}
                  placeholder="Nome da competência (PT)"
                  anchorId="about-skills"
                  onAnchor={scrollToComponent}
                  containerStyle={aboutStyles.skillNameContainer}
                  effectsStyle={aboutStyles.skillNameEffects}
                  onContainerChange={(c) => updateStyle('skillNameContainer', c)}
                  onEffectsChange={(e) => updateStyle('skillNameEffects', e)}
                />
                <TextFieldEditor
                  value={about.skillItems_en[index]}
                  style={aboutStyles.skillName}
                  onValueChange={(v) => {
                    const updated = [...about.skillItems_en];
                    updated[index] = v;
                    updateAbout('skillItems_en', updated);
                  }}
                  onStyleChange={(s) => updateStyle('skillName', s)}
                  placeholder="Skill name (EN)"
                  anchorId="about-skills"
                  onAnchor={scrollToComponent}
                  containerStyle={aboutStyles.skillNameContainer}
                  effectsStyle={aboutStyles.skillNameEffects}
                  onContainerChange={(c) => updateStyle('skillNameContainer', c)}
                  onEffectsChange={(e) => updateStyle('skillNameEffects', e)}
                />
              </div>
              <Button
                onClick={() => {
                  updateAbout('skillItems_pt', about.skillItems_pt.filter((_, i) => i !== index));
                  updateAbout('skillItems_en', about.skillItems_en.filter((_, i) => i !== index));
                }}
                className="h-7 px-2 text-[10px] bg-red-500/10 hover:bg-red-500/20 text-red-400"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════ CERTIFICAÇÕES ═══════════════════ */}
      <div 
        className="bg-slate-900/30 border border-cyan-500/10 rounded p-4"
        data-editing-for="about-certifications"
      >
        <div className="flex items-center justify-between mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            📜 Certificações
          </Label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToComponent('about-certifications')}
              className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
              title="Ir para o componente no preview"
            >
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                const newItem = {
                  id: Date.now().toString(),
                  name_pt: '',
                  name_en: '',
                };
                updateAbout('certificationItems', [...about.certificationItems, newItem]);
              }}
              className="h-6 px-2 text-[10px] bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
            >
              <Plus className="w-3 h-3 mr-1" />
              Adicionar
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <BilingualFieldEditor
            valuePt={about.certificationsTitle_pt}
            valueEn={about.certificationsTitle_en}
            style={aboutStyles.certificationsTitle}
            onValuePtChange={(v) => updateAbout('certificationsTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('certificationsTitle_en', v)}
            onStyleChange={(s) => updateStyle('certificationsTitle', s)}
            placeholder="Ex: CERTIFICAÇÕES / CERTIFICATIONS"
            anchorId="about-certifications"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.certificationsTitleContainer}
            effectsStyle={aboutStyles.certificationsTitleEffects}
            onContainerChange={(c) => updateStyle('certificationsTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('certificationsTitleEffects', e)}
          />

          {about.certificationItems.map((cert, index) => (
            <div key={cert.id} className="flex gap-2 group">
              <div className="flex-1 space-y-2">
                <TextFieldEditor
                  value={cert.name_pt}
                  style={aboutStyles.certificationName}
                  onValueChange={(v) => {
                    const updated = [...about.certificationItems];
                    updated[index] = { ...cert, name_pt: v };
                    updateAbout('certificationItems', updated);
                  }}
                  onStyleChange={(s) => updateStyle('certificationName', s)}
                  placeholder="Nome da certificação (PT)"
                  anchorId="about-certifications"
                  onAnchor={scrollToComponent}
                  containerStyle={aboutStyles.certificationNameContainer}
                  effectsStyle={aboutStyles.certificationNameEffects}
                  onContainerChange={(c) => updateStyle('certificationNameContainer', c)}
                  onEffectsChange={(e) => updateStyle('certificationNameEffects', e)}
                />
                <TextFieldEditor
                  value={cert.name_en}
                  style={aboutStyles.certificationName}
                  onValueChange={(v) => {
                    const updated = [...about.certificationItems];
                    updated[index] = { ...cert, name_en: v };
                    updateAbout('certificationItems', updated);
                  }}
                  onStyleChange={(s) => updateStyle('certificationName', s)}
                  placeholder="Certification name (EN)"
                  anchorId="about-certifications"
                  onAnchor={scrollToComponent}
                  containerStyle={aboutStyles.certificationNameContainer}
                  effectsStyle={aboutStyles.certificationNameEffects}
                  onContainerChange={(c) => updateStyle('certificationNameContainer', c)}
                  onEffectsChange={(e) => updateStyle('certificationNameEffects', e)}
                />
              </div>
              <Button
                onClick={() => {
                  updateAbout(
                    'certificationItems',
                    about.certificationItems.filter((_, i) => i !== index)
                  );
                }}
                className="h-7 px-2 text-[10px] bg-red-500/10 hover:bg-red-500/20 text-red-400"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════ 4 PILARES ═══════════════════ */}
      <div className="bg-slate-900/30 border border-cyan-500/10 rounded p-4">
        <div className="flex items-center justify-between mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            🎯 4 Pilares (Grid 2x2)
          </Label>
        </div>

        {/* GRID 2x2 */}
        <div className="grid grid-cols-2 gap-3">
          {/* PILAR 1 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">PILAR 1</span>
              <button
                onClick={() => scrollToComponent('about-pilar-1')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <IconSelector
              value={about.pilarsIcon1 || 'Target'}
              onChange={(iconName) => updateAbout('pilarsIcon1', iconName)}
              label="Ícone"
            />

            <IconStyleEditor
              iconStyle={aboutStyles.pilarIcon}
              containerStyle={aboutStyles.pilarIconContainer}
              effectsStyle={aboutStyles.pilarIconEffects}
              onIconStyleChange={(s) => updateStyle('pilarIcon', s)}
              onContainerChange={(c) => updateStyle('pilarIconContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarIconEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.pilar1Title_pt}
              valueEn={about.pilar1Title_en}
              style={aboutStyles.pilarTitle}
              onValuePtChange={(v) => updateAbout('pilar1Title_pt', v)}
              onValueEnChange={(v) => updateAbout('pilar1Title_en', v)}
              onStyleChange={(s) => updateStyle('pilarTitle', s)}
              placeholder="Título do pilar"
              anchorId="about-pilar-1"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.pilarTitleContainer}
              effectsStyle={aboutStyles.pilarTitleEffects}
              onContainerChange={(c) => updateStyle('pilarTitleContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarTitleEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.pilar1Desc_pt}
              valueEn={about.pilar1Desc_en}
              style={aboutStyles.pilarDesc}
              onValuePtChange={(v) => updateAbout('pilar1Desc_pt', v)}
              onValueEnChange={(v) => updateAbout('pilar1Desc_en', v)}
              onStyleChange={(s) => updateStyle('pilarDesc', s)}
              placeholder="Descrição do pilar"
              anchorId="about-pilar-1"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.pilarDescContainer}
              effectsStyle={aboutStyles.pilarDescEffects}
              onContainerChange={(c) => updateStyle('pilarDescContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarDescEffects', e)}
            />
          </div>

          {/* PILAR 2 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">PILAR 2</span>
              <button
                onClick={() => scrollToComponent('about-pilar-2')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <IconSelector
              value={about.pilarsIcon2 || 'BarChart3'}
              onChange={(iconName) => updateAbout('pilarsIcon2', iconName)}
              label="Ícone"
            />

            <IconStyleEditor
              iconStyle={aboutStyles.pilarIcon}
              containerStyle={aboutStyles.pilarIconContainer}
              effectsStyle={aboutStyles.pilarIconEffects}
              onIconStyleChange={(s) => updateStyle('pilarIcon', s)}
              onContainerChange={(c) => updateStyle('pilarIconContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarIconEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.pilar2Title_pt}
              valueEn={about.pilar2Title_en}
              style={aboutStyles.pilarTitle}
              onValuePtChange={(v) => updateAbout('pilar2Title_pt', v)}
              onValueEnChange={(v) => updateAbout('pilar2Title_en', v)}
              onStyleChange={(s) => updateStyle('pilarTitle', s)}
              placeholder="Título do pilar"
              anchorId="about-pilar-2"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.pilarTitleContainer}
              effectsStyle={aboutStyles.pilarTitleEffects}
              onContainerChange={(c) => updateStyle('pilarTitleContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarTitleEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.pilar2Desc_pt}
              valueEn={about.pilar2Desc_en}
              style={aboutStyles.pilarDesc}
              onValuePtChange={(v) => updateAbout('pilar2Desc_pt', v)}
              onValueEnChange={(v) => updateAbout('pilar2Desc_en', v)}
              onStyleChange={(s) => updateStyle('pilarDesc', s)}
              placeholder="Descrição do pilar"
              anchorId="about-pilar-2"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.pilarDescContainer}
              effectsStyle={aboutStyles.pilarDescEffects}
              onContainerChange={(c) => updateStyle('pilarDescContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarDescEffects', e)}
            />
          </div>

          {/* PILAR 3 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">PILAR 3</span>
              <button
                onClick={() => scrollToComponent('about-pilar-3')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <IconSelector
              value={about.pilarsIcon3 || 'Rocket'}
              onChange={(iconName) => updateAbout('pilarsIcon3', iconName)}
              label="Ícone"
            />

            <IconStyleEditor
              iconStyle={aboutStyles.pilarIcon}
              containerStyle={aboutStyles.pilarIconContainer}
              effectsStyle={aboutStyles.pilarIconEffects}
              onIconStyleChange={(s) => updateStyle('pilarIcon', s)}
              onContainerChange={(c) => updateStyle('pilarIconContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarIconEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.pilar3Title_pt}
              valueEn={about.pilar3Title_en}
              style={aboutStyles.pilarTitle}
              onValuePtChange={(v) => updateAbout('pilar3Title_pt', v)}
              onValueEnChange={(v) => updateAbout('pilar3Title_en', v)}
              onStyleChange={(s) => updateStyle('pilarTitle', s)}
              placeholder="Título do pilar"
              anchorId="about-pilar-3"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.pilarTitleContainer}
              effectsStyle={aboutStyles.pilarTitleEffects}
              onContainerChange={(c) => updateStyle('pilarTitleContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarTitleEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.pilar3Desc_pt}
              valueEn={about.pilar3Desc_en}
              style={aboutStyles.pilarDesc}
              onValuePtChange={(v) => updateAbout('pilar3Desc_pt', v)}
              onValueEnChange={(v) => updateAbout('pilar3Desc_en', v)}
              onStyleChange={(s) => updateStyle('pilarDesc', s)}
              placeholder="Descrição do pilar"
              anchorId="about-pilar-3"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.pilarDescContainer}
              effectsStyle={aboutStyles.pilarDescEffects}
              onContainerChange={(c) => updateStyle('pilarDescContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarDescEffects', e)}
            />
          </div>

          {/* PILAR 4 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">PILAR 4</span>
              <button
                onClick={() => scrollToComponent('about-pilar-4')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <IconSelector
              value={about.pilarsIcon4 || 'Users'}
              onChange={(iconName) => updateAbout('pilarsIcon4', iconName)}
              label="Ícone"
            />

            <IconStyleEditor
              iconStyle={aboutStyles.pilarIcon}
              containerStyle={aboutStyles.pilarIconContainer}
              effectsStyle={aboutStyles.pilarIconEffects}
              onIconStyleChange={(s) => updateStyle('pilarIcon', s)}
              onContainerChange={(c) => updateStyle('pilarIconContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarIconEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.pilar4Title_pt}
              valueEn={about.pilar4Title_en}
              style={aboutStyles.pilarTitle}
              onValuePtChange={(v) => updateAbout('pilar4Title_pt', v)}
              onValueEnChange={(v) => updateAbout('pilar4Title_en', v)}
              onStyleChange={(s) => updateStyle('pilarTitle', s)}
              placeholder="Título do pilar"
              anchorId="about-pilar-4"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.pilarTitleContainer}
              effectsStyle={aboutStyles.pilarTitleEffects}
              onContainerChange={(c) => updateStyle('pilarTitleContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarTitleEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.pilar4Desc_pt}
              valueEn={about.pilar4Desc_en}
              style={aboutStyles.pilarDesc}
              onValuePtChange={(v) => updateAbout('pilar4Desc_pt', v)}
              onValueEnChange={(v) => updateAbout('pilar4Desc_en', v)}
              onStyleChange={(s) => updateStyle('pilarDesc', s)}
              placeholder="Descrição do pilar"
              anchorId="about-pilar-4"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.pilarDescContainer}
              effectsStyle={aboutStyles.pilarDescEffects}
              onContainerChange={(c) => updateStyle('pilarDescContainer', c)}
              onEffectsChange={(e) => updateStyle('pilarDescEffects', e)}
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════ BIG NUMBERS ═══════════════════ */}
      <div className="bg-slate-900/30 border border-cyan-500/10 rounded p-4">
        <div className="flex items-center justify-between mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            📊 Big Numbers
          </Label>
        </div>

        <div className="space-y-3">
          {/* Título */}
          <BilingualFieldEditor
            valuePt={about.bigNumbersTitle_pt}
            valueEn={about.bigNumbersTitle_en}
            style={aboutStyles.bigNumbersTitle}
            onValuePtChange={(v) => updateAbout('bigNumbersTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('bigNumbersTitle_en', v)}
            onStyleChange={(s) => updateStyle('bigNumbersTitle', s)}
            placeholder="Ex: NÚMEROS / NUMBERS"
            anchorId="about-bignumbers"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.bigNumbersTitleContainer}
            effectsStyle={aboutStyles.bigNumbersTitleEffects}
            onContainerChange={(c) => updateStyle('bigNumbersTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('bigNumbersTitleEffects', e)}
          />

          {/* Big Number 1 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">BIG NUMBER 1</span>
              <button
                onClick={() => scrollToComponent('about-bignumbers')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <TextFieldEditor
              value={about.bigNumber1Value}
              style={aboutStyles.bigNumberValue}
              onValueChange={(v) => updateAbout('bigNumber1Value', v)}
              onStyleChange={(s) => updateStyle('bigNumberValue', s)}
              placeholder="Valor (ex: 100+)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberValueContainer}
              effectsStyle={aboutStyles.bigNumberValueEffects}
              onContainerChange={(c) => updateStyle('bigNumberValueContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberValueEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.bigNumber1Label_pt}
              valueEn={about.bigNumber1Label_en}
              style={aboutStyles.bigNumberLabel}
              onValuePtChange={(v) => updateAbout('bigNumber1Label_pt', v)}
              onValueEnChange={(v) => updateAbout('bigNumber1Label_en', v)}
              onStyleChange={(s) => updateStyle('bigNumberLabel', s)}
              placeholder="Label (ex: Projetos / Projects)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberLabelContainer}
              effectsStyle={aboutStyles.bigNumberLabelEffects}
              onContainerChange={(c) => updateStyle('bigNumberLabelContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberLabelEffects', e)}
            />
          </div>

          {/* Big Number 2 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">BIG NUMBER 2</span>
              <button
                onClick={() => scrollToComponent('about-bignumbers')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <TextFieldEditor
              value={about.bigNumber2Value}
              style={aboutStyles.bigNumberValue}
              onValueChange={(v) => updateAbout('bigNumber2Value', v)}
              onStyleChange={(s) => updateStyle('bigNumberValue', s)}
              placeholder="Valor (ex: 5+)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberValueContainer}
              effectsStyle={aboutStyles.bigNumberValueEffects}
              onContainerChange={(c) => updateStyle('bigNumberValueContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberValueEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.bigNumber2Label_pt}
              valueEn={about.bigNumber2Label_en}
              style={aboutStyles.bigNumberLabel}
              onValuePtChange={(v) => updateAbout('bigNumber2Label_pt', v)}
              onValueEnChange={(v) => updateAbout('bigNumber2Label_en', v)}
              onStyleChange={(s) => updateStyle('bigNumberLabel', s)}
              placeholder="Label (ex: Anos / Years)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberLabelContainer}
              effectsStyle={aboutStyles.bigNumberLabelEffects}
              onContainerChange={(c) => updateStyle('bigNumberLabelContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberLabelEffects', e)}
            />
          </div>

          {/* Big Number 3 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">BIG NUMBER 3</span>
              <button
                onClick={() => scrollToComponent('about-bignumbers')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <TextFieldEditor
              value={about.bigNumber3Value}
              style={aboutStyles.bigNumberValue}
              onValueChange={(v) => updateAbout('bigNumber3Value', v)}
              onStyleChange={(s) => updateStyle('bigNumberValue', s)}
              placeholder="Valor (ex: 50+)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberValueContainer}
              effectsStyle={aboutStyles.bigNumberValueEffects}
              onContainerChange={(c) => updateStyle('bigNumberValueContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberValueEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.bigNumber3Label_pt}
              valueEn={about.bigNumber3Label_en}
              style={aboutStyles.bigNumberLabel}
              onValuePtChange={(v) => updateAbout('bigNumber3Label_pt', v)}
              onValueEnChange={(v) => updateAbout('bigNumber3Label_en', v)}
              onStyleChange={(s) => updateStyle('bigNumberLabel', s)}
              placeholder="Label (ex: Clientes / Clients)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberLabelContainer}
              effectsStyle={aboutStyles.bigNumberLabelEffects}
              onContainerChange={(c) => updateStyle('bigNumberLabelContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberLabelEffects', e)}
            />
          </div>

          {/* Big Number 4 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">BIG NUMBER 4</span>
              <button
                onClick={() => scrollToComponent('about-bignumbers')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <TextFieldEditor
              value={about.bigNumber4Value}
              style={aboutStyles.bigNumberValue}
              onValueChange={(v) => updateAbout('bigNumber4Value', v)}
              onStyleChange={(s) => updateStyle('bigNumberValue', s)}
              placeholder="Valor (ex: 1000+)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberValueContainer}
              effectsStyle={aboutStyles.bigNumberValueEffects}
              onContainerChange={(c) => updateStyle('bigNumberValueContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberValueEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.bigNumber4Label_pt}
              valueEn={about.bigNumber4Label_en}
              style={aboutStyles.bigNumberLabel}
              onValuePtChange={(v) => updateAbout('bigNumber4Label_pt', v)}
              onValueEnChange={(v) => updateAbout('bigNumber4Label_en', v)}
              onStyleChange={(s) => updateStyle('bigNumberLabel', s)}
              placeholder="Label (ex: Horas / Hours)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberLabelContainer}
              effectsStyle={aboutStyles.bigNumberLabelEffects}
              onContainerChange={(c) => updateStyle('bigNumberLabelContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberLabelEffects', e)}
            />
          </div>

          {/* Big Number 5 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400">BIG NUMBER 5</span>
              <button
                onClick={() => scrollToComponent('about-bignumbers')}
                className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors"
                title="Ir para o componente no preview"
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <TextFieldEditor
              value={about.bigNumber5Value}
              style={aboutStyles.bigNumberValue}
              onValueChange={(v) => updateAbout('bigNumber5Value', v)}
              onStyleChange={(s) => updateStyle('bigNumberValue', s)}
              placeholder="Valor (ex: 99%)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberValueContainer}
              effectsStyle={aboutStyles.bigNumberValueEffects}
              onContainerChange={(c) => updateStyle('bigNumberValueContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberValueEffects', e)}
            />

            <BilingualFieldEditor
              valuePt={about.bigNumber5Label_pt}
              valueEn={about.bigNumber5Label_en}
              style={aboutStyles.bigNumberLabel}
              onValuePtChange={(v) => updateAbout('bigNumber5Label_pt', v)}
              onValueEnChange={(v) => updateAbout('bigNumber5Label_en', v)}
              onStyleChange={(s) => updateStyle('bigNumberLabel', s)}
              placeholder="Label (ex: Satisfação / Satisfaction)"
              anchorId="about-bignumbers"
              onAnchor={scrollToComponent}
              containerStyle={aboutStyles.bigNumberLabelContainer}
              effectsStyle={aboutStyles.bigNumberLabelEffects}
              onContainerChange={(c) => updateStyle('bigNumberLabelContainer', c)}
              onEffectsChange={(e) => updateStyle('bigNumberLabelEffects', e)}
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════ TIMELINE ═══════════════════ */}
      <div className="bg-slate-900/30 border border-cyan-500/10 rounded p-4">
        <div className="flex items-center justify-between mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            ⏱️ Timeline
          </Label>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              const newItem = {
                id: Date.now().toString(),
                date: '',
                company: '',
              };
              updateAbout('timelineItems', [...about.timelineItems, newItem]);
            }}
            className="h-6 px-2 text-[10px] bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
          >
            <Plus className="w-3 h-3 mr-1" />
            Adicionar
          </Button>
        </div>

        <div className="space-y-3">
          {/* Título */}
          <BilingualFieldEditor
            valuePt={about.timelineTitle_pt}
            valueEn={about.timelineTitle_en}
            style={aboutStyles.timelineTitle}
            onValuePtChange={(v) => updateAbout('timelineTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('timelineTitle_en', v)}
            onStyleChange={(s) => updateStyle('timelineTitle', s)}
            placeholder="Ex: TRAJETÓRIA / TIMELINE"
            anchorId="about-timeline"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.timelineTitleContainer}
            effectsStyle={aboutStyles.timelineTitleEffects}
            onContainerChange={(c) => updateStyle('timelineTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('timelineTitleEffects', e)}
          />

          {/* Itens */}
          {about.timelineItems.map((item, index) => (
            <div key={item.id} className="bg-slate-800/50 border border-slate-700 rounded p-3 space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-4 h-4 text-slate-600" />
                  <span className="text-[10px] font-bold text-cyan-400">#{index + 1}</span>
                </div>
                <Button
                  onClick={() => {
                    updateAbout(
                      'timelineItems',
                      about.timelineItems.filter((_, i) => i !== index)
                    );
                  }}
                  className="h-6 px-2 text-[10px] bg-red-500/10 hover:bg-red-500/20 text-red-400"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>

              <TextFieldEditor
                value={item.date}
                style={aboutStyles.timelineDate}
                onValueChange={(v) => {
                  const updated = [...about.timelineItems];
                  updated[index] = { ...item, date: v };
                  updateAbout('timelineItems', updated);
                }}
                onStyleChange={(s) => updateStyle('timelineDate', s)}
                placeholder="Data (ex: 2020-2023)"
                anchorId="about-timeline"
                onAnchor={scrollToComponent}
                containerStyle={aboutStyles.timelineDateContainer}
                effectsStyle={aboutStyles.timelineDateEffects}
                onContainerChange={(c) => updateStyle('timelineDateContainer', c)}
                onEffectsChange={(e) => updateStyle('timelineDateEffects', e)}
              />

              <TextFieldEditor
                value={item.company}
                style={aboutStyles.timelineCompany}
                onValueChange={(v) => {
                  const updated = [...about.timelineItems];
                  updated[index] = { ...item, company: v };
                  updateAbout('timelineItems', updated);
                }}
                onStyleChange={(s) => updateStyle('timelineCompany', s)}
                placeholder="Empresa/Função"
                anchorId="about-timeline"
                onAnchor={scrollToComponent}
                containerStyle={aboutStyles.timelineCompanyContainer}
                effectsStyle={aboutStyles.timelineCompanyEffects}
                onContainerChange={(c) => updateStyle('timelineCompanyContainer', c)}
                onEffectsChange={(e) => updateStyle('timelineCompanyEffects', e)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════ CASES DE SUCESSO ═══════════════════ */}
      <div className="bg-slate-900/30 border border-cyan-500/10 rounded p-4">
        <div className="flex items-center justify-between mb-3">
          <Label className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
            💼 Cases de Sucesso
          </Label>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              const newCase = {
                id: Date.now().toString(),
                icon: '🚀',
                color: 'cyan' as const,
                image: '',
                title_pt: '',
                title_en: '',
                company: '',
                challenge_pt: '',
                challenge_en: '',
                solution_pt: '',
                solution_en: '',
                metric1: '',
                metric1Label_pt: '',
                metric1Label_en: '',
                metric2: '',
                metric2Label_pt: '',
                metric2Label_en: '',
                metric3: '',
                metric3Label_pt: '',
                metric3Label_en: '',
                finalImpact_pt: '',
                finalImpact_en: '',
              };
              updateAbout('caseItems', [...about.caseItems, newCase]);
            }}
            className="h-6 px-2 text-[10px] bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
          >
            <Plus className="w-3 h-3 mr-1" />
            Adicionar Case
          </Button>
        </div>

        <div className="space-y-3">
          {/* Título */}
          <BilingualFieldEditor
            valuePt={about.casesTitle_pt}
            valueEn={about.casesTitle_en}
            style={aboutStyles.casesTitle}
            onValuePtChange={(v) => updateAbout('casesTitle_pt', v)}
            onValueEnChange={(v) => updateAbout('casesTitle_en', v)}
            onStyleChange={(s) => updateStyle('casesTitle', s)}
            placeholder="Ex: CASES / SUCCESS STORIES"
            anchorId="about-cases"
            onAnchor={scrollToComponent}
            containerStyle={aboutStyles.casesTitleContainer}
            effectsStyle={aboutStyles.casesTitleEffects}
            onContainerChange={(c) => updateStyle('casesTitleContainer', c)}
            onEffectsChange={(e) => updateStyle('casesTitleEffects', e)}
          />

          {/* Cases - Por enquanto apenas indicação */}
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded text-center">
            <p className="text-cyan-400 text-xs font-bold mb-1">
              📋 {about.caseItems.length} cases cadastrados
            </p>
            <p className="text-slate-500 text-[10px]">
              Editor completo de cases em desenvolvimento (muitos campos)
            </p>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded text-center">
        <p className="text-cyan-400 text-xs font-bold mb-1">
          ✅ Pilares (Grid 2x2 + IconSelector), Big Numbers e Timeline completos!
        </p>
        <p className="text-slate-500 text-[10px]">
          Faltam: Big Numbers dinâmico (add/remove), âncoras, Cases completo
        </p>
      </div>
    </div>
  );
}