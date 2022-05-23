import tokenRequired from '@middlewares/tokenRequired';
import { deletePrato, updatePrato } from '../controllers/dishController';
import { createNewPrato, getAllPratos, getPrato } from '@controllers/dishesController';
import { Router } from 'express';

const router = Router();

router.get('/', getAllPratos);
router.get('/:id', getPrato);
router.post('/create', tokenRequired, createNewPrato);
router.put('/update/:id', tokenRequired, updatePrato);
router.delete('/delete/:id', tokenRequired, deletePrato);

export default router;
