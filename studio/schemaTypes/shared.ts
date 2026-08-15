import {defineArrayMember, defineField, defineType} from 'sanity'
import {validateLink} from './linkValidation'

export const pageHeader = defineType({
  name: 'pageHeader',
  title: 'Cabeçalho de página',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Chamada curta', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
  ],
})

export const link = defineType({
  name: 'portfolioLink',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Texto', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'href',
      title: 'Destino',
      type: 'string',
      description: 'Aceita uma rota interna, URL, mailto: ou tel:.',
      validation: (Rule) => Rule.required().custom(validateLink),
    }),
  ],
})

export const fact = defineType({
  name: 'fact',
  title: 'Informação',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Rótulo', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'value', title: 'Valor', type: 'string', validation: (Rule) => Rule.required()}),
  ],
  preview: {select: {title: 'label', subtitle: 'value'}},
})

export const focusArea = defineType({
  name: 'focusArea',
  title: 'Área de atuação',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'iconKey',
      title: 'Ícone',
      type: 'string',
      options: {list: [{title: 'Inteligência', value: 'brain'}, {title: 'Código', value: 'code'}, {title: 'Camadas', value: 'layers'}]},
      initialValue: 'layers',
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'description'}},
})

export const aboutTab = defineType({
  name: 'aboutTab',
  title: 'Aba sobre mim',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'paragraphs',
      title: 'Parágrafos',
      type: 'array',
      of: [defineArrayMember({type: 'text', rows: 4})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({name: 'facts', title: 'Informações em destaque', type: 'array', of: [defineArrayMember({type: 'fact'})]}),
  ],
  preview: {select: {title: 'title'}},
})

export const emptyState = defineType({
  name: 'emptyState',
  title: 'Estado sem registros',
  type: 'object',
  fields: [
    defineField({name: 'badge', title: 'Status', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'action', title: 'Ação', type: 'portfolioLink', validation: (Rule) => Rule.required()}),
  ],
})

export const sharedTypes = [pageHeader, link, fact, focusArea, aboutTab, emptyState]
