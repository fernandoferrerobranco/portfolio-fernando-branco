import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent } from '../ui/card';
import { Plus, Trash2 } from 'lucide-react';
import type { PortfolioData, Skill } from '../../../lib/storage';

interface SkillsTabProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  setHasChanges: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SkillsTab({ data, setData, setHasChanges }: SkillsTabProps) {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: 'Nova Skill',
      category: 'technical',
      level: 3,
    };
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
    setHasChanges(true);
  };

  const updateSkill = (id: string, field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    }));
    setHasChanges(true);
  };

  const deleteSkill = (id: string) => {
    if (confirm('Remover esta habilidade?')) {
      setData((prev) => ({
        ...prev,
        skills: prev.skills.filter((skill) => skill.id !== id),
      }));
      setHasChanges(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Habilidades</h2>
          <p className="text-slate-400 text-sm">
            Suas competências técnicas e comportamentais
          </p>
        </div>
        <Button
          onClick={addSkill}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {data.skills.map((skill) => (
          <Card key={skill.id} className="bg-slate-900/50 border-cyan-500/20">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <Input
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white font-semibold"
                />
                <Button
                  onClick={() => deleteSkill(skill.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10 ml-2"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <Label className="text-slate-400 text-xs">Categoria</Label>
                  <select
                    value={skill.category}
                    onChange={(e) => updateSkill(skill.id, 'category', e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-700 text-white rounded-md text-sm"
                  >
                    <option value="technical">Técnica</option>
                    <option value="business">Negócio</option>
                    <option value="soft">Soft Skill</option>
                  </select>
                </div>

                <div>
                  <Label className="text-slate-400 text-xs">Nível: {skill.level}/5</Label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={skill.level}
                    onChange={(e) =>
                      updateSkill(skill.id, 'level', parseInt(e.target.value))
                    }
                    className="w-full mt-1"
                  />
                  <div className="flex justify-between text-xs text-slate-600 mt-1">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
