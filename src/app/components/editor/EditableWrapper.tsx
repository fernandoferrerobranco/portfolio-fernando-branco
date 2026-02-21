import { ReactNode, useState } from 'react';
import { Edit2 } from 'lucide-react';
import { useEditor } from '../../contexts/EditorContext';

interface EditableWrapperProps {
  children: ReactNode;
  onEdit: () => void;
  label?: string;
}

export function EditableWrapper({ children, onEdit, label = 'Editar' }: EditableWrapperProps) {
  const { isEditMode } = useEditor();
  const [isHovered, setIsHovered] = useState(false);

  if (!isEditMode) {
    return <>{children}</>;
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Borda pontilhada no hover */}
      {isHovered && (
        <div className="absolute inset-0 border-2 border-dashed border-cyan-400/50 rounded-sm pointer-events-none z-10 animate-pulse" />
      )}

      {/* Botão de edição */}
      {isHovered && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onEdit();
          }}
          className="absolute top-2 right-2 z-20 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-3 py-1.5 rounded-sm flex items-center gap-2 shadow-lg transition-all text-xs font-bold uppercase tracking-wider"
        >
          <Edit2 size={14} />
          {label}
        </button>
      )}

      {children}
    </div>
  );
}
