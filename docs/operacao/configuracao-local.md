# Configuração local

## Requisitos

O fluxo local é Docker-first. Use Docker com o plugin Compose; não instale dependências do projeto
globalmente nem execute `npm run eject`.

```bash
docker compose up --build
docker compose down
```

A SPA fica disponível em `http://localhost:3000`. O código é montado em `/app` e as dependências da
raiz permanecem no volume `node_modules`.

## Conteúdo e Studio

Copie `.env.example` para `.env.local` e configure somente identificadores públicos:

```dotenv
REACT_APP_SANITY_PROJECT_ID=r8m8smdo
REACT_APP_SANITY_DATASET=production
```

Nunca use uma variável `REACT_APP_*` para tokens. Para preparar e iniciar o Studio:

```bash
docker compose run --rm --user root app sh -lc 'cd studio && npm ci'
docker compose run --rm --user root -p 3333:3333 app sh -lc 'cd studio && npm run dev -- --host 0.0.0.0'
```

O seed usa autenticação pessoal do Sanity e só deve ser executado mediante necessidade explícita:

```bash
docker compose run --rm app sh -lc 'cd studio && npm run seed'
```

O Studio local fica disponível em `http://localhost:3333`; a versão publicada está em
[thehprogrammer-portfolio.sanity.studio](https://thehprogrammer-portfolio.sanity.studio/).

## Validação

```bash
docker compose run --rm app npm run format:check
docker compose run --rm app npm run lint
docker compose run --rm app npx tsc --noEmit
docker compose run --rm -e CI=true app npm test -- --watchAll=false
docker compose run --rm app npm run build
docker compose run --rm --user root app sh -lc 'cd studio && npm ci && npx tsc --noEmit && npm run build'
```

Para aplicar correções mecânicas:

```bash
docker compose run --rm --user root app npm run format
docker compose run --rm --user root app npm run lint:fix
```

O Husky configura `.husky/pre-commit` durante `npm install`/`npm ci` quando `.git` está disponível.
O hook executa `lint-staged` como root dentro do Docker Compose, por causa das permissões do bind
mount, e limita correções aos arquivos staged.
A imagem inclui o cliente Git porque Husky e lint-staged precisam ler o índice montado em `/app`.

Após clonar ou reconstruir a imagem, ative o hook no clone local:

```bash
docker compose run --rm --user root app npm run prepare
```

Auditoria e reconstrução da imagem:

```bash
docker compose run --rm app npm audit
docker compose build
```

Use o menor conjunto suficiente para a mudança. O CRA 5 possui vulnerabilidades transitivas
conhecidas sem correção compatível; não execute `npm audit fix --force`. A migração do toolchain é
um trabalho separado.
