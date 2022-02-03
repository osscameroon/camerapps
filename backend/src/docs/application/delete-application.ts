import { genericResponseSchema } from '../response';

const deleteApplication = {
  description: 'Delete the application',
  operationId: 'deleteApplication',
  parameters: [
    {
      description: 'Id of the application to delete',
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
          schema: genericResponseSchema('The application has been deleted successfully.'),
        },
      },
      description: 'The application deleted successfully!',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: "Application to delete doesn't exists!",
    },
  },
  security: [],
  tags: ['Application'],
};

export { deleteApplication };
