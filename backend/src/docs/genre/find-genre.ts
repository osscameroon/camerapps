import { genericResponseSchema, genreResponseSchema } from '../response';

const findGenre = {
  description: 'Retrieve a genre',
  operationId: 'getGenre',
  parameters: [
    {
      description: 'Id of the genre to retrieve',
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
          schema: genreResponseSchema,
        },
      },
      description: 'The genre retrieved successfully!',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: 'The genre not found',
    },
  },
  security: [],
  tags: ['Genre'],
};

export { findGenre };
