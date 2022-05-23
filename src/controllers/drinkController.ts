import DrinkModel from '@models/drinks.model';
import { Request, Response } from 'express';

export const createDrink = async (req: Request, res: Response) => {
  try {
    const { name, price, type } = req.body;
    await DrinkModel.create({ name, price, type });
    return res.status(201).end();
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getAllDrinks = async (req: Request, res: Response) => {
  try {
    const data = await DrinkModel.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ error });
  }
};

export const getDrink = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await DrinkModel.findById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ error });
  }
};

export const deleteDrink = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await DrinkModel.findByIdAndDelete(id);
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ message: 'drink not found' });
  }
};

export const updateDrink = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    await DrinkModel.findByIdAndUpdate(id, { name, price });
    return res.status(200).json({ message: 'ok' });
  } catch (error) {
    return res.status(404).json({ message: 'drink not found' });
  }
};
