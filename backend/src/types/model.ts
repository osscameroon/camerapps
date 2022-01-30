/**
 * Model Genre
 *
 */
export type Genre = {
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};

/**
 * Model Category
 *
 */
export type Category = {
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};

/**
 * Model Application
 *
 */
export type Application = {
  appstoreUrl: string | null;
  categoryId: string;
  createdAt: Date;
  description: string | null;
  dikaloUrl: string | null;
  facebookUrl: string | null;
  genreId: string;
  githubUrl: string | null;
  id: string;
  linkedinUrl: string | null;
  logo: string | null;
  name: string;
  othersUrl: string[];
  pictureUrl: string | null;
  playstoreUrl: string | null;
  slackUrl: string | null;
  tags: string[];
  telegramUrl: string | null;
  twitterUrl: string | null;
  updatedAt: Date;
  websiteUrl: string | null;
  whatsappUrl: string | null;
};
