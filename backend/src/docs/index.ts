import { sendContactEmail, registrationStat } from './common';
import { loginUser } from './auth';

const apiDocumentation = {
  components: {
    schemas: {
      LoginUserBody: {
        properties: {
          email: {
            example: 'user@email.com',
            type: 'string',
          },
          password: {
            example: 'Z31x3267&-ye87',
            type: 'string',
          },
        },
        type: 'object',
      },
      SendEmailContactBody: {
        properties: {
          email: {
            example: 'john.doe@example.com',
            type: 'string',
          },
          message: {
            description: "A message of at most 1000 characters describing the user's needs",
            example: 'Lorem ipsum dolor ancitus valar morghulis domagheris',
            type: 'string',
          },
          name: {
            example: 'John DOE',
            type: 'string',
          },
          phone: {
            example: '+33669803433',
            type: 'string',
          },
          subject: {
            example: 'Besoin de sponsoring',
            type: 'string',
          },
        },
        type: 'object',
      },
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
    '/auth/login': {
      post: loginUser,
    },
    '/contact': {
      post: sendContactEmail,
    },
    '/registration-stat': {
      get: registrationStat,
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
