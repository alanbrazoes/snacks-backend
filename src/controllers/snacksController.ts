import SnacksModel from '@models/SnacksModel';
import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response) {
    try {
      const data = await SnacksModel.find();
      return res.json(data);
    } catch (error) {
      return res.send(error);
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const burguer = await SnacksModel.findById(id);
      return res.json(burguer);
    } catch (error) {
      return res.send(error);
    }
  },
};
