import { Eye, Edit3, Save, Download, Upload, X } from 'lucide-react';
import { useEditor } from '../../contexts/EditorContext';
import { toast } from 'sonner';
import { useRef } from 'react';

export function EditorToolbar() {
  const { isEditMode, toggleEditMode, saveData, exportData, importData } = useEditor();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const success = saveData();
    if (success) {
      toast.success('✅ Alterações salvas com sucesso!', {
        description: 'Seus dados foram salvos no navegador.',
      });
    } else {
      toast.error('❌ Erro ao salvar', {
        description: 'Não foi possível salvar as alterações.',
      });
    }
  };

  const handleExport = () => {
    exportData();
    toast.success('📥 Dados exportados!', {
      description: 'Arquivo JSON baixado com sucesso.',
    });
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        importData(data);
        toast.success('📤 Dados importados!', {
          description: 'Seus dados foram carregados com sucesso.',
        });
      } catch (error) {
        toast.error('❌ Erro ao importar', {
          description: 'Arquivo JSON inválido.',
        });
      }
    };
    reader.readAsText(file);
  };

  if (!isEditMode) {
    return (
      <button
        onClick={toggleEditMode}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-black uppercase tracking-wider text-sm transition-all hover:scale-105 border-2 border-cyan-400"
      >
        <Edit3 size={20} />
        Ativar Modo Edição
      </button>
    );
  }

  return (
    <>
      {/* Banner de modo edição */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-cyan-500 text-slate-950 py-3 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Edit3 size={20} className="animate-pulse" />
            <span className="font-black uppercase tracking-wider text-sm">
              🎨 Modo Edição Ativado - Clique nos elementos para editar
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="bg-slate-950 hover:bg-slate-800 text-cyan-400 px-4 py-2 rounded-sm flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition"
            >
              <Save size={16} />
              Salvar
            </button>

            <button
              onClick={handleExport}
              className="bg-slate-950 hover:bg-slate-800 text-cyan-400 px-4 py-2 rounded-sm flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition"
            >
              <Download size={16} />
              Exportar
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-slate-950 hover:bg-slate-800 text-cyan-400 px-4 py-2 rounded-sm flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition"
            >
              <Upload size={16} />
              Importar
            </button>

            <button
              onClick={toggleEditMode}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-sm flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition"
            >
              <X size={16} />
              Sair
            </button>
          </div>
        </div>
      </div>

      {/* Input oculto para upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
      />

      {/* Espaçador para compensar o banner */}
      <div className="h-[52px]" />
    </>
  );
}
