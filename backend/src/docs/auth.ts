const loginUser = {
  tags: ['Authentication'],
  description: 'Authenticate an user',
  operationId: 'loginUser',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/LoginUserBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'User authenticated successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              token: {
                type: 'string',
                example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.kVJyBxTbSGwn9y4qOA2BmzXYi3EedxJ9rqbEnoiZxb8',
              },
              expiresIn: {
                type: 'number',
                example: 604800,
              },
            },
          },
        },
      },
    },
    '400': {
      description: 'Fail to authenticate the user!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Login failed: Invalid credentials',
              },
            },
          },
        },
      },
    },
  },
};

export { loginUser };
