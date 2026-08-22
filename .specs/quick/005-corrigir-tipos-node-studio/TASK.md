# Corrigir tipos de Node no Sanity Studio

## Contexto

O job `Sanity Studio` instala apenas `studio/package-lock.json` e executa `npx tsc --noEmit` dentro
de `studio/`. Esse pacote usa `process.env` na configuração e `process.exitCode` no seed, mas não
declara os tipos de Node entre suas dependências de desenvolvimento. Durante a correção, o sandbox
do Codex também bloqueou o socket rootless do Docker apesar da allowlist no perfil do projeto.

## Resultado esperado

- O TypeScript do Studio reconhece o global `process` nos arquivos executados em Node.
- O Studio continua instalável de forma isolada com `npm ci`.
- O build do Studio permanece funcional sem alteração de runtime ou deploy.
- Uma nova sessão do Codex recebe a allowlist do socket Docker na configuração efetiva do proxy.

## Arquivos

- `studio/package.json`
- `studio/package-lock.json`
- `.codex/config.toml`
- `.codex/README.md`

## Validação

```bash
docker compose run --rm --user root app sh -lc 'cd studio && npm ci && npx tsc --noEmit && npm run build'
git diff --check
docker compose run --rm app npx --yes harness-score@1.6.0 . --min-level 3
```
