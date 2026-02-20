import { Translations } from './types';

export const translations: Translations = {
  pt: {
    // ========== NAVIGATION ==========
    nav: {
      profile: 'Perfil',
      timeline: 'Timeline',
      experience: 'Experiência',
      skills: 'Skills',
    },

    // ========== HERO SECTION ==========
    hero: {
      badge: 'Sênior Operations Leader',
      title1: 'MARKETING',
      title2: '360',
      title3: 'DATA & PROCESSOS',
      title4: 'GO TO MARKET',
      title5: 'GESTÃO DE STAKEHOLDERS',
      location: 'São Paulo, Brasil',
      cta1: 'Acessar Currículo',
      cta2: 'Networking',
      cardName: 'FERNANDO BRANCO',
      cardRole: 'Operations Architect',
    },

    // ========== TRAJECTORY SECTION ==========
    trajectory: {
      title: 'CONHEÇA MINHA',
      titleHighlight: 'TRAJETÓRIA',
      about: 'Sobre',
      profileText:
        'Liderança estratégica com 19 anos de experiência em Marketing Operations (MarOps) e Gestão de Operações, especializado na arquitetura de processos e escalabilidade de negócios. Expert em transformar fluxos manuais em automações de alta performance (Pipefy, Workato, Excel), com histórico de gestão em ecossistemas complexos (Shopee, FictorPay, Comgás). Perfil orientado a dados e governança, com sólida habilidade em mediação de conflitos, gestão de stakeholders seniores e liderança de times multidisciplinares. Profissional autodidata e resiliente, focado em eficiência operacional e mitigação de riscos.',
      bigNumbers: {
        label1: 'Anos\nExperiência',
        label2: 'Performance\nQuality',
        label3: 'Campanhas\nGerenciadas',
        label4: 'Países\nLATAM',
        label5: 'Vouchers\nem 8min',
        label6: 'Empresas\nLideradas',
      },
      bento: {
        card1: {
          title: 'Marketing 360',
          desc: 'Planejamento estratégico end-to-end, campanhas integradas e gestão de ecosistemas digitais completos.',
        },
        card2: {
          title: 'Data & Processos',
          desc: 'Automação de fluxos, governança de dados e arquitetura de sistemas escaláveis de alta performance.',
        },
        card3: {
          title: 'Go to Market',
          desc: 'Estratégias de lançamento, growth hacking e otimização de jornadas para aquisição e retenção.',
        },
        card4: {
          title: 'Gestão de Stakeholders',
          desc: 'Mediação de conflitos, alinhamento de expectativas e interface com lideranças seniores C-Level.',
        },
      },
      education: {
        title: 'FORMAÇÃO',
        items: [
          { institution: 'Escola Pueri Domus', degree: 'Ensino Fundamental', year: '2007' },
          { institution: 'Anhembi Morumbi', degree: 'Administração com Ênfase em Marketing', year: '2012' },
        ],
      },
      certifications: {
        title: 'CERTIFICAÇÕES',
        items: [
          'Google Ads & Analytics',
          'Meta Blueprint Certified',
          'Pipefy Expert',
          'HubSpot Inbound',
          'Scrum Foundation',
        ],
      },
      languages: {
        title: 'IDIOMAS',
        items: [
          { lang: 'Português', flag: '🇧🇷', level: 'Nativo' },
          { lang: 'Inglês', flag: '🇺🇸', level: 'Fluente' },
          { lang: 'Espanhol', flag: '🇪🇸', level: 'Básico' },
        ],
      },
      skills: {
        title: 'COMPETÊNCIAS',
        items: ['Excel Avançado', 'Automação', 'Data Analysis', 'Stakeholder Mgmt', 'Pipefy', 'Workato'],
      },
      timelineBadge: 'Overview Cronológico',
      timelineTitle: '',
      timelineTitleHighlight: '',
    },

    // ========== SECTION TITLES ==========
    sections: {
      detailedExp: 'Experiências Detalhadas',
      education: 'Formação & Certificações',
      languages: 'Idiomas',
      cases: 'Cases de Sucesso',
      testimonials: 'O que dizem sobre mim',
    },

    // ========== DETAILED EXPERIENCES ==========
    experiences: {
      fictorpay: {
        role: 'Head de Marketing',
        scope:
          'Liderança estratégica e operacional da área como primeiro colaborador da vertical (Employee #1). Atuei como ponto focal entre a Unidade de Negócio e a Holding, garantindo o alinhamento de diretrizes e a governança de marca. Responsável pela estruturação do ecossistema digital (Site, Redes Sociais e Intranet), comunicação institucional e suporte comercial para clientes PF e PJ.',
        achievements: [
          {
            title: 'Inovação & Digital Workplace',
            desc: 'Implementei de forma autodidata a Intranet corporativa via SharePoint, centralizando o fluxo de informações e otimizando a colaboração interna.',
          },
          {
            title: 'Escalabilidade & Marketing Ops (Self-Service)',
            desc: 'Desenvolvi uma solução técnica (software de e-mail marketing) que padronizou a identidade visual e permitiu a inclusão de múltiplos links, dando autonomia às áreas para envios massivos e eliminando gargalos operacionais.',
          },
          {
            title: 'Presença Digital & Social Media',
            desc: 'Gestão integral das redes sociais e atualização contínua do site institucional, garantindo a consistência das informações, SEO e o vibe da nova identidade visual.',
          },
          {
            title: 'Customer Journey (PF/PJ)',
            desc: 'Reestruturei a jornada de comunicação para todo o ecossistema de clientes, aplicando a nova marca e implementando pontos de contato estratégicos para elevar a percepção de valor e suporte.',
          },
          {
            title: 'Comunicação Interna & Gamificação',
            desc: 'Gestão da Newsletter corporativa (conteúdo, arte e redação), utilizando dinâmicas de gamificação que aumentaram significativamente o engajamento do time.',
          },
          {
            title: 'Gestão de Stakeholders & Internacionalização',
            desc: 'Interface direta com lideranças da Holding e diversas áreas internas para gestão de expectativas e entrega de materiais críticos, incluindo apresentações institucionais em Português e Inglês.',
          },
          {
            title: 'Brand & Live Marketing',
            desc: 'Idealizei o conceito do stand no "Fictor Day", realizando a supervisão técnica da agência executora para assegurar o rigor estético e a qualidade da entrega final.',
          },
        ],
      },
      shopee: {
        role: 'Analista de Marketing Sênior (Planning & Ops)',
        scope:
          'Trajetória de ascensão acelerada iniciada em Marketing Operations, sendo promovido à Qualidade e Suporte (atuação híbrida) e, posteriormente, convidado a integrar o time regional de Campaign Planning LATAM. Especialista em arquitetura de processos, automação de sistemas e governança de campanhas de alta escala.',
        timelineTitle: 'Trajetória de Promoções',
        timeline: [
          { position: 'Marketing Ops', level: 'Analista Junior', region: '' },
          { position: 'Quality Team', level: 'Analista Pleno', region: '' },
          { position: 'Quality & Support Team', level: 'Analista Pleno', region: 'Atuação Híbrida' },
          { position: 'LATAM Campaign Planner', level: 'Analista Sênior', region: 'MX, CO, CL' },
        ],
        achievements: [
          {
            title: 'Tríade de Automações',
            desc: 'Desenvolvi 3 automações críticas (Vouchers em Massa, Distribuição de Tarefas, Auditoria de QC) que transformaram processos de horas em minutos. Exemplo: 500 vouchers criados em 8 minutos.',
          },
          {
            title: 'Qualidade 98% em 50+ Atividades',
            desc: 'Promovido para assegurar integridade de campanhas críticas (Banners, CRM, Games), mantendo 98% de performance e identificando erros em campanhas regulamentadas, mitigando riscos jurídicos.',
          },
          {
            title: 'Suporte & Integração de Sistemas',
            desc: 'Estruturei ambiente de suporte integrando Pipefy, Excel e Workato com automações e condicionais que otimizaram fluxos de demandas e geraram dashboards de performance para diretoria.',
          },
          {
            title: 'Gestão de Pessoas (3 Times)',
            desc: 'Supervisão técnica e análise de produtividade de 3 times de execução, liderando onboardings e treinamentos para padronizar qualidade.',
          },
          {
            title: 'Campaign Planning LATAM (MX, CL, CO)',
            desc: 'Convidado para liderar planejamento regional no México, Chile e Colômbia. Responsável por ciclo completo de Black Friday, Double Dates (4.4) e operações BAU.',
          },
          {
            title: 'Gestão Financeira & KPIs Regionais',
            desc: 'Gestão de GTM, alocação de budget e interface com time Comercial na China e FP&A. Monitoramento de métricas core (A1, GMV, Ticket Médio) com reporte para alta liderança.',
          },
          {
            title: 'Estratégia de Growth & CRM',
            desc: 'Colaboração com Online Marketing e CRM para parametrização de campanhas segmentadas (New Users e Churn) e otimização de acessos na plataforma.',
          },
        ],
      },
      comgas: {
        role: 'Analista de Marketing Institucional',
        scope:
          'Gestão da presença digital institucional e governança de dados da maior distribuidora de gás encanado do Brasil. Atuei como o principal ponto focal na intermediação entre agências de tecnologia e stakeholders internos (TI, Jurídico, Engenharia, Atendimento e RH), garantindo a integridade da comunicação em um ambiente de alta complexidade regulatória.',
        achievements: [
          {
            title: 'Gestão de Stakeholders & Unificação de Dados',
            desc: 'Responsável por coletar, organizar e validar informações de praticamente todas as áreas da companhia para a reconstrução e manutenção do site institucional. Garanti que descrições de produtos, canais de atendimento e áreas de ajuda estivessem 100% acuradas.',
          },
          {
            title: 'Governança e Compliance (LGPD)',
            desc: 'Liderei a gestão de conteúdo e processos do ecossistema digital sob as diretrizes da Lei Geral de Proteção de Dados, assegurando a segurança da informação e a conformidade legal nas interações com o cliente.',
          },
          {
            title: 'Gestão de Performance Digital',
            desc: 'Monitoramento de métricas de tráfego e análise de dados (tracking) para otimização da experiência do usuário (UX), servindo de suporte técnico para as decisões estratégicas do time de marketing.',
          },
          {
            title: 'Operação e Manutenção',
            desc: 'Realizei a gestão direta da agência de manutenção do site, priorizando o backlog de atualizações, banners de campanhas sazonais e landing pages, garantindo agilidade operacional.',
          },
          {
            title: 'Brand Awareness & ESG',
            desc: 'Coordenação da distribuição de ativos e ingressos para eventos patrocinados e suporte na comunicação de iniciativas de sustentabilidade (ESG) da companhia.',
          },
          {
            title: 'Autonomia e Confiança',
            desc: 'Durante o período de férias da liderança imediata, assumi integralmente a gestão de todas as entregas do site institucional por 30 dias, assegurando a continuidade operacional e o cumprimento de prazos críticos sem supervisão direta.',
          },
        ],
      },
      bearts: {
        role: 'Account Manager (Gerente de Contas)',
        scope:
          'Gestão integral da conta Osram (líder mundial em iluminação automotiva), atuando como o elo estratégico entre as necessidades do cliente e o time de execução criativa. Responsável pelo planejamento 360º, garantindo a entrega de campanhas de alto impacto, materiais de PDV e estratégias de incentivo para o canal de vendas.',
        achievements: [
          {
            title: 'Gestão de Key Account & Projetos 360º',
            desc: 'Liderança operacional de demandas que englobavam desde publicidade digital e vídeos institucionais até ativações físicas (OOH e PDV). Garanti o cumprimento dos brand guidelines globais da Osram em todas as peças produzidas.',
          },
          {
            title: 'Trade Marketing & Engajamento',
            desc: 'Desenvolvi e implementei ações para alavancar o programa de treinamento de consultores em lojas de todo o Brasil. Foco em transformar o conhecimento técnico do produto em argumentos de vendas eficazes para a ponta do varejo.',
          },
          {
            title: 'Interface Criativa & Planejamento',
            desc: 'Atuação direta com o time de criação para traduzir briefings complexos em soluções visuais e campanhas de marketing, assegurando a viabilidade orçamentária e o cumprimento de cronogramas agressivos.',
          },
          {
            title: 'Resiliência em Transições de Negócio',
            desc: 'Mantive a alta performance e o relacionamento próximo com o cliente durante o processo de venda da Osram para um grupo alemão. Gerenciei a conta com excelência até o período de transição de fornecedores, sendo reconhecido pela entrega consistente em um cenário de mudança estrutural.',
          },
          {
            title: 'Análise de Resultados',
            desc: 'Acompanhamento de KPIs de campanhas e reporte de performance para o cliente, sugerindo ajustes táticos para maximizar a visibilidade da marca no mercado nacional.',
          },
        ],
      },
      baermate: {
        role: 'Executivo de Vendas & Trade Marketing',
        scope:
          'Gestão da expansão de market share e ativação de marca em canais estratégicos de São Paulo. Responsável pela abertura de novas contas (On-trade e Off-trade), gestão de relacionamento com grandes varejistas e implementação de táticas de Growth para acelerar a capilaridade do produto.',
        achievements: [
          {
            title: 'Otimização de Operações de Campo',
            desc: 'Apliquei inteligência logística e roteirização estratégica para o field sales, otimizando as rotas de visitação por densidade geográfica. Isso permitiu maximizar o número de PDVs atendidos diariamente e garantir a agilidade no transporte de volumes superiores por rota.',
          },
          {
            title: 'Escalabilidade via Tecnologia (Growth Hacking)',
            desc: 'Identifiquei um gargalo na prospecção manual de estabelecimentos parceiros do Zé Delivery. Desenvolvi e implementei uma automação (bot) para disparos em massa de apresentações comerciais, transformando um processo individual em uma máquina de geração de leads que acelerou drasticamente a entrada da marca na plataforma.',
          },
          {
            title: 'Criação de Ativos de Marketing & Trade',
            desc: 'Desenvolvi materiais gráficos educativos e promocionais focados em educar o consumidor final e o lojista sobre os diferenciais do produto (chá energético natural). A criação dessas peças garantiu uma comunicação padronizada no PDV e facilitou o sell-out.',
          },
          {
            title: 'Gestão de Key Accounts',
            desc: 'Conquistei e administrei contas de alto volume e relevância, como Mundo Verde e o Poke Garden (um dos maiores players em volume de vendas no iFood), assegurando a presença da marca em locais de alto giro e prestígio.',
          },
          {
            title: 'Trade Marketing & Experiência de Marca',
            desc: 'Responsável pela negociação de visibilidade, implementação de materiais de PDV e estratégias de sampling, garantindo a fidelização dos pontos de venda e o crescimento da recorrência de pedidos.',
          },
        ],
      },
      puffbr: {
        role: 'Gerente de Operações e Atendimento',
        scope:
          'Gestão integral da operação de e-commerce, abrangendo desde a entrada do pedido na plataforma Shopify até a logística de Last Mile. Responsável pela estruturação do atendimento ao cliente e pela otimização da malha de entregas para garantir agilidade e redução de custos operacionais.',
        achievements: [
          {
            title: 'Eficiência Logística & Roteirização',
            desc: 'Reestruturei a estratégia de entregas em São Paulo através de inteligência geográfica, implementando rotas de alta densidade por proximidade de bairros. Resultado: Reduzi o custo de frete de R$ 25 para uma média de R$ 3 a R$ 5 por pedido, utilizando modais ágeis (logística de motoboys) com máxima produtividade.',
          },
          {
            title: 'Escalabilidade em Picos de Demanda',
            desc: 'Gerenciei a operação logística que suportou recordes de faturamento, atingindo a marca de R$ 1 milhão em apenas 2 dias. Garanti a integridade de todas as entregas e a manutenção do nível de serviço (SLA) mesmo sob pressão extrema de volume.',
          },
          {
            title: 'Gestão de Plataforma (Shopify)',
            desc: 'Responsável por todo o backoffice do e-commerce, incluindo gestão de inventário, processamento de pedidos e análise de dados de venda para suporte à tomada de decisão.',
          },
          {
            title: 'Experiência do Cliente (Atendimento Premium)',
            desc: 'Estruturei um atendimento ágil e consultivo, focado em resoluções em tempo real. Implementei soluções de "entrega relâmpago" (ex: entregas em aeroportos para clientes em trânsito), elevando o nível de satisfação e fidelização.',
          },
          {
            title: 'Otimização de Custos de Envio',
            desc: 'Implementei a estratégia de frete fixo competitivo para o cliente final, mantendo a margem de contribuição saudável através da consolidação de múltiplos pacotes por rota logística.',
          },
        ],
      },
      get2gether: {
        role: 'Co-fundador & Diretor de Operações',
        scope:
          'Gestão executiva e estratégica da startup focada em inovação social e tecnologia de doação (Social Crowdfunding). Responsável pelo desenvolvimento do modelo de negócio, gestão de parcerias corporativas (ESG), planejamento de campanhas 360º e viabilidade técnica/operacional de projetos de alto impacto.',
        achievements: [
          {
            title: 'Inovação de Produto & MVP',
            desc: 'Idealizei e gerenciei o desenvolvimento de uma plataforma de doações gamificada (mosaicos digitais), inspirada no conceito de publicidade por pixels. Superei limitações técnicas iniciais através de soluções criativas de visualização de impacto e estruturação de site/plataforma.',
          },
          {
            title: 'Campanhas de Alto Impacto & GTM',
            desc: 'Planejei e executei a campanha "Amigo Tricolor" com o São Paulo FC, que obteve reconhecimento global da FIFA e gerou um patrocínio direto de R$ 2 milhões via Petz. Liderança integral desde o conceito criativo até a operação em campo (ativação com animais no gramado).',
          },
          {
            title: 'Gestão de Stakeholders & PR',
            desc: 'Conquistei parcerias com grandes marcas e veículos de mídia (89 FM, Folha de SP, Catraca Livre), elevando a visibilidade de causas sociais e gerando resultados financeiros tangíveis para o terceiro setor.',
          },
          {
            title: 'Modelo de Assinatura (Clube de Benefícios)',
            desc: 'Desenvolvi e liderei o "Clube de Benefícios do Bem", estruturando um modelo de receita recorrente baseado nos ODS (Objetivos de Desenvolvimento Sustentável) da ONU. Gerenciei a plataforma de descontos com mais de 3 mil estabelecimentos e uma base de doadores ativos.',
          },
          {
            title: 'Gestão de Operações Multitarefa',
            desc: 'Como co-fundador em regime de bootstrapping, atuei diretamente em todas as frentes: do planejamento financeiro e comercial à criação de artes (Illustrator/Photoshop) e desenvolvimento de interfaces, garantindo a sustentabilidade da operação por 5 anos.',
          },
          {
            title: 'Customer Success & Retenção',
            desc: 'Implementei réguas de relacionamento e comunicação para doadores e empresas parceiras, garantindo a transparência no repasse de recursos e o engajamento contínuo com as causas apoiadas.',
          },
        ],
      },
      futuregroup: {
        role: 'Analista de Operações e Mídia',
        scope:
          'Atuação inicial na área de Produção (ativações de marca e campanhas promocionais), evoluindo para a gestão de Mídia e Atendimento. Responsável pela ponte estratégica entre clientes patrocinadores e veículos de comunicação, garantindo a viabilidade técnica e a execução de projetos de larga escala para marcas globais.',
        achievements: [
          {
            title: 'Mediação de Stakeholders e Processos',
            desc: 'Atuei como facilitador estratégico entre os times de Atendimento e Design, otimizando o fluxo de aprovação de artes e reduzindo atritos operacionais através de uma gestão baseada em empatia, técnica e clareza de processos.',
          },
          {
            title: 'Gestão de Mídia e Patrocínios (Thriller Live)',
            desc: 'Liderei a interface entre os patrocinadores do espetáculo internacional e os veículos de mídia (UOL, Globo, OOH). Gerenciei o fluxo de aprovação de materiais criativos, garantindo o cumprimento de brand guidelines e prazos de veiculação.',
          },
          {
            title: 'Liderança Operacional Interina',
            desc: 'Assumi a gestão da área de mídia durante a fase crítica de entrega do espetáculo Thriller Live, assegurando a continuidade operacional e a entrega de todas as contrapartidas para os parceiros comerciais após a transição da liderança anterior.',
          },
          {
            title: 'Produção e Ativação 360º (Field Ops)',
            desc: 'Responsável pela materialização de campanhas promocionais de larga escala, como "Vai de Visa" e ações de Ruffles. Coordenação de logística de campo, montagem de estruturas e operacionalização de ativações de rua.',
          },
          {
            title: 'Inteligência de Mercado & Pesquisa',
            desc: 'Atuação na área de Novos Negócios, realizando pesquisas de viabilidade técnica e financeira para a importação de grandes eventos e espetáculos internacionais para o mercado brasileiro.',
          },
        ],
      },
      tvglobo: {
        role: 'Estagiário de Recursos Humanos',
        scope:
          'Atuação generalista na área de RH, com foco em Endomarketing e suporte operacional à gestão de pessoas. Responsável pela execução de estratégias de engajamento, governança de parcerias e logística de benefícios para os colaboradores.',
        achievements: [
          {
            title: 'Comunicação Interna e Endomarketing',
            desc: 'Apoio na criação e veiculação de campanhas para o público interno, garantindo a disseminação da cultura organizacional e o engajamento dos colaboradores em iniciativas da emissora.',
          },
          {
            title: 'Gestão de Parcerias e Convênios',
            desc: 'Responsável pela operacionalização do clube de benefícios, gerenciando parcerias de descontos em estabelecimentos externos e garantindo a manutenção da rede de vantagens para os funcionários.',
          },
          {
            title: 'Live Marketing Interno e Eventos',
            desc: 'Coordenação logística de eventos corporativos e ações voltadas aos colaboradores. Responsável pela gestão e distribuição de ingressos para eventos patrocinados pela Globo, garantindo transparência e organização no acesso a esses ativos.',
          },
          {
            title: 'Melhoria de Processos (Projeto T&D)',
            desc: 'Idealizei e implementei um sistema lógico-visual (metodologia de semáforo) para triagem de elegibilidade em treinamentos. A solução automatizou um processo anteriormente manual e recebeu reconhecimento formal da diretoria pela eficiência gerada.',
          },
          {
            title: 'Suporte Administrativo e Dados',
            desc: 'Gestão de indicadores de participação e organização de bases de dados de RH, assegurando o fluxo contínuo de informações entre os departamentos.',
          },
        ],
      },
    },

    // ========== EDUCATION ==========
    education: {
      title: 'Formação & Certificações',
      demoData: 'Dados de Demonstração',
      academic: 'Formação Acadêmica',
      certifications: 'Certificações',
      mba: {
        period: '2023 — 2024',
        degree: 'MBA em Marketing Digital & Analytics',
        institution: 'Fundação Getúlio Vargas (FGV)',
        topics: 'Estratégias de Marketing Digital, Growth Hacking, Performance Marketing, Data Analytics',
      },
      graduation: {
        period: '2015 — 2019',
        degree: 'Bacharelado em Administração de Empresas',
        institution: 'Universidade de São Paulo (USP)',
        topics: 'Gestão de Projetos, Marketing, Finanças, Operações',
      },
      extension: {
        period: '2022',
        degree: 'Extensão em Data Science & Python',
        institution: 'ESALQ/USP',
        topics: 'Análise de Dados, Machine Learning, Automação',
      },
      cert1: { name: 'Google Analytics 4 Certified', org: 'Google', year: '2024' },
      cert2: { name: 'Meta Marketing Professional', org: 'Meta Blueprint', year: '2023' },
      cert3: { name: 'Scrum Master Certified (SMC)', org: 'Scrum Alliance', year: '2023' },
      cert4: { name: 'Workato Automation Pro', org: 'Workato', year: '2023' },
      cert5: { name: 'Pipefy Expert Certification', org: 'Pipefy', year: '2022' },
      cert6: { name: 'HubSpot Marketing Software', org: 'HubSpot Academy', year: '2022' },
    },

    // ========== LANGUAGES ==========
    languages: {
      title: 'Idiomas',
      demoData: 'Dados de Demonstração',
      reading: 'Leitura',
      writing: 'Escrita',
      conversation: 'Conversação',
      portuguese: { name: 'Português', level: 'Nativo' },
      english: { name: 'Inglês', level: 'Fluente', cert: 'TOEFL iBT: 102/120 (2022)' },
      spanish: { name: 'Espanhol', level: 'Intermediário' },
    },

    // ========== CASES ==========
    cases: {
      title: 'Cases de Sucesso',
      subtitle: 'Projetos que geraram impacto mensurável e transformaram operações',
      demoData: 'Dados de Demonstração',
      challenge: 'Desafio',
      solution: 'Solução',
      results: 'Resultados',
      impact: 'Impacto',
      case1: {
        title: 'Automação de Vouchers em Massa',
        company: 'Shopee',
        challenge: 'Processo manual que consumia 4 horas para criar 500 vouchers de campanha',
        solution: 'Desenvolvimento de script Python integrado à API interna, automatizando todo o fluxo',
        metric1: '8 min',
        label1: 'Tempo de execução',
        metric2: '97%',
        label2: 'Redução de tempo',
        metric3: '500+',
        label3: 'Vouchers/execução',
        finalImpact: 'Economia de 20h/mês e eliminação de erros humanos na criação em lote',
      },
      case2: {
        title: 'Reestruturação da Jornada de Comunicação PF/PJ',
        company: 'Fictorpay',
        challenge: 'Comunicação fragmentada com baixo engajamento e percepção de valor inconsistente',
        solution: 'Mapeamento completo da jornada, criação de touchpoints estratégicos e padronização visual',
        metric1: '+45%',
        label1: 'Engajamento em emails',
        metric2: '3.8→4.6',
        label2: 'NPS (Customer Sat.)',
        metric3: '100%',
        label3: 'Cobertura de jornada',
        finalImpact:
          'Aumento significativo na satisfação do cliente e fortalecimento do posicionamento de marca',
      },
      case3: {
        title: 'Implementação de Intranet Corporativa (SharePoint)',
        company: 'Fictorpay',
        challenge:
          'Informações dispersas em múltiplos canais, gerando retrabalho e ruído na comunicação',
        solution:
          'Estruturação autodidata de Intranet via SharePoint, centralizando processos e documentos',
        metric1: '-60%',
        label1: 'Tempo de busca',
        metric2: '85%',
        label2: 'Adoção do time',
        metric3: '12+',
        label3: 'Áreas integradas',
        finalImpact: 'Centralização do conhecimento e otimização da colaboração entre departamentos',
      },
    },

    // ========== TESTIMONIALS ==========
    testimonials: {
      title: 'O que dizem sobre mim',
      subtitle: 'Depoimentos de líderes e colegas com quem trabalhei',
      demoData: 'Dados de Demonstração',
      testimonial1: {
        quote:
          'Fernando tem uma capacidade única de transformar desafios operacionais complexos em soluções práticas e escaláveis. Sua visão analítica e senso de urgência foram fundamentais para o sucesso das nossas campanhas regionais.',
        author: 'Maria Silva',
        role: 'Regional Director LATAM',
        company: 'Shopee',
      },
      testimonial2: {
        quote:
          'Profissional extremamente proativo e técnico. Implementou sozinho a nossa Intranet e criou ferramentas que otimizaram processos que antes levavam dias. Sua autonomia e capacidade de entrega são impressionantes.',
        author: 'Carlos Oliveira',
        role: 'CMO',
        company: 'Fictorpay',
      },
      testimonial3: {
        quote:
          'Fernando foi nosso principal ponto de contato na gestão da conta Osram. Seu profissionalismo, atenção aos detalhes e habilidade em gerenciar stakeholders garantiram entregas impecáveis em todos os projetos.',
        author: 'Ana Costa',
        role: 'Creative Director',
        company: 'Be Arts',
      },
    },

    // ========== FOOTER ==========
    footer: {
      description:
        'Sênior Operations Leader especializado em Marketing 360, Data & Processos, Go-to-Market e Gestão de Stakeholders.',
      navigation: 'Navegação',
      contact: 'Contato & Documentos',
      downloadCV: 'Download CV (PDF)',
      openToWork: 'Open to Work',
      rights: 'Todos os direitos reservados',
      madeWith: 'Desenvolvido com ❤️ usando React + Tailwind',
      navLinks: {
        profile: 'Perfil',
        timeline: 'Timeline',
        experience: 'Experiência',
        skills: 'Skills',
        education: 'Formação',
        cases: 'Cases',
      },
    },
  },

  // ========================================
  // ========== ENGLISH VERSION ===========
  // ========================================

  en: {
    nav: {
      profile: 'Profile',
      timeline: 'Timeline',
      experience: 'Experience',
      skills: 'Skills',
    },

    hero: {
      badge: 'Senior Operations Leader',
      title1: 'MARKETING',
      title2: '360',
      title3: 'DATA & PROCESSES',
      title4: 'GO TO MARKET',
      title5: 'STAKEHOLDER MANAGEMENT',
      location: 'São Paulo, Brazil',
      cta1: 'View Resume',
      cta2: 'Networking',
      cardName: 'FERNANDO BRANCO',
      cardRole: 'Operations Architect',
    },

    trajectory: {
      title: 'DISCOVER MY',
      titleHighlight: 'JOURNEY',
      about: 'About',
      profileText:
        'Strategic leadership with 19 years of experience in Marketing Operations (MarOps) and Operations Management, specialized in process architecture and business scalability. Expert in transforming manual workflows into high-performance automations (Pipefy, Workato, Excel), with experience managing complex ecosystems (Shopee, FictorPay, Comgás). Data-driven and governance-oriented profile, with strong skills in conflict mediation, senior stakeholder management, and leading multidisciplinary teams. Self-taught and resilient professional, focused on operational efficiency and risk mitigation.',
      bigNumbers: {
        label1: 'Years\nExperience',
        label2: 'Performance\nQuality',
        label3: 'Campaigns\nManaged',
        label4: 'Countries\nLATAM',
        label5: 'Vouchers\nin 8min',
        label6: 'Companies\nLed',
      },
      bento: {
        card1: {
          title: 'Marketing 360',
          desc: 'End-to-end strategic planning, integrated campaigns and complete digital ecosystem management.',
        },
        card2: {
          title: 'Data & Processes',
          desc: 'Workflow automation, data governance and scalable high-performance systems architecture.',
        },
        card3: {
          title: 'Go to Market',
          desc: 'Launch strategies, growth hacking and journey optimization for acquisition and retention.',
        },
        card4: {
          title: 'Stakeholder Management',
          desc: 'Conflict mediation, expectation alignment and interface with senior C-Level leadership.',
        },
      },
      education: {
        title: 'EDUCATION',
        items: [
          { institution: 'Pueri Domus School', degree: 'Elementary School', year: '2007' },
          { institution: 'Anhembi Morumbi University', degree: 'Business Administration - Marketing', year: '2012' },
        ],
      },
      certifications: {
        title: 'CERTIFICATIONS',
        items: [
          'Google Ads & Analytics',
          'Meta Blueprint Certified',
          'Pipefy Expert',
          'HubSpot Inbound',
          'Scrum Foundation',
        ],
      },
      languages: {
        title: 'LANGUAGES',
        items: [
          { lang: 'Portuguese', flag: '🇧🇷', level: 'Native' },
          { lang: 'English', flag: '🇺🇸', level: 'Fluent' },
          { lang: 'Spanish', flag: '🇪🇸', level: 'Basic' },
        ],
      },
      skills: {
        title: 'SKILLS',
        items: ['Advanced Excel', 'Automation', 'Data Analysis', 'Stakeholder Mgmt', 'Pipefy', 'Workato'],
      },
      timelineBadge: 'Chronological Overview',
      timelineTitle: '',
      timelineTitleHighlight: '',
    },

    sections: {
      detailedExp: 'Detailed Experiences',
      education: 'Education & Certifications',
      languages: 'Languages',
      cases: 'Success Cases',
      testimonials: 'What people say about me',
    },

    experiences: {
      fictorpay: {
        role: 'Head of Marketing',
        scope:
          'Strategic and operational leadership as the first employee of the vertical (Employee #1). Acted as the focal point between the Business Unit and the Holding, ensuring guideline alignment and brand governance. Responsible for structuring the digital ecosystem (Website, Social Media, and Intranet), institutional communication, and commercial support for B2C and B2B clients.',
        achievements: [
          {
            title: 'Innovation & Digital Workplace',
            desc: 'Self-taught implementation of corporate Intranet via SharePoint, centralizing information flow and optimizing internal collaboration.',
          },
          {
            title: 'Scalability & Marketing Ops (Self-Service)',
            desc: 'Developed a technical solution (email marketing software) that standardized visual identity and enabled multiple link inclusion, giving areas autonomy for mass sends and eliminating operational bottlenecks.',
          },
          {
            title: 'Digital Presence & Social Media',
            desc: 'Comprehensive social media management and continuous institutional website updates, ensuring information consistency, SEO, and the vibe of the new visual identity.',
          },
          {
            title: 'Customer Journey (B2C/B2B)',
            desc: 'Restructured the communication journey for the entire client ecosystem, applying the new brand and implementing strategic touchpoints to elevate value perception and support.',
          },
          {
            title: 'Internal Communication & Gamification',
            desc: 'Corporate Newsletter management (content, design, and copywriting), using gamification dynamics that significantly increased team engagement.',
          },
          {
            title: 'Stakeholder Management & Internationalization',
            desc: 'Direct interface with Holding leadership and various internal areas for expectation management and delivery of critical materials, including institutional presentations in Portuguese and English.',
          },
          {
            title: 'Brand & Live Marketing',
            desc: 'Conceived the booth concept at "Fictor Day", performing technical supervision of the executing agency to ensure aesthetic rigor and final delivery quality.',
          },
        ],
      },
      shopee: {
        role: 'Senior Marketing Analyst (Planning & Ops)',
        scope:
          'Accelerated growth trajectory starting in Marketing Operations, promoted to Quality and Support (hybrid role), and later invited to join the LATAM regional Campaign Planning team. Specialist in process architecture, systems automation, and large-scale campaign governance.',
        timelineTitle: 'Career Progression',
        timeline: [
          { position: 'Marketing Ops', level: 'Junior Analyst', region: '' },
          { position: 'Quality Team', level: 'Mid-level Analyst', region: '' },
          { position: 'Quality & Support Team', level: 'Mid-level Analyst', region: 'Hybrid Role' },
          { position: 'LATAM Campaign Planner', level: 'Senior Analyst', region: 'MX, CO, CL' },
        ],
        achievements: [
          {
            title: 'Automation Triad',
            desc: 'Developed 3 critical automations (Mass Vouchers, Task Distribution, QC Audit) transforming hour-long processes into minutes. Example: 500 vouchers created in 8 minutes.',
          },
          {
            title: '98% Quality in 50+ Activities',
            desc: 'Promoted to ensure integrity of critical campaigns (Banners, CRM, Games), maintaining 98% performance and identifying errors in regulated campaigns, mitigating legal risks.',
          },
          {
            title: 'Support & Systems Integration',
            desc: 'Structured support environment integrating Pipefy, Excel, and Workato with automations and conditionals that optimized demand flows and generated performance dashboards for management.',
          },
          {
            title: 'People Management (3 Teams)',
            desc: 'Technical supervision and productivity analysis of 3 execution teams, leading onboardings and training to standardize quality.',
          },
          {
            title: 'LATAM Campaign Planning (MX, CL, CO)',
            desc: 'Invited to lead regional planning in Mexico, Chile, and Colombia. Responsible for complete Black Friday cycle, Double Dates (4.4), and BAU operations.',
          },
          {
            title: 'Financial Management & Regional KPIs',
            desc: 'GTM management, budget allocation, and interface with Commercial team in China and FP&A. Monitoring core metrics (A1, GMV, Average Ticket) with reports to senior leadership.',
          },
          {
            title: 'Growth Strategy & CRM',
            desc: 'Collaboration with Online Marketing and CRM for segmented campaign parameterization (New Users and Churn) and platform access optimization.',
          },
        ],
      },
      comgas: {
        role: 'Institutional Marketing Analyst',
        scope:
          'Management of institutional digital presence and data governance for Brazil\'s largest natural gas distributor. Acted as the main focal point in intermediation between technology agencies and internal stakeholders (IT, Legal, Engineering, Customer Service, and HR), ensuring communication integrity in a highly complex regulatory environment.',
        achievements: [
          {
            title: 'Stakeholder Management & Data Unification',
            desc: 'Responsible for collecting, organizing, and validating information from virtually all company areas for institutional website reconstruction and maintenance. Ensured product descriptions, service channels, and help areas were 100% accurate.',
          },
          {
            title: 'Governance and Compliance (GDPR)',
            desc: 'Led content and process management of the digital ecosystem under General Data Protection Law guidelines, ensuring information security and legal compliance in customer interactions.',
          },
          {
            title: 'Digital Performance Management',
            desc: 'Traffic metrics monitoring and data analysis (tracking) for user experience (UX) optimization, providing technical support for marketing team strategic decisions.',
          },
          {
            title: 'Operation and Maintenance',
            desc: 'Direct management of website maintenance agency, prioritizing update backlog, seasonal campaign banners, and landing pages, ensuring operational agility.',
          },
          {
            title: 'Brand Awareness & ESG',
            desc: 'Coordination of asset distribution and tickets for sponsored events and support in communicating company sustainability (ESG) initiatives.',
          },
          {
            title: 'Autonomy and Trust',
            desc: 'During immediate leadership vacation period, fully assumed management of all institutional website deliveries for 30 days, ensuring operational continuity and critical deadline compliance without direct supervision.',
          },
        ],
      },
      bearts: {
        role: 'Account Manager',
        scope:
          'Comprehensive management of Osram account (world leader in automotive lighting), acting as the strategic link between client needs and creative execution team. Responsible for 360º planning, ensuring delivery of high-impact campaigns, POS materials, and sales channel incentive strategies.',
        achievements: [
          {
            title: 'Key Account Management & 360º Projects',
            desc: 'Operational leadership of demands ranging from digital advertising and institutional videos to physical activations (OOH and POS). Ensured compliance with Osram global brand guidelines in all produced pieces.',
          },
          {
            title: 'Trade Marketing & Engagement',
            desc: 'Developed and implemented actions to leverage consultant training program in stores across Brazil. Focus on transforming product technical knowledge into effective sales arguments for retail.',
          },
          {
            title: 'Creative Interface & Planning',
            desc: 'Direct work with creative team to translate complex briefings into visual solutions and marketing campaigns, ensuring budget feasibility and aggressive timeline compliance.',
          },
          {
            title: 'Resilience in Business Transitions',
            desc: 'Maintained high performance and close client relationship during Osram sale process to a German group. Managed account excellently until supplier transition period, recognized for consistent delivery in a structural change scenario.',
          },
          {
            title: 'Results Analysis',
            desc: 'Campaign KPI tracking and performance reporting to client, suggesting tactical adjustments to maximize brand visibility in the national market.',
          },
        ],
      },
      baermate: {
        role: 'Sales Executive & Trade Marketing',
        scope:
          'Management of market share expansion and brand activation in strategic São Paulo channels. Responsible for opening new accounts (On-trade and Off-trade), relationship management with major retailers, and implementing Growth tactics to accelerate product capillarity.',
        achievements: [
          {
            title: 'Field Operations Optimization',
            desc: 'Applied logistical intelligence and strategic routing for field sales, optimizing visitation routes by geographic density. This maximized the number of POS served daily and ensured agility in transporting higher volumes per route.',
          },
          {
            title: 'Scalability via Technology (Growth Hacking)',
            desc: 'Identified a bottleneck in manual prospecting of Zé Delivery partner establishments. Developed and implemented automation (bot) for mass commercial presentation dispatches, transforming an individual process into a lead generation machine that drastically accelerated brand entry on the platform.',
          },
          {
            title: 'Marketing & Trade Asset Creation',
            desc: 'Developed educational and promotional graphic materials focused on educating end consumers and shopkeepers about product differentials (natural energy tea). Creating these pieces ensured standardized POS communication and facilitated sell-out.',
          },
          {
            title: 'Key Account Management',
            desc: 'Acquired and managed high-volume, high-relevance accounts like Mundo Verde and Poke Garden (one of the biggest players in iFood sales volume), ensuring brand presence in high-turnover, prestigious locations.',
          },
          {
            title: 'Trade Marketing & Brand Experience',
            desc: 'Responsible for visibility negotiation, POS material implementation, and sampling strategies, ensuring point-of-sale loyalty and order recurrence growth.',
          },
        ],
      },
      puffbr: {
        role: 'Operations and Customer Service Manager',
        scope:
          'Comprehensive e-commerce operation management, ranging from order entry on Shopify platform to Last Mile logistics. Responsible for customer service structuring and delivery network optimization to ensure agility and operational cost reduction.',
        achievements: [
          {
            title: 'Logistics Efficiency & Routing',
            desc: 'Restructured São Paulo delivery strategy through geographic intelligence, implementing high-density routes by neighborhood proximity. Result: Reduced freight cost from R$25 to an average of R$3 to R$5 per order, using agile modalities (motorcycle courier logistics) with maximum productivity.',
          },
          {
            title: 'Scalability in Demand Peaks',
            desc: 'Managed logistics operation that supported revenue records, reaching the mark of R$1 million in just 2 days. Ensured integrity of all deliveries and service level (SLA) maintenance even under extreme volume pressure.',
          },
          {
            title: 'Platform Management (Shopify)',
            desc: 'Responsible for all e-commerce backoffice, including inventory management, order processing, and sales data analysis for decision-making support.',
          },
          {
            title: 'Customer Experience (Premium Service)',
            desc: 'Structured agile and consultative service, focused on real-time resolutions. Implemented "lightning delivery" solutions (e.g., airport deliveries for transit customers), raising satisfaction and loyalty levels.',
          },
          {
            title: 'Shipping Cost Optimization',
            desc: 'Implemented competitive fixed freight strategy for end customer, maintaining healthy contribution margin through multiple package consolidation per logistics route.',
          },
        ],
      },
      get2gether: {
        role: 'Co-founder & Operations Director',
        scope:
          'Executive and strategic management of startup focused on social innovation and donation technology (Social Crowdfunding). Responsible for business model development, corporate partnership management (ESG), 360º campaign planning, and technical/operational feasibility of high-impact projects.',
        achievements: [
          {
            title: 'Product Innovation & MVP',
            desc: 'Conceived and managed development of gamified donation platform (digital mosaics), inspired by pixel advertising concept. Overcame initial technical limitations through creative impact visualization solutions and site/platform structuring.',
          },
          {
            title: 'High-Impact Campaigns & GTM',
            desc: 'Planned and executed "Amigo Tricolor" campaign with São Paulo FC, which obtained FIFA global recognition and generated a direct R$2 million sponsorship via Petz. Comprehensive leadership from creative concept to field operation (animal activation on the field).',
          },
          {
            title: 'Stakeholder Management & PR',
            desc: 'Acquired partnerships with major brands and media outlets (89 FM, Folha de SP, Catraca Livre), elevating social cause visibility and generating tangible financial results for the third sector.',
          },
          {
            title: 'Subscription Model (Benefits Club)',
            desc: 'Developed and led "Clube de Benefícios do Bem," structuring a recurring revenue model based on UN SDGs (Sustainable Development Goals). Managed discount platform with over 3,000 establishments and an active donor base.',
          },
          {
            title: 'Multitask Operations Management',
            desc: 'As co-founder in bootstrapping mode, worked directly on all fronts: from financial and commercial planning to art creation (Illustrator/Photoshop) and interface development, ensuring operation sustainability for 5 years.',
          },
          {
            title: 'Customer Success & Retention',
            desc: 'Implemented relationship and communication rules for donors and partner companies, ensuring resource transfer transparency and continued engagement with supported causes.',
          },
        ],
      },
      futuregroup: {
        role: 'Operations and Media Analyst',
        scope:
          'Initial work in Production area (brand activations and promotional campaigns), evolving to Media and Customer Service management. Responsible for strategic bridge between sponsor clients and communication vehicles, ensuring technical feasibility and large-scale project execution for global brands.',
        achievements: [
          {
            title: 'Stakeholder Mediation and Processes',
            desc: 'Acted as strategic facilitator between Customer Service and Design teams, optimizing art approval flow and reducing operational friction through empathy, technical, and process clarity-based management.',
          },
          {
            title: 'Media and Sponsorship Management (Thriller Live)',
            desc: 'Led interface between international show sponsors and media vehicles (UOL, Globo, OOH). Managed creative material approval flow, ensuring brand guideline compliance and broadcast deadlines.',
          },
          {
            title: 'Interim Operational Leadership',
            desc: 'Assumed media area management during Thriller Live show critical delivery phase, ensuring operational continuity and all counterpart deliveries to commercial partners after previous leadership transition.',
          },
          {
            title: 'Production and 360º Activation (Field Ops)',
            desc: 'Responsible for materializing large-scale promotional campaigns, such as "Vai de Visa" and Ruffles actions. Field logistics coordination, structure assembly, and street activation operationalization.',
          },
          {
            title: 'Market Intelligence & Research',
            desc: 'Work in New Business area, conducting technical and financial feasibility research for importing major international events and shows to the Brazilian market.',
          },
        ],
      },
      tvglobo: {
        role: 'Human Resources Intern',
        scope:
          'Generalist work in HR area, focusing on Internal Marketing and operational support for people management. Responsible for executing engagement strategies, partnership governance, and employee benefits logistics.',
        achievements: [
          {
            title: 'Internal Communication and Internal Marketing',
            desc: 'Support in creating and broadcasting campaigns for internal audiences, ensuring organizational culture dissemination and employee engagement in broadcaster initiatives.',
          },
          {
            title: 'Partnership and Agreement Management',
            desc: 'Responsible for benefits club operationalization, managing discount partnerships at external establishments and ensuring advantages network maintenance for employees.',
          },
          {
            title: 'Internal Live Marketing and Events',
            desc: 'Logistical coordination of corporate events and employee-oriented actions. Responsible for ticket management and distribution for Globo-sponsored events, ensuring transparency and organization in asset access.',
          },
          {
            title: 'Process Improvement (T&D Project)',
            desc: 'Conceived and implemented a logical-visual system (traffic light methodology) for training eligibility screening. The solution automated a previously manual process and received formal board recognition for generated efficiency.',
          },
          {
            title: 'Administrative Support and Data',
            desc: 'Participation indicator management and HR database organization, ensuring continuous information flow between departments.',
          },
        ],
      },
    },

    education: {
      title: 'Education & Certifications',
      demoData: 'Demo Data',
      academic: 'Academic Background',
      certifications: 'Certifications',
      mba: {
        period: '2023 — 2024',
        degree: 'MBA in Digital Marketing & Analytics',
        institution: 'Getúlio Vargas Foundation (FGV)',
        topics: 'Digital Marketing Strategies, Growth Hacking, Performance Marketing, Data Analytics',
      },
      graduation: {
        period: '2015 — 2019',
        degree: 'Bachelor in Business Administration',
        institution: 'University of São Paulo (USP)',
        topics: 'Project Management, Marketing, Finance, Operations',
      },
      extension: {
        period: '2022',
        degree: 'Data Science & Python Extension',
        institution: 'ESALQ/USP',
        topics: 'Data Analysis, Machine Learning, Automation',
      },
      cert1: { name: 'Google Analytics 4 Certified', org: 'Google', year: '2024' },
      cert2: { name: 'Meta Marketing Professional', org: 'Meta Blueprint', year: '2023' },
      cert3: { name: 'Scrum Master Certified (SMC)', org: 'Scrum Alliance', year: '2023' },
      cert4: { name: 'Workato Automation Pro', org: 'Workato', year: '2023' },
      cert5: { name: 'Pipefy Expert Certification', org: 'Pipefy', year: '2022' },
      cert6: { name: 'HubSpot Marketing Software', org: 'HubSpot Academy', year: '2022' },
    },

    languages: {
      title: 'Languages',
      demoData: 'Demo Data',
      reading: 'Reading',
      writing: 'Writing',
      conversation: 'Conversation',
      portuguese: { name: 'Portuguese', level: 'Native' },
      english: { name: 'English', level: 'Fluent', cert: 'TOEFL iBT: 102/120 (2022)' },
      spanish: { name: 'Spanish', level: 'Intermediate' },
    },

    cases: {
      title: 'Success Cases',
      subtitle: 'Projects that generated measurable impact and transformed operations',
      demoData: 'Demo Data',
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      impact: 'Impact',
      case1: {
        title: 'Mass Voucher Automation',
        company: 'Shopee',
        challenge: 'Manual process that took 4 hours to create 500 campaign vouchers',
        solution: 'Development of Python script integrated with internal API, automating the entire flow',
        metric1: '8 min',
        label1: 'Execution time',
        metric2: '97%',
        label2: 'Time reduction',
        metric3: '500+',
        label3: 'Vouchers/execution',
        finalImpact: 'Saved 20h/month and eliminated human errors in batch creation',
      },
      case2: {
        title: 'B2C/B2B Communication Journey Restructuring',
        company: 'Fictorpay',
        challenge: 'Fragmented communication with low engagement and inconsistent value perception',
        solution:
          'Complete journey mapping, strategic touchpoints creation and visual standardization',
        metric1: '+45%',
        label1: 'Email engagement',
        metric2: '3.8→4.6',
        label2: 'NPS (Customer Sat.)',
        metric3: '100%',
        label3: 'Journey coverage',
        finalImpact:
          'Significant increase in customer satisfaction and brand positioning strengthening',
      },
      case3: {
        title: 'Corporate Intranet Implementation (SharePoint)',
        company: 'Fictorpay',
        challenge:
          'Dispersed information across multiple channels, generating rework and communication noise',
        solution:
          'Self-taught Intranet structuring via SharePoint, centralizing processes and documents',
        metric1: '-60%',
        label1: 'Search time',
        metric2: '85%',
        label2: 'Team adoption',
        metric3: '12+',
        label3: 'Integrated areas',
        finalImpact: 'Knowledge centralization and collaboration optimization across departments',
      },
    },

    testimonials: {
      title: 'What people say about me',
      subtitle: 'Testimonials from leaders and colleagues I worked with',
      demoData: 'Demo Data',
      testimonial1: {
        quote:
          'Fernando has a unique ability to transform complex operational challenges into practical and scalable solutions. His analytical vision and sense of urgency were fundamental to the success of our regional campaigns.',
        author: 'Maria Silva',
        role: 'Regional Director LATAM',
        company: 'Shopee',
      },
      testimonial2: {
        quote:
          'Extremely proactive and technical professional. Implemented our Intranet by himself and created tools that optimized processes that previously took days. His autonomy and delivery capacity are impressive.',
        author: 'Carlos Oliveira',
        role: 'CMO',
        company: 'Fictorpay',
      },
      testimonial3: {
        quote:
          'Fernando was our main point of contact in managing the Osram account. His professionalism, attention to detail and ability to manage stakeholders ensured impeccable deliveries in all projects.',
        author: 'Ana Costa',
        role: 'Creative Director',
        company: 'Be Arts',
      },
    },

    footer: {
      description:
        'Senior Operations Leader specialized in Marketing 360, Data & Processes, Go-to-Market and Stakeholder Management.',
      navigation: 'Navigation',
      contact: 'Contact & Documents',
      downloadCV: 'Download CV (PDF)',
      openToWork: 'Open to Work',
      rights: 'All rights reserved',
      madeWith: 'Built with ❤️ using React + Tailwind',
      navLinks: {
        profile: 'Profile',
        timeline: 'Timeline',
        experience: 'Experience',
        skills: 'Skills',
        education: 'Education',
        cases: 'Cases',
      },
    },
  },
};

export type Language = 'pt' | 'en';
