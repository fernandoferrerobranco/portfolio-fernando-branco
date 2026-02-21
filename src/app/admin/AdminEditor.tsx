import { useParams } from 'react-router';
import { HeroEditor } from './editors/HeroEditor';
import { AlertCircle } from 'lucide-react';

const sectionTitles: Record<string, string> = {
  hero: 'Hero Section',
  about: 'Sobre Mim',
  experiences: 'Experiências Profissionais',
  skills: 'Habilidades & Especialidades',
  education: 'Formação & Certificações',
  languages: 'Idiomas',
  testimonials: 'Depoimentos',
  downloads: 'Arquivos para Download',
  social: 'Links Sociais',
};

export default function AdminEditor() {
  const { section } = useParams();

  // Renderizar editor específico baseado na seção
  const renderEditor = () => {
    switch (section) {
      case 'hero':
        return <HeroEditor />;
      
      // Outros editores virão aqui
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <AlertCircle className="w-16 h-16 text-cyan-400/50 mb-4" />
            <h2 className="text-2xl font-black text-white mb-2">
              Editor em Desenvolvimento
            </h2>
            <p className="text-slate-400 max-w-md">
              O editor para <span className="text-cyan-400 font-bold">{sectionTitles[section || ''] || section}</span> está sendo desenvolvido.
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Por enquanto, apenas o Hero Section está disponível.
            </p>
          </div>
        );
    }
  };

  return renderEditor();
}
