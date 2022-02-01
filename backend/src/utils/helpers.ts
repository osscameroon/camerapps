export const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;

export const isMessageObject = <T extends { message: string; stack?: any }>(value: any): value is T =>
  value !== null && typeof value === 'object';

export const nullify = (str: string | null) => str || null;

export const undef = (str: string | null | undefined) => (str === undefined ? undefined : str);
