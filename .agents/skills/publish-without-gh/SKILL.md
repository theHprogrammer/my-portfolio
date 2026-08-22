---
name: publish-without-gh
description: Publicar mudanças locais deste repositório quando o GitHub CLI (`gh`) não estiver disponível, usando Git via SSH para branch, commit e push e a integração GitHub para criar um draft PR. Usar quando o usuário pedir commit, push ou PR e autorizar explicitamente continuar sem `gh`. Preservar o escopo e a identidade Git configurada, sem atribuir autoria ou coautoria à IA.
---

# Publicar sem GitHub CLI

## Objetivo

Publicar mudanças com rastreabilidade e autoria humana usando apenas o Git local, o remoto SSH existente e a integração GitHub.

## Fluxo

1. Confirmar que o usuário autorizou prosseguir sem `gh`.
2. Executar `git status -sb`, revisar o diff e separar mudanças não relacionadas.
3. Confirmar que `user.name` e `user.email` já estão configurados. Não alterar essa identidade.
4. Aplicar `$validate-portfolio` antes do commit e relatar qualquer falha.
5. Criar uma branch `agent/<descricao>` ao partir da branch padrão, salvo instrução explícita para usar outra branch.
6. Adicionar somente caminhos pertencentes ao escopo e revisar `git diff --cached`.
7. Criar commits pequenos e lógicos com mensagens breves. Não incluir trailers `Co-authored-by`, referências ao Codex ou identidade de IA.
8. Enviar com `git push -u origin <branch>`. Solicitar elevação se o sandbox bloquear rede ou SSH.
9. Criar um draft PR pela integração GitHub, usando a branch padrão do remoto como base.
10. Relatar branch, commits, push, PR e validações executadas.

## Segurança

- Nunca usar `--force`, reescrever histórico ou alterar commits existentes sem autorização explícita.
- Nunca publicar segredos, credenciais, artefatos gerados ou mudanças fora do escopo.
- Nunca alterar `GIT_AUTHOR_*`, `GIT_COMMITTER_*`, `user.name` ou `user.email` para representar a IA.
- Nunca adicionar autoria, coautoria, assinatura ou trailer do agente à mensagem do commit ou ao PR.
- Não criar commits pela integração GitHub quando isso puder substituir a identidade configurada localmente.
- Não enviar diretamente para a branch padrão sem autorização explícita; preferir branch dedicada e draft PR.

## Bloqueios

Se o push via SSH falhar por autenticação, parar e informar o erro real. Se somente a criação do PR falhar, preservar a branch enviada e fornecer o link de comparação ou os dados necessários para concluir manualmente.
