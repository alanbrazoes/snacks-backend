import PratosModel from '@models/dishes.model';
import { Request, Response } from 'express';

export const getAllPratos = async (req?: Request, res?: Response) => {
  try {
    const data = await PratosModel.find();
    return res?.status(200).json(data);
  } catch (error) {
    return res?.status(404).send('Pratos não encontrado');
  }
};

export const getPrato = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await PratosModel.findById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).send('Prato não encontrado');
  }
};

export const createNewPrato = async (req: Request, res: Response) => {
  try {
    const { name, price, ingredients, type } = req.body;
    await PratosModel.create({ name, price, ingredients, type });
    return res.status(201).end();
  } catch (error) {
    return res.status(400).send('Nao foi possivel cria um prato');
  }
};

export const deletePrato = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await PratosModel.findByIdAndDelete(id);
    return res.status(200).send('Prato deletado');
  } catch (error) {
    return res.status(404).send('Prato não encontrado');
  }
};

export const updatePrato = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, ingredients } = req.body;
    await PratosModel.findByIdAndUpdate(id, { name, price, ingredients });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).send('Prato não encontrado');
  }
};
