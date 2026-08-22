---
name: spec-driven
description: Especifica, planeja, implementa e valida mudanças neste portfólio com artefatos proporcionais à complexidade. Usar para features, mudanças multiarquivo, quick fixes, retomada de trabalho ou quando o usuário pedir desenvolvimento orientado a especificação.
---

# Desenvolvimento orientado a especificação

Conduzir a mudança em fases rastreáveis sem transformar tarefas pequenas em burocracia.

```text
ESPECIFICAR -> DESENHAR* -> TAREFAS* -> EXECUTAR -> VALIDAR
```

## Dimensionar o trabalho

| Escopo                                   | Tratamento                                                           |
| ---------------------------------------- | -------------------------------------------------------------------- |
| Pequeno, localizado e até 3 arquivos     | Quick mode em `.specs/quick/NNN-slug/`.                              |
| Médio, com fluxo claro                   | Spec breve; design e tarefas podem ficar inline.                     |
| Grande, multiarea ou com contratos novos | `spec.md`, `design.md` e `tasks.md` em `.specs/features/<feature>/`. |
| Ambíguo ou de alto risco                 | Resolver gray areas e definir gates antes da execução.               |

Não conte arquivos de teste ou documentação de apoio como complexidade por si só. Se a execução
revelar dependências não triviais, amplie os artefatos antes de continuar.

## Contexto obrigatório

1. Ler `AGENTS.md`, `.specs/project/PROJECT.md` e o `STATE.md` quando existir.
2. Inspecionar o fluxo atual, consumidores e testes próximos.
3. Separar fato do repositório, requisito explícito, inferência e lacuna.
4. Preservar React 18, CRA 5, TypeScript estrito, fallback do Sanity e execução Docker-first.

## Referências por fase

- Para criar artefatos e critérios, ler `references/artifacts.md`.
- Antes de implementar ou validar, ler `references/execution.md`.
- Ao pausar, retomar ou registrar decisão durável, ler `references/state.md`.

Manter artefatos focados no comportamento solicitado. Eles não autorizam dependências, ações
externas, commit, push, seed ou deploy. Ao concluir, registrar evidências reais de validação e
riscos restantes; não declarar sucesso de comando que não foi executado.
