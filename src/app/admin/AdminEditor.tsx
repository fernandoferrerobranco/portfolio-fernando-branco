import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiRequest } from '../../lib/supabase';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { Save, Loader2, Eye, EyeOff } from 'lucide-react';

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
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    loadContent();
  }, [section]);

  const loadContent = async () => {
    if (!section) return;
    
    try {
      setLoading(true);
      const response = await apiRequest(`/content/${section}`);
      setContent(response.content || getDefaultContent(section));
    } catch (error) {
      console.error('Load content error:', error);
      toast.error('Erro ao carregar conteúdo', {
        description: 'Usando valores padrão',
      });
      setContent(getDefaultContent(section));
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!section) return;
    
    try {
      setSaving(true);
      await apiRequest(`/content/${section}`, {
        method: 'POST',
        body: JSON.stringify(content),
      });
      toast.success('Conteúdo salvo com sucesso!', {
        description: 'As alterações foram publicadas',
      });
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Erro ao salvar conteúdo', {
        description: 'Tente novamente',
      });
    } finally {
      setSaving(false);
    }
  };

  const getDefaultContent = (section: string) => {
    const defaults: Record<string, any> = {
      hero: {
        pt: {
          title: 'Fernando Branco',
          subtitle: 'Especialista em Estratégia Digital',
          description: 'Transformando ideias em resultados',
        },
        en: {
          title: 'Fernando Branco',
          subtitle: 'Digital Strategy Specialist',
          description: 'Transforming ideas into results',
        },
      },
      about: {
        pt: {
          title: 'Sobre Mim',
          text: 'Texto sobre você...',
        },
        en: {
          title: 'About Me',
          text: 'Text about you...',
        },
      },
    };
    return defaults[section] || { pt: {}, en: {} };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
    );
  }

  if (!section) {
    return (
      <div className="text-center text-slate-400">
        Seção não encontrada
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">
            {sectionTitles[section] || section.toUpperCase()}
          </h1>
          <p className="text-slate-400 mt-2">
            Edite o conteúdo desta seção
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setShowPreview(!showPreview)}
            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
          >
            {showPreview ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
            {showPreview ? 'Ocultar Preview' : 'Ver Preview'}
          </Button>
          
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold"
          >
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Salvar Alterações
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Editor Grid */}
      <div className={`grid gap-6 ${showPreview ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
        {/* Portuguese Content */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold flex items-center gap-2">
              🇧🇷 Português (PT-BR)
            </CardTitle>
            <CardDescription className="text-slate-400">
              Conteúdo em português
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderFields('pt', content.pt || {})}
          </CardContent>
        </Card>

        {/* English Content */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold flex items-center gap-2">
              🇺🇸 English (EN-US)
            </CardTitle>
            <CardDescription className="text-slate-400">
              English content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderFields('en', content.en || {})}
          </CardContent>
        </Card>
      </div>

      {/* Preview */}
      {showPreview && (
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold">Preview</CardTitle>
            <CardDescription className="text-slate-400">
              Visualização do conteúdo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none">
              <pre className="bg-slate-950/50 p-4 rounded-lg text-xs overflow-auto">
                {JSON.stringify(content, null, 2)}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  function renderFields(lang: 'pt' | 'en', data: any) {
    const updateField = (key: string, value: string) => {
      setContent((prev: any) => ({
        ...prev,
        [lang]: {
          ...prev[lang],
          [key]: value,
        },
      }));
    };

    return Object.keys(data).map((key) => {
      const isLongText = typeof data[key] === 'string' && data[key].length > 100;
      
      return (
        <div key={key} className="space-y-2">
          <Label htmlFor={`${lang}-${key}`} className="text-white/90 font-semibold capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </Label>
          
          {isLongText ? (
            <Textarea
              id={`${lang}-${key}`}
              value={data[key]}
              onChange={(e) => updateField(key, e.target.value)}
              rows={6}
              className="bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-white/30 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
            />
          ) : (
            <Input
              id={`${lang}-${key}`}
              value={data[key]}
              onChange={(e) => updateField(key, e.target.value)}
              className="bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-white/30 focus:border-cyan-400 focus:ring-cyan-400/20"
            />
          )}
        </div>
      );
    });
  }
}
