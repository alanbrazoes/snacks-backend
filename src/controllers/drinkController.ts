import DrinkModel from '@models/DrinksModel';
import { Request, Response } from 'express';

export default {
  async createDrink(req: Request, res: Response) {
    try {
      const { name, price } = req.body;
      const response = await DrinkModel.create({ name, price });
      res.json(response);
    } catch (error) {
      res.send(error);
    }
  },

  async getAllDrinks(req: Request, res: Response) {
    try {
      const data = await DrinkModel.find();
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
};
