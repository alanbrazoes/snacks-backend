import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const tokenRequired = (req: Request, res: Response, next: NextFunction) => {
  const { auth } = req.headers;

  if (!auth) {
    return res.status(401).json({
      error: ['Login is required'],
    });
  }

  const token = auth;

  try {
    jwt.verify(token, process.env.JSON_TOKEN as string);
    return next();
  } catch (error) {
    return res.status(401).json({
      error: ['token expired or invalid'],
    });
  }
};

export default tokenRequired;
