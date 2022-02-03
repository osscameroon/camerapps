import { applicationListResponseSchema } from '../response';

const findAllApplication = {
  description: 'Retrieve all applications',
  operationId: 'getAllApplications',
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
