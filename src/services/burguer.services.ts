import { BurguerModel } from '@models/burguer.model';

const getAllburguers = async () => {
  const data = await BurguerModel.find();
  return data;
};

const getBurguerById = async (id: string) => {
  const burguer = await BurguerModel.findById(id);
  return burguer;
};

const createBurguerService = async (
  name: string,
  preparationTime: number,
  ingredients: string[],
  price: number,
  type: string
) => {
  await BurguerModel.create({ name, preparationTime, ingredients, price, type });
  return true;
};

const updateBurguer = async ({ id, name, preparationTime, ingredients }: any) => {
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
