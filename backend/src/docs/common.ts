const sendContactEmail = {
  tags: ['Common'],
  description: 'Send email to LOF Admin with the message of a visitor',
  operationId: 'sendContactEmail',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/SendEmailContactBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'Email send successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Email sent successfully!',
              },
            },
          },
        },
      },
    },
  },
};

const registrationStat = {
  tags: ['Common'],
  description: 'Get registration statistic on LOF web application',
  operationId: 'registrationStat',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Registration statistic retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              association: {
                type: 'integer',
                example: 45,
              },
              member: {
                type: 'integer',
                example: 250,
              },
              coefficient: {
                type: 'integer',
                example: 40.6,
              },
            },
          },
        },
      },
    },
  },
};

export { sendContactEmail, registrationStat };
