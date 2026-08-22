---
name: validate-portfolio
description: Valida mudanças neste portfólio com checks proporcionais de formatação, lint, documentação, configuração, TypeScript, testes e builds da SPA e do Sanity Studio. Usar quando o usuário pedir validação, testes, diagnóstico de CI ou confirmação antes de commit e entrega.
---

# Validar o portfólio

Executar validações reais no ambiente Docker-first e relatar resultados sem ocultar falhas.

## Definir o escopo

1. Ler `AGENTS.md`, `git status` e o diff relevante.
2. Classificar os arquivos alterados e o risco do comportamento.
3. Preservar o alvo do usuário; sem alvo, validar todas as mudanças locais relacionadas.

## Escolher os checks

### Documentação, JSON, YAML ou TOML

- Executar `git diff --check`.
- Validar a sintaxe com uma ferramenta disponível.
- Verificar links locais, nomes e referências afetados.

### Aplicação React/TypeScript

```bash
docker compose run --rm app npm run format:check
docker compose run --rm app npm run lint
docker compose run --rm app npx tsc --noEmit
docker compose run --rm -e CI=true app npm test -- --watchAll=false
docker compose run --rm app npm run build
```

TypeScript é obrigatório após mudanças `.ts` ou `.tsx`. Executar testes para comportamento e build
quando produção, bundle ou configuração puderem ser afetados.

### Sanity Studio

```bash
docker compose run --rm --user root app sh -lc 'cd studio && npm ci && npx tsc --noEmit && npm run build'
```

Executar após mudanças em `studio/`, seus lockfiles ou contratos compartilhados com a SPA.

## Segurança e relatório

- Não ler `.env.local`, instalar ferramentas globalmente, executar seed ou publicar deploy.
- Não usar `npm audit fix --force`; separar vulnerabilidades transitivas conhecidas do CRA de regressões.
- Se Docker ou uma dependência falhar, registrar a causa real; não substituir silenciosamente por host.
- Informar resultado geral, comandos, exit codes, primeiro erro acionável, checks omitidos e riscos residuais.
