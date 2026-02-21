import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Home,
  FileEdit,
  Briefcase,
  Award,
  GraduationCap,
  Languages,
  MessageSquare,
  Download,
  Link2,
  CheckCircle2,
  Circle,
  Eye,
  Settings,
} from 'lucide-react';

const sections = [
  { 
    path: '/admin/editor/hero', 
    label: 'Hero Section', 
    icon: Home,
    description: 'Títulos, badge, email e localização',
    implemented: true,
  },
  { 
    path: '/admin/editor/about', 
    label: 'Sobre Mim', 
    icon: FileEdit,
    description: 'Perfil, trajetória e especialidades',
    implemented: false,
  },
  { 
    path: '/admin/editor/experiences', 
    label: 'Experiências', 
    icon: Briefcase,
    description: 'Histórico profissional detalhado',
    implemented: false,
  },
  { 
    path: '/admin/editor/skills', 
    label: 'Habilidades', 
    icon: Award,
    description: 'Skills técnicas e competências',
    implemented: false,
  },
  { 
    path: '/admin/editor/education', 
    label: 'Formação', 
    icon: GraduationCap,
    description: 'Graduação e certificações',
    implemented: false,
  },
  { 
    path: '/admin/editor/languages', 
    label: 'Idiomas', 
    icon: Languages,
    description: 'Proficiência em idiomas',
    implemented: false,
  },
  { 
    path: '/admin/editor/testimonials', 
    label: 'Depoimentos', 
    icon: MessageSquare,
    description: 'Feedback de clientes/parceiros',
    implemented: false,
  },
  { 
    path: '/admin/editor/downloads', 
    label: 'Downloads', 
    icon: Download,
    description: 'Currículo e materiais',
    implemented: false,
  },
  { 
    path: '/admin/editor/social', 
    label: 'Links Sociais', 
    icon: Link2,
    description: 'Redes sociais e contatos',
    implemented: false,
  },
];

export default function AdminDashboard() {
  const implementedCount = sections.filter(s => s.implemented).length;
  const totalCount = sections.length;
  const progress = Math.round((implementedCount / totalCount) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-white tracking-tight">
          PAINEL ADMIN
        </h1>
        <p className="text-slate-400 mt-2">
          Gerencie o conteúdo do seu portfólio de forma visual
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-400/50 transition-all">
          <CardHeader>
            <CardTitle className="text-white font-bold flex items-center gap-2">
              <Eye className="w-5 h-5 text-cyan-400" />
              Visualizar Site
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-300 mb-4">
              Veja como está ficando o portfólio
            </p>
            <Button 
              asChild
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black"
            >
              <Link to="/" target="_blank">
                Abrir Portfólio
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold flex items-center gap-2">
              <Settings className="w-5 h-5 text-cyan-400" />
              Progresso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-cyan-400 mb-2">
              {implementedCount}/{totalCount}
            </div>
            <p className="text-sm text-slate-400">
              Seções implementadas ({progress}%)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold">Armazenamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-black text-white mb-2">
              LocalStorage
            </div>
            <p className="text-sm text-slate-400">
              Dados salvos no navegador
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Sections Grid */}
      <div>
        <h2 className="text-2xl font-black text-white mb-6">SEÇÕES DO PORTFÓLIO</h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            const StatusIcon = section.implemented ? CheckCircle2 : Circle;
            
            return (
              <Card
                key={section.path}
                className={`
                  bg-slate-900/50 border transition-all
                  ${section.implemented 
                    ? 'border-cyan-500/30 hover:border-cyan-400/50 cursor-pointer' 
                    : 'border-slate-700/50 opacity-60'
                  }
                `}
              >
                <Link to={section.path} className="block">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`
                        p-3 rounded-lg 
                        ${section.implemented 
                          ? 'bg-cyan-500/20' 
                          : 'bg-slate-800/50'
                        }
                      `}>
                        <Icon className={`
                          w-6 h-6 
                          ${section.implemented 
                            ? 'text-cyan-400' 
                            : 'text-slate-500'
                          }
                        `} />
                      </div>
                      
                      <StatusIcon className={`
                        w-5 h-5 
                        ${section.implemented 
                          ? 'text-green-400' 
                          : 'text-slate-600'
                        }
                      `} />
                    </div>
                    
                    <CardTitle className="text-white font-bold text-lg">
                      {section.label}
                    </CardTitle>
                    
                    <CardDescription className="text-slate-400 text-sm">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {section.implemented ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">
                        <CheckCircle2 className="w-3 h-3" />
                        Disponível
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                        <Circle className="w-3 h-3" />
                        Em breve
                      </span>
                    )}
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Info Card */}
      <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="text-white font-bold">
            💡 Como funciona?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-300">
          <p>
            <strong className="text-cyan-400">1.</strong> Clique em uma seção implementada (com ✅)
          </p>
          <p>
            <strong className="text-cyan-400">2.</strong> Edite os campos do formulário
          </p>
          <p>
            <strong className="text-cyan-400">3.</strong> Clique em "Salvar Alterações"
          </p>
          <p>
            <strong className="text-cyan-400">4.</strong> As mudanças aparecem instantaneamente no site!
          </p>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 mt-4">
            <p className="text-xs text-cyan-400 font-semibold">
              📦 Seus dados ficam salvos no navegador (LocalStorage)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
