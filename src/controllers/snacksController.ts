import { imgXtudo, imgXbacon } from '@img/img';
import { Response, Request } from 'express';

interface IList {
  name: string;
  preparationTime: number;
  Ingredients: string[];
  images: string;
}

const hamburguers: IList[] = [
  {
    name: 'X-Bacon',
    preparationTime: 40,
    Ingredients: ['Pão', 'Bacon', 'Alface', 'ovo'],
    images: imgXbacon,
  },
  {
    name: 'X-Tudo',
    preparationTime: 30,
    Ingredients: ['Pão', 'Alface', 'Milho', 'Carne bovina'],
    images: imgXtudo,
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(hamburguers);
  },
};
