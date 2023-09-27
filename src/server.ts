import config from '@/config';
import app from '@/app';
import logger from '@/utils/logger';
import { connectDatabase } from '@/config/db';

const startServer = async () => {
  try {
    await connectDatabase();
    logger.info('Connected to the database');

    app.listen(config.port, () => {
      logger.info(
        `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`,
      );
    });
  } catch (error) {
    logger.error('Error starting the server:', error);
    process.exit(1);
  }
};

startServer();
