# Resumo: corrigir o hook SessionStart

## Mudanças

- Prefixada a saída de `.codex/project.json` com `Project context: `.
- Documentada a distinção entre contexto textual e resposta JSON estruturada de hook.

## Evidências

- `.codex/hooks.json` e `.codex/project.json` foram aceitos por `jq`.
- O comando recebeu uma entrada `SessionStart` representativa, retornou código zero e produziu
  `Project context: {` como primeira linha.
- Removido o prefixo, o conteúdo retornado continuou sendo um documento JSON válido.
- `.codex/config.toml`, `docker compose config` e `git diff --check` foram validados sem erro.

## Desvios e riscos

- A confirmação visual no início de uma sessão exige revisar o novo hash em `/hooks` e reiniciar ou
  retomar o Codex após o commit.
- `format:check` e `harness-score` não iniciaram porque o sandbox continuou negando acesso ao
  socket Docker, inclusive após elevação explícita.
