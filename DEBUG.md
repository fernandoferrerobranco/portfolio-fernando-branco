# 🐛 DEBUG CHECKLIST

## ⚠️ PROBLEMA REPORTADO:
1. `http://localhost:5173/` não funciona
2. `fernandoferrerobranco.com.br/admin/login` ainda mostra admin antigo

---

## ✅ SOLUÇÃO PASSO A PASSO:

### **1. PARE o servidor:**
```bash
# No terminal, pressione:
Ctrl + C
```

### **2. LIMPE o cache do navegador:**
```
Chrome/Edge:
- Ctrl + Shift + Delete
- Marcar: "Imagens e arquivos em cache"
- Clicar em "Limpar dados"

Ou:
- Ctrl + Shift + R (hard refresh)
```

### **3. LIMPE o cache de build:**
```bash
# No terminal:
rm -rf node_modules/.vite
rm -rf dist
```

### **4. REINICIE o servidor:**
```bash
npm run dev
```

### **5. ABRA em aba anônima:**
```
Chrome: Ctrl + Shift + N
Edge: Ctrl + Shift + P
Firefox: Ctrl + Shift + P
```

### **6. TESTE:**
```
http://localhost:5173/
```

---

## 🌐 PROBLEMA NO SITE PUBLICADO (fernandoferrerobranco.com.br)

O site publicado ainda mostra a **versão antiga** porque:

### ❌ **Causa:**
- Você fez deploy da versão antiga
- Precisa fazer um **novo deploy** com as alterações

### ✅ **Solução:**

#### **Opção 1: Deploy Manual (se usar FTP/cPanel):**
1. Rode: `npm run build`
2. Upload da pasta `dist/` para o servidor
3. Limpe cache do CloudFlare/CDN (se tiver)

#### **Opção 2: Deploy Automático (Vercel/Netlify):**
1. Commit as mudanças:
```bash
git add .
git commit -m "fix: novo painel admin com localStorage"
git push
```
2. O deploy automático vai rodar
3. Aguarde 2-5 minutos

#### **Opção 3: Force Redeploy (Vercel/Netlify):**
1. Acesse o painel da Vercel/Netlify
2. Vá em "Deployments"
3. Clique em "Redeploy"

---

## 🔍 VERIFICAR SE DEU CERTO:

### **1. localhost:5173 funciona?**
```bash
# Deve aparecer:
VITE v5.x.x  ready in Xms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### **2. Abre a página?**
- ✅ Deve mostrar o portfolio
- ✅ Sem erros no console (F12)

### **3. Admin funciona?**
```
http://localhost:5173/admin/login
```
- ✅ Tela de login nova (com senha admin123)
- ✅ Dashboard moderno

---

## ❓ SE AINDA NÃO FUNCIONAR:

### **Compartilhe comigo:**

1. **Erro no terminal** (onde roda `npm run dev`):
```
COLE AQUI O ERRO COMPLETO
```

2. **Erro no console do navegador** (F12 → Console):
```
COLE AQUI O ERRO COMPLETO
```

3. **O que acontece quando acessa localhost:5173?**
- [ ] Página em branco
- [ ] Erro 404
- [ ] Carregando infinito
- [ ] Outro:___________

---

## 🚨 POSSÍVEIS ERROS E SOLUÇÕES:

### **Erro: "Cannot find module"**
```bash
# Solução:
npm install
```

### **Erro: "Port 5173 already in use"**
```bash
# Solução 1: Matar processo
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:5173 | xargs kill -9
```

### **Erro: Tela branca sem erros**
```bash
# Solução: Limpar cache
rm -rf node_modules/.vite
npm run dev
```

### **Erro: "Failed to fetch dynamically imported module"**
```bash
# Solução: Hard refresh
Ctrl + Shift + R
```

---

## 📊 STATUS ATUAL DOS ARQUIVOS:

### ✅ **Arquivos OK:**
- `/src/app/App.tsx` - RouterProvider configurado
- `/src/app/routes.tsx` - Rotas corretas
- `/src/app/Portfolio.tsx` - Componente principal
- `/src/app/components/HeroSection.tsx` - Com localStorage
- `/src/app/admin/AdminLogin.tsx` - Novo login
- `/src/app/admin/AdminLayout.tsx` - Nova sidebar
- `/src/app/admin/AdminDashboard.tsx` - Novo dashboard
- `/src/app/admin/AdminEditor.tsx` - Roteador
- `/src/app/admin/editors/HeroEditor.tsx` - Editor completo

### 📦 **Dependências necessárias:**
Todas já instaladas:
- react-router
- lucide-react
- sonner
- recharts
- Componentes UI shadcn

---

## 🎯 TESTE FINAL:

Após seguir todos os passos:

```bash
# 1. Limpar
Ctrl + C (parar servidor)
rm -rf node_modules/.vite

# 2. Reiniciar
npm run dev

# 3. Abrir aba anônima
Ctrl + Shift + N

# 4. Testar
http://localhost:5173/
http://localhost:5173/admin/login
```

---

## 📞 ME DIGA:

Depois de fazer isso, me envie:

1. ✅ Funcionou! 
   OU
2. ❌ Erro: [COLE O ERRO AQUI]

Vou te ajudar a resolver! 🚀
