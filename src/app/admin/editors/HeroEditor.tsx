import { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { toast } from 'sonner';
import { Save, Eye, RotateCcw } from 'lucide-react';

interface HeroData {
  badge: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  location: string;
  email: string;
  cardName: string;
  cardRole: string;
}

const DEFAULT_DATA: HeroData = {
  badge: 'Sênior Operations Leader',
  title1: 'MARKETING',
  title2: '360',
  title3: 'DATA & PROCESSOS',
  title4: 'GO TO MARKET',
  title5: 'GESTÃO DE STAKEHOLDERS',
  location: 'São Paulo, Brasil',
  email: 'fernando@g2g.org.br',
  cardName: 'FERNANDO BRANCO',
  cardRole: 'Operations Architect',
};

export function HeroEditor() {
  const [data, setData] = useState<HeroData>(DEFAULT_DATA);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    try {
      const saved = localStorage.getItem('portfolio_hero');
      if (saved) {
        setData(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const handleChange = (field: keyof HeroData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    try {
      localStorage.setItem('portfolio_hero', JSON.stringify(data));
      setHasChanges(false);
      toast.success('✅ Hero Section salva com sucesso!', {
        description: 'As alterações estão visíveis no site.',
      });
    } catch (error) {
      console.error('Erro ao salvar:', error);
      toast.error('❌ Erro ao salvar', {
        description: 'Tente novamente.',
      });
    }
  };

  const handleReset = () => {
    if (confirm('Tem certeza que deseja restaurar os valores padrão?')) {
      setData(DEFAULT_DATA);
      setHasChanges(true);
      toast.info('🔄 Dados restaurados', {
        description: 'Clique em Salvar para confirmar.',
      });
    }
  };

  const handlePreview = () => {
    window.open('/', '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">
            HERO SECTION
          </h1>
          <p className="text-slate-400 mt-2">
            Edite o conteúdo da seção principal do portfólio
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handlePreview}
            variant="outline"
            className="bg-transparent border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            className="bg-transparent border-slate-700 text-slate-400 hover:bg-slate-800"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Restaurar Padrão
          </Button>

          <Button
            onClick={handleSave}
            disabled={!hasChanges}
            className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-black"
          >
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </div>

      {/* Form */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Badge */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white text-sm font-bold uppercase tracking-wider">
              Badge/Etiqueta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              value={data.badge}
              onChange={(e) => handleChange('badge', e.target.value)}
              placeholder="Sênior Operations Leader"
              className="bg-slate-800 border-slate-700 text-white"
            />
          </CardContent>
        </Card>

        {/* Email */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white text-sm font-bold uppercase tracking-wider">
              Email de Contato
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="seu@email.com"
              className="bg-slate-800 border-slate-700 text-white"
            />
          </CardContent>
        </Card>

        {/* Títulos */}
        <Card className="bg-slate-900/50 border-cyan-500/20 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-white text-sm font-bold uppercase tracking-wider">
              Títulos Principais (5 Linhas)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-slate-400 text-xs mb-2 block">Linha 1</Label>
              <Input
                value={data.title1}
                onChange={(e) => handleChange('title1', e.target.value)}
                placeholder="MARKETING"
                className="bg-slate-800 border-slate-700 text-white font-bold"
              />
            </div>

            <div>
              <Label className="text-slate-400 text-xs mb-2 block">Linha 2</Label>
              <Input
                value={data.title2}
                onChange={(e) => handleChange('title2', e.target.value)}
                placeholder="360"
                className="bg-slate-800 border-slate-700 text-white font-bold"
              />
            </div>

            <div>
              <Label className="text-slate-400 text-xs mb-2 block">
                Linha 3 <span className="text-cyan-400">(Destaque Cyan)</span>
              </Label>
              <Input
                value={data.title3}
                onChange={(e) => handleChange('title3', e.target.value)}
                placeholder="DATA & PROCESSOS"
                className="bg-slate-800 border-slate-700 text-cyan-400 font-bold"
              />
            </div>

            <div>
              <Label className="text-slate-400 text-xs mb-2 block">Linha 4</Label>
              <Input
                value={data.title4}
                onChange={(e) => handleChange('title4', e.target.value)}
                placeholder="GO TO MARKET"
                className="bg-slate-800 border-slate-700 text-white font-bold"
              />
            </div>

            <div>
              <Label className="text-slate-400 text-xs mb-2 block">Linha 5</Label>
              <Input
                value={data.title5}
                onChange={(e) => handleChange('title5', e.target.value)}
                placeholder="GESTÃO DE STAKEHOLDERS"
                className="bg-slate-800 border-slate-700 text-white font-bold"
              />
            </div>
          </CardContent>
        </Card>

        {/* Localização */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white text-sm font-bold uppercase tracking-wider">
              Localização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              value={data.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="São Paulo, Brasil"
              className="bg-slate-800 border-slate-700 text-white"
            />
          </CardContent>
        </Card>

        {/* Card Name */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white text-sm font-bold uppercase tracking-wider">
              Nome no Card
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              value={data.cardName}
              onChange={(e) => handleChange('cardName', e.target.value)}
              placeholder="FERNANDO BRANCO"
              className="bg-slate-800 border-slate-700 text-white font-bold"
            />
          </CardContent>
        </Card>

        {/* Card Role */}
        <Card className="bg-slate-900/50 border-cyan-500/20 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-white text-sm font-bold uppercase tracking-wider">
              Cargo no Card
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              value={data.cardRole}
              onChange={(e) => handleChange('cardRole', e.target.value)}
              placeholder="Operations Architect"
              className="bg-slate-800 border-slate-700 text-white"
            />
          </CardContent>
        </Card>
      </div>

      {/* Save Button Fixed */}
      {hasChanges && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={handleSave}
            size="lg"
            className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-black shadow-2xl"
          >
            <Save className="mr-2 h-5 w-5" />
            Salvar Alterações
          </Button>
        </div>
      )}
    </div>
  );
}
