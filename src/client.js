import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanity = sanityClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-01',
  useCdn: true,
  token: process.env.REACT_APP__SANITY_PROJECT_TOKEN,
});

const imgBuilder = imageUrlBuilder(sanity);

export const urlFor = (source) => imgBuilder.image(source);
