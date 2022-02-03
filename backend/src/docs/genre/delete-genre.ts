import { genericResponseSchema } from '../response';

const deleteGenre = {
  description: 'Delete the genre',
  operationId: 'deleteGenre',
  parameters: [
    {
      description: 'Id of the genre to delete',
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
          schema: genericResponseSchema('The genre has been deleted successfully.'),
        },
      },
      description: 'The genre deleted successfully!',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: "Genre to delete doesn't exists!",
    },
  },
  security: [],
  tags: ['Genre'],
};

export { deleteGenre };
