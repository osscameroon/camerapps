export type EnhancedLogger = {
  error: (output: unknown) => void;
  info: (output: unknown) => void;
};

export type UploadedFile = {
  destination: string; // ./public/uploads/files
  encoding: string; // 7bit
  fieldname: string; // files
  filename: string; // 1571575008566-files.zip
  mimetype: string; // application/zip
  originalname: string; // mergedSchema.zip
  path: string; // public/uploads/files/1571575008566-files.zip
  size: number; // 1255
};
