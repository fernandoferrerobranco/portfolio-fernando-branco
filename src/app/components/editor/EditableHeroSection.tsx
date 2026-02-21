import { useState } from 'react';
import { MapPin, Mail } from 'lucide-react';
import { Language, translations } from '../../data/translations';
import { useEditor } from '../../contexts/EditorContext';
import { EditableWrapper } from './EditableWrapper';
import { EditorModal } from './EditorModal';

interface EditableHeroSectionProps {
  language: Language;
}

export function EditableHeroSection({ language }: EditableHeroSectionProps) {
  const { portfolioData, updateData } = useEditor();
  const t = translations[language].hero;
  const [isEditingHero, setIsEditingHero] = useState(false);

  // Usar dados do editor ou fallback para tradução
  const heroData = portfolioData.hero || {
    badge: t.badge,
    title1: t.title1,
    title2: t.title2,
    title3: t.title3,
    title4: t.title4,
    title5: t.title5,
    location: t.location,
    email: 'fernando@g2g.org.br',
    cardName: t.cardName,
    cardRole: t.cardRole,
  };

  const heroFields = [
    { name: 'badge', label: 'Badge/Etiqueta', type: 'text' as const, placeholder: 'Sênior Operations Leader' },
    { name: 'title1', label: 'Título Linha 1', type: 'text' as const, placeholder: 'MARKETING' },
    { name: 'title2', label: 'Título Linha 2', type: 'text' as const, placeholder: '360' },
    { name: 'title3', label: 'Título Linha 3 (Destaque)', type: 'text' as const, placeholder: 'DATA & PROCESSOS' },
    { name: 'title4', label: 'Título Linha 4', type: 'text' as const, placeholder: 'GO TO MARKET' },
    { name: 'title5', label: 'Título Linha 5', type: 'text' as const, placeholder: 'GESTÃO DE STAKEHOLDERS' },
    { name: 'location', label: 'Localização', type: 'text' as const, placeholder: 'São Paulo, Brasil' },
    { name: 'email', label: 'Email', type: 'text' as const, placeholder: 'seu@email.com' },
    { name: 'cardName', label: 'Nome no Card', type: 'text' as const, placeholder: 'FERNANDO BRANCO' },
    { name: 'cardRole', label: 'Cargo no Card', type: 'text' as const, placeholder: 'Operations Architect' },
  ];

  return (
    <>
      <header className="hero-gradient min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <EditableWrapper onEdit={() => setIsEditingHero(true)} label="Editar Hero">
            <div data-aos="fade-right">
              <div className="inline-block px-3 py-1 rounded-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-[10px] mb-6 uppercase tracking-[0.3em]">
                {heroData.badge}
              </div>

              <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-6 tracking-tight">
                <span className="block">{heroData.title1}</span>
                <span className="block">{heroData.title2}</span>
                <span className="block text-cyan-400 italic">{heroData.title3}</span>
                <span className="block">{heroData.title4}</span>
                <span className="block">{heroData.title5}</span>
              </h1>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                    <MapPin className="text-cyan-400" size={18} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{heroData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                    <Mail className="text-cyan-400" size={18} />
                  </div>
                  <span className="text-sm font-medium">{heroData.email}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#experiencia"
                  className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-sm font-black hover:bg-cyan-400 transition uppercase tracking-widest text-xs"
                >
                  {t.cta1}
                </a>
                <a
                  href="#contato"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-sm font-black hover:bg-cyan-500/10 transition uppercase tracking-widest text-xs"
                >
                  {t.cta2}
                </a>
              </div>
            </div>
          </EditableWrapper>

          {/* Card de Apresentação */}
          <div data-aos="fade-left" className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-sm p-8 hover-lift">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl font-black text-slate-950">
                  FB
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{heroData.cardName}</h3>
                  <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">{heroData.cardRole}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-800/50 p-4 rounded-sm border border-slate-700/50">
                  <div className="text-3xl font-black text-cyan-400 mb-1">19+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Anos Experiência</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-sm border border-slate-700/50">
                  <div className="text-3xl font-black text-cyan-400 mb-1">98%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal de Edição */}
      <EditorModal
        isOpen={isEditingHero}
        onClose={() => setIsEditingHero(false)}
        title="Editar Seção Hero"
        fields={heroFields}
        data={heroData}
        onSave={(data) => updateData('hero', data)}
      />
    </>
  );
}
