import { user } from '@controllers/index';
import { Router } from 'express';

const router = Router();

router.post('/login', user.getUser);
router.post('/singin', user.signin);

export default router;
