import { Router } from 'express';

import home from '@controllers/homeController';
import snacksControler from '@controllers/snacksController';

const router = Router();

router.get('/', home.index);
router.post('/', home.snacks);

router.get('/snacks', snacksControler.index);

export default router;
