import { BurguerModel, DishModel, DrinkModel } from '@models/index';

const models = [BurguerModel, DishModel, DrinkModel];

const getAllSnacks = async () => {
  let snacks = {};

  const getSnacks = models.map(async (model) => {
    try {
      const data = await model.find();
      snacks = { ...snacks, [model.modelName]: data };
    } catch (error) {
      return [];
    }
  });

  await Promise.all(getSnacks);
  return snacks;
};

export default { getAllSnacks };
