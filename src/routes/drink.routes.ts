import { Router } from 'express';
import {
  createDrink,
  deleteDrink,
  getAllDrinks,
  getDrink,
  updateDrink,
} from '@controllers/drinkController';
import { tokenRequired } from '@middlewares/tokenRequired';

const router = Router();

router.get('/', getAllDrinks);
router.get('/:id', getDrink);
router.post('/create', tokenRequired, createDrink);
router.put('/update/:id', tokenRequired, updateDrink);
router.delete('/delete/:id', tokenRequired, deleteDrink);

export default router;
