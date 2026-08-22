# Agente do My Portfolio

## Comunicação

- Comunicar em português do Brasil, de forma direta, técnica e concisa.
- Informar erros, incertezas e validações não executadas sem ocultar limitações.
- Explicar decisões que afetem arquitetura, segurança, desempenho ou dependências.

## Contexto do projeto

- Tratar este repositório como uma SPA criada com Create React App 5.
- Usar React 18, TypeScript 4.9 em modo estrito, React Router 6, Tailwind CSS 3 e npm.
- Manter o código da aplicação em `src/` e os arquivos estáticos em `public/`.
- Tratar `studio/` como uma aplicação Sanity independente e preservar o contrato com `src/content/`.
- Usar `docs/README.md` como índice documental e `.specs/project/` para contexto durável de especificações.
- Respeitar a combinação existente de Tailwind e CSS; não migrar a estratégia de estilos sem solicitação.
- Não executar `npm run eject`.

## Fluxo de trabalho e economia de tokens

- Antes de alterar código, ler este arquivo, `README.md`, `package.json`, as configurações relevantes, `.specs/project/STATE.md` e o estado do Git.
- Inspecionar somente arquivos relacionados à tarefa. Usar primeiro `rg --files`, `rg` e intervalos pequenos com `sed`.
- Não carregar `package-lock.json`, artefatos gerados ou arquivos extensos por inteiro, salvo quando forem necessários.
- Para mudanças em vários arquivos, apresentar um plano curto antes da edição.
- Evitar repetir contexto, resultados de comandos ou trechos de código já conhecidos.
- Preservar mudanças do usuário e limitar o diff ao menor conjunto completo.
- Não criar abstrações, componentes, dependências ou documentação sem necessidade atual.

## Implementação

- Escrever componentes funcionais e TypeScript estrito; evitar `any`, efeitos implícitos e estado duplicado.
- Manter regras de negócio separadas da apresentação quando houver regra de negócio real.
- Preservar comportamento e identidade visual, exceto quando a tarefa pedir mudanças explícitas.
- Garantir HTML semântico, navegação por teclado, foco visível, rótulos acessíveis e contraste adequado.
- Respeitar `prefers-reduced-motion` ao criar ou modificar animações.
- Validar entradas externas e nunca expor segredos no bundle do cliente.
- Reutilizar dependências existentes. Justificar antes de adicionar uma dependência de produção.

## Otimização

- Usar `$optimize-portfolio` para tarefas de desempenho, bundle, renderização, carregamento, acessibilidade, SEO técnico ou manutenção orientada por métricas.
- Medir ou estabelecer evidência antes de otimizar e comparar o resultado depois da mudança.
- Priorizar impacto percebido pelo usuário: carregamento inicial, recursos transferidos, trabalho da thread principal, estabilidade visual e responsividade.
- Evitar memoização, lazy loading e abstrações por hábito; aplicá-los somente quando houver benefício plausível e verificável.

## Validação

- Executar ferramentas do projeto pelo Docker Compose no desenvolvimento local.
- Executar `docker compose run --rm app npm run format:check` e `docker compose run --rm app npm run lint` após mudanças em arquivos cobertos.
- Executar `docker compose run --rm app npx tsc --noEmit` após mudanças TypeScript.
- Executar `docker compose run --rm -e CI=true app npm test -- --watchAll=false` para mudanças de comportamento cobertas por testes.
- Executar `docker compose run --rm app npm run build` quando a mudança puder afetar produção, bundle ou configuração.
- Para mudanças no Studio, executar TypeScript e build em `studio/` conforme `docs/operacao/configuracao-local.md`.
- Após mudanças em agentes, documentação ou workflows, executar `docker compose run --rm app npx --yes harness-score@1.6.0 . --min-level 3`.
- Usar `npm run format` somente no escopo necessário; revisar alterações mecânicas antes de mantê-las.
- Relatar cada comando executado, falha encontrada e verificação não realizada.

## Entrega

- Resumir o que foi implementado, os arquivos alterados, as validações executadas e os riscos ou próximos passos.
- Não fazer commit, push, deploy ou alteração de recursos externos sem solicitação explícita.

## Publicação no GitHub

- Usar `$publish-without-gh` quando o usuário autorizar commit ou push e o GitHub CLI não estiver disponível.
- Usar `$suggest-pr` para gerar título e descrição completos a partir do diff da branch, sem criar ou publicar a pull request.
- Preservar a identidade Git já configurada e nunca adicionar autoria, coautoria ou trailers atribuídos à IA.

## Workflows assistidos

- Usar `$spec-driven` para features, mudanças multiarquivo, quick fixes ou retomada com artefatos rastreáveis.
- Usar `$review-portfolio` quando o usuário pedir revisão; a skill é somente leitura até autorização posterior.
- Usar `$validate-portfolio` para escolher e executar checks proporcionais ao escopo.
- Manter Jira, Honeybadger, Datadog e integrações não utilizadas fora das instruções e do bundle.

## Code Review Rules

- Sinalizar URLs externas do CMS que contornem a validação existente ou possam usar protocolos inseguros.
- Sinalizar divergências entre schemas do Sanity, consulta, tipos TypeScript e conteúdo local de fallback.
- Sinalizar secrets ou tokens expostos por variáveis `REACT_APP_*`, logs, fixtures, workflows ou documentação.
- Sinalizar regressões de teclado, foco, semântica, contraste ou `prefers-reduced-motion` introduzidas pelo diff.
- Sinalizar workflows com permissões maiores que o necessário, actions sem SHA fixo ou capacidade de deploy não solicitada.
