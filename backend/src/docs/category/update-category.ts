import { genericResponseSchema, categoryResponseSchema } from '../response';

const updateCategory = {
  description: 'Update the category',
  operationId: 'updateCategory',
  parameters: [
    {
      description: 'Id of the category to update',
      example: 'ckz374hju00026uczhv1tctew',
      in: 'path',
      name: 'id',
      required: true,
    },
  ],
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
      description: 'The category updated successfully!',
    },
    '400': {
      content: {
        'application/json': {
          schema: genericResponseSchema('A category with the name already exists.'),
        },
      },
      description: 'A category with the name provided already exists',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: "Category to update doesn't exists!",
    },
  },
  security: [],
  tags: ['Category'],
};

export { updateCategory };
