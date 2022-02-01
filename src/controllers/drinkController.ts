import DrinkModel from '@models/DrinksModel';
import { Request, Response } from 'express';

export default {
  async createDrink(req: Request, res: Response) {
    try {
      const { name, price } = req.body;
      await DrinkModel.create({ name, price });
      return res.status(201).end();
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async getAllDrinks(req: Request, res: Response) {
    try {
      const data = await DrinkModel.find();
      return res.json(data);
    } catch (error) {
      return res.status(404).send(error);
    }
  },
};
