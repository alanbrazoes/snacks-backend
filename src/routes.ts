import { Router } from 'express';

import snacksController from '@controllers/snacksController';
import loginController from '@controllers/loginController';

const router = Router();

// Rotas snacks
router.get('/', snacksController.index);
router.get('/burguer/:id', snacksController.getById);

router.post('/login', loginController.index);

export default router;
