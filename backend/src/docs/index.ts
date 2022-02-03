import { createGenre, createGenreBody } from './genre/create-genre';
import { deleteGenre } from './genre/delete-genre';
import { updateGenre, updateGenreBody } from './genre/update-genre';
import { findGenre } from './genre/find-genre';
import { applicationResponseSchema, categoryResponseSchema, genreResponseSchema } from './response';
import { findAllGenre } from './genre/findall-genre';
import { createCategory, createCategoryBody } from './category/create-category';
import { deleteCategory } from './category/delete-category';
import { updateCategory, updateCategoryBody } from './category/update-category';
import { findCategory } from './category/find-category';
import { findAllCategory } from './category/findall-category';
import { createApplication, createApplicationBody } from './application/create-application';
import { findAllApplication } from './application/findall-application';
import { deleteApplication } from './application/delete-application';
import { findApplication } from './application/find-application';
import { updateApplication, updateApplicationBody } from './application/update-application';

const apiDocumentation = {
  components: {
    schemas: {
      applicationResponse: applicationResponseSchema,
      categoryResponse: categoryResponseSchema,
      createApplicationBody,
      createCategoryBody,
      createGenreBody,
      genreResponse: genreResponseSchema,
      updateApplicationBody,
      updateCategoryBody,
      updateGenreBody,
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
    '/applications': {
      get: findAllApplication,
      post: createApplication,
    },
    '/applications/{id}': {
      delete: deleteApplication,
      get: findApplication,
      put: updateApplication,
    },
    '/categories': {
      get: findAllCategory,
      post: createCategory,
    },
    '/categories/{id}': {
      delete: deleteCategory,
      get: findCategory,
      put: updateCategory,
    },
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
