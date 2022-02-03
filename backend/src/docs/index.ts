import { createGenre, createGenreBody } from './genre/create-genre';
import { deleteGenre } from './genre/delete-genre';
import { updateGenre } from './genre/update-genre';
import { findGenre } from './genre/find-genre';
import { genreResponseSchema } from './response';
import { findAllGenre } from './genre/findall-genre';

const apiDocumentation = {
  components: {
    schemas: {
      createGenreBody,
      genreResponse: genreResponseSchema,
    },
  },
  info: {
    contact: {
      email: 'osscameroon@gmail.com',
      name: 'OSS Cameroon',
      url: 'https://osscameroon.com',
    },
    description: 'Describe the business logic for interacting with the Camerapps website',
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
    termsOfService: 'https://camerapps.com',
    title: 'Camerapps API - Documentation',
    version: '1.3.0',
  },
  openapi: '3.0.1',
  paths: {
    '/genres': {
      get: findAllGenre,
      post: createGenre,
    },
    '/genres/{id}': {
      delete: deleteGenre,
      get: findGenre,
      put: updateGenre,
    },
  },
  servers: [
    {
      description: 'Local Server',
      url: 'http://localhost:8100/',
    },
    {
      description: 'Production Server',
      url: 'https://api.camerapps.com',
    },
  ],
  tags: [
    {
      name: 'Genre',
    },
    {
      name: 'Category',
    },
    {
      name: 'Application',
    },
  ],
};

export { apiDocumentation };