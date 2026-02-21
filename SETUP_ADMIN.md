# 🚀 SETUP RÁPIDO - PAINEL ADMIN

## ⚡ GUIA RÁPIDO EM 3 PASSOS

---

## 📋 PASSO 1: VERIFICAR BACKEND

Abra o navegador e acesse:

```
https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-67983b2b/health
```

**✅ Deve retornar:** `{"status":"ok"}`

**❌ Se der erro:**
- Verifique se as Edge Functions estão ativas no Supabase
- Confirme se o projeto está configurado

---

## 👤 PASSO 2: CRIAR PRIMEIRO ADMIN

### **Método 1 - Via Console do Navegador (MAIS RÁPIDO)**

1. Abra seu site: `https://fernandoferrerobranco.com.br`
2. Pressione **F12** para abrir DevTools
3. Vá na aba **Console**
4. Cole e execute este código:

```javascript
// SUBSTITUA os valores abaixo:
const PROJECT_ID = 'SEU_PROJECT_ID_AQUI';  // Ex: 'abc123xyz'
const EMAIL = 'fernando@email.com';        // Seu email
const PASSWORD = 'SenhaSegura123!';        // Sua senha (mínimo 8 chars)
const NAME = 'Fernando Branco';            // Seu nome

// Execute o signup:
fetch(`https://${PROJECT_ID}.supabase.co/functions/v1/make-server-67983b2b/auth/signup`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: EMAIL, password: PASSWORD, name: NAME })
})
.then(r => r.json())
.then(data => {
  console.log('✅ ADMIN CRIADO:', data);
  if (data.success) {
    alert('✅ Conta criada! Agora você pode fazer login em /admin/login');
  } else {
    alert('❌ Erro: ' + (data.error || 'Verifique o console'));
  }
})
.catch(err => console.error('❌ Erro:', err));
```

### **Método 2 - Via cURL (Terminal)**

```bash
curl -X POST \
  https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-67983b2b/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "fernando@email.com",
    "password": "SenhaSegura123!",
    "name": "Fernando Branco"
  }'
```

### **Método 3 - Via Supabase Dashboard**

1. Acesse: https://supabase.com/dashboard
2. Entre no seu projeto
3. Vá em: **Authentication** → **Users**
4. Clique em **"Add user"** → **"Create new user"**
5. Preencha:
   - Email: `fernando@email.com`
   - Password: `SenhaSegura123!`
   - ✅ Marque: **"Auto Confirm User"**
6. Clique em **"Create user"**

---

## 🔐 PASSO 3: FAZER LOGIN

1. Acesse: `https://fernandoferrerobranco.com.br/admin/login`
2. Digite email e senha que você criou
3. Clique em **"ENTRAR"**

**✅ Pronto! Você está no painel admin!**

---

## 🎯 O QUE FAZER DEPOIS

### **1. Explorar Dashboard**
- Acesse: `/admin`
- Veja métricas e KPIs (ainda sem dados - normal!)

### **2. Editar Conteúdo**
- Clique em qualquer seção no menu lateral
- Edite em **PT** e **EN**
- Clique em **"Salvar Alterações"**

### **3. Testar Analytics**
- Abra seu site em outra aba/navegador anônimo
- Navegue pelas seções
- Volte ao dashboard - você verá os dados!

---

## 🔍 VERIFICAR SE ESTÁ FUNCIONANDO

### **Teste 1 - Health Check:**
```bash
curl https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-67983b2b/health
# ✅ Esperado: {"status":"ok"}
```

### **Teste 2 - Login:**
- Acesse `/admin/login`
- Faça login
- ✅ Deve redirecionar para `/admin` (dashboard)

### **Teste 3 - Carregar Conteúdo:**
- No dashboard, clique em qualquer seção
- ✅ Deve abrir editor com campos PT/EN

### **Teste 4 - Salvar Conteúdo:**
- Edite algum campo
- Clique em "Salvar"
- ✅ Deve aparecer toast verde: "Conteúdo salvo com sucesso!"

---

## ⚠️ TROUBLESHOOTING COMUM

### **Erro: "Unauthorized - No token provided"**
**Solução:** Sua sessão expirou. Faça logout e login novamente.

### **Erro: "Failed to create user"**
**Solução:** 
- Email já existe - tente outro email OU
- Use o método 3 (Supabase Dashboard) diretamente

### **Dashboard vazio (sem dados)**
**✅ NORMAL!** Analytics só aparecem depois de:
1. Visitantes acessarem o site
2. Alguns minutos de uso
3. Dados serem coletados

### **Erro 404 ao acessar /admin**
**Solução:**
- Verifique se deploy foi feito corretamente
- Confirme que código do frontend foi atualizado
- Limpe cache do navegador (Ctrl+Shift+R)

---

## 🎨 CUSTOMIZAR MAIS

### **Adicionar Novos Campos no Editor:**

Edite `/src/app/admin/AdminEditor.tsx`:

```typescript
const getDefaultContent = (section: string) => {
  const defaults: Record<string, any> = {
    hero: {
      pt: {
        title: 'Título',
        subtitle: 'Subtítulo',
        // ➕ Adicione novos campos aqui
        cta: 'Texto do botão',
      },
      en: { /* ... */ }
    }
  };
  return defaults[section] || { pt: {}, en: {} };
};
```

### **Adicionar Nova Seção:**

1. Adicione rota em `/src/app/routes.tsx`
2. Adicione item no menu em `/src/app/admin/AdminLayout.tsx`
3. Adicione título em `/src/app/admin/AdminEditor.tsx`

---

## 📊 EXEMPLO DE USO

### **Cenário: Editar Hero Section**

1. Login: `/admin/login`
2. Clique em **"Hero Section"** no menu
3. Edite campos:
   - **PT:** "Olá, sou Fernando Branco"
   - **EN:** "Hello, I'm Fernando Branco"
4. Clique em **"Salvar Alterações"**
5. ✅ Veja mudança no site ao vivo!

---

## 🚀 DEPLOY COMPLETO

Se ainda não fez deploy do backend:

### **1. Verificar Edge Functions:**
```bash
# No terminal do Supabase:
supabase functions list
# ✅ Deve listar: make-server-67983b2b
```

### **2. Deploy Functions:**
```bash
supabase functions deploy make-server-67983b2b
```

### **3. Configurar Secrets:**
```bash
# Defina as variáveis de ambiente
supabase secrets set SUPABASE_URL=https://SEU_PROJECT_ID.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key
```

---

## ✅ CHECKLIST FINAL

- [ ] Backend health check OK
- [ ] Primeiro admin criado
- [ ] Login funcionando
- [ ] Dashboard carregando
- [ ] Editor abrindo
- [ ] Salvar conteúdo OK
- [ ] Analytics tracking (testar depois)

---

## 💡 DICAS PRO

1. **Backup Regular:** Exporte conteúdo do KV store periodicamente
2. **Senhas Fortes:** Use gerenciador de senhas
3. **Monitore Analytics:** Veja dashboard diariamente
4. **Teste Traduções:** Sempre edite PT e EN juntos
5. **Preview Antes:** Use botão "Ver Preview" antes de salvar

---

**🎉 TUDO PRONTO! Aproveite seu painel admin!**

Qualquer dúvida, consulte: `/MANUAL_PAINEL_ADMIN.md`
