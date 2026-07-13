'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: {
    // For singleton types, filter out actions that are not edit/publish/discard
    actions: (input, context) => {
      const singletonTypes = new Set(['siteSettings', 'schoolContact', 'pageHome', 'pageProfil', 'accessSettings'])
      if (singletonTypes.has(context.schemaType)) {
        return input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
      }
      return input
    },
    // Filter out singleton types from new document templates
    newDocumentOptions: (prev) => {
      const singletonTypes = new Set(['siteSettings', 'schoolContact', 'pageHome', 'pageProfil', 'accessSettings'])
      return prev.filter((item) => !singletonTypes.has(item.templateId))
    }
  },
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
