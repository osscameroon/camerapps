import { genericResponseSchema, applicationResponseSchema } from '../response';

const updateApplication = {
  description: 'Update the application',
  operationId: 'updateApplication',
  parameters: [
    {
      description: 'Id of the application to update',
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
          $ref: '#/components/schemas/createApplicationBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: applicationResponseSchema,
        },
      },
      description: 'The application updated successfully!',
    },
    '400': {
      content: {
        'application/json': {
          schema: genericResponseSchema('A application with the name already exists.'),
        },
      },
      description: 'A application with the name provided already exists',
    },
    '404': {
      content: {
        'application/json': {
          schema: genericResponseSchema('The resource with id not found.'),
        },
      },
      description: "Application to update doesn't exists!",
    },
    '422': {
      content: {
        'application/json': {
          schema: genericResponseSchema("The category with id doesn't exists."),
        },
      },
      description: 'The category Id or the genre Id provided not found.',
    },
  },
  security: [],
  tags: ['Application'],
};

export { updateApplication };
