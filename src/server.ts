import config from '@/config';
import app from './app';
import logger from './utils/logger';

app.listen(config.port, () => {
  logger.info(
    `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`,
  );
});
