import { getUser, signin } from '@controllers/loginController';
import { Router } from 'express';

const router = Router();

router.post('/login', getUser);
router.post('/singin', signin);

export default router;
