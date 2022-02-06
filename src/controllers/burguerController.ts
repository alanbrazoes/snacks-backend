import { Request, Response } from 'express';

import BurguerModel from '@models/BurguerModel';

export default {
  async getAllBurguer(req: Request, res: Response) {
    try {
      const data = await BurguerModel.find();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).send(error);
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const burguer = await BurguerModel.findById(id);
      return res.status(200).json(burguer);
    } catch (error) {
      return res.status(404).send(error);
    }
  },

  async createBurguer(req: Request, res: Response) {
    try {
      const { name, preparationTime, ingredients } = req.body;
      await BurguerModel.create({ name, preparationTime, ingredients });
      return res.status(201).end();
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async deleteBurguer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await BurguerModel.findByIdAndDelete(id);
      return res.status(200).end();
    } catch (error) {
      return res.status(404).send('Prato não encontrado');
    }
  },

  async updateBurguer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, preparationTime, ingredients } = req.body;
      await BurguerModel.findByIdAndUpdate(id, { name, preparationTime, ingredients });
      return res.status(200).end();
    } catch (error) {
      return res.status(404).send('Prato não encontrado');
    }
  },
};
