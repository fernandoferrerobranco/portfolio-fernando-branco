# 📚 MANUAL DO PAINEL ADMINISTRATIVO

## 🎯 VISÃO GERAL

O painel administrativo permite que você gerencie todo o conteúdo do seu portfólio de forma visual e intuitiva, além de acompanhar métricas de performance através de um dashboard completo com KPIs.

---

## 🔐 PRIMEIRO ACESSO

### **1. Criar Conta Admin**

Antes de fazer login, você precisa criar sua conta de administrador.

**Opção A - Via Frontend (Recomendado):**

Execute este código no console do navegador (F12):

```javascript
const API_URL = 'https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-67983b2b';

fetch(`${API_URL}/auth/signup`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'seu@email.com',
    password: 'suasenhasegura123',
    name: 'Fernando Branco'
  })
})
.then(r => r.json())
.then(data => console.log('Usuário criado:', data));
```

**Opção B - Via Supabase Dashboard:**

1. Acesse: https://supabase.com/dashboard
2. Entre no seu projeto
3. Vá em **Authentication** → **Users**
4. Clique em **"Add user"**
5. Preencha email e senha
6. Marque **"Auto Confirm User"**

### **2. Fazer Login**

1. Acesse: `https://seusite.com/admin/login`
2. Digite seu email e senha
3. Clique em **"ENTRAR"**

---

## 📊 DASHBOARD

O dashboard mostra métricas em tempo real do seu portfólio:

### **KPIs Principais:**

- 📈 **Visualizações Totais** - Total de acessos nos últimos 30 dias
- 📥 **Downloads de Currículo** - Quantas vezes seu CV foi baixado
- 📄 **Páginas Únicas** - Quantas seções diferentes foram visitadas
- 🔗 **Fontes de Tráfego** - De onde vêm seus visitantes

### **Gráficos:**

- **Visualizações ao Longo do Tempo** - Gráfico de área mostrando tendência
- **Downloads de Currículo** - Linha temporal de downloads
- **Páginas Mais Visitadas** - Ranking das seções mais acessadas
- **Fontes de Tráfego** - Lista das principais origens de visitantes

---

## ✏️ EDITOR DE CONTEÚDO

### **Seções Disponíveis:**

1. **Hero Section** - Cabeçalho principal do site
2. **Sobre Mim** - Biografia e apresentação
3. **Experiências** - Trajetória profissional
4. **Habilidades** - Skills e especialidades
5. **Formação** - Educação e certificações
6. **Idiomas** - Fluência em idiomas
7. **Depoimentos** - Testemunhos de clientes
8. **Downloads** - Arquivos para download (CV, portfólio, etc.)
9. **Links Sociais** - Redes sociais e contatos

### **Como Editar:**

1. No menu lateral, clique na seção que deseja editar
2. Você verá **dois painéis**: 🇧🇷 Português e 🇺🇸 English
3. Edite os campos em ambos os idiomas
4. Clique em **"Ver Preview"** para visualizar (opcional)
5. Clique em **"Salvar Alterações"** para publicar

### **Dicas:**

- ✅ **Sempre edite PT e EN** - Mantenha consistência nas traduções
- ✅ **Use preview** - Verifique antes de salvar
- ✅ **Salve frequentemente** - Suas alterações são publicadas imediatamente
- ⚠️ **Formato JSON** - Mantenha a estrutura dos dados

---

## 🌐 SISTEMA DE TRADUÇÃO

O site automaticamente detecta o idioma do visitante e mostra o conteúdo correto.

**Idiomas Suportados:**
- 🇧🇷 Português (PT-BR)
- 🇺🇸 English (EN-US)

**Como Adicionar Novos Idiomas:**

1. Edite `/src/app/data/translations.ts`
2. Adicione novo idioma no objeto `translations`
3. Adicione bandeira no componente `LanguageToggle`
4. Atualize editor para incluir novo idioma

---

## 📈 ANALYTICS & TRACKING

