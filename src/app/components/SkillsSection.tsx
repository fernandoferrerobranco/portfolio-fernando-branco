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
      title: 'Core Competencies',
      subtitle: 'Stack Tecnológico',
      categories: [
        {
          icon: Users,
          title: 'Gestão & Liderança',
          color: 'cyan' as const,
          items: [
            { name: 'Agile / Scrum', icon: Zap },
            { name: 'AS-IS / TO-BE', icon: GitBranch },
            { name: 'GTM Strategy', icon: Rocket },
            { name: 'Feedback / 1:1', icon: MessageSquare },
            { name: 'OKRs & KPIs', icon: Target },
            { name: 'Team Building', icon: UserPlus },
          ],
        },
        {
          icon: Workflow,
          title: 'Processos & Automação',
          color: 'blue' as const,
          items: [
            { name: 'Pipefy (Power User)', icon: Boxes },
            { name: 'Workato', icon: Share2 },
            { name: 'ClickUp / Jira', icon: CheckCircle2 },
            { name: 'Governança de Dados', icon: Shield },
            { name: 'Process Mapping', icon: Map },
            { name: 'RPA Basics', icon: Settings },
          ],
        },
        {
          icon: Code,
          title: 'Tecnologia & Data',
          color: 'purple' as const,
          items: [
            { name: 'Excel Avançado (VBA)', icon: Table2 },
            { name: 'SQL / BigQuery', icon: Database },
            { name: 'HTML / CSS', icon: FileCode },
            { name: 'Power BI / Looker', icon: PieChart },
            { name: 'APIs / Integrações', icon: Puzzle },
            { name: 'Git Basics', icon: GitBranch },
          ],
        },
        {
          icon: Palette,
          title: 'Design & Marketing',
          color: 'orange' as const,
          items: [
            { name: 'Adobe Illustrator', icon: Shapes },
            { name: 'Adobe Photoshop', icon: Image },
            { name: 'Figma / UI-UX', icon: MousePointer },
            { name: 'Canva Pro', icon: Paintbrush },
            { name: 'Digital Branding', icon: Wand2 },
            { name: 'Storytelling', icon: Megaphone },
          ],
        },
        {
          icon: Award,
          title: 'Certificações',
          color: 'green' as const,
          items: [
            { name: 'Google Analytics', icon: BarChart3 },
            { name: 'Meta Blueprint', icon: Megaphone },
            { name: 'Pipefy Expert', icon: Trophy },
            { name: 'HubSpot Inbound', icon: Lightbulb },
            { name: 'Scrum Foundation', icon: BookOpen },
            { name: 'LGPD Awareness', icon: Lock },
          ],
        },
        {
          icon: Rocket,
          title: 'Ferramentas & Plataformas',
          color: 'pink' as const,
          items: [
            { name: 'Shopify / WordPress', icon: Globe },
            { name: 'HubSpot / RD Station', icon: Mail },
            { name: 'Salesforce Basics', icon: Cloud },
            { name: 'Google Workspace', icon: LayoutGrid },
            { name: 'Notion / Asana', icon: FileText },
            { name: 'Miro / FigJam', icon: Presentation },
          ],
        },
      ],
    },
    en: {
      title: 'Core Competencies',
      subtitle: 'Tech Stack',
      categories: [
        {
          icon: Users,
          title: 'Management & Leadership',
          color: 'cyan' as const,
          items: [
            { name: 'Agile / Scrum', icon: Zap },
            { name: 'AS-IS / TO-BE', icon: GitBranch },
            { name: 'GTM Strategy', icon: Rocket },
            { name: 'Feedback / 1:1', icon: MessageSquare },
            { name: 'OKRs & KPIs', icon: Target },
            { name: 'Team Building', icon: UserPlus },
          ],
        },
        {
          icon: Workflow,
          title: 'Process & Automation',
          color: 'blue' as const,
          items: [
            { name: 'Pipefy (Power User)', icon: Boxes },
            { name: 'Workato', icon: Share2 },
            { name: 'ClickUp / Jira', icon: CheckCircle2 },
            { name: 'Data Governance', icon: Shield },
            { name: 'Process Mapping', icon: Map },
            { name: 'RPA Basics', icon: Settings },
          ],
        },
        {
          icon: Code,
          title: 'Technology & Data',
          color: 'purple' as const,
          items: [
            { name: 'Advanced Excel (VBA)', icon: Table2 },
            { name: 'SQL / BigQuery', icon: Database },
            { name: 'HTML / CSS', icon: FileCode },
            { name: 'Power BI / Looker', icon: PieChart },
            { name: 'APIs / Integrations', icon: Puzzle },
            { name: 'Git Basics', icon: GitBranch },
          ],
        },
        {
          icon: Palette,
          title: 'Design & Marketing',
          color: 'orange' as const,
          items: [
            { name: 'Adobe Illustrator', icon: Shapes },
            { name: 'Adobe Photoshop', icon: Image },
            { name: 'Figma / UI-UX', icon: MousePointer },
            { name: 'Canva Pro', icon: Paintbrush },
            { name: 'Digital Branding', icon: Wand2 },
            { name: 'Storytelling', icon: Megaphone },
          ],
        },
        {
          icon: Award,
          title: 'Certifications',
          color: 'green' as const,
          items: [
            { name: 'Google Analytics', icon: BarChart3 },
            { name: 'Meta Blueprint', icon: Megaphone },
            { name: 'Pipefy Expert', icon: Trophy },
            { name: 'HubSpot Inbound', icon: Lightbulb },
            { name: 'Scrum Foundation', icon: BookOpen },
            { name: 'LGPD Awareness', icon: Lock },
          ],
        },
        {
          icon: Rocket,
          title: 'Tools & Platforms',
          color: 'pink' as const,
          items: [
            { name: 'Shopify / WordPress', icon: Globe },
            { name: 'HubSpot / RD Station', icon: Mail },
            { name: 'Salesforce Basics', icon: Cloud },
            { name: 'Google Workspace', icon: LayoutGrid },
            { name: 'Notion / Asana', icon: FileText },
            { name: 'Miro / FigJam', icon: Presentation },
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
    orange: {
      bg: 'bg-orange-500/10 border-orange-500/20',
      icon: 'text-orange-400',
      title: 'text-orange-400',
      tag: 'bg-orange-500/10 border-orange-500/30 text-orange-300',
      tagIcon: 'text-orange-400',
      hover: 'hover:border-orange-500/40 hover:bg-orange-500/5',
    },
    green: {
      bg: 'bg-green-500/10 border-green-500/20',
      icon: 'text-green-400',
      title: 'text-green-400',
      tag: 'bg-green-500/10 border-green-500/30 text-green-300',
      tagIcon: 'text-green-400',
      hover: 'hover:border-green-500/40 hover:bg-green-500/5',
    },
    pink: {
      bg: 'bg-pink-500/10 border-pink-500/20',
      icon: 'text-pink-400',
      title: 'text-pink-400',
      tag: 'bg-pink-500/10 border-pink-500/30 text-pink-300',
      tagIcon: 'text-pink-400',
      hover: 'hover:border-pink-500/40 hover:bg-pink-500/5',
    },
  };

  return (
    <section id="skills" className="py-32 bg-slate-950/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            {content.title} <span className="text-cyan-400 italic">&</span> <span className="text-cyan-400 italic">{content.subtitle}</span>
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
        </div>

        {/* Grid de Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.categories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];
            
            return (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm border ${colors.bg.split(' ')[1]} p-8 rounded-sm ${colors.hover} transition-all duration-300 group`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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

                {/* Tags com Ícones */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={itemIndex}
                        className={`inline-flex items-center gap-2 px-3 py-2 ${colors.tag} border rounded-sm transition-all hover:scale-105 hover:shadow-lg`}
                      >
                        <ItemIcon className={colors.tagIcon} size={14} strokeWidth={2.5} />
                        <span className="text-[10px] font-bold uppercase tracking-wide whitespace-nowrap">
                          {item.name}
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
    </section>
  );
}
