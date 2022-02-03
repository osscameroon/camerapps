import { genericResponseSchema, applicationResponseSchema } from '../response';

const findApplication = {
  description: 'Retrieve a application',
  operationId: 'getApplication',
  parameters: [
    {
      description: 'Id of the application to retrieve',
      example: 'ckz374hju00026uczhv1tctew',
      in: 'path',
      name: 'id',
      required: true,
    },
  ],
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: applicationResponseSchema,
        },
      },
      description: 'The application retrieved successfully!',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: 'The application not found',
    },
  },
  security: [],
  tags: ['Application'],
};

export { findApplication };
