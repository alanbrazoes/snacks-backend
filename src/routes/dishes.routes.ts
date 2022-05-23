import { deletePrato, updatePrato } from '../controllers/pratosController';
import { createNewPrato, getAllPratos, getPrato } from '@controllers/pratosController';
import { Router } from 'express';

const router = Router();

router.get('/', getAllPratos);
router.get('/:id', getPrato);
router.post('/create', createNewPrato);
router.put('/update/:id', updatePrato);
router.delete('/delete/:id', deletePrato);

export default router;
