import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { toast } from 'sonner';
import {
  Save,
  RotateCcw,
  Download,
  Upload,
  Eye,
  EyeOff,
  Home,
  User,
  Briefcase,
  Award,
  LogOut,
  GraduationCap,
  MessageSquare,
  Palette,
} from 'lucide-react';
import { loadData, saveData, resetData, exportData, importData, type PortfolioData } from '../lib/storage';
import { logout, hasValidSession } from '../lib/auth';
import Portfolio from './Portfolio';
import { HeroEditor } from './components/admin/sections/HeroEditor';
import { AboutEditor } from './components/admin/sections/AboutEditor';
import { ExperiencesEditor } from './components/admin/sections/ExperiencesEditor';
import { SkillsEditor } from './components/admin/sections/SkillsEditor';
import { useAdmin } from './context/AdminContext';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState<PortfolioData>(loadData());
  const [activeTab, setActiveTab] = useState('hero');
  const [showPreview, setShowPreview] = useState(true);
  const { activeSection, scrollToComponent } = useAdmin();

  // Verificar autenticação
  useEffect(() => {
    if (!hasValidSession()) {
      navigate('/admin');
    }
  }, [navigate]);

  // Carregar dados ao montar
  useEffect(() => {
    setData(loadData());
  }, []);

  // 🔄 SCROLL SINCRONIZADO REMOVIDO - agora são completamente independentes
  
  // ========================================
  // PREVIEW INSTANTÂNEO
  // ========================================
  // Atualiza preview em tempo real SEM salvar
  const updateDataInstant = (newData: PortfolioData) => {
    console.log('⚡ UPDATE INSTANT:', {
      aboutText: newData.about.aboutText_pt?.substring(0, 50) + '...',
      educationItems: newData.about.educationItems?.length,
    });
    setData(newData);
    // Disparar evento customizado para atualizar preview
    window.dispatchEvent(new CustomEvent('admin-preview-update', { detail: newData }));
  };

  // ========================================
  // HANDLERS
  // ========================================

  const handleSave = () => {
    try {
      saveData(data);
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
    if (confirm('⚠️ Tem certeza? Isso irá restaurar TODOS os dados padrão (incluindo background original).')) {
      // FORÇAR LIMPEZA COMPLETA
      console.log('🗑️ Limpando localStorage...');
      localStorage.clear();
      
      console.log('🔄 Resetando dados...');
      resetData();
      
      const defaultData = loadData();
      console.log('📦 Dados padrão carregados:', defaultData.hero);
      
      setData(defaultData);
      updateDataInstant(defaultData);
      
      toast.info('🔄 RESET COMPLETO!', {
        description: 'localStorage limpo + dados padrão restaurados',
      });
      
      // Recarregar página para garantir
      setTimeout(() => {
        window.location.reload();
      }, 1000);
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
            const importedData = loadData();
            setData(importedData);
            updateDataInstant(importedData);
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

  const handleLogout = () => {
    if (confirm('Deseja sair do painel admin?')) {
      logout();
      navigate('/admin');
    }
  };

  // DEBUG - Ver estado atual
  const handleDebug = () => {
    console.log('=== DEBUG ===');
    console.log('Data atual:', data);
    console.log('Hero background:', data.hero.backgroundColor, data.hero.backgroundGradient);
    console.log('localStorage:', localStorage.getItem('portfolio_data_v1'));
    alert('Veja o console (F12) para detalhes!');
  };

  // LIMPAR TUDO - Força reset total
  const handleClearAll = () => {
    if (confirm('🚨 ATENÇÃO! Isso vai DELETAR TUDO e recarregar a página. Continuar?')) {
      console.log('💥 LIMPEZA FORÇADA!');
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  };
  
  return (
    <div className="h-screen bg-slate-950 flex flex-col">
      {/* Header fixo */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 flex-shrink-0">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-black text-white flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Painel <span className="text-cyan-400">Admin</span>
              </h1>
              <p className="text-xs text-slate-500">
                Edite em tempo real • Mudanças aparecem instantaneamente
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => setShowPreview(!showPreview)}
                variant="outline"
                size="sm"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
              >
                {showPreview ? (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Ocultar
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </>
                )}
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
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>

              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-red-500/30 text-red-400 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4" />
              </Button>

              <Button
                onClick={handleDebug}
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-400 hover:bg-slate-800"
              >
                <Palette className="w-4 h-4 mr-2" />
                Debug
              </Button>

              <Button
                onClick={handleClearAll}
                variant="outline"
                size="sm"
                className="border-red-500/30 text-red-400 hover:bg-red-500/10"
              >
                <Palette className="w-4 h-4 mr-2" />
                Limpar Tudo
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal - Split screen */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor (lado esquerdo) */}
        <div
          id="admin-scroll-container"
          className={`${
            showPreview ? 'w-1/2' : 'w-full'
          } h-full overflow-y-auto bg-slate-950`}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* TabsList fixo (sticky) */}
            <div className="sticky top-0 z-20 bg-slate-950 px-6 pt-6 pb-2">
              <TabsList className="bg-slate-900 border border-cyan-500/20 mb-4 grid grid-cols-7 w-full">
                <TabsTrigger
                  value="hero"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:text-white text-xs font-semibold"
                >
                  <Home className="w-4 h-4 mr-1" />
                  Hero
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:text-white text-xs font-semibold"
                >
                  <User className="w-4 h-4 mr-1" />
                  Trajetória
                </TabsTrigger>
                <TabsTrigger
                  value="experiences"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:text-white text-xs font-semibold"
                >
                  <Briefcase className="w-4 h-4 mr-1" />
                  Exp
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:text-white text-xs font-semibold"
                >
                  <Award className="w-4 h-4 mr-1" />
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:text-white text-xs font-semibold"
                  disabled
                >
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Edu
                </TabsTrigger>
                <TabsTrigger
                  value="testimonials"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:text-white text-xs font-semibold"
                  disabled
                >
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Test
                </TabsTrigger>
                <TabsTrigger
                  value="styles"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:text-white text-xs font-semibold"
                  disabled
                >
                  <Palette className="w-4 h-4 mr-1" />
                  Style
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TabsContent (scroll normal) */}
            <div className="px-6 pb-6">
              {/* HERO */}
              <TabsContent value="hero">
                <HeroEditor data={data} onChange={updateDataInstant} />
              </TabsContent>

              {/* ABOUT */}
              <TabsContent value="about">
                <AboutEditor data={data} onChange={updateDataInstant} />
              </TabsContent>

              {/* EXPERIENCES */}
              <TabsContent value="experiences">
                <ExperiencesEditor data={data} onChange={updateDataInstant} />
              </TabsContent>

              {/* SKILLS */}
              <TabsContent value="skills">
                <SkillsEditor data={data} onChange={updateDataInstant} />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Preview (lado direito) */}
        {showPreview && (
          <div className="w-1/2 h-full border-l border-cyan-500/20 bg-slate-950 overflow-hidden flex flex-col relative">
            {/* 🎯 Container de conteúdo - SEM BARRA DE PREVIEW */}
            <div id="preview-scroll-container" className="flex-1 overflow-y-auto bg-slate-900/50">
              <PreviewPortfolio liveData={data} activeSection={activeSection} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente de preview que usa dados em tempo real
function PreviewPortfolio({ liveData, activeSection }: { liveData: PortfolioData; activeSection: string | null }) {
  // Passar dados via evento customizado
  useEffect(() => {
    console.log('🔥 PreviewPortfolio disparando evento com dados:', {
      aboutText: liveData.about.aboutText_pt.substring(0, 50) + '...',
    });
    window.dispatchEvent(new CustomEvent('admin-preview-update', { detail: liveData }));
  }, [liveData]);

  console.log('🎨 PreviewPortfolio renderizando, activeSection:', activeSection);

  return <Portfolio activeSection={activeSection} />;
}