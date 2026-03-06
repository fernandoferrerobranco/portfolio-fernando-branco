import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import { toast } from 'sonner';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';
import {
  hasPassword,
  setPassword,
  verifyPassword,
  createSession,
  hasValidSession,
} from '../lib/auth';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [password, setPasswordInput] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Se já está logado, redireciona
    if (hasValidSession()) {
      navigate('/admin/dashboard');
      return;
    }

    // Verifica se é primeira vez
    setIsFirstTime(!hasPassword());
  }, [navigate]);

  const handleFirstTimeSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    setLoading(true);
    try {
      await setPassword(password);
      createSession();
      toast.success('🎉 Senha configurada com sucesso!');
      navigate('/admin/dashboard');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    try {
      const isValid = await verifyPassword(password);
      if (isValid) {
        createSession();
        toast.success('✅ Login bem-sucedido!');
        navigate('/admin/dashboard');
      } else {
        toast.error('❌ Senha incorreta');
        setPasswordInput('');
      }
    } catch (error) {
      toast.error('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <Card className="w-full max-w-md relative bg-slate-900/90 backdrop-blur-xl border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
        <CardHeader className="text-center pb-8">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            {isFirstTime ? (
              <Shield className="w-8 h-8 text-white" />
            ) : (
              <Lock className="w-8 h-8 text-white" />
            )}
          </div>
          
          <CardTitle className="text-3xl font-black text-white">
            {isFirstTime ? (
              <>Bem-vindo! 👋</>
            ) : (
              <>Painel Admin 🔐</>
            )}
          </CardTitle>
          
          <CardDescription className="text-slate-400 text-base mt-2">
            {isFirstTime ? (
              'Configure sua senha de acesso ao painel administrativo'
            ) : (
              'Faça login para editar seu portfolio'
            )}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {isFirstTime ? (
            // PRIMEIRA VEZ - Configurar senha
            <form onSubmit={handleFirstTimeSetup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">
                  Crie uma senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="bg-slate-800 border-slate-700 text-white pr-10"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-300">
                  Confirme a senha
                </Label>
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Digite novamente"
                  className="bg-slate-800 border-slate-700 text-white"
                  required
                  minLength={6}
                />
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mt-6">
                <p className="text-sm text-cyan-400 font-medium">
                  💡 Dica importante:
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Guarde essa senha em local seguro! Ela será necessária para acessar o admin.
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold h-12 text-base"
              >
                {loading ? 'Configurando...' : '🔒 Configurar Senha'}
              </Button>
            </form>
          ) : (
            // LOGIN NORMAL
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Digite sua senha"
                    className="bg-slate-800 border-slate-700 text-white pr-10"
                    required
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold h-12 text-base"
              >
                {loading ? 'Entrando...' : '🚀 Entrar no Admin'}
              </Button>

              <div className="text-center mt-6">
                <p className="text-xs text-slate-500">
                  Esqueceu a senha? Acesse o console do navegador e execute:{' '}
                  <code className="text-cyan-400">localStorage.clear()</code>
                </p>
              </div>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-slate-800">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="w-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              ← Voltar ao site
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
