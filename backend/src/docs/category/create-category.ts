import { genericResponseSchema, categoryResponseSchema } from '../response';

const createCategoryBody = {
  properties: {
    name: {
      description: 'Cannot be empty',
      example: 'Web Application',
      type: 'string',
    },
  },
  type: 'object',
};

const createCategory = {
  description: 'Add a new category',
  operationId: 'createCategory',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createCategoryBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: categoryResponseSchema,
        },
      },
      description: 'The category created successfully!',
    },
    '400': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The category cannot be empty.'),
        },
      },
      description: 'Fail to create the category!',
    },
  },
  security: [],
  tags: ['Category'],
};

export { createCategory, createCategoryBody };
