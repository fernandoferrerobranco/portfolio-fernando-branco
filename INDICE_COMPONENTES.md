# 📋 ÍNDICE DE SEÇÕES E COMPONENTES

Guia de referência numerada para facilitar comunicação sobre alterações específicas.

---

## 🎯 ESTRUTURA GERAL

```
#S0 - Navigation (Header fixo)
#S1 - Hero Section
#S2 - Trajetória (Big Numbers + Perfil + Bento Grid + Timeline Empresas)
#S3 - Experiências Detalhadas (Accordions)
#S4 - Formação & Certificações
#S5 - Idiomas
#S6 - Cases de Sucesso
#S7 - Depoimentos
#S8 - Footer
```

---

## 📍 DETALHAMENTO POR SEÇÃO

### **#S0 - NAVIGATION** (Header Fixo)
**Arquivo:** `/src/app/App.tsx` (linhas ~200-220)

- **#S0.1** - Logo "Fernando Branco_"
- **#S0.2** - Menu Desktop (Perfil, Timeline, Experiência, Skills)
- **#S0.3** - Language Toggle (🇧🇷 PT | 🇺🇸 EN)

---

### **#S1 - HERO SECTION** (Tela inicial)
**Arquivo:** `/src/app/App.tsx` (linhas ~225-280)

#### Lado Esquerdo:
- **#S1.1** - Badge "Sênior Operations Leader"
- **#S1.2** - Headline H1 (Marketing 360, Data & Processos, etc.)
- **#S1.3** - Contact Info Row:
  - **#S1.3a** - Localização (São Paulo, Brasil)
  - **#S1.3b** - Email (fernando@g2g.org.br)
  - **#S1.3c** - WhatsApp ((11) 97155-0871)
- **#S1.4** - CTAs:
  - **#S1.4a** - Botão "Acessar Currículo"
  - **#S1.4b** - Botão "Networking"

#### Lado Direito:
- **#S1.5** - Card de Perfil:
  - **#S1.5a** - Ícone GitMerge (círculo)
  - **#S1.5b** - Nome "FERNANDO BRANCO"
  - **#S1.5c** - Subtitle "Operations Architect"

---

### **#S2 - TRAJETÓRIA** (Seção Unificada)
**Arquivo:** `/src/app/components/TrajetoriaSection.tsx`

#### Bloco 1: Big Numbers
- **#S2.1** - Big Number: Anos de Experiência
- **#S2.2** - Big Number: Projetos Entregues
- **#S2.3** - Big Number: Certificações
- **#S2.4** - Big Number: Países (LATAM)

#### Bloco 2: Perfil Profissional
- **#S2.5** - Título "Perfil Profissional"
- **#S2.6** - Texto descritivo (3 parágrafos)

#### Bloco 3: Bento Grid (4 destaques)
- **#S2.7** - Card "Marketing 360"
- **#S2.8** - Card "Data & Processos"
- **#S2.9** - Card "Go-to-Market"
- **#S2.10** - Card "Gestão de Stakeholders"

#### Bloco 4: Timeline Horizontal Empresas
- **#S2.11** - Timeline Item: Fictorpay (2024-2025)
- **#S2.12** - Timeline Item: Shopee (2022-2024)
- **#S2.13** - Timeline Item: Comgás (2021-2022)
- **#S2.14** - Timeline Item: Be Arts (2020-2021)
- **#S2.15** - Timeline Item: AeC (2019-2020)
- **#S2.16** - Timeline Item: Youon (2018-2019)

---

### **#S3 - EXPERIÊNCIAS DETALHADAS** (Accordions)
**Arquivo:** `/src/app/App.tsx` (linhas ~300-1000)

#### Accordion #1: FICTORPAY
- **#S3.1** - Header Accordion Fictorpay
  - **#S3.1a** - Badge de data (2024-2025)
  - **#S3.1b** - Nome empresa + tipo (Fintech)
  - **#S3.1c** - Cargo (Head de Marketing)
