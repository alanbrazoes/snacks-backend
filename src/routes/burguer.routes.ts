import { burguer } from '@controllers/index';
import { tokenRequired } from '@middlewares/tokenRequired';
import { Router } from 'express';

const router = Router();

router.get('/', burguer.getAllBurguer);
router.get('/:id', burguer.getById);
router.post('/create', tokenRequired, burguer.createBurguer);
router.put('/update/:id', tokenRequired, burguer.updateBurguer);
router.delete('/delete/:id', tokenRequired, burguer.deleteBurguer);

export default router;
