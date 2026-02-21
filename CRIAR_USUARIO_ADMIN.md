# 🔒 CRIAR USUÁRIO ADMIN (UMA ÚNICA VEZ)

## ✅ MÉTODO 1: VIA DASHBOARD DO SUPABASE (RECOMENDADO)

### **Passo a Passo:**

1. **Acesse o Dashboard do Supabase:**
   ```
   https://supabase.com/dashboard/project/xnumewhiljplsctumacm
   ```

2. **Vá em "Authentication" > "Users"**

3. **Clique em "Add User" (ou "Invite User")**

4. **Preencha os dados:**
   - **Email:** `fernandoferrerobranco@gmail.com`
   - **Password:** `@FB4647Ffb`
   - **Auto Confirm User:** ✅ MARQUE ESTA OPÇÃO
   - **User Metadata (opcional):** 
     ```json
     { "name": "Fernando Branco" }
     ```

5. **Clique em "Create User"**

**PRONTO!** Seu usuário admin foi criado! 🎉

---

## ✅ MÉTODO 2: VIA SUPABASE CLI

Se preferir criar via terminal:

```powershell
# Crie um arquivo temporário
New-Item -Path "create-admin.sql" -ItemType File -Force

# Cole este conteúdo no arquivo:
```

```sql
-- Criar usuário admin
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'fernandoferrerobranco@gmail.com',
  crypt('@FB4647Ffb', gen_salt('bf')),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{"name":"Fernando Branco"}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);
```

Depois execute:
```powershell
supabase db push create-admin.sql
```

---

## ✅ MÉTODO 3: VIA SCRIPT NODE.JS (MAIS FÁCIL)

Vou criar um script JavaScript pronto para você rodar!

---

## 🎯 DEPOIS DE CRIAR O USUÁRIO:

### **1. Faça Login:**
```
https://portfolio-fernando-branco.vercel.app/admin/login
```

**Credenciais:**
- Email: `fernandoferrerobranco@gmail.com`
- Senha: `@FB4647Ffb`

### **2. Acesse o Dashboard:**
```
https://portfolio-fernando-branco.vercel.app/admin
```

### **3. Edite o Conteúdo:**
```
https://portfolio-fernando-branco.vercel.app/admin/editor/hero
```

---

## 🔒 SEGURANÇA:

✅ Rota de signup pública **REMOVIDA**
✅ Apenas você pode criar usuários (via Dashboard ou CLI)
✅ Apenas usuários autenticados podem editar conteúdo
✅ Apenas usuários autenticados veem analytics

---

## ⚠️ IMPORTANTE:

- ❌ **NÃO existe mais** `/admin/setup`
- ✅ **Existe apenas** `/admin/login`
- 🔒 Apenas você (com acesso ao Dashboard do Supabase) pode criar novos admins

---

## 📋 QUAL MÉTODO VOCÊ PREFERE?

**RECOMENDAÇÃO:** Use o **Método 1 (Dashboard)** - é mais simples e visual!
