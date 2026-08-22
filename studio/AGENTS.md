---
description: Regras específicas para alterações no Sanity Studio do portfólio.
paths:
  - 'studio/**'
---

# Sanity Studio

- Tratar `studio/` como aplicação independente com React 19, TypeScript 5.9 e Sanity 6.
- Preservar compatibilidade entre schemas, consulta em `src/content/sanityClient.ts`, tipos e fallback local.
- Manter `projectId` e dataset públicos; nunca versionar tokens ou credenciais do usuário.
- Validar links e entradas editoriais no schema sem depender apenas da apresentação da SPA.
- Não executar `npm run deploy` nem `npm run seed` sem autorização explícita.
- Após mudanças, executar TypeScript e build conforme `docs/operacao/configuracao-local.md`.
