# Desenvolvimento orientado a especificação

O fluxo registra decisões somente quando isso reduz ambiguidade ou facilita retomada:

```text
ESPECIFICAR -> DESENHAR* -> TAREFAS* -> EXECUTAR -> VALIDAR
```

Especificar, executar e validar são obrigatórios. Design e lista formal de tarefas são adaptativos.

| Escopo                                 | Artefatos                                                           |
| -------------------------------------- | ------------------------------------------------------------------- |
| Correção pequena e localizada          | `.specs/quick/NNN-slug/TASK.md` e `SUMMARY.md`                      |
| Mudança média com fluxo claro          | `spec.md`, com design e tarefas breves no mesmo documento           |
| Feature ampla, ambígua ou multiarquivo | `spec.md`, `design.md` e `tasks.md` em `.specs/features/<feature>/` |

Antes de iniciar ou retomar trabalho, consulte `.specs/project/PROJECT.md` e
`.specs/project/STATE.md`, quando existir. Artefatos devem registrar requisitos, fora de escopo,
critérios verificáveis, decisões relevantes e riscos; eles não substituem testes nem autorização
para commit, push ou deploy.

A skill `$spec-driven` contém os templates e o roteamento detalhado. Após a execução, use
`$validate-portfolio` para escolher checks proporcionais e `$review-portfolio` quando uma revisão
somente leitura for solicitada.
