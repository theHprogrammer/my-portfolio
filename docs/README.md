# Documentação do My Portfolio

Os documentos usam nomes em português, minúsculos e em `kebab-case`. `README.md` é reservado para
índices. Cada fato deve ter uma fonte principal; outros documentos devem resumir e apontar para ela.

## Categorias

| Categoria                        | Escopo                                                                              |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| [`arquitetura/`](./arquitetura/) | Estrutura da SPA, fluxo de conteúdo e limites entre aplicação, Sanity e hospedagem. |
| [`operacao/`](./operacao/)       | Ambiente local, comandos, configuração e diagnóstico.                               |
| [`processos/`](./processos/)     | Fluxos de especificação, implementação, revisão e entrega.                          |
| [`qualidade/`](./qualidade/)     | CI, segurança de dependências e critérios automatizados.                            |

## Documentos canônicos

- [Visão geral da arquitetura](./arquitetura/visao-geral.md)
- [Configuração local](./operacao/configuracao-local.md)
- [Desenvolvimento orientado a especificação](./processos/desenvolvimento-orientado-a-especificacao.md)
- [Automação e segurança](./qualidade/automacao-e-seguranca.md)

O `README.md` da raiz continua sendo a apresentação do produto e o `AGENTS.md` permanece como fonte
obrigatória para regras de execução.
