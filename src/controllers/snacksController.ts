import SnacksModel from '@models/SnacksModel';
import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response) {
    try {
      const dados = await SnacksModel.find();
      return res.json(dados);
    } catch (error) {
      console.log(error);
    }
  },
};
