'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const DrinkSchema = new mongoose_1.default.Schema({
  name: String,
  price: Number,
  type: String,
});
const DrinkModel = mongoose_1.default.model('drink', DrinkSchema);
exports.default = DrinkModel;
