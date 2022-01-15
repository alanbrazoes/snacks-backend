import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response) {
    return res.render('index');
  },
  snacks(req: Request, res: Response) {
    return res.send('Olá mundo');
  },
};
