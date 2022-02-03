import { genericResponseSchema, applicationResponseSchema } from '../response';

const createApplicationBody = {
  properties: {
    name: {
      description: 'Cannot be empty',
      example: 'Web Application',
      type: 'string',
    },
  },
  type: 'object',
};

const createApplication = {
  description: 'Add a new application',
  operationId: 'createApplication',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createApplicationBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: applicationResponseSchema,
        },
      },
      description: 'The application created successfully!',
    },
    '400': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The application cannot be empty.'),
        },
      },
      description: 'Fail to create the application!',
    },
  },
  security: [],
  tags: ['Application'],
};

export { createApplication, createApplicationBody };
