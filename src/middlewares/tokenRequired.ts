import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const tokenRequired = (req: Request, _res: Response, next: NextFunction) => {
  const { auth } = req.headers;

  if (!auth) {
    throw { status: 401, message: 'Login is required' };
  }

  const token = auth;

  try {
    if (typeof token === 'string') {
      jwt.verify(token, process.env.JSON_TOKEN as string);
      return next();
    }
  } catch (error) {
    throw { status: 401, message: error };
  }
};

export default tokenRequired;
