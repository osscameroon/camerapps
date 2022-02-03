import { genericResponseSchema, genreResponseSchema } from '../response';

const updateGenreBody = {
  properties: {
    name: {
      description: 'Cannot be empty',
      example: 'Web Application',
      type: 'string',
    },
  },
  type: 'object',
};

const updateGenre = {
  description: 'Update the genre',
  operationId: 'updateGenre',
  parameters: [
    {
      description: 'Id of the genre to update',
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
          $ref: '#/components/schemas/updateGenreBody',
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
      description: 'The genre updated successfully!',
    },
    '400': {
      content: {
        'application/json': {
          schema: genericResponseSchema('A genre with the name already exists.'),
        },
      },
      description: 'A genre with the name provided already exists',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: "Genre to update doesn't exists!",
    },
  },
  security: [],
  tags: ['Genre'],
};

export { updateGenre, updateGenreBody };
