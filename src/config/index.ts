import dotenv from 'dotenv';

dotenv.config();

const config = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 5000,
  clientOrigin: process.env.CLIENT_ORIGIN ?? 'http://localhost:3000',
  jwtSecret: process.env.JWT_SECRET ?? 'your_jwt_secret',
  cookieSecret: process.env.COOKIE_SECRET ?? 'your_cookie_secret',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    sameSite: 'strict',
    maxAge: 60.88 * 86400000, // 2 months in milliseconds
  },
};

export default config;
