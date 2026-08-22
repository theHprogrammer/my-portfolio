---
name: review-portfolio
description: Revisa código, diffs, branches ou pull requests deste portfólio com foco em defeitos concretos de React, TypeScript, acessibilidade, segurança, conteúdo, Sanity, performance e testes. Usar quando o usuário pedir code review, análise de riscos ou revisão antes de uma PR.
---

# Revisar o portfólio

Executar uma revisão técnica somente leitura. Não corrigir achados sem pedido explícito.

## Preparar o contexto

1. Ler `AGENTS.md` e a documentação aplicável.
2. Resolver o alvo informado. Sem alvo, revisar mudanças locais rastreadas e não rastreadas.
3. Inspecionar `git status`, diff e contexto imediato dos trechos alterados.
4. Identificar comportamento anterior, consumidores, testes próximos e mudanças do usuário fora do escopo.

## Prioridades

1. Correção: rotas, estados, conteúdo, fallbacks, erros de runtime e regressões.
2. Segurança: URLs externas, dados do CMS, secrets no bundle, scripts e permissões de workflows.
3. Acessibilidade: semântica, teclado, foco, nomes acessíveis, contraste e movimento reduzido.
4. React/TypeScript: estado duplicado, efeitos, cleanup, tipos inseguros e referências instáveis.
5. Sanity: compatibilidade entre schema, consulta, tipos e fallback local.
6. Performance: JavaScript inicial, imagens, renderizações, chamadas remotas e estabilidade visual.
7. Testes e automação: cenários relevantes, assertions úteis, isolamento e CI coerente.

Confirmar cada achado no código. Não registrar preferência estilística como defeito nem recomendar
migração do CRA ou refatoração fora do escopo sem relação causal com o problema.

## Saída

Ordenar achados por severidade (`Crítico`, `Alto`, `Médio`, `Baixo`) e informar arquivo/linha,
modo de falha, impacto, evidência e menor direção de correção. Depois listar dúvidas, validações e
risco residual. Se não houver achados, declarar diretamente e registrar checks não executados.
