# User Stories — ClimaAlert

## 1. Contexto

O ClimaAlert atende cidadãos, agentes da Defesa Civil e analistas de operação que precisam compreender condições climáticas, identificar riscos extremos e tomar decisões preventivas. As histórias abaixo descrevem o valor esperado sob a perspectiva de cada usuário.

## 2. Personas

### Cidadã — Mariana Santos

- **Perfil:** moradora de uma área urbana sujeita a calor, alagamentos e eventos climáticos severos.
- **Necessidade:** entender rapidamente o risco climático da sua cidade.
- **Dificuldade:** dados técnicos dispersos e alertas pouco claros.
- **Objetivo:** proteger sua família e adaptar sua rotina antes que o evento cause impacto.

### Operador — Lucas Andrade

- **Perfil:** analista de operações de um centro municipal de monitoramento.
- **Necessidade:** acompanhar estações, sensores, indicadores e ocorrências.
- **Dificuldade:** consolidar leituras de diferentes fontes e transformar dados em resposta operacional.
- **Objetivo:** reconhecer anomalias e acionar protocolos com rapidez.

### Gestora — Ana Ribeiro

- **Perfil:** coordenadora da Defesa Civil responsável por decisões e comunicação pública.
- **Necessidade:** obter uma visão confiável da gravidade e do alcance de cada evento.
- **Dificuldade:** decidir quando e como emitir alertas para a população.
- **Objetivo:** coordenar respostas preventivas e reduzir danos humanos e materiais.

## 3. User story principal

> **Como cidadã exposta aos impactos das mudanças climáticas, quero consultar as condições e os alertas da minha cidade em uma interface simples, para antecipar riscos e proteger a mim, minha família e minha comunidade.**

### Critérios de aceite

- A pessoa deve conseguir acessar o painel como visitante, sem cadastro.
- A cidade selecionada deve atualizar todos os módulos.
- A situação atual deve ser apresentada com texto, ícone, cor e valores objetivos.
- Alertas extremos devem informar o risco, o local, o limite seguro e as recomendações.
- A interface deve funcionar em computador, tablet e celular.

## 4. Histórias complementares

### US-01 — Acessar como visitante

> **Como cidadã, quero acessar o sistema sem criar uma conta, para consultar rapidamente os riscos climáticos da minha região.**

**Critérios de aceite:**

- A tela de boas-vindas deve possuir uma ação clara para acesso como visitante.
- O sistema deve direcionar o visitante ao dashboard.
- O modo de consulta pública deve ser identificado no perfil.

### US-02 — Selecionar uma cidade

> **Como visitante, quero alternar entre cidades, para acompanhar familiares ou regiões que podem ser afetadas por eventos diferentes.**

**Critérios de aceite:**

- Deve ser possível selecionar Sorocaba/SP, Curitiba/PR ou Recife/PE.
- A seleção deve atualizar dashboard, monitoramento, temperatura, alertas, histórico, mapa e configurações.
- A cidade escolhida deve permanecer selecionada após atualizar a página.

### US-03 — Compreender a condição atual

> **Como cidadã, quero visualizar os principais indicadores climáticos, para decidir se posso manter minhas atividades com segurança.**

**Critérios de aceite:**

- O dashboard deve apresentar temperatura, umidade, vento, sensação térmica, índice UV e chuva.
- Cada indicador deve mostrar valor, unidade, status e contexto.
- O sistema deve destacar condições fora da faixa normal.

### US-04 — Receber orientação em eventos extremos

> **Como pessoa em uma região sob alerta, quero receber recomendações objetivas, para agir corretamente diante de calor, frio, ventos ou inundações extremas.**

**Critérios de aceite:**

- A ocorrência deve apresentar diretrizes de proteção imediata.
- Os grupos vulneráveis devem ser mencionados.
- A orientação deve ser específica para a natureza do evento.

### US-05 — Monitorar sensores

> **Como analista de operações, quero acompanhar a condição das estações e sensores, para identificar falhas ou leituras potencialmente não confiáveis.**

**Critérios de aceite:**

- O sistema deve informar sensor, localização, parâmetros, bateria e latência.
- A confiabilidade e a última sincronização da estação devem ser visíveis.
- A troca de cidade deve apresentar os sensores vinculados à nova estação.

### US-06 — Analisar a temperatura

> **Como analista, quero comparar temperatura atual, mínima, máxima e sensação térmica, para avaliar o grau de estresse climático da população.**

**Critérios de aceite:**

- A página deve apresentar os valores da cidade selecionada.
- O gráfico deve mostrar a variação durante o período.
- A faixa segura deve ser indicada.

### US-07 — Simular um cenário extremo

> **Como agente de planejamento, quero simular condições climáticas extremas, para avaliar antecipadamente a resposta necessária.**

**Critérios de aceite:**

- Deve ser possível alternar entre cenário real e simulado.
- A simulação deve estar claramente identificada.
- Curitiba deve permitir a visualização de frio abaixo de zero, enquanto Sorocaba e Recife devem demonstrar calor acima de 40°C.

### US-08 — Investigar uma ocorrência

> **Como operador, quero abrir os detalhes de um alerta, para compreender o valor extremo, o limite excedido e as medidas recomendadas.**

**Critérios de aceite:**

- A ocorrência deve ser carregada pelo seu identificador.
- Deve apresentar valor, unidade, limite e local.
- Deve disponibilizar retorno à central de alertas.

### US-09 — Dispersar um alerta

> **Como coordenadora da Defesa Civil, quero encaminhar uma ocorrência aos canais operacionais, para acelerar a comunicação e a resposta pública.**

**Critérios de aceite:**

- A página deve oferecer a ação “Dispersar alerta”.
- A ação deve apresentar confirmação visual.
- Os canais Defesa Civil, Bombeiros e broadcast regional devem ser identificados.

### US-10 — Consultar o histórico

> **Como gestora pública, quero consultar o histórico climático da cidade, para reconhecer padrões e apoiar decisões de prevenção e adaptação.**

**Critérios de aceite:**

- O histórico deve apresentar gráficos de temperatura e umidade.
- Os valores mínimo, médio e máximo devem refletir a estação selecionada.
- A tabela consolidada deve informar o status de cada registro.

## 5. Jornada resumida

```text
Boas-vindas
    ↓
Acesso como visitante
    ↓
Seleção da cidade
    ↓
Consulta dos indicadores
    ↓
Identificação de uma anomalia
    ↓
Abertura do alerta
    ↓
Leitura das recomendações
    ↓
Ação preventiva ou acionamento do protocolo
```

## 6. Definition of Done das histórias

Uma user story será considerada concluída quando:

- Todos os critérios de aceite estiverem atendidos.
- A funcionalidade responder à cidade global selecionada.
- Os estados de carregamento, vazio e erro forem tratados quando aplicáveis.
- A interface for responsiva e utilizável por teclado.
- Não houver erros de TypeScript, lint, testes ou build.
