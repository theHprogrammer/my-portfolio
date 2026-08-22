# Automação e segurança

## Controles gratuitos

Como o repositório é público, a base usa recursos do GitHub sem integrar Jira, Honeybadger,
Datadog ou serviços equivalentes que o produto não consome:

| Controle                      | Implementação                  | Cobertura                                                              |
| ----------------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| Integração contínua           | GitHub Actions                 | TypeScript, testes e builds da SPA e do Studio.                        |
| Lint e formatação             | ESLint e Prettier              | Erros React/TypeScript e estilo determinístico.                        |
| Pre-commit                    | Husky e lint-staged            | Correções rápidas somente nos arquivos staged.                         |
| Análise estática de segurança | CodeQL                         | JavaScript e TypeScript em pushes, PRs e agenda semanal.               |
| Mudanças de dependência       | Dependency review              | Bloqueia PRs com novas vulnerabilidades de severidade alta ou crítica. |
| Atualizações                  | Dependabot                     | npm da raiz, npm do Studio e actions.                                  |
| Maturidade do harness         | `harness-score`                | Estrutura de contexto, skills, feedback e higiene do repositório.      |
| Deploy e preview              | Integração existente da Vercel | Permanece fora dos workflows e exige configuração externa.             |

## Matriz de validação

| Tipo de mudança              | Validação mínima                                              |
| ---------------------------- | ------------------------------------------------------------- |
| Documentação                 | Links locais, sintaxe e `git diff --check`.                   |
| TypeScript ou React          | Formatação, ESLint, TypeScript e testes relacionados.         |
| Comportamento                | TypeScript, testes e verificação do fluxo.                    |
| Dependências ou configuração | Instalação limpa, auditoria e build.                          |
| Produção, bundle ou runtime  | Build de produção.                                            |
| Interface                    | Navegação por teclado e verificação visual quando disponível. |
| Harness, agents ou workflows | `harness-score`, validação estrutural e `actionlint`.         |

O `harness-score` é executado de forma efêmera e com versão fixa:

```bash
docker compose run --rm app npx --yes harness-score@1.6.0 . --min-level 3
```

O score é um sensor, não uma especificação arquitetural. Melhorias devem ser aplicadas somente
quando forem úteis ao Codex e ao projeto; não replique arquivos de Cursor ou Claude apenas para
atender regras que ainda não reconhecem superfícies nativas em `.codex/`.

## Verificação de interface

Quando uma mudança afetar a interface ou o servidor local, confirme carregamento, console, teclado,
foco e as rotas alteradas em navegador real. Respeite `prefers-reduced-motion` e registre imagem ou
métrica somente quando ela ajudar a comprovar o resultado.

## Limites

GitHub Actions valida o código, mas não substitui monitoramento de runtime. Como esta aplicação é
uma SPA estática sem backend próprio, não foi adicionado SDK de observabilidade ao bundle. Logs de
build/deploy e métricas disponíveis na Vercel podem ser consultados quando necessário, sem acoplar
o frontend a um fornecedor adicional.

Actions de terceiros são fixadas por SHA. Dependabot pode propor sua atualização, mas a revisão
deve conferir o release correspondente antes do merge. Nenhum workflow contém segredo, publica o
site ou executa o seed do Sanity.

`npm audit` não é usado como gate global da CI porque os dois lockfiles já possuem vulnerabilidades
transitivas cuja correção automática exige mudanças incompatíveis de toolchain. Dependency review
impede a introdução de novas vulnerabilidades altas ou críticas, enquanto Dependabot mantém as
correções compatíveis visíveis. A eliminação da dívida existente deve ocorrer em mudança dedicada;
nunca use `npm audit fix --force` para fazer o gate passar.

## Dívida conhecida

- Create React App 5 não recebe manutenção e mantém dependências transitivas obsoletas.
- A auditoria possui vulnerabilidades sem correção compatível dentro do CRA atual.
- Node.js 24 emite `DEP0176` por `react-dev-utils`; o build permanece funcional.

Remover essa dívida exige uma migração planejada de toolchain e não deve ser misturado com mudanças
editoriais ou correções comuns.
