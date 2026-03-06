import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Language, translations } from '../../data/translations';
import { useEditor } from '../../contexts/EditorContext';
import { EditableWrapper } from './EditableWrapper';
import { EditorModal } from './EditorModal';

interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

interface EditableSkillsSectionProps {
  language: Language;
}

export function EditableSkillsSection({ language }: EditableSkillsSectionProps) {
  const { portfolioData, updateData } = useEditor();
  const t = translations[language];
  const [isEditingSkill, setIsEditingSkill] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Dados padrão se não existirem
  const defaultSkills: Skill[] = [
    { id: '1', name: 'React', level: 90, category: 'Frontend' },
    { id: '2', name: 'TypeScript', level: 85, category: 'Frontend' },
    { id: '3', name: 'Node.js', level: 80, category: 'Backend' },
    { id: '4', name: 'Python', level: 75, category: 'Backend' },
    { id: '5', name: 'Excel Avançado', level: 95, category: 'Ferramentas' },
    { id: '6', name: 'Pipefy', level: 90, category: 'Automação' },
  ];

  const skills = portfolioData.skills?.length > 0 ? portfolioData.skills : defaultSkills;

  const skillFields = [
    { name: 'name', label: 'Nome da Skill', type: 'text' as const, placeholder: 'React' },
    { name: 'level', label: 'Nível (%)', type: 'number' as const, placeholder: '90' },
    {
      name: 'category',
      label: 'Categoria',
      type: 'select' as const,
      options: ['Frontend', 'Backend', 'Ferramentas', 'Automação', 'Gestão', 'Marketing'],
    },
  ];

  const handleEditSkill = (skill: Skill) => {
    setCurrentSkill(skill);
    setIsAdding(false);
    setIsEditingSkill(true);
  };

  const handleAddSkill = () => {
    setCurrentSkill({ id: Date.now().toString(), name: '', level: 50, category: 'Frontend' });
    setIsAdding(true);
    setIsEditingSkill(true);
  };

  const handleSaveSkill = (data: Skill) => {
    if (isAdding) {
      updateData('skills', [...skills, data]);
    } else {
      const updated = skills.map((s) => (s.id === data.id ? data : s));
      updateData('skills', updated);
    }
  };

  const handleDeleteSkill = () => {
    if (currentSkill) {
      const updated = skills.filter((s) => s.id !== currentSkill.id);
      updateData('skills', updated);
    }
  };

  // Agrupar por categoria
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <>
      <section id="skills" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-block px-3 py-1 rounded-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-[10px] mb-6 uppercase tracking-[0.3em]">
              Competências Técnicas
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              MINHAS <span className="text-cyan-400">SKILLS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} data-aos="fade-up" className="space-y-4">
                <h3 className="text-xl font-black text-cyan-400 uppercase tracking-wider mb-6">
                  {category}
                </h3>

                {categorySkills.map((skill) => (
                  <EditableWrapper
                    key={skill.id}
                    onEdit={() => handleEditSkill(skill)}
                    label="Editar Skill"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white uppercase tracking-wider">
                          {skill.name}
                        </span>
                        <span className="text-xs text-cyan-400 font-black">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </EditableWrapper>
                ))}
              </div>
            ))}
          </div>

          {/* Botão Adicionar Skill */}
          <div className="text-center mt-12">
            <button
              onClick={handleAddSkill}
              className="bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-sm font-black uppercase tracking-wider text-sm transition flex items-center gap-3 mx-auto"
            >
              <Plus size={20} />
              Adicionar Nova Skill
            </button>
          </div>
        </div>
      </section>

      {/* Modal de Edição */}
      <EditorModal
        isOpen={isEditingSkill}
        onClose={() => setIsEditingSkill(false)}
        title={isAdding ? 'Adicionar Skill' : 'Editar Skill'}
        fields={skillFields}
        data={currentSkill || {}}
        onSave={handleSaveSkill}
        onDelete={isAdding ? undefined : handleDeleteSkill}
      />
    </>
  );
}