- **#S3.2** - Escopo (texto descritivo)
- **#S3.3** - Conquistas Fictorpay (7 itens):
  - **#S3.3a** - Inovação & Digital Workplace
  - **#S3.3b** - Escalabilidade & Marketing Ops
  - **#S3.3c** - Presença Digital & Social Media
  - **#S3.3d** - Customer Journey (PF/PJ)
  - **#S3.3e** - Comunicação Interna & Gamificação
  - **#S3.3f** - Gestão de Stakeholders & Internacionalização
  - **#S3.3g** - Brand & Live Marketing

#### Accordion #2: SHOPEE
- **#S3.4** - Header Accordion Shopee
  - **#S3.4a** - Badge de data (2022-2024)
  - **#S3.4b** - Nome empresa + tipo (Marketplace)
  - **#S3.4c** - Cargo (Analista Sênior Planning & Ops)
- **#S3.5** - Escopo (texto descritivo)
- **#S3.6** - Fase 1: Marketing Operations
  - **#S3.6a** - Tríade de Automações
- **#S3.7** - Fase 2: Qualidade e Suporte
  - **#S3.7a** - Qualidade (98% performance)
  - **#S3.7b** - Suporte & Sistemas
  - **#S3.7c** - Gestão de Pessoas
- **#S3.8** - Fase 3: Campaign Planning LATAM
  - **#S3.8a** - Gestão Regional (MX, CL, CO)
  - **#S3.8b** - Gestão Financeira e KPIs
  - **#S3.8c** - Estratégia de Growth

#### Accordion #3: COMGÁS
- **#S3.9** - Header Accordion Comgás
  - **#S3.9a** - Badge de data (2021-2022)
  - **#S3.9b** - Nome empresa + tipo (Energia/Infra)
  - **#S3.9c** - Cargo (Analista Marketing Institucional)
- **#S3.10** - Escopo (texto descritivo)
- **#S3.11** - Conquistas Comgás (6 itens):
  - **#S3.11a** - Gestão de Stakeholders & Unificação de Dados
  - **#S3.11b** - Governança e Compliance (LGPD)
  - **#S3.11c** - Gestão de Performance Digital
  - **#S3.11d** - Operação e Manutenção
  - **#S3.11e** - Brand Awareness & ESG
  - **#S3.11f** - Autonomia e Confiança

#### Accordion #4: BE ARTS
- **#S3.12** - Header Accordion Be Arts
  - **#S3.12a** - Badge de data (2020-2021)
  - **#S3.12b** - Nome empresa + tipo (Agência)
  - **#S3.12c** - Cargo (Account Manager)
- **#S3.13** - Escopo (texto descritivo)
- **#S3.14** - Conquistas Be Arts (4 itens):
  - **#S3.14a** - Gestão de Key Account & Projetos 360º
  - **#S3.14b** - Trade Marketing & Engajamento
  - **#S3.14c** - Interface Criativa & Planejamento
  - **#S3.14d** - Resiliência em Transições de Negócio

#### Accordion #5: AeC
- **#S3.15** - Header Accordion AeC
- **#S3.16** - Escopo + Conquistas (4 itens)

#### Accordion #6: YOUON
- **#S3.17** - Header Accordion Youon
- **#S3.18** - Escopo + Conquistas (3 itens)

---

### **#S4 - FORMAÇÃO & CERTIFICAÇÕES**
**Arquivo:** `/src/app/components/FormacaoSection.tsx`

#### Lado Esquerdo: Formação Acadêmica
- **#S4.1** - Título da seção + ícone GraduationCap
- **#S4.2** - DemoBadge (remover quando usar dados reais)
- **#S4.3** - MBA:
  - **#S4.3a** - Data (2023-2024)
  - **#S4.3b** - Curso (MBA Marketing Digital & Analytics)
  - **#S4.3c** - Instituição (FGV)
  - **#S4.3d** - Tópicos estudados
