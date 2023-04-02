import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {
  reactAppSanityProjectId,
  reactAppSanityDataset,
  reactAppSanityApiVersion,
} from './environment'

export const sanityClient = createClient({
  projectId: reactAppSanityProjectId,
  dataset: reactAppSanityDataset,
  apiVersion: reactAppSanityApiVersion,
  useCdn: true,
})

// for images in Sanity, not cloudinary
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)
