import LoginModel from '@models/loginModel';
import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      await LoginModel.create({ email, password });
      return res.send('Foi');
    } catch (error) {
      return res.send(error);
    }
  },
};
