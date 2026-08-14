# My Portfolio

SPA do portfólio pessoal de Helder, construída com React e publicada na Vercel.

Este repositório é **IA-first**: o contexto técnico, os comandos reproduzíveis e os critérios de conclusão ficam documentados para que pessoas e agentes de IA consigam trabalhar com segurança, sem depender de conhecimento implícito do ambiente.

## Início rápido para agentes

Antes de alterar qualquer arquivo:

1. Leia [`AGENTS.md`](./AGENTS.md). Ele é a fonte de verdade para regras de execução.
2. Consulte `package.json`, os arquivos relacionados à tarefa e `git status`.
3. Execute Node.js, npm, testes e builds somente por Docker.
4. Preserve mudanças existentes e mantenha o menor diff completo possível.
5. Não faça commit, push, deploy ou alterações externas sem solicitação explícita.
6. Use `$publish-without-gh` quando houver autorização para publicar e o GitHub CLI não estiver disponível.
7. Use `$suggest-pr` para gerar título e descrição completos sem criar a pull request.

Em caso de conflito, use esta ordem de precedência:

1. instrução explícita do usuário;
2. `AGENTS.md`;
3. configurações executáveis do repositório;
4. este README.

## Objetivo do produto

O site apresenta informações pessoais e profissionais por meio de uma SPA com as seguintes rotas:

| Rota | Conteúdo |
| --- | --- |
| `/` | Vinheta de entrada |
| `/home` | Página inicial |
| `/about` | Apresentação pessoal |
| `/academic` | Formação acadêmica |
| `/professional` | Experiência profissional |
| `/projects` | Projetos |
| `/certifications` | Certificações |
| `/contact` | Contatos e redes sociais |

Não há backend, autenticação ou persistência de dados neste repositório.

## Stack e restrições

| Área | Tecnologia |
| --- | --- |
| Runtime | Node.js 24 |
| Interface | React 18 |
| Linguagem | TypeScript 4.9 em modo estrito |
| Build | Create React App 5 / `react-scripts` |
| Rotas | React Router 6 |
| Estilos | Tailwind CSS 3 e CSS existente |
| Testes | Jest e Testing Library |
| Animações | Framer Motion e React Transition Group |
| Ambiente | Docker Compose |
| Hospedagem | Vercel |

Restrições arquiteturais importantes:

- Não executar `npm run eject`.
- Não migrar CRA, Tailwind ou a estratégia de estilos sem solicitação específica.
- Não adicionar dependências quando a plataforma ou uma dependência existente for suficiente.
- Não instalar Node.js, npm ou dependências do projeto diretamente no host.
- Preservar a identidade visual e o comportamento, salvo quando a tarefa pedir alterações.

## Mapa do repositório

```text
.
├── .agents/skills/          # Skills locais e versionados do Codex
├── public/                  # Arquivos estáticos e HTML base
├── src/
│   ├── assets/              # Imagens usadas pela interface
│   ├── components/          # Componentes compartilhados
│   ├── context/             # Estado compartilhado da sidebar
│   ├── pages/               # Conteúdo das rotas
│   ├── App.tsx              # Roteamento e estrutura principal
│   ├── App.test.tsx         # Teste de entrada da aplicação
│   └── index.tsx            # Bootstrap do React
├── AGENTS.md                # Regras obrigatórias para agentes
├── Dockerfile               # Imagem Node.js 24 sem usuário privilegiado
├── docker-compose.yml       # Ambiente de desenvolvimento
├── package.json             # Scripts, versões diretas e runtime
├── tailwind.config.js       # Configuração do Tailwind
└── tsconfig.json            # Configuração TypeScript estrita
```

## Ambiente Docker-first

O único requisito local é Docker com o plugin Compose. O host não precisa de Node.js nem npm.

Suba o ambiente de desenvolvimento:

