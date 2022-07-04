import { Request, Response } from 'express';
import allSnacksServices from '@services/allSnacks.services';
import rescue from 'express-rescue';

const getAllSnack = rescue(async (_req: Request, res: Response) => {
  const allSnacks = await allSnacksServices.getAllSnacks();
  console.log(allSnacks);
  res.status(200).json(allSnacks);
});

export default { getAllSnack };
