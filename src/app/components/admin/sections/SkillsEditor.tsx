import type { PortfolioData } from '../../../../lib/storage';

interface SkillsEditorProps {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
}

export function SkillsEditor({ data, onChange }: SkillsEditorProps) {
  return (
    <div className="flex items-center justify-center h-full min-h-[400px]">
      <div className="text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h2 className="text-2xl font-bold text-white mb-2">Em Desenvolvimento</h2>
        <p className="text-slate-400 text-sm">
          Esta seção será implementada em breve
        </p>
      </div>
    </div>
  );
}
