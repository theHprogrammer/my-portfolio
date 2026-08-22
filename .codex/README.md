# Workflows do portfólio no Codex

Esta pasta mantém apenas configuração compartilhável do projeto:

- `config.toml`: perfil de filesystem do workspace e ativação de hooks;
- `hooks.json`: carrega `project.json` no início ou na retomada de uma sessão;
- `project.json`: aponta para as fontes de verdade e comandos reproduzíveis.

O Codex só aplica a configuração e o hook locais depois que o repositório é marcado como confiável.
O hook executa somente a leitura de `project.json`; ele prefixa o documento como texto para que o
Codex o trate como contexto adicional, sem confundi-lo com uma resposta JSON estruturada de hook.
Ele não envia telemetria nem altera arquivos.

Após qualquer alteração em `hooks.json`, revise e aprove o novo hash com `/hooks`. A execução fica
desabilitada até essa confirmação de confiança.

O perfil permite somente o socket rootless do Docker em `/run/user/1000/docker.sock`, necessário
para executar as validações Docker-first. Outros sockets Unix permanecem bloqueados. Alterações no
perfil entram em vigor em uma nova sessão do Codex.

O diretório `.git/` recebe escrita dentro deste workspace para permitir operações solicitadas como
pull, criação de branches e commits. Essa exceção não libera outros repositórios nem remove as
regras do projeto contra reset destrutivo, reescrita de histórico ou push sem autorização.

As skills versionadas ficam em `.agents/skills/`. Configuração pessoal, credenciais, conexões e
permissões globais não pertencem a este diretório.
