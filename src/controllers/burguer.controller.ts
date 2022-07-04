import { Request, Response } from 'express';
import rescue from 'express-rescue';

import BurguerServices from '@services/burguer.services';

const getAllBurguer = rescue(async (_req: Request, res: Response) => {
  const burguers = await BurguerServices.getAllburguers();
  res.status(200).json(burguers);
});

const getById = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const burguer = await BurguerServices.getBurguerById(id);
  res.status(200).json(burguer);
});

const createBurguer = rescue(async (req: Request, res: Response) => {
  const { name, preparationTime, ingredients, price, type } = req.body;
  await BurguerServices.createBurguerService({ name, preparationTime, ingredients, price, type });
  res.status(201).json({ message: 'created burguer' });
});

const deleteBurguer = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  await BurguerServices.deleteBurguer(id);
  res.status(204).json();
});

const updateBurguer = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, preparationTime, ingredients, price, type } = req.body;
  await BurguerServices.updateBurguer({ id, name, preparationTime, ingredients, type, price });
  res.status(204).json({ message: 'updated' });
});

export default { getAllBurguer, getById, createBurguer, updateBurguer, deleteBurguer };
