import { collectionTypes } from './collections'
import { portfolioSettings } from './portfolioSettings'
import { sharedTypes } from './shared'

export const schemaTypes = [
  ...sharedTypes,
  portfolioSettings,
  ...collectionTypes,
]
