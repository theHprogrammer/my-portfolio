# Workflows do portfólio no Codex

Esta pasta mantém apenas configuração compartilhável do projeto:

- `config.toml`: perfil de filesystem do workspace e ativação de hooks;
- `hooks.json`: carrega `project.json` no início ou na retomada de uma sessão;
- `project.json`: aponta para as fontes de verdade e comandos reproduzíveis.

O Codex só aplica a configuração e o hook locais depois que o repositório é marcado como confiável.
O hook executa somente a leitura de `project.json`; ele não envia telemetria nem altera arquivos.

As skills versionadas ficam em `.agents/skills/`. Configuração pessoal, credenciais, conexões e
permissões globais não pertencem a este diretório.
