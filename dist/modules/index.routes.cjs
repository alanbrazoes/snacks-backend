'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = require('express');
const burguerController_1 = __importDefault(require('../controllers/burguerController.cjs'));
const loginController_1 = __importDefault(require('../controllers/loginController.cjs'));
const drinkController_1 = __importDefault(require('../controllers/drinkController.cjs'));
const pratosController_1 = __importDefault(require('../controllers/pratosController.cjs'));
const router = (0, express_1.Router)();
// Burguer
const { getAllBurguer, getById, createBurguer, updateBurguer, deleteBurguer } =
  burguerController_1.default;
router.get('/burguers', getAllBurguer);
router.get('/burguer/:id', getById);
router.post('/create/burguer', createBurguer);
router.put('/burguer/update/:id', updateBurguer);
router.delete('/burguer/delete/:id', deleteBurguer);
// Drinks
const { getAllDrinks, getDrink, deleteDrink, createDrink, updateDrink } = drinkController_1.default;
router.get('/drinks', getAllDrinks);
router.get('/drink/:id', getDrink);
router.post('/create/drink', createDrink);
router.put('/drink/update/:id', updateDrink);
router.delete('/drink/delete/:id', deleteDrink);
// Pratos
const { getAllPratos, getPrato, deletePrato, updatePrato, createNewPrato } =
  pratosController_1.default;
router.get('/dishes', getAllPratos);
router.get('/dishes/:id', getPrato);
router.post('/create/dishes', createNewPrato);
router.put('/pratos/update/:id', updatePrato);
router.delete('/dishes/delete/:id', deletePrato);
// Login
const { getUser, signin } = loginController_1.default;
router.get('/user/:id', getUser);
router.post('/singin', signin);
exports.default = router;
