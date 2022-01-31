import dotenv from 'dotenv';

const getEnvFile = () => {
  const env: string = process.env.NODE_ENV || 'development';

  if (env === 'production') {
    return '.env.prod';
  }
  if (env === 'test') {
    return '.env.test';
  }

  return '.env';
};

dotenv.config({ path: getEnvFile() });

const e = process.env;

export const ENV = e.NODE_ENV || 'development';
export const BASE_URL = e.BASE_URL || '';
export const APP_NAME = e.APP_NAME || '';
export const WEB_URL = e.WEB_URL || '';
export const UPLOAD_FILE_PATH = e.UPLOAD_FILE_PATH || '';
export const SERVER_PORT = parseInt(e.SERVER_PORT || '8100', 10);
