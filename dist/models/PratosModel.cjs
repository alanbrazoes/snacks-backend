'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const DishesScheema = new mongoose_1.default.Schema({
  name: String,
  price: Number,
  ingredients: Array,
  type: String,
});
const PratosModel = mongoose_1.default.model('dishes', DishesScheema);
exports.default = PratosModel;
