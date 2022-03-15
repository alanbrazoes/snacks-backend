import { Request, Response } from 'express';

export const getAllSnack = async (req: Request, res: Response) => {
  const response = await res.locals.all;
  return res.status(200).json(await response);
};
