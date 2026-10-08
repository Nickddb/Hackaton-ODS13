# ClimaAlert Front-end

Interface React do sistema de monitoramento climático desenvolvido para a ODS 13 — Ação Contra a Mudança Global do Clima.

## Executar

```bash
npm install
npm run dev
```

A aplicação estará disponível no endereço exibido pelo Vite. Para acessar o painel, use qualquer e-mail válido e uma senha com pelo menos seis caracteres, ou selecione o modo visitante.

## Validações

```bash
npm run lint
npm run test
npm run build
```

## Estrutura

- `src/app`: roteamento e aplicação.
- `src/components`: componentes reutilizáveis.
- `src/layouts`: layouts público e operacional.
- `src/mocks`: dados demonstrativos tipados.
- `src/pages`: páginas públicas e operacionais.
- `src/store`: sessão e estação selecionada.
- `src/styles`: tokens e estilos globais.
- `src/types`: contratos do domínio climático.
- `src/utils`: regras e formatadores compartilhados.

## Rotas principais

- `/`: apresentação pública.
- `/login`: autenticação e modo visitante.
- `/app/dashboard`: visão climática consolidada.
- `/app/monitoramento`: sensores e telemetria.
- `/app/temperatura`: análise térmica e simulação.
- `/app/alertas`: central de ocorrências.
- `/app/historico`: séries históricas.
- `/app/mapa`: visualização territorial.
- `/app/configuracoes`: canais e limites operacionais.
