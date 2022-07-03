import { Request, Response } from 'express';
import rescue from 'express-rescue';

import { BurguerModel } from '@models/burguer.model';
import { getAllburguers, getBurguerById, createBurguerService } from '@services/burguer.services';

const getAllBurguer = rescue(async (_req: Request, res: Response) => {
  const burguers = await getAllburguers();
  res.status(200).json(burguers);
});

const getById = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const burguer = await getBurguerById(id);
  res.status(200).json(burguer);
});

const createBurguer = rescue(async (req: Request, res: Response) => {
  const { name, preparationTime, ingredients, price, type } = req.body;
  await createBurguerService(name, preparationTime, ingredients, price, type);
  res.status(201).json({ message: 'created burguer' });
});

const deleteBurguer = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  await BurguerModel.findByIdAndDelete(id);
  res.status(204);
});

const updateBurguer = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, preparationTime, ingredients } = req.body;
  await BurguerModel.findByIdAndUpdate(id, { name, preparationTime, ingredients });
  res.status(204).json({ message: 'updated' });
});

export { getAllBurguer, getById, createBurguer, updateBurguer, deleteBurguer };
