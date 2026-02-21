import { useState, useRef } from 'react';
import Slider from 'react-slick';
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
  Users
} from 'lucide-react';
import { Counter } from './Counter';
import { Language, translations } from '../data/translations';

interface TrajetoriaSectionProps {
  language: Language;
}

export function TrajetoriaSection({ language }: TrajetoriaSectionProps) {
  const t = translations[language].trajectory;
  const tCases = translations[language].cases;
  const sliderRef = useRef<Slider>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  
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
    { date: '2024 - 2025', company: 'FictorPay' },
    { date: '2022 - 2024', company: 'Shopee' },
    { date: '2021 - 2022', company: 'Comgás' },
    { date: '2020 - 2021', company: 'Be Arts' },
    { date: '2019 - 2020', company: 'Baer-Mate' },
    { date: '2019', company: 'Puff BR' },
    { date: '2014 - 2019', company: 'Get2Gether' },
    { date: '2013 - 2014', company: 'Future Group' },
    { date: '2011 - 2012', company: 'TV Globo' },
  ];

  // Cases de Sucesso - dados idênticos do CasesSection
  const cases = [
    {
      icon: Zap,
      color: 'orange' as const,
      image: 'https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wZWUlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzE2MjA2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case1,
    },
    {
      icon: TrendingUp,
      color: 'cyan' as const,
      image: 'https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzcxNjIwNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case2,
    },
    {
      icon: Target,
      color: 'blue' as const,
      image: 'https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NzE1NDQ3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      data: tCases.case3,
    },
  ];

  // Pilares com ícones
  const pilaresIcons = [
    { icon: Target, title: t.bento.card1.title, desc: t.bento.card1.desc },
    { icon: BarChart3, title: t.bento.card2.title, desc: t.bento.card2.desc },
    { icon: Rocket, title: t.bento.card3.title, desc: t.bento.card3.desc },
    { icon: Users, title: t.bento.card4.title, desc: t.bento.card4.desc },
  ];
  
  return (
    <section id="perfil" className="py-32 border-b border-white/5 bg-slate-950/30 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-500/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            {t.title} <span className="text-cyan-400 italic">{t.titleHighlight}</span>
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
        </div>

        {/* ═══════════════════ LINHA 1 ═══════════════════ */}
        {/* 50% Sobre + 50% Grid 2x2 (Formação/Idiomas/Skills/Certs) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6" data-aos="fade-up">
          
          {/* SOBRE MIM - 50% */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-10 rounded-sm hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-sm flex items-center justify-center">
                <Award className="text-cyan-400" size={20} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
                {t.about}
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {t.profileText}
            </p>
          </div>

          {/* GRID 2x2 - 50% */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* FORMAÇÃO */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-6 rounded-sm hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-cyan-400" size={16} />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 leading-tight">
                  {t.education.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {t.education.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <span className="text-xs text-slate-300 font-medium block leading-tight">{item.degree}</span>
                      <div className="text-[10px] text-slate-500">{item.institution} • {item.year}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* IDIOMAS */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-6 rounded-sm hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Languages className="text-cyan-400" size={16} />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 leading-tight">
                  {t.languages.title}
                </h3>
              </div>
              {t.languages.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{item.flag}</span>
                    <span className="text-xs text-slate-300">{item.lang}</span>
                  </div>
                  <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-wider">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>

            {/* COMPETÊNCIAS */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-6 rounded-sm hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-cyan-400" size={16} />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 leading-tight">
                  {t.skills.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {t.skills.items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-sm text-[9px] font-bold text-cyan-400 uppercase tracking-wider hover:bg-cyan-500/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CERTIFICAÇÕES */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-6 rounded-sm hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FileCheck className="text-cyan-400" size={16} />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 leading-tight">
                  {t.certifications.title}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {t.certifications.items.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-xs text-slate-300 leading-tight">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ═══════════════════ LINHA 2 ═══════════════════ */}
        {/* 50% Grid 2x2 Pilares + 50% Big Numbers */}
        <div className="grid md:grid-cols-2 gap-6 mb-6" data-aos="fade-up">
          
          {/* GRID 2x2 - 4 PILARES - 50% */}
          <div className="grid grid-cols-2 gap-4">
            {pilaresIcons.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-6 rounded-sm hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-sm flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="text-cyan-400" size={20} />
                  </div>
                  <h4 className="text-[10px] font-black text-cyan-400 mb-2 uppercase tracking-wide leading-tight line-clamp-1">
                    {pilar.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* BIG NUMBERS - 50% */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-10 rounded-sm hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-sm flex items-center justify-center">
                <TrendingUp className="text-cyan-400" size={20} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
                Big Numbers
              </h3>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-1 leading-none">
                  <Counter end={19} suffix="+" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label1.replace('\\n', '<br/>') }}></div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-1 leading-none">
                  <Counter end={98} suffix="%" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label2.replace('\\n', '<br/>') }}></div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-1 leading-none">
                  <Counter end={500} suffix="+" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label3.replace('\\n', '<br/>') }}></div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-1 leading-none">
                  <Counter end={3} suffix="" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label4.replace('\\n', '<br/>') }}></div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-1 leading-none">
                  <Counter end={500} suffix="" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label5.replace('\\n', '<br/>') }}></div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-1 leading-none">
                  <Counter end={9} suffix="+" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500" dangerouslySetInnerHTML={{ __html: t.bigNumbers.label6.replace('\\n', '<br/>') }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════ LINHA 3 ═══════════════════ */}
        {/* Timeline Horizontal - 100% */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 p-10 rounded-sm mb-6" data-aos="fade-up">
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
              <div key={index} className="timeline-item-h">
                <div className="timeline-dot"></div>
                <span className="block text-[10px] font-black text-cyan-400 mb-1 uppercase">
                  {item.date}
                </span>
                <span className="block text-sm font-black text-white uppercase tracking-tighter">
                  {item.company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════ LINHA 4 ═══════════════════ */}
        {/* Cases de Sucesso - Carrossel - 100% */}
        <div className="relative pb-12" data-aos="fade-up">
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
                }
              };
              const colors = colorClasses[caseItem.color];
              
              return (
                <div key={idx} className="px-2">
                  <div 
                    className="group border border-slate-800 rounded-sm hover:border-cyan-500/30 transition-all duration-300 overflow-hidden relative"
                    style={{ minHeight: '600px' }}
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
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className={`w-12 h-12 rounded-sm ${colors.bg} border flex items-center justify-center mb-4`}>
                          <Icon className={colors.icon} size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tight">
                          {caseItem.data.title}
                        </h3>
                      </div>
                    </div>

                    {/* Estado HOVER - Card completo */}
                    <div className={`absolute inset-0 bg-slate-900 transition-opacity duration-300 ${hoveredCase === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="p-6 border-b border-slate-800">
                          <div className={`w-14 h-14 rounded-sm ${colors.bg} border flex items-center justify-center mb-4`}>
                            <Icon className={colors.icon} size={28} />
                          </div>
                          <h3 className="text-lg font-black text-white leading-tight mb-2">
                            {caseItem.data.title}
                          </h3>
                          <span className={`text-xs font-bold ${colors.text} uppercase tracking-widest`}>
                            {caseItem.data.company}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4 flex-grow overflow-y-auto">
                          {/* Challenge */}
                          <div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-2">
                              {tCases.challenge}
                            </span>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {caseItem.data.challenge}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-2">
                              {tCases.solution}
                            </span>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {caseItem.data.solution}
                            </p>
                          </div>

                          {/* Results */}
                          <div className="pt-4 border-t border-slate-800">
                            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-wider block mb-4">
                              {tCases.results}
                            </span>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="text-center">
                                <div className={`text-2xl font-black ${colors.metric} mb-1`}>
                                  {caseItem.data.metric1}
                                </div>
                                <div className="text-[9px] text-slate-500 uppercase tracking-wider leading-tight">
                                  {caseItem.data.label1}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className={`text-2xl font-black ${colors.metric} mb-1`}>
                                  {caseItem.data.metric2}
                                </div>
                                <div className="text-[9px] text-slate-500 uppercase tracking-wider leading-tight">
                                  {caseItem.data.label2}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className={`text-2xl font-black ${colors.metric} mb-1`}>
                                  {caseItem.data.metric3}
                                </div>
                                <div className="text-[9px] text-slate-500 uppercase tracking-wider leading-tight">
                                  {caseItem.data.label3}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Impact */}
                          <div className="pt-4 border-t border-slate-800">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="text-cyan-400 mt-0.5 flex-shrink-0" size={14} />
                              <p className="text-xs text-slate-300 leading-relaxed font-medium">
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
