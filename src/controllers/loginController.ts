import LoginModel from '@models/loginModel';

import { Request, Response } from 'express';

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    await LoginModel.create({ email, password });
    return res.status(200).send('Foi');
  } catch (error) {
    return res.status(404).send(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await LoginModel.findById(id);
    return res.status(200).send('ok');
  } catch (error) {
    return res.status(404).send('usuario não encontrado');
  }
};
