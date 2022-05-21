import { Request, Response, NextFunction } from 'express';

interface IError {
  status: number;
  message: string;
}

export const error = (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status).json(err.message);
};
