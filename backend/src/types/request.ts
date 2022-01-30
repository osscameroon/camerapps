import { Category } from './model';

export type CreateCategoryInput = {
  name: string;
};

export type UpdateCategoryInput = {
  name: string;
};

export type CreateGenreInput = {
  name: string;
};

export type CreateApplicationInput = {
  category: {
    id: string | null;
    name: string;
  };
  name: string;
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
