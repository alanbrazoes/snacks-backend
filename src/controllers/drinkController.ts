import drinkServices from '@services/drink.services';
import { Request, Response } from 'express';
import rescue from 'express-rescue';

const getAllDrinks = rescue(async (_req: Request, res: Response) => {
  const drinks = await drinkServices.getAllDrinks();
  res.status(200).json(drinks);
});

const getDrinkById = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await drinkServices.getDrinkById(id);
  res.status(200).json(data);
});

const createDrink = rescue(async (req: Request, res: Response) => {
  const { name, price, type } = req.body;
  const drink = await drinkServices.createDrink({ name, price, type });
  res.status(201).json(drink);
});

const deleteDrink = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  await drinkServices.deleteDrink(id);
  res.status(200).end();
});

const updateDrink = rescue(async (req: Request, res: Response) => {
  const { name, price, type } = req.body;
  const { id } = req.params;
  const drink = await drinkServices.updateDrink({ name, price, type, id });
  res.status(200).json(drink);
});

export { getAllDrinks, getDrinkById, createDrink, updateDrink, deleteDrink };
