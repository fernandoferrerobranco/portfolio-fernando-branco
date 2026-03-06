/**
 * 🔐 SISTEMA DE AUTENTICAÇÃO SIMPLES
 * 
 * Usa localStorage para armazenar senha criptografada
 */

const AUTH_KEY = 'portfolio_admin_auth';
const SESSION_KEY = 'portfolio_admin_session';

// Hash simples (SHA-256 via Web Crypto API)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verifica se já existe uma senha configurada
 */
export function hasPassword(): boolean {
  return localStorage.getItem(AUTH_KEY) !== null;
}

/**
 * Define a senha pela primeira vez
 */
export async function setPassword(password: string): Promise<void> {
  if (!password || password.length < 6) {
    throw new Error('A senha deve ter pelo menos 6 caracteres');
  }
  const hash = await hashPassword(password);
  localStorage.setItem(AUTH_KEY, hash);
}

/**
 * Verifica se a senha está correta
 */
export async function verifyPassword(password: string): Promise<boolean> {
  const storedHash = localStorage.getItem(AUTH_KEY);
  if (!storedHash) return false;
  
  const inputHash = await hashPassword(password);
  return inputHash === storedHash;
}

/**
 * Cria uma sessão (login bem-sucedido)
 */
export function createSession(): void {
  const sessionData = {
    timestamp: Date.now(),
    expires: Date.now() + (24 * 60 * 60 * 1000), // 24 horas
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
}

/**
 * Verifica se há uma sessão válida
 */
export function hasValidSession(): boolean {
  const sessionStr = localStorage.getItem(SESSION_KEY);
  if (!sessionStr) return false;
  
  try {
    const session = JSON.parse(sessionStr);
    return Date.now() < session.expires;
  } catch {
    return false;
  }
}

/**
 * Logout (remove sessão)
 */
export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}

/**
 * Altera a senha
 */
export async function changePassword(oldPassword: string, newPassword: string): Promise<void> {
  const isValid = await verifyPassword(oldPassword);
  if (!isValid) {
    throw new Error('Senha atual incorreta');
  }
  
  if (newPassword.length < 6) {
    throw new Error('A nova senha deve ter pelo menos 6 caracteres');
  }
  
  const hash = await hashPassword(newPassword);
  localStorage.setItem(AUTH_KEY, hash);
}

/**
 * Reset de senha (emergência - apaga tudo)
 */
export function resetAuth(): void {
  if (confirm('⚠️ ATENÇÃO: Isso irá resetar a senha E todos os dados do portfolio. Continuar?')) {
    localStorage.clear();
    window.location.reload();
  }
}
