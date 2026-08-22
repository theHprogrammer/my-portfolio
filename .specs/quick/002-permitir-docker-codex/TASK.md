# Permitir Docker ao Codex neste projeto

## Contexto

As validações Docker-first falham porque o sandbox não possui acesso ao socket rootless do Docker
em `/run/user/1000/docker.sock`.

## Resultado esperado

- Permitir somente o socket Docker usado neste ambiente.
- Manter os demais sockets Unix bloqueados.
- Documentar a permissão e a necessidade de reiniciar a sessão do Codex.

## Arquivos

- `.codex/config.toml`
- `.codex/README.md`

## Validação

- Validar a sintaxe TOML.
- Reiniciar a sessão e executar `docker compose config`.
- Confirmar que o perfil continua bloqueando arquivos de ambiente.
