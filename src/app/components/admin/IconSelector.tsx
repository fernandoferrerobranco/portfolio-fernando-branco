import { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const ICON_LIST = [
  'Target', 'BarChart3', 'Rocket', 'Users', 'Zap', 'TrendingUp', 
  'Award', 'Lightbulb', 'GraduationCap', 'Languages', 'FileCheck',
  'Heart', 'Star', 'Trophy', 'Sparkles', 'Shield', 'Crown',
  'Flame', 'Coffee', 'Code', 'Database', 'Globe', 'Briefcase',
  'CheckCircle', 'Circle', 'Square', 'Triangle', 'Hexagon',
  'MessageCircle', 'Phone', 'Mail', 'MapPin', 'Calendar',
  'Clock', 'Download', 'Upload', 'Eye', 'Search', 'Filter'
];

interface IconSelectorProps {
  value: string;
  onChange: (iconName: string) => void;
  label?: string;
}

export function IconSelector({ value, onChange, label }: IconSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Get the icon component
  const IconComponent = (LucideIcons as any)[value] || LucideIcons.Target;
  
  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
          {label}
        </Label>
      )}
      
      {/* Current Icon Display */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded flex items-center justify-center">
          <IconComponent className="text-cyan-400" size={20} />
        </div>
        <span className="text-xs text-slate-400 font-mono">{value}</span>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto h-7 px-3 text-[10px] bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20"
        >
          {isOpen ? 'Fechar' : 'Trocar Ícone'}
        </Button>
      </div>
      
      {/* Icon Grid */}
      {isOpen && (
        <div className="grid grid-cols-8 gap-2 p-3 bg-slate-800/30 border border-slate-700 rounded max-h-[200px] overflow-y-auto">
          {ICON_LIST.map((iconName) => {
            const Icon = (LucideIcons as any)[iconName];
            const isSelected = value === iconName;
            
            return (
              <button
                key={iconName}
                onClick={() => {
                  onChange(iconName);
                  setIsOpen(false);
                }}
                className={`w-10 h-10 rounded flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-cyan-500/20 border-2 border-cyan-400'
                    : 'bg-slate-800/50 border border-slate-700 hover:bg-cyan-500/10 hover:border-cyan-500/30'
                }`}
                title={iconName}
              >
                <Icon className={isSelected ? 'text-cyan-400' : 'text-slate-400'} size={18} />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
