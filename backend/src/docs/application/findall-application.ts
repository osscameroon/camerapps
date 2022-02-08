import { applicationListResponseSchema } from '../response';

const findAllApplication = {
  description: 'Retrieve all applications',
  operationId: 'getAllApplications',
  parameters: [
    {
      description: 'The token where to start retrieving the data',
      example: '1644272953769',
      in: 'query',
      name: 'nextToken',
      required: false,
    },
  ],
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: applicationListResponseSchema,
        },
      },
      description: 'The application retrieved successfully!',
    },
  },
  security: [],
  tags: ['Application'],
};

export { findAllApplication };
