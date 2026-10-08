# Plano de Implantação do Front-end — ClimaAlert

> Documento baseado nas dez referências visuais disponíveis em `assets/`. O escopo abaixo é exclusivamente de front-end.

## 1. Objetivo

Construir uma aplicação web responsiva de monitoramento climático alinhada à ODS 13, composta por uma área pública e uma área operacional autenticada. A implementação deve reproduzir a identidade visual das referências, oferecer componentes reutilizáveis e estar preparada para integração posterior com APIs de telemetria, autenticação e alertas.

## 2. Mapeamento das telas e rotas

| Referência | Rota sugerida | Página |
|---|---|---|
| `tela 1.png` | `/` | Landing page |
| `tela 3.png` | `/login` | Login e consulta pública |
| `tela 2.png` | `/app/dashboard` | Dashboard climático |
| `tela 4.png` | `/app/monitoramento` | Monitoramento e sensores |
| `tela 5.png` | `/app/temperatura` | Análise de temperatura |
| `tela 9.png` | `/app/alertas` | Central de alertas |
| `tela 7.png` | `/app/alertas/:id` | Detalhes do alerta |
| `tela 6.png` | `/app/alertas/:id/ocorrencia` | Ocorrência crítica |
| `tela 8.png` | `/app/historico` | Histórico climático |
| `tela 10.png` | `/app/configuracoes` | Configurações |

A rota `/app/mapa` deverá ser preparada para a entrada “Mapa Climático”, ainda que inicialmente utilize um placeholder ou o mapa presente na página de temperatura.

## 3. Stack recomendada

- React com TypeScript e Vite.
- React Router para navegação.
- Tailwind CSS ou CSS Modules para estilos.
- TanStack Query para consultas e cache.
- Zustand ou Context API para estado global leve.
- React Hook Form e Zod para formulários.
- Recharts para gráficos.
- Lucide React para ícones.
- MSW para simulação temporária da API.
- Vitest, React Testing Library e Playwright para testes.

Caso uma stack já esteja definida durante a implementação, ela deverá ser preservada e este plano adaptado.

