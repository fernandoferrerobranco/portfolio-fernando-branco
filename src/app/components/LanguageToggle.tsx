import { Language } from '../data/translations';

export type { Language };

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-slate-900/50 rounded-sm border border-slate-800 p-1">
      <button
        onClick={() => onLanguageChange('pt')}
        className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-all duration-300 ${
          currentLanguage === 'pt'
            ? 'bg-cyan-500/20 border border-cyan-500/30'
            : 'hover:bg-slate-800/50'
        }`}
        title="Português"
      >
        <span className="text-lg">🇧🇷</span>
        <span className={`text-[10px] font-black uppercase tracking-wider ${
          currentLanguage === 'pt' ? 'text-cyan-400' : 'text-slate-500'
        }`}>
          PT
        </span>
      </button>
      
      <button
        onClick={() => onLanguageChange('en')}
        className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-all duration-300 ${
          currentLanguage === 'en'
            ? 'bg-cyan-500/20 border border-cyan-500/30'
            : 'hover:bg-slate-800/50'
        }`}
        title="English"
      >
        <span className="text-lg">🇺🇸</span>
        <span className={`text-[10px] font-black uppercase tracking-wider ${
          currentLanguage === 'en' ? 'text-cyan-400' : 'text-slate-500'
        }`}>
          EN
        </span>
      </button>
    </div>
  );
}