import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  dateColor: string;
  dateRange: string;
  company: string;
  companyType: string;
  companyColor: string;
  role: string;
  iconColor: string;
  scope: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  dateColor,
  dateRange,
  company,
  companyType,
  companyColor,
  role,
  iconColor,
  scope,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className="glass-effect rounded-sm tech-glow transition-all"
      data-aos="fade-up"
    >
      <button
        className={`w-full p-10 flex justify-between items-center text-left ${
          isOpen ? 'active-btn' : ''
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center gap-8">
          <span
            className={`text-[10px] font-black ${dateColor} text-slate-950 px-3 py-1 rounded-sm uppercase tracking-widest`}
          >
            {dateRange}
          </span>
          <div>
            <h3 className={`text-2xl font-black uppercase tracking-tight text-white mb-1`}>
              {company} <span className={`${companyColor} font-light text-sm ml-2`}>{companyType}</span>
            </h3>
            <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em]">{role}</p>
          </div>
        </div>
        <ChevronDown
          className={`${iconColor} transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={28}
        />
      </button>

      {isOpen && (
        <div className="px-10 pb-10 pt-0 border-t border-white/5">
          <div className="mb-8 pt-8">
            <div className="inline-block px-3 py-1 rounded-sm bg-slate-900/50 border border-slate-800 text-slate-400 font-bold text-[9px] mb-4 uppercase tracking-[0.25em]">
              Escopo
            </div>
            <p className="text-sm leading-relaxed text-slate-100 font-light">{scope}</p>
          </div>
          {children}
        </div>
      )}
    </div>
  );
}