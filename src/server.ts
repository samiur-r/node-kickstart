import config from '@app/config/index';
import app from './app';

app.listen(config.port, () => {
  console.log(
    `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`,
  );
});
