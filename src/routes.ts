import { Router } from 'express';

import burguerController from '@controllers/burguerController';
import loginController from '@controllers/loginController';
import drinkController from '@controllers/drinkController';

const router = Router();

// Burguer
router.get('/burguers', burguerController.index);
router.get('/burguer/:id', burguerController.getById);

router.post('/createburguer', burguerController.createBurguer);

// Drinks
router.post('/createdrink', drinkController.createDrink);
router.get('/drinks', drinkController.getAllDrinks);

// Login
router.post('/login', loginController.index);

export default router;
