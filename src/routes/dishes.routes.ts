import { tokenRequired } from '@middlewares/tokenRequired';
import {
  createNewDish,
  getAllDishes,
  getDish,
  deleteDish,
  updateDish,
} from '@controllers/dishController';
import { Router } from 'express';

const router = Router();

router.get('/', getAllDishes);
router.get('/:id', getDish);
router.post('/create', tokenRequired, createNewDish);
router.put('/update/:id', tokenRequired, updateDish);
router.delete('/delete/:id', tokenRequired, deleteDish);

export default router;
