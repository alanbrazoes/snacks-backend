import { DrinkModel } from '@models/index';

interface IDrink {
  name: string;
  price: number;
  type: string;
  id?: string;
}

const getAllDrinks = async () => {
  return await DrinkModel.find();
};

const getDrinkById = async (id: string) => {
  return await DrinkModel.findById(id);
};

const createDrink = async ({ name, price, type }: IDrink) => {
  const drink = await DrinkModel.create({ name, price, type });
  return drink;
};

const updateDrink = async ({ name, price, type, id }: IDrink) => {
  const drink = await DrinkModel.findByIdAndUpdate(id, { name, price, type });
  return drink;
};

const deleteDrink = async (id: string) => {
  await DrinkModel.findByIdAndDelete(id);
  return;
};

export default {
  getAllDrinks,
  getDrinkById,
  createDrink,
  deleteDrink,
  updateDrink,
};
