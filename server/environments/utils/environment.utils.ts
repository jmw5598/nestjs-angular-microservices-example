import * as dotenv from 'dotenv';
import * as path from 'path';

export const loadEnvironmentVariables = (dirPath: string) => {
  dotenv.config({
    path: path.resolve(`${dirPath}/${process.env.NODE_ENV || 'dev'}.env`)
  });
};