- **#S4.4** - Graduação:
  - **#S4.4a** - Data (2015-2019)
  - **#S4.4b** - Curso (Bacharelado Administração)
  - **#S4.4c** - Instituição (USP)
  - **#S4.4d** - Tópicos estudados
- **#S4.5** - Extensão:
  - **#S4.5a** - Data (2022)
  - **#S4.5b** - Curso (Data Science & Python)
  - **#S4.5c** - Instituição (ESALQ/USP)
  - **#S4.5d** - Tópicos estudados

#### Lado Direito: Certificações
- **#S4.6** - Título da seção + ícone Award
- **#S4.7** - Certificação #1: Google Analytics 4 (2024)
- **#S4.8** - Certificação #2: Meta Marketing Professional (2023)
- **#S4.9** - Certificação #3: Scrum Master SMC (2023)
- **#S4.10** - Certificação #4: Workato Automation Pro (2023)
- **#S4.11** - Certificação #5: Pipefy Expert (2022)
- **#S4.12** - Certificação #6: HubSpot Marketing (2022)

---

### **#S5 - IDIOMAS**
**Arquivo:** `/src/app/components/IdiomasSection.tsx`

- **#S5.1** - Título da seção + DemoBadge
- **#S5.2** - Card Português 🇧🇷:
  - **#S5.2a** - Bandeira + Nome
  - **#S5.2b** - Nível (Nativo)
  - **#S5.2c** - Barra Leitura (100%)
  - **#S5.2d** - Barra Escrita (100%)
  - **#S5.2e** - Barra Conversação (100%)
- **#S5.3** - Card Inglês 🇺🇸:
  - **#S5.3a** - Bandeira + Nome
  - **#S5.3b** - Nível (Fluente)
  - **#S5.3c** - Barra Leitura (95%)
  - **#S5.3d** - Barra Escrita (90%)
  - **#S5.3e** - Barra Conversação (85%)
  - **#S5.3f** - Certificação TOEFL
- **#S5.4** - Card Espanhol 🇪🇸:
  - **#S5.4a** - Bandeira + Nome
  - **#S5.4b** - Nível (Intermediário)
  - **#S5.4c** - Barra Leitura (70%)
  - **#S5.4d** - Barra Escrita (60%)
  - **#S5.4e** - Barra Conversação (65%)

---

### **#S6 - CASES DE SUCESSO**
**Arquivo:** `/src/app/components/CasesSection.tsx`

- **#S6.1** - Título da seção + DemoBadge
- **#S6.2** - Case #1: Automação de Vouchers (Shopee)
  - **#S6.2a** - Ícone Zap + Cor Laranja
  - **#S6.2b** - Título do case
  - **#S6.2c** - Desafio
  - **#S6.2d** - Solução
  - **#S6.2e** - Resultado 1: 8 min
  - **#S6.2f** - Resultado 2: 97%
  - **#S6.2g** - Resultado 3: 500+
  - **#S6.2h** - Impacto final
- **#S6.3** - Case #2: Reestruturação Jornada (Fictorpay)
  - **#S6.3a** - Ícone TrendingUp + Cor Cyan
  - **#S6.3b** - Título do case
  - **#S6.3c** - Desafio
  - **#S6.3d** - Solução
  - **#S6.3e** - Resultado 1: +45%
  - **#S6.3f** - Resultado 2: 3.8→4.6 NPS
  - **#S6.3g** - Resultado 3: 100%
  - **#S6.3h** - Impacto final
- **#S6.4** - Case #3: Intranet SharePoint (Fictorpay)
  - **#S6.4a** - Ícone Rocket + Cor Azul
  - **#S6.4b** - Título do case
  - **#S6.4c** - Desafio
  - **#S6.4d** - Solução
  - **#S6.4e** - Resultado 1: -60%
  - **#S6.4f** - Resultado 2: 85%
  - **#S6.4g** - Resultado 3: 12+
  - **#S6.4h** - Impacto final

