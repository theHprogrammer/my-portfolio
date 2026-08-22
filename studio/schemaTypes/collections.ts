import { defineArrayMember, defineField, defineType } from 'sanity'
import { validateLink } from './linkValidation'

const orderField = defineField({
  name: 'order',
  title: 'Ordem de exibição',
  type: 'number',
  initialValue: 100,
  validation: (Rule) => Rule.required().integer().min(0),
})

const timelineFields = [
  defineField({
    name: 'period',
    title: 'Período',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'title',
    title: 'Título',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'subtitle',
    title: 'Instituição ou organização',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({ name: 'location', title: 'Localização', type: 'string' }),
  defineField({
    name: 'descriptions',
    title: 'Descrição',
    type: 'array',
    of: [defineArrayMember({ type: 'text', rows: 3 })],
  }),
  orderField,
]

export const academicEntry = defineType({
  name: 'academicEntry',
  title: 'Formação acadêmica',
  type: 'document',
  fields: [
    ...timelineFields,
    defineField({
      name: 'iconKey',
      title: 'Ícone',
      type: 'string',
      options: {
        list: [
          { title: 'Universidade', value: 'university' },
          { title: 'Escola', value: 'school' },
        ],
      },
      initialValue: 'university',
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'period' } },
})

export const professionalEntry = defineType({
  name: 'professionalEntry',
  title: 'Experiência profissional',
  type: 'document',
  fields: [...timelineFields],
  preview: { select: { title: 'title', subtitle: 'period' } },
})

export const skillGroup = defineType({
  name: 'skillGroup',
  title: 'Grupo de habilidades',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Habilidades',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'skill',
          fields: [
            defineField({
              name: 'name',
              title: 'Nome',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: 'level', title: 'Nível', type: 'string' }),
            defineField({
              name: 'iconKey',
              title: 'Identificador do ícone',
              type: 'string',
              description:
                'Opcional. Quando não reconhecido, o site usa as iniciais.',
            }),
          ],
          preview: { select: { title: 'name', subtitle: 'level' } },
        }),
      ],
    }),
    orderField,
  ],
  preview: { select: { title: 'title' } },
})

export const contactLink = defineType({
  name: 'contactLink',
  title: 'Canal de contato',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link',
      type: 'string',
      description: 'Aceita URL, mailto: ou tel:.',
      validation: (Rule) => Rule.required().custom(validateLink),
    }),
    defineField({
      name: 'iconKey',
      title: 'Identificador do ícone local',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Ícone personalizado',
      type: 'image',
      description: 'Se enviado, substitui o ícone local.',
    }),
    orderField,
  ],
  preview: { select: { title: 'title', subtitle: 'url', media: 'image' } },
})

export const iconCredit = defineType({
  name: 'iconCredit',
  title: 'Crédito de ícone',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Atribuição',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link da fonte',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    }),
    orderField,
  ],
  preview: { select: { title: 'label', subtitle: 'url' } },
})

export const project = defineType({
  name: 'project',
  title: 'Projeto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Resumo',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologias',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'repositoryUrl',
      title: 'Repositório',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'demoUrl',
      title: 'Demonstração',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
    }),
    orderField,
  ],
  preview: { select: { title: 'title', subtitle: 'summary', media: 'image' } },
})

export const certification = defineType({
  name: 'certification',
  title: 'Certificação',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Emissor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'date', title: 'Data ou período', type: 'string' }),
    defineField({
      name: 'credentialUrl',
      title: 'Link da credencial',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
    }),
    orderField,
  ],
  preview: { select: { title: 'title', subtitle: 'issuer', media: 'image' } },
})

export const collectionTypes = [
  academicEntry,
  professionalEntry,
  skillGroup,
  contactLink,
  iconCredit,
  project,
  certification,
]
