import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { toast } from 'sonner';
import {
  Save,
  RotateCcw,
  Download,
  Upload,
  Eye,
  Home,
  User,
  Briefcase,
  Award,
  X,
  Plus,
  GripVertical,
  Trash2,
} from 'lucide-react';
import {
  loadData,
  saveData,
  resetData,
  exportData,
  importData,
  updateSection,
  type PortfolioData,
  type Experience,
  type Skill,
} from '../lib/storage';

export default function Admin() {
  const [data, setData] = useState<PortfolioData>(loadData());
  const [hasChanges, setHasChanges] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  // Carregar dados ao montar
  useEffect(() => {
    setData(loadData());
  }, []);

  // ========================================
  // HANDLERS GERAIS
  // ========================================

  const handleSave = () => {
    try {
      saveData(data);
      setHasChanges(false);
      toast.success('✅ Alterações salvas!', {
        description: 'Seu portfolio foi atualizado.',
      });
    } catch (error: any) {
      toast.error('❌ Erro ao salvar', {
        description: error.message,
      });
    }
  };

  const handleReset = () => {
    if (confirm('⚠️ Tem certeza? Isso irá restaurar TODOS os dados padrão.')) {
      resetData();
      setData(loadData());
      setHasChanges(false);
      toast.info('🔄 Dados restaurados', {
        description: 'Dados padrão carregados.',
      });
    }
  };

  const handleExport = () => {
    try {
      const json = exportData();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success('📥 Backup criado!');
    } catch (error) {
      toast.error('Erro ao exportar dados');
    }
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          try {
            importData(event.target.result);
            setData(loadData());
            setHasChanges(false);
            toast.success('📤 Dados importados!');
          } catch (error: any) {
            toast.error('❌ Erro ao importar', {
              description: error.message,
            });
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handlePreview = () => {
    if (hasChanges) {
      if (confirm('Você tem alterações não salvas. Salvar antes de visualizar?')) {
        handleSave();
      }
    }
    window.open('/', '_blank');
  };

  // ========================================
  // HANDLERS SEÇÕES
  // ========================================

  const updateHero = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: value },
    }));
    setHasChanges(true);
  };

  const updateAbout = (field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      about: { ...prev.about, [field]: value },
    }));
    setHasChanges(true);
  };

  const updateAboutStats = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        stats: { ...prev.about.stats, [field]: value },
      },
    }));
    setHasChanges(true);
  };

  // ========================================
  // EXPERIÊNCIAS
  // ========================================

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

  // ========================================
  // SKILLS
  // ========================================

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
    <div className="min-h-screen bg-slate-950">
      {/* Header fixo */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-white">
                🎨 Painel <span className="text-cyan-400">Admin</span>
              </h1>
              <p className="text-sm text-slate-400">
                Edite seu portfolio de forma visual
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handlePreview}
                variant="outline"
                size="sm"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>

              <Button
                onClick={handleExport}
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-400 hover:bg-slate-800"
              >
                <Download className="w-4 h-4 mr-2" />
                Backup
              </Button>

              <Button
                onClick={handleImport}
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-400 hover:bg-slate-800"
              >
                <Upload className="w-4 h-4 mr-2" />
                Restaurar
              </Button>

              <Button
                onClick={handleReset}
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-400 hover:bg-slate-800"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>

              <Button
                onClick={handleSave}
                disabled={!hasChanges}
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar {hasChanges && '•'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-slate-900 border border-cyan-500/20 mb-8">
            <TabsTrigger value="hero" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
              <Home className="w-4 h-4 mr-2" />
              Hero
            </TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
              <User className="w-4 h-4 mr-2" />
              Sobre
            </TabsTrigger>
            <TabsTrigger value="experiences" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
              <Briefcase className="w-4 h-4 mr-2" />
              Experiências
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
              <Award className="w-4 h-4 mr-2" />
              Habilidades
            </TabsTrigger>
          </TabsList>

          {/* TAB: HERO */}
          <TabsContent value="hero" className="space-y-6">
            <Card className="bg-slate-900/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">Badge Principal</CardTitle>
                <CardDescription>Texto destacado no topo</CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  value={data.hero.badge}
                  onChange={(e) => updateHero('badge', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white"
                  placeholder="Ex: Sênior Operations Leader"
                />
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">Títulos Principais</CardTitle>
                <CardDescription>Títulos grandes animados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {['title1', 'title2', 'title3', 'title4', 'title5'].map((field, i) => (
                  <div key={field}>
                    <Label className="text-slate-400">Título {i + 1}</Label>
                    <Input
                      value={data.hero[field as keyof typeof data.hero] as string}
                      onChange={(e) => updateHero(field, e.target.value)}
                      className="bg-slate-800 border-slate-700 text-white mt-1"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    value={data.hero.location}
                    onChange={(e) => updateHero('location', e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    type="email"
                    value={data.hero.email}
                    onChange={(e) => updateHero('email', e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Nome no Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    value={data.hero.cardName}
                    onChange={(e) => updateHero('cardName', e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Cargo no Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    value={data.hero.cardRole}
                    onChange={(e) => updateHero('cardRole', e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* TAB: ABOUT */}
          <TabsContent value="about" className="space-y-6">
            <Card className="bg-slate-900/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">Título</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  value={data.about.title}
                  onChange={(e) => updateAbout('title', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">Descrição</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={data.about.description}
                  onChange={(e) => updateAbout('description', e.target.value)}
                  rows={4}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-slate-400">Anos</Label>
                  <Input
                    value={data.about.stats.years}
                    onChange={(e) => updateAboutStats('years', e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white mt-1"
                  />
                </div>
                <div>
                  <Label className="text-slate-400">Projetos</Label>
                  <Input
                    value={data.about.stats.projects}
                    onChange={(e) => updateAboutStats('projects', e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white mt-1"
                  />
                </div>
                <div>
                  <Label className="text-slate-400">Clientes</Label>
                  <Input
                    value={data.about.stats.clients}
                    onChange={(e) => updateAboutStats('clients', e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB: EXPERIENCES */}
          <TabsContent value="experiences" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Experiências Profissionais</h2>
                <p className="text-sm text-slate-400">Gerencie seu histórico</p>
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
                        <CardDescription>{exp.company}</CardDescription>
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
          </TabsContent>

          {/* TAB: SKILLS */}
          <TabsContent value="skills" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Habilidades</h2>
                <p className="text-sm text-slate-400">Suas competências técnicas e comportamentais</p>
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
                          onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
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
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer flutuante com ações rápidas */}
      {hasChanges && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom">
          <span className="font-semibold">Você tem alterações não salvas</span>
          <Button
            onClick={handleSave}
            size="sm"
            className="bg-white text-slate-950 hover:bg-slate-100 font-bold"
          >
            <Save className="w-4 h-4 mr-2" />
            Salvar Agora
          </Button>
        </div>
      )}
    </div>
  );
}
