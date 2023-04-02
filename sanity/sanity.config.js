import {defineConfig} from 'sanity'
import {RobotIcon, RocketIcon} from '@sanity/icons'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

import {myTheme} from './theme'

const sanityStudioProjectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
const sanityStudioDataset = import.meta.env.SANITY_STUDIO_DATASET

export default defineConfig([
  {
    projectId: sanityStudioProjectId,
    dataset: sanityStudioDataset,
    name: 'production-workspace',
    basePath: '/production',
    title: 'Production Workspace',
    icon: RobotIcon,

    plugins: [
      deskTool(),
      visionTool(),
      // cloudinaryAssetSourcePlugin(), cloudinarySchemaPlugin()
    ],

    schema: {
      types: schemaTypes,
    },

    theme: myTheme,
  },

  {
    projectId: sanityStudioProjectId,
    dataset: sanityStudioDataset,
    name: 'staging-workspace',
    basePath: '/staging',
    title: 'Staging Workspace!',
    icon: RocketIcon,

    plugins: [
      deskTool(),
      visionTool(),
      // cloudinaryAssetSourcePlugin(), cloudinarySchemaPlugin()
    ],

    schema: {
      types: schemaTypes,
    },

    theme: myTheme,
  },
])
