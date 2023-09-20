import { NextFunction, Request, Response } from 'express';

import { verifyJwt } from '@/utils/jwtUtils';
import ErrorHandler from '@/utils/ErrorHandler';

export const isUserAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { signedCookies = {} } = req;
  const { token } = signedCookies;

  try {
    const user = await verifyJwt(token);
    res.locals.user = user;
    next();
  } catch (err) {
    next(new ErrorHandler(401, 'You are not authorized'));
  }
};

export const isAdminAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { signedCookies = {} } = req;
  const { token } = signedCookies;

  try {
    if (!token) throw new ErrorHandler(401, 'You are not authorized');

    const user = await verifyJwt(token);
    res.locals.user = user;
    if (!user.payload?.admin_status)
      throw new ErrorHandler(401, 'You are not authorized');
    next();
  } catch (err) {
    next(err);
  }
};
