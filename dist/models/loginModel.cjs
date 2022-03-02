'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const LoginSchema = new mongoose_1.default.Schema({
  email: String,
  password: String,
});
const LoginModel = mongoose_1.default.model('users', LoginSchema);
exports.default = LoginModel;
