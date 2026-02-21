import { useEffect, useState } from 'react';
import { MapPin, Mail } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface HeroSectionProps {
  language: Language;
}

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

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language].hero;
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    // Carregar dados do localStorage (se existirem)
    const loadData = () => {
      try {
        const saved = localStorage.getItem('portfolio_hero');
        if (saved) {
          setHeroData(JSON.parse(saved));
        }
      } catch (error) {
        console.error('Erro ao carregar dados do Hero:', error);
      }
    };

    loadData();

    // Listener para mudanças no localStorage (quando salvar no admin)
    window.addEventListener('storage', loadData);
    return () => window.removeEventListener('storage', loadData);
  }, []);

  // Usar dados do localStorage ou fallback para tradução
  const badge = heroData?.badge || t.badge;
  const title1 = heroData?.title1 || t.title1;
  const title2 = heroData?.title2 || t.title2;
  const title3 = heroData?.title3 || t.title3;
  const title4 = heroData?.title4 || t.title4;
  const title5 = heroData?.title5 || t.title5;
  const location = heroData?.location || t.location;
  const email = heroData?.email || 'fernando@g2g.org.br';
  const cardName = heroData?.cardName || t.cardName;
  const cardRole = heroData?.cardRole || t.cardRole;

  return (
    <header className="hero-gradient min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div data-aos="fade-right">
          <div className="inline-block px-3 py-1 rounded-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-[10px] mb-6 uppercase tracking-[0.3em]">
            {badge}
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-6 tracking-tight">
            <span className="block">{title1}</span>
            <span className="block">{title2}</span>
            <span className="block text-cyan-400 italic">{title3}</span>
            <span className="block">{title4}</span>
            <span className="block">{title5}</span>
          </h1>
          
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                <MapPin className="text-cyan-400" size={18} />
              </div>
              <span className="text-sm font-medium text-slate-300">{location}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                <Mail className="text-cyan-400" size={18} />
              </div>
              <span className="text-sm font-medium">{email}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-sm font-black hover:bg-cyan-400 transition uppercase tracking-widest text-xs"
            >
              {t.cta1}
            </a>
            <a
              href="#contato"
              className="border border-slate-800 text-white px-8 py-4 rounded-sm font-black hover:bg-white/5 transition uppercase tracking-widest text-xs"
            >
              {t.cta2}
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex justify-end" data-aos="zoom-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-sm blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-950 ring-1 ring-white/10 rounded-sm p-12 flex flex-col items-center">
              <div className="w-40 h-40 bg-slate-900 rounded-full flex items-center justify-center mb-8 border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                <svg
                  className="text-cyan-400"
                  width="64"
                  height="64"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-black italic tracking-tight text-white">
                  {cardName}
                </h2>
                <span className="text-cyan-400 font-bold text-[10px] uppercase tracking-[0.4em] mt-3 block">
                  {cardRole}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}