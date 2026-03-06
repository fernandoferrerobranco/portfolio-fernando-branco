import { useEffect, useState } from 'react';
import AOS from 'aos';
import { Language, translations } from './data/translations';
import { HeroSection } from './components/HeroSection';
import { TrajetoriaSection } from './components/TrajetoriaSection';
import { DepoimentosSection } from './components/DepoimentosSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { LanguageToggle } from './components/LanguageToggle';
import { ScrollToTop } from './components/ScrollToTop';
import { AnalyticsTracker } from './components/AnalyticsTracker';
import { GetProjectInfo } from './utils/getProjectInfo';
import { useAdminSafe } from './context/AdminContext';
import { loadData, type PortfolioData } from '../lib/storage';

export default function Portfolio({ activeSection: activeFromAdmin }: { activeSection?: string | null } = {}) {
  const [language, setLanguage] = useState<Language>('pt');
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(loadData());
  const t = translations[language];
  
  // Usar activeSection passado como prop (do admin) OU tentar pegar do context (fallback)
  const activeFromContext = useAdminSafe();
  const activeSection = activeFromAdmin ?? activeFromContext;
  
  console.log(' Portfolio recebeu activeSection:', { activeFromAdmin, activeFromContext, final: activeSection });
  
  // Mostrar info do projeto em dev (remova depois)
  const [showDevInfo, setShowDevInfo] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    // Mostrar info apenas em localhost ou com query param ?dev=true
    const isLocalhost = window.location.hostname === 'localhost';
    const hasDevParam = window.location.search.includes('dev=true');
    setShowDevInfo(isLocalhost || hasDevParam);
    
    // ⚡ LISTENER: Escutar mudanças do admin em tempo real
    const handleAdminUpdate = (event: any) => {
      console.log('🔥 Portfolio - Evento admin-preview-update recebido!', event.detail);
      setPortfolioData(event.detail);
    };
    
    window.addEventListener('admin-preview-update', handleAdminUpdate);
    
    return () => {
      window.removeEventListener('admin-preview-update', handleAdminUpdate);
    };
  }, []);

  return (
    <div className="antialiased w-full min-h-screen">
      {/* Analytics Tracking */}
      <AnalyticsTracker />
      
      {/* DEV: Mostra PROJECT_ID - REMOVA DEPOIS! */}
      {showDevInfo && <GetProjectInfo />}
      
      {/* Navigation */}
      <nav className="w-full z-50 glass-effect border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-black tracking-widest text-white uppercase italic">
            Fernando Branco <span className="text-cyan-400">_</span>
          </span>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8 text-[10px] font-black uppercase tracking-[0.2em]">
              <a href="#perfil" className="hover:text-cyan-400 transition">
                {t.nav.profile}
              </a>
              <a href="#experiencia" className="hover:text-cyan-400 transition">
                {t.nav.experience}
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition">
                {t.nav.skills}
              </a>
            </div>
            <LanguageToggle currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection language={language} />
      
      {/* Trajectory Section */}
      <TrajetoriaSection language={language} activeSection={activeSection} />

      {/* Detailed Experiences */}
      <ExperiencesSection language={language} activeSection={activeSection} />

      {/* Testimonials */}
      <DepoimentosSection language={language} />

      {/* Skills */}
      <SkillsSection language={language} />

      {/* Footer */}
      <Footer language={language} />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}