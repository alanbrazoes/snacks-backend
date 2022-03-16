import { Request, Response, NextFunction } from 'express';
import burguer from '@models/BurguerModel';
import drink from '@models/DrinksModel';
import pratos from '@models/PratosModel';

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
