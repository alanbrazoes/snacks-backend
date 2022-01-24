import SnacksModel from '@models/SnacksModel';
import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response) {
    try {
      const data = await SnacksModel.find();
      return res.json(data);
    } catch (error) {
      console.log(error);
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const burguer = await SnacksModel.findById(req.params.id);
      return res.json(burguer);
    } catch (error) {
      return error;
    }
  },
};
