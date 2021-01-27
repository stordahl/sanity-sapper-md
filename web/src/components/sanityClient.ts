import sanityClient from '@sanity/client';

// create Client interface to type check options
type Client = {
  projectId: string,
  dataset: string,
  token: string,
  useCdn: boolean
}

// create instance of sanityClient
// this is how you connect your frontend to your sanity studio
const options: Client = {
  //your project ID
  projectId: 'mndi4rf6',
  //your dataset; defaults to production
  dataset: 'production',
  token: '',
  useCdn: true
}

const client = sanityClient(options);

export { client }