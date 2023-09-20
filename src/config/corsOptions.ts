const whitelist = [
  'https://www.yoursite.com',
  'http://127.0.0.1:3000',
  'http://localhost:3000',
];

const corsOptions = {
  origin: whitelist,
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
