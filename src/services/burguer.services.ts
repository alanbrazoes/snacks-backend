import BurguerModel from '@models/burguer.model';

const getAllburguers = async () => {
  try {
    const data = await BurguerModel.find();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default { getAllburguers };
