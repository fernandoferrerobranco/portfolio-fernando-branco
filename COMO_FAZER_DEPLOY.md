# 🚀 COMO FAZER DEPLOY - GUIA PASSO A PASSO

## ⚠️ IMPORTANTE

O erro **404 NOT_FOUND** acontece porque o código novo ainda **NÃO foi deployado** na Vercel.

Você precisa fazer um **commit + push** para atualizar o site em produção.

---

## 📋 OPÇÕES

Escolha uma:

### **OPÇÃO 1 - Testar Localmente AGORA** ⭐ (Recomendado para testar)
### **OPÇÃO 2 - Deploy na Vercel** (Para colocar em produção)

---

## ⭐ OPÇÃO 1 - TESTAR LOCALMENTE (MAIS RÁPIDO!)

### **Passo 1: Abrir terminal**

No VSCode, pressione:
- **Windows/Linux:** `Ctrl + '` (aspas simples)
- **Mac:** `Cmd + '`

Ou: Menu → Terminal → New Terminal

### **Passo 2: Executar o servidor local**

Cole este comando no terminal:

```bash
npm run dev
```

### **Passo 3: Acessar no navegador**

Abra:

```
http://localhost:5173/admin/setup
```

### **✅ Pronto!**

Agora você pode criar o admin localmente e testar tudo antes de fazer deploy!

---

## 🌐 OPÇÃO 2 - FAZER DEPLOY NA VERCEL

### **Método A - Usando Git (Recomendado)**

#### **Passo 1: Verificar alterações**

```bash
git status
```

Você verá lista de arquivos modificados/criados.

#### **Passo 2: Adicionar todos os arquivos**

```bash
git add .
```

#### **Passo 3: Fazer commit**

```bash
git commit -m "feat: adiciona página de setup admin automático"
```

#### **Passo 4: Fazer push**

```bash
git push origin main
```

OU se sua branch for `master`:

```bash
git push origin master
```

#### **Passo 5: Aguardar deploy**

1. A Vercel detecta automaticamente o push
2. Inicia o build (2-3 minutos)
3. Deploy concluído!

#### **Passo 6: Verificar deploy**

Acesse:
```
https://fernandoferrerobranco.com.br/admin/setup
```

---

### **Método B - Deploy Manual na Vercel**

Se não quiser usar Git:

#### **Passo 1: Instalar Vercel CLI**

```bash
npm install -g vercel
```

#### **Passo 2: Fazer login**

```bash
vercel login
```

#### **Passo 3: Deploy**

```bash
vercel --prod
```

---

## 🔍 ARQUIVOS IMPORTANTES CRIADOS

Estes arquivos foram adicionados/modificados:

### **Novos:**
- ✅ `/src/app/admin/AdminSetup.tsx` - Página de setup
- ✅ `/src/app/utils/getProjectInfo.tsx` - Helper PROJECT_ID
- ✅ `/vercel.json` - Configuração para SPAs funcionarem

### **Modificados:**
- ✅ `/src/app/routes.tsx` - Adicionada rota `/admin/setup`
- ✅ `/src/app/admin/AdminLogin.tsx` - Link para setup
- ✅ `/src/app/Portfolio.tsx` - Box com PROJECT_ID (dev mode)

---

## ⚙️ O QUE O vercel.json FAZ?

O arquivo `vercel.json` é **ESSENCIAL** para SPAs (Single Page Applications) como React Router.

**Sem ele:**
- ❌ URLs como `/admin/setup` retornam 404
- ❌ Reload da página quebra
- ❌ Links diretos não funcionam

**Com ele:**
- ✅ Todas as rotas funcionam
- ✅ Reload funciona
- ✅ Links diretos funcionam

---

## 🎯 COMANDOS GIT BÁSICOS

### **Ver status (arquivos modificados):**
```bash
git status
```

### **Adicionar todos os arquivos:**
```bash
git add .
```

### **Adicionar arquivo específico:**
```bash
git add src/app/admin/AdminSetup.tsx
```

### **Fazer commit:**
```bash
git commit -m "sua mensagem aqui"
```

### **Enviar para repositório:**
```bash
git push
```

### **Ver histórico:**
```bash
git log --oneline
```