## 4. Organização proposta de pastas

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   ├── providers.tsx
│   └── query-client.ts
├── assets/
│   ├── icons/
│   ├── images/
│   └── logo/
├── components/
│   ├── charts/
│   ├── data-display/
│   ├── feedback/
│   ├── forms/
│   ├── layout/
│   ├── maps/
│   └── ui/
├── features/
│   ├── alerts/
│   ├── auth/
│   ├── climate-history/
│   ├── dashboard/
│   ├── monitoring/
│   ├── settings/
│   └── temperature/
├── hooks/
├── layouts/
├── mocks/
│   ├── data/
│   └── handlers/
├── pages/
│   ├── app/
│   └── public/
├── services/
├── store/
├── styles/
├── types/
├── utils/
└── main.tsx
tests/
├── e2e/
├── fixtures/
└── setup.ts
```

### Regras de organização

- `pages/` deve compor páginas, sem concentrar regras de negócio.
- `features/` deve agrupar API, componentes, hooks, schemas e tipos de cada domínio.
- `components/ui/` deve conter elementos genéricos e reutilizáveis.
- Dados demonstrativos devem vir de `mocks/`, nunca permanecer fixos no JSX.
- Tipos de API devem ser independentes dos componentes visuais.
- Componentes compartilhados não devem importar páginas.
- Cores, tipografia, espaçamento e estados devem utilizar tokens centralizados.

## 5. Diretrizes de interface

### Estados climáticos

| Estado | Cor predominante | Uso |
|---|---|---|
| Normal | Verde | Condição dentro da faixa |
| Atenção | Azul | Condição que exige acompanhamento |
| Alerta | Laranja | Risco relevante |
| Crítico | Vermelho | Emergência ou valor extremo |
| Neutro | Cinza/lilás | Informação auxiliar |

A cor nunca deve ser o único indicador. Todo estado deverá possuir texto e, quando apropriado, ícone.

### Layout responsivo

- Desktop: sidebar fixa, cabeçalho operacional e grades de múltiplas colunas.
- Tablet: sidebar recolhível e redução progressiva das colunas.
- Celular: menu em drawer, cards empilhados e tabelas roláveis ou convertidas em cards.
- Pontos mínimos de validação: 375 px, 768 px, 1024 px e 1440 px.

### Acessibilidade

- Todos os campos devem possuir labels.
- O foco deve ser visível e previsível.
- Diálogos devem controlar o foco e fechar com `Escape`.
- Gráficos devem possuir resumo textual.
- Ações devem ser utilizáveis por teclado.
- Contraste mínimo WCAG AA.
- Respeitar `prefers-reduced-motion`.

## 6. Etapas de implantação

1. Preparar o projeto, ferramentas, rotas e providers.
2. Criar modelos tipados e API simulada.
3. Implementar tokens e componentes do design system.
4. Construir layouts público, de autenticação e operacional.
5. Implementar landing page e login.
6. Implementar dashboard e seleção global de estação.
7. Implementar monitoramento de sensores.
8. Implementar análise de temperatura.
9. Implementar central, detalhes e ocorrência crítica de alertas.
10. Implementar histórico climático.
11. Implementar configurações operacionais.
12. Revisar responsividade, acessibilidade e estados de interface.
13. Integrar APIs reais, substituindo os mocks por adaptadores.
14. Executar testes e auditoria final de qualidade.

## 7. Backlog front-end — 50 cards

### Fundação e arquitetura

#### FE-001 — Inicializar o projeto front-end

**Prioridade:** Crítica  
Configurar React, TypeScript e Vite.

**Critérios de aceite:**

- Projeto executa localmente e gera build de produção.
- TypeScript utiliza modo estrito.
- Não existem erros no console na inicialização.

#### FE-002 — Configurar qualidade de código

**Prioridade:** Alta  
Configurar ESLint, Prettier e scripts de validação.

**Critérios de aceite:**

- Existem comandos para lint e formatação.
- Imports e formatação seguem um padrão único.
- O projeto passa nas validações sem erros.

#### FE-003 — Configurar roteamento

**Prioridade:** Crítica  
Criar rotas públicas, privadas e página 404.

**Critérios de aceite:**

- Todas as páginas planejadas possuem rota.
- Acesso direto por URL funciona.
- Rotas operacionais exigem sessão.
- Rotas inexistentes exibem página 404.

#### FE-004 — Criar modelos e dados simulados

**Prioridade:** Crítica  
Criar tipos e mocks de usuários, estações, sensores, leituras e alertas.

**Critérios de aceite:**

- Dados simulados são tipados.
- Existem cenários de sucesso, vazio e erro.
- Componentes não possuem dados climáticos fixos no JSX.

#### FE-005 — Configurar estado global

**Prioridade:** Alta  
Controlar usuário, estação selecionada e preferências da interface.

**Critérios de aceite:**

- Sessão e estação podem ser consumidas em qualquer página.
- Estação selecionada persiste após recarregar.
- Não há duplicação desnecessária de estado global.

### Design system

#### FE-006 — Criar tokens visuais

**Prioridade:** Alta  
Definir cores, tipografia, espaçamentos, sombras, bordas e estados.

**Critérios de aceite:**

- Tokens ficam centralizados.
- Estados normal, atenção, alerta e crítico possuem tokens próprios.
- Componentes não repetem valores visuais sem necessidade.

#### FE-007 — Criar componente Button

**Prioridade:** Alta  
Criar variantes primária, secundária, crítica e textual.

**Critérios de aceite:**

- Suporta ícone, loading e disabled.
- Possui foco visível.
- Todas as variantes seguem o design system.

#### FE-008 — Criar componentes de formulário

**Prioridade:** Alta  
Criar Input, Select, Checkbox, Switch e Range.

**Critérios de aceite:**

- Campos possuem label, ajuda e erro.
- São utilizáveis por teclado.
- Estado desabilitado é claramente identificado.

#### FE-009 — Criar componentes Card e Badge

**Prioridade:** Alta  
Construir cards reutilizáveis e badges de status.

**Critérios de aceite:**

- Card aceita cabeçalho, conteúdo e ações.
- Badge suporta todos os níveis climáticos.
- Status não depende exclusivamente da cor.

#### FE-010 — Criar componentes de feedback

**Prioridade:** Alta  
Criar Skeleton, EmptyState, ErrorState, Toast e AlertBanner.

**Critérios de aceite:**

- Páginas podem representar carregamento, vazio e erro.
- Erros permitem nova tentativa quando aplicável.
- Mensagens dinâmicas são acessíveis.

### Layout e navegação

#### FE-011 — Implementar layout público

**Prioridade:** Alta  
Criar estrutura compartilhada da landing page e login.

**Critérios de aceite:**

- Cabeçalho público é reutilizável.
- Conteúdo possui largura máxima consistente.
- Layout funciona em celular e desktop.

#### FE-012 — Implementar layout operacional

**Prioridade:** Crítica  
Criar estrutura compartilhada da área autenticada.

**Critérios de aceite:**

- Sidebar e cabeçalho são persistentes.
- Conteúdo utiliza rolagem corretamente.
- Páginas não ficam encobertas pela navegação.

#### FE-013 — Implementar sidebar

**Prioridade:** Crítica  
Criar menu lateral com as opções operacionais.

**Critérios de aceite:**

- Rota atual é destacada.
- Contador de alertas críticos é exibido.
- Menu vira drawer no celular e fecha com `Escape`.

#### FE-014 — Implementar cabeçalho operacional

**Prioridade:** Crítica  
Exibir estação, busca, alertas, sincronização e usuário.

**Critérios de aceite:**

- Informações seguem as referências visuais.
- Elementos reorganizam-se responsivamente.
- Notificações possuem indicação acessível.

#### FE-015 — Implementar busca global

**Prioridade:** Média  
Pesquisar sensores, cidades, coordenadas e alertas.

**Critérios de aceite:**

- Busca utiliza debounce.
- Exibe carregamento e ausência de resultados.
- Seleção abre a página relacionada.

#### FE-016 — Implementar seletor de estação

**Prioridade:** Alta  
Permitir alternância entre estações meteorológicas.

**Critérios de aceite:**

- Estação atual aparece no cabeçalho.
- Troca atualiza os dados das páginas.
- Seleção permanece salva localmente.

### Área pública e autenticação

#### FE-017 — Implementar hero da landing page

**Prioridade:** Alta  
Construir apresentação e painel climático da tela inicial.

**Critérios de aceite:**

- Textos, botões e resumo seguem `tela 1.png`.
- Chamadas direcionam para login e alertas.
- Layout adapta-se ao celular.

#### FE-018 — Implementar seções informativas da landing page

**Prioridade:** Média  
Criar etapas de funcionamento, bloco ODS 13 e rodapé.

**Critérios de aceite:**

- As três etapas são exibidas.
- ODS 13 possui destaque próprio.
- Links do rodapé funcionam.

#### FE-019 — Implementar formulário de login

**Prioridade:** Crítica  
Criar autenticação visual baseada em `tela 3.png`.

**Critérios de aceite:**

- E-mail e senha são validados.
- Enter envia o formulário.
- Erros não apagam o e-mail.
- Login válido redireciona ao dashboard.

#### FE-020 — Implementar recursos auxiliares do login

**Prioridade:** Média  
Adicionar mostrar senha, lembrar de mim e consulta pública.

**Critérios de aceite:**

- Senha pode ser revelada e ocultada.
- “Lembrar de mim” é persistido.
- Modo visitante fica claramente identificado.

### Dashboard

#### FE-021 — Implementar cabeçalho do dashboard

**Prioridade:** Alta  
Exibir estação, atualização e controles de período.

**Critérios de aceite:**

- Permite alternar tempo real e médias.
- Horário da última atualização é exibido.
- Alteração do período atualiza a interface.

#### FE-022 — Implementar status climático geral

**Prioridade:** Alta  
Criar painel de risco e conforto bioclimático.

**Critérios de aceite:**

- Exibe status, nível de risco e descrição.
- Barra representa o percentual de conforto.
- Aparência muda conforme a severidade.

#### FE-023 — Implementar cards de métricas atuais

**Prioridade:** Alta  
Exibir temperatura, umidade, vento, sensação, UV e chuva.

**Critérios de aceite:**

- Cada card exibe valor, unidade e status.
- Valores ausentes aparecem como indisponíveis.
- Grade adapta-se às resoluções menores.

#### FE-024 — Implementar gráfico das últimas 24 horas

**Prioridade:** Alta  
Criar gráfico alternável de temperatura, umidade e vento.

**Critérios de aceite:**

- Abas alteram a série exibida.
- Faixa normal é identificada.
- Tooltip mostra horário e valor.
- Gráfico é responsivo.

#### FE-025 — Implementar alertas recentes do dashboard

**Prioridade:** Alta  
Exibir última ocorrência e atalhos operacionais.

**Critérios de aceite:**

- Card mostra gravidade, horário e descrição.
- Botão abre a central de alertas.
- Estado sem alertas possui mensagem apropriada.

### Monitoramento

#### FE-026 — Implementar filtros de monitoramento

**Prioridade:** Alta  
Adicionar período, estação e exportação.

**Critérios de aceite:**

- Períodos Agora, 24h, 7 dias e 30 dias funcionam.
- Estação selecionada atualiza os dados.
- Filtros ativos são identificados.

#### FE-027 — Implementar saúde climática periférica

**Prioridade:** Alta  
Criar índice geral e resumo da estação.

**Critérios de aceite:**

- Percentual e classificação são exibidos.
- Mostra parâmetros normais e em atenção.
- Próxima leitura possui contagem regressiva.

#### FE-028 — Implementar cards analíticos de sensores

**Prioridade:** Alta  
Exibir temperatura, umidade, pressão, vento, UV e chuva.

**Critérios de aceite:**

- Cada card possui informações específicas.
- Estados mudam conforme os limites.
- Unidades são consistentes.

#### FE-029 — Implementar tabela de sensores

**Prioridade:** Alta  
Criar matriz de correlação dos sensores.

**Critérios de aceite:**

- Exibe ID, localização, parâmetros, bateria, latência e calibração.
- Permite ordenar bateria e latência.
- Funciona em telas pequenas.

#### FE-030 — Implementar exportação do monitoramento

**Prioridade:** Média  
Disponibilizar exportação dos dados filtrados.

**Critérios de aceite:**

- Usuário seleciona o formato.
- Exportação possui feedback de progresso e erro.
- Arquivo usa estação e período no nome.

### Temperatura

#### FE-031 — Implementar resumo termométrico

**Prioridade:** Alta  
Exibir temperatura atual e faixa operacional.

**Critérios de aceite:**

- Mostra temperatura, sensação, mínima, máxima e variação.
- Exibe horário da atualização.
- Valor fora da faixa recebe alerta.

#### FE-032 — Implementar simulador de anomalia

**Prioridade:** Média  
Alternar entre cenário real e cenário extremo.

**Critérios de aceite:**

- Dados mudam conforme o cenário.
- Simulação é claramente identificada.
- Valores simulados não são apresentados como reais.

#### FE-033 — Implementar curva térmica

**Prioridade:** Alta  
Exibir evolução da temperatura nas últimas 24 horas.

**Critérios de aceite:**

- Faixa segura aparece no gráfico.
- Mínima e máxima são identificadas.
- Tooltip exibe horário e temperatura.

#### FE-034 — Implementar histórico comparativo de temperatura

**Prioridade:** Média  
Criar cards dos dias anteriores.

**Critérios de aceite:**

- Cada card exibe média e condição.
- Dias críticos possuem texto e ícone.
- Cards mantêm alinhamento responsivo.

#### FE-035 — Implementar painel de ilhas de calor

**Prioridade:** Média  
Apresentar mapa e índice de conforto humano.

**Critérios de aceite:**

- Sensor georreferenciado é identificado.
- Mapa possui estado de carregamento.
- Falha do mapa não remove as informações textuais.

### Alertas

#### FE-036 — Implementar resumo dos alertas

**Prioridade:** Crítica  
Criar indicadores agregados da central de alertas.

**Critérios de aceite:**

- Exibe críticos, alertas, atenções e resolvidos.
- Contadores refletem os dados carregados.
- Cada indicador pode aplicar seu filtro.

#### FE-037 — Implementar filtros de alertas

**Prioridade:** Alta  
Adicionar pesquisa, gravidade e período.

**Critérios de aceite:**

- Filtros podem ser combinados.
- Quantidades por filtro são exibidas.
- Estado sem resultados permite limpar filtros.

#### FE-038 — Implementar lista de ocorrências

**Prioridade:** Crítica  
Criar cards de alertas conforme `tela 9.png`.

**Critérios de aceite:**

- Exibe severidade, estação, valor, limite e horário.
- Ordena do alerta mais grave ao menos grave.
- Botão abre os detalhes pelo ID.
- Possui estados de carregamento e erro.

#### FE-039 — Implementar painel lateral de alertas

**Prioridade:** Média  
Exibir radar, distribuição de gravidade e canais operacionais.

**Critérios de aceite:**

- Distribuição utiliza os dados da lista.
- Canais possuem status textual.
- No celular, painel aparece após as ocorrências.

#### FE-040 — Implementar página de detalhes do alerta

**Prioridade:** Crítica  
Construir detalhe baseado em `tela 7.png`.

**Critérios de aceite:**

- Página carrega pelo ID da rota.
- Exibe valor, faixa normal, desvio, evolução e orientações.
- ID inexistente apresenta erro apropriado.

#### FE-041 — Implementar ocorrência crítica

**Prioridade:** Alta  
Construir visão operacional baseada em `tela 6.png`.

**Critérios de aceite:**

- Exibe métricas da emergência e progressão horária.
- Apresenta diretrizes da Defesa Civil.
- Ações críticas exigem confirmação.

#### FE-042 — Implementar exportação de alerta

**Prioridade:** Média  
Gerar relatório simplificado da ocorrência.

**Critérios de aceite:**

- Relatório inclui ID, estação, valores e recomendações.
- Nome do arquivo inclui ID e data.
- Geração apresenta loading e tratamento de erro.

### Histórico

#### FE-043 — Implementar filtros do histórico

**Prioridade:** Alta  
Adicionar período rápido e intervalo personalizado.

**Critérios de aceite:**

- Permite Hoje, 7 dias e 30 dias.
- Datas personalizadas são validadas.
- Período atualiza toda a página.

#### FE-044 — Implementar indicadores históricos

**Prioridade:** Alta  
Exibir estresse climático, críticos, alertas e atenções.

**Critérios de aceite:**

- Indicadores respeitam o período.
- Cada card possui explicação resumida.
- Estados usam texto, ícone e cor.

#### FE-045 — Implementar gráficos históricos

**Prioridade:** Alta  
Comparar temperatura, média histórica e umidade.

**Critérios de aceite:**

- Anomalias e limites críticos são destacados.
- Gráficos são responsivos.
- Cada gráfico possui descrição acessível.

#### FE-046 — Implementar tabela de registros diários

**Prioridade:** Alta  
Exibir dados consolidados com paginação.

**Critérios de aceite:**

- Mostra data, temperatura, umidade, status e ocorrências.
- Filtro de status e paginação funcionam.
- Linha abre o registro correspondente.

### Configurações

#### FE-047 — Implementar canais de notificação

**Prioridade:** Alta  
Criar preferências de alertas e comunicação.

**Critérios de aceite:**

- Canais podem ser ativados e desativados.
- Alterações apresentam estado de salvamento.
- Erros restauram o valor anterior.
- Canal obrigatório possui bloqueio explicado.

#### FE-048 — Implementar limites personalizados

**Prioridade:** Alta  
Configurar temperatura e umidade mínima e máxima.

**Critérios de aceite:**

- Sliders e valores permanecem sincronizados.
- Intervalos inválidos são bloqueados.
- Valores recomendados podem ser restaurados.

#### FE-049 — Implementar sistema, governança e logout

**Prioridade:** Alta  
Exibir perfil, região, unidades, polling e encerramento da sessão.

**Critérios de aceite:**

- Informações somente leitura são identificadas.
- Preferências editáveis são persistidas.
- Logout remove a sessão e retorna ao login.
- Rotas privadas ficam inacessíveis após sair.

### Qualidade final

#### FE-050 — Validar responsividade, acessibilidade e testes

**Prioridade:** Crítica  
Executar a revisão final de todas as páginas.

**Critérios de aceite:**

- Interface funciona em 375, 768, 1024 e 1440 px.
- Não existe rolagem horizontal geral.
- Fluxos principais possuem testes.
- Navegação por teclado funciona.
- Contraste atende ao padrão WCAG AA.
- Não existem erros de build, TypeScript ou console.

## 8. Ordem recomendada

```text
FE-001 a FE-005   Fundação
FE-006 a FE-010   Design system
FE-011 a FE-016   Layout e navegação
FE-017 a FE-020   Área pública e autenticação
FE-021 a FE-025   Dashboard
FE-026 a FE-030   Monitoramento
FE-031 a FE-035   Temperatura
FE-036 a FE-042   Alertas
FE-043 a FE-046   Histórico
FE-047 a FE-049   Configurações
FE-050            Validação final
```

## 9. Definition of Done

Um card somente poderá ser concluído quando:

- Cumprir seus critérios de aceite.
- Tratar carregamento, sucesso, vazio e erro quando aplicável.
- Ser responsivo e utilizável por teclado.
- Utilizar tokens e componentes compartilhados.
- Não possuir dados climáticos fixos no componente.
- Não apresentar erros de TypeScript, lint, build ou console.
- Possuir testes proporcionais à criticidade do fluxo.
- Manter compatibilidade visual com as referências presentes em `assets/`.
