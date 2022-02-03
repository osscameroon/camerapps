import { categoryListResponseSchema } from '../response';

const findAllCategory = {
  description: 'Retrieve all categories',
  operationId: 'getAllCategories',
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: categoryListResponseSchema,
        },
      },
      description: 'The category retrieved successfully!',
    },
  },
  security: [],
  tags: ['Category'],
};

export { findAllCategory };
