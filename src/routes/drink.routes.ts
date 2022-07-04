import { Router } from 'express';
import { drink } from '@controllers/index';
import { tokenRequired } from '@middlewares/tokenRequired';

const router = Router();

router.get('/', drink.getAllDrinks);
router.get('/:id', drink.getDrinkById);
router.post('/create', tokenRequired, drink.createDrink);
router.put('/update/:id', tokenRequired, drink.updateDrink);
router.delete('/delete/:id', tokenRequired, drink.deleteDrink);

export default router;
