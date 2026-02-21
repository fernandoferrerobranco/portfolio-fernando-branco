import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { Lock, Eye, EyeOff } from 'lucide-react';

// SENHA PADRÃO - MUDE ISSO!
const ADMIN_PASSWORD = 'admin123';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular delay de autenticação
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (password === ADMIN_PASSWORD) {
      // Salvar sessão no localStorage
      localStorage.setItem('admin_authenticated', 'true');
      toast.success('✅ Login realizado com sucesso!');
      navigate('/admin');
    } else {
      toast.error('❌ Senha incorreta', {
        description: 'Tente novamente.',
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5" />
      
      <Card className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border-cyan-500/20 shadow-2xl relative z-10">
        <CardHeader className="text-center space-y-2">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-10 h-10 text-slate-950" />
          </div>
          
          <CardTitle className="text-3xl font-black text-white">
            PAINEL ADMIN
          </CardTitle>
          
          <CardDescription className="text-slate-400">
            Digite a senha para acessar o painel de administração
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white font-semibold">
                Senha
              </Label>
              
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha"
                  className="bg-slate-800 border-slate-700 text-white pr-12"
                  required
                  autoFocus
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-black py-6 text-base"
            >
              {loading ? 'Entrando...' : 'Entrar no Painel'}
            </Button>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mt-6">
              <p className="text-xs text-cyan-400 font-semibold mb-2">
                💡 SENHA PADRÃO:
              </p>
              <code className="text-sm text-white font-mono bg-slate-950/50 px-3 py-1 rounded">
                admin123
              </code>
              <p className="text-xs text-slate-400 mt-2">
                Altere a senha no arquivo <code className="text-cyan-400">AdminLogin.tsx</code>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
