'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const loginModel_1 = __importDefault(require('../models/loginModel.cjs'));
exports.default = {
  signin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const { email, password } = req.body;
        yield loginModel_1.default.create({ email, password });
        return res.status(200).send('Foi');
      } catch (error) {
        return res.status(404).send(error);
      }
    });
  },
  getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const { id } = req.params;
        yield loginModel_1.default.findById(id);
        return res.status(200).send('ok');
      } catch (error) {
        return res.status(404).send('usuario não encontrado');
      }
    });
  },
};
