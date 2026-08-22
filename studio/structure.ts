import type { StructureResolver } from 'sanity/structure'

const collectionTypes = [
  'academicEntry',
  'professionalEntry',
  'skillGroup',
  'project',
  'certification',
  'contactLink',
  'iconCredit',
]

export const portfolioStructure: StructureResolver = (S) =>
  S.list()
    .title('Conteúdo do portfólio')
    .items([
      S.listItem()
        .title('Textos gerais e páginas')
        .schemaType('portfolioSettings')
        .child(
          S.document()
            .schemaType('portfolioSettings')
            .documentId('portfolioSettings'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId()
        return id ? collectionTypes.includes(id) : false
      }),
    ])
