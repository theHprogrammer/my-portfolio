# Artefatos de especificação

## Feature

`spec.md` deve registrar problema, objetivos, comportamento atual, requisitos, critérios observáveis,
fora de escopo, dependências, riscos e dúvidas. Use cenários `QUANDO/ENTÃO` somente quando deixarem o
comportamento mais verificável.

Crie `design.md` apenas para decisões arquiteturais, fluxo de dados, contratos, alternativas ou
migração. Crie `tasks.md` quando houver mais de cinco passos, dependências entre etapas ou gates que
precisem ser retomados separadamente.

Cada tarefa deve informar objetivo, arquivos prováveis, dependências e condição de conclusão. Não
prescreva linhas ou abstrações antes de inspecionar o código.

## Quick mode

Use `.specs/quick/NNN-slug/TASK.md` com contexto, resultado esperado, arquivos e validação. Após a
execução, crie `SUMMARY.md` com mudanças, evidências, desvios e riscos. Numere a partir do maior
diretório existente; não renumere trabalhos anteriores.
