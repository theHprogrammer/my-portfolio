---
name: optimize-portfolio
description: Otimizar este portfólio React com mudanças pequenas, mensuráveis e compatíveis com a arquitetura existente. Usar em tarefas de performance, Web Vitals, tamanho de bundle, carregamento, renderizações React, animações, imagens, acessibilidade, SEO técnico, consumo de recursos ou manutenção orientada por métricas. Não usar para alterações puramente editoriais sem objetivo de otimização.
---

# Otimizar o portfólio

## Objetivo

Melhorar uma métrica ou problema observável sem ampliar o escopo. Preservar comportamento e identidade visual, salvo instrução contrária.

## Contexto

- Seguir primeiro o `AGENTS.md` da raiz.
- Trabalhar com React 18, TypeScript 4.9 estrito, Create React App 5, React Router 6, Tailwind CSS 3 e npm.
- Reutilizar as dependências e os padrões existentes.

## Fluxo

1. Definir o resultado esperado e a evidência atual: métrica, perfil, tamanho, teste, auditoria ou problema reproduzível.
2. Inspecionar apenas o caminho afetado. Usar `rg` e intervalos curtos de arquivo; evitar carregar lockfiles e artefatos gerados.
3. Identificar a causa antes de propor a mudança. Separar sintomas de gargalos relevantes.
4. Implementar a menor solução completa. Não misturar refatorações ou alterações visuais não solicitadas.
5. Executar as validações proporcionais ao risco e comparar com a linha de base quando houver métrica.
6. Entregar um resumo curto com impacto, arquivos, comandos, limitações e riscos.

## Prioridades técnicas

- Reduzir JavaScript inicial, dependências duplicadas, recursos bloqueantes e downloads desnecessários.
- Evitar estado derivado, efeitos redundantes e renderizações provocadas por referências instáveis.
- Aplicar divisão de código somente em rotas ou módulos cujo custo justifique uma requisição adicional.
- Otimizar imagens com dimensões explícitas, formatos adequados e carregamento coerente com sua posição na página.
- Manter animações leves e oferecer alternativa por `prefers-reduced-motion`.
- Preservar semântica, teclado, foco, contraste e nomes acessíveis.
- Tratar SEO de forma compatível com uma SPA; registrar limitações de renderização no cliente quando forem relevantes.

## Restrições

- Não usar `useMemo`, `useCallback`, `React.memo` ou lazy loading sem uma hipótese clara de benefício.
- Não adicionar bibliotecas, migrar do Create React App ou trocar a estratégia de estilos sem justificativa e autorização compatível com a tarefa.
- Não sacrificar legibilidade, acessibilidade ou correção por uma micro-otimização.
- Não afirmar ganho sem medição; quando medir não for viável, declarar a conclusão como hipótese.

## Validação mínima

- Executar `npx tsc --noEmit` para alterações TypeScript.
- Executar `npm test -- --watchAll=false` quando houver comportamento testável.
- Executar `npm run build` para impacto em produção ou bundle.
- Registrar falhas preexistentes separadamente das regressões introduzidas.
