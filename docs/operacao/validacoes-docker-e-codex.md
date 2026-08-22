# Validações Docker e Codex

O fluxo canônico deste repositório é Docker-first. O sandbox do Codex **não consegue** falar com o
daemon rootless em `/run/user/1000/docker.sock`, mesmo com allowlist de Unix socket no
`.codex/config.toml` ou com aprovação “elevated” que mantém o sandbox ativo.

Aprovar um comando `docker compose` **não** libera o socket. Só há dois caminhos confiáveis:

1. Rodar as validações no terminal do host (recomendado).
2. Usar **Full access** / `danger-full-access` na sessão do Codex só enquanto as validações Docker
   forem necessárias.

## Pré-requisitos no host

Confirme o daemon rootless e o `DOCKER_HOST` antes de validar:

```bash
echo "$DOCKER_HOST"
# esperado: unix:///run/user/1000/docker.sock

test -S /run/user/1000/docker.sock && echo "socket ok"
docker version
docker compose version
```

Se o socket estiver ausente, inicie o serviço do usuário e abra um novo terminal:

```bash
systemctl --user start docker
```

Os comandos abaixo partem da raiz do repositório.

## Validações no terminal (fora do Codex)

### Aplicação

```bash
docker compose run --rm app npm run format:check
docker compose run --rm app npm run lint
docker compose run --rm app npx tsc --noEmit
docker compose run --rm -e CI=true app npm test -- --watchAll=false
docker compose run --rm app npm run build
```

### Studio

```bash
docker compose run --rm --user root app sh -lc 'cd studio && npm ci && npx tsc --noEmit && npm run build'
```

### Documentação, agents e workflows

```bash
git diff --check
docker compose run --rm app npx --yes harness-score@1.6.0 . --min-level 3
```

Use o menor conjunto suficiente para a mudança. A lista completa também está em
[Configuração local](./configuracao-local.md) e em `.codex/project.json`.

## Full access no Codex

Full access desliga o sandbox da sessão (`danger-full-access`). O agente passa a executar comandos
com o mesmo acesso do seu usuário no host, inclusive ao socket Docker. Use só pelo tempo das
validações e volte ao perfil restrito depois.

### Na TUI do Codex CLI

1. Abra a sessão na raiz do repositório (`codex` ou `codex -p sol`).
2. Digite `/permissions`.
3. Escolha o perfil de **Full access** / `:danger-full-access`.
4. Peça as validações Docker necessárias.
5. Volte em `/permissions` para o perfil de workspace (ou encerre a sessão).

Alternativa para uma sessão já iniciada em Full access:

```bash
codex --sandbox danger-full-access
```

### No app / IDE do Codex

1. Abra o seletor de permissões da sessão (comando `/permissions` ou o controle de sandbox /
   approvals da UI).
2. Selecione **Full access** (não basta “Allow” nem elevated que mantenha sandbox).
3. Confirme o aviso de risco.
4. Rode as validações; em seguida restaure o perfil restrito.

Se o Codex pedir aprovação de um `docker compose` e a opção disponível for só “Allow” com sandbox
ativo, a execução ainda falhará no socket. Nesse caso use Full access ou o terminal do host.

## O que a allowlist do projeto faz (e não faz)

O `.codex/config.toml` declara o socket rootless na allowlist do `network_proxy` e do perfil
`portfolio`. Isso documenta a intenção e pode ser útil para outras integrações locais, mas **não**
torna `docker compose run` utilizável dentro do sandbox atual do Codex com Docker rootless via
Unix socket.

Regras pessoais em `~/.codex/rules/` também não liberam o socket: um `allow` para `docker compose`
apenas pula o prompt e mantém o comando sandboxed.

## Referências

- Configuração e hooks do projeto: [`.codex/README.md`](../../.codex/README.md)
- Ambiente local e demais comandos: [Configuração local](./configuracao-local.md)
- Critérios automatizados: [Automação e segurança](../qualidade/automacao-e-seguranca.md)
