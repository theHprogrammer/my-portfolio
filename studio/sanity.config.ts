import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { portfolioStructure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'My Portfolio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'r8m8smdo',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool({ structure: portfolioStructure }), visionTool()],
  schema: { types: schemaTypes },
})
