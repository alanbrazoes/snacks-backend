import { UserModel } from '@models/index';

const getUser = async (email: string) => {
  const user = await UserModel.findOne({ email });
  return user;
};

const signin = async (email: string, password: string) => {
  if (email || password) {
    throw { message: 'email and password is required', status: 400 };
  }

  const user = await UserModel.create({ email, password });
  return user;
};

export default { getUser, signin };
