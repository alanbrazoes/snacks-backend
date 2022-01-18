import { NextFunction, Request, Response } from 'express';

export default {
  teste: (req: Request, res: Response, next: NextFunction) => {
    console.log('aqui');
    return res;
    next();
  },
};
