import { Router } from 'express';

import snacksControler from '@controllers/snacksController';

const router = Router();

// Rotas snacks
router.get('/snacks', snacksControler.index);

export default router;