---

### **#S7 - DEPOIMENTOS**
**Arquivo:** `/src/app/components/DepoimentosSection.tsx`

- **#S7.1** - Título da seção + DemoBadge
- **#S7.2** - Depoimento #1: Maria Silva (Shopee)
  - **#S7.2a** - Ícone Quote
  - **#S7.2b** - 5 estrelas ⭐
  - **#S7.2c** - Texto do depoimento
  - **#S7.2d** - Nome
  - **#S7.2e** - Cargo (Regional Director LATAM)
  - **#S7.2f** - Empresa
- **#S7.3** - Depoimento #2: Carlos Oliveira (Fictorpay)
  - **#S7.3a** - Ícone Quote
  - **#S7.3b** - 5 estrelas ⭐
  - **#S7.3c** - Texto do depoimento
  - **#S7.3d** - Nome
  - **#S7.3e** - Cargo (CMO)
  - **#S7.3f** - Empresa
- **#S7.4** - Depoimento #3: Ana Costa (Be Arts)
  - **#S7.4a** - Ícone Quote
  - **#S7.4b** - 5 estrelas ⭐
  - **#S7.4c** - Texto do depoimento
  - **#S7.4d** - Nome
  - **#S7.4e** - Cargo (Creative Director)
  - **#S7.4f** - Empresa

---

### **#S8 - FOOTER**
**Arquivo:** `/src/app/components/Footer.tsx`

#### Coluna 1: Branding
- **#S8.1** - Logo "Fernando Branco_"
- **#S8.2** - Descrição (tagline)
- **#S8.3** - Badge "Open to Work" (pulsante)

#### Coluna 2: Navegação
- **#S8.4** - Título "Navegação"
- **#S8.5** - Links (Perfil, Timeline, Experiência, Skills, Formação, Cases)

#### Coluna 3: Contato
- **#S8.6** - Título "Contato & Documentos"
- **#S8.7** - Download CV (PDF)
- **#S8.8** - Email (fernando@g2g.org.br)

#### Barra Inferior
- **#S8.9** - Redes Sociais:
  - **#S8.9a** - LinkedIn
  - **#S8.9b** - GitHub
  - **#S8.9c** - WhatsApp
  - **#S8.9d** - Email
- **#S8.10** - Copyright
- **#S8.11** - Créditos tech stack

---

## 🔧 COMPONENTES AUXILIARES

- **#C1** - LanguageToggle (🇧🇷 🇺🇸)
- **#C2** - ScrollToTop (botão flutuante)
- **#C3** - DemoBadge ("Dados de Demonstração")
- **#C4** - Counter (animação de números)

---

## 📝 COMO USAR ESTE ÍNDICE

### Exemplos de comunicação:

✅ **"Altere o #S1.2 para adicionar mais uma linha"**  
→ Vou editar a headline do Hero

✅ **"Remova o #S5.4 (Espanhol)"**  
→ Vou remover o card de Espanhol da seção Idiomas

✅ **"Adicione um novo item em #S4.12"**  
→ Vou adicionar uma 7ª certificação

✅ **"Mude a cor do #S6.2a de laranja para verde"**  
→ Vou alterar o ícone do Case #1

✅ **"Substitua todo o #S7.2 por um depoimento real"**  
→ Vou trocar o depoimento da Maria Silva

---

## 🎯 ATALHOS RÁPIDOS

| Código | Seção |
|--------|-------|
| **#S0** | Navigation |
| **#S1** | Hero |
| **#S2** | Trajetória |
| **#S3** | Experiências Detalhadas |
| **#S4** | Formação |
| **#S5** | Idiomas |
| **#S6** | Cases |
| **#S7** | Depoimentos |
| **#S8** | Footer |

---

**Pronto para usar!** 🚀 Agora você pode referenciar qualquer componente de forma rápida e precisa!
