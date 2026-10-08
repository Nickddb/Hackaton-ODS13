# ClimaAlert Front-end

Interface React do sistema de monitoramento climático desenvolvido para a ODS 13 — Ação Contra a Mudança Global do Clima.

Para conhecer as tecnologias, a arquitetura, as rotas e as limitações atuais dos dados, consulte o [guia de tecnologias do front-end](../docs/tecnologias-frontend.md).

## Executar

```bash
npm install
npm run dev
```

A aplicação estará disponível no endereço exibido pelo Vite. Para acessar o painel, selecione o modo visitante. A sessão é simulada no front-end e não exige credenciais.

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
