import { Router } from 'express';
import {
  createDrink,
  deleteDrink,
  getAllDrinks,
  getDrinkById,
  updateDrink,
} from '@controllers/drinkController';
import { tokenRequired } from '@middlewares/tokenRequired';

const router = Router();

router.get('/', getAllDrinks);
router.get('/:id', getDrinkById);
router.post('/create', tokenRequired, createDrink);
router.put('/update/:id', tokenRequired, updateDrink);
router.delete('/delete/:id', tokenRequired, deleteDrink);

export default router;
