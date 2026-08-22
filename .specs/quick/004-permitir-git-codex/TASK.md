# Permitir operações Git ao Codex neste projeto

## Contexto

O perfil `portfolio` herda `:workspace`, que mantém `.git/` somente leitura. Operações autorizadas
como stash, pull, criação de branch e commit falham ao criar `.git/index.lock`, mesmo quando o
comando recebe elevação explícita.

## Resultado esperado

- Permitir escrita somente em `.git/` dentro dos roots deste workspace.
- Manter `.codex/` e arquivos de ambiente protegidos pelas regras atuais.
- Documentar que as regras do projeto para operações destrutivas e publicação continuam vigentes.

## Arquivos

- `.codex/config.toml`
- `.codex/README.md`

## Validação

- Validar a sintaxe TOML.
- Reiniciar a sessão e executar `git update-index --refresh`.
- Confirmar que arquivos de ambiente continuam bloqueados.
- Executar `git diff --check` e `harness-score` conforme as regras do repositório.
