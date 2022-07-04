import { Request, Response, NextFunction } from 'express';
import { BurguerModel } from '@models/burguer.model';
import { DrinkModel } from '@models/drinks.model';
import { PratosModel } from '@models/dishes.model';

const models = [BurguerModel, PratosModel, DrinkModel];

const getAllSnacks = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    let snack = {};
    const getSnacks = models.map(async (model) => {
      try {
        const data = await model.find();
        snack = { ...snack, [model.modelName]: data };
      } catch (error) {
        return [];
      }
    });

    await Promise.all(getSnacks);
    res.locals.all = snack;
    next();
  } catch (error) {
    return res.status(500).json({ error: 'internal error' });
  }
};

export default getAllSnacks;
