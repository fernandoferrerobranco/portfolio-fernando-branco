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

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const t = translations[language];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="antialiased">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-effect border-b border-white/5">
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
      <TrajetoriaSection language={language} />

      {/* Detailed Experiences */}
      <ExperiencesSection language={language} />

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