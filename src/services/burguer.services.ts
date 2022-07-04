import { BurguerModel } from '@models/index';

interface IBurguer {
  name: string;
  preparationTime: number;
  ingredients: string[];
  price: number;
  type: string;
  id?: string;
}

const getAllburguers = async () => {
  const data = await BurguerModel.find();
  return data;
};

const getBurguerById = async (id: string) => {
  const burguer = await BurguerModel.findById(id);
  return burguer;
};

const createBurguerService = async ({
  name,
  preparationTime,
  ingredients,
  price,
  type,
}: IBurguer) => {
  await BurguerModel.create({ name, preparationTime, ingredients, price, type });
  return true;
};

const updateBurguer = async ({ id, name, preparationTime, ingredients }: IBurguer) => {
  await BurguerModel.findByIdAndUpdate(id, { name, preparationTime, ingredients });
  return true;
};

const deleteBurguer = async (id: string) => {
  await BurguerModel.findByIdAndDelete(id);
  return true;
};

export default {
  getAllburguers,
  getBurguerById,
  createBurguerService,
  deleteBurguer,
  updateBurguer,
};
