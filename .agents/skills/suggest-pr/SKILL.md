---
name: suggest-pr
description: Gerar uma sugestão de título e uma descrição Markdown completa para uma pull request a partir do diff e dos commits da branch atual. Usar quando o usuário pedir texto, título, corpo, resumo ou descrição de PR, especialmente quando a criação automática da pull request não estiver disponível. Não criar PR, commit, push ou modificar arquivos.
---

# Sugerir pull request

## Objetivo

Produzir texto pronto para copiar no GitHub, fiel ao conteúdo real da branch e sem executar ações de publicação.

## Fluxo

1. Executar `git status -sb` e identificar a branch atual.
2. Usar a base informada pelo usuário. Sem base explícita, preferir a branch padrão remota; usar `main` ou `master` somente como fallback verificável.
3. Inspecionar `git log <base>..HEAD`, `git diff --stat <base>...HEAD`, `git diff --name-status <base>...HEAD` e os trechos relevantes de `git diff <base>...HEAD`.
4. Basear a sugestão apenas nos commits da branch. Se houver mudanças locais não commitadas, avisar fora do título e da descrição que elas ficaram fora da análise, salvo pedido explícito para incluí-las.
5. Identificar contexto, motivação, mudanças, impacto, validações comprovadas e limitações conhecidas.
6. Entregar exatamente um título e uma descrição completa. Não criar arquivos, commits, pushes ou pull requests.

## Regras de conteúdo

- Escrever no idioma definido pelo `AGENTS.md`; neste projeto, português do Brasil.
- Criar um título específico, direto, sem ponto final e que resuma o conjunto do diff.
- Estruturar a descrição com as seções `Contexto`, `O que foi alterado`, `Impacto`, `Validações` e `Limitações conhecidas` quando houver conteúdo para elas.
- Explicar a causa raiz quando a branch corrigir um problema.
- Mencionar comandos de validação somente quando houver evidência de que foram executados. Caso contrário, declarar `Não executado` ou omitir a afirmação de sucesso.
- Não inventar números, resultados, links, issues, riscos ou decisões ausentes no repositório ou na conversa.
- Não incluir autoria, coautoria, assinatura, trailers ou referências à IA.
- Não expor segredos, valores de ambiente ou dados privados encontrados no diff.
- Evitar repetir a mesma mudança em várias seções.
- Nunca inserir avisos operacionais sobre a análise dentro da descrição destinada ao GitHub.

## Formato da resposta

Usar este formato. Incluir `Aviso` somente quando houver informação operacional indispensável:

```text
[Aviso:
<aviso fora do conteúdo da PR>]

Título:
<título sugerido>

Descrição:
<descrição completa em Markdown>
```

Se não houver diferença entre a base e `HEAD`, informar que não existe conteúdo para uma pull request e não gerar texto fictício.