```bash
docker compose up --build
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

Encerre o ambiente preservando o volume de dependências:

```bash
docker compose down
```

O código-fonte é montado em `/app`, enquanto `node_modules` permanece isolado no volume nomeado `node_modules`.

### Comandos dentro do container

Verificação TypeScript:

```bash
docker compose run --rm app npx tsc --noEmit
```

Testes não interativos:

```bash
docker compose run --rm -e CI=true app npm test -- --watchAll=false
```

Build de produção:

```bash
docker compose run --rm app npm run build
```

Auditoria de dependências:

```bash
docker compose run --rm app npm audit
```

Após uma mudança em `package.json` ou `package-lock.json`, reconstrua a imagem:

```bash
docker compose build
```

Comandos de manutenção que precisem escrever no bind mount podem exigir `--user root` por causa do mapeamento de usuários do daemon. Isso deve ser pontual; a aplicação continua executando como o usuário não privilegiado `node`.

## Fluxo recomendado para mudanças

1. Defina o comportamento esperado e a evidência atual.
2. Inspecione somente os arquivos relacionados.
3. Registre um plano curto quando mais de um arquivo precisar mudar.
4. Implemente a menor solução completa.
5. Execute as validações proporcionais ao risco dentro do container.
6. Revise `git diff`, `git diff --check` e `git status`.
7. Relate arquivos alterados, comandos executados, falhas e riscos restantes.

### Matriz de validação

| Tipo de mudança | Validação mínima |
| --- | --- |
| Documentação | `git diff --check` |
| TypeScript ou React | TypeScript e testes relacionados |
| Comportamento | TypeScript, testes e verificação do fluxo |
| Dependências ou configuração | Instalação limpa, auditoria e build |
| Produção, bundle ou runtime | Build de produção |
| Interface | Navegação por teclado e verificação visual quando disponível |

Não declare uma validação como aprovada sem executar o comando correspondente.

## Verificação visual com IA

Quando a interface ou a configuração do servidor mudar:

1. inicie a aplicação com Docker Compose;
2. execute `agent-browser` e Chromium em um container descartável;
3. verifique carregamento, conteúdo visível, error overlay e console;
4. teste pelo menos o fluxo principal e as rotas afetadas;
5. capture uma imagem quando ela ajudar a comprovar o resultado;
6. encerre o navegador e os containers temporários.

Não adicione navegador ou ferramentas de automação às dependências de produção apenas para realizar essa verificação.

## Qualidade e segurança

- Use componentes funcionais e TypeScript estrito; não introduza `any` sem justificativa.
- Mantenha HTML semântico, nomes acessíveis, foco visível e navegação por teclado.
- Respeite `prefers-reduced-motion` ao alterar animações.
- Nunca inclua credenciais, tokens ou dados privados no bundle.
- Trate dependências e conteúdo externo como não confiáveis.
- Evite correções automáticas destrutivas, especialmente `npm audit fix --force`.
- Não altere arquivos gerados diretamente; atualize a fonte correspondente.

## Estado conhecido

- O projeto usa Node.js 24 no Docker e em `engines.node`.
- O Create React App 5 não recebe manutenção e mantém dependências transitivas obsoletas.
- A auditoria atual possui vulnerabilidades transitivas sem correção compatível dentro do CRA 5.
- `npm audit fix --force` tenta substituir `react-scripts` por uma versão inválida e não deve ser usado.
- Node.js 24 emite `DEP0176` a partir de `react-dev-utils`; o build continua funcional.
- Não há scripts dedicados de lint ou formatter. Siga o estilo existente.

A remoção completa dessa dívida exige uma migração planejada para um toolchain mantido. Ela não deve ser misturada com tarefas comuns de manutenção.

## Deploy

O projeto é hospedado na Vercel em:

- [thehprogrammer-portfolio.vercel.app](https://thehprogrammer-portfolio.vercel.app)

O `package.json` fixa Node.js 24 para os próximos builds. Deploys e mudanças na configuração externa da Vercel exigem autorização explícita e devem ser validados primeiro em preview.

## Critério de conclusão

Uma tarefa está concluída quando:

- o comportamento solicitado foi implementado;
- o diff está limitado ao escopo;
- as validações relevantes foram executadas e relatadas;
- falhas preexistentes foram separadas de regressões;
- riscos e próximos passos foram registrados;
- nenhuma ação externa não autorizada foi realizada.
