import { Request, Response } from 'express';

const getAllSnack = async (_req: Request, res: Response) => {
  const response: Array<[]> = await res.locals.all;
  return res.status(200).json(response);
};

export { getAllSnack };
