import { Info } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface DemoBadgeProps {
  language: Language;
}

export function DemoBadge({ language }: DemoBadgeProps) {
  const demoText = language === 'pt' 
    ? 'Dados de Demonstração' 
    : 'Demo Data';
  
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-slate-900/80 border border-slate-700/50 text-slate-400 mb-8">
      <Info size={14} className="text-slate-500" />
      <span className="text-[10px] font-bold uppercase tracking-widest">
        {demoText}
      </span>
    </div>
  );
}