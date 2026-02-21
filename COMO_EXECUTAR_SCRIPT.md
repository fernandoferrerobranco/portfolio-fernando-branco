# 🎯 COMO EXECUTAR O SCRIPT - GUIA VISUAL

## 🚀 3 MÉTODOS FÁCEIS

Escolha o método que preferir:

---

## ✨ MÉTODO 1 - PÁGINA HTML (MAIS FÁCIL!) ⭐

### **Passo 1:**
Abra o arquivo **`CRIAR_ADMIN.html`** que está na raiz do projeto

### **Passo 2:**
Clique duas vezes no arquivo para abrir no navegador
OU
Arraste o arquivo para dentro do navegador

### **Passo 3:**
Você verá um formulário bonito! Preencha:

```
🆔 PROJECT ID: [seu_project_id_aqui]
👤 Nome: Fernando Branco
📧 Email: fernando@email.com
🔒 Senha: SenhaSegura123!
```

### **Passo 4:**
Clique no botão **"CRIAR ADMIN"**

### **✅ Pronto!**
Se der certo, você verá: "✅ Admin criado com sucesso!"

---

## 🖥️ MÉTODO 2 - CONSOLE DO NAVEGADOR

### **Passo 1: Abrir o site**

Acesse seu portfólio: `https://fernandoferrerobranco.com.br`

OU se estiver testando localmente: `http://localhost:5173`

### **Passo 2: Abrir o DevTools**

**Windows/Linux:**
- Pressione a tecla **F12**
- OU **Ctrl + Shift + I**
- OU **Ctrl + Shift + J** (direto no Console)

**Mac:**
- Pressione **Cmd + Option + I**
- OU **Cmd + Option + J** (direto no Console)

**Qualquer sistema:**
- Clique com botão direito em qualquer lugar da página
- Escolha **"Inspecionar"** ou **"Inspecionar elemento"**

### **Passo 3: Ir para a aba Console**

Você verá várias abas no topo:
```
Elements | Console | Sources | Network | ...
           ^^^^^^^ 
         CLIQUE AQUI
```

### **Passo 4: Ver o PROJECT_ID**

No console, você verá um **box azul no canto inferior direito** da tela com as informações do projeto!

**OU digite no console:**

```javascript
showProjectInfo()
```

E pressione **ENTER**. Isso mostrará o PROJECT_ID!

### **Passo 5: Copiar e colar o código**

Cole este código **COMPLETO** no console:

