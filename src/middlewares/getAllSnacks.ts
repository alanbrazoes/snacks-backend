import { Request, Response, NextFunction } from 'express';
import burguer from '@models/burguer.model';
import drink from '@models/drinks.model';
import pratos from '@models/dishes.model';

const models = [burguer, pratos, drink];

const getAllSnacks = async (req: Request, res: Response, next: NextFunction) => {
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
    return res.send(error);
  }
};

export default getAllSnacks;
