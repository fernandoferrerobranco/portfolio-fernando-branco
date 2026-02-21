import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

// Garantir que seja um singleton GLOBAL (não apenas no módulo)
const GLOBAL_KEY = '__FERNANDO_PORTFOLIO_SUPABASE__';

// Função para obter/criar a instância global
function getSupabaseInstance(): SupabaseClient {
  // Verificar se já existe no window (navegador)
  if (typeof window !== 'undefined') {
    if (!(window as any)[GLOBAL_KEY]) {
      (window as any)[GLOBAL_KEY] = createClient(
        `https://${projectId}.supabase.co`,
        publicAnonKey,
        {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
            storageKey: 'sb-fernando-portfolio-auth',
            storage: window.localStorage,
          },
        }
      );
      console.log('✅ Supabase client created (singleton)');
    }
    return (window as any)[GLOBAL_KEY];
  }

  // Fallback para SSR (não deve acontecer neste projeto)
  throw new Error('Supabase client can only be created in browser context');
}

// Export do singleton
export const supabase = getSupabaseInstance();

// API base URL
export const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/server`;

// Helper function to make authenticated requests
export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const session = await supabase.auth.getSession();
  const accessToken = session.data.session?.access_token;

  console.log('🔐 apiRequest debug:', {
    endpoint,
    hasSession: !!session.data.session,
    hasToken: !!accessToken,
    tokenPreview: accessToken ? `${accessToken.substring(0, 20)}...` : 'USING PUBLIC ANON KEY'
  });

  // SEMPRE enviar Authorization header:
  // - Se tiver sessão ativa → usar access_token (usuário autenticado)
  // - Se não tiver sessão → usar publicAnonKey (acesso público)
  const authToken = accessToken || publicAnonKey;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`,
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `Request failed with status ${response.status}`);
  }

  return response.json();
}