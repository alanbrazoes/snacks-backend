import { BurguerModel } from '@models/burguer.model';

const getAllburguers = async () => {
  try {
    const data = await BurguerModel.find();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getBurguerById = async (id: string) => {
  try {
    const burguer = await BurguerModel.findById(id);
    return burguer;
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getAllburguers, getBurguerById };
