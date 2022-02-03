import { genericResponseSchema, genreResponseSchema } from '../response';

const createGenreBody = {
  properties: {
    name: {
      description: 'Cannot be empty',
      example: 'Web Application',
      type: 'string',
    },
  },
  type: 'object',
};

const createGenre = {
  description: 'Add a new genre',
  operationId: 'createGenre',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createGenreBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: genreResponseSchema,
        },
      },
      description: 'The genre created successfully!',
    },
    '400': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The genre cannot be empty.'),
        },
      },
      description: 'Fail to create the genre!',
    },
  },
  security: [],
  tags: ['Genre'],
};

export { createGenre, createGenreBody };
