# Tecnologias do front-end

Este documento descreve as tecnologias e a organização que estão implementadas no front-end do ClimaAlert. A aplicação está em `frontend/` e apresenta uma interface de monitoramento climático alinhada ao ODS 13.

## Stack

| Tecnologia | Uso no projeto |
| --- | --- |
| React 19 | Construção da interface em componentes e composição das páginas. |
| TypeScript 5.9 | Tipagem estática dos componentes, estados e dados climáticos; o projeto usa modo estrito. |
| Vite 7 | Servidor de desenvolvimento e empacotamento da aplicação para produção. |
| React Router DOM 7 | Navegação no cliente, rotas aninhadas e proteção das páginas operacionais. |
| Zustand 5 | Estado compartilhado de sessão e estação selecionada, persistido no armazenamento local do navegador. |
| TanStack Query 5 | Provider configurado na inicialização, com cache de 30 segundos e uma tentativa de repetição; as páginas atuais ainda não usam queries para obter dados. |
| Recharts 3 | Gráficos de séries e indicadores climáticos no painel. |
| Lucide React | Ícones usados na navegação, nos controles e nos cartões. |
| CSS | Estilos próprios organizados por tokens, estilos globais, layouts e páginas; não há framework CSS configurado. |

As dependências `react-hook-form`, `zod` e `@hookform/resolvers` também aparecem no manifesto do projeto, mas ainda não são usadas pelo código das telas.

## Ferramentas de desenvolvimento e testes

- **ESLint 9** verifica problemas de código e segue as regras configuradas para TypeScript e React.
- **Vitest 3** executa os testes automatizados em ambiente `jsdom`.
- **Testing Library** testa componentes pela interface que apresentam; `jest-dom` fornece verificações adicionais para o DOM.
- **TypeScript** também é executado durante a compilação de produção.

## Organização do código

```text
frontend/
└── src/
    ├── app/          # Rotas e proteção de acesso
    ├── components/   # Componentes reutilizáveis de layout e interface
    ├── hooks/        # Hooks compartilhados, como a estação ativa
    ├── layouts/      # Estrutura visual da área operacional
    ├── mocks/        # Estações, métricas, alertas e séries de demonstração
    ├── pages/        # Páginas públicas e páginas do painel
    ├── store/        # Estado persistente da sessão e da estação
    ├── styles/       # Tokens visuais e estilos globais
    ├── test/         # Configuração compartilhada dos testes
    ├── types/        # Tipos do domínio climático
    └── utils/        # Regras reutilizáveis, como classificação de severidade
```

O ponto de entrada é `src/main.tsx`: ele monta o React, registra o roteador e disponibiliza o `QueryClientProvider`. O componente `src/app/App.tsx` declara as rotas. As páginas `/app/*` compartilham o layout operacional e exigem uma sessão registrada no estado da aplicação.

### Rotas

| Caminho | Tela |
| --- | --- |
| `/` | Apresentação pública |
| `/login` | Entrada no painel, incluindo acesso como visitante |
| `/app/dashboard` | Painel climático |
| `/app/monitoramento` | Monitoramento de sensores |
| `/app/temperatura` | Análise de temperatura |
| `/app/alertas` | Lista de alertas |
| `/app/alertas/:id` | Detalhes de um alerta |
| `/app/alertas/:id/ocorrencia` | Ocorrência relacionada a um alerta |
| `/app/mapa` | Mapa climático |
| `/app/historico` | Histórico |
| `/app/configuracoes` | Configurações operacionais |

## Estado e dados

O estado de autenticação e a estação selecionada são gerenciados em stores Zustand. A persistência usa o armazenamento local do navegador; a entrada atual permite acessar como visitante e não constitui autenticação real.

Os dados apresentados nas telas vêm de `src/mocks/data/climate.ts`. Portanto, sensores, métricas, alertas e séries são dados demonstrativos, não leituras em tempo real nem respostas de uma API. O `QueryClient` já está configurado, mas a integração de dados remotos ainda não foi implementada.

Os contratos principais do domínio — por exemplo, estação, sensor, métrica, alerta e severidade — estão em `src/types/climate.ts`. Ao integrar uma API, seus formatos devem ser compatibilizados com esses tipos e a camada de dados demonstrativos deve ser substituída ou isolada como fonte de desenvolvimento.

## Executar e validar

Com Node.js e npm instalados, execute os comandos na pasta do front-end:

```bash
cd frontend
npm install
npm run dev
```

O Vite informará o endereço local da aplicação. Para validar as alterações:

```bash
npm run lint
npm run test
npm run build
```

O script de build executa primeiro a verificação de tipos (`tsc -b`) e, se ela passar, gera os arquivos de produção com Vite. `npm run preview` serve localmente o build já gerado.
