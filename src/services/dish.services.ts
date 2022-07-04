import { DishesModel } from '@models/dishes.model';

interface IDish {
  name: string;
  price: number;
  ingredients: string[];
  type: string;
  id?: string;
}

const getAllDishes = async () => {
  const dishes = await DishesModel.find();
  return dishes;
};

const getDishById = async (id: string) => {
  const dish = await DishesModel.findById(id);
  return dish;
};

const createDish = async ({ name, price, ingredients, type }: IDish) => {
  const dish = await DishesModel.create({ name, price, ingredients, type });
  return dish;
};

const updateDish = async ({ name, price, ingredients, type, id }: IDish) => {
  const dish = await DishesModel.findByIdAndUpdate(id, { name, price, ingredients, type });
  return dish;
};

const deleteDish = async (id: string) => {
  await DishesModel.findByIdAndDelete(id);
  return;
};

export default { getAllDishes, getDishById, createDish, updateDish, deleteDish };
