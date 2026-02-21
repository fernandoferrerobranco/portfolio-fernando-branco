# 🚨 INSTRUÇÕES DE DEPLOY DA EDGE FUNCTION

## ❌ PROBLEMA ATUAL:
Erro 401 "Missing authorization header" em TODAS as rotas, mesmo as públicas.

## 🔍 CAUSA PROVÁVEL:
O Supabase pode estar com configuração de verificação JWT habilitada por padrão nas Edge Functions.

## ✅ SOLUÇÃO - PASSO A PASSO:

### **1. VERIFICAR SE O DEPLOY FOI FEITO:**

```powershell
# Fazer deploy da Edge Function
supabase functions deploy server
```

### **2. TESTAR ROTA DE TESTE (NOVA):**

Após o deploy, teste esta URL no navegador SEM nenhum header:

```
https://xnumewhiljplsctumacm.supabase.co/functions/v1/server/make-server-67983b2b/test
```

**Deve retornar:**
```json
{
  "message": "Test route works!",
  "headers": { ... },
  "timestamp": "2026-02-21T..."
}
```

### **3. SE CONTINUAR RETORNANDO 401:**

O problema está na configuração da Edge Function no Supabase. Você precisa:

**Opção A - Desabilitar verificação JWT (Recomendado para desenvolvimento):**

1. Acesse: https://supabase.com/dashboard/project/xnumewhiljplsctumacm/functions
2. Clique na função `server`
3. Vá em Settings/Configuration
4. Procure por "JWT Verification" ou "Verify JWT"
5. **DESABILITE** ou configure para aceitar requisições anônimas

**Opção B - Adicionar bypass de verificação JWT no código:**

Vou modificar o código para adicionar um bypass.

### **4. ROTAS QUE DEVEM SER PÚBLICAS:**

- ✅ `/make-server-67983b2b/health` - Health check
- ✅ `/make-server-67983b2b/test` - Teste
- ✅ `/make-server-67983b2b/auth/signup` - Criar admin
- ✅ `/make-server-67983b2b/content/:section` (GET) - Ler conteúdo
- ✅ `/make-server-67983b2b/analytics/pageview` (POST) - Analytics
- ✅ `/make-server-67983b2b/analytics/download` (POST) - Downloads

### **5. ROTAS PROTEGIDAS (só com login):**

- 🔒 `/make-server-67983b2b/content/:section` (POST) - Editar conteúdo
- 🔒 `/make-server-67983b2b/analytics/dashboard` (GET) - Dashboard

---

## 🔧 COMANDOS ÚTEIS:

```powershell
# Ver logs da Edge Function
supabase functions logs server

# Redeploy forçado
supabase functions deploy server --no-verify-jwt

# Testar localmente
supabase functions serve server
```

---

## 📋 CHECKLIST DE TROUBLESHOOTING:

- [ ] Deploy da Edge Function foi feito?
- [ ] URL de teste funciona sem headers?
- [ ] JWT Verification está desabilitada?
- [ ] CORS está habilitado no código?
- [ ] Variáveis de ambiente estão configuradas?

---

## 🆘 SE NADA FUNCIONAR:

É possível que o Supabase esteja com políticas de segurança muito restritivas.

**SOLUÇÃO DEFINITIVA:**
Usar o Supabase **SOMENTE para autenticação**, e mover a lógica de conteúdo para **localStorage** no frontend (Fase 1 - deploy simples).

Vou criar uma versão alternativa se necessário.
