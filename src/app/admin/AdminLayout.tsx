import { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import {
  LayoutDashboard,
  FileEdit,
  LogOut,
  Loader2,
  Menu,
  X,
  Home,
  Briefcase,
  Award,
  Languages,
  MessageSquare,
  Download,
  Link2,
  GraduationCap,
} from 'lucide-react';

const menuItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/editor/hero', label: 'Hero Section', icon: Home },
  { path: '/admin/editor/about', label: 'Sobre Mim', icon: FileEdit },
  { path: '/admin/editor/experiences', label: 'Experiências', icon: Briefcase },
  { path: '/admin/editor/skills', label: 'Habilidades', icon: Award },
  { path: '/admin/editor/education', label: 'Formação', icon: GraduationCap },
  { path: '/admin/editor/languages', label: 'Idiomas', icon: Languages },
  { path: '/admin/editor/testimonials', label: 'Depoimentos', icon: MessageSquare },
  { path: '/admin/editor/downloads', label: 'Downloads', icon: Download },
  { path: '/admin/editor/social', label: 'Links Sociais', icon: Link2 },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    // Verificar autenticação simples via localStorage
    const isAuth = localStorage.getItem('admin_authenticated') === 'true';
    
    if (!isAuth) {
      navigate('/admin/login');
      return;
    }

    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    toast.success('Logout realizado com sucesso!');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 border-r border-cyan-500/20 px-6 pb-4">
          <div className="flex h-20 shrink-0 items-center">
            <Link to="/" className="text-2xl font-black text-white">
              Fernando <span className="text-cyan-400">Branco_</span>
            </Link>
          </div>
          
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    const Icon = item.icon;
                    
                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className={`
                            group flex gap-x-3 rounded-lg p-3 text-sm font-semibold leading-6 transition-all
                            ${isActive 
                              ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-l-4 border-cyan-400' 
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                            }
                          `}
                        >
                          <Icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-cyan-400' : ''}`} />
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              
              <li className="mt-auto">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                  <p className="text-xs text-slate-400 mb-1">Painel Admin</p>
                  <p className="text-sm text-white font-semibold">Modo LocalStorage</p>
                </div>
                
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="w-full mt-3 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-cyan-500/20">
            <div className="flex h-20 items-center justify-between px-6">
              <Link to="/" className="text-2xl font-black text-white">
                Fernando <span className="text-cyan-400">Branco_</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex flex-1 flex-col px-6 pb-4">
              <ul role="list" className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;
                  
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          group flex gap-x-3 rounded-lg p-3 text-sm font-semibold leading-6 transition-all
                          ${isActive 
                            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-l-4 border-cyan-400' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                          }
                        `}
                      >
                        <Icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-cyan-400' : ''}`} />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar - Mobile */}
        <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-cyan-500/20 bg-slate-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="text-slate-400 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="flex flex-1 justify-end">
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="text-red-400 hover:text-red-300"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>

        {/* Page content */}
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}