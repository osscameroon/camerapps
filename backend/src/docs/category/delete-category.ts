import { genericResponseSchema } from '../response';

const deleteCategory = {
  description: 'Delete the category',
  operationId: 'deleteCategory',
  parameters: [
    {
      description: 'Id of the category to delete',
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
          schema: genericResponseSchema('The category has been deleted successfully.'),
        },
      },
      description: 'The category deleted successfully!',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: "Category to delete doesn't exists!",
    },
  },
  security: [],
  tags: ['Category'],
};

export { deleteCategory };
