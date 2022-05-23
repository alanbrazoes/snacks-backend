import { Router } from 'express';
import {
  createDrink,
  deleteDrink,
  getAllDrinks,
  getDrink,
  updateDrink,
} from '@controllers/drinkController';

const router = Router();

router.get('/', getAllDrinks);
router.get('/:id', getDrink);
router.post('/create', createDrink);
router.put('/update/:id', updateDrink);
router.delete('/delete/:id', deleteDrink);

export default router;
