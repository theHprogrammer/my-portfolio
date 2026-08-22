# Automação do repositório

Os workflows substituem pipelines externas e não executam deploy:

- `workflows/ci.yml`: exige harness L3, instala com `npm ci`, verifica formatação, lint e TypeScript,
  executa testes e gera os builds da aplicação e do Sanity Studio;
- `workflows/security.yml`: executa CodeQL, revisa dependências adicionadas em pull requests e faz
  uma varredura semanal;
- `dependabot.yml`: propõe atualizações separadas para aplicação, Studio e GitHub Actions.

As actions são fixadas por SHA para reduzir risco de supply chain. O comentário ao lado do SHA
registra a versão correspondente; atualizações devem manter os dois valores alinhados.

A Vercel continua responsável pelos previews e pelo deploy conectado ao GitHub. Nenhum workflow
deste diretório possui credenciais de produção ou permissão para publicar o site ou o Studio.