### **Tracking Automático:**

O sistema rastreia automaticamente:
- ✅ Visualizações de página
- ✅ Downloads de arquivos
- ✅ Origem do tráfego (referrers)
- ✅ Seções mais visitadas

### **Como Funciona:**

Quando um visitante acessa o site, eventos são enviados para:
- `POST /analytics/pageview` - Registra visualização
- `POST /analytics/download` - Registra download

**Não requer configuração adicional!** Tudo funciona automaticamente.

---

## 🔒 SEGURANÇA

### **Autenticação:**

- ✅ Login seguro com Supabase Auth
- ✅ Tokens JWT para sessões
- ✅ Rotas protegidas com middleware
- ✅ Logout em qualquer página

### **Proteção de Dados:**

- ✅ Service Role Key NUNCA exposta ao frontend
- ✅ CORS configurado corretamente
- ✅ Apenas admins autenticados podem editar
- ✅ Analytics públicos (sem dados sensíveis)

### **Boas Práticas:**

- 🔐 Use senha forte (mínimo 8 caracteres)
- 🔐 Não compartilhe suas credenciais
- 🔐 Faça logout em computadores públicos
- 🔐 Troque senha periodicamente

---

## 🛠️ TROUBLESHOOTING

### **Problema: Não consigo fazer login**

**Solução:**
1. Verifique se o usuário foi criado (Supabase Dashboard)
2. Confirme email/senha corretos
3. Veja console do navegador (F12) para erros
4. Verifique se o backend está online (`/health`)

### **Problema: Dashboard não carrega dados**

**Solução:**
1. Dados aparecem apenas após visitantes acessarem o site
2. Verifique se analytics está funcionando (console do backend)
3. Aguarde alguns minutos para propagação

### **Problema: Alterações não salvam**

**Solução:**
1. Verifique conexão com internet
2. Veja erros no console (F12)
3. Confirme se está autenticado (não expirou sessão)
4. Tente fazer logout e login novamente

### **Problema: Erro 401 Unauthorized**

**Solução:**
1. Sua sessão expirou - faça login novamente
2. Limpe cache do navegador
3. Verifique se Service Role Key está configurada

---

## 🚀 DEPLOY & PRODUÇÃO

### **Configurar Variáveis de Ambiente:**

No **Supabase Dashboard**:

1. Vá em **Project Settings** → **API**
2. Copie:
   - `Project URL` (SUPABASE_URL)
   - `anon public` key (SUPABASE_ANON_KEY)
   - `service_role` key (SUPABASE_SERVICE_ROLE_KEY)

3. Configure as variáveis no **Vercel**:
   - Settings → Environment Variables
   - Adicione as 3 variáveis acima

### **Testar Backend:**

```bash
# Health check
curl https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-67983b2b/health

# Deve retornar: {"status":"ok"}
```

---

## 📞 SUPORTE

### **Logs e Debug:**

**Frontend (Navegador):**
- Pressione **F12** para abrir DevTools
- Vá na aba **Console** para ver logs
- Aba **Network** para ver requisições

**Backend (Supabase):**
- Acesse Supabase Dashboard
- Vá em **Edge Functions** → **Logs**
- Veja erros e requisições

### **Documentação Adicional:**

- 📖 [Supabase Auth](https://supabase.com/docs/guides/auth)
- 📖 [React Router](https://reactrouter.com/en/main)
- 📖 [Recharts](https://recharts.org/en-US/)

---

## ✨ PRÓXIMOS PASSOS

1. ✅ **Criar conta admin** - Faça signup
2. ✅ **Fazer primeiro login** - Acesse `/admin/login`
3. ✅ **Editar conteúdo** - Personalize todas as seções
4. ✅ **Acompanhar métricas** - Veja dashboard diariamente
5. ✅ **Compartilhar portfólio** - Divulgue seu site!

---

**Desenvolvido com 💙 usando Figma Make + Supabase + React**
