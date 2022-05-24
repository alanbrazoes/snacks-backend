import { Request, Response } from 'express';

import BurguerModel from '@models/burguer.model';
import burguerServices from '@services/burguer.services';

export const getAllBurguer = async (_req: Request, res: Response) => {
  try {
    const burguers = await burguerServices.getAllburguers();
    res.status(200).json(burguers);
  } catch (_error) {
    res.status(500).json({ error: 'internal error' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const burguer = await BurguerModel.findById(id);
    return res.status(200).json(burguer);
  } catch (error) {
    return res.status(404).json({ error });
  }
};

export const createBurguer = async (req: Request, res: Response) => {
  try {
    const { name, preparationTime, ingredients, price, type } = req.body;
    await BurguerModel.create({ name, preparationTime, ingredients, price, type });
    return res.status(201).json({ message: 'created product data' });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const deleteBurguer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await BurguerModel.findByIdAndDelete(id);
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ message: 'Prato não encontrado' });
  }
};

export const updateBurguer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, preparationTime, ingredients } = req.body;
    await BurguerModel.findByIdAndUpdate(id, { name, preparationTime, ingredients });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ message: 'hamburguer not found.' });
  }
};
