"use strict";
exports.__esModule = true;
var express_1 = require("express");
var burguerController_1 = require("@controllers/burguerController");
var loginController_1 = require("@controllers/loginController");
var drinkController_1 = require("@controllers/drinkController");
var pratosController_1 = require("@controllers/pratosController");
var router = (0, express_1.Router)();
// Burguer
var getAllBurguer = burguerController_1["default"].getAllBurguer, getById = burguerController_1["default"].getById, createBurguer = burguerController_1["default"].createBurguer, updateBurguer = burguerController_1["default"].updateBurguer, deleteBurguer = burguerController_1["default"].deleteBurguer;
router.get('/burguers', getAllBurguer);
router.get('/burguer/:id', getById);
router.post('/create/burguer', createBurguer);
router.put('/burguer/update/:id', updateBurguer);
router["delete"]('/burguer/delete/:id', deleteBurguer);
// Drinks
var getAllDrinks = drinkController_1["default"].getAllDrinks, getDrink = drinkController_1["default"].getDrink, deleteDrink = drinkController_1["default"].deleteDrink, createDrink = drinkController_1["default"].createDrink, updateDrink = drinkController_1["default"].updateDrink;
router.get('/drinks', getAllDrinks);
router.get('/drink/:id', getDrink);
router.post('/create/drink', createDrink);
router.put('/drink/update/:id', updateDrink);
router["delete"]('/drink/delete/:id', deleteDrink);
// Pratos
var getAllPratos = pratosController_1["default"].getAllPratos, getPrato = pratosController_1["default"].getPrato, deletePrato = pratosController_1["default"].deletePrato, updatePrato = pratosController_1["default"].updatePrato, createNewPrato = pratosController_1["default"].createNewPrato;
router.get('/dishes', getAllPratos);
router.get('/dishes/:id', getPrato);
router.post('/create/dishes', createNewPrato);
router.put('/pratos/update/:id', updatePrato);
router["delete"]('/dishes/delete/:id', deletePrato);
// Login
var getUser = loginController_1["default"].getUser, signin = loginController_1["default"].signin;
router.get('/user/:id', getUser);
router.post('/singin', signin);
exports["default"] = router;
