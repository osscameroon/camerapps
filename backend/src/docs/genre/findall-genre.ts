import { genreListResponseSchema } from '../response';

const findAllGenre = {
  description: 'Retrieve all genres',
  operationId: 'getAllGenres',
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: genreListResponseSchema,
        },
      },
      description: 'The genre retrieved successfully!',
    },
  },
  security: [],
  tags: ['Genre'],
};

export { findAllGenre };
