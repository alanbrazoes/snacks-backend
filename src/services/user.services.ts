import { LoginModel } from '@models/user.model';

const getUser = async (email: string) => {
  const user = await LoginModel.findOne({ email });
  return user;
};

const signin = async (email: string, password: string) => {
  const user = await LoginModel.create({ email, password });
  return user;
};

export default { getUser, signin };
