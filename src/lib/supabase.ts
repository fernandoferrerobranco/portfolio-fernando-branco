import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

// Singleton instance
let supabaseInstance: SupabaseClient | null = null;

// Create Supabase client for frontend (singleton pattern)
export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(
      `https://${projectId}.supabase.co`,
      publicAnonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          storageKey: 'sb-fernando-portfolio-auth',
          storage: typeof window !== 'undefined' ? window.localStorage : undefined,
        },
      }
    );
  }
  return supabaseInstance;
})();

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