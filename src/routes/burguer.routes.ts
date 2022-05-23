import {
  createBurguer,
  deleteBurguer,
  getAllBurguer,
  getById,
  updateBurguer,
} from '@controllers/burguerController';
import tokenRequired from '@middlewares/tokenRequired';
import { Router } from 'express';

const router = Router();

router.get('/', getAllBurguer);
router.get('/:id', getById);
router.post('/create', tokenRequired, createBurguer);
router.put('/update/:id', updateBurguer);
router.delete('/delete/:id', deleteBurguer);

export default router;
