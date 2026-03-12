import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import '../../styles/suppress-slick-fonts.css'; // 🔇 Importar ANTES dos CSS do slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  GraduationCap, 
  Languages, 
  Award,
  TrendingUp,
  FileCheck,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Target,
  Zap,
  BarChart3,
  Rocket,
  Users,
  Shield,
  Globe,
  Heart,
  Video
} from 'lucide-react';
import { Counter } from './Counter';
import { Language, translations } from '../data/translations';
import { loadData } from '../../lib/storage';
import { applyTextColor, applyBackgroundColor } from '../utils/applyStyles';

interface TrajetoriaSectionProps {
  language: Language;
  activeSection?: string | null; // ID da seção ativa vindo do admin
}

export function TrajetoriaSection({ language, activeSection }: TrajetoriaSectionProps) {
  const t = translations[language].trajectory;
  const tCases = translations[language].cases;
  const sliderRef = useRef<Slider>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [data, setData] = useState(loadData());

  useEffect(() => {
    // Recarregar dados quando storage mudar
    const handleStorageChange = () => {
      console.log('💾 TrajetoriaSection - Storage mudou');
      setData(loadData());
    };

    // Listener para preview instantâneo (admin)
    const handleAdminPreview = (e: any) => {
      console.log('📢 TrajetoriaSection - Recebeu evento admin-preview-update:', {
        aboutText: e.detail?.about?.aboutText_pt?.substring(0, 50) + '...',
      });
      if (e.detail) {
        setData(e.detail);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('admin-preview-update', handleAdminPreview);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('admin-preview-update', handleAdminPreview);
    };
  }, []);

  // 🎯 SCROLL AUTOMÁTICO quando activeSection mudar
  useEffect(() => {
    console.log('🎯 TrajetoriaSection - activeSection mudou:', activeSection);
    if (activeSection) {
      const element = document.getElementById(activeSection);
      console.log('🔍 Elemento encontrado:', element);
      if (element) {
        console.log('✅ Scrollando para:', activeSection);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn('❌ Elemento não encontrado:', activeSection);
      }
    }
  }, [activeSection]);

  const { about, aboutStyles } = data;
  
  // 🛡️ Fallback de segurança para evitar erros se aboutStyles não estiver completo
  const safeAboutStyles = {
    sectionTitle: aboutStyles?.sectionTitle || {},
    sectionTitleHighlight: aboutStyles?.sectionTitleHighlight || {},
    aboutCard: aboutStyles?.aboutCard || {},
    aboutContent: aboutStyles?.aboutContent || {},
    educationTitle: aboutStyles?.educationTitle || {},
    educationDegree: aboutStyles?.educationDegree || {},
    educationInstitution: aboutStyles?.educationInstitution || {},
    educationYear: aboutStyles?.educationYear || {},
    languagesTitle: aboutStyles?.languagesTitle || {},
    languageItem: aboutStyles?.languageItem || {},
    languageLevel: aboutStyles?.languageLevel || {},
    skillsTitle: aboutStyles?.skillsTitle || {},
    skillItem: aboutStyles?.skillItem || {},
    certificationsTitle: aboutStyles?.certificationsTitle || {},
    certificationItem: aboutStyles?.certificationItem || {},
  };
  
  // 🎯 Helper function para destacar seção ativa
  const getHighlightClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    console.log(`🎨 Highlight para ${sectionId}:`, isActive ? 'ATIVO!' : 'inativo');
    return isActive
      ? 'border-cyan-400 border-[3px] shadow-[0_0_60px_rgba(6,182,212,0.8),inset_0_0_30px_rgba(6,182,212,0.3)] scale-[1.02] bg-cyan-500/10 animate-pulse' 
      : 'border-cyan-500/10';
  };
  
  // Configuração do carrossel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Timeline data
  const timelineItems = [
    { date: '2025 - 2026', company: 'FictorPay' },
    { date: '2022 - 2025', company: 'Shopee' },
    { date: '2021 - 2022', company: 'Comgás' },
    { date: '2019 - 2020', company: 'Baer-Mate' },
    { date: '2014 - 2019', company: 'Get2Gether' },
    { date: '2013 - 2014', company: 'Future Group' },
  ];

  // Cases de Sucesso - dados idênticos do CasesSection
  const cases = [
    {
      icon: Rocket,
      color: 'cyan' as const,
      image: 'https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwcGF5bWVudHMlMjBzdGFydHVwJTIwb2ZmaWNlfGVufDF8fHx8MTc3Mjg1MjY3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case1,
    },
    {
      icon: Zap,
      color: 'orange' as const,
      image: 'https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wZWUlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzI4NTI2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case2,
    },
    {
      icon: Shield,
      color: 'blue' as const,
      image: 'https://images.unsplash.com/photo-1636926973187-469fc07293df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyODUyNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case3,
    },
    {
      icon: TrendingUp,
      color: 'green' as const,
      image: 'https://images.unsplash.com/photo-1737690974141-c964afbdf986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMG1hcmtldGluZyUyMGZpZWxkJTIwc2FsZXN8ZW58MXx8fHwxNzcyODUyNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case4,
    },
    {
      icon: Heart,
      color: 'pink' as const,
      image: 'https://images.unsplash.com/photo-1663298953773-4a63966632a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBicmFzaWx8ZW58MXx8fHwxNzcyODUyNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case5,
    },
    {
      icon: Video,
      color: 'indigo' as const,
      image: 'https://images.unsplash.com/photo-1765277873772-cefea49ce17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwc2hvdyUyMHRoZWF0ZXIlMjBzdGFnZXxlbnwxfHx8fDE3NzI4NTI2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case6,
    },
  ];

  // Pilares com ícones - consumindo dados do storage
  const pilaresData = [
    { 
      iconName: about.pilarsIcon1 || 'Target', 
      title: language === 'pt' ? about.pilar1Title_pt : about.pilar1Title_en, 
      desc: language === 'pt' ? about.pilar1Desc_pt : about.pilar1Desc_en 
    },
    { 
      iconName: about.pilarsIcon2 || 'BarChart3', 
      title: language === 'pt' ? about.pilar2Title_pt : about.pilar2Title_en, 
      desc: language === 'pt' ? about.pilar2Desc_pt : about.pilar2Desc_en 
    },
    { 
      iconName: about.pilarsIcon3 || 'Rocket', 
      title: language === 'pt' ? about.pilar3Title_pt : about.pilar3Title_en, 
      desc: language === 'pt' ? about.pilar3Desc_pt : about.pilar3Desc_en 
    },
    { 
      iconName: about.pilarsIcon4 || 'Users', 
      title: language === 'pt' ? about.pilar4Title_pt : about.pilar4Title_en, 
      desc: language === 'pt' ? about.pilar4Desc_pt : about.pilar4Desc_en 
    },
  ];
  
  // Map icon names to actual icon components
  const iconMap: Record<string, any> = {
    Target, BarChart3, Rocket, Users, Zap, TrendingUp, Award, Lightbulb,
    GraduationCap, Languages, FileCheck, Shield, Globe, Heart, Video
  };
  
  const pilaresIcons = pilaresData.map(p => ({
    icon: iconMap[p.iconName] || Target,
    title: p.title,
    desc: p.desc
  }));
  
  return (
    <section id="trajetoria" className="py-32 border-b border-white/5 bg-slate-950/30 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-500/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Título da Seção */}
        <div 
          id="trajetoria-title"
          className={`text-center mb-16 transition-all ${getHighlightClass('trajetoria-title')}`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            <span 
              id="trajetoria-title1"
              style={{
              fontFamily: safeAboutStyles.sectionTitle.fontFamily,
              fontSize: safeAboutStyles.sectionTitle.fontSize,
              fontWeight: safeAboutStyles.sectionTitle.fontWeight,
              color: safeAboutStyles.sectionTitle.color,
              lineHeight: safeAboutStyles.sectionTitle.lineHeight,
            }}>
              {language === 'pt' ? about.sectionTitle_pt : about.sectionTitle_en}
            </span>{' '}
            <span 
              id="trajetoria-title2"
              style={{
              fontFamily: safeAboutStyles.sectionTitleHighlight.fontFamily,
              fontSize: safeAboutStyles.sectionTitleHighlight.fontSize,
              fontWeight: safeAboutStyles.sectionTitleHighlight.fontWeight,
              color: safeAboutStyles.sectionTitleHighlight.color,
              lineHeight: safeAboutStyles.sectionTitleHighlight.lineHeight,
            }} className="italic">
              {language === 'pt' ? about.sectionTitleHighlight_pt : about.sectionTitleHighlight_en}
            </span>
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
        </div>

        {/* ═════════════════ LINHA 1 ═══════════════════ */}
        {/* 50% Sobre + 50% Grid 2x2 (Formação/Idiomas/Skills/Certs) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          
          {/* SOBRE MIM - 50% */}
          <div 
            id="about-text"
            className={`backdrop-blur-sm border p-10 rounded-sm transition-all ${getHighlightClass('about-text')}`}
            style={{
              ...applyBackgroundColor(safeAboutStyles.aboutCard.backgroundColor), // ✅ USAR HELPER!
              borderColor: safeAboutStyles.aboutCard.borderColor,
            }}
          >
            <div 
              id="about-text-title"
              className={`flex items-center gap-3 mb-6 transition-all ${getHighlightClass('about-text-title')}`}
            >
              <div 
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{ ...applyBackgroundColor(safeAboutStyles.aboutContent.iconBackgroundColor) }} // ✅ USAR HELPER!
              >
                <Award 
                  size={20}
                  style={{ color: safeAboutStyles.aboutContent.iconColor }}
                />
              </div>
              <h3 
                className="text-sm md:text-base font-black uppercase tracking-[0.3em]"
                style={{ color: safeAboutStyles.aboutContent.accentColor }}
              >
                {language === 'pt' ? about.aboutTitle_pt : about.aboutTitle_en}
              </h3>
            </div>
            <p 
              id="about-text-content"
              className={`text-base md:text-lg leading-relaxed font-light transition-all ${getHighlightClass('about-text-content')}`}
              style={{ color: safeAboutStyles.aboutContent.textColor }}
            >
              {language === 'pt' ? about.aboutText_pt : about.aboutText_en}
            </p>
          </div>

          {/* GRID 2x2 - 50% */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* FORMAÇÃO */}
            <div 
              id="about-education"
              className={`bg-slate-900/50 backdrop-blur-sm border p-6 rounded-sm hover:border-cyan-500/30 transition-all ${getHighlightClass('about-education')}`}
            >
              <div 
                id="about-education-title"
                className={`flex items-center gap-2 mb-4 transition-all ${getHighlightClass('about-education-title')}`}
              >
                <div className="w-8 h-8 bg-cyan-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-cyan-400" size={16} />
                </div>
                <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-cyan-400 leading-tight">
                  {language === 'pt' ? about.educationTitle_pt : about.educationTitle_en}
                </h3>
              </div>
              <ul 
                id="about-education-items"
                className={`space-y-2 transition-all ${getHighlightClass('about-education-items')}`}
              >
                {about.educationItems.map((item, index) => (
                  <li key={item.id} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <span className="text-sm md:text-base text-slate-300 font-medium block leading-tight">
                        {language === 'pt' ? item.degree_pt : item.degree_en}
                      </span>
                      <div className="text-xs md:text-sm text-slate-500">{item.institution} • {item.year}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* IDIOMAS */}
            <div 
              id="about-languages"
              className={`bg-slate-900/50 backdrop-blur-sm border p-6 rounded-sm hover:border-cyan-500/30 transition-all ${getHighlightClass('about-languages')}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Languages className="text-cyan-400" size={16} />
                </div>
                <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-cyan-400 leading-tight">
                  {language === 'pt' ? about.languagesTitle_pt : about.languagesTitle_en}
                </h3>
              </div>
              {about.languageItems.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{item.flag}</span>
                    <span className="text-sm md:text-base text-slate-300">
                      {language === 'pt' ? item.name_pt : item.name_en}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-cyan-400 uppercase tracking-wider">
                    {language === 'pt' ? item.level_pt : item.level_en}
                  </span>
                </div>
              ))}
            </div>

            {/* COMPETNCIAS */}
            <div 
              id="about-skills"
              className={`bg-slate-900/50 backdrop-blur-sm border p-6 rounded-sm hover:border-cyan-500/30 transition-all ${getHighlightClass('about-skills')}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-cyan-400" size={16} />
                </div>
                <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-cyan-400 leading-tight">
                  {language === 'pt' ? about.skillsTitle_pt : about.skillsTitle_en}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {(language === 'pt' ? about.skillItems_pt : about.skillItems_en).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs font-medium text-cyan-400 hover:bg-cyan-500/20 transition-colors whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CERTIFICAÇÕES */}
            <div 
              id="about-certifications"
              className={`bg-slate-900/50 backdrop-blur-sm border p-6 rounded-sm hover:border-cyan-500/30 transition-all ${getHighlightClass('about-certifications')}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FileCheck className="text-cyan-400" size={16} />
                </div>
                <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-cyan-400 leading-tight">
                  {language === 'pt' ? about.certificationsTitle_pt : about.certificationsTitle_en}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {about.certificationItems.map((cert, index) => (
                  <li key={cert.id} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-slate-300 leading-tight">
                      {language === 'pt' ? cert.name_pt : cert.name_en}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ═══════════════════ LINHA 2 ═══════════════════ */}
        {/* 50% Grid 2x2 Pilares + 50% Big Numbers */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          
          {/* GRID 2x2 - 4 PILARES - 50% */}
          <div className="grid grid-cols-2 gap-4">
            {pilaresIcons.map((pilar, index) => {
              const Icon = pilar.icon;
              const pilarId = `about-pilar-${index + 1}`;
              return (
                <div
                  key={index}
                  id={pilarId}
                  className={`bg-slate-900/50 backdrop-blur-sm border p-6 rounded-sm hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group ${getHighlightClass(pilarId)}`}
                >
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-sm flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="text-cyan-400" size={20} />
                  </div>
                  <h4 className="text-xs md:text-sm font-black text-cyan-400 mb-2 uppercase tracking-wide leading-tight line-clamp-1">
                    {pilar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* BIG NUMBERS - 50% */}
          <div 
            id="about-bignumbers"
            className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-10 rounded-sm hover:border-cyan-500/30 transition-all ${getHighlightClass('about-bignumbers')}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-sm flex items-center justify-center">
                <TrendingUp className="text-cyan-400" size={20} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
                Big Numbers
              </h3>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {/* 1. 15+ Anos de Experiência */}
              <div id="about-bignumber-1" className={`transition-all ${getHighlightClass('about-bignumber-1')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  <Counter end={15} suffix="+" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label1.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label1Desc}</p>
              </div>

              {/* 2. 5 Países da América Latina */}
              <div id="about-bignumber-2" className={`transition-all ${getHighlightClass('about-bignumber-2')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  <Counter end={5} suffix="" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label2.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label2Desc}</p>
              </div>

              {/* 3. 90+ Projetos Viabilizados */}
              <div id="about-bignumber-3" className={`transition-all ${getHighlightClass('about-bignumber-3')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  <Counter end={90} suffix="+" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label3.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label3Desc}</p>
              </div>

              {/* 4. 100x Escala de Vouchers */}
              <div id="about-bignumber-4" className={`transition-all ${getHighlightClass('about-bignumber-4')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  <Counter end={100} suffix="x" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label4.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label4Desc}</p>
              </div>

              {/* 5. 90% Ganho de Eficiência */}
              <div id="about-bignumber-5" className={`transition-all ${getHighlightClass('about-bignumber-5')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  <Counter end={90} suffix="%" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label5.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label5Desc}</p>
              </div>

              {/* 6. 87% Redução de Lead Time */}
              <div id="about-bignumber-6" className={`transition-all ${getHighlightClass('about-bignumber-6')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  <Counter end={87} suffix="%" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label6.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label6Desc}</p>
              </div>

              {/* 7. R$ 1 Milhão em 48 Horas */}
              <div id="about-bignumber-7" className={`transition-all ${getHighlightClass('about-bignumber-7')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  R$ 1Mi
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label7.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label7Desc}</p>
              </div>

              {/* 8. 1 Case Histórico */}
              <div id="about-bignumber-8" className={`transition-all ${getHighlightClass('about-bignumber-8')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  <Counter end={1} suffix="" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label8.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label8Desc}</p>
              </div>

              {/* 9. 98% de Precisão (SLA) */}
              <div id="about-bignumber-9" className={`transition-all ${getHighlightClass('about-bignumber-9')}`}>
                <div className="text-4xl font-black text-cyan-400 mb-2 leading-none">
                  <Counter end={98} suffix="%" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label9.replace('\\n', '<br/>') }}></div>
                <p className="text-[10px] text-slate-400 leading-tight">{t.bigNumbers.label9Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════ LINHA 3 ═══════════════════ */}
        {/* Timeline Horizontal - 100% */}
        <div 
          id="about-timeline"
          className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-10 rounded-sm mb-6 transition-all ${getHighlightClass('about-timeline')}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-sm flex items-center justify-center">
              <TrendingUp className="text-cyan-400" size={20} />
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
              {t.timelineBadge}
            </h3>
          </div>
          
          <div className="timeline-horizontal px-4">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                id={`about-timeline-${index + 1}`}
                className={`timeline-item-h transition-all ${getHighlightClass(`about-timeline-${index + 1}`)}`}
              >
                <div className="timeline-dot"></div>
                <span className="block text-xs md:text-sm font-black text-cyan-400 mb-1 uppercase">
                  {item.date}
                </span>
                <span className="block text-base md:text-lg font-black text-white uppercase tracking-tighter">
                  {item.company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════ LINHA 4 ═══════════════════ */}
        {/* Cases de Sucesso - Carrossel - 100% */}
        <div className="relative pb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-sm flex items-center justify-center">
                <Award className="text-cyan-400" size={20} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
                {tCases.title}
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-sm flex items-center justify-center hover:bg-cyan-500/20 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-cyan-400" size={20} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-sm flex items-center justify-center hover:bg-cyan-500/20 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="text-cyan-400" size={20} />
              </button>
            </div>
          </div>

          <Slider ref={sliderRef} {...sliderSettings}>
            {cases.map((caseItem, idx) => {
              const Icon = caseItem.icon;
              const colorClasses = {
                orange: {
                  bg: 'bg-orange-500/10 border-orange-500/20',
                  icon: 'text-orange-400',
                  text: 'text-orange-400',
                  metric: 'text-orange-400'
                },
                cyan: {
                  bg: 'bg-cyan-500/10 border-cyan-500/20',
                  icon: 'text-cyan-400',
                  text: 'text-cyan-400',
                  metric: 'text-cyan-400'
                },
                blue: {
                  bg: 'bg-blue-500/10 border-blue-500/20',
                  icon: 'text-blue-400',
                  text: 'text-blue-400',
                  metric: 'text-blue-400'
                },
                purple: {
                  bg: 'bg-purple-500/10 border-purple-500/20',
                  icon: 'text-purple-400',
                  text: 'text-purple-400',
                  metric: 'text-purple-400'
                },
                green: {
                  bg: 'bg-green-500/10 border-green-500/20',
                  icon: 'text-green-400',
                  text: 'text-green-400',
                  metric: 'text-green-400'
                },
                red: {
                  bg: 'bg-red-500/10 border-red-500/20',
                  icon: 'text-red-400',
                  text: 'text-red-400',
                  metric: 'text-red-400'
                },
                pink: {
                  bg: 'bg-pink-500/10 border-pink-500/20',
                  icon: 'text-pink-400',
                  text: 'text-pink-400',
                  metric: 'text-pink-400'
                },
                indigo: {
                  bg: 'bg-indigo-500/10 border-indigo-500/20',
                  icon: 'text-indigo-400',
                  text: 'text-indigo-400',
                  metric: 'text-indigo-400'
                },
                slate: {
                  bg: 'bg-slate-500/10 border-slate-500/20',
                  icon: 'text-slate-400',
                  text: 'text-slate-400',
                  metric: 'text-slate-400'
                }
              };
              const colors = colorClasses[caseItem.color];
              
              return (
                <div key={idx} className="px-2">
                  <div 
                    className="group border border-slate-800 rounded-sm hover:border-cyan-500/30 transition-all duration-300 overflow-hidden relative h-[600px] sm:h-[650px] md:h-[700px]"
                    onMouseEnter={() => setHoveredCase(idx)}
                    onMouseLeave={() => setHoveredCase(null)}
                    onClick={() => setHoveredCase(hoveredCase === idx ? null : idx)}
                  >
                    {/* Estado NORMAL - Imagem de fundo + Título */}
                    <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredCase === idx ? 'opacity-0' : 'opacity-100'}`}>
                      <img
                        src={caseItem.image}
                        alt={caseItem.data.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm ${colors.bg} border flex items-center justify-center mb-3 sm:mb-4`}>
                          <Icon className={colors.icon} size={20} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
                          {caseItem.data.title}
                        </h3>
                      </div>
                    </div>

                    {/* Estado HOVER - Card completo */}
                    <div className={`absolute inset-0 bg-slate-900 transition-opacity duration-300 ${hoveredCase === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <div className="h-full flex flex-col p-4 sm:p-6">
                        {/* Header */}
                        <div className="border-b border-slate-800 pb-4 mb-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm ${colors.bg} border flex items-center justify-center mb-3`}>
                            <Icon className={colors.icon} size={20} />
                          </div>
                          <h3 className="text-base sm:text-lg font-black text-white leading-tight mb-2">
                            {caseItem.data.title}
                          </h3>
                          <span className={`text-xs font-bold ${colors.text} uppercase tracking-widest`}>
                            {caseItem.data.company}
                          </span>
                        </div>

                        {/* Content - SEM overflow scroll */}
                        <div className="space-y-3 sm:space-y-4 flex-grow">
                          {/* Challenge */}
                          <div>
                            <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1.5">
                              {tCases.challenge}
                            </span>
                            <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed">
                              {caseItem.data.challenge}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1.5">
                              {tCases.solution}
                            </span>
                            <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed">
                              {caseItem.data.solution}
                            </p>
                          </div>

                          {/* Results */}
                          <div className="pt-3 border-t border-slate-800">
                            <span className="text-[9px] sm:text-[10px] font-black text-cyan-400 uppercase tracking-wider block mb-3">
                              {tCases.results}
                            </span>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                              <div className="text-center">
                                <div className={`text-lg sm:text-xl md:text-2xl font-black ${colors.metric} mb-1`}>
                                  {caseItem.data.metric1}
                                </div>
                                <div className="text-[8px] sm:text-[9px] text-slate-500 uppercase tracking-wider leading-tight">
                                  {caseItem.data.label1}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className={`text-lg sm:text-xl md:text-2xl font-black ${colors.metric} mb-1`}>
                                  {caseItem.data.metric2}
                                </div>
                                <div className="text-[8px] sm:text-[9px] text-slate-500 uppercase tracking-wider leading-tight">
                                  {caseItem.data.label2}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className={`text-lg sm:text-xl md:text-2xl font-black ${colors.metric} mb-1`}>
                                  {caseItem.data.metric3}
                                </div>
                                <div className="text-[8px] sm:text-[9px] text-slate-500 uppercase tracking-wider leading-tight">
                                  {caseItem.data.label3}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Impact */}
                          <div className="pt-3 border-t border-slate-800">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="text-cyan-400 mt-0.5 flex-shrink-0" size={12} />
                              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed font-medium">
                                {caseItem.data.finalImpact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}