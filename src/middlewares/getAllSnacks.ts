import { Request, Response, NextFunction } from 'express';
import BurguerModel from '@models/BurguerModel';
import DrinkModel from '@models/DrinksModel';
import PratosModel from '@models/PratosModel';

const models = [BurguerModel, PratosModel, DrinkModel];

const getAllSnacks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getSnacks = models.map(async (model) => {
      try {
        const data = await model.find();
        return data;
      } catch (error) {
        return [];
      }
    });

    const response = await Promise.all(getSnacks);

    res.locals.all = response;
    next();
  } catch (error) {
    return res.send(error);
  }
};

export default getAllSnacks;
