import { Router } from 'express';
import snacksControler from './controllers/snacksController';

const router = Router();

router.get('/snacks', snacksControler.index);

export default router;
