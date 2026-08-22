# Priorizar o README da raiz no GitHub

## Contexto

O GitHub prioriza `.github/README.md` em relação ao `README.md` da raiz ao montar a página inicial
do repositório. A documentação específica de automação está ocultando a apresentação principal do
portfólio.

## Resultado esperado

- O `README.md` da raiz deve ser o README exibido na página inicial do repositório.
- A documentação de automação do GitHub deve continuar disponível em um caminho explícito.
- Referências internas devem apontar para o novo caminho.

## Arquivos

- `.github/README.md` (renomeado para `.github/AUTOMATION.md`)
- `README.md`
- `.specs/project/PROJECT.md`

## Validação

- Confirmar que não existe mais `.github/README.md`.
- Verificar links locais e referências ao caminho antigo.
- Executar `git diff --check` e `harness-score` conforme as regras do repositório.
