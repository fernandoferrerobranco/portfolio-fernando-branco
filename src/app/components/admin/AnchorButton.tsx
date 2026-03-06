import { ArrowRight } from 'lucide-react';

interface AnchorButtonProps {
  targetId: string;
  onAnchor: (targetId: string) => void;
  size?: 'sm' | 'md';
}

/**
 * 🎯 Botão de âncora para rolar admin + preview até o componente alvo
 */
export function AnchorButton({ targetId, onAnchor, size = 'sm' }: AnchorButtonProps) {
  const sizeClasses = size === 'sm' 
    ? 'w-5 h-5 p-0.5' 
    : 'w-6 h-6 p-1';
  
  const iconSize = size === 'sm' ? 10 : 12;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // Evita conflito com outros clicks
        onAnchor(targetId);
      }}
      className={`${sizeClasses} bg-cyan-500/10 border border-cyan-500/30 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all flex items-center justify-center group`}
      title={`Ir para ${targetId} no preview`}
    >
      <ArrowRight 
        className="text-cyan-400 group-hover:text-cyan-300 transition-colors" 
        size={iconSize}
      />
    </button>
  );
}
