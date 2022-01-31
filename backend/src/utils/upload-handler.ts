import * as path from 'path';
import { Request, Response } from 'express';
import multer from 'multer';

import { UPLOAD_FILE_PATH } from '../core/config';
import { PICTURE_UPLOAD_INVALID_FILE_TYPE } from './constants';

const storageFile: multer.StorageEngine = multer.diskStorage({
  destination: UPLOAD_FILE_PATH,
  filename(req: Express.Request, file: Express.Multer.File, fn: (error: Error | null, filename: string) => void): void {
    fn(null, `${new Date().getTime().toString()}-${file.fieldname}${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({
  fileFilter(req, file, callback) {
    const extension = ['.jpg', '.jpeg', '.png'].indexOf(path.extname(file.originalname).toLowerCase()) >= 0;
    const mimeType = ['image/jpg', 'image/jpeg', 'image/png'].indexOf(file.mimetype) >= 0;

    if (extension && mimeType) {
      return callback(null, true);
    }
    callback(new Error(PICTURE_UPLOAD_INVALID_FILE_TYPE));
  },
  limits: { fileSize: 2 * 1024 * 1024 },
  storage: storageFile,
}).single('file');

export const pictureUploadHandler = async (req: Request, res: Response): Promise<any> => {
  return new Promise((resolve, reject): void => {
    uploadFile(req, res, (error) => {
      if (error) {
        reject(error);
      }

      resolve({ body: req.body, logo: req.file });
    });
  });
};
