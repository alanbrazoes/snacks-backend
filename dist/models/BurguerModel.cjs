'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const BurguerSchema = new mongoose_1.default.Schema({
  name: String,
  preparationTime: Number,
  ingredients: Array,
  price: Number,
  type: String,
});
const BurguerModel = mongoose_1.default.model('hamburguers', BurguerSchema);
exports.default = BurguerModel;
