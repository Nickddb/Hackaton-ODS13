# Requisitos do ClimaAlert

## 1. Objetivo

Este documento especifica os requisitos do ClimaAlert, plataforma web de monitoramento e alerta climático vinculada à ODS 13 — Ação Contra a Mudança Global do Clima. O sistema busca apoiar a prevenção, a consulta pública e a resposta a eventos meteorológicos extremos por meio de informações claras e territorializadas.

## 2. Requisitos funcionais

### RF-01 — Consulta pública

O sistema deve permitir que qualquer pessoa acesse o painel como visitante, sem informar credenciais, deixando explícito que o acesso está em modo de consulta pública.

### RF-02 — Seleção global de cidade

O sistema deve permitir a seleção entre Sorocaba/SP, Curitiba/PR e Recife/PE. A cidade escolhida deve permanecer sincronizada em todos os módulos e após a atualização da página.

### RF-03 — Dashboard climático

O sistema deve apresentar temperatura, umidade, vento, sensação térmica, índice UV, chuva, conforto bioclimático e condição geral da cidade selecionada.

### RF-04 — Monitoramento de estações e sensores

O sistema deve exibir a estação ativa, sua confiabilidade, horário de sincronização, sensores vinculados, parâmetros monitorados, bateria e latência.

### RF-05 — Análise de temperatura

O sistema deve apresentar temperatura atual, sensação térmica, mínima, máxima, faixa de referência e gráfico histórico da cidade selecionada.

### RF-06 — Simulação de evento extremo

O sistema deve permitir alternar entre o cenário real e uma simulação extrema, identificando claramente os valores simulados para não confundi-los com leituras reais.

### RF-07 — Gestão de alertas climáticos

O sistema deve listar alertas específicos da cidade selecionada, informando severidade, indicador, local, valor registrado, limite seguro, horário e descrição do risco.

### RF-08 — Detalhamento e resposta a ocorrências

O sistema deve disponibilizar uma página detalhada para cada ocorrência, com recomendações da Defesa Civil, classificação do risco e ações para imprimir ou dispersar o alerta aos canais operacionais.

### RF-09 — Histórico climático

O sistema deve apresentar gráficos e registros consolidados de temperatura, umidade, valores mínimos, médios e máximos da estação selecionada.

### RF-10 — Configuração de notificações e região

O sistema deve permitir ativar ou desativar canais de notificação e alterar a região principal, propagando a nova seleção para toda a aplicação.

## 3. Requisitos não funcionais

### RNF-01 — Responsividade

O sistema deve funcionar adequadamente em larguras de 375, 768, 1024 e 1440 pixels, sem rolagem horizontal geral e com reorganização dos cards, gráficos, tabelas e menus.

### RNF-02 — Acessibilidade

O sistema deve seguir as recomendações WCAG 2.1 nível AA, possuir foco visível, labels nos campos, navegação por teclado e textos que complementem informações apresentadas por cores.

### RNF-03 — Desempenho

O carregamento inicial deve utilizar divisão de bundle por bibliotecas, evitar renderizações desnecessárias e apresentar resposta visual às interações em até 200 milissegundos em condições normais.

### RNF-04 — Compatibilidade

O sistema deve funcionar nas duas versões estáveis mais recentes dos navegadores Chrome, Edge, Firefox e Safari.

### RNF-05 — Confiabilidade dos dados

Toda informação climática deve exibir sua estação de origem, unidade, condição, confiabilidade e momento da última sincronização sempre que esses dados estiverem disponíveis.

### RNF-06 — Segurança

O sistema deve validar entradas, proteger rotas operacionais, evitar armazenamento de informações sensíveis em texto puro e solicitar confirmação para ações críticas.

### RNF-07 — Persistência de preferências

A cidade selecionada e o modo de acesso devem permanecer disponíveis após recarregar a aplicação, sem expor informações pessoais ou credenciais.

### RNF-08 — Manutenibilidade

O código deve utilizar TypeScript estrito, componentes reutilizáveis, tipos de domínio, dados separados da apresentação e uma organização por páginas, componentes, hooks, stores e serviços.

### RNF-09 — Testabilidade

As regras compartilhadas e os componentes críticos devem possuir testes automatizados, e o projeto deve passar nos comandos de lint, teste e build antes de cada entrega.

### RNF-10 — Clareza e prevenção de erro

Alertas, simulações e estados climáticos devem utilizar texto, ícone e cor. Valores indisponíveis não devem ser apresentados como zero, e ações de emergência devem fornecer retorno visual de sucesso ou falha.

## 4. Rastreabilidade resumida

| Área | Requisitos relacionados |
|---|---|
| Acesso público | RF-01, RNF-02, RNF-06 |
| Seleção territorial | RF-02, RF-10, RNF-07 |
| Monitoramento | RF-03, RF-04, RF-05, RNF-05 |
| Prevenção e resposta | RF-06, RF-07, RF-08, RNF-10 |
| Dados históricos | RF-09, RNF-03 |
| Qualidade técnica | RNF-01, RNF-04, RNF-08, RNF-09 |
