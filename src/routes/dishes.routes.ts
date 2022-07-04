import { tokenRequired } from '@middlewares/tokenRequired';
import { dish } from '@controllers/index';
import { Router } from 'express';

const router = Router();

router.get('/', dish.getAllDishes);
router.get('/:id', dish.getDishById);
router.post('/create', tokenRequired, dish.createNewDish);
router.put('/update/:id', tokenRequired, dish.updateDish);
router.delete('/delete/:id', tokenRequired, dish.deleteDish);

export default router;
