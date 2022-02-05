const genericResponseSchema = (message = 'Description of the response') => ({
  properties: {
    message: {
      example: message,
      type: 'string',
    },
  },
  type: 'object',
});

const genreResponseSchema = {
  properties: {
    createdAt: {
      example: '2022-01-31T21:20:28.891Z',
      format: 'YYYY-MM-ddThh:mm:ss.sssZ',
      type: 'date',
    },
    id: {
      example: 'ckz374hju00026uczhv1tctew',
      type: 'string',
    },
    name: {
      example: 'Web Application',
      type: 'string',
    },
    updatedAt: {
      example: '2022-02-03T21:29:25.348Z',
      format: 'YYYY-MM-ddThh:mm:ss.sssZ',
      type: 'date',
    },
  },
  type: 'object',
};

const lightGenreResponseSchema = {
  properties: {
    id: {
      example: 'ckz374hju00026uczhv1tctew',
      type: 'string',
    },
    name: {
      example: 'Multiplatform',
      type: 'string',
    },
  },
  type: 'object',
};

const genreListResponseSchema = {
  description: 'List of genres retrieved successfully',
  properties: {
    data: {
      items: {
        $ref: '#/components/schemas/genreResponse',
      },
      type: 'array',
    },
  },
  type: 'object',
};

const categoryResponseSchema = {
  properties: {
    createdAt: {
      example: '2022-01-31T21:20:28.891Z',
      format: 'YYYY-MM-ddThh:mm:ss.sssZ',
      type: 'date',
    },
    id: {
      example: 'ckz374hju00026uczhv1tctew',
      type: 'string',
    },
    name: {
      example: 'Education',
      type: 'string',
    },
    updatedAt: {
      example: '2022-02-03T21:29:25.348Z',
      format: 'YYYY-MM-ddThh:mm:ss.sssZ',
      type: 'date',
    },
  },
  type: 'object',
};
const lightCategoryResponseSchema = {
  properties: {
    id: {
      example: 'ckz374hju00026uczhv1tctew',
      type: 'string',
    },
    name: {
      example: 'Entertainment',
      type: 'string',
    },
  },
  type: 'object',
};

const categoryListResponseSchema = {
  description: 'List of categories retrieved successfully',
  properties: {
    data: {
      items: {
        $ref: '#/components/schemas/categoryResponse',
      },
      type: 'array',
    },
  },
  type: 'object',
};

const applicationResponseSchema = {
  properties: {
    appstoreUrl: {
      example: 'https://store.apple.com/apps/colorful',
      type: 'string',
    },
    category: {
      $ref: '#/components/schemas/lightCategoryResponse',
      type: 'object',
    },
    categoryId: {
      example: 'ckz9zxo4w0213n2czep52wk6p',
      type: 'string',
    },
    createdAt: {
      example: '2022-02-05T15:33:36.782Z',
      format: 'YYYY-MM-ddThh:mm:ss.sssZ',
      type: 'date',
    },
    description: {
      example: 'The mobile application for streaming cameroonian song.',
      type: 'string',
    },
    dikaloUrl: {
      example: 'https://dklo.cm/colorful',
      type: 'string',
    },
    facebookUrl: {
      example: 'https://facebook.com/colorful',
      type: 'string',
    },
    genre: {
      $ref: '#/components/schemas/lightGenreResponse',
      type: 'object',
    },
    genreId: {
      example: 'ckz374hju00016ucz0ngwm4lp',
      type: 'string',
    },
    githubUrl: {
      example: 'https://github.com/colorful',
      type: 'string',
    },
    id: {
      example: 'ckz9zxo5q0223n2czr5xjljzj',
      type: 'string',
    },
    linkedinUrl: {
      example: 'https://linkedin.com/in/colorful',
      type: 'string',
    },
    logoUrl: {
      example: 'http://localhost:8100/images/1644075216729-file.png',
      type: 'string',
    },
    name: {
      example: 'Colorful',
      type: 'string',
    },
    othersUrl: {
      example: 'https://blog.colorful.com,https://instagram.com/colorful',
      type: 'string',
    },
    playstoreUrl: {
      example: 'https://play.google.com/apps/com.colorful.app',
      type: 'string',
    },
    slackUrl: {
      example: 'https://colorful.slack.com',
      type: 'string',
    },
    tags: {
      example: 'music,streaming,entertainment',
      type: 'string',
    },
    telegramUrl: {
      example: 'music,streaming,entertainment',
      type: 'string',
    },
    twitterUrl: {
      example: 'https://twwitter.com/colorful',
      type: 'string',
    },
    updatedAt: {
      example: '2022-02-05T15:33:36.783Z',
      format: 'YYYY-MM-ddThh:mm:ss.sssZ',
      type: 'date',
    },
    websiteUrl: {
      example: 'https://colorful.com',
      type: 'string',
    },
    whatsappUrl: {
      example: 'https://whatsapp.me/colorful',
      type: 'string',
    },
  },
  type: 'object',
};

const applicationListResponseSchema = {
  description: 'List of applications retrieved successfully',
  properties: {
    data: {
      items: {
        $ref: '#/components/schemas/applicationResponse',
      },
      type: 'array',
    },
  },
  type: 'object',
};

export {
  genreResponseSchema,
  genericResponseSchema,
  genreListResponseSchema,
  categoryResponseSchema,
  categoryListResponseSchema,
  applicationResponseSchema,
  applicationListResponseSchema,
  lightCategoryResponseSchema,
  lightGenreResponseSchema,
};
