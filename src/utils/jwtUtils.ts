import * as jose from 'jose';

import config from '@/config';

const signJwt = async (user: { id: number; email: string }) => {
  const secret = new TextEncoder().encode(config.jwtSecret);
  const alg = 'HS256';

  const jwt = await new jose.SignJWT(user)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('60d')
    .sign(secret);

  return jwt;
};

const verifyJwt = async (token: string) => {
  const secret = new TextEncoder().encode(config.jwtSecret);
  const response = await jose.jwtVerify(token, secret);
  return response;
};

export { signJwt, verifyJwt };
