import { BurguerModel, DishModel, DrinkModel } from '@models/index';

const models = [BurguerModel, DishModel, DrinkModel];

const getAllSnacks = async () => {
  const getSnacks = models.map(async (model) => {
    try {
      const data = await model.find();
      return { [model.modelName]: data };
    } catch (error) {
      return [];
    }
  });

  const snacks = await Promise.all(getSnacks);
  return snacks;
};

export default { getAllSnacks };