```javascript
// 1️⃣ EDITE AQUI:
const PROJECT_ID = 'cole_aqui_o_project_id';
const EMAIL = 'fernando@email.com';
const PASSWORD = 'SenhaSegura123!';
const NAME = 'Fernando Branco';

// 2️⃣ DEPOIS PRESSIONE ENTER:
console.log('🚀 Criando admin...');
fetch(`https://${PROJECT_ID}.supabase.co/functions/v1/make-server-67983b2b/auth/signup`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: EMAIL, password: PASSWORD, name: NAME })
})
.then(r => r.json())
.then(data => {
  if (data.success) {
    console.log('✅ SUCESSO!', data);
    alert('✅ Admin criado! Vá para /admin/login');
  } else {
    console.error('❌ ERRO:', data);
    alert('❌ Erro: ' + data.error);
  }
})
.catch(err => {
  console.error('❌ ERRO:', err);
  alert('❌ Erro de conexão');
});
```

### **Passo 6: Editar os valores**

**ANTES de pressionar ENTER**, edite estas linhas:

```javascript
const PROJECT_ID = 'abc123xyz';           // ⬅️ Cole o ID que apareceu
const EMAIL = 'seu@email.com';            // ⬅️ Seu email
const PASSWORD = 'SuaSenha123';           // ⬅️ Sua senha
const NAME = 'Seu Nome';                  // ⬅️ Seu nome
```

### **Passo 7: Executar**

Pressione **ENTER**

### **✅ Resultado esperado:**

Você verá:
```
🚀 Criando admin...
✅ SUCESSO! {success: true, user: {...}}
```

E aparecerá um **alerta** dizendo: "✅ Admin criado! Vá para /admin/login"

---

## 🌐 MÉTODO 3 - ATALHO RÁPIDO (SE O BOX APARECER)

### **Se você ver um box azul no canto inferior direito:**

1. Abra seu site (local ou produção com `?dev=true`)
2. Você verá um box com **"📋 INFORMAÇÕES DO PROJETO"**
3. **Clique no PROJECT_ID** para copiar
4. Use o Método 1 (HTML) ou Método 2 (Console)

---

## 📱 PASSO A PASSO COM IMAGENS MENTAIS

### **Como fica o Console:**

```
┌─────────────────────────────────────────────┐
│ ▼ Elements  ► Console  Sources  Network    │ ← Abas
├─────────────────────────────────────────────┤
│ > _                                         │ ← Aqui você cola o código
│                                             │
│ [Digite seu código aqui]                    │
│                                             │
│ Pressione ENTER para executar →            │
└─────────────────────────────────────────────┘
```

### **Resultado no Console:**

```
> 🚀 Criando admin...
> 📦 Resposta: {success: true, user: {...}}
> ✅ SUCESSO! Admin criado com sucesso!
> ➡️ Agora acesse: /admin/login
```

---

## ⚠️ ERROS COMUNS

### **❌ "PROJECT_ID is not defined"**
**Solução:** Você esqueceu de editar `const PROJECT_ID = '...'`

### **❌ "Failed to fetch"**
**Solução:** 
- Verifique se o PROJECT_ID está correto
- Confirme que o backend está no ar
- Teste: `https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-67983b2b/health`

### **❌ "User already exists"**
**Solução:** Use outro email OU faça login com o existente

### **❌ "Password should be at least 8 characters"**
**Solução:** Use senha com mínimo 8 caracteres

---

## 🎯 ONDE PEGAR O PROJECT_ID?

### **Opção 1 - Box Azul no Site:**
- Acesse: `https://seusite.com?dev=true`
- Veja box no canto inferior direito
- Clique para copiar

### **Opção 2 - Console do Navegador:**
Digite no console:
```javascript
PROJECT_ID
```
OU
```javascript
showProjectInfo()
```

### **Opção 3 - Arquivo do Projeto:**
Veja em: `/utils/supabase/info.tsx`

### **Opção 4 - Supabase Dashboard:**
1. Acesse: https://supabase.com/dashboard
2. Entre no seu projeto
3. Vá em: **Settings** → **API**
4. Copie a URL: `https://ESTE_É_O_ID.supabase.co`

---

## ✅ CHECKLIST

Antes de executar, confirme:

- [ ] Estou no console do navegador (F12)
- [ ] Estou na aba "Console"
- [ ] Copiei o código completo
- [ ] Editei o PROJECT_ID
- [ ] Editei EMAIL, PASSWORD e NAME
- [ ] Vou pressionar ENTER agora

---

## 🚀 DEPOIS DE CRIAR O ADMIN

### **1. Ir para página de login:**
```
https://fernandoferrerobranco.com.br/admin/login
```

### **2. Fazer login:**
- Email: o que você usou
- Senha: a que você usou

### **3. Explorar dashboard:**
- Verá KPIs (ainda sem dados - normal!)
- Pode editar conteúdo
- Pode ver analytics

---

## 💡 DICAS

1. **Use o Método 1 (HTML)** se não se sente confortável com console
2. **Salve suas credenciais** em local seguro
3. **Use senha forte** (mínimo 8 caracteres)
4. **Não compartilhe** email/senha com ninguém
5. **Depois de criar**, remova o box azul do site (opcional)

---

## 🆘 PRECISA DE AJUDA?

Se nada funcionar, tente:

1. **Verificar backend:**
   ```
   Acesse: https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-67983b2b/health
   Deve retornar: {"status":"ok"}
   ```

2. **Ver erros no console:**
   - Pressione F12
   - Vá na aba Console
   - Veja mensagens vermelhas
   - Me envie o erro

3. **Criar direto no Supabase:**
   - Acesse: https://supabase.com/dashboard
   - Entre no projeto
   - Authentication → Users → Add user
   - Marque "Auto Confirm User"

---

**🎉 Boa sorte! Qualquer dúvida, me avise!**
