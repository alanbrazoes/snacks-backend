import { Router } from 'express';

import snacksController from '@controllers/snacksController';

const router = Router();

// Rotas snacks
router.get('/', snacksController.index);

export default router;
