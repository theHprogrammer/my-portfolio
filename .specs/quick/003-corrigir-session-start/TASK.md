# Corrigir o hook SessionStart

## Contexto

O hook `SessionStart` lê `.codex/project.json` e imprime o documento como JSON puro. O Codex tenta
interpretar esse conteúdo como uma resposta estruturada do hook, mas as propriedades do documento
não pertencem ao schema de saída e a execução aparece como `failed` no início de cada sessão.

## Resultado esperado

- O hook deve continuar carregando o conteúdo de `.codex/project.json` no início e na retomada.
- A saída deve ser texto de contexto, não uma resposta JSON estruturada.
- Falhas reais de resolução ou leitura do arquivo devem continuar produzindo código diferente de
  zero.

## Arquivos

- `.codex/hooks.json`
- `.codex/README.md`

## Validação

- Validar a sintaxe dos arquivos JSON afetados.
- Executar o comando do hook com uma entrada `SessionStart` representativa.
- Confirmar código zero, saída textual e conteúdo JSON preservado após o prefixo.
- Executar `git diff --check` e `harness-score` conforme as regras do repositório.
