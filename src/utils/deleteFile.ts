import * as fs from 'fs';
import logger from '@/utils/logger';

export const deleteFile = (filePath: string) => {
  fs.unlink(filePath, (err: NodeJS.ErrnoException | null) => {
    if (err) {
      logger.error(err);
      return;
    }
    logger.info(`${filePath} was deleted`);
  });
};
