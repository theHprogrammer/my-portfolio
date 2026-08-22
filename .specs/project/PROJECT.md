# Projeto: My Portfolio

## Objetivo

Manter o portfólio pessoal como SPA acessível, responsiva e de baixo custo operacional, com
conteúdo público administrado pelo Sanity.

## Stack

- Node.js 24, npm e Docker Compose.
- React 18, TypeScript 4.9 estrito, Create React App 5 e React Router 6.
- Tailwind CSS 3 combinado ao CSS existente.
- Jest e Testing Library.
- Sanity Content Lake e Studio; hospedagem da SPA na Vercel.

## Restrições duráveis

- Não executar `npm run eject` nem migrar o toolchain sem tarefa explícita.
- Não expor tokens ou dados privados no bundle do navegador.
- Preservar fallback local quando o Sanity estiver ausente ou indisponível.
- Executar ferramentas do projeto por Docker no desenvolvimento local.
- Não fazer deploy, seed, commit ou push sem autorização explícita.

## Fontes de verdade

- Regras de agentes: `AGENTS.md`.
- Produto e início rápido: `README.md`.
- Documentação: `docs/README.md`.
- Automação: `.github/AUTOMATION.md`.
