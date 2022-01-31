import { Application, Category, Genre } from './model';

export type CreateCategoryInput = {
  name: string;
};

export type UpdateCategoryInput = {
  name: string;
};

export type CreateGenreInput = {
  name: string;
};

export type UpdateGenreInput = {
  name: string;
};

export type CreateApplicationInput = {
  appstoreUrl: string | null;
  categoryId?: string;
  categoryName?: string;
  description: string | null;
  dikaloUrl: string | null;
  facebookUrl: string | null;
  genreId: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  name: string;
  othersUrl: string[];
  pictureUrl: string | null;
  playstoreUrl: string | null;
  slackUrl: string | null;
  tags: string[];
  telegramUrl: string | null;
  twitterUrl: string | null;
  websiteUrl: string | null;
  whatsappUrl: string | null;
};

export type UpdateApplicationInput = {
  appstoreUrl?: string | null;
  categoryId?: string;
  description?: string | null;
  dikaloUrl?: string | null;
  facebookUrl?: string | null;
  genreId?: string;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  name?: string;
  othersUrl?: string[];
  pictureUrl?: string | null;
  playstoreUrl?: string | null;
  slackUrl?: string | null;
  tags?: string[];
  telegramUrl?: string | null;
  twitterUrl?: string | null;
  websiteUrl?: string | null;
  whatsappUrl?: string | null;
};

export type GenericResponse = {
  message: string;
};

export type DataResponse<T> = {
  data: T;
};

export type DataArrayResponse<T> = {
  data: T[];
};

export type CategoryData = DataResponse<Category>;
export type CategoryListData = DataArrayResponse<Category>;

export type GenreData = DataResponse<Genre>;
export type GenreListData = DataArrayResponse<Genre>;

export type ApplicationData = DataResponse<Application>;
export type ApplicationListData = DataArrayResponse<Application>;
