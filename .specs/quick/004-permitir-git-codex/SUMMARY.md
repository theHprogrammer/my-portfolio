# Resumo: permitir operações Git ao Codex neste projeto

## Mudanças

- Permitida escrita em `.git/` somente dentro dos roots do workspace.
- Documentado o limite da exceção e a permanência das regras contra operações destrutivas.

## Evidências

- `.codex/config.toml` permanece válido segundo o parser TOML da biblioteca padrão do Python.
- `git update-index --refresh` acessou o índice sem erro de `index.lock`; o código 1 resultou apenas
  dos arquivos modificados reportados como `needs update`.
- O SHA atual de `main` foi confirmado pela integração GitHub e integrado por fast-forward a partir
  do objeto já presente em `origin/main`.

## Desvios e riscos

- O transporte SSH não resolveu `github.com`, inclusive após elevação explícita; por isso o
  `git pull --ff-only` não concluiu a etapa de rede e o SHA remoto foi confirmado pela integração.
- Escrita em `.git/` permite alterar metadados e histórico local; as restrições de `AGENTS.md` e a
  exigência de autorização explícita continuam sendo o controle operacional.
