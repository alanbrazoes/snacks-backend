import { Request, Response } from 'express';

import BurguerModel from '@models/BurguerModel';

export const getAllBurguer = async (_req: Request, res: Response) => {
  try {
    const data = await BurguerModel.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (Number(id) === 1) {
      throw { status: 400, message: 'Error' };
    }
    const burguer = await BurguerModel.findById(id);
    return res.status(200).json(burguer);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export const createBurguer = async (req: Request, res: Response) => {
  try {
    const { name, preparationTime, ingredients, price, type } = req.body;
    await BurguerModel.create({ name, preparationTime, ingredients, price, type });
    return res.status(201).json('sucess');
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const deleteBurguer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await BurguerModel.findByIdAndDelete(id);
    return res.status(200).end();
  } catch (error) {
    return res.status(404).send('Prato não encontrado');
  }
};

export const updateBurguer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, preparationTime, ingredients } = req.body;
    await BurguerModel.findByIdAndUpdate(id, { name, preparationTime, ingredients });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).send('Prato não encontrado');
  }
};
