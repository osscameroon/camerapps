export const RESOURCE_NOT_FOUND = (model: string, id: string) => `The resource ${model} with id "${id}" not found.`;
export const INTERNAL_SERVER_ERROR = 'Internal server error.';

export const CATEGORY_ALREADY_EXIST = (name: string) => `A category with the name "${name}" already exists.`;
export const CATEGORY_DELETED = 'The category has been deleted successfully!';

export const GENRE_ALREADY_EXIST = (name: string) => `A genre with the name "${name}" already exists.`;
export const GENRE_DELETED = 'The genre has been deleted successfully!';

export const APPLICATION_ALREADY_EXIST = (name: string) => `An application with the name "${name}" already exists.`;
export const APPLICATION_DELETED = 'The genre has been deleted successfully!';
