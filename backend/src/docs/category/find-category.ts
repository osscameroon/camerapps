import { categoryResponseSchema, genericResponseSchema } from '../response';

const findCategory = {
  description: 'Retrieve a category',
  operationId: 'getCategory',
  parameters: [
    {
      description: 'Id of the category to retrieve',
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
          schema: categoryResponseSchema,
        },
      },
      description: 'The category retrieved successfully!',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: 'The category not found',
    },
  },
  security: [],
  tags: ['Category'],
};

export { findCategory };
