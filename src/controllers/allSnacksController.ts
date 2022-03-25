import { Request, Response } from 'express';

export const getAllSnack = async (req: Request, res: Response) => {
  // const response: Array<[]> = await res.locals.all;
  console.log('aqui');
  return res.status(200).send('response');
};
