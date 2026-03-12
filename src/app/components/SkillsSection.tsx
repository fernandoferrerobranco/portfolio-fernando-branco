import { 
  Users, 
  Target, 
  TrendingUp, 
  Workflow,
  Settings,
  Database,
  Code,
  Palette,
  Award,
  GraduationCap,
  Briefcase,
  Rocket,
  BarChart3,
  Lightbulb,
  Shield,
  Zap,
  CheckCircle2,
  FileText,
  Gauge,
  FolderTree,
  MessageSquare,
  UserPlus,
  Boxes,
  Wrench,
  MousePointer,
  Grid3x3,
  Package,
  Table2,
  Globe,
  FileCode,
  Share2,
  GitBranch,
  PieChart,
  Presentation,
  Puzzle,
  Shapes,
  Wand2,
  Image,
  Layers,
  Megaphone,
  Trophy,
  BookOpen,
  Lock,
  Cloud,
  Mail,
  LayoutGrid,
  Monitor,
  Paintbrush,
  Map
} from 'lucide-react';
import { Language } from '../data/translations';

interface SkillsSectionProps {
  language: Language;
}

export function SkillsSection({ language }: SkillsSectionProps) {
  const skills = {
    pt: {
      title: 'Competências',
      subtitle: 'Skills',
      categories: [
        {
          icon: Users,
          title: 'Liderança & Pessoas',
          color: 'cyan' as const,
          items: [
            '1:1',
            'Mentoria & Feedbacks',
            'Liderança Situacional',
            'Onboarding',
            'Team Building',
            'Trabalho em Equipe',
            'Comunicação',
            'Inteligência Emocional'
          ],
        },
        {
          icon: Workflow,
          title: 'Processos & Eficiência',
          color: 'blue' as const,
          items: [
            'Agile & Scrum',
            'As-is / To-be',
            'SLA & KPI',
            'Lean Thinking',
            'Gestão do Tempo',
            'Resolução de Problemas'
          ],
        },
        {
          icon: Target,
          title: 'Estratégia & Projetos',
          color: 'purple' as const,
          items: [
            'GTM',
            'PMO',
            'OKRs',
            'Data-Driven',
            'Parcerias Estratégicas',
            'Omnichannel',
            'Marketing de Produto',
            'Adaptabilidade',
            'Criatividade',
            'Inovação',
            'Análise de Dados'
          ],
        },
        {
          icon: Settings,
          title: 'Tecnologia & Ferramentas',
          color: 'green' as const,
          items: [
            'Office',
            'Jira, Trello, Pipefy, ClickUp',
            'Adobe Cloud',
            'HTML/CSS',
            'IA',
            'Figma',
            'Miro',
            'Salesforce',
            'Wordpress'
          ],
        },
      ],
    },
    en: {
      title: 'Competencies',
      subtitle: 'Skills',
      categories: [
        {
          icon: Users,
          title: 'Leadership & People',
          color: 'cyan' as const,
          items: [
            '1:1',
            'Mentoring & Feedback',
            'Situational Leadership',
            'Onboarding',
            'Team Building',
            'Teamwork',
            'Communication',
            'Emotional Intelligence'
          ],
        },
        {
          icon: Workflow,
          title: 'Processes & Efficiency',
          color: 'blue' as const,
          items: [
            'Agile & Scrum',
            'As-is / To-be',
            'SLA & KPI',
            'Lean Thinking',
            'Time Management',
            'Problem Solving'
          ],
        },
        {
          icon: Target,
          title: 'Strategy & Projects',
          color: 'purple' as const,
          items: [
            'GTM',
            'PMO',
            'OKRs',
            'Data-Driven',
            'Strategic Partnerships',
            'Omnichannel',
            'Product Marketing',
            'Adaptability',
            'Creativity',
            'Innovation',
            'Data Analysis'
          ],
        },
        {
          icon: Settings,
          title: 'Technology & Tools',
          color: 'green' as const,
          items: [
            'Office',
            'Jira, Trello, Pipefy, ClickUp',
            'Adobe Cloud',
            'HTML/CSS',
            'AI',
            'Figma',
            'Miro',
            'Salesforce',
            'Wordpress'
          ],
        },
      ],
    },
  };

  const content = skills[language];

  const colorClasses = {
    cyan: {
      bg: 'bg-cyan-500/10 border-cyan-500/20',
      icon: 'text-cyan-400',
      title: 'text-cyan-400',
      tag: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
      tagIcon: 'text-cyan-400',
      hover: 'hover:border-cyan-500/40 hover:bg-cyan-500/5',
    },
    blue: {
      bg: 'bg-blue-500/10 border-blue-500/20',
      icon: 'text-blue-400',
      title: 'text-blue-400',
      tag: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
      tagIcon: 'text-blue-400',
      hover: 'hover:border-blue-500/40 hover:bg-blue-500/5',
    },
    purple: {
      bg: 'bg-purple-500/10 border-purple-500/20',
      icon: 'text-purple-400',
      title: 'text-purple-400',
      tag: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
      tagIcon: 'text-purple-400',
      hover: 'hover:border-purple-500/40 hover:bg-purple-500/5',
    },
    green: {
      bg: 'bg-green-500/10 border-green-500/20',
      icon: 'text-green-400',
      title: 'text-green-400',
      tag: 'bg-green-500/10 border-green-500/30 text-green-300',
      tagIcon: 'text-green-400',
      hover: 'hover:border-green-500/40 hover:bg-green-500/5',
    },
  };

  return (
    <section id="skills" className="py-32 bg-slate-950/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            {content.title} <span className="text-cyan-400 italic">&</span> <span className="text-cyan-400 italic">{content.subtitle}</span>
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
        </div>

        {/* Grid de Skills 2x2 - Container limitado para cards mais quadrados */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {content.categories.map((category, index) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color];
              
              return (
                <div
                  key={index}
                  className={`bg-slate-900/50 backdrop-blur-sm border ${colors.bg.split(' ')[1]} p-8 rounded-sm ${colors.hover} transition-all duration-300 group`}
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${colors.bg} rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={colors.icon} size={24} />
                    </div>
                    <h3 className={`text-xs font-black uppercase tracking-[0.2em] ${colors.title} leading-tight`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className={`inline-flex items-center gap-2 px-3 py-2 ${colors.tag} border rounded-sm transition-all hover:scale-105 hover:shadow-lg`}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wide whitespace-nowrap">
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}