import { Request, Response } from 'express';
import rescue from 'express-rescue';

import dishServices from '@services/dish.services';

const getAllDishes = rescue(async (_req: Request, res: Response) => {
  const data = await dishServices.getAllDishes();
  res.status(200).json(data);
});

const getDishById = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await dishServices.getDishById(id);
  res.status(200).json(data);
});

const createNewDish = rescue(async (req: Request, res: Response) => {
  const { name, price, ingredients, type } = req.body;
  const dish = await dishServices.createDish({ name, price, ingredients, type });
  res.status(201).json(dish);
});

const deleteDish = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  await dishServices.deleteDish(id);
  res.status(200).json({ message: 'deleted dish' });
});

const updateDish = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, ingredients, type } = req.body;
  const dish = await dishServices.updateDish({ name, price, ingredients, type, id });
  res.status(200).json(dish);
});

export default { getAllDishes, getDishById, createNewDish, updateDish, deleteDish };
