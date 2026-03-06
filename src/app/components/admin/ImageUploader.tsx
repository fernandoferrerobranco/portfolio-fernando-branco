import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface ImageUploaderProps {
  value: string;
  onChange: (base64: string) => void;
  label?: string;
  maxSizeKB?: number; // Tamanho máximo em KB
}

export function ImageUploader({
  value,
  onChange,
  label = 'Foto',
  maxSizeKB = 500, // 500KB padrão
}: ImageUploaderProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo
    if (!file.type.startsWith('image/')) {
      toast.error('❌ Arquivo inválido', {
        description: 'Por favor, selecione uma imagem (JPG, PNG, etc.)',
      });
      return;
    }

    // Validar tamanho inicial
    const fileSizeKB = file.size / 1024;
    if (fileSizeKB > maxSizeKB * 2) {
      toast.error('❌ Imagem muito grande', {
        description: `Tamanho máximo: ${maxSizeKB * 2}KB. Arquivo: ${Math.round(fileSizeKB)}KB`,
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Redimensionar e comprimir imagem
      const compressedBase64 = await compressImage(file, maxSizeKB);
      onChange(compressedBase64);
      
      toast.success('✅ Imagem carregada!', {
        description: 'Preview atualizado automaticamente',
      });
    } catch (error: any) {
      toast.error('❌ Erro ao processar imagem', {
        description: error.message,
      });
    } finally {
      setIsProcessing(false);
      // Limpar input para permitir upload do mesmo arquivo novamente
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    onChange('');
    toast.info('🗑️ Imagem removida');
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-[10px] text-slate-500 uppercase tracking-wider block">
          {label}
        </label>
      )}

      <div className="flex gap-2">
        {/* Preview */}
        <div
          className="w-20 h-20 rounded border border-slate-700 bg-slate-900 bg-cover bg-center flex-shrink-0 relative group cursor-pointer"
          style={{ backgroundImage: value ? `url(${value})` : 'none' }}
          onClick={handleClick}
        >
          {!value && (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-600">
              <ImageIcon className="w-6 h-6 mb-1" />
              <span className="text-[8px] text-center px-1">Clique para adicionar</span>
            </div>
          )}
          {value && (
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded">
              <span className="text-white text-[10px] font-bold">Alterar</span>
            </div>
          )}
        </div>

        {/* Controles */}
        <div className="flex-1 flex flex-col gap-2">
          <Button
            onClick={handleClick}
            disabled={isProcessing}
            size="sm"
            className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 h-8 text-xs"
          >
            {isProcessing ? (
              <>
                <div className="w-3 h-3 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                Processando...
              </>
            ) : (
              <>
                <Upload className="w-3 h-3 mr-2" />
                Escolher Arquivo
              </>
            )}
          </Button>

          {value && (
            <Button
              onClick={handleRemove}
              size="sm"
              variant="outline"
              className="border-red-500/30 text-red-400 hover:bg-red-500/10 h-8 text-xs"
            >
              <X className="w-3 h-3 mr-2" />
              Remover
            </Button>
          )}

          <p className="text-[9px] text-slate-600">
            Máx: {maxSizeKB}KB • JPG, PNG, WEBP
          </p>
        </div>
      </div>

      {/* Input oculto */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}

// ========================================
// FUNÇÃO DE COMPRESSÃO DE IMAGEM
// ========================================

async function compressImage(file: File, targetSizeKB: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        // Criar canvas para redimensionar
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Não foi possível criar contexto do canvas'));
          return;
        }

        // Calcular dimensões mantendo aspect ratio
        let width = img.width;
        let height = img.height;
        const maxDimension = 800; // Máximo 800px na maior dimensão

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = (height / width) * maxDimension;
            width = maxDimension;
          } else {
            width = (width / height) * maxDimension;
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Desenhar imagem redimensionada
        ctx.drawImage(img, 0, 0, width, height);

        // Comprimir progressivamente até atingir tamanho alvo
        let quality = 0.9;
        let base64 = canvas.toDataURL('image/jpeg', quality);

        // Estimar tamanho do Base64 em KB
        const estimateSizeKB = (b64: string) => {
          return (b64.length * 3) / 4 / 1024;
        };

        // Reduzir qualidade se necessário
        while (estimateSizeKB(base64) > targetSizeKB && quality > 0.1) {
          quality -= 0.1;
          base64 = canvas.toDataURL('image/jpeg', quality);
        }

        resolve(base64);
      };

      img.onerror = () => {
        reject(new Error('Erro ao carregar imagem'));
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Erro ao ler arquivo'));
    };

    reader.readAsDataURL(file);
  });
}
