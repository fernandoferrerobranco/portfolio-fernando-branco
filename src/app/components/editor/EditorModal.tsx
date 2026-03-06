import { useState, useEffect } from 'react';
import { X, Save, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

interface Field {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'color' | 'select';
  options?: string[];
  placeholder?: string;
  rows?: number;
}

interface EditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: Field[];
  data: any;
  onSave: (data: any) => void;
  onDelete?: () => void;
}

export function EditorModal({
  isOpen,
  onClose,
  title,
  fields,
  data,
  onSave,
  onDelete,
}: EditorModalProps) {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (name: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleDelete = () => {
    if (onDelete && confirm('Tem certeza que deseja deletar este item?')) {
      onDelete();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-cyan-500/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-cyan-400 uppercase tracking-wider flex items-center justify-between">
            <span>✏️ {title}</span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition"
            >
              <X size={24} />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                {field.label}
              </Label>

              {field.type === 'text' && (
                <Input
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              )}

              {field.type === 'textarea' && (
                <Textarea
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  rows={field.rows || 4}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                />
              )}

              {field.type === 'number' && (
                <Input
                  type="number"
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, parseInt(e.target.value))}
                  placeholder={field.placeholder}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              )}

              {field.type === 'color' && (
                <div className="flex gap-3 items-center">
                  <Input
                    type="color"
                    value={formData[field.name] || '#00D9FF'}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="w-20 h-12 bg-slate-800 border-slate-700 cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={formData[field.name] || '#00D9FF'}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder="#00D9FF"
                    className="flex-1 bg-slate-800 border-slate-700 text-white font-mono"
                  />
                </div>
              )}

              {field.type === 'select' && field.options && (
                <select
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-3 pt-4 border-t border-slate-800">
          {onDelete && (
            <Button
              onClick={handleDelete}
              variant="destructive"
              className="bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20"
            >
              <Trash2 size={16} className="mr-2" />
              Deletar
            </Button>
          )}

          <div className="flex gap-3 ml-auto">
            <Button
              onClick={onClose}
              variant="outline"
              className="bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSave}
              className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-black"
            >
              <Save size={16} className="mr-2" />
              Salvar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
