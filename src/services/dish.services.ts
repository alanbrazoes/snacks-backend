import { DishModel } from '@models/index';

interface IDish {
  name: string;
  price: number;
  ingredients: string[];
  type: string;
  id?: string;
}

const getAllDishes = async () => {
  const dishes = await DishModel.find();
  return dishes;
};

const getDishById = async (id: string) => {
  const dish = await DishModel.findById(id);
  return dish;
};

const createDish = async ({ name, price, ingredients, type }: IDish) => {
  const dish = await DishModel.create({ name, price, ingredients, type });
  return dish;
};

const updateDish = async ({ name, price, ingredients, type, id }: IDish) => {
  const dish = await DishModel.findByIdAndUpdate(id, { name, price, ingredients, type });
  return dish;
};

const deleteDish = async (id: string) => {
  await DishModel.findByIdAndDelete(id);
  return;
};

export default { getAllDishes, getDishById, createDish, updateDish, deleteDish };
