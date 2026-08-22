# My Portfolio

Portfólio pessoal de Helder, desenvolvido como uma SPA React e publicado na Vercel. O conteúdo
público é administrado pelo Sanity Studio e consultado diretamente no Content Lake, com fallback
local quando a configuração ou a consulta remota não estiver disponível.

## Produto

| Rota              | Conteúdo                 |
| ----------------- | ------------------------ |
| `/`               | Vinheta de entrada       |
| `/home`           | Página inicial           |
| `/about`          | Apresentação pessoal     |
| `/academic`       | Formação acadêmica       |
| `/professional`   | Experiência profissional |
| `/projects`       | Projetos                 |
| `/certifications` | Certificações            |
| `/contact`        | Contatos e redes sociais |

## Stack

| Área           | Tecnologia                     |
| -------------- | ------------------------------ |
| Runtime        | Node.js 24                     |
| Interface      | React 18 e React Router 6      |
| Linguagem      | TypeScript 4.9 em modo estrito |
| Build          | Create React App 5             |
| Estilos        | Tailwind CSS 3 e CSS existente |
| Testes         | Jest e Testing Library         |
| CMS            | Sanity Content Lake e Studio   |
| Ambiente local | Docker Compose                 |
| Hospedagem     | Vercel                         |

## Início rápido

O único requisito local é Docker com o plugin Compose.

```bash
cp .env.example .env.local
docker compose up --build
```

Configure em `.env.local` somente os identificadores públicos do Sanity. Variáveis
`REACT_APP_*` são incorporadas ao bundle e nunca devem conter tokens ou credenciais.

A aplicação ficará disponível em [localhost:3000](http://localhost:3000). Consulte
[Configuração local](./docs/operacao/configuracao-local.md) para executar validações, preparar o
Studio, restaurar conteúdo ou diagnosticar o ambiente.

## Estrutura

```text
.
├── public/                  # HTML base e arquivos estáticos
├── src/
│   ├── assets/              # Imagens da interface
│   ├── components/          # Componentes compartilhados
│   ├── content/             # Tipos, fallback e cliente do Sanity
│   ├── context/             # Estado compartilhado
│   └── pages/               # Conteúdo das rotas
├── studio/                  # Sanity Studio e schemas editoriais
├── docs/                    # Documentação técnica e operacional
├── .github/                 # CI, segurança e templates
├── .agents/skills/          # Workflows versionados do projeto
├── .codex/                  # Configuração compartilhável do Codex
└── .specs/                  # Especificações e estado de trabalho
```

## Documentação

| Documento                                                                                                  | Conteúdo                                                     |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [Índice de documentação](./docs/README.md)                                                                 | Organização, categorias e fontes canônicas.                  |
| [Visão geral da arquitetura](./docs/arquitetura/visao-geral.md)                                            | Limites, fluxo de renderização, conteúdo e contratos.        |
| [Configuração local](./docs/operacao/configuracao-local.md)                                                | Docker, Sanity Studio, comandos e diagnóstico.               |
| [Desenvolvimento orientado a especificação](./docs/processos/desenvolvimento-orientado-a-especificacao.md) | Planejamento, artefatos e retomada de trabalho.              |
| [Automação e segurança](./docs/qualidade/automacao-e-seguranca.md)                                         | CI, validações, dependências e `harness-score`.              |
| [Automação do GitHub](./.github/README.md)                                                                 | Workflows, gatilhos e limites de publicação.                 |
| [Instruções do repositório](./AGENTS.md)                                                                   | Regras obrigatórias para agentes e contribuições assistidas. |
| [Configuração do Codex](./.codex/README.md)                                                                | Permissões, hooks e contexto carregado por sessão.           |

## Deploy

- SPA: [thehprogrammer-portfolio.vercel.app](https://thehprogrammer-portfolio.vercel.app)
- Studio: [thehprogrammer-portfolio.sanity.studio](https://thehprogrammer-portfolio.sanity.studio/)

Os deploys permanecem sob responsabilidade das integrações existentes da Vercel e do Sanity. Os
workflows deste repositório validam mudanças, mas não publicam ambientes nem executam seeds.

## Contribuição

Antes de alterar o projeto, leia [`AGENTS.md`](./AGENTS.md) e a documentação do domínio afetado.
Não faça commit, push, deploy ou alteração de recursos externos sem solicitação explícita.
