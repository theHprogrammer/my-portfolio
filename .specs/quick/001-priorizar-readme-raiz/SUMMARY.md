# Resumo: priorizar o README da raiz no GitHub

## Mudanças

- Renomeado `.github/README.md` para `.github/AUTOMATION.md`, preservando o conteúdo.
- Atualizadas as referências no `README.md` da raiz e em `.specs/project/PROJECT.md`.

## Evidências

- `.github/README.md` não existe mais e `.github/AUTOMATION.md` está presente.
- Não há referências ativas ao caminho antigo fora deste registro histórico.
- O conteúdo do arquivo renomeado coincide com o documento original em `origin/main`.
- `git diff --check` concluído sem erros.

## Desvios e riscos

- `format:check` e `harness-score` não iniciaram porque o sandbox negou acesso a
  `/run/user/1000/docker.sock`, inclusive após elevação explícita.
