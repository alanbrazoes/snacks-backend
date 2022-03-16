import { Request, Response } from 'express';

export const getAllSnack = async (req: Request, res: Response) => {
  const response: Array<[]> = await res.locals.all;
  return res.status(200).json(response);
};
