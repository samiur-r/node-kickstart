import config from '.';

const whitelist = ['https://www.yoursite.com', config.clientOrigin];

const corsOptions = {
  origin: whitelist,
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
