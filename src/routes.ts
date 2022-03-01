import { Router } from 'express';

import burguerController from '@controllers/burguerController';
import loginController from '@controllers/loginController';
import drinkController from '@controllers/drinkController';
import pratosController from '@controllers/pratosController';

const router = Router();

// Burguer
const { getAllBurguer, getById, createBurguer, updateBurguer, deleteBurguer } = burguerController;

router.get('/burguers', getAllBurguer);
router.get('/burguer/:id', getById);
router.post('/create/burguer', createBurguer);
router.put('/burguer/update/:id', updateBurguer);
router.delete('/burguer/delete/:id', deleteBurguer);

// Drinks
const { getAllDrinks, getDrink, deleteDrink, createDrink, updateDrink } = drinkController;

router.get('/drinks', getAllDrinks);
router.get('/drink/:id', getDrink);
router.post('/create/drink', createDrink);
router.put('/drink/update/:id', updateDrink);
router.delete('/drink/delete/:id', deleteDrink);

// Pratos
const { getAllPratos, getPrato, deletePrato, updatePrato, createNewPrato } = pratosController;

router.get('/dishes', getAllPratos);
router.get('/dishes/:id', getPrato);
router.post('/create/dishes', createNewPrato);
router.put('/pratos/update/:id', updatePrato);
router.delete('/dishes/delete/:id', deletePrato);

// Login
const { getUser, signin } = loginController;

router.get('/user/:id', getUser);
router.post('/singin', signin);

export default router;
