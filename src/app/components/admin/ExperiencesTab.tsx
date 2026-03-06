import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Plus, Trash2, GripVertical, X } from 'lucide-react';
import type { PortfolioData, Experience } from '../../../lib/storage';

interface ExperiencesTabProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  setHasChanges: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ExperiencesTab({ data, setData, setHasChanges }: ExperiencesTabProps) {
  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: 'Nova Empresa',
      role: 'Cargo',
      period: '2024 - Presente',
      description: 'Descrição da experiência...',
      tags: [],
    };
    setData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExp],
    }));
    setHasChanges(true);
  };

  const updateExperience = (id: string, field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
    setHasChanges(true);
  };

  const deleteExperience = (id: string) => {
    if (confirm('Remover esta experiência?')) {
      setData((prev) => ({
        ...prev,
        experiences: prev.experiences.filter((exp) => exp.id !== id),
      }));
      setHasChanges(true);
    }
  };

  const addTag = (expId: string, tag: string) => {
    if (!tag.trim()) return;
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) =>
        exp.id === expId ? { ...exp, tags: [...exp.tags, tag] } : exp
      ),
    }));
    setHasChanges(true);
  };

  const removeTag = (expId: string, tagIndex: number) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) =>
        exp.id === expId
          ? { ...exp, tags: exp.tags.filter((_, i) => i !== tagIndex) }
          : exp
      ),
    }));
    setHasChanges(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Experiências Profissionais</h2>
          <p className="text-slate-400 text-sm">Gerencie seu histórico profissional</p>
        </div>
        <Button
          onClick={addExperience}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </div>

      {data.experiences.map((exp, index) => (
        <Card key={exp.id} className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <GripVertical className="text-slate-600" />
                <div>
                  <CardTitle className="text-white">Experiência #{index + 1}</CardTitle>
                  <CardDescription className="text-slate-400">{exp.company}</CardDescription>
                </div>
              </div>
              <Button
                onClick={() => deleteExperience(exp.id)}
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label className="text-slate-400">Empresa</Label>
                <Input
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white mt-1"
                />
              </div>
              <div>
                <Label className="text-slate-400">Cargo</Label>
                <Input
                  value={exp.role}
                  onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white mt-1"
                />
              </div>
            </div>

            <div>
              <Label className="text-slate-400">Período</Label>
              <Input
                value={exp.period}
                onChange={(e) => updateExperience(exp.id, 'period', e.target.value)}
                className="bg-slate-800 border-slate-700 text-white mt-1"
                placeholder="Ex: 2020 - Presente"
              />
            </div>

            <div>
              <Label className="text-slate-400">Descrição</Label>
              <Textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                rows={3}
                className="bg-slate-800 border-slate-700 text-white mt-1"
              />
            </div>

            <div>
              <Label className="text-slate-400">Tags</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(exp.id, i)}
                      className="hover:text-cyan-300"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={() => {
                    const tag = prompt('Nome da tag:');
                    if (tag) addTag(exp.id, tag);
                  }}
                  className="px-3 py-1 border border-dashed border-cyan-500/30 text-cyan-400 rounded-full text-xs font-semibold hover:bg-cyan-500/10"
                >
                  + Adicionar
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
