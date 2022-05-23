import PratosModel from '@models/dishes.model';
import { Request, Response } from 'express';

export const getAllDishes = async (_req: Request, res: Response) => {
  try {
    const data = await PratosModel.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: 'dishe not found' });
  }
};

export const getDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await PratosModel.findById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: 'dishe not found' });
  }
};

export const createNewDish = async (req: Request, res: Response) => {
  try {
    const { name, price, ingredients, type } = req.body;
    await PratosModel.create({ name, price, ingredients, type });
    return res.status(201).end();
  } catch (error) {
    return res.status(400).json({ message: 'could not create a dish' });
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await PratosModel.findByIdAndDelete(id);
    return res.status(200).json({ message: 'deleted dish' });
  } catch (error) {
    return res.status(404).json({ message: 'dish not found' });
  }
};

export const updateDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, ingredients } = req.body;
    await PratosModel.findByIdAndUpdate(id, { name, price, ingredients });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ message: 'dish not found' });
  }
};
