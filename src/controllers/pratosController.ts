import PratosModel from '@models/PratosModel';
import { Request, Response } from 'express';

export default {
  async getAllPratos(req: Request, res: Response) {
    try {
      const data = await PratosModel.find();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).send('Pratos não encontrado');
    }
  },

  async getPrato(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await PratosModel.findById(id);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).send('Prato não encontrado');
    }
  },

  async createNewPrato(req: Request, res: Response) {
    try {
      const { name, price, ingredients, type } = req.body;
      await PratosModel.create({ name, price, ingredients, type });
      return res.status(201).end();
    } catch (error) {
      return res.status(400).send('Nao foi possivel cria um prato');
    }
  },

  async deletePrato(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await PratosModel.findByIdAndDelete(id);
      return res.status(200).send('Prato deletado');
    } catch (error) {
      return res.status(404).send('Prato não encontrado');
    }
  },

  async updatePrato(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, price, ingredients } = req.body;
      await PratosModel.findByIdAndUpdate(id, { name, price, ingredients });
      return res.status(200).end();
    } catch (error) {
      return res.status(404).send('Prato não encontrado');
    }
  },
};
