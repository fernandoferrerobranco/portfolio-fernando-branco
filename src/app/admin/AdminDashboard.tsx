import { useEffect, useState } from 'react';
import { apiRequest } from '../../lib/supabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Eye,
  Download,
  TrendingUp,
  FileText,
  Loader2,
  Activity,
} from 'lucide-react';
import { Counter } from '../components/Counter';

interface DashboardData {
  totalViews: number;
  totalDownloads: number;
  dailyStats: Array<{ date: string; views: number; downloads: number }>;
  topPages: Array<{ page: string; count: number }>;
  topReferrers: Array<{ referrer: string; count: number }>;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await apiRequest('/analytics/dashboard');
      setData(response.data);
    } catch (error) {
      console.error('Dashboard error:', error);
      toast.error('Erro ao carregar dashboard', {
        description: 'Tente novamente mais tarde',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-slate-400 min-h-[60vh] flex items-center justify-center">
        <div>
          <Activity className="w-12 h-12 mx-auto mb-4 text-cyan-400/50" />
          <p>Nenhum dado disponível ainda.</p>
          <p className="text-sm mt-2">Os dados aparecerão conforme os visitantes acessarem seu portfólio.</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      name: 'Visualizações Totais',
      value: data.totalViews,
      icon: Eye,
      color: 'cyan',
      description: 'Últimos 30 dias',
    },
    {
      name: 'Downloads de Currículo',
      value: data.totalDownloads,
      icon: Download,
      color: 'blue',
      description: 'Total de downloads',
    },
    {
      name: 'Páginas Únicas',
      value: data.topPages.length,
      icon: FileText,
      color: 'purple',
      description: 'Seções visitadas',
    },
    {
      name: 'Fontes de Tráfego',
      value: data.topReferrers.length,
      icon: TrendingUp,
      color: 'green',
      description: 'Origens diferentes',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-white tracking-tight">
          DASHBOARD
        </h1>
        <p className="text-slate-400 mt-2">
          Acompanhe as métricas e performance do seu portfólio
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.name}
              className="bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/40 transition-all"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.name}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-${stat.color}-500/10`}>
                  <Icon className={`h-5 w-5 text-${stat.color}-400`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-white mb-1">
                  <Counter end={stat.value} duration={2000} />
                </div>
                <p className="text-xs text-slate-500">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Views Over Time */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold">Visualizações ao Longo do Tempo</CardTitle>
            <CardDescription className="text-slate-400">
              Últimos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data.dailyStats}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis
                  dataKey="date"
                  stroke="#64748b"
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getDate()}/${date.getMonth() + 1}`;
                  }}
                />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #22d3ee',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorViews)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Downloads Over Time */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold">Downloads de Currículo</CardTitle>
            <CardDescription className="text-slate-400">
              Últimos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.dailyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis
                  dataKey="date"
                  stroke="#64748b"
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getDate()}/${date.getMonth() + 1}`;
                  }}
                />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #3b82f6',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="downloads"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages & Referrers */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Pages */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold">Páginas Mais Visitadas</CardTitle>
            <CardDescription className="text-slate-400">
              Top 10 seções
            </CardDescription>
          </CardHeader>
          <CardContent>
            {data.topPages.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.topPages} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis type="number" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <YAxis
                    dataKey="page"
                    type="category"
                    stroke="#64748b"
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    width={100}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      border: '1px solid #06b6d4',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Bar dataKey="count" fill="#06b6d4" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-slate-500">
                Nenhum dado disponível
              </div>
            )}
          </CardContent>
        </Card>

        {/* Top Referrers */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white font-bold">Fontes de Tráfego</CardTitle>
            <CardDescription className="text-slate-400">
              De onde vêm os visitantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            {data.topReferrers.length > 0 ? (
              <div className="space-y-3">
                {data.topReferrers.map((ref, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {ref.referrer || 'Direto'}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400">
                        {ref.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-slate-500">
                Nenhum dado disponível
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
