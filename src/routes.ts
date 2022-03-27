import { Router } from 'express';

import {
  getAllBurguer,
  getById,
  createBurguer,
  updateBurguer,
  deleteBurguer,
} from '@controllers/burguerController';
import { getUser, signin } from '@controllers/loginController';
import {
  getAllDrinks,
  getDrink,
  deleteDrink,
  createDrink,
  updateDrink,
} from '@controllers/drinkController';
import {
  getAllPratos,
  getPrato,
  deletePrato,
  updatePrato,
  createNewPrato,
} from '@controllers/pratosController';
import getAllSnacks from '@middlewares/getAllSnacks';
import { getAllSnack } from '@controllers/allSnacksController';
import tokenRequired from '@middlewares/tokenRequired';

const router = Router();

router.get('/', getAllSnacks, getAllSnack);

router.get('/burguers', getAllBurguer);
router.get('/burguer/:id', getById);
router.post('/create/burguer', tokenRequired, createBurguer);
router.put('/burguer/update/:id', updateBurguer);
router.delete('/burguer/delete/:id', deleteBurguer);

// Drinks
router.get('/drinks', getAllDrinks);
router.get('/drink/:id', getDrink);
router.post('/create/drink', createDrink);
router.put('/drink/update/:id', updateDrink);
router.delete('/drink/delete/:id', deleteDrink);

// Pratos
router.get('/dishes', getAllPratos);
router.get('/dishes/:id', getPrato);
router.post('/create/dishes', createNewPrato);
router.put('/pratos/update/:id', updatePrato);
router.delete('/dishes/delete/:id', deletePrato);

// Login
router.get('/login', getUser);
router.post('/singin', signin);

export default router;
