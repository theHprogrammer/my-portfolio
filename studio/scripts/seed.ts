import { getCliClient } from 'sanity/cli'
import { defaultPortfolioContent } from '../../src/content/defaultPortfolioContent'

type PlainObject = Record<string, unknown>

const apiVersion = '2026-08-15'
const client = getCliClient({ apiVersion })

const sanitizeKey = (value: string) =>
  value.replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 96)

const serializeValue = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map((item, index) => {
      const serialized = serializeValue(item)

      if (
        serialized &&
        typeof serialized === 'object' &&
        !Array.isArray(serialized)
      ) {
        const object = serialized as PlainObject
        const sourceKey =
          typeof object.id === 'string' ? object.id : `item-${index}`
        const { _key: ignoredKey, id: ignoredId, ...fields } = object
        return { _key: sanitizeKey(sourceKey), ...fields }
      }

      return serialized
    })
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as PlainObject).map(([key, nestedValue]) => [
        key,
        serializeValue(nestedValue),
      ]),
    )
  }

  return value
}

const withoutId = <T extends { id: string }>(value: T) => {
  const { id, ...fields } = value
  return { id, fields: serializeValue(fields) as PlainObject }
}

const transaction = client.transaction()

transaction.createOrReplace({
  _id: 'portfolioSettings',
  _type: 'portfolioSettings',
  ...(serializeValue(defaultPortfolioContent.settings) as PlainObject),
})

const collections = [
  ['academicEntry', defaultPortfolioContent.academicEntries],
  ['professionalEntry', defaultPortfolioContent.professionalEntries],
  ['skillGroup', defaultPortfolioContent.skillGroups],
  ['contactLink', defaultPortfolioContent.contactLinks],
  ['iconCredit', defaultPortfolioContent.iconCredits],
  ['project', defaultPortfolioContent.projects],
  ['certification', defaultPortfolioContent.certifications],
] as const

for (const [type, documents] of collections) {
  for (const document of documents) {
    const { id, fields } = withoutId(document)
    transaction.createOrReplace({ _id: id, _type: type, ...fields })
  }
}

const seed = async () => {
  const result = await transaction.commit()
  console.log(`Conteúdo importado. Transaction ID: ${result.transactionId}`)
}

seed().catch((error: unknown) => {
  console.error('Não foi possível importar o conteúdo.', error)
  process.exitCode = 1
})
