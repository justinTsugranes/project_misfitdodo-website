import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Create a new instance of the Sanity client
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // The project ID from the .env file
  dataset: 'production', // The dataset to use
  apiVersion: '2022-01-10', // The version of the API to use
  useCdn: true, // Use the Sanity CDN for faster image delivery
  token: process.env.REACT_APP_SANITY_TOKEN, // The token from the .env file
})

// Create a new instance of the Sanity image URL builder
const builder = imageUrlBuilder(client)

// Create a new function that returns an image URL based on the given source
export const urlFor = (source) => builder.image(source)