---

## 📱 PROCESSO COMPLETO (RESUMO)

```
┌─────────────────────────────────────────┐
│  1. Código modificado localmente        │
│           ↓                             │
│  2. git add .                           │
│           ↓                             │
│  3. git commit -m "mensagem"            │
│           ↓                             │
│  4. git push                            │
│           ↓                             │
│  5. Vercel detecta push                 │
│           ↓                             │
│  6. Build automático (2-3 min)          │
│           ↓                             │
│  7. Deploy concluído! ✅                │
│           ↓                             │
│  8. Site atualizado em produção         │
└─────────────────────────────────────────┘
```

---

## 🆘 PROBLEMAS COMUNS

### **❌ "git: command not found"**

**Solução:** Instale o Git
- Windows: https://git-scm.com/download/win
- Mac: `brew install git`
- Linux: `sudo apt install git`

### **❌ "Permission denied"**

**Solução:**
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### **❌ "fatal: not a git repository"**

**Solução:** Você está na pasta errada
```bash
cd caminho/do/seu/projeto
```

### **❌ Deploy falhou na Vercel**

**Solução:**
1. Veja logs no Dashboard da Vercel
2. Verifique erros de build
3. Confirme que package.json está correto

### **❌ Ainda aparece 404 depois do deploy**

**Solução:**
1. Limpe cache: `Ctrl + Shift + R` (ou `Cmd + Shift + R` no Mac)
2. Aguarde 1-2 minutos (propagação DNS)
3. Verifique se deploy foi concluído no Dashboard Vercel

---

## ✅ CHECKLIST PRÉ-DEPLOY

Antes de fazer push, confirme:

- [ ] Código funciona localmente (`npm run dev`)
- [ ] Testou a rota `/admin/setup` localmente
- [ ] Criou admin de teste localmente
- [ ] Não há erros no console do navegador
- [ ] Não há erros no terminal (build)
- [ ] Arquivo `vercel.json` está presente

---

## 🎓 ALTERNATIVA - SE NÃO SOUBER GIT

### **Opção 1: Usar GitHub Desktop** ⭐
1. Baixe: https://desktop.github.com/
2. Interface visual (sem comandos)
3. Botões: Commit → Push

### **Opção 2: Usar VSCode Git UI** ⭐
1. Ícone de "Source Control" na barra lateral (terceiro ícone)
2. Ver arquivos modificados
3. Botão `+` para stage
4. Escrever mensagem de commit
5. Botão `✓` para commit
6. Botão `⋯` → Push

### **Opção 3: Deploy manual**
1. Baixe todo o código (ZIP)
2. Acesse: https://vercel.com/dashboard
3. New Project → Import
4. Faça upload do ZIP

---

## 🚀 DICA PRO

**Use este fluxo para desenvolvimento:**

1. **Desenvolva localmente:**
   ```bash
   npm run dev
   ```

2. **Teste tudo localmente:**
   - Navegue no `http://localhost:5173`
   - Teste todas as funcionalidades
   - Corrija bugs

3. **Quando estiver pronto:**
   ```bash
   git add .
   git commit -m "descrição clara do que foi feito"
   git push
   ```

4. **Aguarde deploy automático**

5. **Teste em produção**

---

## 🎯 PRÓXIMOS PASSOS

### **AGORA (Recomendado):**

1. **Teste localmente:**
   ```bash
   npm run dev
   ```

2. **Acesse:**
   ```
   http://localhost:5173/admin/setup
   ```

3. **Crie o admin localmente**

4. **Teste o painel localmente**

### **DEPOIS:**

5. **Faça deploy:**
   ```bash
   git add .
   git commit -m "adiciona painel admin completo"
   git push
   ```

6. **Aguarde 2-3 minutos**

7. **Acesse em produção:**
   ```
   https://fernandoferrerobranco.com.br/admin/setup
   ```

---

## 💡 DICAS IMPORTANTES

1. **Sempre teste localmente primeiro!**
2. **Não faça push de código quebrado**
3. **Escreva mensagens de commit descritivas**
4. **Verifique os logs de build da Vercel**
5. **Mantenha backup das credenciais**

---

**🎉 Qualquer dúvida, me avise!**
