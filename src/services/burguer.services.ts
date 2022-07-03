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

export { getAllburguers, getBurguerById, createBurguerService };
