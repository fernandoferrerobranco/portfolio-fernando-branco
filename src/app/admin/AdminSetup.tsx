import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { UserPlus, Loader2, CheckCircle, Copy, Eye, EyeOff } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/server/make-server-67983b2b`;

export default function AdminSetup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password.length < 8) {
      toast.error('Senha muito curta', {
        description: 'Use no mínimo 8 caracteres',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        toast.success('Admin criado com sucesso!', {
          description: 'Redirecionando para login...',
        });
        
        setTimeout(() => {
          navigate('/admin/login');
        }, 2000);
      } else {
        toast.error('Erro ao criar admin', {
          description: data.error || 'Tente novamente',
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Erro de conexão', {
        description: 'Verifique se o backend está ativo',
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiado!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-4xl relative z-10 space-y-6">
        {/* Info Card */}
        <Card className="bg-slate-900/80 backdrop-blur-xl border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-black text-white flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-cyan-400" />
              INFORMAÇÕES DO PROJETO
            </CardTitle>
            <CardDescription className="text-cyan-400/70">
              Seu backend está configurado e pronto!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/90 font-semibold">Project ID</Label>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-cyan-400 font-mono text-sm">
                    {projectId}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(projectId, 'Project ID')}
                    className="border-cyan-500/30 hover:bg-cyan-500/10"
                  >
                    <Copy className="w-4 h-4 text-cyan-400" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/90 font-semibold">API URL</Label>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-cyan-400 font-mono text-xs truncate">
                    {API_BASE_URL}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(API_BASE_URL, 'API URL')}
                    className="border-cyan-500/30 hover:bg-cyan-500/10"
                  >
                    <Copy className="w-4 h-4 text-cyan-400" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <p className="text-sm text-cyan-400/90">
                ✅ <strong>Backend detectado!</strong> Tudo configurado automaticamente.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Setup Form */}
        <Card className="bg-slate-900/80 backdrop-blur-xl border-cyan-500/20">
          <CardHeader className="space-y-3">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-black text-white text-center">
              CRIAR PRIMEIRO ADMIN
            </CardTitle>
            <CardDescription className="text-cyan-400/70 text-center">
              Configure o usuário administrador para acessar o painel
            </CardDescription>
          </CardHeader>
          <CardContent>
            {success ? (
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Admin Criado!</h3>
                <p className="text-slate-400">Redirecionando para login...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/90 font-semibold">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ex: Fernando Branco"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-white/30 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90 font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-white/30 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white/90 font-semibold">
                    Senha (mínimo 8 caracteres)
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      minLength={8}
                      required
                      className="bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-white/30 focus:border-cyan-400 focus:ring-cyan-400/20 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400/50 hover:text-cyan-400"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-slate-500">
                    Use uma senha forte com letras, números e símbolos
                  </p>
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-6 text-lg tracking-wider"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        CRIANDO ADMIN...
                      </>
                    ) : (
                      'CRIAR ADMIN'
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/admin/login')}
                    className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    Já tenho conta - Fazer Login
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Help Card */}
        <Card className="bg-slate-900/80 backdrop-blur-xl border-cyan-500/20">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">🔐</div>
                <h4 className="text-white font-bold mb-1">Seguro</h4>
                <p className="text-xs text-slate-400">
                  Autenticação com Supabase
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="text-white font-bold mb-1">Rápido</h4>
                <p className="text-xs text-slate-400">
                  Setup em menos de 1 minuto
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">📊</div>
                <h4 className="text-white font-bold mb-1">Completo</h4>
                <p className="text-xs text-slate-400">
                  Dashboard + Editor + Analytics
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}