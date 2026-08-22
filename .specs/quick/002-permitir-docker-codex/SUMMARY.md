# Resumo: permitir Docker ao Codex neste projeto

## Mudanças

- Ativado o proxy de rede do perfil `portfolio`.
- Permitido exclusivamente o socket Unix `/run/user/1000/docker.sock`.
- Documentada a permissão e a necessidade de reiniciar a sessão.

## Evidências

- `.codex/config.toml` foi carregado com sucesso pelo parser TOML da biblioteca padrão do Python.
- `docker compose config --quiet` foi concluído sem erros.
- `git diff --check` foi concluído sem erros.

## Desvios e riscos

- A sessão atual ainda nega o socket Docker, inclusive após elevação explícita; a efetividade da
  permissão precisa ser confirmada em outra sessão confiável.
- O socket Docker concede controle elevado sobre os containers locais; a regra foi limitada ao
  caminho exato em vez de liberar todos os sockets Unix.
