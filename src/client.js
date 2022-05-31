import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '6p7ufgol',
  dataset: 'production',
  apiVersion: '2022-05-31',
  useCdn: true,
  token: 'sk4Mxp6czz5jM0UUSqzmVrN3nesryBXcFfcVAUC609S6xqzzyZPJGrlmq3QEAMJzDdRrImwTqyjYm3pnkgRFwceJ0m3rThcp4drmghT3uPpuW4APyVUlmT5gExxSfURNPpdfN45MIs0q6ovCr1afaSLyPQLn8OUxq7Pd2cNG00KDuirUhWH9',
});

const builder = imageUrlBuilder(client);
 
export const urlFor = (source) => builder.image(source);
