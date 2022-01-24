import { Router } from 'express';

import snacksController from '@controllers/snacksController';

const router = Router();

// Rotas snacks
router.get('/', snacksController.index);
router.get('/burguer/:id', snacksController.getById);

export default router;
